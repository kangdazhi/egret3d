namespace RES.processor {

    // 按照加载优先级排序
    export enum AssetTypeEnum {
        Unknown,
        Auto,
        Bundle,
        CompressBundle,
        GLVertexShader,
        GLFragmentShader,
        Shader,
        Texture,
        TextureDesc,
        Material,
        GLTF,
        GLTFBinary,
        Prefab,
        Scene,
        TextAsset,
        Atlas,
        Font,
        PackBin,
        PackTxt,
        pathAsset,
        PVR,
        Sound
    }

    const typeMap = {
        ".vs.glsl": AssetTypeEnum.GLVertexShader,
        ".assetbundle.json": AssetTypeEnum.Bundle,
        ".fs.glsl": AssetTypeEnum.GLFragmentShader,
        ".shader.json": AssetTypeEnum.Shader,
        ".png": AssetTypeEnum.Texture,
        ".jpg": AssetTypeEnum.Texture,
        ".pvr.bin": AssetTypeEnum.PVR,
        ".pvr": AssetTypeEnum.PVR,
        ".imgdesc.json": AssetTypeEnum.TextureDesc,
        ".mat.json": AssetTypeEnum.Material,
        ".gltf.json": AssetTypeEnum.GLTF,
        ".gltf.bin": AssetTypeEnum.GLTFBinary,
        ".prefab.json": AssetTypeEnum.Prefab,
        ".scene.json": AssetTypeEnum.Scene,
        ".atlas.json": AssetTypeEnum.Atlas,
        ".font.json": AssetTypeEnum.Font,
        ".json": AssetTypeEnum.TextAsset,
        ".txt": AssetTypeEnum.TextAsset,
        ".effect.json": AssetTypeEnum.TextAsset,
        ".packs.bin": AssetTypeEnum.PackBin,
        ".packs.txt": AssetTypeEnum.PackTxt,
        ".path.json": AssetTypeEnum.pathAsset,
        ".mp3": AssetTypeEnum.Sound,
        ".ogg": AssetTypeEnum.Sound
    }

    function calcType(url: string): AssetTypeEnum {
        let filei = url.lastIndexOf("/");
        let file = url.substr(filei + 1);
        let i = file.indexOf(".", 0);
        let extname = null;
        while (i >= 0) {
            extname = file.substr(i);
            if (typeMap[extname] != undefined) {
                return typeMap[extname];
            }
            i = file.indexOf(".", i + 1);
        }
        return AssetTypeEnum.Unknown;
    }

    function getFileName(url: string, removeEX: boolean = false): string {
        let filei = url.lastIndexOf("/");
        let file = url.substr(filei + 1);
        if (removeEX) {
            file = file.substring(0, file.indexOf("."));
        }

        return file;
    };

    function getPath(url: string): string {
        return url.substring(0, url.lastIndexOf("/"));
    }

    function getUrl(resource: RES.ResourceInfo): string {
        if (resource.root) {
            return resource.root + resource.url;
        }
        else {
            return RES['resourceRoot'] + resource.url;//兼容引擎5.1.9以及更低版本
        }

    }

    function formatUrlAndSort(assets: any[], path: string, urlKey: string = "url"): { url: string, type: AssetTypeEnum }[] {
        let list: { url: string, type: AssetTypeEnum }[] = [];
        list = assets.map<{ url: string, type: AssetTypeEnum }>(item => {
            return { url: egret3d.utils.combinePath(path + "/", item[urlKey]), type: calcType(item[urlKey]) }
        });
        list.sort((a, b) => {
            return a.type - b.type;
        });
        return list;
    }

    async function promisify(loader: egret.ImageLoader | egret.HttpRequest | egret.Sound, resource: RES.ResourceInfo): Promise<any> {

        return new Promise((resolve, reject) => {
            let onSuccess = () => {
                let texture = loader['data'] ? loader['data'] : loader['response'];
                resolve(texture);
            }

            let onError = () => {
                let e = new RES.ResourceManagerError(1001, resource.url);
                reject(e);
            }
            loader.addEventListener(egret.Event.COMPLETE, onSuccess, this);
            loader.addEventListener(egret.IOErrorEvent.IO_ERROR, onError, this);
        })
    }

    async function promisifySoundDecode(arrayBuffer: ArrayBuffer, resource: RES.ResourceInfo): Promise<any> {

        return new Promise((resolve, reject) => {
            let onSuccess = (audioBuffer) => {
                resolve(audioBuffer);
            }

            let onError = () => {
                let e = new RES.ResourceManagerError(1001, resource.url);
                reject(e);
            }
            egret3d.sound.WebAudio.instance.decodeAudioData(arrayBuffer, onSuccess, onError);
        })
    }

    export const BundleProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);

            let bundle = new egret3d.AssetBundle(filename);
            bundle.url = url;
            bundle.$parse(JSON.parse(text));

            // let list = getBundleUrlList(bundle);
            let list = formatUrlAndSort(bundle.assets, getPath(resource.url));
            for (let i = 0; i < list.length; i++) {
                let r = RES.host.resourceConfig["getResource"](list[i].url);
                if (r) {
                    let asset: paper.Asset = await host.load(r);
                }
            }

            return bundle;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();
        }

    // getData(host, resource, key, subkey) { //可选函数

    // }

    };

    export const GLVertexShaderProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));
            return egret3d.Shader.registerVertShader(name, text);
        },

        async onRemoveStart(host, resource) {

        }

    // getData(host, resource, key, subkey) { //可选函数

    // }

    };

    export const GLFragmentShaderProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));
            return egret3d.Shader.registerFragShader(name, text);
        },

        async onRemoveStart(host, resource) {

        }

    };

    export const ShaderProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));
            let shader = new egret3d.Shader(filename, url);
            shader.$parse(JSON.parse(text));
            paper.Asset.register(shader);
            return shader;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    export const D3PVRProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {

        },

        async onRemoveStart(host, resource) {

        }

    };

    export const TextureDescProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));

            let _texturedesc = JSON.parse(text);
            let _name: string = _texturedesc["name"];
            let _filterMode: string = _texturedesc["filterMode"];
            let _format: string = _texturedesc["format"];
            let _mipmap: boolean = _texturedesc["mipmap"];
            let _wrap: string = _texturedesc["wrap"];

            if (_name.indexOf("LightmapFar") >= 0) {
                console.log("");
            }
            let _textureFormat = egret3d.TextureFormatEnum.RGBA;
            if (_format == "RGB") {
                _textureFormat = egret3d.TextureFormatEnum.RGB;
            } else if (_format == "Gray") {
                _textureFormat = egret3d.TextureFormatEnum.Gray;
            }

            let _linear: boolean = true;
            if (_filterMode.indexOf("linear") < 0) {
                _linear = false;
            }

            let _repeat: boolean = false;
            if (_wrap.indexOf("Repeat") >= 0) {
                _repeat = true;
            }

            let _textureSrc: string = url.replace(filename, _name);

            let loader = new egret.ImageLoader();
            loader.load(_textureSrc);
            let image = await promisify(loader, resource);
            let _texture = new egret3d.Texture(filename, url);
            _texture.realName = _name;
            let t2d = new egret3d.GlTexture2D(gl, _textureFormat);
            t2d.uploadImage(image.source, _mipmap, _linear, true, _repeat);
            _texture.glTexture = t2d;
            paper.Asset.register(_texture);

            return _texture;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    export const TextureProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));
            let loader = new egret.ImageLoader();
            loader.load(url);
            let image = await promisify(loader, resource);
            let _texture = new egret3d.Texture(filename, url);
            let _textureFormat = egret3d.TextureFormatEnum.RGBA;
            let t2d = new egret3d.GlTexture2D(gl, _textureFormat);
            t2d.uploadImage(image.source, true, true, true, true);
            _texture.glTexture = t2d;
            paper.Asset.register(_texture);
            return _texture;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    export const MaterialProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));
            let _material = new egret3d.Material(filename, url);
            _material.$parse(JSON.parse(text));
            paper.Asset.register(_material);
            return _material;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    export const GLTFProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            const result = await host.load(resource, resource.type === "GLTF" ? RES.processor.JsonProcessor : RES.processor.BinaryProcessor);
            const url = getUrl(resource);
            const filename = getFileName(url, true);
            const glTF = new egret3d.GLTFAsset(filename, url);

            if (resource.type === "GLTF") {
                const glTFBuffers = (result as gltf.GLTF).buffers;
                const buffers = [];

                if (glTFBuffers) {
                    const glTFPath = getPath(resource.url);

                    for (const buffer of glTFBuffers) {
                        const url = egret3d.utils.combinePath(glTFPath + "/", buffer.uri);
                        let r = RES.host.resourceConfig["getResource"](url); // TODO
                        if (r) {
                            const buffer = await host.load(r, RES.processor.BinaryProcessor);
                            if (buffer) {
                                buffers.push(buffer);
                            }
                            else {
                                console.error("Load glTF resource error.", url);
                            }
                        }
                    }
                }

                glTF.parse(result, buffers);
            }
            else {
                glTF.parseFromBinary(result);
            }

            paper.Asset.register(glTF);

            return glTF;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    export const AtlasProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));
            let _atlas = new egret3d.Atlas(filename, url);
            _atlas.$parse(text);
            paper.Asset.register(_atlas);
            return _atlas;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    export const NewPrefabProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));

            // load ref assets
            let assets = JSON.parse(text).assets;
            let list = formatUrlAndSort(assets, getPath(resource.url));
            for (let i = 0; i < list.length; i++) {
                if (list[i].type == AssetTypeEnum.Shader) continue;
                let r = RES.host.resourceConfig["getResource"](list[i].url);
                if (r) {
                    let asset: paper.Asset = await host.load(r);
                }
            }

            let _prefab = new egret3d.Prefab(filename, url);
            _prefab.$parse(text);
            paper.Asset.register(_prefab);
            return _prefab;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    export const NewSceneProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));

            // load ref assets
            let assets = JSON.parse(text).assets;
            let list = formatUrlAndSort(assets, getPath(resource.url));
            for (let i = 0; i < list.length; i++) {
                if (list[i].type == AssetTypeEnum.Shader) continue;
                let r = RES.host.resourceConfig["getResource"](list[i].url);
                if (r) {
                    let asset: paper.Asset = await host.load(r);
                }
            }

            let _scene = new egret3d.RawScene(filename, url);
            _scene.$parse(text);
            paper.Asset.register(_scene);
            return _scene;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    export const D3FontProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));
            let _font = new egret3d.Font(filename, url);
            _font.$parse(text);
            paper.Asset.register(_font);
            return _font;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    export const Sound3DProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let arrayBuffer: ArrayBuffer = await host.load(resource, RES.processor.BinaryProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));
            let audioBuffer: AudioBuffer = await promisifySoundDecode(arrayBuffer, resource);
            let sound = new egret3d.Sound(filename, url);
            sound.buffer = audioBuffer;
            paper.Asset.register(sound);
            return sound;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    export const TextAssetProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));
            let _text = new egret3d.TextAsset(filename, url);
            _text.content = text;
            paper.Asset.register(_text);
            return _text;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    export const PathAssetProcessor: RES.processor.Processor = {

        async onLoadStart(host, resource) {
            let text = await host.load(resource, RES.processor.TextProcessor);
            let gl = egret3d.WebGLKit.webgl;
            let url = getUrl(resource);
            let filename = getFileName(url);
            let name = filename.substring(0, filename.indexOf("."));
            let _path = new egret3d.PathAsset(filename, url);
            _path.$parse(JSON.parse(text));
            paper.Asset.register(_path);
            return _path;
        },

        async onRemoveStart(host, resource) {
            let data = host.get(resource);
            data.dispose();

            paper.Asset.unregister(data);
        }

    };

    RES.processor.map("GLVertexShader", GLVertexShaderProcessor);
    RES.processor.map("GLFragmentShader", GLFragmentShaderProcessor);
    RES.processor.map("Shader", ShaderProcessor);
    RES.processor.map("Bundle", BundleProcessor);
    RES.processor.map("Texture", TextureProcessor);
    RES.processor.map("TextureDesc", TextureDescProcessor);
    RES.processor.map("PVR", D3PVRProcessor);
    RES.processor.map("Material", MaterialProcessor);
    RES.processor.map("GLTF", GLTFProcessor);
    RES.processor.map("GLTFBinary", GLTFProcessor);
    RES.processor.map("Prefab", NewPrefabProcessor);
    RES.processor.map("Scene", NewSceneProcessor);
    RES.processor.map("Atlas", AtlasProcessor);
    RES.processor.map("Font", D3FontProcessor);
    RES.processor.map("TextAsset", TextAssetProcessor);
    RES.processor.map("pathAsset", PathAssetProcessor);
    RES.processor.map("Sound", Sound3DProcessor);
}
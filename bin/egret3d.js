"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var paper;
(function (paper) {
    var _tagA = [];
    var _tagB = [];
    var _tagC = [];
    /**
     * 标记序列化分类
     * 如果没有标记序列化分类，序列化后的对象只会收集在objects中
     * 如果被标记了某种序列化分类，序列化后的对象还会被单独收集到一个新的数组中，key即为类名
     * TODO 不能发布给开发者使用。
     */
    function serializedType(type) {
        return function (clazz) {
            var classPrototype = clazz.prototype;
            if (_tagA.indexOf(classPrototype) >= 0) {
                var types = classPrototype["__serializedType" /* SerializedType */];
                if (types.indexOf(type) < 0) {
                    types.push(type);
                }
            }
            else {
                classPrototype["__serializedType" /* SerializedType */] = [type];
                _tagA.push(classPrototype);
            }
        };
    }
    paper.serializedType = serializedType;
    /**
     * 标记序列化属性
     * 通过装饰器标记需要序列化的属性
     */
    function serializedField(classPrototype, type) {
        if (_tagB.indexOf(classPrototype) >= 0) {
            var types = classPrototype["__serialized" /* Serialized */];
            if (types.indexOf(type) < 0) {
                types.push(type);
            }
        }
        else {
            classPrototype["__serialized" /* Serialized */] = [type];
            _tagB.push(classPrototype);
        }
    }
    paper.serializedField = serializedField;
    /**
     * 标记反序列化时需要忽略的属性
     * 通过装饰器标记反序列化时需要被忽略的属性（但属性中引用的对象依然会被实例化）
     */
    function deserializedIgnore(classPrototype, type) {
        if (_tagC.indexOf(classPrototype) >= 0) {
            var types = classPrototype["__deserializedIgnore" /* DeserializedIgnore */];
            if (types.indexOf(type) < 0) {
                types.push(type);
            }
        }
        else {
            classPrototype["__deserializedIgnore" /* DeserializedIgnore */] = [type];
            _tagC.push(classPrototype);
        }
    }
    paper.deserializedIgnore = deserializedIgnore;
})(paper || (paper = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var Vector3 = (function () {
        /**
         *
         */
        function Vector3(x, y, z) {
            if (x === void 0) { x = 0.0; }
            if (y === void 0) { y = 0.0; }
            if (z === void 0) { z = 0.0; }
            this.x = x;
            this.y = y;
            this.z = z;
        }
        /**
         * @inheritDoc
         */
        Vector3.prototype.serialize = function () {
            return [this.x, this.y, this.z];
        };
        /**
         * @inheritDoc
         */
        Vector3.prototype.deserialize = function (element) {
            this.x = element[0];
            this.y = element[1];
            this.z = element[2];
        };
        Vector3.set = function (x, y, z, out) {
            out.x = x;
            out.y = y;
            out.z = z;
            return out;
        };
        Vector3.normalize = function (v) {
            var num = Vector3.getLength(v);
            if (num > Number.MIN_VALUE) {
                v.x = v.x / num;
                v.y = v.y / num;
                v.z = v.z / num;
            }
            else {
                v.x = 0;
                v.y = 0;
                v.z = 0;
            }
            return v;
        };
        Vector3.copy = function (v, out) {
            out.x = v.x;
            out.y = v.y;
            out.z = v.z;
            return out;
        };
        Vector3.add = function (v1, v2, out) {
            out.x = v1.x + v2.x;
            out.y = v1.y + v2.y;
            out.z = v1.z + v2.z;
            return out;
        };
        Vector3.subtract = function (v1, v2, out) {
            out.x = v1.x - v2.x;
            out.y = v1.y - v2.y;
            out.z = v1.z - v2.z;
            return out;
        };
        Vector3.multiply = function (v1, v2, out) {
            out.x = v1.x * v2.x;
            out.y = v1.y * v2.y;
            out.z = v1.z * v2.z;
            return out;
        };
        Vector3.scale = function (v, scale) {
            v.x = v.x * scale;
            v.y = v.y * scale;
            v.z = v.z * scale;
            return v;
        };
        Vector3.cross = function (lhs, rhs, out) {
            out.x = lhs.y * rhs.z - lhs.z * rhs.y;
            out.y = lhs.z * rhs.x - lhs.x * rhs.z;
            out.z = lhs.x * rhs.y - lhs.y * rhs.x;
            return out;
        };
        Vector3.dot = function (v1, v2) {
            return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
        };
        Vector3.getLength = function (v) {
            return Math.sqrt(this.getSqrLength(v));
        };
        Vector3.getSqrLength = function (v) {
            return v.x * v.x + v.y * v.y + v.z * v.z;
        };
        Vector3.getDistance = function (a, b) {
            this.subtract(a, b, egret3d.helpVector3H);
            return this.getLength(egret3d.helpVector3H);
        };
        Vector3.min = function (v1, v2, out) {
            out.x = Math.min(v1.x, v2.x);
            out.y = Math.min(v1.y, v2.y);
            out.z = Math.min(v1.z, v2.z);
            return out;
        };
        Vector3.max = function (v1, v2, out) {
            out.x = Math.max(v1.x, v2.x);
            out.y = Math.max(v1.y, v2.y);
            out.z = Math.max(v1.z, v2.z);
            return out;
        };
        Vector3.lerp = function (v1, v2, v, out) {
            out.x = v1.x * (1 - v) + v2.x * v;
            out.y = v1.y * (1 - v) + v2.y * v;
            out.z = v1.z * (1 - v) + v2.z * v;
            return out;
        };
        Vector3.equal = function (v1, v2, threshold) {
            if (threshold === void 0) { threshold = 0.00001; }
            if (Math.abs(v1.x - v2.x) > threshold) {
                return false;
            }
            if (Math.abs(v1.y - v2.y) > threshold) {
                return false;
            }
            if (Math.abs(v1.z - v2.z) > threshold) {
                return false;
            }
            return true;
        };
        /**
         *
         */
        Vector3.ONE = new Vector3(1.0, 1.0, 1.0);
        return Vector3;
    }());
    egret3d.Vector3 = Vector3;
    __reflect(Vector3.prototype, "egret3d.Vector3", ["paper.ISerializable"]);
    /**
     *
     */
    egret3d.helpVector3A = new Vector3();
    /**
     *
     */
    egret3d.helpVector3B = new Vector3();
    /**
     *
     */
    egret3d.helpVector3C = new Vector3();
    /**
     *
     */
    egret3d.helpVector3D = new Vector3();
    /**
     *
     */
    egret3d.helpVector3E = new Vector3();
    /**
     *
     */
    egret3d.helpVector3F = new Vector3();
    /**
     *
     */
    egret3d.helpVector3G = new Vector3();
    /**
     *
     */
    egret3d.helpVector3H = new Vector3();
})(egret3d || (egret3d = {}));
var paper;
(function (paper) {
    var _hashCount = 1;
    /**
     * 可序列化对象
     */
    var SerializableObject = (function () {
        function SerializableObject() {
            /**
             * @inheritDoc
             */
            this.hashCode = _hashCount++;
        }
        /**
         * @inheritDoc
         */
        SerializableObject.prototype.serialize = function () {
            console.warn("Unimplemented serialize method.");
        };
        /**
         * @inheritDoc
         */
        SerializableObject.prototype.deserialize = function (element) {
            console.warn("Unimplemented deserialize method.");
        };
        return SerializableObject;
    }());
    paper.SerializableObject = SerializableObject;
    __reflect(SerializableObject.prototype, "paper.SerializableObject", ["paper.IHashCode", "paper.ISerializable"]);
})(paper || (paper = {}));
var egret3d;
(function (egret3d) {
    var helpVec3_1 = new egret3d.Vector3();
    var Matrix = (function () {
        function Matrix(datas) {
            if (datas === void 0) { datas = null; }
            if (datas) {
                this.rawData = datas;
            }
            else {
                this.rawData = new Float32Array([
                    1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1
                ]);
            }
        }
        Matrix.set = function (n11, n21, n31, n41, n12, n22, n32, n42, n13, n23, n33, n43, n14, n24, n34, n44, matrix) {
            matrix.rawData[0] = n11;
            matrix.rawData[1] = n12;
            matrix.rawData[2] = n13;
            matrix.rawData[3] = n14;
            matrix.rawData[4] = n21;
            matrix.rawData[5] = n22;
            matrix.rawData[6] = n23;
            matrix.rawData[7] = n24;
            matrix.rawData[8] = n31;
            matrix.rawData[9] = n32;
            matrix.rawData[10] = n33;
            matrix.rawData[11] = n34;
            matrix.rawData[12] = n41;
            matrix.rawData[13] = n42;
            matrix.rawData[14] = n43;
            matrix.rawData[15] = n44;
            return matrix;
        };
        Matrix.getScale = function (m, out) {
            out.x = m.rawData[0];
            out.y = m.rawData[5];
            out.z = m.rawData[10];
            return out;
        };
        Matrix.getTranslation = function (m, out) {
            out.x = m.rawData[12];
            out.y = m.rawData[13];
            out.z = m.rawData[14];
            return out;
        };
        Matrix.getQuaternion = function (m, out) {
            var data = m.rawData;
            var m11 = data[0], m12 = data[4], m13 = data[8];
            var m21 = data[1], m22 = data[5], m23 = data[9];
            var m31 = data[2], m32 = data[6], m33 = data[10];
            var trace = m11 + m22 + m33;
            var s;
            if (trace > 0) {
                s = 0.5 / Math.sqrt(trace + 1.0);
                out.w = 0.25 / s;
                out.x = (m32 - m23) * s;
                out.y = (m13 - m31) * s;
                out.z = (m21 - m12) * s;
            }
            else if (m11 > m22 && m11 > m33) {
                s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
                out.w = (m32 - m23) / s;
                out.x = 0.25 * s;
                out.y = (m12 + m21) / s;
                out.z = (m13 + m31) / s;
            }
            else if (m22 > m33) {
                s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
                out.w = (m13 - m31) / s;
                out.x = (m12 + m21) / s;
                out.y = 0.25 * s;
                out.z = (m23 + m32) / s;
            }
            else {
                s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
                out.w = (m21 - m12) / s;
                out.x = (m13 + m31) / s;
                out.y = (m23 + m32) / s;
                out.z = 0.25 * s;
            }
            return out;
        };
        Matrix.add = function (left, right, out) {
            out.rawData[0] = left.rawData[0] + right.rawData[0];
            out.rawData[1] = left.rawData[1] + right.rawData[1];
            out.rawData[2] = left.rawData[2] + right.rawData[2];
            out.rawData[3] = left.rawData[3] + right.rawData[3];
            out.rawData[4] = left.rawData[4] + right.rawData[4];
            out.rawData[5] = left.rawData[5] + right.rawData[5];
            out.rawData[6] = left.rawData[6] + right.rawData[6];
            out.rawData[7] = left.rawData[7] + right.rawData[7];
            out.rawData[8] = left.rawData[8] + right.rawData[8];
            out.rawData[9] = left.rawData[9] + right.rawData[9];
            out.rawData[10] = left.rawData[10] + right.rawData[10];
            out.rawData[11] = left.rawData[11] + right.rawData[11];
            out.rawData[12] = left.rawData[12] + right.rawData[12];
            out.rawData[13] = left.rawData[13] + right.rawData[13];
            out.rawData[14] = left.rawData[14] + right.rawData[14];
            out.rawData[15] = left.rawData[15] + right.rawData[15];
            return out;
        };
        Matrix.multiply = function (lhs, rhs, out) {
            var a00 = lhs.rawData[0], a01 = lhs.rawData[1], a02 = lhs.rawData[2], a03 = lhs.rawData[3];
            var a10 = lhs.rawData[4], a11 = lhs.rawData[5], a12 = lhs.rawData[6], a13 = lhs.rawData[7];
            var a20 = lhs.rawData[8], a21 = lhs.rawData[9], a22 = lhs.rawData[10], a23 = lhs.rawData[11];
            var a30 = lhs.rawData[12], a31 = lhs.rawData[13], a32 = lhs.rawData[14], a33 = lhs.rawData[15];
            var b0 = rhs.rawData[0], b1 = rhs.rawData[1], b2 = rhs.rawData[2], b3 = rhs.rawData[3];
            out.rawData[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out.rawData[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out.rawData[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out.rawData[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = rhs.rawData[4];
            b1 = rhs.rawData[5];
            b2 = rhs.rawData[6];
            b3 = rhs.rawData[7];
            out.rawData[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out.rawData[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out.rawData[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out.rawData[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = rhs.rawData[8];
            b1 = rhs.rawData[9];
            b2 = rhs.rawData[10];
            b3 = rhs.rawData[11];
            out.rawData[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out.rawData[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out.rawData[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out.rawData[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = rhs.rawData[12];
            b1 = rhs.rawData[13];
            b2 = rhs.rawData[14];
            b3 = rhs.rawData[15];
            out.rawData[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out.rawData[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out.rawData[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out.rawData[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            return out;
        };
        Matrix.scale = function (scaler, m) {
            m.rawData[0] *= scaler;
            m.rawData[1] *= scaler;
            m.rawData[2] *= scaler;
            m.rawData[3] *= scaler;
            m.rawData[4] *= scaler;
            m.rawData[5] *= scaler;
            m.rawData[6] *= scaler;
            m.rawData[7] *= scaler;
            m.rawData[8] *= scaler;
            m.rawData[9] *= scaler;
            m.rawData[10] *= scaler;
            m.rawData[11] *= scaler;
            m.rawData[12] *= scaler;
            m.rawData[13] *= scaler;
            m.rawData[14] *= scaler;
            m.rawData[15] *= scaler;
            return m;
        };
        Matrix.transpose = function (m, out) {
            out.rawData[1] = m.rawData[4];
            out.rawData[2] = m.rawData[8];
            out.rawData[3] = m.rawData[12];
            out.rawData[4] = m.rawData[1];
            out.rawData[6] = m.rawData[9];
            out.rawData[7] = m.rawData[13];
            out.rawData[8] = m.rawData[2];
            out.rawData[9] = m.rawData[6];
            out.rawData[11] = m.rawData[14];
            out.rawData[12] = m.rawData[3];
            out.rawData[13] = m.rawData[7];
            out.rawData[14] = m.rawData[11];
            return out;
        };
        Matrix.inverse = function (src, out) {
            var l1 = src.rawData[0];
            var l2 = src.rawData[1];
            var l3 = src.rawData[2];
            var l4 = src.rawData[3];
            var l5 = src.rawData[4];
            var l6 = src.rawData[5];
            var l7 = src.rawData[6];
            var l8 = src.rawData[7];
            var l9 = src.rawData[8];
            var l10 = src.rawData[9];
            var l11 = src.rawData[10];
            var l12 = src.rawData[11];
            var l13 = src.rawData[12];
            var l14 = src.rawData[13];
            var l15 = src.rawData[14];
            var l16 = src.rawData[15];
            var l17 = (l11 * l16) - (l12 * l15);
            var l18 = (l10 * l16) - (l12 * l14);
            var l19 = (l10 * l15) - (l11 * l14);
            var l20 = (l9 * l16) - (l12 * l13);
            var l21 = (l9 * l15) - (l11 * l13);
            var l22 = (l9 * l14) - (l10 * l13);
            var l23 = ((l6 * l17) - (l7 * l18)) + (l8 * l19);
            var l24 = -(((l5 * l17) - (l7 * l20)) + (l8 * l21));
            var l25 = ((l5 * l18) - (l6 * l20)) + (l8 * l22);
            var l26 = -(((l5 * l19) - (l6 * l21)) + (l7 * l22));
            var l27 = 1.0 / ((((l1 * l23) + (l2 * l24)) + (l3 * l25)) + (l4 * l26));
            var l28 = (l7 * l16) - (l8 * l15);
            var l29 = (l6 * l16) - (l8 * l14);
            var l30 = (l6 * l15) - (l7 * l14);
            var l31 = (l5 * l16) - (l8 * l13);
            var l32 = (l5 * l15) - (l7 * l13);
            var l33 = (l5 * l14) - (l6 * l13);
            var l34 = (l7 * l12) - (l8 * l11);
            var l35 = (l6 * l12) - (l8 * l10);
            var l36 = (l6 * l11) - (l7 * l10);
            var l37 = (l5 * l12) - (l8 * l9);
            var l38 = (l5 * l11) - (l7 * l9);
            var l39 = (l5 * l10) - (l6 * l9);
            out.rawData[0] = l23 * l27;
            out.rawData[4] = l24 * l27;
            out.rawData[8] = l25 * l27;
            out.rawData[12] = l26 * l27;
            out.rawData[1] = -(((l2 * l17) - (l3 * l18)) + (l4 * l19)) * l27;
            out.rawData[5] = (((l1 * l17) - (l3 * l20)) + (l4 * l21)) * l27;
            out.rawData[9] = -(((l1 * l18) - (l2 * l20)) + (l4 * l22)) * l27;
            out.rawData[13] = (((l1 * l19) - (l2 * l21)) + (l3 * l22)) * l27;
            out.rawData[2] = (((l2 * l28) - (l3 * l29)) + (l4 * l30)) * l27;
            out.rawData[6] = -(((l1 * l28) - (l3 * l31)) + (l4 * l32)) * l27;
            out.rawData[10] = (((l1 * l29) - (l2 * l31)) + (l4 * l33)) * l27;
            out.rawData[14] = -(((l1 * l30) - (l2 * l32)) + (l3 * l33)) * l27;
            out.rawData[3] = -(((l2 * l34) - (l3 * l35)) + (l4 * l36)) * l27;
            out.rawData[7] = (((l1 * l34) - (l3 * l37)) + (l4 * l38)) * l27;
            out.rawData[11] = -(((l1 * l35) - (l2 * l37)) + (l4 * l39)) * l27;
            out.rawData[15] = (((l1 * l36) - (l2 * l38)) + (l3 * l39)) * l27;
            return out;
        };
        Matrix.decompose = function (m, scale, rotation, translation) {
            translation.x = m.rawData[12];
            translation.y = m.rawData[13];
            translation.z = m.rawData[14];
            var xs = egret3d.sign(m.rawData[0] * m.rawData[1] * m.rawData[2] * m.rawData[3]) < 0 ? -1 : 1;
            var ys = egret3d.sign(m.rawData[4] * m.rawData[5] * m.rawData[6] * m.rawData[7]) < 0 ? -1 : 1;
            var zs = egret3d.sign(m.rawData[8] * m.rawData[9] * m.rawData[10] * m.rawData[11]) < 0 ? -1 : 1;
            scale.x = xs * Math.sqrt(m.rawData[0] * m.rawData[0] + m.rawData[1] * m.rawData[1] + m.rawData[2] * m.rawData[2]);
            scale.y = ys * Math.sqrt(m.rawData[4] * m.rawData[4] + m.rawData[5] * m.rawData[5] + m.rawData[6] * m.rawData[6]);
            scale.z = zs * Math.sqrt(m.rawData[8] * m.rawData[8] + m.rawData[9] * m.rawData[9] + m.rawData[10] * m.rawData[10]);
            if (scale.x === 0 || scale.y === 0 || scale.z === 0) {
                rotation.x = 0;
                rotation.y = 0;
                rotation.z = 0;
                rotation.w = 1;
                return false;
            }
            var mat = helpMat_1;
            mat.rawData[0] = m.rawData[0] / scale.x;
            mat.rawData[1] = m.rawData[1] / scale.x;
            mat.rawData[2] = m.rawData[2] / scale.x;
            mat.rawData[3] = 0;
            mat.rawData[4] = m.rawData[4] / scale.y;
            mat.rawData[5] = m.rawData[5] / scale.y;
            mat.rawData[6] = m.rawData[6] / scale.y;
            mat.rawData[7] = 0;
            mat.rawData[8] = m.rawData[8] / scale.z;
            mat.rawData[9] = m.rawData[9] / scale.z;
            mat.rawData[10] = m.rawData[10] / scale.z;
            mat.rawData[11] = 0;
            this.getQuaternion(mat, rotation);
            return true;
        };
        Matrix.copy = function (m, out) {
            for (var i = 0; i < 16; i++) {
                out.rawData[i] = m.rawData[i];
            }
            return out;
        };
        Matrix.identify = function (m) {
            m.rawData[0] = 1;
            m.rawData[1] = 0;
            m.rawData[2] = 0;
            m.rawData[3] = 0;
            m.rawData[4] = 0;
            m.rawData[5] = 1;
            m.rawData[6] = 0;
            m.rawData[7] = 0;
            m.rawData[8] = 0;
            m.rawData[9] = 0;
            m.rawData[10] = 1;
            m.rawData[11] = 0;
            m.rawData[12] = 0;
            m.rawData[13] = 0;
            m.rawData[14] = 0;
            m.rawData[15] = 1;
            return m;
        };
        Matrix.zero = function (m) {
            m.rawData[0] = 0;
            m.rawData[1] = 0;
            m.rawData[2] = 0;
            m.rawData[3] = 0;
            m.rawData[4] = 0;
            m.rawData[5] = 0;
            m.rawData[6] = 0;
            m.rawData[7] = 0;
            m.rawData[8] = 0;
            m.rawData[9] = 0;
            m.rawData[10] = 0;
            m.rawData[11] = 0;
            m.rawData[12] = 0;
            m.rawData[13] = 0;
            m.rawData[14] = 0;
            m.rawData[15] = 1;
            return m;
        };
        Matrix.formScale = function (xScale, yScale, zScale, out) {
            out.rawData[0] = xScale;
            out.rawData[1] = 0.0;
            out.rawData[2] = 0.0;
            out.rawData[3] = 0.0;
            out.rawData[4] = 0.0;
            out.rawData[5] = yScale;
            out.rawData[6] = 0.0;
            out.rawData[7] = 0.0;
            out.rawData[8] = 0.0;
            out.rawData[9] = 0.0;
            out.rawData[10] = zScale;
            out.rawData[11] = 0.0;
            out.rawData[12] = 0.0;
            out.rawData[13] = 0.0;
            out.rawData[14] = 0.0;
            out.rawData[15] = 1.0;
            return out;
        };
        Matrix.fromTranslate = function (x, y, z, out) {
            out.rawData[0] = 1.0;
            out.rawData[1] = 0.0;
            out.rawData[2] = 0.0;
            out.rawData[3] = 0;
            out.rawData[4] = 0.0;
            out.rawData[5] = 1.0;
            out.rawData[6] = 0.0;
            out.rawData[7] = 0.0;
            out.rawData[8] = 0.0;
            out.rawData[9] = 0.0;
            out.rawData[10] = 1.0;
            out.rawData[11] = 0.0;
            out.rawData[12] = x;
            out.rawData[13] = y;
            out.rawData[14] = z;
            out.rawData[15] = 1.0;
            return out;
        };
        Matrix.fromRTS = function (p, s, q, out) {
            var matS = helpMat_1;
            this.formScale(s.x, s.y, s.z, matS);
            var matR = helpMat_2;
            egret3d.Quaternion.toMatrix(q, matR);
            this.multiply(matR, matS, out);
            out.rawData[12] = p.x;
            out.rawData[13] = p.y;
            out.rawData[14] = p.z;
            out.rawData[15] = 1;
            return out;
        };
        Matrix.getVector3ByOffset = function (src, offset, result) {
            result.x = src.rawData[offset];
            result.y = src.rawData[offset + 1];
            result.z = src.rawData[offset + 2];
            return result;
        };
        Matrix.transformVector3 = function (vector, transformation, result) {
            var x = (vector.x * transformation.rawData[0]) + (vector.y * transformation.rawData[4]) + (vector.z * transformation.rawData[8]) + transformation.rawData[12];
            var y = (vector.x * transformation.rawData[1]) + (vector.y * transformation.rawData[5]) + (vector.z * transformation.rawData[9]) + transformation.rawData[13];
            var z = (vector.x * transformation.rawData[2]) + (vector.y * transformation.rawData[6]) + (vector.z * transformation.rawData[10]) + transformation.rawData[14];
            var w = (vector.x * transformation.rawData[3]) + (vector.y * transformation.rawData[7]) + (vector.z * transformation.rawData[11]) + transformation.rawData[15];
            result.x = x / w;
            result.y = y / w;
            result.z = z / w;
            return result;
        };
        Matrix.transformNormal = function (vector, transformation, result) {
            var x = (vector.x * transformation.rawData[0]) + (vector.y * transformation.rawData[4]) + (vector.z * transformation.rawData[8]);
            var y = (vector.x * transformation.rawData[1]) + (vector.y * transformation.rawData[5]) + (vector.z * transformation.rawData[9]);
            var z = (vector.x * transformation.rawData[2]) + (vector.y * transformation.rawData[6]) + (vector.z * transformation.rawData[10]);
            result.x = x;
            result.y = y;
            result.z = z;
            return result;
        };
        Matrix.lerp = function (left, right, v, out) {
            for (var i = 0; i < 16; i++) {
                out.rawData[i] = left.rawData[i] * (1 - v) + right.rawData[i] * v;
            }
            return out;
        };
        Matrix.perspectiveProjectLH = function (fov, aspect, znear, zfar, out) {
            var tan = 1.0 / (Math.tan(fov * 0.5));
            out.rawData[0] = tan / aspect;
            out.rawData[1] = out.rawData[2] = out.rawData[3] = 0.0;
            out.rawData[4] = out.rawData[6] = out.rawData[7] = 0.0;
            out.rawData[5] = tan;
            out.rawData[8] = out.rawData[9] = 0.0;
            out.rawData[10] = (zfar + znear) / (zfar - znear);
            out.rawData[11] = 1.0;
            out.rawData[12] = out.rawData[13] = out.rawData[15] = 0.0;
            out.rawData[14] = -2 * (znear * zfar) / (zfar - znear);
            return out;
        };
        Matrix.orthoProjectLH = function (width, height, znear, zfar, out) {
            var hw = 2.0 / width;
            var hh = 2.0 / height;
            var id = 2.0 / (zfar - znear);
            var nid = (znear + zfar) / (znear - zfar);
            out.rawData[0] = hw;
            out.rawData[1] = 0;
            out.rawData[2] = 0;
            out.rawData[3] = 0;
            out.rawData[4] = 0;
            out.rawData[5] = hh;
            out.rawData[6] = 0;
            out.rawData[7] = 0;
            out.rawData[8] = 0;
            out.rawData[9] = 0;
            out.rawData[10] = id;
            out.rawData[11] = 0;
            out.rawData[12] = 0;
            out.rawData[13] = 0;
            out.rawData[14] = nid;
            out.rawData[15] = 1;
            return out;
        };
        Matrix.toEulerAngles = function (matrix, out) {
            var x, y, z, sx, sy, sz, m, halfPi;
            var scale = helpVec3_1;
            Matrix.getScale(matrix, scale);
            sx = scale.x;
            sy = scale.y;
            sz = scale.z;
            m = matrix.rawData;
            y = Math.asin(-m[2] / sx);
            halfPi = Math.PI * 0.5;
            if (y < halfPi) {
                if (y > -halfPi) {
                    x = Math.atan2(m[6] / sy, m[10] / sz);
                    z = Math.atan2(m[1] / sx, m[0] / sx);
                }
                else {
                    // Not a unique solution
                    z = 0;
                    x = -Math.atan2(m[4] / sy, m[5] / sy);
                }
            }
            else {
                // Not a unique solution
                z = 0;
                x = Math.atan2(m[4] / sy, m[5] / sy);
            }
            out.x = x * 180 / Math.PI;
            out.y = y * 180 / Math.PI;
            out.z = z * 180 / Math.PI;
            return out;
        };
        Matrix.determinant = function (matrix) {
            var te = matrix.rawData;
            var n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
            var n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
            var n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
            var n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
            //TODO: make this more efficient
            //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )
            return (n41 * (+n14 * n23 * n32 -
                n13 * n24 * n32 -
                n14 * n22 * n33 +
                n12 * n24 * n33 +
                n13 * n22 * n34 -
                n12 * n23 * n34) +
                n42 * (+n11 * n23 * n34 -
                    n11 * n24 * n33 +
                    n14 * n21 * n33 -
                    n13 * n21 * n34 +
                    n13 * n24 * n31 -
                    n14 * n23 * n31) +
                n43 * (+n11 * n24 * n32 -
                    n11 * n22 * n34 -
                    n14 * n21 * n32 +
                    n12 * n21 * n34 +
                    n14 * n22 * n31 -
                    n12 * n24 * n31) +
                n44 * (-n13 * n22 * n31 -
                    n11 * n23 * n32 +
                    n11 * n22 * n33 +
                    n13 * n21 * n32 -
                    n12 * n21 * n33 +
                    n12 * n23 * n31));
        };
        return Matrix;
    }());
    egret3d.Matrix = Matrix;
    __reflect(Matrix.prototype, "egret3d.Matrix");
    var helpMat_1 = new Matrix();
    var helpMat_2 = new Matrix();
    /**
     *
     */
    egret3d.helpMatrixA = new Matrix();
    /**
     *
     */
    egret3d.helpMatrixB = new Matrix();
    /**
     *
     */
    egret3d.helpMatrixC = new Matrix();
    /**
     *
     */
    egret3d.helpMatrixD = new Matrix();
    /**
     *
     */
    egret3d.helpMatrixE = new Matrix();
    /**
     *
     */
    egret3d.helpMatrixF = new Matrix();
})(egret3d || (egret3d = {}));
var paper;
(function (paper) {
    /**
     * 基础系统。
     */
    var BaseSystem = (function () {
        /**
         *
         */
        function BaseSystem() {
            /**
             * 是否更新该系统。
             */
            this.enable = true;
            /**
             *
             */
            this._level = 0;
            /**
             * 系统对于每个实体关心的组件总数。
             */
            this._interestComponentCount = 0;
            /**
             * 关心列表。
             */
            this._interests = [];
            /**
             *
             */
            this._components = [];
            /**
             *
             */
            this._gameObjectOffsets = {};
            if (!BaseSystem._createEnabled) {
                throw new Error("Create an instance of a system is not allowed.");
            }
            BaseSystem._createEnabled = false;
        }
        /**
         *
         */
        BaseSystem.prototype._onCreateComponent = function (component) {
            var components = this._components;
            var backupLength = components.length;
            var gameObject = component.gameObject;
            for (var _i = 0, _a = this._interests; _i < _a.length; _i++) {
                var config = _a[_i];
                var insterestComponent = gameObject.getComponent(config.componentClass); // TODO 更快的查找方式
                if (!insterestComponent || components.indexOf(insterestComponent) >= 0) {
                    components.length = backupLength;
                    return false;
                }
                components.push(insterestComponent);
            }
            this._gameObjectOffsets[gameObject.hashCode] = backupLength;
            return true;
        };
        /**
         *
         */
        BaseSystem.prototype._onDestroyComponent = function (component) {
            var gameObject = component.gameObject;
            if (!(gameObject.hashCode in this._gameObjectOffsets)) {
                return false;
            }
            var interestCount = this._interestComponentCount;
            var components = this._components;
            var backupLength = components.length;
            var gameObjectOffset = this._gameObjectOffsets[gameObject.hashCode];
            if (backupLength > interestCount) {
                var lastGameObject = null;
                for (var i = 0; i < interestCount; ++i) {
                    if (!lastGameObject) {
                        lastGameObject = components[backupLength - interestCount].gameObject;
                    }
                    components[gameObjectOffset + i] = components[backupLength - interestCount + i];
                }
                if (lastGameObject) {
                    this._gameObjectOffsets[lastGameObject.hashCode] = gameObjectOffset;
                }
            }
            components.length -= interestCount;
            delete this._gameObjectOffsets[gameObject.hashCode];
            return true;
        };
        /**
         * 系统内部根据关心列表的顺序快速查找指定组件。
         */
        BaseSystem.prototype._getComponent = function (gameObject, componentOffset) {
            if (gameObject.hashCode in this._gameObjectOffsets) {
                return this._components[this._gameObjectOffsets[gameObject.hashCode] + componentOffset];
            }
            return null;
        };
        /**
         * @protected
         */
        BaseSystem.prototype.initialize = function () {
            var _this = this;
            for (var _i = 0, _a = this._interests; _i < _a.length; _i++) {
                var config = _a[_i];
                if (config.listeners) {
                    for (var _b = 0, _c = config.listeners; _b < _c.length; _b++) {
                        var listenerConfig = _c[_b];
                        paper.EventPool.addEventListener(listenerConfig.type, config.componentClass, listenerConfig.listener);
                    }
                }
                this._interestComponentCount++;
                paper.EventPool.addEventListener("__create__" /* Create */, config.componentClass, function (component) { _this._onCreateComponent(component); });
                paper.EventPool.addEventListener("__destroy__" /* Destroy */, config.componentClass, function (component) { _this._onDestroyComponent(component); });
            }
        };
        /**
         * @protected
         */
        BaseSystem.prototype.uninitialize = function () {
            this._components.length = 0;
            for (var k in this._gameObjectOffsets) {
                delete this._gameObjectOffsets[k];
            }
        };
        Object.defineProperty(BaseSystem.prototype, "components", {
            /**
             * 该系统所关心的所有组件。
             */
            get: function () {
                return this._components;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 防止生成未经管理的系统实例。
         *
         */
        BaseSystem._createEnabled = false;
        return BaseSystem;
    }());
    paper.BaseSystem = BaseSystem;
    __reflect(BaseSystem.prototype, "paper.BaseSystem");
})(paper || (paper = {}));
var paper;
(function (paper) {
    /**
     * Base Class for Asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 资源基类，扩展资源类型需要继承此抽象类
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Asset = (function (_super) {
        __extends(Asset, _super);
        /**
         *
         */
        function Asset(name, url) {
            if (name === void 0) { name = ""; }
            if (url === void 0) { url = ""; }
            var _this = _super.call(this) || this;
            /**
             *
             * 资源的原始URL
             */
            _this.url = "";
            /**
             * get asset name
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 名称。
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.name = "";
            _this.name = name;
            _this.url = url;
            return _this;
        }
        /**
         * 注册资源
         * 通过此方法注册后，引擎内部可以通过URL字典访问所有注册的资源
         * 使用外部加载器时，需要在加载完成后注册该资源
         */
        Asset.register = function (asset) {
            this._assets[asset.url] = asset;
        };
        /**
         * 注销资源
         * 销毁资源时，注销框架内部对资源的引用
         */
        Asset.unregister = function (asset) {
            delete this._assets[asset.url];
        };
        /**
         * 获取资源
         * @param url 资源的url
         */
        Asset.find = function (url) {
            return (url in this._assets) ? this._assets[url] : null;
        };
        Object.defineProperty(Asset, "assets", {
            /**
             *
             */
            get: function () {
                return this._assets;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @inheritDoc
         */
        Asset.prototype.serialize = function () {
            var target = paper.serializeRC(this);
            target.url = this.url;
            return target;
        };
        Asset._assets = {};
        __decorate([
            paper.serializedField,
            paper.deserializedIgnore
        ], Asset.prototype, "url", void 0);
        Asset = __decorate([
            paper.serializedType("assets")
        ], Asset);
        return Asset;
    }(paper.SerializableObject));
    paper.Asset = Asset;
    __reflect(Asset.prototype, "paper.Asset");
})(paper || (paper = {}));
var paper;
(function (paper) {
    /**
     * 场景管理器
     */
    var SceneManager = (function () {
        function SceneManager() {
            this._scenes = [];
        }
        SceneManager.prototype._addScene = function (scene) {
            if (this._scenes.indexOf(scene) < 0) {
                this._scenes.unshift(scene);
            }
            else {
                console.warn("Add the scene again.", scene.name);
            }
        };
        /**
         * 创建一个空场景并激活
         */
        SceneManager.prototype.createScene = function (name) {
            var scene = new paper.Scene();
            scene.name = name;
            scene.$rawScene = null; // 保存的话需要设置一个对应的RawScene文件
            return scene;
        };
        /**
         * load scene 加载场景
         * @param rawScene url
         */
        SceneManager.prototype.loadScene = function (url) {
            var rawScene = paper.Asset.find(url);
            if (rawScene) {
                var scene = rawScene.createInstance();
                if (scene) {
                    scene.$rawScene = rawScene;
                    if (paper.Application.isPlaying) {
                        egret3d.autoCombine();
                    }
                    return scene;
                }
            }
            return null;
        };
        /**
         * 卸载指定场景，如果创建列表为空，则创建一个空场景。
         */
        SceneManager.prototype.unloadScene = function (scene) {
            var index = this._scenes.indexOf(scene);
            if (index >= 0) {
                scene.$destroy();
                this._scenes.splice(index, 1);
            }
            if (this._scenes.length === 0) {
                this.createScene(paper.Scene.defaultName);
            }
        };
        /**
         * 卸载所有场景，并创建一个默认场景。
         */
        SceneManager.prototype.unloadAllScene = function () {
            for (var _i = 0, _a = this._scenes; _i < _a.length; _i++) {
                var scene = _a[_i];
                scene.$destroy();
            }
            this._scenes.length = 0;
            if (this._scenes.length === 0) {
                this.createScene(paper.Scene.defaultName);
            }
        };
        /**
         *
         */
        SceneManager.prototype.getSceneByName = function (name) {
            for (var _i = 0, _a = this._scenes; _i < _a.length; _i++) {
                var scene = _a[_i];
                if (scene.name === name) {
                    return scene;
                }
            }
            return null;
        };
        /**
         *
         */
        SceneManager.prototype.getSceneByURL = function (url) {
            for (var _i = 0, _a = this._scenes; _i < _a.length; _i++) {
                var scene = _a[_i];
                if (scene.$rawScene && scene.$rawScene.url === url) {
                    return scene;
                }
            }
            return null;
        };
        /**
         * 获取当前激活的场景
         */
        SceneManager.prototype.getActiveScene = function () {
            return this._scenes[0];
        };
        return SceneManager;
    }());
    paper.SceneManager = SceneManager;
    __reflect(SceneManager.prototype, "paper.SceneManager");
})(paper || (paper = {}));
var paper;
(function (paper) {
    /**
     *
     */
    var BaseComponent = (function (_super) {
        __extends(BaseComponent, _super);
        function BaseComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * 组件挂载的 GameObject
             */
            _this.gameObject = BaseComponent._injectGameObject;
            _this._enabled = true;
            return _this;
        }
        /**
         * 添加组件后，内部初始化，在反序列化后被调用。
         */
        BaseComponent.prototype.initialize = function () {
        };
        /**
         * 移除组件后调用。
         */
        BaseComponent.prototype.uninitialize = function () {
            this.gameObject = null;
        };
        /**
         * @inheritDoc
         */
        BaseComponent.prototype.serialize = function () {
            var target = paper.serializeRC(this);
            target._enabled = this._enabled;
            return target;
        };
        /**
         * @inheritDoc
         */
        BaseComponent.prototype.deserialize = function (element) {
            this._enabled = element._enabled === false ? false : true;
        };
        Object.defineProperty(BaseComponent.prototype, "enabled", {
            /**
             * 组件自身的激活状态
             */
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                if (this._enabled !== value) {
                    this._enabled = value;
                    paper.EventPool.dispatchEvent("__enabled__" /* Enabled */, this);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseComponent.prototype, "isActiveAndEnabled", {
            /**
             * 获取组件在场景中的激活状态
             */
            get: function () {
                return this._enabled && this.gameObject.activeInHierarchy;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            paper.serializedField
        ], BaseComponent.prototype, "_enabled", void 0);
        return BaseComponent;
    }(paper.SerializableObject));
    paper.BaseComponent = BaseComponent;
    __reflect(BaseComponent.prototype, "paper.BaseComponent");
})(paper || (paper = {}));
var editor;
(function (editor) {
    /**属性信息 */
    var PropertyInfo = (function () {
        function PropertyInfo(name, editType, option) {
            this.name = name;
            this.editType = editType;
            this.option = option;
        }
        return PropertyInfo;
    }());
    editor.PropertyInfo = PropertyInfo;
    __reflect(PropertyInfo.prototype, "editor.PropertyInfo");
    /**编辑类型 */
    var EditType;
    (function (EditType) {
        /**数字输入 */
        EditType[EditType["NUMBER"] = 0] = "NUMBER";
        /**文本输入 */
        EditType[EditType["TEXT"] = 1] = "TEXT";
        /**选中框 */
        EditType[EditType["CHECKBOX"] = 2] = "CHECKBOX";
        /**vertor2 */
        EditType[EditType["VECTOR2"] = 3] = "VECTOR2";
        /**vertor3 */
        EditType[EditType["VECTOR3"] = 4] = "VECTOR3";
        /**vertor4 */
        EditType[EditType["VECTOR4"] = 5] = "VECTOR4";
        /**Quaternion */
        EditType[EditType["QUATERNION"] = 6] = "QUATERNION";
        /**颜色选择器 */
        EditType[EditType["COLOR"] = 7] = "COLOR";
        /**下拉 */
        EditType[EditType["LIST"] = 8] = "LIST";
        /**Rect */
        EditType[EditType["RECT"] = 9] = "RECT";
        /**材质 */
        EditType[EditType["MATERIAL"] = 10] = "MATERIAL";
        /**材质数组 */
        EditType[EditType["MATERIAL_ARRAY"] = 11] = "MATERIAL_ARRAY";
        /**游戏对象 */
        EditType[EditType["GAMEOBJECT"] = 12] = "GAMEOBJECT";
        /**变换 */
        EditType[EditType["TRANSFROM"] = 13] = "TRANSFROM";
        /**声音 */
        EditType[EditType["SOUND"] = 14] = "SOUND";
        /**Mesh */
        EditType[EditType["MESH"] = 15] = "MESH";
        /**数组 */
        EditType[EditType["ARRAY"] = 16] = "ARRAY";
    })(EditType = editor.EditType || (editor.EditType = {}));
    var customMap = {};
    /**
     * 装饰器:自定义
     */
    function custom() {
        return function (target) {
            customMap[target.name] = true;
        };
    }
    editor.custom = custom;
    var propertyMap = {};
    /**
     * 装饰器:属性
     * @param editType 编辑类型
     */
    function property(editType, option) {
        return function (target, property) {
            if (!propertyMap[target.constructor.name]) {
                propertyMap[target.constructor.name] = {
                    extends: target.__proto__.constructor.name,
                    propertyList: [],
                };
            }
            if (editType !== undefined) {
                propertyMap[target.constructor.name].propertyList.push(new PropertyInfo(property, editType, option));
            }
            else {
                //TODO:自动分析编辑类型
            }
        };
    }
    editor.property = property;
    /**
     * 检测一个实例对象是否为已被自定义
     * @param classInstance 实例对象
     */
    function isCustom(classInstance) {
        return customMap[classInstance.constructor.name] ? true : false;
    }
    editor.isCustom = isCustom;
    /**
     * 获取一个实例对象的编辑信息
     * @param classInstance 实例对象
     */
    function getEditInfo(classInstance) {
        var className = classInstance.constructor.name;
        function _getEditInfo(className) {
            var classInfo = propertyMap[className];
            if (classInfo) {
                var extendsInfo = _getEditInfo(classInfo.extends);
                extendsInfo = extendsInfo.concat(classInfo.propertyList);
                return extendsInfo;
            }
            return [];
        }
        return _getEditInfo(className);
    }
    editor.getEditInfo = getEditInfo;
})(editor || (editor = {}));
var paper;
(function (paper) {
    /**
     * SystemManager 是ecs内部的系统管理者，负责每帧循环时轮询每个系统。
     */
    var SystemManager = (function () {
        function SystemManager() {
            this._systems = [];
            this._unregisterSystems = [];
        }
        SystemManager.prototype._checkRegistered = function (systemClass) {
            for (var _i = 0, _a = this._systems; _i < _a.length; _i++) {
                var system = _a[_i];
                if (system && system.constructor === systemClass) {
                    console.warn("The system has been registed.", egret.getQualifiedClassName(systemClass));
                    return true;
                }
            }
            return false;
        };
        /**
         * 注册一个系统到管理器中
         * @param systemClass 要注册的系统
         * @param level 系统的优先级，越小越早执行。
         */
        SystemManager.prototype.register = function (systemClass, level) {
            if (level === void 0) { level = 0; }
            if (this._checkRegistered(systemClass)) {
                return;
            }
            var isAdded = false;
            paper.BaseSystem._createEnabled = true;
            var system = new systemClass();
            if (typeof level === "number") {
                system._level = level;
                for (var i = 0, l = this._systems.length; i < l; ++i) {
                    var eachSystem = this._systems[i];
                    if (eachSystem._level > system._level) {
                        isAdded = true;
                        this._systems.splice(i, 0, system);
                        break;
                    }
                }
            }
            if (!isAdded) {
                this._systems.push(system);
            }
            //
            system.initialize();
        };
        /**
         * 注册一个系统到管理器中
         * @param systemClass 要注册的系统
         * @param target 加入到目标系统的前面。
         */
        SystemManager.prototype.registerBefore = function (systemClass, target) {
            if (this._checkRegistered(systemClass)) {
                return;
            }
            var isAdded = false;
            paper.BaseSystem._createEnabled = true;
            var system = new systemClass();
            for (var i = 0, l = this._systems.length; i < l; ++i) {
                var eachSystem = this._systems[i];
                if (eachSystem.constructor === target) {
                    isAdded = true;
                    this._systems.splice(i, 0, system);
                    break;
                }
            }
            if (!isAdded) {
                this._systems.push(system);
            }
            //
            system.initialize();
        };
        /**
         * 注册一个系统到管理器中
         * @param systemClass 要注册的系统
         * @param target 加入到目标系统的后面。
         */
        SystemManager.prototype.registerAfter = function (systemClass, target) {
            if (this._checkRegistered(systemClass)) {
                return;
            }
            var isAdded = false;
            paper.BaseSystem._createEnabled = true;
            var system = new systemClass();
            for (var i = 0, l = this._systems.length; i < l; ++i) {
                var eachSystem = this._systems[i];
                if (eachSystem.constructor === target) {
                    isAdded = true;
                    this._systems.splice(i + 1, 0, system);
                    break;
                }
            }
            if (!isAdded) {
                this._systems.push(system);
            }
            //
            system.initialize();
        };
        /**
         * 注销一个管理器中的系统
         * @param systemClass 要注销的系统
         */
        SystemManager.prototype.unregister = function (systemClass) {
            var index = 0;
            for (var _i = 0, _a = this._systems; _i < _a.length; _i++) {
                var system = _a[_i];
                if (system && system.constructor === systemClass) {
                    this._unregisterSystems.push(system);
                    this._systems[index] = null;
                    return;
                }
                index++;
            }
        };
        /**
         *
         */
        SystemManager.prototype.enableSystem = function (systemClass) {
            for (var _i = 0, _a = this._systems; _i < _a.length; _i++) {
                var system = _a[_i];
                if (system && system.constructor === systemClass) {
                    system.enable = true;
                }
            }
        };
        /**
         *
         */
        SystemManager.prototype.disableSystem = function (systemClass) {
            for (var _i = 0, _a = this._systems; _i < _a.length; _i++) {
                var system = _a[_i];
                if (system && system.constructor === systemClass) {
                    system.enable = false;
                }
            }
        };
        /**
         *
         */
        SystemManager.prototype.getSystemEnabled = function (systemClass) {
            for (var _i = 0, _a = this._systems; _i < _a.length; _i++) {
                var system = _a[_i];
                if (system && system.constructor === systemClass) {
                    return system.enable;
                }
            }
            return false;
        };
        /**
         * 获取一个管理器中指定的系统实例。
         */
        SystemManager.prototype.getSystem = function (systemClass) {
            for (var _i = 0, _a = this._systems; _i < _a.length; _i++) {
                var system = _a[_i];
                if (system && system.constructor === systemClass) {
                    return system;
                }
            }
            return null;
        };
        /**
         *
         */
        SystemManager.prototype.update = function () {
            var index = 0;
            var removeCount = 0;
            for (var _i = 0, _a = this._systems; _i < _a.length; _i++) {
                var system = _a[_i];
                if (system) {
                    if (removeCount > 0) {
                        this._systems[index - removeCount] = system;
                        this._systems[index] = null;
                    }
                    if (system.enable) {
                        system.update();
                    }
                }
                else {
                    removeCount++;
                }
                index++;
            }
            if (removeCount > 0) {
                this._systems.length -= removeCount;
                if (this._unregisterSystems.length > 0) {
                    for (var _b = 0, _c = this._unregisterSystems; _b < _c.length; _b++) {
                        var system = _c[_b];
                        system.uninitialize();
                    }
                    this._unregisterSystems.length = 0;
                }
            }
        };
        return SystemManager;
    }());
    paper.SystemManager = SystemManager;
    __reflect(SystemManager.prototype, "paper.SystemManager");
})(paper || (paper = {}));
var egret3d;
(function (egret3d) {
    /**
     * get max precision
     * @param gl
     * @param precision {string} the expect precision, can be: "highp"|"mediump"|"lowp"
     */
    function getMaxPrecision(gl, precision) {
        if (precision === void 0) { precision = "highp"; }
        if (precision === 'highp') {
            if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision > 0 &&
                gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision > 0) {
                return 'highp';
            }
            precision = 'mediump';
        }
        if (precision === 'mediump') {
            if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision > 0 &&
                gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision > 0) {
                return 'mediump';
            }
        }
        return 'lowp';
    }
    function getExtension(gl, name) {
        var browserPrefixes = [
            "",
            "MOZ_",
            "OP_",
            "WEBKIT_"
        ];
        for (var ii = 0; ii < browserPrefixes.length; ++ii) {
            var prefixedName = browserPrefixes[ii] + name;
            var ext = gl.getExtension(prefixedName);
            if (ext) {
                return ext;
            }
        }
        return null;
    }
    var WebGLCapabilities = (function () {
        function WebGLCapabilities() {
            this.precision = "highp";
        }
        WebGLCapabilities.prototype.initialize = function (gl) {
            this.version = parseFloat(/^WebGL\ ([0-9])/.exec(gl.getParameter(gl.VERSION))[1]);
            this.maxPrecision = getMaxPrecision(gl, this.precision);
            this.maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
            this.maxVertexTextures = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
            this.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
            this.maxCubemapSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
            this.maxVertexUniformVectors = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
            this.floatTextures = !!getExtension(gl, 'OES_texture_float');
            this.anisotropyExt = getExtension(gl, 'EXT_texture_filter_anisotropic');
            this.shaderTextureLOD = getExtension(gl, 'EXT_shader_texture_lod');
            this.maxAnisotropy = (this.anisotropyExt !== null) ? gl.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
            // use dfdx and dfdy must enable OES_standard_derivatives
            getExtension(gl, "OES_standard_derivatives");
            // GL_OES_standard_derivatives
            getExtension(gl, "GL_OES_standard_derivatives");
        };
        return WebGLCapabilities;
    }());
    egret3d.WebGLCapabilities = WebGLCapabilities;
    __reflect(WebGLCapabilities.prototype, "egret3d.WebGLCapabilities");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var Vector2 = (function () {
        /**
         *
         */
        function Vector2(x, y) {
            if (x === void 0) { x = 0.0; }
            if (y === void 0) { y = 0.0; }
            this.x = x;
            this.y = y;
        }
        /**
         * @inheritDoc
         */
        Vector2.prototype.serialize = function () {
            return [this.x, this.y];
        };
        /**
         * @inheritDoc
         */
        Vector2.prototype.deserialize = function (element) {
            this.x = element[0];
            this.y = element[1];
        };
        Vector2.set = function (x, y, out) {
            out.x = x;
            out.y = y;
            return out;
        };
        Vector2.normalize = function (v) {
            var num = this.getLength(v);
            if (num > Number.MIN_VALUE) {
                v.x = v.x / num;
                v.y = v.y / num;
            }
            else {
                v.x = 0;
                v.y = 0;
            }
            return v;
        };
        Vector2.add = function (v1, v2, out) {
            out.x = v1.x + v2.x;
            out.y = v1.y + v2.y;
            return out;
        };
        Vector2.subtract = function (v1, v2, out) {
            out.x = v1.x - v2.x;
            out.y = v1.y - v2.y;
            return out;
        };
        Vector2.multiply = function (v1, v2, out) {
            out.x = v1.x * v2.x;
            out.y = v1.y * v2.y;
            return out;
        };
        Vector2.dot = function (v1, v2) {
            return v1.x * v2.x + v1.y * v2.y;
        };
        Vector2.scale = function (v, scaler) {
            v.x = v.x * scaler;
            v.y = v.y * scaler;
            return v;
        };
        Vector2.getLength = function (v) {
            return Math.sqrt(v.x * v.x + v.y * v.y);
        };
        Vector2.getDistance = function (v1, v2) {
            this.subtract(v1, v2, _helpVector2A);
            return this.getLength(_helpVector2A);
        };
        Vector2.copy = function (v, out) {
            out.x = v.x;
            out.y = v.y;
            return out;
        };
        Vector2.equal = function (v1, v2, threshold) {
            if (threshold === void 0) { threshold = 0.00001; }
            if (Math.abs(v1.x - v2.x) > threshold) {
                return false;
            }
            if (Math.abs(v1.y - v2.y) > threshold) {
                return false;
            }
            return true;
        };
        Vector2.lerp = function (v1, v2, value, out) {
            out.x = v1.x * (1 - value) + v2.x * value;
            out.y = v1.y * (1 - value) + v2.y * value;
            return out;
        };
        return Vector2;
    }());
    egret3d.Vector2 = Vector2;
    __reflect(Vector2.prototype, "egret3d.Vector2", ["paper.ISerializable"]);
    var _helpVector2A = new Vector2();
    /**
     *
     */
    egret3d.helpVector2A = new Vector2();
    /**
     *
     */
    egret3d.helpVector2B = new Vector2();
    /**
     *
     */
    egret3d.helpVector2C = new Vector2();
    /**
     *
     */
    egret3d.helpVector2D = new Vector2();
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var EventDispatcher = (function () {
        function EventDispatcher() {
            this._eventMap = {};
        }
        EventDispatcher.prototype.addEventListener = function (type, listener, thisObject) {
            var list = this._eventMap[type];
            if (!list) {
                list = this._eventMap[type] = [];
            }
            list.push({ listener: listener, thisObject: thisObject || this });
        };
        EventDispatcher.prototype.removeEventListener = function (type, listener, thisObject) {
            var list = this._eventMap[type];
            if (!list) {
                return;
            }
            for (var i = 0, len = list.length; i < len; i++) {
                var bin = list[i];
                if (bin.listener == listener && bin.thisObject == (thisObject || this)) {
                    list.splice(i, 1);
                    break;
                }
            }
        };
        EventDispatcher.prototype.dispatchEvent = function (event) {
            event.target = this;
            this.notifyListener(event);
        };
        EventDispatcher.prototype.notifyListener = function (event) {
            var list = this._eventMap[event.type || event];
            if (!list) {
                return;
            }
            for (var i = 0, len = list.length; i < len; i++) {
                var bin = list[i];
                bin.listener.call(bin.thisObject, event);
            }
        };
        return EventDispatcher;
    }());
    egret3d.EventDispatcher = EventDispatcher;
    __reflect(EventDispatcher.prototype, "egret3d.EventDispatcher");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var sound;
    (function (sound) {
        /**
         *
         */
        var WebAudioChannel2D = (function () {
            function WebAudioChannel2D() {
                this._init();
            }
            WebAudioChannel2D.prototype._init = function () {
                var context = sound.WebAudio.instance.audioContext;
                this.source = context.createBufferSource();
                this.gain = context.createGain();
                // Connect up the nodes
                this.source.connect(this.gain);
                this.gain.connect(context.destination);
            };
            Object.defineProperty(WebAudioChannel2D.prototype, "buffer", {
                set: function (buffer) {
                    this.source.buffer = buffer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebAudioChannel2D.prototype, "volume", {
                get: function () {
                    return this.gain.gain.value;
                },
                set: function (value) {
                    value = Math.max(Math.min(value, 1), -0.999);
                    this.gain.gain.value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebAudioChannel2D.prototype, "loop", {
                get: function () {
                    return this.source.loop;
                },
                set: function (value) {
                    this.source.loop = value;
                },
                enumerable: true,
                configurable: true
            });
            WebAudioChannel2D.prototype.start = function (offset) {
                this.source.start(undefined, offset || undefined);
            };
            WebAudioChannel2D.prototype.stop = function () {
                this.source.stop();
            };
            WebAudioChannel2D.prototype.dispose = function () {
                this.source.buffer = null;
            };
            return WebAudioChannel2D;
        }());
        sound.WebAudioChannel2D = WebAudioChannel2D;
        __reflect(WebAudioChannel2D.prototype, "egret3d.sound.WebAudioChannel2D");
    })(sound = egret3d.sound || (egret3d.sound = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * Camera系统
     */
    var CameraSystem = (function (_super) {
        __extends(CameraSystem, _super);
        function CameraSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [
                { componentClass: egret3d.Camera }
            ];
            return _this;
        }
        CameraSystem.prototype._applyDrawCall = function (context, draw) {
            context.updateModel(draw.transform);
            var drawType = "base";
            if (draw.boneData) {
                context.updateBones(draw.boneData);
                drawType = "skin";
            }
            if (draw.lightMapIndex >= 0) {
                if (draw.gameObject.scene.lightmaps.length > draw.lightMapIndex) {
                    context.updateLightmap(draw.gameObject.scene.lightmaps[draw.lightMapIndex], draw.mesh.glTFMesh.primitives[draw.subMeshInfo].attributes.TEXCOORD_1 ? 1 : 0, draw.lightMapScaleOffset);
                    drawType = "lightmap";
                }
            }
            var renderer = draw.gameObject.getComponent(egret3d.MeshRenderer);
            if (renderer && renderer.receiveShadows) {
                context.receiveShadow = true;
            }
            else {
                context.receiveShadow = false;
            }
            egret3d.WebGLKit.draw(context, draw.material, draw.mesh, draw.subMeshInfo, drawType, draw.transform._worldMatrixDeterminant < 0);
        };
        CameraSystem.prototype.$renderCamera = function (camera) {
            egret3d.DrawCallList.updateZdist(camera);
            egret3d.DrawCallList.sort();
            for (var _i = 0, _a = egret3d.Pool.drawCall.instances; _i < _a.length; _i++) {
                var drawCall = _a[_i];
                // 视锥剔除
                // if(drawCall.frustumTest) {
                //     if(!camera.testFrustumCulling(drawCall.gameObject.transform)) {
                //         return;
                //     }
                // }
                if (camera.cullingMask & drawCall.gameObject.layer) {
                    if (drawCall.gameObject.activeInHierarchy) {
                        this._applyDrawCall(camera.context, drawCall);
                    }
                }
            }
            // Egret2D渲染不加入DrawCallList的排序
            var egret2DRenderSystem = paper.Application.systemManager.getSystem(egret3d.Egret2DRendererSystem);
            if (egret2DRenderSystem && egret2DRenderSystem.enable) {
                for (var _b = 0, _c = egret2DRenderSystem.components; _b < _c.length; _b++) {
                    var egret2DRenderer = _c[_b];
                    if (camera.cullingMask & egret2DRenderer.gameObject.layer) {
                        egret2DRenderer.render(camera.context, camera);
                    }
                }
            }
        };
        /**
         * @inheritDoc
         */
        CameraSystem.prototype.update = function () {
            this._components.sort(function (a, b) {
                return a.order - b.order;
            });
            var lightSystem = paper.Application.systemManager.getSystem(egret3d.LightSystem);
            var lights = lightSystem ? lightSystem.components : null;
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                component.update(paper.Time.deltaTime);
                if (lights && lights.length > 0) {
                    component.context.updateLights(lights); // TODO 性能优化
                }
            }
            egret3d.Performance.startCounter("render");
            if (this._components.length > 0) {
                for (var _b = 0, _c = this._components; _b < _c.length; _b++) {
                    var component = _c[_b];
                    if (component.postQueues.length === 0) {
                        component.context.drawtype = "";
                        component._targetAndViewport(component.renderTarget, false);
                        this.$renderCamera(component);
                    }
                    else {
                        for (var _d = 0, _e = component.postQueues; _d < _e.length; _d++) {
                            var item = _e[_d];
                            item.render(component, this);
                        }
                    }
                }
            }
            else {
                egret3d.WebGLKit.webgl.clearColor(0, 0, 0, 1);
                egret3d.WebGLKit.webgl.clearDepth(1.0);
                egret3d.WebGLKit.webgl.clear(egret3d.WebGLKit.webgl.COLOR_BUFFER_BIT | egret3d.WebGLKit.webgl.DEPTH_BUFFER_BIT);
            }
            egret3d.Performance.endCounter("render");
            egret3d.Performance.updateFPS();
        };
        return CameraSystem;
    }(paper.BaseSystem));
    egret3d.CameraSystem = CameraSystem;
    __reflect(CameraSystem.prototype, "egret3d.CameraSystem");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var helpVec3_1 = new egret3d.Vector3();
    var helpVec3_2 = new egret3d.Vector3();
    var helpVec3_3 = new egret3d.Vector3();
    var helpMat4_1 = new egret3d.Matrix();
    var Quaternion = (function () {
        /**
         *
         */
        function Quaternion(x, y, z, w) {
            if (x === void 0) { x = 0.0; }
            if (y === void 0) { y = 0.0; }
            if (z === void 0) { z = 0.0; }
            if (w === void 0) { w = 1.0; }
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        /**
         * @inheritDoc
         */
        Quaternion.prototype.serialize = function () {
            return [this.x, this.y, this.z, this.w];
        };
        /**
         * @inheritDoc
         */
        Quaternion.prototype.deserialize = function (element) {
            this.x = element[0];
            this.y = element[1];
            this.z = element[2];
            this.w = element[3];
        };
        Quaternion.set = function (x, y, z, w, out) {
            out.x = x;
            out.y = y;
            out.z = z;
            out.w = w;
            return out;
        };
        Quaternion.getMagnitude = function (src) {
            return Math.sqrt(src.w * src.w + src.x * src.x + src.y * src.y + src.z * src.z);
        };
        Quaternion.fromYawPitchRoll = function (yaw, pitch, roll, out) {
            // Produces a quaternion from Euler angles in the z-y-x orientation (Tait-Bryan angles)
            var halfRoll = roll * 0.5;
            var halfPitch = pitch * 0.5;
            var halfYaw = yaw * 0.5;
            var sinRoll = Math.sin(halfRoll);
            var cosRoll = Math.cos(halfRoll);
            var sinPitch = Math.sin(halfPitch);
            var cosPitch = Math.cos(halfPitch);
            var sinYaw = Math.sin(halfYaw);
            var cosYaw = Math.cos(halfYaw);
            out.x = (cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll);
            out.y = (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll);
            out.z = (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll);
            out.w = (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll);
            return out;
        };
        Quaternion.fromEulerAngles = function (ax, ay, az, out) {
            ax *= Math.PI / 180;
            ay *= Math.PI / 180;
            az *= Math.PI / 180;
            var halfX = ax * 0.5, halfY = ay * 0.5, halfZ = az * 0.5;
            var cosX = Math.cos(halfX), sinX = Math.sin(halfX);
            var cosY = Math.cos(halfY), sinY = Math.sin(halfY);
            var cosZ = Math.cos(halfZ), sinZ = Math.sin(halfZ);
            out.w = cosX * cosY * cosZ + sinX * sinY * sinZ;
            out.x = sinX * cosY * cosZ + cosX * sinY * sinZ;
            out.y = cosX * sinY * cosZ - sinX * cosY * sinZ;
            out.z = cosX * cosY * sinZ - sinX * sinY * cosZ;
            return this.normalize(out);
        };
        Quaternion.fromAxisAngle = function (axis, angle, out) {
            angle *= Math.PI / 180.0;
            var halfAngle = angle * 0.5;
            var sin_a = Math.sin(halfAngle);
            out.w = Math.cos(halfAngle);
            out.x = axis.x * sin_a;
            out.y = axis.y * sin_a;
            out.z = axis.z * sin_a;
            this.normalize(out);
            return out;
        };
        Quaternion.fromMatrix = function (matrix, out) {
            var m00, m01, m02, m10, m11, m12, m20, m21, m22, tr, s, rs, lx, ly, lz;
            var m = matrix.rawData;
            // Cache matrix values for super-speed
            m00 = m[0];
            m01 = m[1];
            m02 = m[2];
            m10 = m[4];
            m11 = m[5];
            m12 = m[6];
            m20 = m[8];
            m21 = m[9];
            m22 = m[10];
            // Remove the scale from the matrix
            lx = 1 / Math.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
            ly = 1 / Math.sqrt(m10 * m10 + m11 * m11 + m12 * m12);
            lz = 1 / Math.sqrt(m20 * m20 + m21 * m21 + m22 * m22);
            m00 *= lx;
            m01 *= lx;
            m02 *= lx;
            m10 *= ly;
            m11 *= ly;
            m12 *= ly;
            m20 *= lz;
            m21 *= lz;
            m22 *= lz;
            // http://www.cs.ucr.edu/~vbz/resources/quatut.pdf
            tr = m00 + m11 + m22;
            if (tr >= 0) {
                s = Math.sqrt(tr + 1);
                out.w = s * 0.5;
                s = 0.5 / s;
                out.x = (m12 - m21) * s;
                out.y = (m20 - m02) * s;
                out.z = (m01 - m10) * s;
            }
            else {
                if (m00 > m11) {
                    if (m00 > m22) {
                        // XDiagDomMatrix
                        rs = (m00 - (m11 + m22)) + 1;
                        rs = Math.sqrt(rs);
                        out.x = rs * 0.5;
                        rs = 0.5 / rs;
                        out.w = (m12 - m21) * rs;
                        out.y = (m01 + m10) * rs;
                        out.z = (m02 + m20) * rs;
                    }
                    else {
                        // ZDiagDomMatrix
                        rs = (m22 - (m00 + m11)) + 1;
                        rs = Math.sqrt(rs);
                        out.z = rs * 0.5;
                        rs = 0.5 / rs;
                        out.w = (m01 - m10) * rs;
                        out.x = (m20 + m02) * rs;
                        out.y = (m21 + m12) * rs;
                    }
                }
                else if (m11 > m22) {
                    // YDiagDomMatrix
                    rs = (m11 - (m22 + m00)) + 1;
                    rs = Math.sqrt(rs);
                    out.y = rs * 0.5;
                    rs = 0.5 / rs;
                    out.w = (m20 - m02) * rs;
                    out.z = (m12 + m21) * rs;
                    out.x = (m10 + m01) * rs;
                }
                else {
                    // ZDiagDomMatrix
                    rs = (m22 - (m00 + m11)) + 1;
                    rs = Math.sqrt(rs);
                    out.z = rs * 0.5;
                    rs = 0.5 / rs;
                    out.w = (m01 - m10) * rs;
                    out.x = (m20 + m02) * rs;
                    out.y = (m21 + m12) * rs;
                }
            }
            return out;
        };
        Quaternion.lookAt = function (pos, target, out) {
            var dir = helpVec3_1;
            egret3d.Vector3.subtract(target, pos, dir);
            egret3d.Vector3.normalize(dir);
            var dirxz = helpVec3_2;
            helpVec3_2.x = dir.x;
            helpVec3_2.y = 0;
            helpVec3_2.z = dir.z;
            egret3d.Vector3.normalize(dirxz);
            var yaw = Math.acos(dirxz.z);
            if (dirxz.x < 0) {
                yaw = -yaw;
            }
            var dirxz1 = helpVec3_3;
            helpVec3_3.x = dir.x;
            helpVec3_3.y = 0;
            helpVec3_3.z = dir.z;
            var v3length = egret3d.Vector3.getLength(dirxz1);
            if (v3length > 0.9999999999) {
                v3length = 1;
            }
            if (v3length < -0.999999999) {
                v3length = -1;
            }
            var pitch = Math.acos(v3length);
            if (dir.y > 0) {
                pitch = -pitch;
            }
            this.fromYawPitchRoll(yaw, pitch, 0, out);
            return this.normalize(out);
        };
        Quaternion.lookAtWithUp = function (pos, target, up, out) {
            var eye = pos;
            var zaxis = egret3d.Vector3.subtract(target, eye, helpVec3_1); // right-hand coordinates system
            egret3d.Vector3.normalize(zaxis);
            var xaxis = egret3d.Vector3.cross(up, zaxis, helpVec3_2);
            egret3d.Vector3.normalize(xaxis);
            var yaxis = egret3d.Vector3.cross(zaxis, xaxis, helpVec3_3);
            return Quaternion.fromMatrix(egret3d.Matrix.set(xaxis.x, yaxis.x, zaxis.x, 0, xaxis.y, yaxis.y, zaxis.y, 0, xaxis.z, yaxis.z, zaxis.z, 0, 0, 0, 0, 1, helpMat4_1), out);
        };
        Quaternion.multiply = function (q1, q2, out) {
            var w1 = q1.w, x1 = q1.x, y1 = q1.y, z1 = q1.z;
            var w2 = q2.w, x2 = q2.x, y2 = q2.y, z2 = q2.z;
            out.w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
            out.x = w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2;
            out.y = w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2;
            out.z = w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2;
            this.normalize(out);
            return out;
        };
        Quaternion.normalize = function (out) {
            var mag = 1 / Math.sqrt(out.x * out.x + out.y * out.y + out.z * out.z + out.w * out.w);
            out.x *= mag;
            out.y *= mag;
            out.z *= mag;
            out.w *= mag;
            return out;
        };
        Quaternion.copy = function (q, out) {
            out.x = q.x;
            out.y = q.y;
            out.z = q.z;
            out.w = q.w;
            return out;
        };
        Quaternion.inverse = function (q) {
            var norm = q.w * q.w + q.x * q.x + q.y * q.y + q.z * q.z;
            if (norm > 0.0) {
                var invNorm = 1.0 / norm;
                q.w = q.w * invNorm;
                q.x = -q.x * invNorm;
                q.y = -q.y * invNorm;
                q.z = -q.z * invNorm;
            }
            return q;
        };
        Quaternion.toEulerAngles = function (q, out) {
            var temp = 2.0 * (q.w * q.x - q.y * q.z);
            temp = egret3d.floatClamp(temp, -1.0, 1.0);
            out.x = Math.asin(temp);
            out.y = Math.atan2(2.0 * (q.w * q.y + q.z * q.x), 1.0 - 2.0 * (q.y * q.y + q.x * q.x));
            out.z = Math.atan2(2.0 * (q.w * q.z + q.y * q.x), 1.0 - 2.0 * (q.x * q.x + q.z * q.z));
            out.x /= Math.PI / 180;
            out.y /= Math.PI / 180;
            out.z /= Math.PI / 180;
            return out;
        };
        Quaternion.toMatrix = function (q, out) {
            var xy2 = 2.0 * q.x * q.y, xz2 = 2.0 * q.x * q.z, xw2 = 2.0 * q.x * q.w;
            var yz2 = 2.0 * q.y * q.z, yw2 = 2.0 * q.y * q.w, zw2 = 2.0 * q.z * q.w;
            var xx = q.x * q.x, yy = q.y * q.y, zz = q.z * q.z, ww = q.w * q.w;
            out.rawData[0] = xx - yy - zz + ww;
            out.rawData[4] = xy2 - zw2;
            out.rawData[8] = xz2 + yw2;
            out.rawData[12] = 0;
            out.rawData[1] = xy2 + zw2;
            out.rawData[5] = -xx + yy - zz + ww;
            out.rawData[9] = yz2 - xw2;
            out.rawData[13] = 0;
            out.rawData[2] = xz2 - yw2;
            out.rawData[6] = yz2 + xw2;
            out.rawData[10] = -xx - yy + zz + ww;
            out.rawData[14] = 0;
            out.rawData[3] = 0.0;
            out.rawData[7] = 0.0;
            out.rawData[11] = 0;
            out.rawData[15] = 1;
            return out;
        };
        Quaternion.toAxisAngle = function (q, axis) {
            var sqrLength = q.x * q.x + q.y * q.y + q.z * q.z;
            var angle = 0;
            if (sqrLength > 0.0) {
                angle = 2.0 * Math.acos(q.w);
                sqrLength = 1.0 / Math.sqrt(sqrLength);
                axis.x = q.x * sqrLength;
                axis.y = q.y * sqrLength;
                axis.z = q.z * sqrLength;
            }
            else {
                angle = 0;
                axis.x = 1.0;
                axis.y = 0;
                axis.z = 0;
            }
            angle /= Math.PI / 180.0;
            return angle;
        };
        Quaternion.transformVector3 = function (src, vector, out) {
            var x1, y1, z1, w1;
            var x2 = vector.x, y2 = vector.y, z2 = vector.z;
            w1 = -src.x * x2 - src.y * y2 - src.z * z2;
            x1 = src.w * x2 + src.y * z2 - src.z * y2;
            y1 = src.w * y2 - src.x * z2 + src.z * x2;
            z1 = src.w * z2 + src.x * y2 - src.y * x2;
            out.x = -w1 * src.x + x1 * src.w - y1 * src.z + z1 * src.y;
            out.y = -w1 * src.y + x1 * src.z + y1 * src.w - z1 * src.x;
            out.z = -w1 * src.z - x1 * src.y + y1 * src.x + z1 * src.w;
            return out;
        };
        Quaternion.transformVector3ByQuaternionData = function (src, srcseek, vector, out) {
            var x1, y1, z1, w1;
            var x2 = vector.x, y2 = vector.y, z2 = vector.z;
            var srcx = src[srcseek];
            var srcy = src[srcseek + 1];
            var srcz = src[srcseek + 2];
            var srcw = src[srcseek + 3];
            w1 = -srcx * x2 - srcy * y2 - srcz * z2;
            x1 = srcw * x2 + srcy * z2 - srcz * y2;
            y1 = srcw * y2 - srcx * z2 + srcz * x2;
            z1 = srcw * z2 + srcx * y2 - srcy * x2;
            out.x = -w1 * srcx + x1 * srcw - y1 * srcz + z1 * srcy;
            out.y = -w1 * srcy + x1 * srcz + y1 * srcw - z1 * srcx;
            out.z = -w1 * srcz - x1 * srcy + y1 * srcx + z1 * srcw;
            return out;
        };
        Quaternion.multiplyByQuaternionData = function (srca, srcaseek, srcb, out) {
            var w1 = srca[srcaseek + 3], x1 = srca[srcaseek + 0], y1 = srca[srcaseek + 1], z1 = srca[srcaseek + 2];
            var w2 = srcb.w, x2 = srcb.x, y2 = srcb.y, z2 = srcb.z;
            out.w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
            out.x = w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2;
            out.y = w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2;
            out.z = w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2;
            this.normalize(out);
            return out;
        };
        Quaternion.lerp = function (srca, srcb, out, t) {
            var w1 = srca.w, x1 = srca.x, y1 = srca.y, z1 = srca.z;
            var w2 = srcb.w, x2 = srcb.x, y2 = srcb.y, z2 = srcb.z;
            if (w1 * w2 + x1 * x2 + y1 * y2 + z1 * z2 < 0) {
                w2 = -w2;
                x2 = -x2;
                y2 = -y2;
                z2 = -z2;
            }
            out.w = w1 + t * (w2 - w1);
            out.x = x1 + t * (x2 - x1);
            out.y = y1 + t * (y2 - y1);
            out.z = z1 + t * (z2 - z1);
            var len = 1.0 / Math.sqrt(out.w * out.w + out.x * out.x + out.y * out.y + out.z * out.z);
            out.w *= len;
            out.x *= len;
            out.y *= len;
            out.z *= len;
            return out;
        };
        return Quaternion;
    }());
    egret3d.Quaternion = Quaternion;
    __reflect(Quaternion.prototype, "egret3d.Quaternion", ["paper.ISerializable"]);
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var BaseObjectAsset = (function (_super) {
        __extends(BaseObjectAsset, _super);
        function BaseObjectAsset() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._assets = {};
            _this._raw = null;
            return _this;
        }
        /**
         * TODO 应补全接口和枚举。
         *
         */
        BaseObjectAsset.prototype.$parse = function (jsonString) {
            // 兼容数据
            // jsonStr = jsonStr.replace(/localRotate/g, "localRotation");
            // jsonStr = jsonStr.replace(/localTranslate/g, "localPosition");
            this._raw = JSON.parse(jsonString);
            if (this._raw) {
                for (var _i = 0, _a = this._raw.assets; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.url.indexOf("shader.json") < 0) {
                        this._assets[item.hashCode] = paper.Asset.find(egret3d.utils.combinePath(egret3d.utils.getPathByUrl(this.url) + "/", item.url));
                    }
                }
            }
        };
        /**
         * @inheritDoc
         */
        BaseObjectAsset.prototype.dispose = function () {
            for (var _i = 0, _a = this._assets; _i < _a.length; _i++) {
                var k = _a[_i];
                delete this._assets[k];
            }
            this._raw = null;
        };
        /**
         * @inheritDoc
         */
        BaseObjectAsset.prototype.caclByteLength = function () {
            return 0;
        };
        return BaseObjectAsset;
    }(paper.Asset));
    egret3d.BaseObjectAsset = BaseObjectAsset;
    __reflect(BaseObjectAsset.prototype, "egret3d.BaseObjectAsset");
    /**
     * prefab asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 预制件资源。
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Prefab = (function (_super) {
        __extends(Prefab, _super);
        function Prefab() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create instance from this prefab.
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 从当前预制件生成一个实例。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Prefab.prototype.createInstance = function () {
            if (!this._raw) {
                return null;
            }
            var gameObject = paper.deserialize(this._raw, this._assets);
            return gameObject;
        };
        /**
         * @deprecated
         */
        Prefab.prototype.getClone = function () {
            return this.createInstance();
        };
        return Prefab;
    }(BaseObjectAsset));
    egret3d.Prefab = Prefab;
    __reflect(Prefab.prototype, "egret3d.Prefab");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    // type Required
    /**
     * 引擎启动入口
     */
    function runEgret(options) {
        if (options === void 0) { options = { antialias: false }; }
        //
        var div = document.getElementsByClassName("egret-player")[0];
        var requiredOptions = {
            antialias: options.antialias,
            contentWidth: parseInt(div.getAttribute("data-content-width")),
            contentHeight: parseInt(div.getAttribute("data-content-height"))
        };
        var canvas = document.createElement("canvas");
        div.appendChild(canvas);
        egret3d.WebGLKit.init(canvas, requiredOptions);
        egret3d.InputManager.init(canvas);
        egret3d.DefaultMeshes.init();
        egret3d.DefaultTextures.init();
        egret3d.DefaultShaders.init();
        egret3d.stage.init(canvas, requiredOptions);
        paper.Application.init();
    }
    egret3d.runEgret = runEgret;
})(egret3d || (egret3d = {}));
var paper;
(function (paper) {
    /**
     * 销毁系统
     *
     */
    var DestroySystem = (function (_super) {
        __extends(DestroySystem, _super);
        function DestroySystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._bufferedComponents = [];
            _this._bufferedGameObjects = [];
            return _this;
        }
        /**
         * @inheritDoc
         */
        DestroySystem.prototype.update = function () {
            for (var _i = 0, _a = this._bufferedComponents; _i < _a.length; _i++) {
                var component = _a[_i];
                paper.EventPool.dispatchEvent("__destroy__" /* Destroy */, component);
                component.uninitialize();
            }
            this._bufferedComponents.length = 0;
            this._bufferedGameObjects.length = 0;
        };
        /**
         * 将实体缓存到销毁系统，以便在系统运行时销毁。
         *
         */
        DestroySystem.prototype.bufferComponent = function (component) {
            if (this._bufferedComponents.indexOf(component) >= 0) {
                return;
            }
            this._bufferedComponents.push(component);
        };
        /**
         * 将实体缓存到销毁系统，以便在系统运行时销毁。
         *
         */
        DestroySystem.prototype.bufferGameObject = function (gameObject) {
            if (this._bufferedGameObjects.indexOf(gameObject) >= 0) {
                return;
            }
            this._bufferedGameObjects.push(gameObject);
            if (gameObject.transform) {
                for (var _i = 0, _a = gameObject.transform.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    child.gameObject.destroy();
                }
            }
        };
        return DestroySystem;
    }(paper.BaseSystem));
    paper.DestroySystem = DestroySystem;
    __reflect(DestroySystem.prototype, "paper.DestroySystem");
})(paper || (paper = {}));
var paper;
(function (paper) {
    /**
     * @internal
     */
    var EndSystem = (function (_super) {
        __extends(EndSystem, _super);
        function EndSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EndSystem.prototype.update = function () {
            egret3d.InputManager.update(paper.Time.deltaTime);
            egret3d.Performance.endCounter("all" /* All */);
        };
        return EndSystem;
    }(paper.BaseSystem));
    paper.EndSystem = EndSystem;
    __reflect(EndSystem.prototype, "paper.EndSystem");
})(paper || (paper = {}));
var paper;
(function (paper) {
    /**
     * @internal
     */
    var StartSystem = (function (_super) {
        __extends(StartSystem, _super);
        function StartSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StartSystem.prototype.update = function () {
            egret3d.Performance.startCounter("all" /* All */);
            egret3d.stage.update();
            var _a = egret3d.stage.absolutePosition, x = _a.x, y = _a.y, w = _a.w;
            var scale = egret3d.stage.screenViewport.w / w;
            egret3d.InputManager.touch.updateOffsetAndScale(x, y, scale);
            egret3d.InputManager.mouse.updateOffsetAndScale(x, y, scale);
        };
        return StartSystem;
    }(paper.BaseSystem));
    paper.StartSystem = StartSystem;
    __reflect(StartSystem.prototype, "paper.StartSystem");
})(paper || (paper = {}));
var paper;
(function (paper) {
    var KEY_GAMEOBJECTS = "gameObjects";
    var KEY_COMPONENTS = "components";
    var KEY_CHILDREN = "children";
    var KEY_SERIALIZE = "serialize";
    var _sourcePath = "";
    var _hashCodes = []; // 缓存序列化记录，提高查找效率
    var _serializeData = null;
    /**
     * 序列化方法
     * 只有 ISerializable (有对应hashCode属性) 参与序列化
     * 只有被标记的对象属性 参与序列化
     * 序列化后，输出 ISerializeData
     * 对象在objects中按生成顺序，root一定是第一个元素。
     * 允许依赖标记对序列化对象数据分类，以便单独处理一些对象（例如资源等等，但资源的路径这里不做处理，在方法外由开发者自行处理）
     */
    function serialize(source, sourcePath) {
        if (sourcePath === void 0) { sourcePath = ""; }
        _serializeData = { objects: [] };
        _sourcePath = sourcePath;
        if (!_sourcePath && source instanceof paper.Scene) {
            var rawScene = source.$rawScene;
            _sourcePath = rawScene ? rawScene.url : "";
        }
        _serializeObject(source);
        _hashCodes.length = 0;
        var data = _serializeData;
        _serializeData = null;
        return data;
    }
    paper.serialize = serialize;
    /**
     *
     */
    function serializeAsset(source) {
        var target = _serializeObject(source);
        if (_sourcePath && !(source instanceof egret3d.Shader)) {
            target.url = egret3d.utils.getRelativePath(source.url, _sourcePath);
        }
        if (!source.url) {
            return null;
        }
        return _serializeR(source);
    }
    paper.serializeAsset = serializeAsset;
    /**
     *
     */
    function serializeRC(source) {
        var className = egret.getQualifiedClassName(source);
        return { hashCode: source.hashCode, class: paper.findClassCode(className) || className };
    }
    paper.serializeRC = serializeRC;
    /**
     *
     */
    function getTypesFromPrototype(classPrototype, typeKey, types) {
        if (types === void 0) { types = null; }
        if ((typeKey in classPrototype)) {
            types = types || [];
            for (var _i = 0, _a = classPrototype[typeKey]; _i < _a.length; _i++) {
                var type = _a[_i];
                types.push(type);
            }
        }
        if (classPrototype.__proto__) {
            getTypesFromPrototype(classPrototype.__proto__, typeKey, types);
        }
        return types;
    }
    paper.getTypesFromPrototype = getTypesFromPrototype;
    function _serializeR(source) {
        return { hashCode: source.hashCode };
    }
    function _serializeC(source) {
        var className = egret.getQualifiedClassName(source);
        return { class: paper.findClassCode(className) || className };
    }
    function _serializeObject(source, isStruct) {
        if (isStruct === void 0) { isStruct = false; }
        if (_hashCodes.indexOf(source.hashCode) >= 0) {
            // if (!(source instanceof Asset)) {
            //     console.warn("Serialize object again.", source.hashCode);
            // }
            return _serializeR(source);
        }
        var classPrototype = source.constructor.prototype;
        var hasCustomSerialize = classPrototype.hasOwnProperty(KEY_SERIALIZE);
        var target = hasCustomSerialize ? classPrototype[KEY_SERIALIZE].apply(source) : (isStruct ? _serializeC(source) : serializeRC(source));
        if (!isStruct && _serializeData) {
            _hashCodes.push(source.hashCode);
            // Add to custom.
            if ("__serializedType" /* SerializedType */ in source) {
                for (var _i = 0, _a = source["__serializedType" /* SerializedType */]; _i < _a.length; _i++) {
                    var type = _a[_i];
                    if (type in _serializeData) {
                        _serializeData[type].push(target);
                    }
                    else {
                        _serializeData[type] = [target];
                    }
                }
            }
            else {
                _serializeData.objects.push(target);
            }
        }
        if (!hasCustomSerialize) {
            var serializedKeys = getTypesFromPrototype(classPrototype, "__serialized" /* Serialized */);
            if (serializedKeys && serializedKeys.length > 0) {
                for (var _b = 0, serializedKeys_1 = serializedKeys; _b < serializedKeys_1.length; _b++) {
                    var key = serializedKeys_1[_b];
                    target[key] = _serializeChild(source[key], source, key);
                }
            }
        }
        return target;
    }
    function _serializeChild(source, parent, key) {
        if (source === null || source === undefined) {
            return source;
        }
        switch (typeof source) {
            case "function":
                return undefined;
            case "object": {
                if (Array.isArray(source)) {
                    var target = [];
                    for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
                        var element = source_1[_i];
                        target.push(_serializeChild(element, parent, key));
                    }
                    return target;
                }
                if (source.constructor === Object) {
                    var target = {};
                    for (var k in source) {
                        target[k] = _serializeChild(source[k], parent, key);
                    }
                    return target;
                }
                // TODO es6
                if (source instanceof paper.Asset) {
                    return serializeAsset(source);
                }
                if (source instanceof paper.Scene || source instanceof paper.GameObject || source instanceof paper.BaseComponent) {
                    if (parent) {
                        if (parent instanceof paper.Scene) {
                            if (key === KEY_GAMEOBJECTS) {
                                _serializeObject(source);
                                return _serializeR(source);
                            }
                        }
                        else if (parent instanceof paper.GameObject) {
                            if (key === KEY_COMPONENTS) {
                                _serializeObject(source);
                                return _serializeR(source);
                            }
                        }
                        else if (parent instanceof egret3d.Transform) {
                            if (key === KEY_CHILDREN) {
                                _serializeObject(source.gameObject);
                                return _serializeR(source);
                            }
                        }
                    }
                    return serializeRC(source);
                }
                return _serializeObject(source, true); // Other class.
            }
            default:
                return source;
        }
    }
})(paper || (paper = {}));
var egret3d;
(function (egret3d) {
    /**
     * WebGL窗口信息
     */
    var Stage3D = (function () {
        function Stage3D() {
            this.screenViewport = { x: 0, y: 0, w: 0, h: 0 };
            this.absolutePosition = { x: 0, y: 0, w: 0, h: 0 };
            this._resizeDirty = true;
        }
        /**
         * @internal
         */
        Stage3D.prototype.init = function (canvas, options) {
            var _this = this;
            this._canvas = canvas;
            window.addEventListener("resize", function () { return _this._resizeDirty = true; }, false);
            var screenViewport = this.screenViewport;
            screenViewport.w = options.contentWidth;
            screenViewport.h = options.contentHeight;
            canvas.width = screenViewport.w;
            canvas.height = screenViewport.h;
        };
        Stage3D.prototype.update = function () {
            if (this._resizeDirty) {
                this._resize();
                this._resizeDirty = false;
            }
        };
        Stage3D.prototype._resize = function () {
            var boundingClientWidth = window.innerWidth;
            var boundingClientHeight = window.innerHeight;
            var stageSize = calculateStageSize("showAll", boundingClientWidth, boundingClientHeight, this.screenViewport.w, this.screenViewport.h);
            var canvas = this._canvas;
            var absolutePosition = this.absolutePosition;
            absolutePosition.w = stageSize.displayWidth;
            absolutePosition.h = stageSize.displayHeight;
            var isLandscape = stageSize.displayWidth > stageSize.displayHeight;
            var top = 0;
            if (isLandscape) {
                absolutePosition.y = top + (boundingClientHeight - stageSize.displayHeight) / 2;
                absolutePosition.x = (boundingClientWidth - stageSize.displayWidth) / 2;
            }
            else {
                absolutePosition.y = top + (boundingClientHeight - stageSize.displayHeight) / 2;
                absolutePosition.x = (boundingClientWidth - stageSize.displayWidth) / 2;
            }
            var x = absolutePosition.x, y = absolutePosition.y, w = absolutePosition.w, h = absolutePosition.h;
            canvas.style.left = x + "px";
            canvas.style.top = y + "px";
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            canvas.style.position = "absolute";
        };
        return Stage3D;
    }());
    egret3d.Stage3D = Stage3D;
    __reflect(Stage3D.prototype, "egret3d.Stage3D");
    function calculateStageSize(scaleMode, screenWidth, screenHeight, contentWidth, contentHeight) {
        var displayWidth = screenWidth;
        var displayHeight = screenHeight;
        var stageWidth = contentWidth;
        var stageHeight = contentHeight;
        var scaleX = (screenWidth / stageWidth) || 0;
        var scaleY = (screenHeight / stageHeight) || 0;
        if (scaleX > scaleY) {
            displayWidth = Math.round(stageWidth * scaleY);
        }
        else {
            displayHeight = Math.round(stageHeight * scaleX);
        }
        // switch (scaleMode) {
        //     case StageScaleMode.EXACT_FIT:
        //         break;
        //     case StageScaleMode.FIXED_HEIGHT:
        //         stageWidth = Math.round(screenWidth / scaleY);
        //         break;
        //     case StageScaleMode.FIXED_WIDTH:
        //         stageHeight = Math.round(screenHeight / scaleX);
        //         break;
        //     case StageScaleMode.NO_BORDER:
        //         if (scaleX > scaleY) {
        //             displayHeight = Math.round(stageHeight * scaleX);
        //         }
        //         else {
        //             displayWidth = Math.round(stageWidth * scaleY);
        //         }
        //         break;
        //     case StageScaleMode.SHOW_ALL:
        //         if (scaleX > scaleY) {
        //             displayWidth = Math.round(stageWidth * scaleY);
        //         }
        //         else {
        //             displayHeight = Math.round(stageHeight * scaleX);
        //         }
        //         break;
        //     case StageScaleMode.FIXED_NARROW:
        //         if (scaleX > scaleY) {
        //             stageWidth = Math.round(screenWidth / scaleY);
        //         }
        //         else {
        //             stageHeight = Math.round(screenHeight / scaleX);
        //         }
        //         break;
        //     case StageScaleMode.FIXED_WIDE:
        //         if (scaleX > scaleY) {
        //             stageHeight = Math.round(screenHeight / scaleX);
        //         }
        //         else {
        //             stageWidth = Math.round(screenWidth / scaleY);
        //         }
        //         break;
        //     default:
        //         stageWidth = screenWidth;
        //         stageHeight = screenHeight;
        //         break;
        // }
        //宽高不是2的整数倍会导致图片绘制出现问题
        if (stageWidth % 2 != 0) {
            stageWidth += 1;
        }
        if (stageHeight % 2 != 0) {
            stageHeight += 1;
        }
        if (displayWidth % 2 != 0) {
            displayWidth += 1;
        }
        if (displayHeight % 2 != 0) {
            displayHeight += 1;
        }
        return {
            stageWidth: stageWidth,
            stageHeight: stageHeight,
            displayWidth: displayWidth,
            displayHeight: displayHeight
        };
    }
    egret3d.stage = new Stage3D();
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var Vector4 = (function () {
        /**
         *
         */
        function Vector4(x, y, z, w) {
            if (x === void 0) { x = 0.0; }
            if (y === void 0) { y = 0.0; }
            if (z === void 0) { z = 0.0; }
            if (w === void 0) { w = 0.0; }
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        /**
         * @inheritDoc
         */
        Vector4.prototype.serialize = function () {
            return [this.x, this.y, this.z, this.w];
        };
        /**
         * @inheritDoc
         */
        Vector4.prototype.deserialize = function (element) {
            this.x = element[0];
            this.y = element[1];
            this.z = element[2];
            this.w = element[3];
        };
        Vector4.set = function (x, y, z, w, out) {
            out.x = x;
            out.y = y;
            out.z = z;
            out.w = w;
            return out;
        };
        Vector4.copy = function (v, out) {
            out.x = v.x;
            out.y = v.y;
            out.z = v.z;
            out.w = v.w;
            return out;
        };
        return Vector4;
    }());
    egret3d.Vector4 = Vector4;
    __reflect(Vector4.prototype, "egret3d.Vector4", ["paper.ISerializable"]);
    /**
     *
     */
    egret3d.helpVector4A = new Vector4();
    /**
     *
     */
    egret3d.helpVector4B = new Vector4();
    /**
     *
     */
    egret3d.helpVector4C = new Vector4();
    /**
     *
     */
    egret3d.helpVector4D = new Vector4();
    /**
     *
     */
    egret3d.helpVector4E = new Vector4();
    /**
     *
     */
    egret3d.helpVector4F = new Vector4();
    /**
     *
     */
    egret3d.helpVector4G = new Vector4();
    /**
     *
     */
    egret3d.helpVector4H = new Vector4();
})(egret3d || (egret3d = {}));
var paper;
(function (paper) {
    /**
     * 组件实体系统的主入口
     */
    var Application = (function () {
        function Application() {
        }
        Application._update = function () {
            paper.Time.update();
            if (this._isRunning) {
                requestAnimationFrame(this._bindUpdate);
            }
            this.systemManager.update();
            if (this._laterCalls.length > 0) {
                for (var _i = 0, _a = this._laterCalls; _i < _a.length; _i++) {
                    var callback = _a[_i];
                    callback();
                }
                this._laterCalls.length = 0;
            }
        };
        Application.init = function () {
            var systemManager = this.systemManager;
            var systemClasses = [
                paper.StartSystem,
                paper.BehaviourSystem,
                egret3d.BoxColliderSystem,
                egret3d.AnimationSystem,
                egret3d.GuidpathSystem,
                egret3d.TrailRenderSystem,
                egret3d.MeshRendererSystem,
                egret3d.SkinnedMeshRendererSystem,
                egret3d.Egret2DRendererSystem,
                egret3d.LightSystem,
                egret3d.CameraSystem,
                egret3d.AudioSource3DSystem,
                paper.DestroySystem,
                paper.EndSystem,
            ];
            var level = 0;
            for (var _i = 0, systemClasses_1 = systemClasses; _i < systemClasses_1.length; _i++) {
                var systemClass = systemClasses_1[_i];
                systemManager.register(systemClass, level++);
            }
            paper.Time.initialize();
            this._isEditor = false;
            this._isPlaying = true;
            this.resume();
        };
        /**
         *
         */
        Application.pause = function () {
            this._isRunning = false;
        };
        Application.resume = function () {
            if (this._isRunning) {
                return;
            }
            this._isRunning = true;
            if (!this._bindUpdate) {
                this._bindUpdate = this._update.bind(this);
            }
            this._update();
        };
        /**
         *
         */
        Application.callLater = function (callback) {
            this._laterCalls.push(callback);
        };
        Object.defineProperty(Application, "isEditor", {
            get: function () {
                return this._isEditor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Application, "isFocused", {
            get: function () {
                return this._isFocused;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Application, "isPlaying", {
            get: function () {
                return this._isPlaying;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Application, "isRunning", {
            get: function () {
                return this._isRunning;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 系统管理器
         */
        Application.systemManager = new paper.SystemManager();
        /**
         * 场景管理器
         */
        Application.sceneManager = new paper.SceneManager();
        Application._isEditor = false;
        Application._isFocused = false;
        Application._isPlaying = false;
        Application._isRunning = false;
        Application._standDeltaTime = -1;
        Application._laterCalls = [];
        Application._bindUpdate = null;
        return Application;
    }());
    paper.Application = Application;
    __reflect(Application.prototype, "paper.Application");
})(paper || (paper = {}));
var paper;
(function (paper) {
    /**
     *
     */
    var EventPool;
    (function (EventPool) {
        var _componentListeners = {};
        /**
         * 添加事件监听
         */
        function addEventListener(eventType, componentClass, callback) {
            var componentType = egret.getQualifiedClassName(componentClass);
            var componentListeners = componentType in _componentListeners ? _componentListeners[componentType] : _componentListeners[componentType] = {};
            var eventListeners = eventType in componentListeners ? componentListeners[eventType] : componentListeners[eventType] = [];
            eventListeners.push(callback);
        }
        EventPool.addEventListener = addEventListener;
        /**
         * 移除事件监听
         */
        function removeEventListener(eventType, componentClass, callback) {
            var componentType = egret.getQualifiedClassName(componentClass);
            if (componentType in _componentListeners) {
                var componentListeners = _componentListeners[componentType];
                if (eventType in componentListeners) {
                    var eventListeners = componentListeners[eventType];
                    for (var i = 0, l = eventListeners.length; i < l; i++) {
                        if (eventListeners[i] === callback) {
                            eventListeners.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
        EventPool.removeEventListener = removeEventListener;
        /**
         * 移除所有该类型的事件监听
         */
        function removeAllEventListener(eventType, componentClass) {
            var componentType = egret.getQualifiedClassName(componentClass);
            if (componentType in _componentListeners) {
                var componentListeners = _componentListeners[componentType];
                if (eventType in componentListeners) {
                    componentListeners[eventType].length = 0;
                }
            }
        }
        EventPool.removeAllEventListener = removeAllEventListener;
        /**
         * 发送组件事件:
         * @param type event type:
         * @param component component
         */
        function dispatchEvent(type, component) {
            var behaviourType = "paper.Behaviour"; // TODO 字符串依赖需要注意
            var componentType = "";
            if ((type === "__create__" /* Create */ ||
                type === "__destroy__" /* Destroy */ ||
                type === "__enabled__" /* Enabled */) &&
                egret.is(component, behaviourType)) {
                componentType = behaviourType;
            }
            else {
                componentType = egret.getQualifiedClassName(component.constructor);
            }
            if (componentType in _componentListeners) {
                var componentListeners = _componentListeners[componentType];
                if (type in componentListeners) {
                    var eventListeners = componentListeners[type];
                    for (var _i = 0, eventListeners_1 = eventListeners; _i < eventListeners_1.length; _i++) {
                        var listener = eventListeners_1[_i];
                        listener(component); // 监听直接派发，所以监听都应注意 bind 问题。
                    }
                }
            }
        }
        EventPool.dispatchEvent = dispatchEvent;
    })(EventPool = paper.EventPool || (paper.EventPool = {}));
})(paper || (paper = {}));
var egret3d;
(function (egret3d) {
    /**
     * 矩形可序列化对象
     */
    var Rect = (function () {
        /**
         *
         */
        function Rect(x, y, w, h) {
            if (x === void 0) { x = 0.0; }
            if (y === void 0) { y = 0.0; }
            if (w === void 0) { w = 0.0; }
            if (h === void 0) { h = 0.0; }
            /**
             *
             */
            this.x = 0.0;
            /**
             *
             */
            this.y = 0.0;
            /**
             *
             */
            this.w = 0.0;
            /**
             *
             */
            this.h = 0.0;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
        /**
         * @inheritDoc
         */
        Rect.prototype.serialize = function () {
            return [this.x, this.y, this.w, this.h];
        };
        /**
         * @inheritDoc
         */
        Rect.prototype.deserialize = function (element) {
            this.x = element[0];
            this.y = element[1];
            this.w = element[2];
            this.h = element[3];
        };
        return Rect;
    }());
    egret3d.Rect = Rect;
    __reflect(Rect.prototype, "egret3d.Rect", ["egret3d.RectData", "paper.ISerializable"]);
    /**
     * @internal
     */
    egret3d.helpRectA = new Rect();
    /**
     * @internal
     */
    egret3d.helpRectB = new Rect();
    /**
     * @internal
     */
    egret3d.helpRectC = new Rect();
    /**
     * @internal
     */
    egret3d.helpRectD = new Rect();
})(egret3d || (egret3d = {}));
var paper;
(function (paper) {
    /**
     * 可以挂载Component的实体类。
     */
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        /**
         * 创建GameObject，并添加到当前场景中
         */
        function GameObject(name, tag) {
            if (name === void 0) { name = "NoName"; }
            if (tag === void 0) { tag = ""; }
            var _this = _super.call(this) || this;
            /**
             * 是否是静态，启用这个属性可以提升性能
             */
            _this.isStatic = false;
            /**
             * 层级
             */
            _this.layer = 2 /* Default */;
            /**
             * 名称
             */
            _this.name = "";
            /**
             * 标签
             */
            _this.tag = "";
            /**
             * 变换组件
             */
            _this.transform = null;
            /**
             * 预制体
             */
            _this.prefab = null;
            _this._destroyed = false;
            _this._activeSelf = true;
            _this._activeInHierarchy = true;
            _this._activeDirty = true;
            _this._components = [];
            _this._scene = null;
            _this._scene = paper.Application.sceneManager.getActiveScene();
            _this._scene.$addGameObject(_this);
            _this.name = name;
            _this.tag = tag;
            // 自动创建transform
            _this.transform = _this.addComponent(egret3d.Transform);
            return _this;
        }
        /**
         * 返回当前激活场景中查找对应名称的GameObject
         * @param name
         */
        GameObject.find = function (name) {
            for (var _i = 0, _a = paper.Application.sceneManager.getActiveScene().gameObjects; _i < _a.length; _i++) {
                var gameObject = _a[_i];
                if (gameObject.name === name) {
                    return gameObject;
                }
            }
            return null;
        };
        /**
         * 返回一个在当前激活场景中查找对应tag的GameObject
         * @param tag
         */
        GameObject.findWithTag = function (tag) {
            for (var _i = 0, _a = paper.Application.sceneManager.getActiveScene().gameObjects; _i < _a.length; _i++) {
                var gameObject = _a[_i];
                if (gameObject.tag === tag) {
                    return gameObject;
                }
            }
            return null;
        };
        /**
         * 返回所有在当前激活场景中查找对应tag的GameObject
         * @param name
         */
        GameObject.findGameObjectsWithTag = function (tag) {
            var gameObjects = [];
            for (var _i = 0, _a = paper.Application.sceneManager.getActiveScene().gameObjects; _i < _a.length; _i++) {
                var gameObject = _a[_i];
                if (gameObject.tag === tag) {
                    gameObjects.push(gameObject);
                }
            }
            return gameObjects;
        };
        /**
         *
         */
        GameObject.prototype._activeInHierarchyDirty = function () {
            // if (this._activeDirty) {
            //     return;
            // }
            this._activeDirty = true;
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                paper.EventPool.dispatchEvent("__enabled__" /* Enabled */, component);
            }
            for (var _b = 0, _c = this.transform.children; _b < _c.length; _b++) {
                var child = _c[_b];
                child.gameObject._activeInHierarchyDirty();
            }
        };
        GameObject.prototype._removeComponentReference = function (component) {
            component.enabled = false; // 关闭组件，防止其他生命周期触发，并可以通过此处派发 onDisable 周期。
            var destroySystem = paper.Application.systemManager.getSystem(paper.DestroySystem);
            if (destroySystem) {
                destroySystem.bufferComponent(component);
            }
        };
        GameObject.prototype._getComponentsInChildren = function (componentClass, child, array) {
            var components = child._components;
            for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
                var component = components_1[_i];
                if (egret.is(component, egret.getQualifiedClassName(componentClass))) {
                    array.push(component);
                }
            }
            for (var _a = 0, _b = child.transform.children; _a < _b.length; _a++) {
                var childOfChild = _b[_a];
                this._getComponentsInChildren(componentClass, childOfChild.gameObject, array);
            }
        };
        /**
         *
         */
        GameObject.prototype.destroy = function () {
            if (this._destroyed) {
                console.warn("The game object has been destroyed.", this.hashCode);
                return;
            }
            this._destroyed = true;
            this.removeAllComponents();
            this._scene.$removeGameObject(this);
            this._scene = null;
            var destroySystem = paper.Application.systemManager.getSystem(paper.DestroySystem);
            if (destroySystem) {
                destroySystem.bufferGameObject(this);
            }
        };
        /**
         * 根据类型名获取组件
         */
        GameObject.prototype.addComponent = function (componentClass) {
            paper.BaseComponent._injectGameObject = this;
            var component = new componentClass();
            this._components.push(component);
            component.initialize();
            paper.EventPool.dispatchEvent("__create__" /* Create */, component);
            return component;
        };
        /**
         * 移除组件
         */
        GameObject.prototype.removeComponent = function (componentInstanceOrClass) {
            if (componentInstanceOrClass instanceof paper.BaseComponent) {
                if (componentInstanceOrClass === this.transform) {
                    return;
                }
                var index = 0;
                for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                    var component = _a[_i];
                    if (component === componentInstanceOrClass) {
                        this._removeComponentReference(component);
                        this._components.splice(index, 1);
                        return;
                    }
                    index++;
                }
            }
            else {
                if (componentInstanceOrClass === egret3d.Transform) {
                    return;
                }
                var index = 0;
                for (var _b = 0, _c = this._components; _b < _c.length; _b++) {
                    var component = _c[_b];
                    if (egret.is(component, egret.getQualifiedClassName(componentInstanceOrClass))) {
                        this._removeComponentReference(component);
                        this._components.splice(index, 1);
                        return;
                    }
                    index++;
                }
            }
        };
        /**
         * 移除自身的所有组件
         */
        GameObject.prototype.removeAllComponents = function () {
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                this._removeComponentReference(component);
            }
            this._components.length = 0;
        };
        /**
         * 根据类型名获取组件
         */
        GameObject.prototype.getComponent = function (componentClass) {
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                if (egret.is(component, egret.getQualifiedClassName(componentClass))) {
                    return component;
                }
            }
            return null;
        };
        /**
         * 搜索自己和父节点中所有特定类型的组件
         */
        GameObject.prototype.getComponentInParent = function (componentClass) {
            var result = null;
            var parent = this.transform.parent;
            while (!result && parent) {
                result = parent.gameObject.getComponent(componentClass);
                parent = parent.parent;
            }
            return result;
        };
        /**
         * 搜索自己和子节点中所有特定类型的组件
         */
        GameObject.prototype.getComponentsInChildren = function (componentClass) {
            var components = [];
            this._getComponentsInChildren(componentClass, this, components);
            return components;
        };
        /**
         * 针对同级的组件发送消息
         * @param methodName
         * @param parameter
         */
        GameObject.prototype.sendMessage = function (methodName, parameter, requireReceiver) {
            if (requireReceiver === void 0) { requireReceiver = true; }
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                if (component.isActiveAndEnabled && component.constructor instanceof paper.Behaviour) {
                    if (methodName in component) {
                        component[methodName](parameter);
                    }
                    else if (requireReceiver) {
                        console.warn(this.name, egret.getQualifiedClassName(component), methodName); // TODO
                    }
                }
            }
        };
        /**
         * 针对直接父级发送消息
         * @param methodName
         * @param parameter
         */
        GameObject.prototype.sendMessageUpwards = function (methodName, parameter, requireReceiver) {
            if (requireReceiver === void 0) { requireReceiver = true; }
            this.sendMessage(methodName, parameter, requireReceiver);
            //
            var parent = this.transform.parent;
            if (parent && parent.gameObject.activeInHierarchy) {
                parent.gameObject.sendMessage(methodName, parameter, requireReceiver);
            }
        };
        /**
         * 群发消息
         * @param methodName
         * @param parameter
         */
        GameObject.prototype.broadcastMessage = function (methodName, parameter, requireReceiver) {
            if (requireReceiver === void 0) { requireReceiver = true; }
            this.sendMessage(methodName, parameter, requireReceiver);
            for (var _i = 0, _a = this.transform.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.gameObject.activeInHierarchy) {
                    child.gameObject.broadcastMessage(methodName, parameter, requireReceiver);
                }
            }
        };
        Object.defineProperty(GameObject.prototype, "activeSelf", {
            /**
             * 当前GameObject对象自身激活状态
             */
            get: function () {
                return this._activeSelf;
            },
            set: function (value) {
                if (this._activeSelf !== value) {
                    this._activeSelf = value;
                    this._activeInHierarchyDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "activeInHierarchy", {
            /**
             * 获取当前GameObject对象在场景中激活状态。
             * 如果当前对象父级的activeSelf为false，那么当前GameObject对象在场景中为禁用状态。
             */
            get: function () {
                if (this._activeDirty) {
                    var parent_1 = this.transform.parent;
                    if (parent_1 && !parent_1.gameObject.activeInHierarchy) {
                        this._activeInHierarchy = false;
                    }
                    else {
                        this._activeInHierarchy = this._activeSelf;
                    }
                    this._activeDirty = false;
                }
                return this._activeInHierarchy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "components", {
            /**
             * 组件列表
             */
            get: function () {
                return this._components;
            },
            /**
             * 仅用于反序列化。
             *
             */
            set: function (value) {
                this._components.length = 0;
                for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                    var component = value_1[_i];
                    this._components.push(component);
                }
                // Transform 必须存在。
                this.transform = this.getComponent(egret3d.Transform);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "scene", {
            /**
             * 获取物体所在场景实例。
             */
            get: function () {
                return this._scene;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.CHECKBOX)
        ], GameObject.prototype, "isStatic", void 0);
        __decorate([
            paper.serializedField,
            paper.deserializedIgnore
        ], GameObject.prototype, "layer", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.TEXT)
        ], GameObject.prototype, "name", void 0);
        __decorate([
            paper.serializedField
        ], GameObject.prototype, "tag", void 0);
        __decorate([
            paper.serializedField
        ], GameObject.prototype, "prefab", void 0);
        __decorate([
            paper.serializedField
        ], GameObject.prototype, "_activeSelf", void 0);
        __decorate([
            paper.serializedField
        ], GameObject.prototype, "components", null);
        return GameObject;
    }(paper.SerializableObject));
    paper.GameObject = GameObject;
    __reflect(GameObject.prototype, "paper.GameObject");
})(paper || (paper = {}));
var paper;
(function (paper) {
    /**
     * 场景类
     */
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            var _this = _super.call(this) || this;
            /**
             * 场景名称。
             */
            _this.name = "";
            /**
             * 场景的light map列表。
             */
            _this.lightmaps = [];
            /**
             * 当前场景的所有GameObject对象池
             *
             */
            _this.gameObjects = [];
            /**
             * 存储着关联的数据
             * 场景保存时，将场景快照数据保存至对应的资源中
             *
             */
            _this.$rawScene = null;
            paper.Application.sceneManager._addScene(_this);
            return _this;
        }
        /**
         * 销毁
         *
         */
        Scene.prototype.$destroy = function () {
            for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
                var gameObject = _a[_i];
                gameObject.destroy();
            }
            this.lightmaps.length = 0;
            this.gameObjects.length = 0;
            this.$rawScene = null;
        };
        /**
         * 移除GameObject对象
         *
         */
        Scene.prototype.$removeGameObject = function (gameObject) {
            var index = this.gameObjects.indexOf(gameObject);
            if (index > -1) {
                this.gameObjects.splice(index, 1);
            }
            else {
                console.debug("Remove game object again.", gameObject.hashCode);
            }
        };
        /**
         * 添加一个GameObject对象
         *
         */
        Scene.prototype.$addGameObject = function (gameObject) {
            if (this.gameObjects.indexOf(gameObject) < 0) {
                this.gameObjects.push(gameObject);
            }
            else {
                console.debug("Add game object again.", gameObject.hashCode);
            }
        };
        /**
         * 获取所有根级GameObject对象
         */
        Scene.prototype.getRootGameObjects = function () {
            var gameObjects = [];
            for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
                var gameObject = _a[_i];
                if (!gameObject.transform.parent) {
                    gameObjects.push(gameObject);
                }
            }
            return gameObjects;
        };
        /**
         *
         */
        Scene.defaultName = "default";
        __decorate([
            paper.serializedField
        ], Scene.prototype, "name", void 0);
        __decorate([
            paper.serializedField
        ], Scene.prototype, "lightmaps", void 0);
        __decorate([
            paper.serializedField,
            paper.deserializedIgnore
        ], Scene.prototype, "gameObjects", void 0);
        return Scene;
    }(paper.SerializableObject));
    paper.Scene = Scene;
    __reflect(Scene.prototype, "paper.Scene");
})(paper || (paper = {}));
var paper;
(function (paper) {
    /**
     *
     */
    paper._executeInEditModeComponents = [];
    /**
     * 标记组件是否在编辑模式也拥有生命周期。
     */
    function executeInEditMode(target) {
        paper._executeInEditModeComponents.push(target);
    }
    paper.executeInEditMode = executeInEditMode;
    /**
     * 脚本系统
     * 该系统负责执行脚本逻辑代码
     */
    var BehaviourSystem = (function (_super) {
        __extends(BehaviourSystem, _super);
        function BehaviourSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [
                {
                    componentClass: paper.Behaviour,
                    listeners: [
                        {
                            type: "__enabled__" /* Enabled */,
                            listener: function (component) {
                                if (component.isActiveAndEnabled) {
                                    // Add to enable list.
                                    if (_this._onEnableBehaviours.indexOf(component) < 0) {
                                        _this._onEnableBehaviours.push(component);
                                    }
                                }
                                else {
                                    // Add to disable list.
                                    if (_this._onDisableBehaviours.indexOf(component) < 0) {
                                        _this._onDisableBehaviours.push(component);
                                    }
                                }
                            }
                        }
                    ]
                }
            ];
            _this._onEnableBehaviours = [];
            _this._resetBehaviours = [];
            _this._startBehaviours = [];
            _this._onDisableBehaviours = [];
            return _this;
        }
        /**
         * @inheritDoc
         */
        BehaviourSystem.prototype._onCreateComponent = function (component) {
            // 所有 Behaviour 均被收集，BehaviourSystem 并不是标准的 ecs，仅用来更新 Behaviour 的生命周期。
            this._gameObjectOffsets[component.gameObject.hashCode] = this._components.length;
            this._components.push(component);
            this._onEnableBehaviours.push(component);
            if (paper.Application.isEditor && !paper.Application.isPlaying) {
                this._resetBehaviours.push(component);
            }
            this._startBehaviours.push(component);
            return true;
        };
        /**
         * @inheritDoc
         */
        BehaviourSystem.prototype._onDestroyComponent = function (component) {
            var gameObject = component.gameObject;
            for (var i = 0; i < this._components.length; i++) {
                if (this._components[i] === component) {
                    this._components.splice(i, 1);
                    break;
                }
            }
            delete this._gameObjectOffsets[gameObject.hashCode];
            return true;
        };
        /**
         * @inheritDoc
         */
        BehaviourSystem.prototype.update = function () {
            var i = 0;
            var l = 0;
            if (paper.Application.isEditor && !paper.Application.isPlaying) {
                if (this._onEnableBehaviours.length > 0) {
                    for (var _i = 0, _a = this._onEnableBehaviours; _i < _a.length; _i++) {
                        var component = _a[_i];
                        if (component.isActiveAndEnabled && paper._executeInEditModeComponents.indexOf(component.constructor) >= 0) {
                            component.onEnable();
                        }
                    }
                    this._onEnableBehaviours.length = 0;
                }
                if (this._resetBehaviours.length > 0) {
                    for (var _b = 0, _c = this._resetBehaviours; _b < _c.length; _b++) {
                        var component = _c[_b];
                        component.onReset();
                    }
                    this._resetBehaviours.length = 0;
                }
                i = this._startBehaviours.length;
                if (i > 0) {
                    while (i--) {
                        var component = this._startBehaviours[i];
                        if (!component || component.isActiveAndEnabled) {
                            if (component.isActiveAndEnabled && paper._executeInEditModeComponents.indexOf(component.constructor) >= 0) {
                                component.onStart();
                            }
                            this._startBehaviours.splice(i, 1);
                        }
                    }
                }
                l = this._components.length;
                for (i = 0; i < l; ++i) {
                    var component = this._components[i];
                    if (component.isActiveAndEnabled && paper._executeInEditModeComponents.indexOf(component.constructor) >= 0) {
                        component.onUpdate(paper.Time.deltaTime);
                    }
                }
                for (i = 0; i < l; ++i) {
                    var component = this._components[i];
                    if (component.isActiveAndEnabled && paper._executeInEditModeComponents.indexOf(component.constructor) >= 0) {
                        component.onLateUpdate(paper.Time.deltaTime);
                    }
                }
                if (this._onDisableBehaviours.length > 0) {
                    for (var _d = 0, _e = this._onDisableBehaviours; _d < _e.length; _d++) {
                        var component = _e[_d];
                        if (!component.isActiveAndEnabled && paper._executeInEditModeComponents.indexOf(component.constructor) >= 0) {
                            component.onDisable();
                        }
                    }
                    this._onDisableBehaviours.length = 0;
                }
            }
            else {
                if (this._onEnableBehaviours.length > 0) {
                    for (var _f = 0, _g = this._onEnableBehaviours; _f < _g.length; _f++) {
                        var component = _g[_f];
                        if (component.isActiveAndEnabled) {
                            component.onEnable();
                        }
                    }
                    this._onEnableBehaviours.length = 0;
                }
                i = this._startBehaviours.length;
                if (i > 0) {
                    while (i--) {
                        var component = this._startBehaviours[i];
                        if (!component || component.isActiveAndEnabled) {
                            if (component.isActiveAndEnabled) {
                                component.onStart();
                            }
                            this._startBehaviours.splice(i, 1);
                        }
                    }
                }
                l = this._components.length;
                for (i = 0; i < l; ++i) {
                    var component = this._components[i];
                    if (component.isActiveAndEnabled) {
                        component.onUpdate(paper.Time.deltaTime);
                    }
                }
                for (i = 0; i < l; ++i) {
                    var component = this._components[i];
                    if (component.isActiveAndEnabled) {
                        component.onLateUpdate(paper.Time.deltaTime);
                    }
                }
                if (this._onDisableBehaviours.length > 0) {
                    for (var _h = 0, _j = this._onDisableBehaviours; _h < _j.length; _h++) {
                        var component = _j[_h];
                        if (!component.isActiveAndEnabled) {
                            component.onDisable();
                        }
                    }
                    this._onDisableBehaviours.length = 0;
                }
            }
        };
        return BehaviourSystem;
    }(paper.BaseSystem));
    paper.BehaviourSystem = BehaviourSystem;
    __reflect(BehaviourSystem.prototype, "paper.BehaviourSystem");
})(paper || (paper = {}));
var paper;
(function (paper) {
    /**
     * 脚本组件。
     * 生命周期的顺序。
     * - onAwake();
     * - System._onCreateComponent();
     * - onEnable();
     * - onReset();
     * - onStart();
     * - onFixedUpdate();
     * - onUpdate();
     * - onLateUpdate();
     * - onDisable();
     * - System._onDestroyComponent();
     * - onDestroy();
 */
    var Behaviour = (function (_super) {
        __extends(Behaviour, _super);
        function Behaviour() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Behaviour.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            if (!paper.Application.isEditor || paper._executeInEditModeComponents.indexOf(this.constructor) >= 0) {
                this.onAwake();
            }
        };
        Behaviour.prototype.uninitialize = function () {
            if (!paper.Application.isEditor || paper._executeInEditModeComponents.indexOf(this.constructor) >= 0) {
                this.onDestroy(); // TODO onDestroy 如果不是 enabled 就不派发
            }
            _super.prototype.uninitialize.call(this);
        };
        /**
         * 当一个脚本实例被载入时Awake被调用，要先于Start。
         */
        Behaviour.prototype.onAwake = function () {
        };
        /**
         * 物体启用时被调用
         */
        Behaviour.prototype.onEnable = function () {
        };
        /**
         *
         */
        Behaviour.prototype.onReset = function () {
        };
        /**
         * Start仅在物体实例化完成后，Update函数第一次被调用前调用。
         */
        Behaviour.prototype.onStart = function () {
        };
        /**
         * 这个函数会在每个固定的物理时间片被调用一次.这是放置游戏基本物理行为代码的地方。
         * （暂未实现）
         */
        Behaviour.prototype.onFixedUpdate = function () {
        };
        /**
         * 当Behaviour启用时,其Update在每一帧被调用
         */
        Behaviour.prototype.onUpdate = function (delta) {
        };
        /**
         *
         */
        Behaviour.prototype.onLateUpdate = function (delta) {
        };
        /**
         * 物体被禁用时调用
         */
        Behaviour.prototype.onDisable = function () {
        };
        /**
         * 物体被删除时调用
         */
        Behaviour.prototype.onDestroy = function () {
        };
        return Behaviour;
    }(paper.BaseComponent));
    paper.Behaviour = Behaviour;
    __reflect(Behaviour.prototype, "paper.Behaviour");
})(paper || (paper = {}));
var paper;
(function (paper) {
    var Time = (function () {
        function Time() {
        }
        Time.initialize = function () {
            this._lastTimer = this._beginTimer = this.now;
        };
        Time.update = function (timer) {
            var now = timer || this.now;
            this._frameCount += 1;
            this._unscaledTime = now - this._beginTimer;
            this._unscaledDeltaTime = now - this._lastTimer;
            this._lastTimer = now;
        };
        Object.defineProperty(Time, "now", {
            get: function () {
                if (window.performance) {
                    return window.performance.now() * 0.001;
                }
                else if (Date.now) {
                    return Date.now() * 0.001;
                }
                return new Date().getTime() * 0.001;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Time, "frameCount", {
            get: function () {
                return this._frameCount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Time, "time", {
            get: function () {
                return this._unscaledTime * this.timeScale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Time, "unscaledTime", {
            get: function () {
                return this._unscaledTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Time, "deltaTime", {
            get: function () {
                return this._unscaledDeltaTime * this.timeScale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Time, "unscaledDeltaTime", {
            get: function () {
                return this._unscaledDeltaTime;
            },
            enumerable: true,
            configurable: true
        });
        Time.timeScale = 1.0;
        Time._frameCount = 0;
        Time._lastTimer = 0.0;
        Time._beginTimer = 0.0;
        Time._unscaledTime = 0.0;
        Time._unscaledDeltaTime = 0.0;
        return Time;
    }());
    paper.Time = Time;
    __reflect(Time.prototype, "paper.Time");
})(paper || (paper = {}));
var egret3d;
(function (egret3d) {
    /**
     * EditorCamera系统
     */
    var EditorCameraSystem = (function (_super) {
        __extends(EditorCameraSystem, _super);
        function EditorCameraSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @inheritDoc
         */
        EditorCameraSystem.prototype.update = function () {
            this._components.sort(function (a, b) {
                return a.order - b.order;
            });
            var lightSystem = paper.Application.systemManager.getSystem(egret3d.LightSystem);
            var lights = lightSystem ? lightSystem.components : null;
            var camera = null;
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                if (component.gameObject.tag === "EditorCamera") {
                    camera = component;
                }
                component.update(paper.Time.deltaTime);
                if (lights && lights.length > 0) {
                    component.context.updateLights(lights);
                }
            }
            if (camera) {
                camera.context.drawtype = "";
                camera._targetAndViewport(camera.renderTarget, false);
                this.$renderCamera(camera);
            }
            else {
                egret3d.WebGLKit.webgl.clearColor(0, 0, 0, 1);
                egret3d.WebGLKit.webgl.clearDepth(1.0);
                egret3d.WebGLKit.webgl.clear(egret3d.WebGLKit.webgl.COLOR_BUFFER_BIT | egret3d.WebGLKit.webgl.DEPTH_BUFFER_BIT);
            }
        };
        return EditorCameraSystem;
    }(egret3d.CameraSystem));
    egret3d.EditorCameraSystem = EditorCameraSystem;
    __reflect(EditorCameraSystem.prototype, "egret3d.EditorCameraSystem");
})(egret3d || (egret3d = {}));
var paper;
(function (paper) {
    /**
     *
     */
    paper.serializeClassMap = {
        0: "paper.Scene",
        1: "paper.GameObject",
        2: "egret3d.AniPlayer",
        3: "egret3d.BoxCollider",
        4: "egret3d.Camera",
        5: "egret3d.MeshFilter",
        6: "egret3d.MeshRenderer",
        7: "egret3d.ParticleSystem",
        8: "egret3d.ParticleSystemRenderer",
        9: "egret3d.SkinnedMeshRenderer",
        10: "egret3d.SphereCollider",
        11: "egret3d.Transform",
        12: "egret3d.Shader",
        13: "egret3d.Mesh",
        14: "egret3d.Material",
        15: "egret3d.AnimationClip",
        16: "egret3d.TPoseInfo",
        17: "egret3d.PoseBoneMatrix",
        18: "egret3d.Texture",
        19: "egret3d.Texture",
        20: "egret3d.Vector2",
        21: "egret3d.Vector3",
        22: "egret3d.Vector4",
        23: "egret3d.Quaternion",
        24: "egret3d.Color",
        25: "egret3d.Gradient",
        26: "egret3d.Curve",
        27: "egret3d.Keyframe",
        28: "egret3d.Rect",
        29: "egret3d.MainModule",
        30: "egret3d.EmissionModule",
        31: "egret3d.ShapeModule",
        32: "egret3d.VelocityOverLifetimeModule",
        33: "egret3d.RotationOverLifetimeModule",
        34: "egret3d.ColorOverLifetimeModule",
        35: "egret3d.SizeOverLifetimeModule",
        36: "egret3d.MinMaxCurve",
        37: "egret3d.MinMaxGradient",
        38: "egret3d.alphaKey",
        39: "egret3d.colorKey",
        40: "egret3d.Animation",
        41: "egret3d.GLTFAsset",
    };
    /**
     *
     */
    function findClassCode(name) {
        for (var key in paper.serializeClassMap) {
            if (paper.serializeClassMap[key] === name) {
                return key;
            }
        }
        return "";
    }
    paper.findClassCode = findClassCode;
    /**
     *
     */
    function findClassCodeFrom(target) {
        var proto = target.__proto__;
        var classTypeOrigin = proto.__class__;
        var classType = paper.findClassCode(classTypeOrigin);
        return classType;
    }
    paper.findClassCodeFrom = findClassCodeFrom;
})(paper || (paper = {}));
var egret3d;
(function (egret3d) {
    /**
     * path play type
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 路径播放类型
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var pathtype;
    (function (pathtype) {
        pathtype[pathtype["once"] = 0] = "once";
        pathtype[pathtype["loop"] = 1] = "loop";
        pathtype[pathtype["pingpong"] = 2] = "pingpong";
    })(pathtype = egret3d.pathtype || (egret3d.pathtype = {}));
    var epointtype;
    (function (epointtype) {
        epointtype[epointtype["VertexPoint"] = 0] = "VertexPoint";
        epointtype[epointtype["ControlPoint"] = 1] = "ControlPoint";
    })(epointtype || (epointtype = {}));
    /**
     * path asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 路径资源。
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var PathAsset = (function (_super) {
        __extends(PathAsset, _super);
        function PathAsset() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * path point data
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 路径节点数据
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.paths = [];
            _this.items = [];
            _this.lines = [];
            return _this;
        }
        /**
         * dispose asset
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 释放资源。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        PathAsset.prototype.dispose = function () {
            this.paths.length = 0;
        };
        /**
         * asset byte length
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 计算资源字节大小。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        PathAsset.prototype.caclByteLength = function () {
            if (this.paths) {
                var length = this.paths.length;
                var value = length * 12;
                return value;
            }
        };
        /**
         *
         */
        PathAsset.prototype.$parse = function (json) {
            var type = json["type"];
            switch (type) {
                case "once":
                    this.type = pathtype.once;
                    break;
                case "loop":
                    this.type = pathtype.loop;
                    break;
                case "pingpong":
                    this.type = pathtype.pingpong;
            }
            this.instertPointcount = json["insertPointcount"];
            var paths = json["path"];
            for (var key in paths) {
                var item = { type: undefined, point: undefined };
                var pointnode = paths[key];
                var pointtype = pointnode["type"];
                switch (pointtype) {
                    case "VertexPoint":
                        item.type = epointtype.VertexPoint;
                        break;
                    case "ControlPoint":
                        item.type = epointtype.ControlPoint;
                        break;
                }
                var pointlocation = pointnode["point"];
                var arr = pointlocation.split(",");
                item.point = new egret3d.Vector3(parseFloat(arr[0]), parseFloat(arr[1]), parseFloat(arr[2]));
                this.items.push(item);
            }
            this.getpaths();
            this.items.length = 0;
            for (var i = 0; i < this.lines.length; i++) {
                this.lines[i].length = 0;
            }
            this.lines.length = 0;
        };
        PathAsset.prototype.getpaths = function () {
            var line = new Array();
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (i == 0) {
                    line.push(item.point);
                    this.lines.push(line);
                }
                else if (i == this.items.length - 1) {
                    if (this.type == pathtype.loop) {
                        if (item.type == epointtype.VertexPoint) {
                            line.push(item.point);
                            line = new Array();
                            line.push(item.point);
                            line.push(this.items[0].point);
                            this.lines.push(line);
                        }
                        else {
                            line.push(item.point);
                            line.push(this.items[0].point);
                        }
                    }
                    else {
                        line.push(item.point);
                    }
                }
                else {
                    if (item.type == epointtype.VertexPoint) {
                        line.push(item.point);
                        line = new Array();
                        line.push(item.point);
                        this.lines.push(line);
                    }
                    else {
                        line.push(item.point);
                    }
                }
            }
            var linecount = this.lines.length;
            var pathindex = 0;
            for (var i = 0; i < linecount; i++) {
                if (i == linecount - 1) {
                    for (var k = 0; k < this.instertPointcount; k++) {
                        var rate = k / (this.instertPointcount - 1);
                        this.paths[pathindex] = this.getBezierPointAlongCurve(this.lines[i], rate);
                        pathindex++;
                    }
                }
                else {
                    for (var k = 0; k < this.instertPointcount; k++) {
                        var rate = k / this.instertPointcount;
                        this.paths[pathindex] = this.getBezierPointAlongCurve(this.lines[i], rate);
                        pathindex++;
                    }
                }
            }
        };
        PathAsset.prototype.getBezierPointAlongCurve = function (points, rate, clearflag) {
            if (clearflag === void 0) { clearflag = false; }
            var length = points.length;
            if (points.length < 2) {
                console.log("need more than 2 point to calculate bezier!");
                return;
            }
            if (length == 2) {
                var out = new egret3d.Vector3();
                this.vec3Lerp(points[0], points[1], rate, out);
                if (clearflag) {
                    points.length = 0;
                }
                return out;
            }
            var temptpoints = [];
            for (var i = 0; i < length - 1; i++) {
                var temp = new egret3d.Vector3();
                this.vec3Lerp(points[i], points[i + 1], rate, temp);
                temptpoints[i] = temp;
            }
            if (clearflag) {
                points.length = 0;
            }
            return this.getBezierPointAlongCurve(temptpoints, rate, true);
        };
        PathAsset.prototype.vec3Lerp = function (start, end, lerp, out) {
            egret3d.Vector3.subtract(end, start, out);
            egret3d.Vector3.scale(out, lerp);
            egret3d.Vector3.add(start, out, out);
        };
        return PathAsset;
    }(paper.Asset));
    egret3d.PathAsset = PathAsset;
    __reflect(PathAsset.prototype, "egret3d.PathAsset");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * scene asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 场景数据资源
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var RawScene = (function (_super) {
        __extends(RawScene, _super);
        function RawScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * clone from this scene
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 从当前场景克隆。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        RawScene.prototype.createInstance = function () {
            if (!this._raw) {
                return null;
            }
            return paper.deserialize(this._raw, this._assets);
        };
        return RawScene;
    }(egret3d.BaseObjectAsset));
    egret3d.RawScene = RawScene;
    __reflect(RawScene.prototype, "egret3d.RawScene");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * audio asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 声音资源。
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Sound = (function (_super) {
        __extends(Sound, _super);
        function Sound() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @inheritDoc
         */
        Sound.prototype.dispose = function () {
            this.buffer = null;
        };
        /**
         * @inheritDoc
         */
        Sound.prototype.caclByteLength = function () {
            if (this.buffer) {
                return this.buffer.length;
            }
        };
        return Sound;
    }(paper.Asset));
    egret3d.Sound = Sound;
    __reflect(Sound.prototype, "egret3d.Sound");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * sprite asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 精灵资源。
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Sprite = (function (_super) {
        __extends(Sprite, _super);
        function Sprite() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * atlas
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 所属图集
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.atlas = "";
            /**
             * rect
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 有效区域
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.rect = new egret3d.Rect();
            /**
             * border
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 边距
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.border = new egret3d.Border();
            _this._urange = null;
            _this._vrange = null;
            _this._texture = null;
            return _this;
        }
        // TODO remove - row：图片行数；column:图片列数；index：第几张图片（index从0开始计数）
        Sprite.spriteAnimation = function (row, column, index, out) {
            var width = 1 / column;
            var height = 1 / row;
            var offsetx = width * (index % column);
            var offsety = height * Math.floor(index / column);
            out.x = width;
            out.y = height;
            out.z = offsetx;
            out.w = offsety;
        };
        /**
         * @inheritDoc
         */
        Sprite.prototype.dispose = function () {
            this.atlas = "";
            // this.rect.clear();
            // this.border.clear();
            this._urange = null;
            this._vrange = null;
            this._texture = null;
        };
        /**
         * @inheritDoc
         */
        Sprite.prototype.caclByteLength = function () {
            var total = 0;
            if (this._texture) {
                total += this._texture.caclByteLength();
            }
            return total;
        };
        Object.defineProperty(Sprite.prototype, "urange", {
            /**
             * u range
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * uv的u范围
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            get: function () {
                if (!this._urange) {
                    this._urange = new egret3d.Vector2();
                    if (this._texture) {
                        this._urange.x = this.rect.x / this._texture.glTexture.width;
                        this._urange.y = (this.rect.x + this.rect.w) / this._texture.glTexture.width;
                    }
                    else {
                        this._urange.x = 0.0;
                        this._urange.y = 1.0;
                    }
                }
                return this._urange;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "vrange", {
            /**
             * v range
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * uv的v范围
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            get: function () {
                if (!this._vrange) {
                    this._vrange = new egret3d.Vector2();
                    if (this._texture) {
                        this._vrange.x = this.rect.y / this._texture.glTexture.height;
                        this._vrange.y = (this.rect.y + this.rect.h) / this._texture.glTexture.height;
                    }
                    else {
                        this._vrange.x = 0.0;
                        this._vrange.y = 1.0;
                    }
                }
                return this._vrange;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "texture", {
            /**
             * current texture
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 当前texture
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            get: function () {
                return this._texture;
            },
            /**
             * current texture
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 当前texture
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            set: function (value) {
                this._urange = null;
                this._vrange = null;
                this._texture = value;
            },
            enumerable: true,
            configurable: true
        });
        return Sprite;
    }(paper.Asset));
    egret3d.Sprite = Sprite;
    __reflect(Sprite.prototype, "egret3d.Sprite");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * text asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 文本资源。
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var TextAsset = (function (_super) {
        __extends(TextAsset, _super);
        function TextAsset() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * 文本内容
             */
            _this.content = "";
            return _this;
        }
        /**
         * @inheritDoc
         */
        TextAsset.prototype.dispose = function () {
            this.content = "";
        };
        /**
         * @inheritDoc
         */
        TextAsset.prototype.caclByteLength = function () {
            if (this.content) {
                return egret3d.utils.caclStringByteLength(this.content);
            }
            return 0;
        };
        return TextAsset;
    }(paper.Asset));
    egret3d.TextAsset = TextAsset;
    __reflect(TextAsset.prototype, "egret3d.TextAsset");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * textrue asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 纹理资源。
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Texture = (function (_super) {
        __extends(Texture, _super);
        function Texture() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._realName = "";
            return _this;
        }
        /**
         * @inheritDoc
         */
        Texture.prototype.dispose = function () {
            this.glTexture.dispose(egret3d.WebGLKit.webgl);
        };
        /**
         * @inheritDoc
         */
        Texture.prototype.caclByteLength = function () {
            if (this.glTexture) {
                return this.glTexture.caclByteLength();
            }
            return 0;
        };
        Object.defineProperty(Texture.prototype, "realName", {
            /**
             * real image name
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 如果是imgdesc加载来的图片，通过这个可以获取到真实的图片名字。
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            get: function () {
                return this._realName;
            },
            set: function (name) {
                this._realName = name;
            },
            enumerable: true,
            configurable: true
        });
        return Texture;
    }(paper.Asset));
    egret3d.Texture = Texture;
    __reflect(Texture.prototype, "egret3d.Texture");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var Pool = (function () {
        function Pool() {
            this._instances = [];
        }
        Pool.prototype.add = function (instanceOrInstances) {
            if (Array.isArray(instanceOrInstances)) {
                for (var _i = 0, instanceOrInstances_1 = instanceOrInstances; _i < instanceOrInstances_1.length; _i++) {
                    var instance = instanceOrInstances_1[_i];
                    if (this._instances.indexOf(instance) < 0) {
                        this._instances.push(instance);
                    }
                }
            }
            else {
                if (this._instances.indexOf(instanceOrInstances) < 0) {
                    this._instances.push(instanceOrInstances);
                }
            }
        };
        Pool.prototype.remove = function (instanceOrInstances) {
            if (Array.isArray(instanceOrInstances)) {
                for (var _i = 0, instanceOrInstances_2 = instanceOrInstances; _i < instanceOrInstances_2.length; _i++) {
                    var instance = instanceOrInstances_2[_i];
                    var index = this._instances.indexOf(instance);
                    if (index >= 0) {
                        this._instances.splice(index, 1);
                    }
                }
            }
            else {
                var index = this._instances.indexOf(instanceOrInstances);
                if (index >= 0) {
                    this._instances.splice(index, 1);
                }
            }
        };
        Pool.prototype.clear = function () {
            this._instances.length = 0;
        };
        Object.defineProperty(Pool.prototype, "instances", {
            get: function () {
                return this._instances;
            },
            enumerable: true,
            configurable: true
        });
        Pool.drawCall = new Pool();
        Pool.shadowCaster = new Pool();
        return Pool;
    }());
    egret3d.Pool = Pool;
    __reflect(Pool.prototype, "egret3d.Pool");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     */
    var DrawCallList = (function () {
        function DrawCallList(createDrawCalls) {
            this._drawCalls = {};
            this._createDrawCalls = createDrawCalls;
        }
        // 更新 zdist
        DrawCallList.updateZdist = function (camera) {
            // TODO 更新计算物体的zdist，如果是不透明物体，统一设置为 -1
        };
        // 渲染排序
        DrawCallList.sort = function () {
            egret3d.Pool.drawCall.instances.sort(function (a, b) {
                if (a.material.renderQueue === b.material.renderQueue) {
                    return b.zdist - a.zdist; // 从远至近画
                }
                else {
                    return a.material.renderQueue - b.material.renderQueue;
                }
            });
        };
        DrawCallList.prototype.updateDrawCalls = function (gameObject, castShadows) {
            this.removeDrawCalls(gameObject);
            var drawCalls = this._createDrawCalls(gameObject);
            if (drawCalls) {
                this._drawCalls[gameObject.hashCode] = drawCalls;
                egret3d.Pool.drawCall.add(drawCalls);
                if (castShadows) {
                    egret3d.Pool.shadowCaster.add(drawCalls);
                }
            }
        };
        DrawCallList.prototype.updateShadowCasters = function (gameObject, castShadows) {
            if (gameObject.hashCode in this._drawCalls) {
                var drawCalls = this._drawCalls[gameObject.hashCode];
                if (castShadows) {
                    for (var _i = 0, drawCalls_1 = drawCalls; _i < drawCalls_1.length; _i++) {
                        var drawCall = drawCalls_1[_i];
                        egret3d.Pool.shadowCaster.add(drawCall);
                    }
                }
                else {
                    for (var _a = 0, drawCalls_2 = drawCalls; _a < drawCalls_2.length; _a++) {
                        var drawCall = drawCalls_2[_a];
                        egret3d.Pool.shadowCaster.remove(drawCall);
                    }
                }
            }
        };
        DrawCallList.prototype.removeDrawCalls = function (gameObject) {
            if (gameObject.hashCode in this._drawCalls) {
                var drawCalls = this._drawCalls[gameObject.hashCode];
                egret3d.Pool.drawCall.remove(drawCalls);
                egret3d.Pool.shadowCaster.remove(drawCalls);
                delete this._drawCalls[gameObject.hashCode];
            }
        };
        DrawCallList.prototype.getDrawCalls = function (gameObject) {
            if (gameObject.hashCode in this._drawCalls) {
                return this._drawCalls[gameObject.hashCode];
            }
            return null;
        };
        return DrawCallList;
    }());
    egret3d.DrawCallList = DrawCallList;
    __reflect(DrawCallList.prototype, "egret3d.DrawCallList");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * audio listener component
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 声音监听组件。目前场景中只允许有一个监听器。对3D声音有效。
     * @version paper 1.0
     * @platform Web
     * @language
     */
    var Audio3DListener = (function (_super) {
        __extends(Audio3DListener, _super);
        function Audio3DListener() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Audio3DListener;
    }(paper.BaseComponent));
    egret3d.Audio3DListener = Audio3DListener;
    __reflect(Audio3DListener.prototype, "egret3d.Audio3DListener");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * Audio系统
     */
    var Audio3DListenerSystem = (function (_super) {
        __extends(Audio3DListenerSystem, _super);
        function Audio3DListenerSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [
                { componentClass: egret3d.Audio3DListener }
            ];
            return _this;
        }
        Audio3DListenerSystem.prototype._updateAudioListener = function (audioListener) {
            if (audioListener.gameObject) {
                var position = audioListener.gameObject.transform.getPosition();
                egret3d.sound.WebAudio.instance.getAudioListener().setPosition(position.x, position.y, position.z);
                var wtm = audioListener.gameObject.transform.getWorldMatrix();
                egret3d.sound.WebAudio.instance.getAudioListener().setOrientation(wtm);
            }
        };
        /**
         * @inheritDoc
         */
        Audio3DListenerSystem.prototype.update = function () {
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                this._updateAudioListener(component);
            }
        };
        return Audio3DListenerSystem;
    }(paper.BaseSystem));
    egret3d.Audio3DListenerSystem = Audio3DListenerSystem;
    __reflect(Audio3DListenerSystem.prototype, "egret3d.Audio3DListenerSystem");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * 2d audio source component
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 2D音频组件
     * @version paper 1.0
     * @platform Web
     * @language
     */
    var AudioSource2D = (function (_super) {
        __extends(AudioSource2D, _super);
        function AudioSource2D() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._volume = 1;
            _this._loop = false;
            _this._playing = false;
            return _this;
        }
        Object.defineProperty(AudioSource2D.prototype, "sound", {
            /**
             * set sound asset
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 设置音频资源
             * @version paper 1.0
             * @platform Web
             * @language
             */
            set: function (sound) {
                if (!!this._channel && this._playing) {
                    this._channel.stop();
                    this._channel.dispose();
                    // this._sound.unuse();
                }
                if (!egret3d.sound.WebAudio.instance.isSupported) {
                    return;
                }
                this._channel = new egret3d.sound.WebAudioChannel2D();
                this._channel.buffer = sound.buffer;
                this._sound = sound;
                // sound.use();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioSource2D.prototype, "volume", {
            /**
             * volume
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音量
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                return this._volume;
            },
            /**
             * volume
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音量
             * @version paper 1.0
             * @platform Web
             * @language
             */
            set: function (value) {
                if (!!this._channel) {
                    this._channel.volume = value;
                    this._volume = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioSource2D.prototype, "loop", {
            /**
             * is loop
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 是否循环
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                return this._loop;
            },
            /**
             * is loop
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 是否循环
             * @version paper 1.0
             * @platform Web
             * @language
             */
            set: function (value) {
                if (!!this._channel) {
                    this._channel.loop = value;
                    this._loop = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * play
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 播放音频
         * @version paper 1.0
         * @platform Web
         * @language
         */
        AudioSource2D.prototype.play = function (offset) {
            if (!!this._channel) {
                this._channel.start(offset);
                this._playing = true;
            }
        };
        /**
         * stop play
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 暂停音频
         * @version paper 1.0
         * @platform Web
         * @language
         */
        AudioSource2D.prototype.stop = function () {
            if (!!this._channel) {
                this._channel.stop();
                this._playing = false;
            }
        };
        __decorate([
            editor.property(editor.EditType.SOUND)
        ], AudioSource2D.prototype, "sound", null);
        __decorate([
            editor.property(editor.EditType.NUMBER)
        ], AudioSource2D.prototype, "volume", null);
        __decorate([
            editor.property(editor.EditType.CHECKBOX)
        ], AudioSource2D.prototype, "loop", null);
        return AudioSource2D;
    }(paper.BaseComponent));
    egret3d.AudioSource2D = AudioSource2D;
    __reflect(AudioSource2D.prototype, "egret3d.AudioSource2D");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * 3d audio source component
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 3D音频组件
     * @version paper 1.0
     * @platform Web
     * @language
     */
    var AudioSource3D = (function (_super) {
        __extends(AudioSource3D, _super);
        function AudioSource3D() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._volume = 1;
            _this._loop = false;
            _this._playing = false;
            return _this;
        }
        /**
         *
         */
        AudioSource3D.prototype.update = function (deltaTime) {
            if (!!this._channel && this._playing && this.gameObject) {
                var position = this.gameObject.transform.getPosition();
                this._channel.setPosition(position.x, position.y, position.z);
            }
        };
        Object.defineProperty(AudioSource3D.prototype, "sound", {
            /**
             * set sound asset
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 设置音频资源
             * @version paper 1.0
             * @platform Web
             * @language
             */
            set: function (sound) {
                if (!!this._channel && this._playing) {
                    this._channel.stop();
                    this._channel.dispose();
                    // this._sound.unuse();
                }
                if (!egret3d.sound.WebAudio.instance.isSupported) {
                    return;
                }
                this._channel = new egret3d.sound.WebAudioChannel3D();
                this._channel.buffer = sound.buffer;
                this._sound = sound;
                // sound.use();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioSource3D.prototype, "volume", {
            /**
             * volume
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音量
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                return this._volume;
            },
            /**
             * volume
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音量
             * @version paper 1.0
             * @platform Web
             * @language
             */
            set: function (value) {
                if (!!this._channel) {
                    this._channel.volume = value;
                    this._volume = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioSource3D.prototype, "loop", {
            /**
             * is loop
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 是否循环
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                return this._loop;
            },
            /**
             * is loop
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 是否循环
             * @version paper 1.0
             * @platform Web
             * @language
             */
            set: function (value) {
                if (!!this._channel) {
                    this._channel.loop = value;
                    this._loop = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * play
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 播放音频
         * @version paper 1.0
         * @platform Web
         * @language
         */
        AudioSource3D.prototype.play = function (offset) {
            if (!!this._channel && !this._playing) {
                this._channel.start(offset);
                this._playing = true;
            }
        };
        /**
         * stop play
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 暂停音频
         * @version paper 1.0
         * @platform Web
         * @language
         */
        AudioSource3D.prototype.stop = function () {
            if (!!this._channel && this._playing) {
                this._channel.stop();
                this._playing = false;
            }
        };
        Object.defineProperty(AudioSource3D.prototype, "maxDistance", {
            /**
             * max distance
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音频传播最远距离
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                if (!!this._channel) {
                    return this._channel.maxDistance;
                }
                return 0;
            },
            /**
             * max distance
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音频传播最远距离
             * @version paper 1.0
             * @platform Web
             * @language
             */
            set: function (value) {
                if (!!this._channel) {
                    this._channel.maxDistance = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioSource3D.prototype, "minDistance", {
            /**
             * min distance
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音频传播最小距离
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                if (!!this._channel) {
                    return this._channel.minDistance;
                }
                return 0;
            },
            /**
             * min distance
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音频传播最小距离
             * @version paper 1.0
             * @platform Web
             * @language
             */
            set: function (value) {
                if (!!this._channel) {
                    this._channel.minDistance = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioSource3D.prototype, "rollOffFactor", {
            /**
             * rolloff factor
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音频滚降系数
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                if (!!this._channel) {
                    return this._channel.rollOffFactor;
                }
                return 0;
            },
            /**
             * rolloff factor
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音频滚降系数
             * @version paper 1.0
             * @platform Web
             * @language
             */
            set: function (value) {
                if (!!this._channel) {
                    this._channel.rollOffFactor = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioSource3D.prototype, "distanceModel", {
            /**
             * rolloff factor
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音频滚降系数
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                if (!!this._channel) {
                    return this._channel.distanceModel;
                }
                return "";
            },
            /**
             * distance mode
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 音频衰减模式。支持“linear”，“inverse”，“exponential”三种
             * @version paper 1.0
             * @platform Web
             * @language
             */
            set: function (value) {
                if (!!this._channel) {
                    this._channel.distanceModel = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * velocity
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 速度
         * @version paper 1.0
         * @platform Web
         * @language
         */
        AudioSource3D.prototype.getVelocity = function () {
            if (!!this._channel) {
                return this._channel.getVelocity();
            }
            return new egret3d.Vector3();
        };
        /**
         * velocity
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 速度
         * @version paper 1.0
         * @platform Web
         * @language
         */
        AudioSource3D.prototype.setVelocity = function (x, y, z) {
            if (!!this._channel) {
                this._channel.setVelocity(x, y, z);
            }
        };
        __decorate([
            editor.property(editor.EditType.SOUND)
        ], AudioSource3D.prototype, "sound", null);
        __decorate([
            editor.property(editor.EditType.NUMBER)
        ], AudioSource3D.prototype, "volume", null);
        __decorate([
            editor.property(editor.EditType.CHECKBOX)
        ], AudioSource3D.prototype, "loop", null);
        __decorate([
            editor.property(editor.EditType.NUMBER)
        ], AudioSource3D.prototype, "maxDistance", null);
        __decorate([
            editor.property(editor.EditType.NUMBER)
        ], AudioSource3D.prototype, "minDistance", null);
        __decorate([
            editor.property(editor.EditType.NUMBER)
        ], AudioSource3D.prototype, "rollOffFactor", null);
        __decorate([
            editor.property(editor.EditType.LIST, { listItems: [{ label: 'linear', value: 'linear' }, { label: 'inverse', value: 'inverse' }, { label: 'exponential', value: 'exponential' }] })
        ], AudioSource3D.prototype, "distanceModel", null);
        return AudioSource3D;
    }(paper.BaseComponent));
    egret3d.AudioSource3D = AudioSource3D;
    __reflect(AudioSource3D.prototype, "egret3d.AudioSource3D");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * Audio系统
     */
    var AudioSource3DSystem = (function (_super) {
        __extends(AudioSource3DSystem, _super);
        function AudioSource3DSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [
                { componentClass: egret3d.AudioSource3D }
            ];
            return _this;
        }
        /**
         * @inheritDoc
         */
        AudioSource3DSystem.prototype.update = function () {
            var deltaTime = paper.Time.deltaTime;
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                component.update(deltaTime);
            }
        };
        return AudioSource3DSystem;
    }(paper.BaseSystem));
    egret3d.AudioSource3DSystem = AudioSource3DSystem;
    __reflect(AudioSource3DSystem.prototype, "egret3d.AudioSource3DSystem");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var BaseCollider = (function (_super) {
        __extends(BaseCollider, _super);
        function BaseCollider() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._bounds = new egret3d.OBB();
            return _this;
        }
        Object.defineProperty(BaseCollider.prototype, "bounds", {
            /**
             *
             */
            get: function () {
                return this._bounds;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            paper.serializedField
        ], BaseCollider.prototype, "_bounds", void 0);
        return BaseCollider;
    }(paper.BaseComponent));
    egret3d.BaseCollider = BaseCollider;
    __reflect(BaseCollider.prototype, "egret3d.BaseCollider");
    /**
     * 矩形碰撞盒组件
     */
    var BoxCollider = (function (_super) {
        __extends(BoxCollider, _super);
        function BoxCollider() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             *
             */
            _this._dirtyMask = 0;
            return _this;
        }
        /**
         * @inheritDoc
         */
        BoxCollider.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            this._dirtyMask |= 1 /* Bounds */;
            this._center = this._bounds.center;
            this._size = this._bounds.size;
        };
        Object.defineProperty(BoxCollider.prototype, "center", {
            /**
             * 碰撞盒中心点
             */
            get: function () {
                return this._center;
            },
            set: function (value) {
                this._dirtyMask |= 1 /* Bounds */;
                this._center.x = value.x;
                this._center.y = value.y;
                this._center.z = value.z;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoxCollider.prototype, "size", {
            /**
             * 碰撞盒尺寸
             */
            get: function () {
                return this._size;
            },
            set: function (value) {
                this._dirtyMask |= 1 /* Bounds */;
                this._size.x = value.x;
                this._size.y = value.y;
                this._size.z = value.z;
            },
            enumerable: true,
            configurable: true
        });
        return BoxCollider;
    }(BaseCollider));
    egret3d.BoxCollider = BoxCollider;
    __reflect(BoxCollider.prototype, "egret3d.BoxCollider");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * BoxCollider系统
     */
    var BoxColliderSystem = (function (_super) {
        __extends(BoxColliderSystem, _super);
        function BoxColliderSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [
                { componentClass: egret3d.BoxCollider }
            ];
            return _this;
        }
        /**
         * @inheritDoc
         */
        BoxColliderSystem.prototype.update = function () {
            for (var i = 0, l = this._components.length; i < l; i += this._interestComponentCount) {
                var component = this._components[i];
                if (component._dirtyMask !== 0) {
                    if (component._dirtyMask & 1 /* Bounds */) {
                        component._dirtyMask &= ~1 /* Bounds */;
                        var bounds = component.bounds;
                        if (bounds) {
                            bounds.setByCenterSize(bounds.center, bounds.size);
                        }
                    }
                }
                // TODO 是否应该每帧刷新定向包围盒？理论上只有 transform 改变或 自身 数据改变时才需要刷新。
                // 但是获取 transform 改变也需要花费很多成本
                var matrix = component.gameObject.transform.getWorldMatrix();
                component.bounds.update(matrix);
            }
        };
        return BoxColliderSystem;
    }(paper.BaseSystem));
    egret3d.BoxColliderSystem = BoxColliderSystem;
    __reflect(BoxColliderSystem.prototype, "egret3d.BoxColliderSystem");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * camera component
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 相机组件
     * @version paper 1.0
     * @platform Web
     * @language
     */
    var Camera = (function (_super) {
        __extends(Camera, _super);
        function Camera() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * clear color option
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 是否清除颜色缓冲区
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.clearOption_Color = true;
            /**
             * clear depth option
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 是否清除深度缓冲区
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.clearOption_Depth = true;
            /**
             * culling mask
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 相机的渲染剔除，对应GameObject的层级
             * @default CullingMask.Default | CullingMask.UI
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.cullingMask = 2 /* Default */ | 4 /* UI */;
            /**
             * camera render order
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 相机渲染排序
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.order = 0;
            /**
             * fov
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 透视投影的fov
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.fov = Math.PI * 0.25;
            /**
             * size
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 正交投影的竖向size
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.size = 2.0;
            /**
             * op value
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 0=正交， 1=透视 中间值可以在两种相机间过度
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.opvalue = 1.0;
            /**
             * back ground color
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 背景色
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.backgroundColor = new egret3d.Color(0.13, 0.28, 0.51, 1); // TODO 
            /**
             * camera viewport
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 相机视窗
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.viewport = new egret3d.Rect(0, 0, 1, 1);
            /**
             * TODO 功能完善后开放此接口
             */
            _this.postQueues = [];
            /**
             * render target
             * @defualt null
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 渲染目标，如果为null，则为画布
             * @defualt null
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.renderTarget = null;
            /**
             * 相机渲染上下文
             */
            _this.context = null;
            _this._near = 0.01;
            _this._far = 1000;
            _this.matView = new egret3d.Matrix;
            _this.matProjP = new egret3d.Matrix;
            _this.matProjO = new egret3d.Matrix;
            _this.matProj = new egret3d.Matrix;
            _this.frameVecs = [
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3()
            ];
            return _this;
        }
        Object.defineProperty(Camera, "main", {
            /**
             * current main camera
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 当前主相机。
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            get: function () {
                var entity = paper.GameObject.findWithTag("MainCamera");
                if (entity) {
                    return entity.getComponent(Camera);
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 计算相机视锥区域
         */
        Camera.prototype.calcCameraFrame = function () {
            var vpp = egret3d.helpRectA;
            this.calcViewPortPixel(vpp);
            var farLD = this.frameVecs[0];
            var nearLD = this.frameVecs[1];
            var farRD = this.frameVecs[2];
            var nearRD = this.frameVecs[3];
            var farLT = this.frameVecs[4];
            var nearLT = this.frameVecs[5];
            var farRT = this.frameVecs[6];
            var nearRT = this.frameVecs[7];
            var near_h = this.near * Math.tan(this.fov * 0.5);
            var asp = vpp.w / vpp.h;
            var near_w = near_h * asp;
            egret3d.Vector3.set(-near_w, near_h, this.near, nearLT);
            egret3d.Vector3.set(-near_w, -near_h, this.near, nearLD);
            egret3d.Vector3.set(near_w, near_h, this.near, nearRT);
            egret3d.Vector3.set(near_w, -near_h, this.near, nearRD);
            var far_h = this.far * Math.tan(this.fov * 0.5);
            var far_w = far_h * asp;
            egret3d.Vector3.set(-far_w, far_h, this.far, farLT);
            egret3d.Vector3.set(-far_w, -far_h, this.far, farLD);
            egret3d.Vector3.set(far_w, far_h, this.far, farRT);
            egret3d.Vector3.set(far_w, -far_h, this.far, farRD);
            var matrix = this.gameObject.transform.getWorldMatrix();
            egret3d.Matrix.transformVector3(farLD, matrix, farLD);
            egret3d.Matrix.transformVector3(nearLD, matrix, nearLD);
            egret3d.Matrix.transformVector3(farRD, matrix, farRD);
            egret3d.Matrix.transformVector3(nearRD, matrix, nearRD);
            egret3d.Matrix.transformVector3(farLT, matrix, farLT);
            egret3d.Matrix.transformVector3(nearLT, matrix, nearLT);
            egret3d.Matrix.transformVector3(farRT, matrix, farRT);
            egret3d.Matrix.transformVector3(nearRT, matrix, nearRT);
        };
        /**
         * 设置render target与viewport
         * @param target render target
         * @param withoutClear 强制不清除缓存
         *
         */
        Camera.prototype._targetAndViewport = function (target, withoutClear) {
            var w;
            var h;
            var webgl = egret3d.WebGLKit.webgl;
            if (!target) {
                w = egret3d.stage.screenViewport.w;
                h = egret3d.stage.screenViewport.h;
                egret3d.GlRenderTarget.useNull(webgl);
            }
            else {
                w = target.width;
                h = target.height;
                target.use(webgl);
            }
            webgl.viewport(w * this.viewport.x, h * this.viewport.y, w * this.viewport.w, h * this.viewport.h);
            webgl.depthRange(0, 1);
            if (withoutClear) {
                return;
            }
            // clear buffer
            if (this.clearOption_Color && this.clearOption_Depth) {
                egret3d.WebGLKit.zWrite(true);
                // webgl.depthMask(true);
                webgl.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a);
                webgl.clearDepth(1.0);
                webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);
            }
            else if (this.clearOption_Depth) {
                egret3d.WebGLKit.zWrite(true);
                // webgl.depthMask(true);
                webgl.clearDepth(1.0);
                webgl.clear(webgl.DEPTH_BUFFER_BIT);
            }
            else if (this.clearOption_Color) {
                webgl.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a);
                webgl.clear(webgl.COLOR_BUFFER_BIT);
            }
            else {
            }
        };
        /**
         * @inheritDoc
         */
        Camera.prototype.deserialize = function (element) {
            this.fov = element.fov;
            this.opvalue = element.opvalue;
            this._near = element._near;
            this._far = element._far;
            this.cullingMask = element.cullingMask;
            this.order = element.order;
            this.clearOption_Color = element.clearOption_Color;
            this.clearOption_Depth = element.clearOption_Depth;
            this.backgroundColor.deserialize(element.backgroundColor);
            this.viewport.deserialize(element.viewport);
        };
        /**
         * @inheritDoc
         */
        Camera.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            this.context = new egret3d.RenderContext();
            this.near = this._near;
            this.far = this._far;
        };
        /**
         *
         */
        Camera.prototype.update = function (_delta) {
            this.calcCameraFrame();
            this.context.updateCamera(this);
        };
        /**
         * 计算相机的 view matrix（视图矩阵）
         */
        Camera.prototype.calcViewMatrix = function (matrix) {
            var camworld = this.gameObject.transform.getWorldMatrix();
            egret3d.Matrix.inverse(camworld, this.matView);
            egret3d.Matrix.copy(this.matView, matrix);
            return matrix;
        };
        /**
         * 计算相机的 project matrix（投影矩阵）
         */
        Camera.prototype.calcProjectMatrix = function (asp, matrix) {
            if (this.opvalue > 0) {
                egret3d.Matrix.perspectiveProjectLH(this.fov, asp, this.near, this.far, this.matProjP);
            }
            if (this.opvalue < 1) {
                egret3d.Matrix.orthoProjectLH(this.size * asp, this.size, this.near, this.far, this.matProjO);
            }
            if (this.opvalue === 0.0) {
                egret3d.Matrix.copy(this.matProjO, this.matProj);
            }
            else if (this.opvalue === 1.0) {
                egret3d.Matrix.copy(this.matProjP, this.matProj);
            }
            else {
                egret3d.Matrix.lerp(this.matProjO, this.matProjP, this.opvalue, this.matProj);
            }
            egret3d.Matrix.copy(this.matProj, matrix);
            return matrix;
        };
        /**
         * calcViewPortPixel
         * @param viewPortPixel output rect
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 计算相机视口像素rect
         * @param viewPortPixel 输出的rect
         * @version paper 1.0
         * @platform Web
         * @language
         */
        Camera.prototype.calcViewPortPixel = function (viewPortPixel) {
            var w;
            var h;
            var renderTarget = this.renderTarget;
            var viewport = this.viewport;
            if (renderTarget) {
                w = renderTarget.width;
                h = renderTarget.height;
            }
            else {
                w = egret3d.stage.screenViewport.w;
                h = egret3d.stage.screenViewport.h;
            }
            viewPortPixel.x = w * viewport.x;
            viewPortPixel.y = h * viewport.y;
            viewPortPixel.w = w * viewport.w;
            viewPortPixel.h = h * viewport.h;
            //asp = this.viewPortPixel.w / this.viewPortPixel.h;
        };
        /**
         * createRayByScreen
         * @param screenpos screen coords
         * @param app application
         * @return Ray ray
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 由屏幕坐标发射射线
         * @param screenpos 屏幕坐标
         * @param app 主程序实例
         * @return Ray 射线
         * @version paper 1.0
         * @platform Web
         * @language
         */
        Camera.prototype.createRayByScreen = function (screenPosX, screenPosY) {
            var src1 = egret3d.helpVector3C;
            src1.x = screenPosX;
            src1.y = screenPosY;
            src1.z = 0.0;
            var src2 = egret3d.helpVector3D;
            src2.x = screenPosX;
            src2.y = screenPosY;
            src2.z = 1.0;
            var dest1 = egret3d.helpVector3E;
            var dest2 = egret3d.helpVector3F;
            this.calcWorldPosFromScreenPos(src1, dest1);
            this.calcWorldPosFromScreenPos(src2, dest2);
            var dir = egret3d.helpVector3G;
            egret3d.Vector3.subtract(dest2, dest1, dir);
            egret3d.Vector3.normalize(dir);
            var ray = new egret3d.Ray(dest1, dir);
            return ray;
        };
        /**
         * calcWorldPosFromScreenPos
         * @param app application
         * @param screenpos screen coords
         * @param outWorldPos world coords
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 由屏幕坐标得到世界坐标
         * @param app 主程序
         * @param screenpos 屏幕坐标
         * @param outWorldPos 世界坐标
         * @version paper 1.0
         * @platform Web
         * @language
         */
        Camera.prototype.calcWorldPosFromScreenPos = function (screenPos, outWorldPos) {
            var vpp = egret3d.helpRectA;
            this.calcViewPortPixel(vpp);
            var vppos = egret3d.helpVector3A;
            vppos.x = screenPos.x / vpp.w * 2.0 - 1.0;
            vppos.y = 1.0 - screenPos.y / vpp.h * 2.0;
            vppos.z = screenPos.z;
            var matrixView = egret3d.helpMatrixA;
            var matrixProject = egret3d.helpMatrixB;
            var asp = vpp.w / vpp.h;
            this.calcViewMatrix(matrixView);
            this.calcProjectMatrix(asp, matrixProject);
            var matrixViewProject = egret3d.helpMatrixC;
            var matinv = egret3d.helpMatrixD;
            egret3d.Matrix.multiply(matrixProject, matrixView, matrixViewProject);
            egret3d.Matrix.inverse(matrixViewProject, matinv);
            egret3d.Matrix.transformVector3(vppos, matinv, outWorldPos);
        };
        /**
         * calcScreenPosFromWorldPos
         * @param app application
         * @param worldPos world coords
         * @param outScreenPos screen coords
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 由世界坐标得到屏幕坐标
         * @param app 主程序
         * @param worldPos 世界坐标
         * @param outScreenPos 屏幕坐标
         * @version paper 1.0
         * @platform Web
         * @language
         */
        Camera.prototype.calcScreenPosFromWorldPos = function (worldPos, outScreenPos) {
            var vpp = egret3d.helpRectA;
            this.calcViewPortPixel(vpp);
            var matrixView = egret3d.helpMatrixA;
            var matrixProject = egret3d.helpMatrixB;
            var asp = vpp.w / vpp.h;
            this.calcViewMatrix(matrixView);
            this.calcProjectMatrix(asp, matrixProject);
            var matrixViewProject = egret3d.helpMatrixC;
            egret3d.Matrix.multiply(matrixProject, matrixView, matrixViewProject);
            var ndcPos = egret3d.helpVector3A;
            egret3d.Matrix.transformVector3(worldPos, matrixViewProject, ndcPos);
            outScreenPos.x = (ndcPos.x + 1.0) * vpp.w * 0.5;
            outScreenPos.y = (1.0 - ndcPos.y) * vpp.h * 0.5;
        };
        /**
         *
         */
        Camera.prototype.getPosAtXPanelInViewCoordinateByScreenPos = function (screenPos, z, out) {
            var vpp = egret3d.helpRectA;
            this.calcViewPortPixel(vpp);
            var nearpos = egret3d.helpVector3A;
            nearpos.z = -this.near;
            nearpos.x = screenPos.x - vpp.w * 0.5;
            nearpos.y = vpp.h * 0.5 - screenPos.y;
            var farpos = egret3d.helpVector3B;
            farpos.z = -this.far;
            farpos.x = this.far * nearpos.x / this.near;
            farpos.y = this.far * nearpos.y / this.near;
            var rate = (nearpos.z - z) / (nearpos.z - farpos.z);
            out.x = nearpos.x - (nearpos.x - farpos.x) * rate;
            out.y = nearpos.y - (nearpos.y - farpos.y) * rate;
        };
        Camera.prototype.testFrustumCulling = function (node) {
            var aabb = node.aabb;
            if (!aabb.intersectPlane(this.frameVecs[0], this.frameVecs[1], this.frameVecs[5]))
                return false;
            if (!aabb.intersectPlane(this.frameVecs[1], this.frameVecs[3], this.frameVecs[7]))
                return false;
            if (!aabb.intersectPlane(this.frameVecs[3], this.frameVecs[2], this.frameVecs[6]))
                return false;
            if (!aabb.intersectPlane(this.frameVecs[2], this.frameVecs[0], this.frameVecs[4]))
                return false;
            if (!aabb.intersectPlane(this.frameVecs[5], this.frameVecs[7], this.frameVecs[6]))
                return false;
            if (!aabb.intersectPlane(this.frameVecs[0], this.frameVecs[2], this.frameVecs[3]))
                return false;
            return true;
        };
        Object.defineProperty(Camera.prototype, "near", {
            /**
             * distance between camera and near plane
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 相机到近裁剪面距离
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                return this._near;
            },
            set: function (value) {
                if (value >= this.far) {
                    value = this.far - 1.0;
                }
                if (value < 0.01) {
                    value = 0.01;
                }
                this._near = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Camera.prototype, "far", {
            /**
             * distance between camera and far plane
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 相机到远裁剪面距离
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                return this._far;
            },
            set: function (value) {
                if (value <= this.near) {
                    value = this.near + 1.0;
                }
                if (value >= 1000.0) {
                    value = 1000.0;
                }
                this._far = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            paper.serializedField
        ], Camera.prototype, "clearOption_Color", void 0);
        __decorate([
            paper.serializedField
        ], Camera.prototype, "clearOption_Depth", void 0);
        __decorate([
            paper.serializedField
        ], Camera.prototype, "cullingMask", void 0);
        __decorate([
            paper.serializedField
        ], Camera.prototype, "order", void 0);
        __decorate([
            paper.serializedField
        ], Camera.prototype, "fov", void 0);
        __decorate([
            paper.serializedField
        ], Camera.prototype, "size", void 0);
        __decorate([
            paper.serializedField
        ], Camera.prototype, "opvalue", void 0);
        __decorate([
            paper.serializedField
        ], Camera.prototype, "backgroundColor", void 0);
        __decorate([
            paper.serializedField
        ], Camera.prototype, "viewport", void 0);
        __decorate([
            paper.serializedField
        ], Camera.prototype, "_near", void 0);
        __decorate([
            paper.serializedField
        ], Camera.prototype, "_far", void 0);
        return Camera;
    }(paper.BaseComponent));
    egret3d.Camera = Camera;
    __reflect(Camera.prototype, "egret3d.Camera");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * 深度绘制通道
     * TODO 完善后public给开发者
     */
    var CameraPostQueueDepth = (function () {
        function CameraPostQueueDepth() {
            /**
             * @inheritDoc
             */
            this.renderTarget = null;
        }
        /**
         * @inheritDoc
         */
        CameraPostQueueDepth.prototype.render = function (camera, renderSystem) {
            var webgl = egret3d.WebGLKit.webgl;
            camera._targetAndViewport(this.renderTarget, true); // 最后一个参数true 表示不用camera的clear 配置
            egret3d.WebGLKit.zWrite(true);
            // webgl.depthMask(true); // 开启 zwrite 以便正常 clear depth
            webgl.clearColor(0, 0, 0, 0);
            webgl.clearDepth(1.0);
            webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);
            camera.context.drawtype = "_depth";
            // camera._renderOnce(scene, context, "_depth");
            renderSystem.$renderCamera(camera);
            egret3d.GlRenderTarget.useNull(webgl);
        };
        return CameraPostQueueDepth;
    }());
    egret3d.CameraPostQueueDepth = CameraPostQueueDepth;
    __reflect(CameraPostQueueDepth.prototype, "egret3d.CameraPostQueueDepth", ["egret3d.ICameraPostQueue"]);
    /**
     * framebuffer绘制通道
     * TODO 完善后public给开发者
     */
    var CameraPostQueueQuad = (function () {
        function CameraPostQueueQuad() {
            /**
             * shader & uniform
             */
            this.material = new egret3d.Material();
            /**
             * @inheritDoc
             */
            this.renderTarget = null;
        }
        /**
         * @inheritDoc
         */
        CameraPostQueueQuad.prototype.render = function (camera, _renderSystem) {
            var webgl = egret3d.WebGLKit.webgl;
            camera._targetAndViewport(this.renderTarget, true);
            egret3d.WebGLKit.zWrite(true);
            // webgl.depthMask(true); // 开启 zwrite 以便正常 clear depth
            webgl.clearColor(0, 0.3, 0, 0);
            webgl.clearDepth(1.0);
            webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);
            var mesh = egret3d.DefaultMeshes.QUAD;
            camera.context.drawtype = "";
            egret3d.WebGLKit.draw(camera.context, this.material, mesh, 0, "quad");
        };
        return CameraPostQueueQuad;
    }());
    egret3d.CameraPostQueueQuad = CameraPostQueueQuad;
    __reflect(CameraPostQueueQuad.prototype, "egret3d.CameraPostQueueQuad", ["egret3d.ICameraPostQueue"]);
    /**
     * 颜色绘制通道
     * TODO 完善后public给开发者
     */
    var CameraPostQueueColor = (function () {
        function CameraPostQueueColor() {
            /**
             * @inheritDoc
             */
            this.renderTarget = null;
        }
        /**
         * @inheritDoc
         */
        CameraPostQueueColor.prototype.render = function (camera, renderSystem) {
            var webgl = egret3d.WebGLKit.webgl;
            camera._targetAndViewport(this.renderTarget, false);
            camera.context.drawtype = "";
            // camera._renderOnce(scene, context, "");
            renderSystem.$renderCamera(camera);
            egret3d.GlRenderTarget.useNull(webgl);
        };
        return CameraPostQueueColor;
    }());
    egret3d.CameraPostQueueColor = CameraPostQueueColor;
    __reflect(CameraPostQueueColor.prototype, "egret3d.CameraPostQueueColor", ["egret3d.ICameraPostQueue"]);
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var helpVec3_1 = new egret3d.Vector3();
    /**
     * 缓存场景通用数据
     * 包括矩阵信息，灯光，光照贴图，viewport尺寸等等
     */
    var RenderContext = (function () {
        function RenderContext() {
            this.receiveShadow = false;
            /**
             *
             */
            this.version = 0;
            /**
             *
             */
            this.lightmapUV = 1;
            this.lightCount = 0;
            this.directLightCount = 0;
            this.pointLightCount = 0;
            this.spotLightCount = 0;
            /**
             *
             */
            this.drawtype = "";
            /**
             *
             */
            this.lightmap = null;
            this.boneData = null;
            // 15: x, y, z, dirX, dirY, dirZ, colorR, colorG, colorB, intensity, shadow, shadowBias, shadowRadius, shadowMapSizeX, shadowMapSizeY
            this.directLightArray = new Float32Array(0);
            // 19: x, y, z, dirX, dirY, dirZ, colorR, colorG, colorB, intensity, distance, decay, shadow, shadowBias, shadowRadius, shadowCameraNear, shadowCameraFar, shadowMapSizeX, shadowMapSizeY
            this.pointLightArray = new Float32Array(0);
            // 19: x, y, z, dirX, dirY, dirZ, colorR, colorG, colorB, intensity, distance, decay, coneCos, penumbraCos, shadow, shadowBias, shadowRadius, shadowMapSizeX, shadowMapSizeY
            this.spotLightArray = new Float32Array(0);
            this.directShadowMatrix = new Float32Array(0);
            this.spotShadowMatrix = new Float32Array(0);
            this.matrix_m = new egret3d.Matrix();
            this.matrix_mvp = new egret3d.Matrix();
            this.directShadowMaps = [];
            this.pointShadowMaps = [];
            this.spotShadowMaps = [];
            this.viewPortPixel = { x: 0, y: 0, w: 0, h: 0 };
            // transforms
            // eyePos: Vector4 = new Vector4();
            this.matrix_v = new egret3d.Matrix();
            this.matrix_p = new egret3d.Matrix();
            this.matrix_mv = new egret3d.Matrix();
            this.matrix_vp = new egret3d.Matrix();
            //matrixNormal: paper.matrix = new paper.matrix();
            /**
             *
             */
            this.lightmapOffset = new Float32Array([1, 1, 0, 0]);
            this.lightPosition = new Float32Array([0, 0, 0, 1]);
            this.lightShadowCameraNear = 0;
            this.lightShadowCameraFar = 0;
        }
        RenderContext.prototype.updateLightmap = function (texture, uv, offset) {
            this.lightmap = texture;
            this.lightmapUV = uv;
            this.lightmapOffset[0] = offset.x;
            this.lightmapOffset[1] = offset.y;
            this.lightmapOffset[2] = offset.z;
            this.lightmapOffset[3] = offset.w;
            this.version++;
        };
        RenderContext.prototype.updateCamera = function (camera) {
            var viewPortPixel = this.viewPortPixel;
            camera.calcViewPortPixel(viewPortPixel); // update viewport
            var asp = viewPortPixel.w / viewPortPixel.h;
            camera.calcViewMatrix(this.matrix_v);
            camera.calcProjectMatrix(asp, this.matrix_p);
            egret3d.Matrix.multiply(this.matrix_p, this.matrix_v, this.matrix_vp);
            this.version++;
        };
        RenderContext.prototype.updateLights = function (lights) {
            var allLightCount = 0, directLightCount = 0, pointLightCount = 0, spotLightCount = 0;
            for (var _i = 0, lights_1 = lights; _i < lights_1.length; _i++) {
                var light = lights_1[_i];
                switch (light.type) {
                    case egret3d.LightTypeEnum.Direction:
                        directLightCount++;
                        break;
                    case egret3d.LightTypeEnum.Point:
                        pointLightCount++;
                        break;
                    case egret3d.LightTypeEnum.Spot:
                        spotLightCount++;
                        break;
                }
                allLightCount++;
            }
            // TODO
            if (this.directLightArray.length !== directLightCount * 15) {
                this.directLightArray = new Float32Array(directLightCount * 15);
            }
            if (this.pointLightArray.length !== pointLightCount * 19) {
                this.pointLightArray = new Float32Array(pointLightCount * 19);
            }
            if (this.spotLightArray.length !== spotLightCount * 19) {
                this.spotLightArray = new Float32Array(spotLightCount * 19);
            }
            if (this.directShadowMatrix.length !== directLightCount * 16) {
                this.directShadowMatrix = new Float32Array(directLightCount * 16);
            }
            if (this.spotShadowMatrix.length !== spotLightCount * 16) {
                this.spotShadowMatrix = new Float32Array(spotLightCount * 16);
            }
            this.directShadowMaps.length = directLightCount;
            this.pointShadowMaps.length = pointLightCount;
            this.spotShadowMaps.length = spotLightCount;
            this.lightCount = allLightCount;
            this.directLightCount = directLightCount;
            this.pointLightCount = pointLightCount;
            this.spotLightCount = spotLightCount;
            var directLightIndex = 0, pointLightIndex = 0, spotLightIndex = 0, index = 0, size = 0;
            for (var _a = 0, lights_2 = lights; _a < lights_2.length; _a++) {
                var light = lights_2[_a];
                var lightArray = this.directLightArray;
                if (light.type === egret3d.LightTypeEnum.Direction) {
                    lightArray = this.directLightArray;
                    index = directLightIndex;
                    size = 15;
                }
                else if (light.type === egret3d.LightTypeEnum.Point) {
                    lightArray = this.pointLightArray;
                    index = pointLightIndex;
                    size = 19;
                }
                else if (light.type === egret3d.LightTypeEnum.Spot) {
                    lightArray = this.spotLightArray;
                    index = spotLightIndex;
                    size = 19;
                }
                var offset = 0;
                var pos = light.gameObject.transform.getPosition();
                lightArray[index * size + offset++] = pos.x;
                lightArray[index * size + offset++] = pos.y;
                lightArray[index * size + offset++] = pos.z;
                var dir = light.gameObject.transform.getForward(helpVec3_1);
                lightArray[index * size + offset++] = dir.x;
                lightArray[index * size + offset++] = dir.y;
                lightArray[index * size + offset++] = dir.z;
                lightArray[index * size + offset++] = light.color.r;
                lightArray[index * size + offset++] = light.color.g;
                lightArray[index * size + offset++] = light.color.b;
                lightArray[index * size + offset++] = light.intensity;
                if (light.type === egret3d.LightTypeEnum.Point || light.type === egret3d.LightTypeEnum.Spot) {
                    lightArray[index * size + offset++] = light.distance;
                    lightArray[index * size + offset++] = light.decay;
                    if (light.type === egret3d.LightTypeEnum.Spot) {
                        lightArray[index * size + offset++] = Math.cos(light.angle);
                        lightArray[index * size + offset++] = Math.cos(light.angle * (1 - light.penumbra));
                    }
                }
                if (light.castShadows) {
                    lightArray[index * size + offset++] = 1;
                    if (light.type === egret3d.LightTypeEnum.Direction) {
                        lightArray[index * size + offset++] = light.$directLightShadow.bias;
                        lightArray[index * size + offset++] = light.$directLightShadow.radius;
                        lightArray[index * size + offset++] = light.$directLightShadow.windowSize;
                        lightArray[index * size + offset++] = light.$directLightShadow.windowSize;
                        this.directShadowMatrix.set(light.$directLightShadow.matrix.rawData, directLightIndex * 16);
                        this.directShadowMaps[directLightIndex] = light.$directLightShadow.map;
                    }
                    else if (light.type === egret3d.LightTypeEnum.Point) {
                        lightArray[index * size + offset++] = light.$pointLightShadow.bias;
                        lightArray[index * size + offset++] = light.$pointLightShadow.radius;
                        lightArray[index * size + offset++] = light.$pointLightShadow.camera.near;
                        lightArray[index * size + offset++] = light.$pointLightShadow.camera.far;
                        lightArray[index * size + offset++] = light.$pointLightShadow.windowSize;
                        lightArray[index * size + offset++] = light.$pointLightShadow.windowSize;
                        this.pointShadowMaps[pointLightIndex] = light.$pointLightShadow.map;
                    }
                    else if (light.type === egret3d.LightTypeEnum.Spot) {
                        lightArray[index * size + offset++] = light.$spotLightShadow.bias;
                        lightArray[index * size + offset++] = light.$spotLightShadow.radius;
                        lightArray[index * size + offset++] = light.$spotLightShadow.windowSize;
                        lightArray[index * size + offset++] = light.$spotLightShadow.windowSize;
                        this.spotShadowMatrix.set(light.$spotLightShadow.matrix.rawData, spotLightIndex * 16);
                        this.spotShadowMaps[spotLightIndex] = light.$spotLightShadow.map;
                    }
                }
                else {
                    lightArray[index * size + offset++] = 0;
                    lightArray[index * size + offset++] = 0;
                    lightArray[index * size + offset++] = 0;
                    lightArray[index * size + offset++] = 0;
                    lightArray[index * size + offset++] = 0;
                    if (light.type === egret3d.LightTypeEnum.Direction) {
                        this.directShadowMaps[directLightIndex] = null;
                    }
                    else if (light.type === egret3d.LightTypeEnum.Point) {
                        this.pointShadowMaps[pointLightIndex] = null;
                    }
                    else if (light.type === egret3d.LightTypeEnum.Spot) {
                        this.spotShadowMaps[spotLightIndex] = null;
                    }
                }
                if (light.type === egret3d.LightTypeEnum.Direction) {
                    directLightIndex++;
                }
                else if (light.type === egret3d.LightTypeEnum.Point) {
                    pointLightIndex++;
                }
                else if (light.type === egret3d.LightTypeEnum.Spot) {
                    spotLightIndex++;
                }
            }
            this.version++;
        };
        RenderContext.prototype.updateOverlay = function () {
            egret3d.Matrix.identify(this.matrix_mvp);
            this.version++;
        };
        RenderContext.prototype.updateModel = function (model) {
            egret3d.Matrix.copy(model.getWorldMatrix(), this.matrix_m); // clone matrix because getWorldMatrix returns a reference
            egret3d.Matrix.multiply(this.matrix_v, this.matrix_m, this.matrix_mv);
            // paper._Matrix.inverse(this.matrixModelView, this.matrixNormal);
            // paper.matrixTranspose(this.matrixNormal, this.matrixNormal);
            egret3d.Matrix.multiply(this.matrix_vp, this.matrix_m, this.matrix_mvp);
            this.version++;
        };
        // for trial effect
        RenderContext.prototype.updateModeTrail = function () {
            egret3d.Matrix.copy(this.matrix_v, this.matrix_mv);
            egret3d.Matrix.copy(this.matrix_vp, this.matrix_mvp);
            this.version++;
        };
        RenderContext.prototype.updateBones = function (data) {
            this.boneData = data;
            this.version++;
        };
        RenderContext.prototype.updateLightDepth = function (light) {
            var shadow = null;
            switch (light.type) {
                case egret3d.LightTypeEnum.Direction:
                    shadow = light.$directLightShadow;
                    break;
                case egret3d.LightTypeEnum.Point:
                    shadow = light.$pointLightShadow;
                    break;
                case egret3d.LightTypeEnum.Spot:
                    shadow = light.$spotLightShadow;
                    break;
            }
            // let pos = light.gameObject.transform.getPosition();
            this.lightPosition = light.gameObject.transform.$getGlobalPosition();
            // this.lightPosition.x = pos.x;
            // this.lightPosition.y = pos.y;
            // this.lightPosition.z = pos.z;
            // this.lightPosition.w = 1;
            if (shadow) {
                this.lightShadowCameraNear = shadow.camera.near;
                this.lightShadowCameraFar = shadow.camera.far;
            }
        };
        return RenderContext;
    }());
    egret3d.RenderContext = RenderContext;
    __reflect(RenderContext.prototype, "egret3d.RenderContext");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * 可以添加egret2d显示对象（包括EUI）进行渲染。
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Egret2DRenderer = (function (_super) {
        __extends(Egret2DRenderer, _super);
        function Egret2DRenderer() {
            var _this = _super.call(this) || this;
            /**
             * 是否使用视锥剔除
             */
            _this.frustumTest = false;
            _this._screenAdapter = new egret3d.ConstantAdapter();
            _this._catchedEvent = {};
            _this._stageWidth = 0;
            _this._stageHeight = 0;
            _this._scaler = 1;
            _this.stage = new egret.Stage();
            _this.stage.maxTouches = 1;
            _this.root = new egret.DisplayObjectContainer();
            _this.stage.addChild(_this.root);
            return _this;
        }
        Object.defineProperty(Egret2DRenderer.prototype, "screenAdapter", {
            get: function () {
                return this._screenAdapter;
            },
            set: function (adapter) {
                adapter.$dirty = true;
                this._screenAdapter = adapter;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @inheritDoc
         */
        Egret2DRenderer.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            var context = egret3d.WebGLKit.webgl;
            if (!this.renderer) {
                this.renderer = egret.web.Renderer.getInstance(context);
            }
            var stage = this.stage;
            var displayList = new egret.sys.DisplayList(stage);
            displayList.renderBuffer = new egret.sys.RenderBuffer(undefined, undefined, true);
            stage.$displayList = displayList;
            egret3d.InputManager.touch.addEventListener("touchstart", this._onTouchStart, this);
            egret3d.InputManager.touch.addEventListener("touchend", this._onTouchEnd, this);
            egret3d.InputManager.touch.addEventListener("touchcancel", this._onTouchEnd, this);
            egret3d.InputManager.touch.addEventListener("touchmove", this._onTouchMove, this);
            egret3d.InputManager.mouse.addEventListener("mousedown", this._onTouchStart, this);
            egret3d.InputManager.mouse.addEventListener("mouseup", this._onTouchEnd, this);
            egret3d.InputManager.mouse.addEventListener("mousemove", this._onTouchMove, this);
        };
        /**
         * @inheritDoc
         */
        Egret2DRenderer.prototype.uninitialize = function () {
            _super.prototype.uninitialize.call(this);
            egret3d.InputManager.touch.removeEventListener("touchstart", this._onTouchStart, this);
            egret3d.InputManager.touch.removeEventListener("touchend", this._onTouchEnd, this);
            egret3d.InputManager.touch.removeEventListener("touchcancel", this._onTouchEnd, this);
            egret3d.InputManager.touch.removeEventListener("touchmove", this._onTouchMove, this);
            egret3d.InputManager.mouse.removeEventListener("mousedown", this._onTouchStart, this);
            egret3d.InputManager.mouse.removeEventListener("mouseup", this._onTouchEnd, this);
            egret3d.InputManager.mouse.removeEventListener("mousemove", this._onTouchMove, this);
            // this.stage.removeChild(this.root);
        };
        /**
         * 检查屏幕接触事件是否能够穿透此2D层
         */
        Egret2DRenderer.prototype.checkEventThrough = function (x, y) {
            return !!this._catchedEvent[x + "_" + y];
        };
        Egret2DRenderer.prototype._onTouchStart = function (event) {
            // console.log(event);
            if (this.stage.$onTouchBegin(event.x / this._scaler, event.y / this._scaler, event.identifier)) {
                this._catchedEvent[event.x + "_" + event.y] = true;
            }
        };
        Egret2DRenderer.prototype._onTouchMove = function (event) {
            // console.log(event);
            if (this.stage.$onTouchMove(event.x / this._scaler, event.y / this._scaler, event.identifier)) {
                this._catchedEvent[event.x + "_" + event.y] = true;
            }
        };
        Egret2DRenderer.prototype._onTouchEnd = function (event) {
            // console.log(event);
            if (this.stage.$onTouchEnd(event.x / this._scaler, event.y / this._scaler, event.identifier)) {
                this._catchedEvent[event.x + "_" + event.y] = true;
            }
        };
        /**
         * screen position to ui position
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 从屏幕坐标转换到当前2D系统的坐标
         * @version paper 1.0
         * @platform Web
         * @language
         */
        Egret2DRenderer.prototype.screenPosToUIPos = function (pos, out) {
            if (out === void 0) { out = new egret3d.Vector2(); }
            out.x = pos.x / this._scaler;
            out.y = pos.y / this._scaler;
            return out;
        };
        Object.defineProperty(Egret2DRenderer.prototype, "scaler", {
            /**
             * 从屏幕坐标到当前2D系统的坐标的缩放系数
             */
            get: function () {
                return this._scaler;
            },
            enumerable: true,
            configurable: true
        });
        /**
         *
         */
        Egret2DRenderer.prototype.update = function (delta) {
            var stage2d = this.stage;
            var _a = egret3d.stage.screenViewport, w = _a.w, h = _a.h;
            if (this._stageWidth != w || this._stageHeight != h || this.screenAdapter.$dirty) {
                var result = { w: 0, h: 0, s: 0 };
                this.screenAdapter.calculateScaler(w, h, result);
                this.screenAdapter.$dirty = false;
                // this._scaler = this.root.scaleX = this.root.scaleY = result.s;
                stage2d.$displayList["offsetMatrix"].a = result.s;
                stage2d.$displayList["offsetMatrix"].d = result.s;
                this._scaler = result.s;
                var stageWidth = result.w;
                var stageHeight = result.h;
                stage2d.$stageWidth = stageWidth;
                stage2d.$stageHeight = stageHeight;
                // stage.$displayList.setClipRect(screenWidth, screenHeight);
                stage2d.pushResize(w, h);
                stage2d.dispatchEventWith(egret.Event.RESIZE);
                this._stageWidth = w;
                this._stageHeight = h;
            }
            // clear catched events
            this._catchedEvent = {};
        };
        /**
         *
         */
        Egret2DRenderer.prototype.render = function (context, camera) {
            var gl = egret3d.WebGLKit.webgl;
            this.renderer.beforeRender();
            this.stage.drawToSurface();
            egret3d.WebGLKit.resetState(); // 清除3D渲染器中的标脏
        };
        return Egret2DRenderer;
    }(paper.BaseComponent));
    egret3d.Egret2DRenderer = Egret2DRenderer;
    __reflect(Egret2DRenderer.prototype, "egret3d.Egret2DRenderer");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var Egret2DRendererSystem = (function (_super) {
        __extends(Egret2DRendererSystem, _super);
        function Egret2DRendererSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [
                { componentClass: egret3d.Egret2DRenderer }
            ];
            return _this;
        }
        /**
         * @inheritDoc
         */
        Egret2DRendererSystem.prototype.update = function () {
            var deltaTime = paper.Time.deltaTime;
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                component.update(deltaTime);
            }
            if (this._components.length > 0) {
                egret.ticker.update();
            }
        };
        return Egret2DRendererSystem;
    }(paper.BaseSystem));
    egret3d.Egret2DRendererSystem = Egret2DRendererSystem;
    __reflect(Egret2DRendererSystem.prototype, "egret3d.Egret2DRendererSystem");
})(egret3d || (egret3d = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret;
(function (egret) {
    var web;
    (function (web) {
        /**
         * @internal
         */
        var Renderer = (function () {
            function Renderer(context) {
                this.context = context;
                var egretWebGLRenderContext = this.egretWebGLRenderContext = egret.web.WebGLRenderContext.getInstance(0, 0);
                egretWebGLRenderContext.setContext(context);
                this.drawCmdManager = egretWebGLRenderContext.drawCmdManager;
                this.vao = egretWebGLRenderContext.vao;
                // egretWebGLRenderContext.drawFunc = this.$drawWebGL.bind(this);
                egretWebGLRenderContext.$drawWebGL = this.$drawWebGL.bind(this);
                egret.sys.RenderBuffer = egret.web.WebGLRenderBuffer;
                egret.sys.systemRenderer = new egret.web.WebGLRenderer();
                egret.sys.canvasRenderer = new egret.CanvasRenderer();
                egret.sys.customHitTestBuffer = new egret.web.WebGLRenderBuffer(3, 3);
                egret.sys.canvasHitTestBuffer = new egret.web.CanvasRenderBuffer(3, 3);
                egret.Capabilities['$renderMode'] = "webgl";
                this.vertexBuffer = context.createBuffer();
                this.indexBuffer = context.createBuffer();
                // app.addEventListener("beforeRender", function() {
                //     egret.ticker.update();
                // }, this);
            }
            Renderer.getInstance = function (context) {
                if (!this._instance) {
                    this._instance = new Renderer(context);
                }
                return this._instance;
            };
            Renderer.prototype.beforeRender = function () {
                var gl = this.context;
                gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                gl.disable(gl.DEPTH_TEST);
                gl.disable(gl.CULL_FACE);
                gl.enable(gl.BLEND);
                gl.disable(gl.STENCIL_TEST);
                gl.colorMask(true, true, true, true);
                this.setBlendMode("source-over");
                // 目前只使用0号材质单元，默认开启
                gl.activeTexture(gl.TEXTURE0);
            };
            Renderer.prototype.$drawWebGL = function () {
                if (this.drawCmdManager.drawDataLen == 0) {
                    return;
                }
                this.uploadVerticesArray(this.vao.getVertices());
                // 有mesh，则使用indicesForMesh
                if (this.vao.isMesh()) {
                    this.uploadIndicesArray(this.vao.getMeshIndices());
                }
                var length = this.drawCmdManager.drawDataLen;
                var offset = 0;
                for (var i = 0; i < length; i++) {
                    var data = this.drawCmdManager.drawData[i];
                    if (!data) {
                        continue;
                    }
                    offset = this.drawData(data, offset);
                    // 计算draw call
                    if (data.type == 6 /* ACT_BUFFER */) {
                        this.activatedBuffer = data.buffer;
                        this.egretWebGLRenderContext.activatedBuffer = data.buffer;
                    }
                    if (data.type == 0 /* TEXTURE */ || data.type == 1 /* PUSH_MASK */ || data.type == 2 /* POP_MASK */) {
                        if (this.activatedBuffer && this.activatedBuffer.$computeDrawCall) {
                            this.activatedBuffer.$drawCalls++;
                        }
                    }
                }
                // 切换回默认indices
                if (this.vao.isMesh()) {
                    this.uploadIndicesArray(this.vao.getIndices());
                }
                // 清空数据
                this.drawCmdManager.clear();
                this.vao.clear();
            };
            /**
             * 执行绘制命令
             */
            Renderer.prototype.drawData = function (data, offset) {
                if (!data) {
                    return;
                }
                var gl = this.context;
                var program;
                var filter = data.filter;
                switch (data.type) {
                    case 0 /* TEXTURE */:
                        if (filter) {
                            if (filter.type === "custom") {
                                program = web.EgretWebGLProgram.getProgram(gl, filter.$vertexSrc, filter.$fragmentSrc, filter.$shaderKey);
                            }
                            else if (filter.type === "colorTransform") {
                                program = web.EgretWebGLProgram.getProgram(gl, web.EgretShaderLib.default_vert, web.EgretShaderLib.colorTransform_frag, "colorTransform");
                            }
                            else if (filter.type === "blurX") {
                                program = web.EgretWebGLProgram.getProgram(gl, web.EgretShaderLib.default_vert, web.EgretShaderLib.blur_frag, "blur");
                            }
                            else if (filter.type === "blurY") {
                                program = web.EgretWebGLProgram.getProgram(gl, web.EgretShaderLib.default_vert, web.EgretShaderLib.blur_frag, "blur");
                            }
                            else if (filter.type === "glow") {
                                program = web.EgretWebGLProgram.getProgram(gl, web.EgretShaderLib.default_vert, web.EgretShaderLib.glow_frag, "glow");
                            }
                        }
                        else {
                            program = web.EgretWebGLProgram.getProgram(gl, web.EgretShaderLib.default_vert, web.EgretShaderLib.texture_frag, "texture");
                        }
                        this.activeProgram(gl, program);
                        this.syncUniforms(program, filter, data.textureWidth, data.textureHeight);
                        offset += this.drawTextureElements(data, offset);
                        break;
                    case 1 /* PUSH_MASK */:
                        program = web.EgretWebGLProgram.getProgram(gl, web.EgretShaderLib.default_vert, web.EgretShaderLib.primitive_frag, "primitive");
                        this.activeProgram(gl, program);
                        this.syncUniforms(program, filter, data.textureWidth, data.textureHeight);
                        offset += this.drawPushMaskElements(data, offset);
                        break;
                    case 2 /* POP_MASK */:
                        program = web.EgretWebGLProgram.getProgram(gl, web.EgretShaderLib.default_vert, web.EgretShaderLib.primitive_frag, "primitive");
                        this.activeProgram(gl, program);
                        this.syncUniforms(program, filter, data.textureWidth, data.textureHeight);
                        offset += this.drawPopMaskElements(data, offset);
                        break;
                    case 3 /* BLEND */:
                        this.setBlendMode(data.value);
                        break;
                    case 4 /* RESIZE_TARGET */:
                        data.buffer.rootRenderTarget.resize(data.width, data.height);
                        this.onResize(data.width, data.height);
                        break;
                    case 5 /* CLEAR_COLOR */:
                        if (this.activatedBuffer) {
                            var target = this.activatedBuffer.rootRenderTarget;
                            if (target.width != 0 || target.height != 0) {
                                target.clear(true);
                            }
                        }
                        break;
                    case 6 /* ACT_BUFFER */:
                        this.activateBuffer(data.buffer);
                        break;
                    case 7 /* ENABLE_SCISSOR */:
                        var buffer = this.activatedBuffer;
                        if (buffer) {
                            if (buffer.rootRenderTarget) {
                                buffer.rootRenderTarget.enabledStencil();
                            }
                            buffer.enableScissor(data.x, data.y, data.width, data.height);
                        }
                        break;
                    case 8 /* DISABLE_SCISSOR */:
                        buffer = this.activatedBuffer;
                        if (buffer) {
                            buffer.disableScissor();
                        }
                        break;
                    default:
                        break;
                }
                return offset;
            };
            Renderer.prototype.activeProgram = function (gl, program) {
                // if (program != this.currentProgram) {
                gl.useProgram(program.id);
                // 目前所有attribute buffer的绑定方法都是一致的
                var attribute = program.attributes;
                for (var key in attribute) {
                    if (key === "aVertexPosition") {
                        gl.vertexAttribPointer(attribute["aVertexPosition"].location, 2, gl.FLOAT, false, 5 * 4, 0);
                        gl.enableVertexAttribArray(attribute["aVertexPosition"].location);
                    }
                    else if (key === "aTextureCoord") {
                        gl.vertexAttribPointer(attribute["aTextureCoord"].location, 2, gl.FLOAT, false, 5 * 4, 2 * 4);
                        gl.enableVertexAttribArray(attribute["aTextureCoord"].location);
                    }
                    else if (key === "aColor") {
                        gl.vertexAttribPointer(attribute["aColor"].location, 1, gl.FLOAT, false, 5 * 4, 4 * 4);
                        gl.enableVertexAttribArray(attribute["aColor"].location);
                    }
                }
                this.currentProgram = program;
                // }
            };
            Renderer.prototype.syncUniforms = function (program, filter, textureWidth, textureHeight) {
                var uniforms = program.uniforms;
                for (var key in uniforms) {
                    if (key === "projectionVector") {
                        uniforms[key].setValue({ x: this.projectionX, y: this.projectionY });
                    }
                    else if (key === "uTextureSize") {
                        uniforms[key].setValue({ x: textureWidth, y: textureHeight });
                    }
                    else if (key === "uSampler") {
                    }
                    else {
                        var value = filter.$uniforms[key];
                        if (value !== undefined) {
                            uniforms[key].setValue(value);
                        }
                        else {
                            // egret.warn("filter custom: uniform " + key + " not defined!");
                        }
                    }
                }
            };
            /**
             * 画texture
             **/
            Renderer.prototype.drawTextureElements = function (data, offset) {
                var gl = this.context;
                gl.bindTexture(gl.TEXTURE_2D, data.texture);
                var size = data.count * 3;
                gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
                return size;
            };
            /**
             * 启用RenderBuffer
             */
            Renderer.prototype.activateBuffer = function (buffer) {
                buffer.rootRenderTarget.activate();
                if (!this.bindIndices) {
                    this.uploadIndicesArray(this.vao.getIndices());
                }
                buffer.restoreStencil();
                buffer.restoreScissor();
                this.onResize(buffer.width, buffer.height);
            };
            Renderer.prototype.onResize = function (width, height) {
                this.projectionX = width / 2;
                this.projectionY = -height / 2;
                if (this.context) {
                    this.context.viewport(0, 0, width, height);
                }
            };
            /**
             * 上传顶点数据
             */
            Renderer.prototype.uploadVerticesArray = function (array) {
                var gl = this.context;
                gl.bufferData(gl.ARRAY_BUFFER, array, gl.STREAM_DRAW);
            };
            /**
             * 上传索引数据
             */
            Renderer.prototype.uploadIndicesArray = function (array) {
                var gl = this.context;
                gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, array, gl.STATIC_DRAW);
                this.bindIndices = true;
            };
            /**
             * 画push mask
             **/
            Renderer.prototype.drawPushMaskElements = function (data, offset) {
                var gl = this.context;
                var size = data.count * 3;
                var buffer = this.activatedBuffer;
                if (buffer) {
                    if (buffer.rootRenderTarget) {
                        buffer.rootRenderTarget.enabledStencil();
                    }
                    if (buffer.stencilHandleCount == 0) {
                        buffer.enableStencil();
                        gl.clear(gl.STENCIL_BUFFER_BIT); // clear
                    }
                    var level = buffer.stencilHandleCount;
                    buffer.stencilHandleCount++;
                    gl.colorMask(false, false, false, false);
                    gl.stencilFunc(gl.EQUAL, level, 0xFF);
                    gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
                    // gl.bindTexture(gl.TEXTURE_2D, null);
                    gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
                    gl.stencilFunc(gl.EQUAL, level + 1, 0xFF);
                    gl.colorMask(true, true, true, true);
                    gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
                }
                return size;
            };
            /**
             * 画pop mask
             **/
            Renderer.prototype.drawPopMaskElements = function (data, offset) {
                var gl = this.context;
                var size = data.count * 3;
                var buffer = this.activatedBuffer;
                if (buffer) {
                    buffer.stencilHandleCount--;
                    if (buffer.stencilHandleCount == 0) {
                        buffer.disableStencil(); // skip this draw
                    }
                    else {
                        var level = buffer.stencilHandleCount;
                        gl.colorMask(false, false, false, false);
                        gl.stencilFunc(gl.EQUAL, level + 1, 0xFF);
                        gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
                        // gl.bindTexture(gl.TEXTURE_2D, null);
                        gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
                        gl.stencilFunc(gl.EQUAL, level, 0xFF);
                        gl.colorMask(true, true, true, true);
                        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
                    }
                }
                return size;
            };
            /**
             * 设置混色
             */
            Renderer.prototype.setBlendMode = function (value) {
                var gl = this.context;
                var blendModeWebGL = Renderer.blendModesForGL[value];
                if (blendModeWebGL) {
                    gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);
                }
            };
            Renderer.initBlendMode = function () {
                Renderer.blendModesForGL = {};
                Renderer.blendModesForGL["source-over"] = [1, 771];
                Renderer.blendModesForGL["lighter"] = [1, 1];
                Renderer.blendModesForGL["lighter-in"] = [770, 771];
                Renderer.blendModesForGL["destination-out"] = [0, 771];
                Renderer.blendModesForGL["destination-in"] = [0, 770];
            };
            Renderer.blendModesForGL = null;
            return Renderer;
        }());
        web.Renderer = Renderer;
        __reflect(Renderer.prototype, "egret.web.Renderer");
        Renderer.initBlendMode();
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));
var egret3d;
(function (egret3d) {
    /**
     * ConstantAdapter
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 恒定像素的适配策略
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var ConstantAdapter = (function () {
        function ConstantAdapter() {
            this.$dirty = true;
            this._scaleFactor = 1;
        }
        Object.defineProperty(ConstantAdapter.prototype, "scaleFactor", {
            /**
             * scaleFactor
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 设置缩放值
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            set: function (value) {
                this._scaleFactor = value;
                this.$dirty = true;
            },
            enumerable: true,
            configurable: true
        });
        ConstantAdapter.prototype.calculateScaler = function (canvasWidth, canvasHeight, out) {
            var scaler = this._scaleFactor;
            out.s = scaler;
            out.w = canvasWidth / scaler;
            out.h = canvasHeight / scaler;
        };
        return ConstantAdapter;
    }());
    egret3d.ConstantAdapter = ConstantAdapter;
    __reflect(ConstantAdapter.prototype, "egret3d.ConstantAdapter", ["egret3d.IScreenAdapter"]);
    /**
     * ConstantAdapter
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 拉伸扩展的适配策略
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var ExpandAdapter = (function () {
        function ExpandAdapter() {
            this.$dirty = true;
            this._resolution = new egret3d.Vector2(640, 1136);
        }
        /**
         * setResolution
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 设置分辨率
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        ExpandAdapter.prototype.setResolution = function (width, height) {
            this._resolution.x = width;
            this._resolution.y = height;
            this.$dirty = true;
        };
        ExpandAdapter.prototype.calculateScaler = function (canvasWidth, canvasHeight, out) {
            var canvasRate = canvasWidth / canvasHeight;
            var resolutionRate = this._resolution.x / this._resolution.y;
            var scaler = 1;
            if (canvasRate > resolutionRate) {
                scaler = canvasHeight / this._resolution.y;
            }
            else {
                scaler = canvasWidth / this._resolution.x;
            }
            out.s = scaler;
            out.w = canvasWidth / scaler;
            out.h = canvasHeight / scaler;
        };
        return ExpandAdapter;
    }());
    egret3d.ExpandAdapter = ExpandAdapter;
    __reflect(ExpandAdapter.prototype, "egret3d.ExpandAdapter", ["egret3d.IScreenAdapter"]);
    /**
     * ShrinkAdapter
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 缩放的适配策略
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var ShrinkAdapter = (function () {
        function ShrinkAdapter() {
            this.$dirty = true;
            this._resolution = new egret3d.Vector2(640, 1136);
        }
        /**
         * setResolution
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 设置分辨率
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        ShrinkAdapter.prototype.setResolution = function (width, height) {
            this._resolution.x = width;
            this._resolution.y = height;
            this.$dirty = true;
        };
        ShrinkAdapter.prototype.calculateScaler = function (canvasWidth, canvasHeight, out) {
            var canvasRate = canvasWidth / canvasHeight;
            var resolutionRate = this._resolution.x / this._resolution.y;
            var scaler = 1;
            if (canvasRate > resolutionRate) {
                scaler = canvasWidth / this._resolution.x;
            }
            else {
                scaler = canvasHeight / this._resolution.y;
            }
            out.s = scaler;
            out.w = canvasWidth / scaler;
            out.h = canvasHeight / scaler;
        };
        return ShrinkAdapter;
    }());
    egret3d.ShrinkAdapter = ShrinkAdapter;
    __reflect(ShrinkAdapter.prototype, "egret3d.ShrinkAdapter", ["egret3d.IScreenAdapter"]);
    /**
     * MatchWidthOrHeightAdapter
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 适应宽高适配策略
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var MatchWidthOrHeightAdapter = (function () {
        function MatchWidthOrHeightAdapter() {
            this.$dirty = true;
            this._resolution = new egret3d.Vector2(640, 1136);
            this._matchFactor = 0; // width : height
        }
        /**
         * setResolution
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 设置分辨率
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        MatchWidthOrHeightAdapter.prototype.setResolution = function (width, height) {
            this._resolution.x = width;
            this._resolution.y = height;
            this.$dirty = true;
        };
        Object.defineProperty(MatchWidthOrHeightAdapter.prototype, "matchFactor", {
            /**
             * matchFactor
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 设置匹配系数，0-1之间，越小越倾向以宽度适配，越大越倾向以高度适配。
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            set: function (value) {
                this._matchFactor = value;
                this.$dirty = true;
            },
            enumerable: true,
            configurable: true
        });
        MatchWidthOrHeightAdapter.prototype.calculateScaler = function (canvasWidth, canvasHeight, out) {
            var scaler1 = canvasWidth / this._resolution.x;
            var scaler2 = canvasHeight / this._resolution.y;
            var scaler = scaler1 + (scaler2 - scaler1) * this._matchFactor;
            out.s = scaler;
            out.w = canvasWidth / scaler;
            out.h = canvasHeight / scaler;
        };
        return MatchWidthOrHeightAdapter;
    }());
    egret3d.MatchWidthOrHeightAdapter = MatchWidthOrHeightAdapter;
    __reflect(MatchWidthOrHeightAdapter.prototype, "egret3d.MatchWidthOrHeightAdapter", ["egret3d.IScreenAdapter"]);
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var helpQuat_1 = new egret3d.Quaternion();
    /**
     * Guid Path Component
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 路径组件。
     * @version paper 1.0
     * @platform Web
     * @language
     */
    var Guidpath = (function (_super) {
        __extends(Guidpath, _super);
        function Guidpath() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * move speed
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 移动速度。
             * @default 1
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.speed = 1;
            _this.isactived = false;
            _this.loopCount = 1;
            /**
             * loop play
             * @default false
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 循环播放。
             * @default false
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.isloop = false;
            _this.datasafe = false;
            _this.folowindex = 0;
            /**
             * look forward
             * @default false
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 挂载此组件的gameobject是否朝向前方。
             * @default false
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.lookforward = false;
            _this.adjustDir = false;
            return _this;
        }
        Object.defineProperty(Guidpath.prototype, "pathasset", {
            /**
             * Path Asset
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 路径组件需要的路径资源。
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                return this._pathasset;
            },
            /**
             * Path Asset
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 路径组件需要的路径资源。
             * @version paper 1.0
             * @platform Web
             * @language
             */
            set: function (pathasset) {
                // if (this._pathasset) {
                //     this._pathasset.unuse();
                // }
                this._pathasset = pathasset;
                // if (this._pathasset) {
                // this._pathasset.use();
                // }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * play movement
         * @version paper 1.0
         * @param loopCount play times
         * @platform Web
         * @language en_US
         */
        /**
         * 按照路径开始移动。
         * @param loopCount 播放次数
         * @version paper 1.0
         * @platform Web
         * @language
         */
        Guidpath.prototype.play = function (loopCount) {
            if (loopCount === void 0) { loopCount = 1; }
            this.isactived = true;
            this.loopCount = loopCount;
        };
        /**
         * pause movement
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 暂停移动。
         * @version paper 1.0
         * @platform Web
         * @language
         */
        Guidpath.prototype.pause = function () {
            this.isactived = false;
        };
        /**
         * stop movement
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 停止移动。
         * @version paper 1.0
         * @platform Web
         * @language
         */
        Guidpath.prototype.stop = function () {
            this.isactived = false;
            this.folowindex = 0;
        };
        /**
         * restart movement
         * @param loopCount play times
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 重新按照路径移动。
         * @param loopCount 播放次数
         * @version paper 1.0
         * @platform Web
         * @language
         */
        Guidpath.prototype.replay = function (loopCount) {
            if (loopCount === void 0) { loopCount = 1; }
            this.isactived = true;
            this.folowindex = 0;
            this.loopCount = loopCount;
        };
        /**
         * set path asset
         * @param pathasset path asset
         * @param speed move speed
         * @param oncomplete on complete callback
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 设置路径组件的需要的参数。
         * @param pathasset 路径资源
         * @param speed 移动速度
         * @param oncomplete 按照路径移动结束需要执行的事件
         * @version paper 1.0
         * @platform Web
         * @language
         */
        Guidpath.prototype.setpathasset = function (pathasset, speed, oncomplete) {
            if (speed === void 0) { speed = 1; }
            if (oncomplete === void 0) { oncomplete = null; }
            this.pathasset = pathasset;
            if (pathasset == null) {
                console.log(this.gameObject.name + ":are you sure set the right pathasset（error：null）");
                return;
            }
            this.paths = pathasset.paths;
            if (this.paths[0] != null) {
                this.gameObject.transform.setLocalPosition(this.paths[0]);
                this.datasafe = true;
            }
            this.mystrans = this.gameObject.transform;
            this.speed = speed;
            this.oncomplete = oncomplete;
        };
        /**
         *
         */
        Guidpath.prototype.update = function (delta) {
            if (!this.isactived || !this.datasafe)
                return;
            this.followmove(delta);
        };
        Guidpath.prototype.followmove = function (delta) {
            var dist = egret3d.Vector3.getDistance(this.mystrans.getLocalPosition(), this.paths[this.folowindex]);
            if (dist < 0.01) {
                if (this.folowindex < this.paths.length - 1) {
                    var dir = new egret3d.Vector3();
                    this.mystrans.setLocalPosition(this.paths[this.folowindex]);
                    this.folowindex++;
                    this.adjustDir = true;
                }
                else {
                    this.folowindex = 0;
                    if (!this.isloop) {
                        this.loopCount--;
                        if (this.loopCount == 0) {
                            this.isactived = false;
                            this.loopCount = 1;
                            if (this.oncomplete) {
                                this.oncomplete();
                            }
                        }
                    }
                }
            }
            else {
                var dir = new egret3d.Vector3();
                egret3d.Vector3.subtract(this.paths[this.folowindex], this.mystrans.getLocalPosition(), dir);
                if (this.adjustDir) {
                    var targetpos = this.paths[this.folowindex];
                    var localppos = this.mystrans.getLocalPosition();
                    var quat = helpQuat_1;
                    egret3d.Quaternion.lookAt(localppos, targetpos, quat);
                    egret3d.Quaternion.copy(quat, this.mystrans.getLocalRotation());
                    this.adjustDir = false;
                }
                var distadd = this.speed * delta;
                if (distadd > dist)
                    distadd = dist;
                var lerp = distadd / dist;
                var resultPosition = new egret3d.Vector3();
                egret3d.Vector3.lerp(this.mystrans.getLocalPosition(), this.paths[this.folowindex], lerp, resultPosition);
                this.mystrans.setLocalPosition(resultPosition);
            }
        };
        return Guidpath;
    }(paper.BaseComponent));
    egret3d.Guidpath = Guidpath;
    __reflect(Guidpath.prototype, "egret3d.Guidpath");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * Guidpath系统
     */
    var GuidpathSystem = (function (_super) {
        __extends(GuidpathSystem, _super);
        function GuidpathSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [{ componentClass: egret3d.Guidpath }];
            return _this;
        }
        /**
         * @inheritDoc
         */
        GuidpathSystem.prototype.update = function () {
            var deltaTime = paper.Time.deltaTime;
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                component.update(deltaTime);
            }
        };
        return GuidpathSystem;
    }(paper.BaseSystem));
    egret3d.GuidpathSystem = GuidpathSystem;
    __reflect(GuidpathSystem.prototype, "egret3d.GuidpathSystem");
})(egret3d || (egret3d = {}));
var paper;
(function (paper) {
    /**
     * 克隆
     */
    function clone(object) {
        var cacheParent = null;
        // TODO 太多的字符串依赖。
        // 将parent设置为空，避免向上引用 // TODO 这并不能根本解决问题，自定义组件依然可能会引用这些，导致错误的序列化和反序列化
        if (object instanceof paper.GameObject) {
            cacheParent = object.transform.parent;
            object.transform._parent = null; // TODO
        }
        else if (object instanceof egret3d.Transform) {
            cacheParent = object.parent;
            object._parent = null; // TODO
        }
        var data = paper.serialize(object);
        if (object instanceof paper.GameObject) {
            object.transform._parent = cacheParent; // TODO
        }
        else if (object instanceof egret3d.Transform) {
            object._parent = cacheParent; // TODO
        }
        var assets = {};
        if ("assets" in data) {
            for (var _i = 0, _a = data["assets"]; _i < _a.length; _i++) {
                var asset = _a[_i];
                assets[asset.hashCode] = paper.Asset.find(asset.url); // 获取资源引用
            }
        }
        return paper.deserialize(data, assets);
    }
    paper.clone = clone;
})(paper || (paper = {}));
var egret3d;
(function (egret3d) {
    /**
     * Light Type Enum
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 灯光类型的枚举。
     * @version paper 1.0
     * @platform Web
     * @language
     */
    var LightTypeEnum;
    (function (LightTypeEnum) {
        /**
         * direction light
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 直射光
         * @version paper 1.0
         * @platform Web
         * @language
         */
        LightTypeEnum[LightTypeEnum["Direction"] = 1] = "Direction";
        /**
         * point light
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 点光源
         * @version paper 1.0
         * @platform Web
         * @language
         */
        LightTypeEnum[LightTypeEnum["Point"] = 2] = "Point";
        /**
         * point light
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 聚光灯
         * @version paper 1.0
         * @platform Web
         * @language
         */
        LightTypeEnum[LightTypeEnum["Spot"] = 3] = "Spot";
    })(LightTypeEnum = egret3d.LightTypeEnum || (egret3d.LightTypeEnum = {}));
    /**
     * light component
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 灯光组件
     * @version paper 1.0
     * @platform Web
     * @language
     */
    var Light = (function (_super) {
        __extends(Light, _super);
        function Light() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * light type
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 光源类型
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.type = 0;
            _this.color = new egret3d.Color(1, 1, 1, 1);
            _this.intensity = 2;
            _this.distance = 50;
            _this.decay = 2;
            _this.angle = Math.PI / 6;
            _this.penumbra = 0;
            /**
             * spot angel cos
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 聚光灯的开合角度cos值
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.spotAngelCos = 0.9;
            _this.castShadows = false;
            _this.shadowBias = 0.0003;
            _this.shadowRadius = 2;
            _this.shadowSize = 16;
            _this.shadowCameraNear = 0.1;
            _this.shadowCameraFar = 200;
            return _this;
            // TODO 考虑将不同灯光类型拆分成不同的组件
        }
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.LIST, { listItems: [{ label: 'Direction', value: 1 }, { label: 'Point', value: 2 }, { label: 'Spot', value: 3 }] })
        ], Light.prototype, "type", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.COLOR)
        ], Light.prototype, "color", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.NUMBER)
        ], Light.prototype, "intensity", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.NUMBER)
        ], Light.prototype, "distance", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.NUMBER)
        ], Light.prototype, "decay", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.NUMBER)
        ], Light.prototype, "angle", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.NUMBER)
        ], Light.prototype, "penumbra", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.NUMBER)
        ], Light.prototype, "spotAngelCos", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.CHECKBOX)
        ], Light.prototype, "castShadows", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.NUMBER)
        ], Light.prototype, "shadowBias", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.NUMBER)
        ], Light.prototype, "shadowRadius", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.NUMBER)
        ], Light.prototype, "shadowSize", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.NUMBER)
        ], Light.prototype, "shadowCameraNear", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.NUMBER)
        ], Light.prototype, "shadowCameraFar", void 0);
        return Light;
    }(paper.BaseComponent));
    egret3d.Light = Light;
    __reflect(Light.prototype, "egret3d.Light");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * Light系统
     */
    var LightSystem = (function (_super) {
        __extends(LightSystem, _super);
        function LightSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [
                { componentClass: egret3d.Light }
            ];
            return _this;
        }
        /**
         * @inheritDoc
         */
        LightSystem.prototype.update = function () {
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var light = _a[_i];
                var shadow = void 0;
                var face = 1;
                if (light.isActiveAndEnabled && light.castShadows) {
                    switch (light.type) {
                        case egret3d.LightTypeEnum.Point:
                            if (!light.$pointLightShadow) {
                                light.$pointLightShadow = new egret3d.PointLightShadow();
                            }
                            shadow = light.$pointLightShadow;
                            face = 6;
                            break;
                        case egret3d.LightTypeEnum.Spot:
                            if (!light.$spotLightShadow) {
                                light.$spotLightShadow = new egret3d.SpotLightShadow();
                            }
                            shadow = light.$spotLightShadow;
                            face = 1;
                            break;
                        case egret3d.LightTypeEnum.Direction:
                        default:
                            if (!light.$directLightShadow) {
                                light.$directLightShadow = new egret3d.DirectLightShadow();
                            }
                            shadow = light.$directLightShadow;
                            face = 1;
                            break;
                    }
                    for (var j = 0; j < face; j++) {
                        shadow.update(light, j);
                        shadow.renderTarget.activeCubeFace = j;
                        shadow.camera._targetAndViewport(shadow.renderTarget, false);
                        // render shadow
                        var context = shadow.camera.context;
                        if (light.type === egret3d.LightTypeEnum.Point) {
                            context.drawtype = "_distance_package";
                        }
                        else {
                            context.drawtype = "_depth_package";
                        }
                        context.updateCamera(shadow.camera);
                        context.updateLightDepth(light);
                        for (var _b = 0, _c = egret3d.Pool.shadowCaster.instances; _b < _c.length; _b++) {
                            var drawCall = _c[_b];
                            if (drawCall.gameObject.activeInHierarchy) {
                                context.updateModel(drawCall.transform);
                                var drawType = "base";
                                if (drawCall.boneData) {
                                    context.updateBones(drawCall.boneData);
                                    drawType = "skin";
                                }
                                egret3d.WebGLKit.draw(context, drawCall.material, drawCall.mesh, drawCall.subMeshInfo, drawType);
                            }
                        }
                    }
                    egret3d.GlRenderTarget.useNull(egret3d.WebGLKit.webgl);
                }
            }
        };
        return LightSystem;
    }(paper.BaseSystem));
    egret3d.LightSystem = LightSystem;
    __reflect(LightSystem.prototype, "egret3d.LightSystem");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var helpMat4_1 = new egret3d.Matrix();
    var helpMat4_2 = new egret3d.Matrix();
    var helpVec3_1 = new egret3d.Vector3();
    var PointLightShadow = (function () {
        function PointLightShadow() {
            this.bias = 0.0003;
            this.radius = 2;
            this.windowSize = 16;
            this._targets = [
                new egret3d.Vector3(-1, 0, 0), new egret3d.Vector3(1, 0, 0), new egret3d.Vector3(0, 1, 0),
                new egret3d.Vector3(0, -1, 0), new egret3d.Vector3(0, 0, 1), new egret3d.Vector3(0, 0, -1)
            ];
            this._ups = [
                new egret3d.Vector3(0, -1, 0), new egret3d.Vector3(0, -1, 0), new egret3d.Vector3(0, 0, 1),
                new egret3d.Vector3(0, 0, -1), new egret3d.Vector3(0, -1, 0), new egret3d.Vector3(0, -1, 0)
            ];
            this.renderTarget = new egret3d.GlRenderTargetCube(egret3d.WebGLKit.webgl, 1024, 1024, true);
            this.map = this.renderTarget.texture;
            this.matrix = new egret3d.Matrix();
            this.camera = new egret3d.Camera(); // TODO 不要这样
            this.camera.opvalue = 1;
            this.camera.backgroundColor.r = 1.0;
            this.camera.backgroundColor.g = 1.0;
            this.camera.backgroundColor.b = 1.0;
            this.camera.backgroundColor.a = 1.0;
            this.camera.clearOption_Color = true;
            this.camera.clearOption_Depth = true;
            this.camera.near = 0.1;
            this.camera.far = 1000;
            this.camera.renderTarget = this.renderTarget;
            this.camera.initialize();
        }
        PointLightShadow.prototype.update = function (light, face) {
            this.bias = light.shadowBias;
            this.radius = light.shadowRadius;
            this.windowSize = light.shadowSize;
            this._updateCamera(light, face);
            this._updateMatrix();
        };
        PointLightShadow.prototype._updateCamera = function (light, face) {
            this.camera.gameObject = light.gameObject; // for calcViewMatrix // TODO 不要这样
            this.camera.near = light.shadowCameraNear;
            this.camera.far = light.shadowCameraFar;
            var pos = light.gameObject.transform.getPosition();
            var target = egret3d.Vector3.set(pos.x + this._targets[face].x, pos.y + this._targets[face].y, pos.z + this._targets[face].z, helpVec3_1);
            this.camera.gameObject.transform.lookAt(target, this._ups[face]); // TODO copy a transform to protect light rotate
            this.camera.size = this.windowSize;
            this.camera.fov = Math.PI / 2;
        };
        PointLightShadow.prototype._updateMatrix = function () {
            var matrix = this.matrix;
            var camera = this.camera;
            // matrix * 0.5 + 0.5, after identity, range is 0 ~ 1 instead of -1 ~ 1
            egret3d.Matrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0, matrix);
            var viewMatrix = camera.calcViewMatrix(helpMat4_1);
            var projectionMatrix = camera.calcProjectMatrix(512 / 512, helpMat4_2);
            egret3d.Matrix.multiply(matrix, projectionMatrix, matrix);
            egret3d.Matrix.multiply(matrix, viewMatrix, matrix);
        };
        return PointLightShadow;
    }());
    egret3d.PointLightShadow = PointLightShadow;
    __reflect(PointLightShadow.prototype, "egret3d.PointLightShadow", ["egret3d.ILightShadow"]);
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var helpMat4_1 = new egret3d.Matrix();
    var helpMat4_2 = new egret3d.Matrix();
    var SpotLightShadow = (function () {
        function SpotLightShadow() {
            this.bias = 0.0003;
            this.radius = 2;
            this.windowSize = 16;
            this.renderTarget = new egret3d.GlRenderTarget(egret3d.WebGLKit.webgl, 1024, 1024, true);
            this.map = this.renderTarget.texture;
            this.matrix = new egret3d.Matrix();
            this.camera = new egret3d.Camera(); // TODO 不要这样
            this.camera.opvalue = 1;
            this.camera.backgroundColor.r = 1.0;
            this.camera.backgroundColor.g = 1.0;
            this.camera.backgroundColor.b = 1.0;
            this.camera.backgroundColor.a = 1.0;
            this.camera.clearOption_Color = true;
            this.camera.clearOption_Depth = true;
            this.camera.near = 0.1;
            this.camera.far = 1000;
            this.camera.renderTarget = this.renderTarget;
            this.camera.initialize();
        }
        SpotLightShadow.prototype.update = function (light) {
            this.bias = light.shadowBias;
            this.radius = light.shadowRadius;
            this.windowSize = light.shadowSize;
            this._updateCamera(light);
            this._updateMatrix();
        };
        SpotLightShadow.prototype._updateCamera = function (light) {
            this.camera.gameObject = light.gameObject;
            this.camera.near = light.shadowCameraNear;
            this.camera.far = light.shadowCameraFar;
            this.camera.fov = light.angle;
        };
        SpotLightShadow.prototype._updateMatrix = function () {
            var matrix = this.matrix;
            var camera = this.camera;
            // matrix * 0.5 + 0.5, after identity, range is 0 ~ 1 instead of -1 ~ 1
            egret3d.Matrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0, matrix);
            var viewMatrix = camera.calcViewMatrix(helpMat4_1);
            var projectionMatrix = camera.calcProjectMatrix(512 / 512, helpMat4_2);
            egret3d.Matrix.multiply(matrix, projectionMatrix, matrix);
            egret3d.Matrix.multiply(matrix, viewMatrix, matrix);
        };
        return SpotLightShadow;
    }());
    egret3d.SpotLightShadow = SpotLightShadow;
    __reflect(SpotLightShadow.prototype, "egret3d.SpotLightShadow", ["egret3d.ILightShadow"]);
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * MeshFilter 组件
     */
    var MeshFilter = (function (_super) {
        __extends(MeshFilter, _super);
        function MeshFilter() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._mesh = null;
            return _this;
        }
        /**
         * @inheritDoc
         */
        MeshFilter.prototype.uninitialize = function () {
            _super.prototype.uninitialize.call(this);
            if (this._mesh) {
                this._mesh.dispose();
            }
            this._mesh = null;
        };
        Object.defineProperty(MeshFilter.prototype, "mesh", {
            /**
             * 组件挂载的 mesh 模型
             */
            get: function () {
                return this._mesh;
            },
            set: function (mesh) {
                if (this._mesh === mesh) {
                    return;
                }
                if (this._mesh) {
                    this._mesh.dispose();
                }
                this._mesh = mesh;
                paper.EventPool.dispatchEvent("mesh" /* Mesh */, this);
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            paper.serializedField
        ], MeshFilter.prototype, "_mesh", void 0);
        __decorate([
            editor.property(editor.EditType.MESH)
        ], MeshFilter.prototype, "mesh", null);
        return MeshFilter;
    }(paper.BaseComponent));
    egret3d.MeshFilter = MeshFilter;
    __reflect(MeshFilter.prototype, "egret3d.MeshFilter");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * mesh的渲染组件
     */
    var MeshRenderer = (function (_super) {
        __extends(MeshRenderer, _super);
        /**
         *
         */
        function MeshRenderer() {
            var _this = _super.call(this) || this;
            _this._receiveShadows = false;
            _this._castShadows = false;
            _this._lightmapIndex = -1;
            _this._lightmapScaleOffset = new egret3d.Vector4(1, 1, 0, 0);
            _this._materials = [];
            // default
            var material = new egret3d.Material();
            material.setShader(egret3d.DefaultShaders.DIFFUSE);
            _this._materials.push(material);
            return _this;
        }
        /**
         * @inheritDoc
         */
        MeshRenderer.prototype.serialize = function () {
            var target = _super.prototype.serialize.call(this);
            target._receiveShadows = this._receiveShadows;
            target._castShadows = this._castShadows;
            target._lightmapIndex = this._lightmapIndex;
            target._lightmapScaleOffset = [this._lightmapScaleOffset.x, this._lightmapScaleOffset.y, this._lightmapScaleOffset.z, this._lightmapScaleOffset.w];
            target._materials = [];
            for (var _i = 0, _a = this._materials; _i < _a.length; _i++) {
                var material = _a[_i];
                target._materials.push(paper.serializeAsset(material));
            }
            return target;
        };
        /**
         * @inheritDoc
         */
        MeshRenderer.prototype.deserialize = function (element) {
            this._receiveShadows = element._receiveShadows || false;
            this._castShadows = element._castShadows || false;
            this._lightmapIndex = element._lightmapIndex;
            if (element._materials) {
                this._materials.length = 0;
                for (var i = 0, l = element._materials.length; i < l; i++) {
                    this._materials.push(paper.getDeserializedObject(element._materials[i]));
                }
            }
            if (element._lightmapScaleOffset) {
                this._lightmapScaleOffset.deserialize(element._lightmapScaleOffset);
            }
        };
        /**
         * @inheritDoc
         */
        MeshRenderer.prototype.uninitialize = function () {
            _super.prototype.uninitialize.call(this);
            this._materials.length = 0;
        };
        Object.defineProperty(MeshRenderer.prototype, "receiveShadows", {
            get: function () {
                return this._receiveShadows;
            },
            set: function (value) {
                if (value === this._receiveShadows) {
                    return;
                }
                this._receiveShadows = value;
                paper.EventPool.dispatchEvent("receiveShadows" /* ReceiveShadows */, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeshRenderer.prototype, "castShadows", {
            get: function () {
                return this._castShadows;
            },
            set: function (value) {
                if (value === this._castShadows) {
                    return;
                }
                this._castShadows = value;
                paper.EventPool.dispatchEvent("castShadows" /* CastShadows */, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeshRenderer.prototype, "lightmapIndex", {
            get: function () {
                return this._lightmapIndex;
            },
            set: function (value) {
                if (value === this._lightmapIndex) {
                    return;
                }
                this._lightmapIndex = value;
                paper.EventPool.dispatchEvent("lightmapIndex" /* LightmapIndex */, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeshRenderer.prototype, "lightmapScaleOffset", {
            get: function () {
                return this._lightmapScaleOffset;
            },
            set: function (value) {
                this._lightmapScaleOffset.x = value.x;
                this._lightmapScaleOffset.y = value.y;
                this._lightmapScaleOffset.z = value.z;
                this._lightmapScaleOffset.w = value.w;
                paper.EventPool.dispatchEvent("lightmapScaleOffset" /* LightmapScaleOffset */, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeshRenderer.prototype, "materials", {
            /**
             * material list
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 材质数组
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                return this._materials;
            },
            set: function (value) {
                if (value === this._materials) {
                    return;
                }
                this._materials.length = 0;
                for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                    var material = value_2[_i];
                    this._materials.push(material);
                }
                paper.EventPool.dispatchEvent("materials" /* Materials */, this);
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            paper.serializedField
        ], MeshRenderer.prototype, "_receiveShadows", void 0);
        __decorate([
            paper.serializedField
        ], MeshRenderer.prototype, "_castShadows", void 0);
        __decorate([
            paper.serializedField
        ], MeshRenderer.prototype, "_lightmapIndex", void 0);
        __decorate([
            paper.serializedField
        ], MeshRenderer.prototype, "_lightmapScaleOffset", void 0);
        __decorate([
            paper.serializedField
        ], MeshRenderer.prototype, "_materials", void 0);
        __decorate([
            editor.property(editor.EditType.CHECKBOX)
        ], MeshRenderer.prototype, "receiveShadows", null);
        __decorate([
            editor.property(editor.EditType.CHECKBOX)
        ], MeshRenderer.prototype, "castShadows", null);
        __decorate([
            editor.property(editor.EditType.NUMBER)
        ], MeshRenderer.prototype, "lightmapIndex", null);
        __decorate([
            editor.property(editor.EditType.VECTOR4)
        ], MeshRenderer.prototype, "lightmapScaleOffset", null);
        __decorate([
            editor.property(editor.EditType.MATERIAL_ARRAY)
        ], MeshRenderer.prototype, "materials", null);
        return MeshRenderer;
    }(paper.BaseComponent));
    egret3d.MeshRenderer = MeshRenderer;
    __reflect(MeshRenderer.prototype, "egret3d.MeshRenderer", ["paper.IRenderer"]);
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var MeshRendererSystem = (function (_super) {
        __extends(MeshRendererSystem, _super);
        function MeshRendererSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [
                {
                    componentClass: egret3d.MeshRenderer,
                    listeners: [
                        {
                            type: "__enabled__" /* Enabled */,
                            listener: function (component) {
                                var filter = _this._getComponent(component.gameObject, 1);
                                if (filter) {
                                    _this._drawCallList.updateShadowCasters(component.gameObject, component.castShadows);
                                }
                            }
                        },
                        {
                            type: "castShadows" /* CastShadows */,
                            listener: function (component) {
                                var filter = _this._getComponent(component.gameObject, 1);
                                if (filter) {
                                    _this._drawCallList.updateShadowCasters(component.gameObject, component.castShadows);
                                }
                            }
                        },
                        {
                            type: "lightmapIndex" /* LightmapIndex */,
                            listener: function (component) {
                                var filter = _this._getComponent(component.gameObject, 1);
                                if (filter) {
                                    _this._updateLightMap(component);
                                }
                            }
                        },
                        {
                            type: "lightmapScaleOffset" /* LightmapScaleOffset */,
                            listener: function (component) {
                                var filter = _this._getComponent(component.gameObject, 1);
                                if (filter) {
                                    _this._updateLightMap(component);
                                }
                            }
                        },
                        {
                            type: "materials" /* Materials */,
                            listener: function (component) {
                                var filter = _this._getComponent(component.gameObject, 1);
                                if (filter) {
                                    _this._drawCallList.updateDrawCalls(component.gameObject, component.castShadows);
                                }
                            }
                        },
                    ]
                },
                {
                    componentClass: egret3d.MeshFilter,
                    listeners: [
                        {
                            type: "mesh" /* Mesh */,
                            listener: function (component) {
                                var renderer = _this._getComponent(component.gameObject, 0);
                                if (renderer) {
                                    _this._drawCallList.updateDrawCalls(component.gameObject, renderer.castShadows);
                                }
                            }
                        },
                    ]
                },
            ];
            _this._createDrawCalls = (function (gameObject) {
                var renderer = _this._getComponent(gameObject, 0);
                var filter = _this._getComponent(gameObject, 1);
                if (filter.isActiveAndEnabled && filter.mesh && renderer.isActiveAndEnabled && renderer.materials.length > 0) {
                    var subMeshIndex = 0;
                    var drawCalls = [];
                    for (var _i = 0, _a = filter.mesh.glTFMesh.primitives; _i < _a.length; _i++) {
                        var primitive = _a[_i];
                        drawCalls.push({
                            subMeshInfo: subMeshIndex,
                            mesh: filter.mesh,
                            material: renderer.materials[primitive.material || 0],
                            lightMapIndex: renderer.lightmapIndex,
                            lightMapScaleOffset: renderer.lightmapScaleOffset,
                            boneData: null,
                            gameObject: gameObject,
                            transform: gameObject.transform,
                            frustumTest: false,
                            zdist: -1
                        });
                        subMeshIndex++;
                    }
                    return drawCalls;
                }
                return null;
            });
            _this._drawCallList = new egret3d.DrawCallList(_this._createDrawCalls);
            return _this;
        }
        /**
         * @inheritDoc
         */
        MeshRendererSystem.prototype._onCreateComponent = function (component) {
            if (!_super.prototype._onCreateComponent.call(this, component)) {
                return false;
            }
            var renderer = this._getComponent(component.gameObject, 0);
            this._drawCallList.updateDrawCalls(renderer.gameObject, renderer.castShadows);
            return true;
        };
        /**
         * @inheritDoc
         */
        MeshRendererSystem.prototype._onDestroyComponent = function (component) {
            if (!_super.prototype._onDestroyComponent.call(this, component)) {
                return false;
            }
            this._drawCallList.removeDrawCalls(component.gameObject);
            return true;
        };
        MeshRendererSystem.prototype._updateLightMap = function (component) {
            var drawCalls = this._drawCallList.getDrawCalls(component.gameObject);
            if (drawCalls) {
                for (var _i = 0, drawCalls_3 = drawCalls; _i < drawCalls_3.length; _i++) {
                    var drawCall = drawCalls_3[_i];
                    drawCall.lightMapIndex = component.lightmapIndex;
                    drawCall.lightMapScaleOffset = component.lightmapScaleOffset;
                }
            }
        };
        /**
         * @inheritDoc
         */
        MeshRendererSystem.prototype.update = function () {
        };
        return MeshRendererSystem;
    }(paper.BaseSystem));
    egret3d.MeshRendererSystem = MeshRendererSystem;
    __reflect(MeshRendererSystem.prototype, "egret3d.MeshRendererSystem");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var helpVec3_1 = new egret3d.Vector3();
    var helpVec3_2 = new egret3d.Vector3();
    var helpVec3_3 = new egret3d.Vector3();
    var helpVec3_4 = new egret3d.Vector3();
    var helpVec3_5 = new egret3d.Vector3();
    var helpVec3_6 = new egret3d.Vector3();
    var helpVec3_7 = new egret3d.Vector3();
    // const helpVec3_8: Vector3 = new Vector3();
    var helpMat4_1 = new egret3d.Matrix();
    var helpMat4_2 = new egret3d.Matrix();
    var helpMat4_3 = new egret3d.Matrix();
    var helpMat4_4 = new egret3d.Matrix();
    var helpMat4_5 = new egret3d.Matrix();
    var helpMat4_6 = new egret3d.Matrix();
    /**
     * Skinned Mesh Renderer Component
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 蒙皮网格的渲染组件
     * @version paper 1.0
     * @platform Web
     * @language
     */
    var SkinnedMeshRenderer = (function (_super) {
        __extends(SkinnedMeshRenderer, _super);
        function SkinnedMeshRenderer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._materials = [];
            _this._mesh = null;
            _this._bones = [];
            _this.center = new egret3d.Vector3();
            _this.size = new egret3d.Vector3();
            /**
             *
             */
            _this._boneDirty = true;
            _this._maxBoneCount = 0;
            /**
             *
             */
            _this._retargetBoneNames = null;
            _this._efficient = true; // 是否高效模式
            return _this;
        }
        Object.defineProperty(SkinnedMeshRenderer.prototype, "mesh", {
            /**
             * mesh instance
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * mesh实例
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                return this._mesh;
            },
            set: function (mesh) {
                if (this._mesh === mesh) {
                    return;
                }
                if (this._mesh) {
                    this._mesh.dispose();
                }
                this._mesh = mesh;
                paper.EventPool.dispatchEvent("mesh" /* Mesh */, this);
            },
            enumerable: true,
            configurable: true
        });
        SkinnedMeshRenderer.prototype._getMatByIndex = function (index, out) {
            var blendIndices = egret3d.helpVector4E;
            this.mesh.getVertexAttribute(index, "JOINTS_0" /* JOINTS_0 */, 0, blendIndices);
            if (blendIndices.x >= this._maxBoneCount || blendIndices.y >= this._maxBoneCount || blendIndices.z >= this._maxBoneCount || blendIndices.w >= this._maxBoneCount) {
                return null;
            }
            var blendWeights = egret3d.helpVector4F;
            this.mesh.getVertexAttribute(index, "WEIGHTS_0" /* WEIGHTS_0 */, 0, blendWeights);
            if (this._efficient) {
                var vec40r = egret3d.helpVector4A;
                var vec30p = egret3d.helpVector3A;
                vec40r.x = this._skeletonMatrixData[8 * blendIndices.x + 0]; // TODO
                vec40r.y = this._skeletonMatrixData[8 * blendIndices.x + 1];
                vec40r.z = this._skeletonMatrixData[8 * blendIndices.x + 2];
                vec40r.w = this._skeletonMatrixData[8 * blendIndices.x + 3];
                vec30p.x = this._skeletonMatrixData[8 * blendIndices.x + 4];
                vec30p.y = this._skeletonMatrixData[8 * blendIndices.x + 5];
                vec30p.z = this._skeletonMatrixData[8 * blendIndices.x + 6];
                var vec41r = egret3d.helpVector4B;
                var vec31p = egret3d.helpVector3B;
                vec41r.x = this._skeletonMatrixData[8 * blendIndices.y + 0];
                vec41r.y = this._skeletonMatrixData[8 * blendIndices.y + 1];
                vec41r.z = this._skeletonMatrixData[8 * blendIndices.y + 2];
                vec41r.w = this._skeletonMatrixData[8 * blendIndices.y + 3];
                vec31p.x = this._skeletonMatrixData[8 * blendIndices.y + 4];
                vec31p.y = this._skeletonMatrixData[8 * blendIndices.y + 5];
                vec31p.z = this._skeletonMatrixData[8 * blendIndices.y + 6];
                var vec42r = egret3d.helpVector4C;
                var vec32p = egret3d.helpVector3C;
                vec42r.x = this._skeletonMatrixData[8 * blendIndices.z + 0];
                vec42r.y = this._skeletonMatrixData[8 * blendIndices.z + 1];
                vec42r.z = this._skeletonMatrixData[8 * blendIndices.z + 2];
                vec42r.w = this._skeletonMatrixData[8 * blendIndices.z + 3];
                vec32p.x = this._skeletonMatrixData[8 * blendIndices.z + 4];
                vec32p.y = this._skeletonMatrixData[8 * blendIndices.z + 5];
                vec32p.z = this._skeletonMatrixData[8 * blendIndices.z + 6];
                var vec43r = egret3d.helpVector4D;
                var vec33p = egret3d.helpVector3D;
                vec43r.x = this._skeletonMatrixData[8 * blendIndices.w + 0];
                vec43r.y = this._skeletonMatrixData[8 * blendIndices.w + 1];
                vec43r.z = this._skeletonMatrixData[8 * blendIndices.w + 2];
                vec43r.w = this._skeletonMatrixData[8 * blendIndices.w + 3];
                vec33p.x = this._skeletonMatrixData[8 * blendIndices.w + 4];
                vec33p.y = this._skeletonMatrixData[8 * blendIndices.w + 5];
                vec33p.z = this._skeletonMatrixData[8 * blendIndices.w + 6];
                var mat0 = egret3d.helpMatrixA;
                var mat1 = egret3d.helpMatrixB;
                var mat2 = egret3d.helpMatrixC;
                var mat3 = egret3d.helpMatrixD;
                egret3d.Matrix.fromRTS(vec30p, egret3d.Vector3.ONE, vec40r, mat0);
                egret3d.Matrix.fromRTS(vec31p, egret3d.Vector3.ONE, vec41r, mat1);
                egret3d.Matrix.fromRTS(vec32p, egret3d.Vector3.ONE, vec42r, mat2);
                egret3d.Matrix.fromRTS(vec33p, egret3d.Vector3.ONE, vec43r, mat3);
                egret3d.Matrix.scale(blendWeights.x, mat0);
                egret3d.Matrix.scale(blendWeights.y, mat1);
                egret3d.Matrix.scale(blendWeights.z, mat2);
                egret3d.Matrix.scale(blendWeights.w, mat3);
                egret3d.Matrix.add(mat0, mat1, out);
                egret3d.Matrix.add(out, mat2, out);
                egret3d.Matrix.add(out, mat3, out);
            }
            else {
                var mat0 = egret3d.helpMatrixA;
                var mat1 = egret3d.helpMatrixB;
                var mat2 = egret3d.helpMatrixC;
                var mat3 = egret3d.helpMatrixD;
                mat0.rawData = this._skeletonMatrixData.slice(16 * blendIndices.x, 16 * blendIndices.x + 16);
                mat1.rawData = this._skeletonMatrixData.slice(16 * blendIndices.y, 16 * blendIndices.y + 16);
                mat2.rawData = this._skeletonMatrixData.slice(16 * blendIndices.z, 16 * blendIndices.z + 16);
                mat3.rawData = this._skeletonMatrixData.slice(16 * blendIndices.w, 16 * blendIndices.w + 16);
                egret3d.Matrix.scale(blendWeights.x, mat0);
                egret3d.Matrix.scale(blendWeights.y, mat1);
                egret3d.Matrix.scale(blendWeights.z, mat2);
                egret3d.Matrix.scale(blendWeights.w, mat3);
                egret3d.Matrix.add(mat0, mat1, out);
                egret3d.Matrix.add(out, mat2, out);
                egret3d.Matrix.add(out, mat3, out);
            }
            return out;
        };
        /**
         * @inheritDoc
         */
        SkinnedMeshRenderer.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            this.materials = this._materials;
            this.mesh = this._mesh;
            this.bones = this._bones;
            var shaderType = 0 /* SQT */;
            if (this._materials.length > 0) {
                var materialPasses = this._materials[0].getShader().passes["skin"];
                if (!materialPasses || materialPasses.length === 0) {
                    shaderType = 1 /* Matrix */;
                }
            }
            // TODO _bonePoses 应该是动态长度
            switch (shaderType) {
                case 1 /* Matrix */:
                    this._maxBoneCount = 24;
                    this._skeletonMatrixData = new Float32Array(16 * this._maxBoneCount);
                    break;
                case 0 /* SQT */:
                    this._maxBoneCount = 55;
                    this._skeletonMatrixData = new Float32Array(8 * this._maxBoneCount);
                    for (var i = 0; i < this._maxBoneCount; ++i) {
                        var iA = i * 8;
                        this._skeletonMatrixData[iA++] = 0.0;
                        this._skeletonMatrixData[iA++] = 0.0;
                        this._skeletonMatrixData[iA++] = 0.0;
                        this._skeletonMatrixData[iA++] = 1.0;
                        this._skeletonMatrixData[iA++] = 0.0;
                        this._skeletonMatrixData[iA++] = 0.0;
                        this._skeletonMatrixData[iA++] = 0.0;
                        this._skeletonMatrixData[iA++] = 1.0;
                    }
                    break;
            }
            // TODO 如果layer发生改变，需要重新刷新在renderList中的层级。 可以依赖 event
            // if (this.materials != null && this.materials.length > 0) {
            //     let _mat = this.materials[0];
            //     if (_mat) {
            //         this.layer = _mat.getLayer();
            //         if (!this.issetq) {
            //             this._queue = _mat.getQueue();
            //         }
            //     }
            // }
        };
        /**
         * @inheritDoc
         */
        SkinnedMeshRenderer.prototype.uninitialize = function () {
            _super.prototype.uninitialize.call(this);
            if (this._mesh) {
                this._mesh.dispose();
            }
            this._bones.length = 0;
            this._mesh = null;
        };
        /**
         * @inheritDoc
         */
        SkinnedMeshRenderer.prototype.serialize = function () {
            var target = _super.prototype.serialize.call(this);
            target.center = [this.center.x, this.center.y, this.center.z];
            target.size = [this.size.x, this.size.y, this.size.z];
            target.rootBone = null;
            target._bones = [];
            target._mesh = this._mesh ? this._mesh.serialize() : null;
            target._materials = [];
            if (this.rootBone) {
                target.rootBone = { hashCode: this.rootBone.hashCode };
            }
            var materials = this._materials;
            target._materials.length = materials.length;
            for (var i = 0, l = materials.length; i < l; i++) {
                var material = materials[i];
                target._materials[i] = paper.serializeAsset(material);
            }
            var bones = this._bones;
            target._bones.length = bones.length;
            for (var i = 0, l = bones.length; i < l; i++) {
                var bone = bones[i];
                target._bones[i] = { hashCode: bone.hashCode };
            }
            return target;
        };
        /**
         * @inheritDoc
         */
        SkinnedMeshRenderer.prototype.deserialize = function (element) {
            this.center.deserialize(element.center);
            this.size.deserialize(element.size);
            if (element._mesh) {
                this._mesh = new egret3d.Mesh(); //
                this._mesh.deserialize(element._mesh);
            }
            if (element.rootBone) {
                this.rootBone = paper.getDeserializedObject(element.rootBone);
            }
            this._materials.length = 0;
            if (element._materials) {
                for (var i = 0, l = element._materials.length; i < l; i++) {
                    this._materials.push(paper.getDeserializedObject(element._materials[i]));
                }
            }
            this._bones.length = 0;
            if (element._bones) {
                for (var i = 0, l = element._bones.length; i < l; i++) {
                    this._bones.push(paper.getDeserializedObject(element._bones[i]));
                }
            }
        };
        /**
         * ray intersects
         * @param ray ray
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 射线检测
         * @param ray 射线
         * @version paper 1.0
         * @platform Web
         * @language
         */
        SkinnedMeshRenderer.prototype.intersects = function (ray) {
            var mvpmat = this.gameObject.transform.getWorldMatrix();
            var pickinfo = null;
            // let data = this.mesh.data;
            var subMeshIndex = 0;
            for (var _i = 0, _a = this._mesh.glTFMesh.primitives; _i < _a.length; _i++) {
                var primitive = _a[_i];
                var mat0 = helpMat4_1;
                var mat1 = helpMat4_2;
                var mat2 = helpMat4_3;
                var mat00 = helpMat4_4;
                var mat11 = helpMat4_5;
                var mat22 = helpMat4_6;
                var indices = this._mesh.getIndices(subMeshIndex);
                var indexAccessor = this.mesh.glTFAsset.getAccessor(primitive.indices);
                var indexBufferOffset = this.mesh.glTFAsset.getBufferOffset(indexAccessor); // TODO
                var t0 = helpVec3_1;
                var t1 = helpVec3_2;
                var t2 = helpVec3_3;
                for (var i = 0; i < indexAccessor.count; i += 3) {
                    // TODO
                    var verindex0 = indices[i];
                    var verindex1 = indices[i + 1];
                    var verindex2 = indices[i + 2];
                    var p0 = helpVec3_4;
                    var p1 = helpVec3_5;
                    var p2 = helpVec3_6;
                    this.mesh.getVertexPosition(verindex0, subMeshIndex, p0);
                    this.mesh.getVertexPosition(verindex1, subMeshIndex, p1);
                    this.mesh.getVertexPosition(verindex2, subMeshIndex, p2);
                    this._getMatByIndex(verindex0, mat0);
                    this._getMatByIndex(verindex1, mat1);
                    this._getMatByIndex(verindex2, mat2);
                    if (mat0 === null || mat1 === null || mat2 === null)
                        continue;
                    egret3d.Matrix.multiply(mvpmat, mat0, mat00);
                    egret3d.Matrix.multiply(mvpmat, mat1, mat11);
                    egret3d.Matrix.multiply(mvpmat, mat2, mat22);
                    egret3d.Matrix.transformVector3(p0, mat00, t0);
                    egret3d.Matrix.transformVector3(p1, mat11, t1);
                    egret3d.Matrix.transformVector3(p2, mat22, t2);
                    var result = ray.intersectsTriangle(t0, t1, t2);
                    if (result) {
                        if (result.distance < 0)
                            continue;
                        if (!pickinfo || pickinfo.distance > result.distance) {
                            pickinfo = result;
                            pickinfo.faceId = (indexBufferOffset + i) / 3; // TODO
                            pickinfo.subMeshId = subMeshIndex;
                            var tdir = helpVec3_7;
                            egret3d.Vector3.copy(ray.direction, tdir);
                            egret3d.Vector3.scale(tdir, result.distance);
                            egret3d.Vector3.add(ray.origin, tdir, pickinfo.hitposition);
                        }
                    }
                }
                subMeshIndex++;
            }
            return pickinfo;
        };
        Object.defineProperty(SkinnedMeshRenderer.prototype, "materials", {
            /**
             * material list
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 材质数组
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                return this._materials;
            },
            set: function (value) {
                if (value !== this._materials) {
                    for (var _i = 0, value_3 = value; _i < value_3.length; _i++) {
                        var material = value_3[_i];
                        this._materials.push(material);
                    }
                }
                paper.EventPool.dispatchEvent("materials" /* Materials */, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkinnedMeshRenderer.prototype, "bones", {
            /**
             * 骨骼列表
             *
             */
            get: function () {
                return this._bones;
            },
            set: function (value) {
                if (value !== this._bones) {
                    this._bones.length = 0;
                    for (var _i = 0, value_4 = value; _i < value_4.length; _i++) {
                        var bone = value_4[_i];
                        this._bones.push(bone);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkinnedMeshRenderer.prototype, "boneBuffer", {
            /**
             *
             */
            get: function () {
                return this.cacheData || this._skeletonMatrixData;
            },
            enumerable: true,
            configurable: true
        });
        /**
         *
         */
        SkinnedMeshRenderer.dataCaches = [];
        __decorate([
            paper.serializedField
        ], SkinnedMeshRenderer.prototype, "_materials", void 0);
        __decorate([
            paper.serializedField
        ], SkinnedMeshRenderer.prototype, "_mesh", void 0);
        __decorate([
            paper.serializedField
        ], SkinnedMeshRenderer.prototype, "_bones", void 0);
        __decorate([
            paper.serializedField
        ], SkinnedMeshRenderer.prototype, "rootBone", void 0);
        __decorate([
            paper.serializedField
        ], SkinnedMeshRenderer.prototype, "center", void 0);
        __decorate([
            paper.serializedField
        ], SkinnedMeshRenderer.prototype, "size", void 0);
        return SkinnedMeshRenderer;
    }(paper.BaseComponent));
    egret3d.SkinnedMeshRenderer = SkinnedMeshRenderer;
    __reflect(SkinnedMeshRenderer.prototype, "egret3d.SkinnedMeshRenderer", ["paper.IRenderer"]);
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var helpVec3_1 = new egret3d.Vector3();
    var helpVec3_2 = new egret3d.Vector3();
    var helpVec3_3 = new egret3d.Vector3();
    var helpVec3_4 = new egret3d.Vector3();
    var _attributes = [
        "POSITION" /* POSITION */,
        "COLOR_0" /* COLOR_0 */,
        "TEXCOORD_0" /* TEXCOORD_0 */,
    ];
    /**
     * Trail Renderer Component
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 拖尾渲染组件
     * @version paper 1.0
     * @platform Web
     * @language
     */
    var TrailRender = (function (_super) {
        __extends(TrailRender, _super);
        /**
         *
         */
        function TrailRender() {
            var _this = _super.call(this) || this;
            /**
             * extend direction
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 拖尾延伸方向。
             * true为单方向延伸，false为双向延伸
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.extenedOneSide = true;
            _this._vertexCount = 24;
            /**
             * material color
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 材质颜色
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.color = new egret3d.Color(1, 1, 1, 1);
            /**
             * set trail width
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 设置拖尾宽度
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.width = 1.0;
            /**
             * set trail speed（0 - 1）
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 设置拖尾速度，调节拖尾长短（0-1）
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.speed = 0.5;
            /**
             * look at camera
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 拖尾是否朝向相机
             * @version paper 1.0
             * @platform Web
             * @language
             */
            _this.lookAtCamera = false;
            /**
             *
             */
            _this.$active = false;
            _this._reInit = false;
            _this._material = new egret3d.Material();
            _this._material.setShader(egret3d.DefaultShaders.DIFFUSE);
            return _this;
        }
        Object.defineProperty(TrailRender.prototype, "material", {
            /**
             * trail material
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 拖尾的材质
             * @version paper 1.0
             * @platform Web
             * @language
             */
            get: function () {
                return this._material;
            },
            set: function (material) {
                this._material = material;
                paper.EventPool.dispatchEvent("material" /* Meterial */, this);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @inheritDoc
         */
        TrailRender.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            this._buildMesh(this._vertexCount);
        };
        /**
         * @inheritDoc
         */
        TrailRender.prototype.uninitialize = function () {
            _super.prototype.uninitialize.call(this);
            if (this._mesh) {
                this._mesh.dispose();
            }
            this._mesh = null;
        };
        /**
         *
         */
        TrailRender.prototype.update = function (delta) {
            if (!this.$active)
                return;
            if (this._reInit) {
                this._buildData(this._vertexCount);
                this._reInit = false;
            }
            var camera = egret3d.Camera.main;
            var targetPosition = this.gameObject.transform.getPosition();
            // set first stick's up direction
            if (this.lookAtCamera) {
                if (camera) {
                    var cameraPosition = egret3d.Vector3.copy(camera.gameObject.transform.getPosition(), helpVec3_1);
                    var cameraDirection = egret3d.Vector3.subtract(cameraPosition, this._sticks[0].location, helpVec3_2);
                    egret3d.Vector3.normalize(cameraDirection);
                    var direction = egret3d.Vector3.subtract(targetPosition, this._sticks[0].location, helpVec3_3);
                    egret3d.Vector3.normalize(direction);
                    egret3d.Vector3.cross(cameraDirection, direction, this._sticks[0].up);
                    egret3d.Vector3.scale(this._sticks[0].up, this.width);
                }
            }
            else {
                this.gameObject.transform.getUp(this._sticks[0].up);
                egret3d.Vector3.scale(this._sticks[0].up, this.width);
            }
            // set first stick's position
            egret3d.Vector3.copy(targetPosition, this._sticks[0].location);
            // lerp set other sticks' position
            var length = this._sticks.length;
            for (var i = 1; i < length; i++) {
                egret3d.Vector3.lerp(this._sticks[i].location, this._sticks[i - 1].location, this.speed, this._sticks[i].location);
            }
            // set other sticks's updir
            if (this.lookAtCamera) {
                if (camera) {
                    var cameraPosition = egret3d.Vector3.copy(camera.gameObject.transform.getPosition(), helpVec3_1);
                    for (var i = 1; i < length; i++) {
                        var cameraDirection = egret3d.Vector3.subtract(cameraPosition, this._sticks[i].location, helpVec3_1);
                        egret3d.Vector3.normalize(cameraDirection);
                        var moveDirection = egret3d.Vector3.subtract(this._sticks[i - 1].location, this._sticks[i].location, helpVec3_2);
                        egret3d.Vector3.normalize(moveDirection);
                        egret3d.Vector3.cross(cameraDirection, moveDirection, this._sticks[i].up);
                        egret3d.Vector3.scale(this._sticks[i].up, this.width);
                    }
                }
            }
            else {
                for (var i = 1; i < length; i++) {
                    egret3d.Vector3.lerp(this._sticks[i].up, this._sticks[i - 1].up, this.speed, this._sticks[i].up);
                }
            }
            this._updateTrailData();
        };
        TrailRender.prototype._buildMesh = function (vertexcount) {
            this._mesh = new egret3d.Mesh(vertexcount, (vertexcount / 2 - 1) * 6, _attributes, 2 /* Dynamic */);
        };
        TrailRender.prototype._buildData = function (vertexCount) {
            var length = vertexCount / 2;
            // create sticks
            this._sticks = [];
            var position = this.gameObject.transform.getPosition();
            var up = new egret3d.Vector3();
            this.gameObject.transform.getUp(up);
            egret3d.Vector3.scale(up, this.width);
            for (var i = 0; i < length; i++) {
                var stick = new TrailStick();
                egret3d.Vector3.copy(position, stick.location);
                egret3d.Vector3.copy(up, stick.up);
                this._sticks.push(stick);
            }
            for (var i = 0; i < length; i++) {
                var iD = i * 2;
                var u = i / (length - 1);
                this._mesh.setVertexAttribute(iD, "POSITION" /* POSITION */, 0, 0, 0, 0);
                this._mesh.setVertexAttribute(iD, "COLOR_0" /* COLOR_0 */, 0, this.color.r, this.color.g, this.color.b, this.color.a);
                this._mesh.setVertexAttribute(iD, "TEXCOORD_0" /* TEXCOORD_0 */, 0, u, 0);
                this._mesh.setVertexAttribute(iD + 1, "POSITION" /* POSITION */, 0, 0, 0, 0);
                this._mesh.setVertexAttribute(iD + 1, "COLOR_0" /* COLOR_0 */, 0, this.color.r, this.color.g, this.color.b, this.color.a);
                this._mesh.setVertexAttribute(iD + 1, "TEXCOORD_0" /* TEXCOORD_0 */, 0, u, 1);
            }
            var indices = this._mesh.getIndices();
            for (var k = 0; k < length - 1; k++) {
                var iD = k * 6;
                var a = k * 2;
                var b = (k + 1) * 2;
                var c = k * 2 + 1;
                var d = (k + 1) * 2 + 1;
                indices[iD + 0] = a;
                indices[iD + 1] = b;
                indices[iD + 2] = c;
                indices[iD + 3] = c;
                indices[iD + 4] = b;
                indices[iD + 5] = d;
            }
            this._mesh.uploadSubVertexBuffer(_attributes);
            this._mesh.uploadSubIndexBuffer();
        };
        TrailRender.prototype._updateTrailData = function () {
            var length = this._vertexCount / 2;
            var pos, up;
            if (this.extenedOneSide) {
                for (var i = 0; i < length; i++) {
                    var iD = i * 2;
                    pos = this._sticks[i].location;
                    up = this._sticks[i].up;
                    this._mesh.setVertexAttribute(iD, "POSITION" /* POSITION */, 0, pos.x, pos.y, pos.z);
                    this._mesh.setVertexAttribute(iD + 1, "POSITION" /* POSITION */, 0, pos.x + up.x, pos.y + up.y, pos.z + up.z);
                }
            }
            else {
                for (var i = 0; i < length; i++) {
                    var iD = i * 2;
                    pos = this._sticks[i].location;
                    up = this._sticks[i].up;
                    this._mesh.setVertexAttribute(iD, "POSITION" /* POSITION */, 0, pos.x, pos.y, pos.z);
                    this._mesh.setVertexAttribute(iD + 1, "POSITION" /* POSITION */, 0, pos.x + up.x, pos.y + up.y, pos.z + up.z);
                }
            }
            this._mesh.uploadSubVertexBuffer("POSITION" /* POSITION */);
        };
        __decorate([
            paper.serializedField
        ], TrailRender.prototype, "extenedOneSide", void 0);
        __decorate([
            paper.serializedField
        ], TrailRender.prototype, "_material", void 0);
        __decorate([
            paper.serializedField
        ], TrailRender.prototype, "color", void 0);
        __decorate([
            paper.serializedField
        ], TrailRender.prototype, "width", void 0);
        __decorate([
            paper.serializedField
        ], TrailRender.prototype, "speed", void 0);
        __decorate([
            paper.serializedField
        ], TrailRender.prototype, "lookAtCamera", void 0);
        return TrailRender;
    }(paper.BaseComponent));
    egret3d.TrailRender = TrailRender;
    __reflect(TrailRender.prototype, "egret3d.TrailRender", ["paper.IRenderer"]);
    /**
     * stick
     */
    var TrailStick = (function () {
        function TrailStick() {
            this.location = new egret3d.Vector3(0, 0, 0);
            this.up = new egret3d.Vector3(0, 1, 0);
        }
        return TrailStick;
    }());
    __reflect(TrailStick.prototype, "TrailStick");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * TrailRender系统
     */
    var TrailRenderSystem = (function (_super) {
        __extends(TrailRenderSystem, _super);
        function TrailRenderSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [
                {
                    componentClass: egret3d.TrailRender,
                    listeners: [
                        {
                            type: "__enabled__" /* Enabled */,
                            listener: function (component) {
                                var renderer = _this._getComponent(component.gameObject, 0);
                                if (renderer) {
                                    _this._drawCallList.updateDrawCalls(component.gameObject, false);
                                }
                            }
                        },
                        {
                            type: "material" /* Meterial */,
                            listener: function (component) {
                                var renderer = _this._getComponent(component.gameObject, 0);
                                if (renderer) {
                                    _this._drawCallList.updateDrawCalls(component.gameObject, false);
                                }
                            }
                        },
                    ]
                }
            ];
            _this._transform = new egret3d.Transform(); // TODO 不要这样，这是组件
            _this._createDrawCalls = (function (gameObject) {
                var renderer = _this._getComponent(gameObject, 0);
                if (renderer.isActiveAndEnabled && renderer._mesh && renderer._material && renderer.$active) {
                    var subMeshIndex = 0;
                    var drawCalls = [];
                    for (var _i = 0, _a = renderer._mesh.glTFMesh.primitives; _i < _a.length; _i++) {
                        var primitive = _a[_i];
                        drawCalls.push({
                            subMeshInfo: subMeshIndex,
                            mesh: renderer._mesh,
                            material: renderer._material,
                            lightMapIndex: -1,
                            boneData: null,
                            gameObject: gameObject,
                            transform: _this._transform,
                            frustumTest: false,
                            zdist: -1
                        });
                        subMeshIndex++;
                    }
                    return drawCalls;
                }
                return null;
            });
            _this._drawCallList = new egret3d.DrawCallList(_this._createDrawCalls);
            return _this;
        }
        /**
         * @inheritDoc
         */
        TrailRenderSystem.prototype._onCreateComponent = function (component) {
            if (!_super.prototype._onCreateComponent.call(this, component)) {
                return false;
            }
            this._drawCallList.updateShadowCasters(component.gameObject, false);
            return true;
        };
        /**
         * @inheritDoc
         */
        TrailRenderSystem.prototype._onDestroyComponent = function (component) {
            if (!_super.prototype._onDestroyComponent.call(this, component)) {
                return false;
            }
            this._drawCallList.removeDrawCalls(component.gameObject);
            return true;
        };
        /**
         * @inheritDoc
         */
        TrailRenderSystem.prototype.update = function () {
            var deltaTime = paper.Time.deltaTime;
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                component.update(deltaTime);
            }
        };
        return TrailRenderSystem;
    }(paper.BaseSystem));
    egret3d.TrailRenderSystem = TrailRenderSystem;
    __reflect(TrailRenderSystem.prototype, "egret3d.TrailRenderSystem");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * TODO 需要完善
     */
    var SkinnedMeshRendererSystem = (function (_super) {
        __extends(SkinnedMeshRendererSystem, _super);
        function SkinnedMeshRendererSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [
                {
                    componentClass: egret3d.SkinnedMeshRenderer,
                    listeners: [
                        {
                            type: "__enabled__" /* Enabled */,
                            listener: function (component) {
                                var renderer = _this._getComponent(component.gameObject, 0);
                                if (renderer) {
                                    _this._updateDrawCalls(component);
                                }
                            }
                        },
                        {
                            type: "mesh" /* Mesh */,
                            listener: function (component) {
                                var renderer = _this._getComponent(component.gameObject, 0);
                                if (renderer) {
                                    _this._updateDrawCalls(component);
                                }
                            }
                        },
                        {
                            type: "materials" /* Materials */,
                            listener: function (component) {
                                var renderer = _this._getComponent(component.gameObject, 0);
                                if (renderer) {
                                    _this._updateDrawCalls(component);
                                }
                            }
                        },
                    ]
                }
            ];
            _this._createDrawCalls = (function (gameObject) {
                var renderer = _this._getComponent(gameObject, 0);
                if (renderer.isActiveAndEnabled && renderer.mesh && renderer.materials.length > 0) {
                    var subMeshIndex = 0;
                    var drawCalls = [];
                    for (var _i = 0, _a = renderer.mesh.glTFMesh.primitives; _i < _a.length; _i++) {
                        var primitive = _a[_i];
                        drawCalls.push({
                            subMeshInfo: subMeshIndex,
                            mesh: renderer.mesh,
                            material: renderer.materials[primitive.material || 0],
                            lightMapIndex: -1,
                            boneData: renderer.boneBuffer,
                            gameObject: gameObject,
                            transform: gameObject.transform,
                            frustumTest: false,
                            zdist: -1
                        });
                        subMeshIndex++;
                    }
                    return drawCalls;
                }
                return null;
            });
            _this._drawCallList = new egret3d.DrawCallList(_this._createDrawCalls);
            return _this;
        }
        SkinnedMeshRendererSystem.prototype._updateDrawCalls = function (component) {
            var gameObject = component.gameObject;
            this._drawCallList.updateDrawCalls(gameObject, false);
            //
            var drawCalls = this._drawCallList.getDrawCalls(gameObject);
            if (drawCalls) {
                for (var _i = 0, drawCalls_4 = drawCalls; _i < drawCalls_4.length; _i++) {
                    var drawCall = drawCalls_4[_i];
                    drawCall.boneData = component.boneBuffer;
                }
            }
        };
        /**
         * @inheritDoc
         */
        SkinnedMeshRendererSystem.prototype._onCreateComponent = function (component) {
            if (!_super.prototype._onCreateComponent.call(this, component)) {
                return false;
            }
            this._updateDrawCalls(component);
            return true;
        };
        /**
         * @inheritDoc
         */
        SkinnedMeshRendererSystem.prototype._onDestroyComponent = function (component) {
            if (!_super.prototype._onDestroyComponent.call(this, component)) {
                return false;
            }
            this._drawCallList.removeDrawCalls(component.gameObject);
            return true;
        };
        /**
         * @inheritDoc
         */
        SkinnedMeshRendererSystem.prototype.update = function () {
        };
        return SkinnedMeshRendererSystem;
    }(paper.BaseSystem));
    egret3d.SkinnedMeshRendererSystem = SkinnedMeshRendererSystem;
    __reflect(SkinnedMeshRendererSystem.prototype, "egret3d.SkinnedMeshRendererSystem");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * glTF 资源。
     */
    var GLTFAsset = (function (_super) {
        __extends(GLTFAsset, _super);
        function GLTFAsset() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * Buffer 列表。
             */
            _this.buffers = [];
            /**
             * 配置。
             */
            _this.config = null;
            return _this;
        }
        /**
         *
         */
        GLTFAsset.getComponentTypeCount = function (type) {
            switch (type) {
                case 5120 /* Byte */:
                case 5121 /* UnsignedByte */:
                    return 1;
                case 5122 /* Short */:
                case 5123 /* UnsignedShort */:
                    return 2;
                case 5124 /* Int */:
                case 5125 /* UnsignedInt */:
                    return 4;
                case 5126 /* Float */:
                    return 4;
                default:
                    throw new Error();
            }
        };
        /**
         *
         */
        GLTFAsset.getAccessorTypeCount = function (type) {
            switch (type) {
                case "SCALAR" /* SCALAR */:
                    return 1;
                case "VEC2" /* VEC2 */:
                    return 2;
                case "VEC3" /* VEC3 */:
                    return 3;
                case "VEC4" /* VEC4 */:
                case "MAT2" /* MAT2 */:
                    return 4;
                case "MAT3" /* MAT3 */:
                    return 9;
                case "MAT4" /* MAT4 */:
                    return 16;
                default:
                    throw new Error();
            }
        };
        /**
         * 自定义 Mesh 的属性枚举。
         */
        GLTFAsset.getMeshAttributeType = function (type) {
            switch (type) {
                case "POSITION" /* POSITION */:
                case "NORMAL" /* NORMAL */:
                    return "VEC3" /* VEC3 */;
                case "TEXCOORD_0" /* TEXCOORD_0 */:
                case "TEXCOORD_1" /* TEXCOORD_1 */:
                    return "VEC2" /* VEC2 */;
                case "TANGENT" /* TANGENT */:
                case "COLOR_0" /* COLOR_0 */:
                case "COLOR_1" /* COLOR_1 */:
                case "JOINTS_0" /* JOINTS_0 */:
                case "WEIGHTS_0" /* WEIGHTS_0 */:
                    return "VEC4" /* VEC4 */;
                default:
                    throw new Error();
            }
        };
        /**
         *
         */
        GLTFAsset.createGLTFAsset = function () {
            var glftAsset = new GLTFAsset();
            glftAsset.config = {
                asset: {
                    version: "2"
                },
            };
            return glftAsset;
        };
        /**
         * @internal
         */
        GLTFAsset.prototype.parse = function (config, buffers) {
            this.config = config;
            for (var _i = 0, buffers_1 = buffers; _i < buffers_1.length; _i++) {
                var buffer = buffers_1[_i];
                this.buffers.push(new Uint32Array(buffer));
            }
        };
        /**
         * 从二进制数据中解析资源。
         */
        GLTFAsset.prototype.parseFromBinary = function (binary) {
            var index = 0;
            var array = new Uint32Array(binary);
            if (array[index++] !== 0x46546C67 ||
                array[index++] !== 2) {
                console.assert(false, "Nonsupport glTF data.");
                return;
            }
            if (array[index++] !== binary.byteLength) {
                console.assert(false, "Error glTF data.");
                return;
            }
            var chunkLength = 0;
            var chunkType = 0;
            while (index < array.length) {
                chunkLength = array[index++];
                chunkType = array[index++];
                if (chunkLength % 4) {
                    console.assert(false, "Error glTF data.");
                }
                if (chunkType === 0x4E4F534A) {
                    var jsonArray = new Uint8Array(binary, index * 4, chunkLength);
                    var jsonString = egret3d.io.BinReader.utf8ArrayToString(jsonArray);
                    this.config = JSON.parse(jsonString);
                }
                else if (chunkType === 0x004E4942) {
                    var buffer = new Uint32Array(binary, index * 4);
                    this.buffers.push(buffer);
                }
                else {
                    console.assert(false, "Nonsupport glTF data.");
                    return;
                }
                index += chunkLength / 4;
            }
        };
        /**
         * 根据指定 BufferView 创建二进制数组。
         */
        GLTFAsset.prototype.createTypeArrayFromBufferView = function (bufferView, componentType) {
            var buffer = this.buffers[bufferView.buffer];
            var bufferOffset = buffer.byteOffset + (bufferView.byteOffset || 0);
            // assert.config.buffers[bufferView.buffer];
            switch (componentType) {
                case 5120 /* Byte */:
                    return new Int8Array(buffer.buffer, bufferOffset, bufferView.byteLength / Int8Array.BYTES_PER_ELEMENT);
                case 5121 /* UnsignedByte */:
                    return new Uint8Array(buffer.buffer, bufferOffset, bufferView.byteLength / Uint8Array.BYTES_PER_ELEMENT);
                case 5122 /* Short */:
                    return new Int16Array(buffer.buffer, bufferOffset, bufferView.byteLength / Int16Array.BYTES_PER_ELEMENT);
                case 5123 /* UnsignedShort */:
                    return new Uint16Array(buffer.buffer, bufferOffset, bufferView.byteLength / Uint16Array.BYTES_PER_ELEMENT);
                case 5125 /* UnsignedInt */:
                    return new Int32Array(buffer.buffer, bufferOffset, bufferView.byteLength / Int32Array.BYTES_PER_ELEMENT);
                case 5125 /* UnsignedInt */:
                    return new Uint32Array(buffer.buffer, bufferOffset, bufferView.byteLength / Uint32Array.BYTES_PER_ELEMENT);
                case 5126 /* Float */:
                    return new Float32Array(buffer.buffer, bufferOffset, bufferView.byteLength / Float32Array.BYTES_PER_ELEMENT);
            }
            throw new Error();
        };
        /**
         * 根据指定 Accessor 创建二进制数组。
         */
        GLTFAsset.prototype.createTypeArrayFromAccessor = function (accessor) {
            var bufferCount = GLTFAsset.getAccessorTypeCount(accessor.type) * accessor.count;
            var bufferView = this.getBufferView(accessor);
            var buffer = this.buffers[bufferView.buffer];
            // assert.config.buffers[bufferView.buffer];
            var bufferOffset = buffer.byteOffset + (bufferView.byteOffset || 0) + (accessor.byteOffset || 0);
            switch (accessor.componentType) {
                case 5120 /* Byte */:
                    return new Int8Array(buffer.buffer, bufferOffset, bufferCount);
                case 5121 /* UnsignedByte */:
                    return new Uint8Array(buffer.buffer, bufferOffset, bufferCount);
                case 5122 /* Short */:
                    return new Int16Array(buffer.buffer, bufferOffset, bufferCount);
                case 5123 /* UnsignedShort */:
                    return new Uint16Array(buffer.buffer, bufferOffset, bufferCount);
                case 5125 /* UnsignedInt */:
                    return new Int32Array(buffer.buffer, bufferOffset, bufferCount);
                case 5125 /* UnsignedInt */:
                    return new Uint32Array(buffer.buffer, bufferOffset, bufferCount);
                case 5126 /* Float */:
                    return new Float32Array(buffer.buffer, bufferOffset, bufferCount);
            }
            throw new Error();
        };
        /**
         * 通过 Accessor 获取指定 BufferLength。
         */
        GLTFAsset.prototype.getBufferLength = function (accessor) {
            return GLTFAsset.getAccessorTypeCount(accessor.type) * GLTFAsset.getComponentTypeCount(accessor.componentType) * accessor.count;
        };
        /**
         * 通过 Accessor 获取指定 BufferOffset。
         */
        GLTFAsset.prototype.getBufferOffset = function (accessor) {
            var bufferView = this.getBufferView(accessor);
            // const buffer = this.buffers[bufferView.buffer];
            return (bufferView.byteOffset || 0) + (accessor.byteOffset || 0);
        };
        /**
         * 通过 Accessor 获取指定 Buffer。
         */
        GLTFAsset.prototype.getBuffer = function (accessor) {
            var bufferView = this.getBufferView(accessor);
            // this.config.buffers[bufferView.buffer];
            return this.buffers[bufferView.buffer];
        };
        /**
         * 通过 Accessor 获取指定 BufferView。
         */
        GLTFAsset.prototype.getBufferView = function (accessor) {
            if (!this.config.bufferViews) {
                throw new Error();
            }
            return this.config.bufferViews[accessor.bufferView || 0];
        };
        /**
         * 通过 Accessor 索引，获取指定 Accessor。
         */
        GLTFAsset.prototype.getAccessor = function (index) {
            if (!this.config.accessors) {
                throw new Error();
            }
            return this.config.accessors[index];
        };
        /**
         * 获取节点。
         */
        GLTFAsset.prototype.getNode = function (index) {
            if (!this.config.nodes) {
                throw new Error();
            }
            return this.config.nodes[index];
        };
        /*
         * 获取动画剪辑。
         */
        GLTFAsset.prototype.getAnimationClip = function (name) {
            if (!this.config.animations ||
                this.config.animations.length === 0) {
                return null;
            }
            var animation = this.config.animations[0];
            if (animation.extensions.paper.clips.length === 0) {
                return null;
            }
            if (!name) {
                return animation.extensions.paper.clips[0];
            }
            for (var _i = 0, _a = this.config.animations; _i < _a.length; _i++) {
                var animation_1 = _a[_i];
                for (var _b = 0, _c = animation_1.extensions.paper.clips; _b < _c.length; _b++) {
                    var animationClip = _c[_b];
                    if (animationClip.name === name) {
                        return animationClip;
                    }
                }
            }
            return null;
        };
        /**
         * @inheritDoc
         */
        GLTFAsset.prototype.caclByteLength = function () {
            return 0; // TODO
        };
        /**
         * @inheritDoc
         */
        GLTFAsset.prototype.dispose = function () {
            this.buffers.length = 0;
        };
        return GLTFAsset;
    }(paper.Asset));
    egret3d.GLTFAsset = GLTFAsset;
    __reflect(GLTFAsset.prototype, "egret3d.GLTFAsset");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var helpVec3_1 = new egret3d.Vector3();
    var helpVec3_2 = new egret3d.Vector3();
    var helpVec3_3 = new egret3d.Vector3();
    var helpVec3_4 = new egret3d.Vector3();
    var helpVec3_5 = new egret3d.Vector3();
    var helpVec3_6 = new egret3d.Vector3();
    var helpVec3_7 = new egret3d.Vector3();
    // const helpVec3_8: Vector3 = new Vector3();
    /**
     * Mesh.
     * @version egret3D 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 网格模型。
     * @version egret3D 1.0
     * @platform Web
     * @language zh_CN
     */
    var Mesh = (function (_super) {
        __extends(Mesh, _super);
        function Mesh() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.call(this) || this;
            /**
             *
             */
            _this.vertexCount = 0;
            /**
             * true :所有subMesh公用一个buffer; false :每个subMesh使用单独的buffer
             *
             */
            _this.isSharedBuffer = true;
            _this._drawMode = 1 /* Static */; // TODO
            /**
             *
             */
            _this._version = 0;
            _this._glTFMeshIndex = 0;
            _this._glTFAsset = null;
            _this._glTFMesh = null;
            _this._vertexBuffer = null;
            /**
             * 暂时实现在这里，应该下放到 web，并将此方法抽象。
             */
            _this.ibos = [];
            _this.vbo = null;
            if (args.length === 0) {
                return _this;
            }
            if ((args[0] instanceof egret3d.GLTFAsset)) {
                _this._drawMode = args[2] || 1 /* Static */;
                _this._glTFMeshIndex = args[1];
                _this._glTFAsset = args[0];
            }
            else {
                var isSubIndexCountParameter = typeof args[2] === "number";
                _this._drawMode = (isSubIndexCountParameter ? args[4] : args[3]) || 1 /* Static */;
                // Create gltf asset.
                _this._glTFAsset = egret3d.GLTFAsset.createGLTFAsset();
                _this._glTFAsset.config.buffers = [{ byteLength: 0 }];
                _this._glTFAsset.config.bufferViews = [{ buffer: 0, byteOffset: 0, byteLength: 0, target: 34962 /* ArrayBuffer */ }];
                _this._glTFAsset.config.accessors = [];
                _this._glTFMesh = { primitives: [{ attributes: { POSITION: 0 } }] };
                _this._glTFAsset.config.meshes = [_this._glTFMesh];
                //
                var attributeNames = (isSubIndexCountParameter ? args[3] : args[2]);
                var buffer = _this._glTFAsset.config.buffers[0];
                var vertexBufferView = _this._glTFAsset.config.bufferViews[0];
                var accessors = _this._glTFAsset.config.accessors;
                var primitive = _this._glTFMesh.primitives[0];
                var attributes = primitive.attributes;
                {
                    var isVertexCountParameter = typeof args[0] === "number";
                    var vertexBuffer = isVertexCountParameter ? null : args[0];
                    var count = isVertexCountParameter ? args[0] : _this._getVertexCountFromBuffer(vertexBuffer, attributeNames);
                    for (var _a = 0, attributeNames_1 = attributeNames; _a < attributeNames_1.length; _a++) {
                        var attributeName = attributeNames_1[_a];
                        var type = egret3d.GLTFAsset.getMeshAttributeType(attributeName);
                        var byteOffset = vertexBufferView.byteLength;
                        vertexBufferView.byteLength += count * egret3d.GLTFAsset.getAccessorTypeCount(type) * Float32Array.BYTES_PER_ELEMENT;
                        attributes[attributeName] = accessors.length;
                        accessors.push({
                            bufferView: 0,
                            byteOffset: byteOffset,
                            count: count,
                            componentType: 5126 /* Float */,
                            type: type,
                        });
                    }
                    buffer.byteLength = vertexBufferView.byteLength;
                    if (isVertexCountParameter) {
                        _this._glTFAsset.buffers[0] = new Float32Array(vertexBufferView.byteLength);
                    }
                    else {
                        _this._glTFAsset.buffers[0] = vertexBuffer;
                    }
                }
                if (args[1]) {
                    var isIndexCountParameter = typeof args[1] === "number";
                    var indexBuffer = isIndexCountParameter ? null : args[1];
                    var totalCount = isIndexCountParameter ? args[1] : indexBuffer.length;
                    var count = isSubIndexCountParameter ? args[2] : totalCount;
                    var indexBufferView = _this._glTFAsset.config.bufferViews[1] = {
                        buffer: 1,
                        byteOffset: 0,
                        byteLength: totalCount * egret3d.GLTFAsset.getAccessorTypeCount("SCALAR" /* SCALAR */) * Uint16Array.BYTES_PER_ELEMENT,
                        target: 34963 /* ElementArrayBuffer */,
                    };
                    primitive.indices = accessors.length;
                    accessors.push({
                        bufferView: 1, byteOffset: 0, count: count,
                        componentType: 5123 /* UnsignedShort */, type: "SCALAR" /* SCALAR */,
                    });
                    _this._glTFAsset.config.buffers[1] = { byteLength: indexBufferView.byteLength };
                    if (isIndexCountParameter) {
                        _this._glTFAsset.buffers[1] = new Uint16Array(indexBufferView.byteLength / Uint16Array.BYTES_PER_ELEMENT);
                    }
                    else {
                        _this._glTFAsset.buffers[1] = indexBuffer;
                    }
                }
            }
            _this.initialize();
            return _this;
        }
        Mesh.prototype._getDrawMode = function (mode) {
            var webgl = egret3d.WebGLKit.webgl;
            switch (mode) {
                case 1 /* Static */:
                    return webgl.STATIC_DRAW;
                case 2 /* Dynamic */:
                    return webgl.DYNAMIC_DRAW;
                case 3 /* Stream */:
                    return webgl.STREAM_DRAW;
            }
            throw new Error();
        };
        Mesh.prototype._cacheVertexCount = function () {
            var primitives = this._glTFMesh.primitives;
            var isSameAccessor = true;
            var firstPosAccessor = primitives[0].attributes.POSITION;
            for (var i = 1; i < primitives.length; i++) {
                var posAccessor = primitives[i].attributes.POSITION;
                if (posAccessor !== firstPosAccessor) {
                    isSameAccessor = false;
                    break;
                }
            }
            this.vertexCount = 0;
            //
            if (isSameAccessor) {
                this.vertexCount = this.getVertexCount();
            }
            else {
                for (var i = 0; i < primitives.length; i++) {
                    this.vertexCount += this.getVertexCount(i);
                }
            }
        };
        Mesh.prototype._getVertexCountFromBuffer = function (vertexBuffer, attributeNames) {
            var vertexPerCount = 0;
            for (var _i = 0, attributeNames_2 = attributeNames; _i < attributeNames_2.length; _i++) {
                var attributeName = attributeNames_2[_i];
                vertexPerCount += egret3d.GLTFAsset.getAccessorTypeCount(egret3d.GLTFAsset.getMeshAttributeType(attributeName));
            }
            return vertexBuffer.length / vertexPerCount;
        };
        /**
         * @inheritDoc
         */
        Mesh.prototype.serialize = function () {
            if (!this._glTFAsset.url) {
                return null;
            }
            var target = paper.serializeRC(this);
            target._glTFMeshIndex = this._glTFMeshIndex;
            target._glTFAsset = paper.serializeAsset(this._glTFAsset);
            return target;
        };
        /**
         * @inheritDoc
         */
        Mesh.prototype.deserialize = function (element) {
            this._glTFMeshIndex = (element._glTFMeshIndex);
            this._glTFAsset = paper.getDeserializedObject(element._glTFAsset);
            this.initialize();
        };
        /**
         * @inheritDoc
         */
        Mesh.prototype.dispose = function () {
            var webgl = egret3d.WebGLKit.webgl;
            if (this.vbo) {
                webgl.deleteBuffer(this.vbo);
            }
            for (var _i = 0, _a = this.ibos; _i < _a.length; _i++) {
                var ibo = _a[_i];
                webgl.deleteBuffer(ibo);
            }
            this.vbo = null;
            this._glTFAsset = null;
            this._glTFMesh = null;
            this._vertexBuffer = null;
        };
        /**
         * @inheritDoc
         */
        Mesh.prototype.caclByteLength = function () {
            return 0;
        };
        /**
         *
         */
        Mesh.prototype.initialize = function (drawMode) {
            if (this._vertexBuffer) {
                // console.warn("The mesh instance bas been initialized.");
                return;
            }
            var config = this._glTFAsset.config;
            if (!config.buffers ||
                !config.bufferViews ||
                !config.accessors ||
                !config.meshes ||
                config.meshes.length <= this._glTFMeshIndex) {
                console.error("Error glTF asset.");
                return;
            }
            this._drawMode = drawMode || 1 /* Static */;
            this._glTFMesh = config.meshes[this._glTFMeshIndex];
            //
            var vertexBufferViewAccessor = this._glTFAsset.getAccessor(this._glTFMesh.primitives[0].attributes.POSITION);
            this._vertexBuffer = this._glTFAsset.createTypeArrayFromBufferView(this._glTFAsset.getBufferView(vertexBufferViewAccessor), 5126 /* Float */);
            this._cacheVertexCount();
            // 暂时实现在这里，应该下放到 web，并将此类抽象。
            var webgl = egret3d.WebGLKit.webgl;
            var vbo = webgl.createBuffer();
            if (vbo) {
                this.vbo = vbo;
                webgl.bindBuffer(webgl.ARRAY_BUFFER, this.vbo);
                webgl.bufferData(webgl.ARRAY_BUFFER, this._vertexBuffer.byteLength, this._getDrawMode(this._drawMode));
                var subMeshIndex = 0;
                for (var _i = 0, _a = this._glTFMesh.primitives; _i < _a.length; _i++) {
                    var primitive = _a[_i];
                    var attributeNames = [];
                    for (var k in primitive.attributes) {
                        attributeNames.push(k);
                    }
                    this.uploadSubVertexBuffer(attributeNames, subMeshIndex);
                    if (primitive.indices !== undefined) {
                        var accessor = this._glTFAsset.getAccessor(primitive.indices);
                        var ibo = webgl.createBuffer();
                        if (ibo) {
                            this.ibos.push(ibo);
                            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, ibo);
                            webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, this._glTFAsset.getBufferLength(accessor), this._getDrawMode(this._drawMode));
                            this.uploadSubIndexBuffer(subMeshIndex);
                        }
                        else {
                            this.ibos.push(null);
                            console.log("Create webgl element buffer error.");
                        }
                    }
                    else {
                        this.ibos.push(null);
                    }
                    subMeshIndex++;
                }
            }
            else {
                console.log("Create webgl buffer error.");
            }
        };
        Mesh.prototype.addSubMesh = function (indexOffset, indexCount, materialIndex, sourceSubMeshIndex) {
            if (materialIndex === void 0) { materialIndex = 0; }
            if (sourceSubMeshIndex === void 0) { sourceSubMeshIndex = 0; }
            if (0 <= sourceSubMeshIndex && sourceSubMeshIndex < this._glTFMesh.primitives.length) {
                var sourcePrimitive = this._glTFMesh.primitives[sourceSubMeshIndex];
                var sourceIndiceAccessor = this._glTFAsset.getAccessor(sourcePrimitive.indices || 0);
                var webgl = egret3d.WebGLKit.webgl;
                var primitive = {
                    attributes: sourcePrimitive.attributes,
                    indices: this._glTFAsset.config.accessors.length,
                    material: materialIndex,
                };
                this._glTFMesh.primitives.push(primitive);
                this._glTFAsset.config.accessors.push({
                    bufferView: sourceIndiceAccessor.bufferView,
                    byteOffset: indexOffset * egret3d.GLTFAsset.getComponentTypeCount(5123 /* UnsignedShort */) * egret3d.GLTFAsset.getAccessorTypeCount("SCALAR" /* SCALAR */),
                    count: indexCount,
                    componentType: 5123 /* UnsignedShort */,
                    type: "SCALAR" /* SCALAR */,
                });
                var accessor = this._glTFAsset.getAccessor(primitive.indices);
                var ibo = webgl.createBuffer();
                if (ibo) {
                    this.ibos.push(ibo);
                    webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, ibo);
                    webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, this._glTFAsset.getBufferLength(accessor), this._getDrawMode(this._drawMode));
                }
                else {
                    this.ibos.push(null);
                    console.log("Create webgl element buffer error.");
                }
                return this._glTFMesh.primitives.length - 1;
            }
            console.warn("Error arguments.");
            return -1;
        };
        Mesh.prototype.getVertexCount = function (subMeshIndex) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            if (0 <= subMeshIndex && subMeshIndex < this._glTFMesh.primitives.length) {
                var accessor = this._glTFAsset.getAccessor(this._glTFMesh.primitives[subMeshIndex].attributes.POSITION);
                return accessor.count;
            }
            console.warn("Error arguments.");
            return 0;
        };
        Mesh.prototype.getVertexPosition = function (vertexIndex, subMeshIndex, result) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            return this.getVertexAttribute(vertexIndex, "POSITION" /* POSITION */, subMeshIndex, result);
        };
        Mesh.prototype.setVertexPosition = function (vertexIndex, vertex, subMeshIndex) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            this.setVertexAttribute(vertexIndex, "POSITION" /* POSITION */, subMeshIndex, vertex.x, vertex.y, vertex.z);
        };
        Mesh.prototype.getVertices = function (subMeshIndex) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            return this.getAttributes("POSITION" /* POSITION */, subMeshIndex);
        };
        Mesh.prototype.getUVs = function (subMeshIndex) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            return this.getAttributes("TEXCOORD_0" /* TEXCOORD_0 */, subMeshIndex);
        };
        Mesh.prototype.getColors = function (subMeshIndex) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            return this.getAttributes("COLOR_0" /* COLOR_0 */, subMeshIndex);
        };
        Mesh.prototype.getNormals = function (subMeshIndex) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            return this.getAttributes("NORMAL" /* NORMAL */, subMeshIndex);
        };
        Mesh.prototype.getTangents = function (subMeshIndex) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            return this.getAttributes("TANGENT" /* TANGENT */, subMeshIndex);
        };
        Mesh.prototype.getAttributes = function (attributeType, subMeshIndex) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            if (0 <= subMeshIndex && subMeshIndex < this._glTFMesh.primitives.length) {
                var accessorIndex = this._glTFMesh.primitives[subMeshIndex].attributes[attributeType] || 0;
                var accessor = this._glTFAsset.getAccessor(accessorIndex);
                return this._glTFAsset.createTypeArrayFromAccessor(accessor);
            }
            console.warn("Error arguments.");
            return null;
        };
        Mesh.prototype.getIndices = function (subMeshIndex) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            if (0 <= subMeshIndex && subMeshIndex < this._glTFMesh.primitives.length) {
                var accessorIndex = this._glTFMesh.primitives[subMeshIndex].indices || 0;
                var accessor = this._glTFAsset.getAccessor(accessorIndex);
                return this._glTFAsset.createTypeArrayFromAccessor(accessor);
            }
            console.warn("Error arguments.");
            return null;
        };
        Mesh.prototype.getVertexAttribute = function (vertexIndex, attributeType, subMeshIndex, result) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            if (0 <= subMeshIndex && subMeshIndex < this._glTFMesh.primitives.length) {
                var attributeIndex = this._glTFMesh.primitives[subMeshIndex].attributes[attributeType];
                if (attributeIndex !== undefined) {
                    var accessor = this._glTFAsset.getAccessor(attributeIndex);
                    if (0 <= vertexIndex && vertexIndex < accessor.count) {
                        var offset = this._glTFAsset.getBufferOffset(accessor) / egret3d.GLTFAsset.getComponentTypeCount(accessor.componentType) + vertexIndex * egret3d.GLTFAsset.getAccessorTypeCount(accessor.type);
                        switch (accessor.type) {
                            case "VEC2" /* VEC2 */: {
                                if (!result) {
                                    result = new egret3d.Vector2();
                                }
                                result.x = this._vertexBuffer[offset];
                                result.y = this._vertexBuffer[offset + 1];
                                break;
                            }
                            case "VEC3" /* VEC3 */: {
                                if (!result) {
                                    result = new egret3d.Vector3();
                                }
                                result.x = this._vertexBuffer[offset];
                                result.y = this._vertexBuffer[offset + 1];
                                result.z = this._vertexBuffer[offset + 2];
                                break;
                            }
                            case "VEC4" /* VEC4 */: {
                                if (!result) {
                                    result = new egret3d.Vector4();
                                }
                                result.x = this._vertexBuffer[offset];
                                result.y = this._vertexBuffer[offset + 1];
                                result.z = this._vertexBuffer[offset + 2];
                                result.w = this._vertexBuffer[offset + 3];
                                break;
                            }
                        }
                        return result;
                    }
                }
            }
            console.warn("Error arguments.");
            return result;
        };
        Mesh.prototype.setVertexAttribute = function (vertexIndex, attributeType, subMeshIndex) {
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            if (0 <= subMeshIndex && subMeshIndex < this._glTFMesh.primitives.length) {
                var attributeIndex = this._glTFMesh.primitives[subMeshIndex].attributes[attributeType];
                if (attributeIndex !== undefined) {
                    var accessor = this._glTFAsset.getAccessor(attributeIndex);
                    if (0 <= vertexIndex && vertexIndex < accessor.count) {
                        var offset = this._glTFAsset.getBufferOffset(accessor) / egret3d.GLTFAsset.getComponentTypeCount(accessor.componentType) + vertexIndex * egret3d.GLTFAsset.getAccessorTypeCount(accessor.type);
                        switch (accessor.type) {
                            case "VEC2" /* VEC2 */: {
                                this._vertexBuffer[offset] = args[0];
                                this._vertexBuffer[offset + 1] = args[1];
                                break;
                            }
                            case "VEC3" /* VEC3 */: {
                                this._vertexBuffer[offset] = args[0];
                                this._vertexBuffer[offset + 1] = args[1];
                                this._vertexBuffer[offset + 2] = args[2];
                                break;
                            }
                            case "VEC4" /* VEC4 */: {
                                this._vertexBuffer[offset] = args[0];
                                this._vertexBuffer[offset + 1] = args[1];
                                this._vertexBuffer[offset + 2] = args[2];
                                this._vertexBuffer[offset + 3] = args[3];
                                break;
                            }
                        }
                    }
                }
            }
            else {
                console.warn("Error arguments.");
            }
        };
        /**
         * 暂时实现在这里，应该下放到 web，并将此方法抽象。
         */
        Mesh.prototype.uploadSubVertexBuffer = function (uploadAttributes, subMeshIndex) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            if (0 <= subMeshIndex && subMeshIndex < this._glTFMesh.primitives.length) {
                var webgl = egret3d.WebGLKit.webgl;
                var primitive = this._glTFMesh.primitives[subMeshIndex];
                var attributes = primitive.attributes;
                webgl.bindBuffer(webgl.ARRAY_BUFFER, this.vbo);
                if (typeof uploadAttributes === "string") {
                    var accessorIndex = attributes[uploadAttributes];
                    if (accessorIndex !== undefined) {
                        var accessor = this._glTFAsset.getAccessor(accessorIndex);
                        var bufferOffset = this._glTFAsset.getBufferOffset(accessor);
                        var subVertexBuffer = this._glTFAsset.createTypeArrayFromAccessor(accessor);
                        webgl.bufferSubData(webgl.ARRAY_BUFFER, bufferOffset, subVertexBuffer);
                    }
                    else {
                        console.warn("Error arguments.");
                    }
                }
                else {
                    for (var _i = 0, uploadAttributes_1 = uploadAttributes; _i < uploadAttributes_1.length; _i++) {
                        var attributeName = uploadAttributes_1[_i];
                        var accessorIndex = attributes[attributeName];
                        if (accessorIndex !== undefined) {
                            var accessor = this._glTFAsset.getAccessor(accessorIndex);
                            var bufferOffset = this._glTFAsset.getBufferOffset(accessor);
                            var subVertexBuffer = this._glTFAsset.createTypeArrayFromAccessor(accessor);
                            webgl.bufferSubData(webgl.ARRAY_BUFFER, bufferOffset, subVertexBuffer);
                        }
                        else {
                            console.warn("Error arguments.");
                        }
                    }
                }
                this._version++;
            }
            else {
                console.warn("Error arguments.");
            }
        };
        /**
         * 暂时实现在这里，应该下放到 web，并将此方法抽象。
         */
        Mesh.prototype.uploadSubIndexBuffer = function (subMeshIndex) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            if (0 <= subMeshIndex && subMeshIndex < this._glTFMesh.primitives.length) {
                var webgl = egret3d.WebGLKit.webgl;
                var primitive = this._glTFMesh.primitives[subMeshIndex];
                if (primitive.indices !== undefined) {
                    var accessor = this._glTFAsset.getAccessor(primitive.indices);
                    // const bufferOffset = this._glTFAsset.getBufferOffset(accessor);
                    var subIndexBuffer = this._glTFAsset.createTypeArrayFromAccessor(accessor);
                    var ibo = this.ibos[subMeshIndex];
                    if (ibo) {
                        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, ibo);
                        //ibo每个单独上传，偏移一直是0
                        webgl.bufferSubData(webgl.ELEMENT_ARRAY_BUFFER, 0, subIndexBuffer);
                        this._version++;
                    }
                    else {
                        console.error("Error webgl element buffer.");
                    }
                }
                else {
                    console.warn("Error arguments.");
                }
            }
            else {
                console.warn("Error arguments.");
            }
        };
        /**
         * 检测射线碰撞
         * @param ray 射线
         * @param matrix 所在transform的矩阵
         *
         */
        Mesh.prototype.intersects = function (ray, matrix) {
            var pickInfo = null; // TODO
            var subMeshIndex = 0;
            for (var _i = 0, _a = this._glTFMesh.primitives; _i < _a.length; _i++) {
                var primitive = _a[_i];
                if (primitive.mode === 1 /* Lines */ ||
                    primitive.mode === 2 /* LineLoop */ ||
                    primitive.mode === 3 /* LineStrip */) {
                }
                else {
                    if (primitive.indices === undefined) {
                        // 不使用index TODO
                    }
                    else {
                        var indices = this.getIndices(subMeshIndex);
                        var indexAccessor = this._glTFAsset.getAccessor(primitive.indices);
                        var indexBufferOffset = this._glTFAsset.getBufferOffset(indexAccessor); // TODO
                        var t0 = helpVec3_1;
                        var t1 = helpVec3_2;
                        var t2 = helpVec3_3;
                        for (var i = 0; i < indexAccessor.count; i += 3) {
                            var p0 = this.getVertexPosition(indices[i], subMeshIndex, helpVec3_4);
                            var p1 = this.getVertexPosition(indices[i + 1], subMeshIndex, helpVec3_5);
                            var p2 = this.getVertexPosition(indices[i + 2], subMeshIndex, helpVec3_6);
                            egret3d.Matrix.transformVector3(p0, matrix, t0);
                            egret3d.Matrix.transformVector3(p1, matrix, t1);
                            egret3d.Matrix.transformVector3(p2, matrix, t2);
                            var result = ray.intersectsTriangle(t0, t1, t2);
                            if (result) {
                                if (result.distance < 0) {
                                    continue;
                                }
                                if (!pickInfo || pickInfo.distance > result.distance) {
                                    pickInfo = result;
                                    pickInfo.triangleIndex = (indexBufferOffset + i) / 3; // TODO
                                    pickInfo.subMeshIndex = i;
                                    var tdir = helpVec3_7;
                                    egret3d.Vector3.copy(ray.direction, tdir);
                                    egret3d.Vector3.scale(tdir, result.distance);
                                    egret3d.Vector3.add(ray.origin, tdir, pickInfo.position);
                                }
                            }
                        }
                    }
                }
                subMeshIndex++;
            }
            return pickInfo;
        };
        Object.defineProperty(Mesh.prototype, "subMeshCount", {
            /**
             * 获取子网格数量。
             */
            get: function () {
                return this._glTFMesh.primitives.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Mesh.prototype, "glTFAsset", {
            /**
             * 获取 mesh 数据所属的 glTF 资源。
             */
            get: function () {
                return this._glTFAsset;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Mesh.prototype, "glTFMesh", {
            /**
             * 获取 glTFMesh 数据。
             */
            get: function () {
                return this._glTFMesh;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            paper.serializedField
        ], Mesh.prototype, "_drawMode", void 0);
        __decorate([
            paper.serializedField
        ], Mesh.prototype, "_glTFMeshIndex", void 0);
        __decorate([
            paper.serializedField
        ], Mesh.prototype, "_glTFAsset", void 0);
        return Mesh;
    }(paper.SerializableObject));
    egret3d.Mesh = Mesh;
    __reflect(Mesh.prototype, "egret3d.Mesh");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var BoneBlendLayer = (function () {
        function BoneBlendLayer() {
            this.dirty = 0;
            this.layer = 0;
            this.leftWeight = 0;
            this.layerWeight = 0;
            this.blendWeight = 0;
            this.target = null;
        }
        BoneBlendLayer.prototype.update = function (animationState) {
            var animationLayer = animationState.layer;
            var animationWeight = animationState._globalWeight;
            if (this.dirty > 0) {
                if (this.leftWeight > 0.0) {
                    if (animationState.additive && this.layer !== animationLayer) {
                        if (this.layerWeight >= this.leftWeight) {
                            this.leftWeight = 0.0;
                            return false;
                        }
                        this.layer = animationLayer;
                        this.leftWeight -= this.layerWeight;
                        this.layerWeight = animationWeight * this.leftWeight;
                    }
                    animationWeight *= this.leftWeight;
                    this.dirty++;
                    this.blendWeight = animationWeight;
                    return true;
                }
                return false;
            }
            this.dirty++;
            this.layer = animationLayer;
            this.leftWeight = 1.0;
            this.layerWeight = animationWeight;
            this.blendWeight = animationWeight;
        };
        return BoneBlendLayer;
    }());
    egret3d.BoneBlendLayer = BoneBlendLayer;
    __reflect(BoneBlendLayer.prototype, "egret3d.BoneBlendLayer");
    /**
     *
     */
    var AnimationChannel = (function () {
        function AnimationChannel() {
            this.update = null;
        }
        return AnimationChannel;
    }());
    __reflect(AnimationChannel.prototype, "AnimationChannel");
    /**
     * 动画混合节点。
     */
    var BlendNode = (function () {
        function BlendNode() {
            /**
             * @private
             */
            this.additive = false;
            /**
             * 动画混合模式。（根节点有效）
             */
            this.layer = 0;
            /**
             * 节点权重。
             */
            this.weight = 1.0;
            /**
             * 淡入淡出的时间。
             */
            this.fadeTime = 1.0;
            /**
             * 父节点。
             */
            this.parent = null;
            /**
             * -1: Fade in, 0: Fade complete, 1: Fade out;
             * @internal
             */
            this._fadeState = -1;
            /**
             * -1: Fade start, 0: Fading, 1: Fade complete;
             * @internal
             */
            this._subFadeState = -1;
            /**
             * 累计权重。
             * @internal
             */
            this._globalWeight = 0.0;
            /**
             * 融合进度。
             *
             */
            this._fadeProgress = 0.0;
            /**
             * 全局融合时间标记。
             */
            this._fadeTimeStart = 0.0;
        }
        BlendNode.prototype._onFadeStateChange = function () {
        };
        BlendNode.prototype.update = function (globalTime) {
            var isFadeOut = this._fadeState > 0;
            var localFadeTime = globalTime - this._fadeTimeStart;
            if (this._subFadeState < 0) {
                this._subFadeState = 0;
                this._onFadeStateChange();
            }
            if (localFadeTime >= this.fadeTime) {
                this._subFadeState = 1;
                this._fadeProgress = isFadeOut ? 0.0 : 1.0;
            }
            else if (localFadeTime > 0.0) {
                this._fadeProgress = isFadeOut ? (1.0 - localFadeTime / this.fadeTime) : (localFadeTime / this.fadeTime);
            }
            else {
                this._fadeProgress = isFadeOut ? 1.0 : 0.0;
            }
            if (this._subFadeState > 0) {
                if (!isFadeOut) {
                    this._fadeState = 0;
                    this._onFadeStateChange();
                }
            }
            this._globalWeight = this.weight * this._fadeProgress;
            if (this.parent) {
                this._globalWeight *= this.parent._globalWeight;
            }
        };
        BlendNode.prototype.fadeOut = function (fadeTime) {
            var globalTime = paper.Time.time;
            var localFadeTime = globalTime - this._fadeTimeStart;
            if (this._fadeState > 0) {
                if (fadeTime > this.fadeTime - localFadeTime) {
                    return;
                }
            }
            else {
                this._fadeState = 1;
                this._subFadeState = -1;
                if (fadeTime <= 0.0 || this._fadeProgress <= 0.0) {
                    this._fadeProgress = 0.000001; // Modify fade progress to different value.
                }
            }
            this.fadeTime = this._fadeProgress > 0.000001 ? fadeTime / this._fadeProgress : 0.0;
            this._fadeTimeStart = globalTime - this.fadeTime * (1.0 - this._fadeProgress);
        };
        return BlendNode;
    }());
    egret3d.BlendNode = BlendNode;
    __reflect(BlendNode.prototype, "egret3d.BlendNode");
    /**
     * 动画混合树节点。
     */
    var BlendTree = (function (_super) {
        __extends(BlendTree, _super);
        function BlendTree() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._blendNodes = [];
            return _this;
        }
        return BlendTree;
    }(BlendNode));
    egret3d.BlendTree = BlendTree;
    __reflect(BlendTree.prototype, "egret3d.BlendTree");
    /**
     * 动画状态。
     */
    var AnimationState = (function (_super) {
        __extends(AnimationState, _super);
        function AnimationState() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @private
             */
            _this.layer = 0;
            /**
             * 动画总播放次数。
             */
            _this.playTimes = 0;
            /**
             * 动画当前播放次数。
             */
            _this.currentPlayTimes = 0;
            /**
             * 播放速度。
             */
            _this.timeScale = 1.0;
            /**
             * @private
             */
            _this.animationAsset = null;
            /**
             * 播放的动画数据。
             */
            _this.animation = null;
            /**
             * 播放的动画剪辑。
             */
            _this.animationClip = null;
            /**
             * 是否允许播放。
             */
            _this._isPlaying = true;
            /**
             * 播放状态。
             * -1: start, 0: playing, 1: complete;
             */
            _this._playState = -1;
            /**
             * 帧率。
             */
            _this._frameRate = 0;
            /**
             * 总帧数。
             */
            _this._frameCount = 0;
            /**
             * 全局播放时间标记。
             */
            _this._playTimeStart = 0.0;
            /**
             * 本地播放时间。
             */
            _this._playTime = 0.0;
            /**
             * 帧插值进度。
             */
            _this._frameProgress = 0.0;
            _this._animationComponent = null;
            // TODO
            _this._channels = [];
            // TODO
            _this._retargetBoneIndices = [];
            _this._delta = [];
            _this._frameBuffer = null;
            _this._frameOffset = -1;
            _this._nextFrameOffset = -1;
            _this._frameOffsets = null;
            return _this;
        }
        AnimationState.prototype._onArriveAtFrame = function () {
        };
        AnimationState.prototype._onUpdateFrame = function () {
            var delta = this._delta;
            var result = this._animationComponent._skinnedMeshRenderer._skeletonMatrixData;
            var boneBlendLayers = this._animationComponent._boneBlendLayers;
            var frameBuffer = this._frameBuffer;
            for (var i = 0, l = this._retargetBoneIndices.length; i < l; ++i) {
                var boneIndex = this._retargetBoneIndices[i];
                if (boneIndex < 0) {
                    continue;
                }
                var poseBoneOffsetA = i * 7;
                var poseBoneOffsetC = boneIndex * 8;
                var frameOffset = this._frameOffset + poseBoneOffsetA;
                var boneBlendNode = boneBlendLayers[boneIndex];
                if (boneBlendNode.update(this)) {
                    for (var j = 0; j < 7; ++j) {
                        result[poseBoneOffsetC + j] = frameBuffer[frameOffset + j];
                    }
                    result[poseBoneOffsetC + 7] = 1.0;
                }
            }
        };
        AnimationState.prototype._onUpdateTranslation = function (channel) {
            var isInterpolation = false;
            var frameIndex = 0;
            var inputBuffer = channel.inputBuffer;
            var outputBuffer = channel.outputBuffer;
            var transform = channel.component;
            if (this._playTime <= inputBuffer[0]) {
            }
            else if (this._playTime >= inputBuffer[inputBuffer.length - 1]) {
                frameIndex = inputBuffer.length - 1;
            }
            else {
                isInterpolation = channel.glTFSampler.interpolation !== "STEP";
                for (var i = 0, l = inputBuffer.length; i < l; ++i) {
                    if (this._playTime < inputBuffer[i]) {
                        break;
                    }
                    frameIndex = i;
                }
            }
            var offset = frameIndex * 3;
            var x = outputBuffer[offset];
            var y = outputBuffer[offset + 1];
            var z = outputBuffer[offset + 2];
            if (isInterpolation) {
                var nextIndex = offset + 3;
                var progress = (this._playTime - inputBuffer[frameIndex]) / (inputBuffer[frameIndex + 1] - inputBuffer[frameIndex]);
                transform.setLocalPosition(x + (outputBuffer[nextIndex] - x) * progress, y + (outputBuffer[nextIndex + 1] - y) * progress, z + (outputBuffer[nextIndex + 2] - z) * progress);
            }
            else {
                transform.setLocalPosition(x, y, z);
            }
        };
        AnimationState.prototype._onUpdateRotation = function (channel) {
            var isInterpolation = false;
            var frameIndex = 0;
            var inputBuffer = channel.inputBuffer;
            var outputBuffer = channel.outputBuffer;
            var transform = channel.component;
            if (this._playTime <= inputBuffer[0]) {
            }
            else if (this._playTime >= inputBuffer[inputBuffer.length - 1]) {
                frameIndex = inputBuffer.length - 1;
            }
            else {
                isInterpolation = channel.glTFSampler.interpolation !== "STEP";
                for (var i = 0, l = inputBuffer.length; i < l; ++i) {
                    if (this._playTime < inputBuffer[i]) {
                        break;
                    }
                    frameIndex = i;
                }
            }
            var offset = frameIndex * 4;
            var x = outputBuffer[offset];
            var y = outputBuffer[offset + 1];
            var z = outputBuffer[offset + 2];
            var w = outputBuffer[offset + 3];
            if (isInterpolation) {
                var nextIndex = offset + 4;
                var progress = (this._playTime - inputBuffer[frameIndex]) / (inputBuffer[frameIndex + 1] - inputBuffer[frameIndex]);
                transform.setLocalRotation(x + (outputBuffer[nextIndex] - x) * progress, y + (outputBuffer[nextIndex + 1] - y) * progress, z + (outputBuffer[nextIndex + 2] - z) * progress, w + (outputBuffer[nextIndex + 3] - w) * progress);
            }
            else {
                transform.setLocalRotation(x, y, z, w);
            }
        };
        AnimationState.prototype._onUpdateScale = function (channel) {
            var isInterpolation = false;
            var frameIndex = 0;
            var inputBuffer = channel.inputBuffer;
            var outputBuffer = channel.outputBuffer;
            var transform = channel.component;
            if (this._playTime <= inputBuffer[0]) {
            }
            else if (this._playTime >= inputBuffer[inputBuffer.length - 1]) {
                frameIndex = inputBuffer.length - 1;
            }
            else {
                isInterpolation = channel.glTFSampler.interpolation !== "STEP";
                for (var i = 0, l = inputBuffer.length; i < l; ++i) {
                    if (this._playTime < inputBuffer[i]) {
                        break;
                    }
                    frameIndex = i;
                }
            }
            var offset = frameIndex * 3;
            var x = outputBuffer[offset];
            var y = outputBuffer[offset + 1];
            var z = outputBuffer[offset + 2];
            if (isInterpolation) {
                var nextIndex = offset + 3;
                var progress = (this._playTime - inputBuffer[frameIndex]) / (inputBuffer[frameIndex + 1] - inputBuffer[frameIndex]);
                transform.setLocalScale(x + (outputBuffer[nextIndex] - x) * progress, y + (outputBuffer[nextIndex + 1] - y) * progress, z + (outputBuffer[nextIndex + 2] - z) * progress);
            }
            else {
                transform.setLocalScale(x, y, z);
            }
        };
        AnimationState.prototype._onUpdateActive = function (channel) {
            var frameIndex = 0;
            var inputBuffer = channel.inputBuffer;
            var outputBuffer = channel.outputBuffer;
            var transform = channel.component;
            if (this._playTime <= inputBuffer[0]) {
            }
            else if (this._playTime >= inputBuffer[inputBuffer.length - 1]) {
                frameIndex = inputBuffer.length - 1;
            }
            else {
                for (var i = 0, l = inputBuffer.length; i < l; ++i) {
                    if (this._playTime < inputBuffer[i]) {
                        break;
                    }
                    frameIndex = i;
                }
            }
            var offset = frameIndex * 3;
            transform.gameObject.activeSelf = outputBuffer[offset] !== 0;
        };
        /**
         *
         */
        AnimationState.prototype.initialize = function (animationComponent, animationAsset, animationClip) {
            var globalTime = paper.Time.time;
            var assetConfig = animationAsset.config;
            //
            this.animationAsset = animationAsset;
            this.animationClip = animationClip;
            this.animation = assetConfig.animations[0]; // TODO 动画数据暂不合并。
            //
            var paperAnimation = this.animation.extensions.paper;
            var dataAccessor = this.animationAsset.getAccessor(paperAnimation.data);
            //
            this._frameRate = paperAnimation.frameRate;
            this._frameCount = paperAnimation.frameCount;
            this._fadeTimeStart = globalTime;
            this._playTimeStart = globalTime;
            this._animationComponent = animationComponent;
            //
            var skinnedMeshRenderer = this._animationComponent._skinnedMeshRenderer;
            if (skinnedMeshRenderer) {
                // Retargeting.
                var skeletonRetarget = skinnedMeshRenderer._retargetBoneNames || skinnedMeshRenderer.bones.map(function (bone) { return bone.gameObject.name; });
                var animationRetarget = paperAnimation.retarget ? paperAnimation.retarget.joints : paperAnimation.joints;
                //
                this._delta.length = skeletonRetarget.length * 7;
                this._frameBuffer = this.animationAsset.createTypeArrayFromAccessor(dataAccessor);
                this._frameOffsets = this.animation.extensions.paper.frames;
                for (var _i = 0, animationRetarget_1 = animationRetarget; _i < animationRetarget_1.length; _i++) {
                    var boneName = animationRetarget_1[_i];
                    var index = skeletonRetarget.indexOf(boneName);
                    this._retargetBoneIndices.push(index);
                }
                // if (assetConfig.extensions.paper.skeletons) {
                //     for (const skeleton of assetConfig.extensions.paper.skeletons) {
                //         if (skeleton.name === this.animationAsset.name) {
                //             this._skeleton = skeleton;
                //             if (this._skeleton && !this._skeleton.do) {
                //                 const tPose = this._skeleton.tPose;
                //                 let iA = 0;
                //                 let iB = 0;
                //                 for (let i = 0; i < skeletonRetarget.length; i++) {
                //                     helpQuaternionA.x = tPose[iA++];
                //                     helpQuaternionA.y = tPose[iA++];
                //                     helpQuaternionA.z = tPose[iA++];
                //                     helpQuaternionA.w = tPose[iA++];
                //                     helpVec3A.x = tPose[iA++];
                //                     helpVec3A.y = tPose[iA++];
                //                     helpVec3A.z = tPose[iA++];
                //                     Quaternion.inverse(helpQuaternionA);
                //                     Quaternion.transformVector3(helpQuaternionA, helpVec3A, helpVec3A);
                //                     helpVec3A.x *= -1;
                //                     helpVec3A.y *= -1;
                //                     helpVec3A.z *= -1;
                //                     tPose[iB++] = helpQuaternionA.x;
                //                     tPose[iB++] = helpQuaternionA.y;
                //                     tPose[iB++] = helpQuaternionA.z;
                //                     tPose[iB++] = helpQuaternionA.w;
                //                     tPose[iB++] = helpVec3A.x;
                //                     tPose[iB++] = helpVec3A.y;
                //                     tPose[iB++] = helpVec3A.z;
                //                 }
                //             }
                //         }
                //     }
                // }
            }
            else if (this.animation.channels) {
                var rootGameObject = this._animationComponent.gameObject;
                var transforms = rootGameObject.transform.getAllChildren();
                var gameObjects = {};
                gameObjects[rootGameObject.name] = rootGameObject;
                for (var _a = 0, transforms_1 = transforms; _a < transforms_1.length; _a++) {
                    var gameObject = transforms_1[_a].gameObject;
                    gameObjects[gameObject.name] = gameObject;
                }
                for (var _b = 0, _c = this.animation.channels; _b < _c.length; _b++) {
                    var glTFChannel = _c[_b];
                    var node = this.animationAsset.getNode(glTFChannel.target.node || 0);
                    var gameObject = gameObjects[node.name];
                    if (!gameObject) {
                        continue;
                    }
                    var channel = new AnimationChannel();
                    channel.glTFChannel = glTFChannel;
                    channel.glTFSampler = this.animation.samplers[glTFChannel.sampler];
                    channel.gameObject = gameObject;
                    channel.component = gameObject.transform; // TODO 更多组件
                    channel.inputBuffer = this.animationAsset.createTypeArrayFromAccessor(this.animationAsset.getAccessor(channel.glTFSampler.input));
                    channel.outputBuffer = this.animationAsset.createTypeArrayFromAccessor(this.animationAsset.getAccessor(channel.glTFSampler.output));
                    switch (channel.glTFChannel.target.path) {
                        case "translation":
                            channel.update = this._onUpdateTranslation.bind(this);
                            break;
                        case "rotation":
                            channel.update = this._onUpdateRotation.bind(this);
                            break;
                        case "scale":
                            channel.update = this._onUpdateScale.bind(this);
                            break;
                        case "weights":
                            // TODO
                            break;
                        case "custom":
                            switch (channel.glTFChannel.extensions.paper.type) {
                                case "paper.GameObject":
                                    switch (channel.glTFChannel.extensions.paper.property) {
                                        case "activeSelf":
                                            channel.update = this._onUpdateActive.bind(this);
                                            break;
                                    }
                                    break;
                            }
                            break;
                        default:
                            console.warn("Unknown animation channel.", channel.glTFChannel.target.path);
                            break;
                    }
                    this._channels.push(channel);
                }
            }
        };
        /**
         *
         */
        AnimationState.prototype.update = function (globalTime) {
            _super.prototype.update.call(this, globalTime);
            var prevPlayTimes = this.currentPlayTimes;
            var prevPlayState = this._playState;
            var timeScale = this.timeScale * this._animationComponent.timeScale;
            var r = timeScale === 0.0 ? 0.0 : 1.0 / timeScale;
            var position = this.animationClip.position;
            var duration = this.animationClip.duration;
            var totalTime = this.playTimes * duration;
            var localPlayTime = (globalTime - this._playTimeStart) * r;
            var currentTime = 0.0;
            if (this.playTimes > 0 && (localPlayTime >= totalTime || localPlayTime <= 0.0)) {
                if (this._playState <= 0 && this._isPlaying) {
                    this._playState = 1;
                }
                this.currentPlayTimes = this.playTimes;
                if (localPlayTime >= totalTime) {
                    currentTime = duration + 0.000001; // Precision problem.
                }
                else {
                    currentTime = 0.0;
                }
            }
            else {
                if (this._playState !== 0 && this._isPlaying) {
                    this._playState = 0;
                }
                if (localPlayTime < 0.0) {
                    localPlayTime = -localPlayTime;
                    this.currentPlayTimes = Math.floor(localPlayTime / duration);
                    currentTime = duration - (localPlayTime % duration);
                }
                else {
                    this.currentPlayTimes = Math.floor(localPlayTime / duration);
                    currentTime = localPlayTime % duration;
                }
            }
            currentTime += position;
            this._playTime = currentTime;
            if (this._channels.length > 0) {
                for (var _i = 0, _a = this._channels; _i < _a.length; _i++) {
                    var channel = _a[_i];
                    if (channel.update) {
                        channel.update(channel);
                    }
                }
            }
            else if (this._animationComponent._skinnedMeshRenderer) {
                // Clear frame flag when timeline start or loopComplete.
                if ((prevPlayState < 0 && this._playState !== prevPlayState) ||
                    (this._playState <= 0 && this.currentPlayTimes !== prevPlayTimes)) {
                    this._frameOffset = -1;
                }
                if (this._frameCount > 0) {
                    var frameIndexF = this._playTime * this._frameRate;
                    var frameIndex = Math.min(Math.floor(frameIndexF), this._frameCount - 1);
                    var frameOffset = this._frameOffsets[frameIndex];
                    if (this._frameOffset !== frameOffset) {
                        this._frameOffset = frameOffset;
                        this._nextFrameOffset = this._frameOffsets[frameIndex + 1];
                        this._onArriveAtFrame();
                    }
                    this._frameProgress = frameIndexF - frameIndex;
                    this._onUpdateFrame();
                }
                else if (this._frameOffset < 0) {
                    this._frameOffset = this._frameOffsets[0];
                    this._nextFrameOffset = -1;
                    this._onArriveAtFrame();
                }
            }
        };
        AnimationState.prototype.fateOut = function () {
            this._fadeState = 1;
            this._subFadeState = 1;
        };
        return AnimationState;
    }(BlendNode));
    egret3d.AnimationState = AnimationState;
    __reflect(AnimationState.prototype, "egret3d.AnimationState");
    /**
     * 动画组件。
     */
    var Animation = (function (_super) {
        __extends(Animation, _super);
        function Animation() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @private
             */
            _this.autoPlay = false;
            /**
             * 动画速度。
             */
            _this.timeScale = 1.0;
            /**
             * 动画数据列表。
             */
            _this._animations = [];
            /**
             * 骨骼姿势列表。
             *
             */
            _this._boneBlendLayers = [];
            /**
             * 混合节点列表。
             */
            _this._blendNodes = [];
            /**
             * 最后一个播放的动画状态。
             * 当进行动画混合时，该值通常没有任何意义。
             */
            _this._lastAnimationState = null;
            /**
             *
             */
            _this._skinnedMeshRenderer = null;
            return _this;
        }
        /**
         * @inheritDoc
         */
        Animation.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            if (!this._skinnedMeshRenderer) {
                this._skinnedMeshRenderer = this.gameObject.getComponentsInChildren(egret3d.SkinnedMeshRenderer)[0];
                if (this._skinnedMeshRenderer) {
                    for (var _i = 0, _a = this._skinnedMeshRenderer.bones; _i < _a.length; _i++) {
                        var bone = _a[_i];
                        var boneBlendLayer = new BoneBlendLayer();
                        this._boneBlendLayers.push(boneBlendLayer);
                    }
                }
            }
        };
        /**
         *
         */
        Animation.prototype.update = function (globalTime) {
            var blendNodes = this._blendNodes;
            var blendNodeCount = blendNodes.length;
            if (blendNodeCount === 1) {
                var blendNode = blendNodes[0];
                if (blendNode._fadeState > 0 && blendNode._subFadeState > 0) {
                    blendNodes.length = 0;
                    if (this._lastAnimationState === blendNode) {
                        this._lastAnimationState = null;
                    }
                }
                else {
                    blendNode.update(globalTime);
                }
                // if (this._lastAnimationState) {
                //     const skeleton = this._lastAnimationState._skeleton;
                //     if (skeleton) {
                //         const result = this._skinnedMeshRenderer._skeletonMatrixData;
                //         const bones = this._skinnedMeshRenderer.bones;
                //         let iA = 0;
                //         let iB = 0;
                //         for (let i = 0, l = this._boneBlendLayers.length; i < l; ++i) {
                //             const boneBlendLayer = this._boneBlendLayers[i];
                //             boneBlendLayer.dirty = false;
                //             if (i < bones.length) {
                //                 const bone = bones[i];
                //                 const dir = helpVec3A;
                //                 const dirtran = helpVec3B;
                //                 helpQuaternionB.x = skeleton.tPose[iA++];
                //                 helpQuaternionB.y = skeleton.tPose[iA++];
                //                 helpQuaternionB.z = skeleton.tPose[iA++];
                //                 helpQuaternionB.w = skeleton.tPose[iA++];
                //                 dir.x = skeleton.tPose[iA++];
                //                 dir.x = skeleton.tPose[iA++];
                //                 dir.y = skeleton.tPose[iA++];
                //                 helpQuaternionA.x = result[iB];
                //                 helpQuaternionA.y = result[iB];
                //                 helpQuaternionA.z = result[iB];
                //                 helpQuaternionA.w = result[iB];
                //                 Quaternion.transformVector3(helpQuaternionA, dir, dirtran);
                //                 dirtran.x += result[iB];
                //                 dirtran.y += result[iB];
                //                 dirtran.z += result[iB];
                //                 iB++;
                //                 Quaternion.multiply(helpQuaternionA, helpQuaternionB, helpQuaternionC);
                //                 const position = helpVec3A;
                //                 const rotation = helpQuaternionA;
                //                 Vector3.add(bone.getPosition(), dirtran, position);
                //                 Quaternion.multiply(helpQuaternionC, bone.getRotation(), rotation);
                //                 bone.setPosition(position);
                //                 bone.setRotation(rotation);
                //             }
                //         }
                //     }
                // }
            }
            else if (blendNodeCount > 1) {
                for (var i = 0, r = 0; i < blendNodeCount; ++i) {
                    var blendNode = blendNodes[i];
                    if (blendNode._fadeState > 0 && blendNode._subFadeState > 0) {
                        r++;
                        if (this._lastAnimationState === blendNode) {
                            this._lastAnimationState = null;
                        }
                    }
                    else {
                        if (r > 0) {
                            blendNodes[i - r] = blendNode;
                        }
                        blendNode.update(globalTime);
                    }
                    if (i === blendNodeCount - 1 && r > 0) {
                        blendNodes.length -= r;
                        if (this._lastAnimationState === null && blendNodes.length > 0) {
                            var blendNode_1 = blendNodes[blendNodes.length - 1];
                            if (blendNode_1 instanceof AnimationState) {
                                this._lastAnimationState = blendNode_1;
                            }
                        }
                    }
                }
            }
            else {
            }
        };
        Animation.prototype.fadeIn = function (animationName, fadeTime, playTimes, layer, additive) {
            if (animationName === void 0) { animationName = null; }
            if (playTimes === void 0) { playTimes = -1; }
            if (layer === void 0) { layer = 0; }
            if (additive === void 0) { additive = false; }
            var animationAsset = null;
            var animationClip = null;
            for (var _i = 0, _a = this._animations; _i < _a.length; _i++) {
                var animation = _a[_i];
                animationAsset = animation;
                if (animationName) {
                    animationClip = animation.getAnimationClip(animationName);
                    if (animationClip !== null) {
                        break;
                    }
                }
                else {
                    animationClip = animation.getAnimationClip("");
                    break;
                }
            }
            if (!animationAsset || !animationClip) {
                return null;
            }
            for (var _b = 0, _c = this._blendNodes; _b < _c.length; _b++) {
                var blendNode = _c[_b];
                if ((!blendNode.parent && blendNode.layer === layer)) {
                    blendNode.fadeOut(fadeTime);
                }
            }
            var animationState = new AnimationState();
            animationState.initialize(this, animationAsset, animationClip);
            animationState.additive = additive;
            animationState.fadeTime = fadeTime;
            animationState.playTimes = playTimes < 0 ? (animationClip.playTimes || 0) : playTimes;
            // TODO sort by layer and blend tree.
            this._blendNodes.push(animationState);
            this._lastAnimationState = animationState;
            return animationState;
        };
        Animation.prototype.play = function (animationName, playTimes) {
            if (animationName === void 0) { animationName = null; }
            if (playTimes === void 0) { playTimes = -1; }
            return this.fadeIn(animationName, 0.0, playTimes);
        };
        Object.defineProperty(Animation.prototype, "lastAnimationnName", {
            get: function () {
                return this._lastAnimationState ? this._lastAnimationState.animationClip.name : "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation.prototype, "animations", {
            get: function () {
                return this._animations;
            },
            /**
             * 动画数据列表。
             */
            set: function (animations) {
                for (var i = 0, l = animations.length; i < l; i++) {
                    this._animations[i] = animations[i];
                }
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            paper.serializedField
        ], Animation.prototype, "autoPlay", void 0);
        __decorate([
            paper.serializedField
        ], Animation.prototype, "_animations", void 0);
        return Animation;
    }(paper.BaseComponent));
    egret3d.Animation = Animation;
    __reflect(Animation.prototype, "egret3d.Animation");
    /**
     * @private
     */
    var AnimationSystem = (function (_super) {
        __extends(AnimationSystem, _super);
        function AnimationSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this._interests = [
                {
                    componentClass: Animation,
                    listeners: [
                        {
                            type: "__enabled__" /* Enabled */,
                            listener: function (component) {
                                if (component.autoPlay) {
                                    component.play();
                                }
                            }
                        }
                    ]
                }
            ];
            return _this;
        }
        /**
         * @inheritDoc
         */
        AnimationSystem.prototype._onCreateComponent = function (component) {
            if (!_super.prototype._onCreateComponent.call(this, component)) {
                return false;
            }
            if (component.autoPlay) {
                component.play();
            }
            return true;
        };
        /**
         * @inheritDoc
         */
        AnimationSystem.prototype.update = function () {
            var globalTime = paper.Time.time;
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                component.update(globalTime);
            }
        };
        return AnimationSystem;
    }(paper.BaseSystem));
    egret3d.AnimationSystem = AnimationSystem;
    __reflect(AnimationSystem.prototype, "egret3d.AnimationSystem");
})(egret3d || (egret3d = {}));
// namespace paper {
//     /**
//      * @private
//      * 动画混合模式。
//      */
//     export const enum BlendType {
//         E1D,
//         E2DSD,
//         E2DFD,
//         E2DFC,
//         ED,
//     }
//     /**
//      * @private
//      * 动画节点数据基类。
//      */
//     export abstract class BaseAnimationNodeModel extends SerializableObject {
//         /**
//          * 播放速度。
//          */
//         @SerializedField
//         public timeScale: number = 1.0;
//         /**
//          * 处于混合空间的水平位置。
//          */
//         @SerializedField
//         public positionX: number = 0.0;
//         /**
//          * 处于混合空间的垂直位置。
//          */
//         @SerializedField
//         public positionY: number = 0.0;
//     }
//     /**
//      * @private
//      * 动画节点数据。
//      */
//     export class AnimationNodeModel extends BaseAnimationNodeModel {
//         // /**
//         //  * 动画剪辑数据。
//         //  */
//         // @SerializedField
//         // public animation: AnimationClipNew | null = null;
//     }
//     /**
//      * @private
//      * 混合节点数据。
//      */
//     export class AnimationBlendNodeModel extends BaseAnimationNodeModel {
//         /**
//          * 混合模式。
//          */
//         @SerializedField
//         public blendType: BlendType = BlendType.E1D;
//         /**
//          * 动画节点列表。
//          */
//         @SerializedField
//         public readonly children: BaseAnimationNodeModel[] = [];
//         /**
//          * 混合空间的水平混合参数。
//          */
//         @SerializedField
//         public parameterX: Readonly<StateVariable> | null = null;
//         /**
//          * 混合空间的垂直混合参数。
//          */
//         @SerializedField
//         public parameterY: Readonly<StateVariable> | null = null;
//     }
//     /**
//      * @private
//      * 状态变量类型。
//      */
//     export const enum StateVariableType {
//         Bool,
//         Int,
//         Float,
//         Trigger,
//     }
//     /**
//      * @private
//      * 状态判断类型。
//      */
//     export const enum StateConditionType {
//         Greater,
//         Less,
//         Equals,
//         NotEqual,
//     }
//     /**
//      * @private
//      * 状态变量。
//      */
//     export class StateVariable extends SerializableObject {
//         /**
//          * 变量类型。
//          */
//         @SerializedField
//         public readonly type: StateVariableType;
//         /**
//          * 变量名。
//          */
//         @SerializedField
//         public readonly key: string;
//         /**
//          * 变量值。
//          */
//         @SerializedField
//         public value: boolean | number;
//         public constructor(
//             type: StateVariableType = StateVariableType.Bool,
//             key: string = "",
//             value: boolean | number = false,
//         ) {
//             super();
//             this.type = type;
//             this.key = key;
//             this.value = value;
//         }
//     }
//     /**
//      * @private
//      * 状态改变条件。
//      */
//     export class StateCondition extends SerializableObject {
//         /**
//          * 判断类型。
//          */
//         @SerializedField
//         public type: StateConditionType = StateConditionType.Equals;
//         /**
//          * 判断值。
//          */
//         @SerializedField
//         public value: boolean | number = false;
//         /**
//          * 变量。
//          */
//         @SerializedField
//         public variable: Readonly<StateVariable> = null as any; //
//         public check(): boolean {
//             switch (this.type) {
//                 case StateConditionType.Equals:
//                     return this.variable.value === this.value;
//                 case StateConditionType.NotEqual:
//                     return this.variable.value !== this.value;
//                 case StateConditionType.Less:
//                     return this.variable.value < this.value;
//                 case StateConditionType.Greater:
//                     return this.variable.value > this.value;
//             }
//         }
//     }
//     /**
//      * @private
//      * 状态改变。
//      */
//     export class StateTransition extends SerializableObject {
//         /**
//          * 该条件起效，其他 solo 为 false 的条件都不起作用。
//          */
//         @SerializedField
//         public solo: boolean = false;
//         /**
//          * 该条件禁用。
//          */
//         @SerializedField
//         public mute: boolean = false;
//         /**
//          * 帮助描述。
//          */
//         @SerializedField
//         public info: string = "";
//         /**
//          * 状态改变条件列表。
//          */
//         @SerializedField
//         public readonly conditions: StateCondition[] = [];
//         /**
//          * 要改变的状态。
//          */
//         @SerializedField
//         public target: StateModel = null as any;
//         public check(): boolean {
//             for (const condition of this.conditions) {
//                 if (!condition.check()) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//     }
//     /**
//      * @private
//      * 动画状态改变。
//      */
//     export class AnimationStateTransition extends StateTransition {
//         /**
//          * 当状态改变条件成立或为空时，是否等当前动画状态播放完毕后改变状态。
//          */
//         @SerializedField
//         public changeAfterComplete: boolean = false;
//         /**
//          * 淡出动画所需要的时间。（以秒为单位）
//          */
//         @SerializedField
//         public fadeOutTime: number = 0.3;
//         /**
//          * 淡入动画所需要的时间。（以秒为单位）
//          */
//         @SerializedField
//         public fadeInTime: number = 0.3;
//         /**
//          * 淡入动画开始播放的进度。[0.0 ~ 1.0]（%）
//          */
//         @SerializedField
//         public progress: number = 0.0;
//     }
//     /**
//      * @private
//      * 状态机状态数据。
//      */
//     export class StateModel extends SerializableObject {
//         /**
//          * 状态名称。
//          */
//         @SerializedField
//         public name: string = "";
//         /**
//          * 状态改变列表。
//          */
//         @SerializedField
//         public readonly transitions: StateTransition[] = [];
//         /**
//          * 父状态机。
//          */
//         @SerializedField
//         public parent: StateMachineModel | null = null;
//         public constructor(name: string = "", parent: StateMachineModel | null = null) {
//             super();
//             this.name = name;
//             this.parent = parent;
//         }
//     }
//     /**
//      * @private
//      * 状态机动画状态数据。
//      */
//     export class AnimationStateModel extends StateModel {
//         /**
//          * 动画数据。
//          */
//         @SerializedField
//         public animation: AnimationNodeModel | AnimationBlendNodeModel | null = null;
//     }
//     /**
//      * @private
//      * 状态机数据。
//      */
//     export class StateMachineModel extends StateModel {
//         /**
//          * 进入状态。
//          */
//         @SerializedField
//         public readonly entry: StateModel = new StateModel("entry", this);
//         /**
//          * 未知状态。
//          */
//         @SerializedField
//         public readonly any: StateModel = new StateModel("any", this);
//         /**
//          * 退出状态。
//          */
//         @SerializedField
//         public readonly exit: Readonly<StateModel> = new StateModel("exit", this);
//         /**
//          * 状态列表。
//          */
//         @SerializedField
//         public readonly states: StateModel[] = [];
//         /**
//          * 默认状态。
//          */
//         @SerializedField
//         public readonly default: StateModel | null = null;
//         /**
//          * 默认改变。
//          */
//         @SerializedField
//         public readonly defaultTransition: StateTransition | null = null;
//     }
//     /**
//      * @private
//      * 状态机数据资源。
//      */
//     export class StateMachineAsset extends Asset {
//         /**
//          * 状态机列表。
//          */
//         @SerializedField
//         public readonly machines: StateMachineModel[] = [];
//         /**
//          * 变量列表。
//          */
//         @SerializedField
//         public readonly variables: StateVariable[] = [];
//         /**
//          * @override
//          */
//         public caclByteLength(): number {
//             return 0;
//         }
//         /**
//          * @override
//          */
//         public dispose(): void {
//         }
//     }
//     // /**
//     //  * @private
//     //  */
//     // export class StateMachineOverrideAsset extends StateMachineAsset {
//     //     public readonly animations: { [key: string]: string } = {};
//     //     public source: StateMachineOverrideAsset | null;
//     //     /**
//     //      * 
//     //      */
//     //     public caclByteLength(): number {
//     //         return 0;
//     //     }
//     //     /**
//     //      * 
//     //      */
//     //     public dispose(): void {
//     //         super.dispose();
//     //     }
//     // }
//     /**
//      * @private
//      * 状态实例。
//      */
//     export class NormalState {
//         public model: StateModel;
//         public parent: StateMachine | null = null;
//     }
//     /**
//      * 状态机实例。
//      */
//     export class StateMachine extends NormalState {
//         /**
//          * 状态列表。
//          */
//         public readonly states: NormalState[] = [];
//         /**
//          * 当前状态。
//          */
//         private _state: StateModel | null = null;
//         /**
//          * 进入指定状态。
//          */
//         private _enter(state: StateModel): void {
//         }
//         /**
//          * 执行指定状态。
//          */
//         private _execute(state: StateModel): void {
//             for (const transition of state.transitions) {
//                 if (transition.check()) {
//                     this._exit(state);
//                     this._state = null;
//                     this._enter(this._state);
//                     break;
//                 }
//             }
//         }
//         /**
//          * 退出指定状态。
//          */
//         private _exit(state: StateModel): void {
//         }
//         public update(): void {
//             const model = this.model as StateMachineModel;
//             if (this._state === null) {
//                 this._state = model.entry;
//                 this._enter(this._state);
//             }
//             else {
//             }
//             this._execute(this._state);
//         }
//     }
//     /**
//      * 状态机组件。
//      */
//     export class StateMachineComponent extends paper.BaseComponent {
//         /**
//          *  
//          */
//         public readonly componentType = "";
//         /**
//          * 状态机列表。
//          */
//         public readonly stateMachines: StateMachine[] = [];
//         /**
//          * 变量列表。
//          */
//         public readonly stateVariables: StateVariable[] = [];
//         /**
//          * 状态机数据。
//          */
//         private _model: StateMachineAsset | null = null;
//         /**
//          * @override
//          */
//         public update() {
//             for (const stateMachine of this.stateMachines) {
//                 stateMachine.update();
//             }
//         }
//         public setValue(key: string, value: boolean | number) {
//             for (const variable of this.stateVariables) {
//                 if (variable.key === key) {
//                     variable.value = value;
//                     break;
//                 }
//             }
//         }
//         @SerializedField
//         public get model() {
//             return this._model;
//         }
//         public set model(value: StateMachineAsset | null) {
//             if (this._model === value) {
//                 return;
//             }
//             this._model = value;
//         }
//     }
//     /**
//      * @private
//      */
//     export class StateMachineSystem extends paper.BaseSystem {
//         public interest: { [componentType: string]: paper.MemberListener[] } = {
//             "StateMachineComponent": []
//         };
//         public update() {
//             this._componentStore.forEach((component: StateMachineComponent) => {
//                 component.update();
//             });
//         }
//     }
// } 
var egret3d;
(function (egret3d) {
    var WEBGL_UNIFORM_TYPE;
    (function (WEBGL_UNIFORM_TYPE) {
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT_VEC2"] = 35667] = "INT_VEC2";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT_VEC3"] = 35668] = "INT_VEC3";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT_VEC4"] = 35669] = "INT_VEC4";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL"] = 35670] = "BOOL";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["SAMPLER_CUBE"] = 35680] = "SAMPLER_CUBE";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BYTE"] = 65535] = "BYTE";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["SHORT"] = 5122] = "SHORT";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT"] = 5124] = "INT";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
        WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT"] = 5126] = "FLOAT";
    })(WEBGL_UNIFORM_TYPE = egret3d.WEBGL_UNIFORM_TYPE || (egret3d.WEBGL_UNIFORM_TYPE = {}));
    var WebGLUniform = (function () {
        function WebGLUniform(gl, program, uniformData) {
            this.gl = gl;
            this.name = uniformData.name;
            this.type = uniformData.type;
            this.size = uniformData.size;
            this.location = gl.getUniformLocation(program, this.name);
        }
        return WebGLUniform;
    }());
    egret3d.WebGLUniform = WebGLUniform;
    __reflect(WebGLUniform.prototype, "egret3d.WebGLUniform");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * 渲染排序
     */
    var RenderQueue;
    (function (RenderQueue) {
        RenderQueue[RenderQueue["Background"] = 1000] = "Background";
        RenderQueue[RenderQueue["Geometry"] = 2000] = "Geometry";
        RenderQueue[RenderQueue["AlphaTest"] = 2450] = "AlphaTest";
        RenderQueue[RenderQueue["Transparent"] = 3000] = "Transparent";
        RenderQueue[RenderQueue["Overlay"] = 4000] = "Overlay";
    })(RenderQueue = egret3d.RenderQueue || (egret3d.RenderQueue = {}));
    /**
     * material asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 材质资源
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Material = (function (_super) {
        __extends(Material, _super);
        function Material() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             */
            _this.version = 0;
            _this._changeShaderMap = {};
            _this._renderQueue = -1;
            _this.$uniforms = {};
            _this._textureRef = [];
            return _this;
        }
        /**
         * dispose asset
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 释放资源。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Material.prototype.dispose = function () {
            delete this.$uniforms;
            this.version++;
        };
        /**
         * asset byte length
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 计算资源字节大小。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Material.prototype.caclByteLength = function () {
            var total = 0;
            if (this.shader) {
                total += this.shader.caclByteLength();
            }
            for (var k in this.$uniforms) {
                var type = this.$uniforms[k].type;
                var value = this.$uniforms[k].value;
                switch (type) {
                    case egret3d.UniformTypeEnum.Float:
                        total += 4;
                        break;
                    case egret3d.UniformTypeEnum.Floatv:
                        total += value.byteLength;
                        break;
                    case egret3d.UniformTypeEnum.Float4:
                        total += 16;
                        break;
                    case egret3d.UniformTypeEnum.Float4v:
                        total += value.byteLength;
                        break;
                    case egret3d.UniformTypeEnum.Float4x4:
                        total += 64;
                        break;
                    case egret3d.UniformTypeEnum.Float4x4v:
                        total += value.byteLength;
                        break;
                    case egret3d.UniformTypeEnum.Texture:
                        if (value) {
                            total += value.caclByteLength();
                        }
                        break;
                }
            }
            return total;
        };
        Material.prototype._setDefaultUniforms = function (shader) {
            if (!this.shader) {
                console.log("Shader error.", this);
                return;
            }
            for (var key in shader.defaultValue) {
                var uniform = shader.defaultValue[key];
                switch (uniform.type) {
                    case "Texture":
                        this.setTexture(key, uniform.value);
                        break;
                    case "Vector4":
                        this.setVector4(key, uniform.value);
                        break;
                    case "Range":
                        this.setFloat(key, uniform.value);
                        break;
                }
            }
        };
        /**
         * set shader
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 设置着色器，不保留原有数据。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Material.prototype.setShader = function (shader) {
            this.shader = shader;
            this.$uniforms = {};
            this._setDefaultUniforms(this.shader);
        };
        /**
          * get shader
          * @version paper 1.0
          * @platform Web
          * @language en_US
          */
        /**
         * 获取当前着色器。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Material.prototype.getShader = function () {
            return this.shader;
        };
        /**
         * change shader
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 更改着色器，保留原有数据。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Material.prototype.changeShader = function (shader) {
            var map = {};
            for (var key in this.$uniforms) {
                if (this.$uniforms[key]) {
                    map[key] = this.$uniforms[key];
                }
            }
            this.setShader(shader);
            for (var key in map) {
                if (this.$uniforms[key]) {
                    this.$uniforms[key] = map[key];
                }
            }
        };
        Object.defineProperty(Material.prototype, "renderQueue", {
            get: function () {
                if (!this.shader) {
                    console.log("Shader error.", this);
                    return this._renderQueue;
                }
                return this._renderQueue === -1 ? this.shader.renderQueue : this._renderQueue;
            },
            set: function (value) {
                this._renderQueue = value;
            },
            enumerable: true,
            configurable: true
        });
        Material.prototype.setFloat = function (_id, _number) {
            if (this.$uniforms[_id] !== undefined) {
                this.$uniforms[_id].value = _number;
            }
            else {
                this.$uniforms[_id] = { type: egret3d.UniformTypeEnum.Float, value: _number };
            }
            this.version++;
        };
        Material.prototype.setFloatv = function (_id, _numbers) {
            if (this.$uniforms[_id] !== undefined) {
                this.$uniforms[_id].value = _numbers;
            }
            else {
                this.$uniforms[_id] = { type: egret3d.UniformTypeEnum.Floatv, value: _numbers };
            }
            this.version++;
        };
        Material.prototype.setVector4 = function (_id, _vector4) {
            if (this.$uniforms[_id] !== undefined) {
                this.$uniforms[_id].value = _vector4;
            }
            else {
                this.$uniforms[_id] = { type: egret3d.UniformTypeEnum.Float4, value: _vector4 };
            }
            this.version++;
        };
        Material.prototype.setVector4v = function (_id, _vector4v) {
            if (this.$uniforms[_id] !== undefined) {
                this.$uniforms[_id].value = _vector4v;
            }
            else {
                this.$uniforms[_id] = { type: egret3d.UniformTypeEnum.Float4v, value: _vector4v };
            }
            this.version++;
        };
        Material.prototype.setMatrix = function (_id, _matrix) {
            if (this.$uniforms[_id] !== undefined) {
                this.$uniforms[_id].value = _matrix;
            }
            else {
                this.$uniforms[_id] = { type: egret3d.UniformTypeEnum.Float4x4, value: _matrix };
            }
            this.version++;
        };
        Material.prototype.setMatrixv = function (_id, _matrixv) {
            if (this.$uniforms[_id] !== undefined) {
                this.$uniforms[_id].value = _matrixv;
            }
            else {
                this.$uniforms[_id] = { type: egret3d.UniformTypeEnum.Float4x4v, value: _matrixv };
            }
            this.version++;
        };
        Material.prototype.setTexture = function (_id, _texture) {
            if (this.$uniforms[_id] !== undefined) {
                if (this.$uniforms[_id].value) {
                    var index = this._textureRef.indexOf(this.$uniforms[_id].value);
                    if (index > -1) {
                        this._textureRef.splice(index, 1);
                    }
                }
                this.$uniforms[_id].value = _texture;
            }
            else {
                this.$uniforms[_id] = { type: egret3d.UniformTypeEnum.Texture, value: _texture };
            }
            this.version++;
            if (_texture) {
                this._textureRef.push(_texture);
            }
        };
        // /**
        //  * 
        //  */
        // setTexture(_id: string, _texture: paper.Texture) {
        //     if (this.$uniforms[_id] != undefined) {
        //         this.$uniforms[_id].value = _texture;
        //     } else {
        //         this.$uniforms[_id] = {type: UniformTypeEnum.Texture, value: _texture};
        //     }
        //     this.version++;
        // }
        /**
         *
         */
        Material.prototype.$parse = function (json) {
            var shaderName = json["shader"];
            this.setShader(paper.Asset.find(shaderName));
            var mapUniform = json["mapUniform"];
            for (var i in mapUniform) {
                var jsonChild = mapUniform[i];
                var _uniformType = jsonChild["type"];
                switch (_uniformType) {
                    case egret3d.UniformTypeEnum.Texture:
                        var _value = jsonChild["value"];
                        var _texture = paper.Asset.find(egret3d.utils.combinePath(egret3d.utils.getPathByUrl(this.url) + "/", _value));
                        if (!_texture) {
                            _texture = egret3d.DefaultTextures.GRID;
                        }
                        this.setTexture(i, _texture);
                        break;
                    case egret3d.UniformTypeEnum.Float:
                        var __value = jsonChild["value"];
                        this.setFloat(i, parseFloat(__value));
                        break;
                    case egret3d.UniformTypeEnum.Float4:
                        var tempValue = jsonChild["value"];
                        try {
                            var values = tempValue.match(egret3d.RegexpUtil.vector4Regexp);
                            if (values !== null) {
                                var _float4 = new egret3d.Vector4(parseFloat(values[1]), parseFloat(values[2]), parseFloat(values[3]), parseFloat(values[4]));
                                this.setVector4(i, _float4);
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }
                        break;
                    default:
                        console.log("map uniform type in material json <" + jsonChild["type"] + "> out of range（0-2）!");
                }
            }
        };
        /**
         * clone material
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 克隆材质资源。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Material.prototype.clone = function () {
            var mat = new Material(this.name);
            mat.setShader(this.shader);
            for (var i in this.$uniforms) {
                var data = this.$uniforms[i];
                var _uniformType = data.type;
                switch (_uniformType) {
                    case egret3d.UniformTypeEnum.Texture:
                        mat.setTexture(i, data.value);
                        break;
                    case egret3d.UniformTypeEnum.Float:
                        mat.setFloat(i, data.value);
                        break;
                    case egret3d.UniformTypeEnum.Float4:
                        mat.setVector4(i, data.value);
                        break;
                    default:
                        break;
                }
            }
            return mat;
        };
        __decorate([
            paper.serializedField
        ], Material.prototype, "shader", void 0);
        __decorate([
            paper.serializedField,
            paper.deserializedIgnore
        ], Material.prototype, "_textureRef", void 0);
        return Material;
    }(paper.Asset));
    egret3d.Material = Material;
    __reflect(Material.prototype, "egret3d.Material");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var Charinfo = (function () {
        function Charinfo() {
        }
        Charinfo.caclByteLength = function () {
            return 36;
        };
        return Charinfo;
    }());
    egret3d.Charinfo = Charinfo;
    __reflect(Charinfo.prototype, "egret3d.Charinfo");
    /**
     * font asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 字体资源。
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Font = (function (_super) {
        __extends(Font, _super);
        function Font() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * dispose asset
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 释放资源。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Font.prototype.dispose = function () {
            // if (this.texture) {
            //     this.texture.unuse(true);
            // }
            delete this.cmap;
        };
        /**
         * asset byte length
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 计算资源字节大小。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Font.prototype.caclByteLength = function () {
            var total = 0;
            for (var k in this.cmap) {
                total += egret3d.utils.caclStringByteLength(k);
                total += Charinfo.caclByteLength();
            }
            return total;
        };
        Object.defineProperty(Font.prototype, "texture", {
            /**
             * font texture
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 字体材质。
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            get: function () {
                return this._texture;
            },
            /**
             * font texture
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 字体材质。
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            set: function (value) {
                // if (this._texture != null) {
                //     this._texture.unuse();
                // }
                this._texture = value;
                // this._texture.use();
            },
            enumerable: true,
            configurable: true
        });
        /**
         *
         */
        Font.prototype.$parse = function (jsonStr) {
            var d1 = new Date().valueOf();
            var json = JSON.parse(jsonStr);
            // parse font info
            var font = json["font"];
            this.fontname = font[0];
            var picName = font[1];
            this.texture = paper.Asset.find(egret3d.utils.getPathByUrl(this.url) + "/" + picName);
            this.pointSize = font[2];
            this.padding = font[3];
            this.lineHeight = font[4];
            this.baseline = font[5];
            this.atlasWidth = font[6];
            this.atlasHeight = font[7];
            // parse char map
            this.cmap = {};
            var map = json["map"];
            for (var c in map) {
                var finfo = new Charinfo(); // ness
                this.cmap[c] = finfo;
                finfo.x = (map[c][0] - 0.5) / this.atlasWidth;
                finfo.y = (map[c][1] - 0.5) / this.atlasHeight;
                finfo.w = (map[c][2] + 1.0) / this.atlasWidth;
                finfo.h = (map[c][3] + 1.0) / this.atlasHeight;
                finfo.xSize = map[c][2];
                finfo.ySize = map[c][3];
                finfo.xOffset = map[c][4];
                finfo.yOffset = map[c][5];
                finfo.xAddvance = map[c][6];
            }
            map = null;
            json = null;
            var d2 = new Date().valueOf();
            var n = d2 - d1;
        };
        return Font;
    }(paper.Asset));
    egret3d.Font = Font;
    __reflect(Font.prototype, "egret3d.Font");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * uniform类型枚举
     */
    var UniformTypeEnum;
    (function (UniformTypeEnum) {
        UniformTypeEnum[UniformTypeEnum["Texture"] = 0] = "Texture";
        UniformTypeEnum[UniformTypeEnum["Float"] = 1] = "Float";
        UniformTypeEnum[UniformTypeEnum["Floatv"] = 2] = "Floatv";
        UniformTypeEnum[UniformTypeEnum["Float4"] = 3] = "Float4";
        UniformTypeEnum[UniformTypeEnum["Float4v"] = 4] = "Float4v";
        UniformTypeEnum[UniformTypeEnum["Float4x4"] = 5] = "Float4x4";
        UniformTypeEnum[UniformTypeEnum["Float4x4v"] = 6] = "Float4x4v";
    })(UniformTypeEnum = egret3d.UniformTypeEnum || (egret3d.UniformTypeEnum = {}));
    var ShowFaceStateEnum;
    (function (ShowFaceStateEnum) {
        ShowFaceStateEnum[ShowFaceStateEnum["ALL"] = 0] = "ALL";
        ShowFaceStateEnum[ShowFaceStateEnum["CCW"] = 1] = "CCW";
        ShowFaceStateEnum[ShowFaceStateEnum["CW"] = 2] = "CW";
    })(ShowFaceStateEnum = egret3d.ShowFaceStateEnum || (egret3d.ShowFaceStateEnum = {}));
    var DrawModeEnum;
    (function (DrawModeEnum) {
        DrawModeEnum[DrawModeEnum["VboTri"] = 0] = "VboTri";
        DrawModeEnum[DrawModeEnum["VboLine"] = 1] = "VboLine";
        DrawModeEnum[DrawModeEnum["EboTri"] = 2] = "EboTri";
        DrawModeEnum[DrawModeEnum["EboLine"] = 3] = "EboLine";
    })(DrawModeEnum = egret3d.DrawModeEnum || (egret3d.DrawModeEnum = {}));
    var BlendModeEnum;
    (function (BlendModeEnum) {
        BlendModeEnum[BlendModeEnum["Close"] = 0] = "Close";
        BlendModeEnum[BlendModeEnum["Blend"] = 1] = "Blend";
        BlendModeEnum[BlendModeEnum["Blend_PreMultiply"] = 2] = "Blend_PreMultiply";
        BlendModeEnum[BlendModeEnum["Add"] = 3] = "Add";
        BlendModeEnum[BlendModeEnum["Add_PreMultiply"] = 4] = "Add_PreMultiply";
    })(BlendModeEnum = egret3d.BlendModeEnum || (egret3d.BlendModeEnum = {}));
    var DrawPass = (function () {
        function DrawPass(vShaderInfo, fShaderInfo) {
            this.state_showface = ShowFaceStateEnum.CCW;
            this.state_zwrite = false;
            this.state_ztest = false;
            this.state_ztest_method = egret3d.WebGLKit.LEQUAL;
            this.state_blend = false;
            this.state_blendEquation = 0;
            this.state_blendSrcRGB = 0;
            this.state_blendDestRGB = 0;
            this.state_blendSrcAlpha = 0;
            this.state_blendDestALpha = 0;
            this.vShaderInfo = vShaderInfo;
            this.fShaderInfo = fShaderInfo;
        }
        DrawPass.prototype.setAlphaBlend = function (mode) {
            if (mode === BlendModeEnum.Add) {
                this.state_blend = true;
                this.state_blendEquation = egret3d.WebGLKit.FUNC_ADD;
                this.state_blendSrcRGB = egret3d.WebGLKit.SRC_ALPHA;
                this.state_blendDestRGB = egret3d.WebGLKit.ONE;
                this.state_blendSrcAlpha = egret3d.WebGLKit.SRC_ALPHA;
                this.state_blendDestALpha = egret3d.WebGLKit.ONE;
            }
            else if (mode === BlendModeEnum.Add_PreMultiply) {
                this.state_blend = true;
                this.state_blendEquation = egret3d.WebGLKit.FUNC_ADD;
                this.state_blendSrcRGB = egret3d.WebGLKit.ONE;
                this.state_blendDestRGB = egret3d.WebGLKit.ONE;
                this.state_blendSrcAlpha = egret3d.WebGLKit.ONE;
                this.state_blendDestALpha = egret3d.WebGLKit.ONE;
            }
            else if (mode === BlendModeEnum.Blend) {
                this.state_blend = true;
                this.state_blendEquation = egret3d.WebGLKit.FUNC_ADD;
                this.state_blendSrcRGB = egret3d.WebGLKit.SRC_ALPHA;
                this.state_blendDestRGB = egret3d.WebGLKit.ONE_MINUS_SRC_ALPHA;
                this.state_blendSrcAlpha = egret3d.WebGLKit.ONE;
                this.state_blendDestALpha = egret3d.WebGLKit.ONE_MINUS_SRC_ALPHA;
            }
            else if (mode === BlendModeEnum.Blend_PreMultiply) {
                this.state_blend = true;
                this.state_blendEquation = egret3d.WebGLKit.FUNC_ADD;
                this.state_blendSrcRGB = egret3d.WebGLKit.ONE;
                this.state_blendDestRGB = egret3d.WebGLKit.ONE_MINUS_SRC_ALPHA;
                this.state_blendSrcAlpha = egret3d.WebGLKit.ONE;
                this.state_blendDestALpha = egret3d.WebGLKit.ONE_MINUS_SRC_ALPHA;
            }
            else if (mode === BlendModeEnum.Close) {
                this.state_blend = false;
            }
        };
        return DrawPass;
    }());
    egret3d.DrawPass = DrawPass;
    __reflect(DrawPass.prototype, "egret3d.DrawPass");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var helpVec3 = new egret3d.Vector3();
    var helpVec3_2 = new egret3d.Vector3();
    var helpMat4 = new egret3d.Matrix();
    var helpQuat4 = new egret3d.Quaternion();
    var helpQuat4_2 = new egret3d.Quaternion();
    var helpVector = new egret3d.Vector3();
    var helpRotation = new egret3d.Quaternion();
    var helpUp = new egret3d.Vector3(0, 1, 0);
    var helpRight = new egret3d.Vector3(1, 0, 0);
    var helpFoward = new egret3d.Vector3(0, 0, 1);
    /**
     * Transform Class
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * Transform实例可以被添加到3D场景中，并持有一个GameObejct实例
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Transform = (function (_super) {
        __extends(Transform, _super);
        function Transform() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * children list
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 子物体列表
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.children = [];
            _this._dirtyAABB = true;
            _this._dirtyLocal = true;
            _this._dirtyWorld = true;
            /**
             * 世界矩阵的行列式，如果小于0，说明进行了反转
             *
             */
            _this._worldMatrixDeterminant = 0.0;
            _this.localMatrix = new egret3d.Matrix();
            _this.worldMatrix = new egret3d.Matrix();
            _this.localPosition = new egret3d.Vector3();
            _this.position = new egret3d.Vector3();
            _this.localRotation = new egret3d.Quaternion();
            _this.rotation = new egret3d.Quaternion();
            _this.localEulerAngles = new egret3d.Vector3();
            _this.eulerAngles = new egret3d.Vector3();
            _this.localScale = new egret3d.Vector3(1.0, 1.0, 1.0);
            _this.scale = new egret3d.Vector3(1.0, 1.0, 1.0);
            _this._aabb = null;
            _this._parent = null;
            return _this;
        }
        Transform.prototype._removeFromChildren = function (value) {
            var index = 0;
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child === value) {
                    this.children.splice(index, 1);
                    break;
                }
                index++;
            }
        };
        Transform.prototype._buildAABB = function () {
            var vertexPosition = new egret3d.Vector3();
            var minimum = new egret3d.Vector3();
            var maximum = new egret3d.Vector3();
            var filter = this.gameObject.getComponent(egret3d.MeshFilter);
            if (filter && filter.mesh) {
                egret3d.Vector3.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, minimum);
                egret3d.Vector3.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE, maximum);
                // MD Mesh
                // let meshdata: egret3d.MeshData = filter.mesh.data;
                // for (let i = 0; i < meshdata.vertexCount; i++) {
                //     const pos = meshdata.getPos(i);
                //     egret3d.Vector3.max(pos, maximum, maximum);
                //     egret3d.Vector3.min(pos, minimum, minimum);
                // }
                var subMeshIndex = 0;
                for (var _i = 0, _a = filter.mesh.glTFMesh.primitives; _i < _a.length; _i++) {
                    var _primitive = _a[_i];
                    var vertexCount = filter.mesh.getVertexCount(subMeshIndex);
                    for (var i = 0; i < vertexCount; ++i) {
                        filter.mesh.getVertexPosition(i, subMeshIndex, vertexPosition);
                        egret3d.Vector3.max(vertexPosition, maximum, maximum);
                        egret3d.Vector3.min(vertexPosition, minimum, minimum);
                    }
                }
            }
            else {
                var skinmesh = this.gameObject.getComponent(egret3d.SkinnedMeshRenderer);
                if (skinmesh) {
                    egret3d.Vector3.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, minimum);
                    egret3d.Vector3.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE, maximum);
                    var subMeshIndex = 0;
                    for (var _b = 0, _c = skinmesh.mesh.glTFMesh.primitives; _b < _c.length; _b++) {
                        var _primitive = _c[_b];
                        var vertexCount = skinmesh.mesh.getVertexCount(subMeshIndex);
                        for (var i = 0; i < vertexCount; ++i) {
                            skinmesh.mesh.getVertexPosition(i, subMeshIndex, vertexPosition);
                            egret3d.Vector3.max(vertexPosition, maximum, maximum);
                            egret3d.Vector3.min(vertexPosition, minimum, minimum);
                        }
                    }
                }
                else {
                    minimum.x = -1;
                    minimum.y = -1;
                    minimum.z = -1;
                    maximum.x = 1;
                    maximum.y = 1;
                    maximum.z = 1;
                }
            }
            var aabb = new egret3d.AABB(minimum, maximum);
            return aabb;
        };
        Transform.prototype._sync = function () {
            if (this._dirtyLocal) {
                egret3d.Matrix.fromRTS(this.localPosition, this.localScale, this.localRotation, this.localMatrix);
                this._dirtyLocal = false;
            }
            if (this._dirtyWorld) {
                if (!this._parent) {
                    egret3d.Matrix.copy(this.localMatrix, this.worldMatrix);
                }
                else {
                    egret3d.Matrix.multiply(this._parent.worldMatrix, this.localMatrix, this.worldMatrix);
                }
                this._worldMatrixDeterminant = egret3d.Matrix.determinant(this.worldMatrix);
                this._dirtyWorld = false;
            }
        };
        Transform.prototype._dirtify = function (local) {
            if (local === void 0) { local = false; }
            if ((!local || (local && this._dirtyLocal)) && this._dirtyWorld) {
                return;
            }
            if (local) {
                this._dirtyLocal = true;
            }
            if (!this._dirtyWorld) {
                this._dirtyWorld = true;
                var i = this.children.length;
                while (i--) {
                    if (this.children[i]._dirtyWorld) {
                        continue;
                    }
                    this.children[i]._dirtify();
                }
            }
            // transform dirty
            this._dirtyAABB = true;
        };
        /**
         *
         */
        Transform.prototype.$getGlobalPosition = function () {
            var position = this.getPosition();
            return new Float32Array([position.x, position.y, position.z, 1]);
        };
        /**
         * 父节点发生改变的回调方法
         * 子类可通过重载此方法进行标脏状态传递
         */
        Transform.prototype._onParentChange = function (_newParent, _oldParent) {
            this.gameObject._activeInHierarchyDirty();
            this._dirtify();
        };
        /**
         * @inheritDoc
         */
        Transform.prototype.deserialize = function (element) {
            _super.prototype.deserialize.call(this, element); // TODO
            this.localPosition.deserialize(element.localPosition);
            this.localRotation.deserialize(element.localRotation);
            this.localScale.deserialize(element.localScale);
            this.children.length = 0;
            if (element.children) {
                for (var i = 0, l = element.children.length; i < l; i++) {
                    var child = paper.getDeserializedObject(element.children[i]);
                    if (child) {
                        child._parent = this;
                        this.children.push(child);
                    }
                }
            }
        };
        /**
         * 设置父节点
         */
        Transform.prototype.setParent = function (parent, worldPositionStays) {
            if (worldPositionStays === void 0) { worldPositionStays = false; }
            var oldParent = this._parent;
            var newParent = parent;
            if (oldParent === newParent) {
                return;
            }
            if (worldPositionStays) {
                egret3d.Vector3.copy(this.getPosition(), egret3d.helpVector3A);
            }
            if (oldParent) {
                oldParent._removeFromChildren(this);
            }
            if (newParent) {
                parent.children.push(this);
            }
            this._parent = newParent;
            this._onParentChange(newParent, oldParent);
            if (worldPositionStays) {
                this.setPosition(egret3d.helpVector3A);
            }
        };
        /**
         * 获取对象下标的子集对象
         * @param index
         */
        Transform.prototype.getChild = function (index) {
            return 0 <= index && index < this.children.length ? this.children[index] : null;
        };
        /**
         * get local matrix
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获得本地矩阵
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getLocalMatrix = function () {
            if (this._dirtyLocal) {
                egret3d.Matrix.fromRTS(this.localPosition, this.localScale, this.localRotation, this.localMatrix);
                this._dirtyLocal = false;
            }
            return this.localMatrix;
        };
        /**
         * get world matrix
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获得世界矩阵
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getWorldMatrix = function () {
            if (!this._dirtyLocal && !this._dirtyWorld) {
                return this.worldMatrix;
            }
            if (this._parent) {
                this._parent.getWorldMatrix();
            }
            this._sync();
            return this.worldMatrix;
        };
        /**
         * get local position
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获得本地位置
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getLocalPosition = function () {
            return this.localPosition;
        };
        Transform.prototype.setLocalPosition = function (p1, p2, p3) {
            if (p1.hasOwnProperty("x")) {
                egret3d.Vector3.copy(p1, this.localPosition);
            }
            else {
                this.localPosition.x = p1;
                this.localPosition.y = p2 || 0;
                this.localPosition.z = p3 || 0;
            }
            if (!this._dirtyLocal) {
                this._dirtify(true);
            }
        };
        /**
         * get position
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获得位置
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getPosition = function () {
            egret3d.Matrix.getTranslation(this.getWorldMatrix(), this.position);
            return this.position;
        };
        Transform.prototype.setPosition = function (p1, p2, p3) {
            if (p1.hasOwnProperty("x")) {
                egret3d.Vector3.copy(p1, helpVec3);
            }
            else {
                helpVec3.x = p1;
                helpVec3.y = p2 || 0;
                helpVec3.z = p3 || 0;
            }
            if (!this._parent) {
                egret3d.Vector3.copy(helpVec3, this.localPosition);
            }
            else {
                egret3d.Matrix.inverse(this._parent.getWorldMatrix(), helpMat4);
                egret3d.Matrix.transformVector3(helpVec3, helpMat4, this.localPosition); // transform point
            }
            if (!this._dirtyLocal) {
                this._dirtify(true);
            }
        };
        /**
         * get local rotation
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取本地旋转
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getLocalRotation = function () {
            return this.localRotation;
        };
        Transform.prototype.setLocalRotation = function (p1, p2, p3, p4) {
            if (p1.hasOwnProperty("x")) {
                egret3d.Vector3.copy(p1, this.localRotation);
            }
            else {
                this.localRotation.x = p1;
                this.localRotation.y = p2 || 0;
                this.localRotation.z = p3 || 0;
                this.localRotation.w = p4 !== undefined ? p4 : 1;
            }
            if (!this._dirtyLocal) {
                this._dirtify(true);
            }
        };
        /**
         * get rotation
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获得旋转
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getRotation = function () {
            egret3d.Quaternion.fromMatrix(this.getWorldMatrix(), this.rotation);
            return this.rotation;
        };
        Transform.prototype.setRotation = function (q1, q2, q3, q4) {
            if (q1.hasOwnProperty("x")) {
                egret3d.Quaternion.copy(q1, helpQuat4);
            }
            else {
                helpQuat4.x = q1;
                helpQuat4.y = q2 || 0;
                helpQuat4.z = q3 || 0;
                helpQuat4.w = q4 !== undefined ? q4 : 1;
            }
            if (!this._parent) {
                egret3d.Quaternion.copy(helpQuat4, this.localRotation);
            }
            else {
                var parentRot = this._parent.getRotation();
                egret3d.Quaternion.copy(parentRot, helpQuat4_2);
                egret3d.Quaternion.inverse(helpQuat4_2);
                egret3d.Quaternion.multiply(helpQuat4_2, helpQuat4, this.localRotation);
            }
            if (!this._dirtyLocal) {
                this._dirtify(true);
            }
        };
        /**
         * get local euler angles
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取本地欧拉角
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getLocalEulerAngles = function () {
            egret3d.Quaternion.toEulerAngles(this.localRotation, this.localEulerAngles);
            return this.localEulerAngles;
        };
        Transform.prototype.setLocalEulerAngles = function (p1, p2, p3) {
            if (p1.hasOwnProperty("x")) {
                p1 = p1;
                egret3d.Quaternion.fromEulerAngles(p1.x, p1.y, p1.z, this.localRotation);
            }
            else {
                egret3d.Quaternion.fromEulerAngles(p1, p2, p3, this.localRotation);
            }
            if (!this._dirtyLocal) {
                this._dirtify(true);
            }
        };
        /**
         * get euler angles
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取欧拉角
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getEulerAngles = function () {
            egret3d.Matrix.toEulerAngles(this.getWorldMatrix(), this.eulerAngles);
            return this.eulerAngles;
        };
        Transform.prototype.setEulerAngles = function (q1, q2, q3) {
            if (q1.hasOwnProperty("x")) {
                q1 = q1;
                egret3d.Quaternion.fromEulerAngles(q1.x, q1.y, q1.z, helpQuat4);
            }
            else {
                egret3d.Quaternion.fromEulerAngles(q1, q2 || 0, q3 || 0, helpQuat4);
            }
            if (!this._parent) {
                egret3d.Quaternion.copy(helpQuat4, this.localRotation);
            }
            else {
                var parentRot = this._parent.getRotation();
                egret3d.Quaternion.copy(parentRot, helpQuat4_2);
                egret3d.Quaternion.inverse(helpQuat4_2);
                egret3d.Quaternion.multiply(helpQuat4_2, helpQuat4, this.localRotation);
            }
            if (!this._dirtyLocal) {
                this._dirtify(true);
            }
        };
        /**
         * get local scale
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获得本地缩放
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getLocalScale = function () {
            return this.localScale;
        };
        Transform.prototype.setLocalScale = function (p1, p2, p3) {
            if (p1.hasOwnProperty("x")) {
                egret3d.Vector3.copy(p1, this.localScale);
            }
            else {
                this.localScale.x = p1;
                this.localScale.y = p2 !== undefined ? p2 : 1;
                this.localScale.z = p3 !== undefined ? p3 : 1;
            }
            if (!this._dirtyLocal) {
                this._dirtify(true);
            }
        };
        /**
         * get scale
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获得缩放
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getScale = function () {
            egret3d.Matrix.getScale(this.getWorldMatrix(), this.scale);
            return this.scale;
        };
        Transform.prototype.setScale = function (p1, p2, p3) {
            if (p1.hasOwnProperty("x")) {
                egret3d.Vector3.copy(p1, helpVec3);
            }
            else {
                helpVec3.x = p1;
                helpVec3.y = p2 !== undefined ? p2 : 1;
                helpVec3.z = p3 !== undefined ? p3 : 1;
            }
            if (!this._parent) {
                egret3d.Vector3.copy(helpVec3, this.localScale);
            }
            else {
                egret3d.Matrix.inverse(this._parent.getWorldMatrix(), helpMat4);
                egret3d.Matrix.transformVector3(helpVec3, helpMat4, this.localScale); // transform vector3
            }
            if (!this._dirtyLocal) {
                this._dirtify(true);
            }
        };
        /**
         * look at a target
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 旋转当前transform 到指定的目标
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.lookAt = function (target, up) {
            if (target instanceof Transform) {
                egret3d.Vector3.copy(target.getPosition(), helpVector);
            }
            else {
                egret3d.Vector3.copy(target, helpVector);
            }
            if (up === undefined) {
                egret3d.Quaternion.lookAt(this.getPosition(), helpVector, helpRotation);
            }
            else {
                egret3d.Quaternion.lookAtWithUp(this.getPosition(), helpVector, up, helpRotation);
            }
            this.setRotation(helpRotation);
        };
        /**
         * z-axis towards in world space
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取世界坐标系下当前z轴的朝向
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getForward = function (out) {
            egret3d.Matrix.transformNormal(helpFoward, this.getWorldMatrix(), out);
            egret3d.Vector3.normalize(out);
            return out;
        };
        /**
         * x-axis towards in world space
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取世界坐标系下当前x轴的朝向
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getRight = function (out) {
            egret3d.Matrix.transformNormal(helpRight, this.getWorldMatrix(), out);
            egret3d.Vector3.normalize(out);
        };
        /**
         * y-axis towards in world space
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取世界坐标系下当前y轴的朝向
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Transform.prototype.getUp = function (out) {
            egret3d.Matrix.transformNormal(helpUp, this.getWorldMatrix(), out);
            egret3d.Vector3.normalize(out);
        };
        /**
         * Finds a child by name or path and returns it.
         * @param nameOrPath
         */
        Transform.prototype.find = function (nameOrPath) {
            var names = nameOrPath.split("/");
            var ancestor = this;
            var result = null;
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var name_1 = names_1[_i];
                for (var _a = 0, _b = ancestor.children; _a < _b.length; _a++) {
                    var child = _b[_a];
                    if (child.gameObject.name === name_1) {
                        result = child;
                        break;
                    }
                }
                if (result) {
                    ancestor = result;
                }
                else {
                    break;
                }
            }
            return result;
        };
        /**
         * @internal
         */
        Transform.prototype.getAllChildren = function () {
            var children = [];
            this._getAllChildren(children);
            return children;
        };
        Transform.prototype._getAllChildren = function (children) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                children.push(child);
                child._getAllChildren(children);
            }
        };
        Object.defineProperty(Transform.prototype, "childCount", {
            /**
             * 当前子集对象的数量
             */
            get: function () {
                return this.children.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Transform.prototype, "aabb", {
            /**
             *
             */
            get: function () {
                if (!this._aabb) {
                    this._aabb = this._buildAABB();
                }
                if (this._dirtyAABB) {
                    this._aabb.update(this.getWorldMatrix());
                    this._dirtyAABB = false;
                }
                return this._aabb;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Transform.prototype, "parent", {
            /**
             * instance of parent transform
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 父元素实例
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            get: function () {
                return this._parent;
            },
            set: function (value) {
                this.setParent(value, false);
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            paper.serializedField
        ], Transform.prototype, "children", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.VECTOR3)
        ], Transform.prototype, "localPosition", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.QUATERNION)
        ], Transform.prototype, "localRotation", void 0);
        __decorate([
            paper.serializedField,
            editor.property(editor.EditType.VECTOR3)
        ], Transform.prototype, "localScale", void 0);
        return Transform;
    }(paper.BaseComponent));
    egret3d.Transform = Transform;
    __reflect(Transform.prototype, "egret3d.Transform");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * shader asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 着色器资源。
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Shader = (function (_super) {
        __extends(Shader, _super);
        function Shader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * 渲染队列
             */
            _this.renderQueue = egret3d.RenderQueue.Geometry;
            _this.passes = {};
            /**
             *
             */
            _this.defaultValue = {};
            return _this;
        }
        /**
         *
         */
        Shader.registerVertShader = function (name, src) {
            var info = {
                name: name,
                src: src
            };
            this._vertShaderInfoMap[name] = info;
            return info;
        };
        /**
         *
         */
        Shader.registerFragShader = function (name, src) {
            var info = {
                name: name,
                src: src
            };
            this._fragShaderInfoMap[name] = info;
            return info;
        };
        /**
         * TODO 应补全接口和枚举。
         *
         */
        Shader.prototype.$parse = function (json) {
            this._parseProperties(json.properties);
            if (json.layer) {
                var layer = json.layer;
                if (layer === "transparent") {
                    this.renderQueue = egret3d.RenderQueue.Transparent;
                }
                else if (layer === "overlay") {
                    this.renderQueue = egret3d.RenderQueue.Overlay;
                }
                else if (layer === "common") {
                    this.renderQueue = egret3d.RenderQueue.Geometry;
                }
            }
            // if (json.queue) {
            //     this.queue = json.queue;
            // }
            var passes = json.passes;
            for (var k in passes) {
                var pass = passes[k];
                if (k === "base" || k === "lightmap" || k === "skin" || k === "quad") {
                }
                else if (k.indexOf("base_") === 0 || k.indexOf("lightmap_") === 0 || k.indexOf("skin_") === 0) {
                }
                else {
                    continue;
                }
                this.passes[k] = [];
                for (var i = 0; i < pass.length; i++) {
                    this.passes[k].push(this._parsePass(pass[i]));
                }
            }
            if (!this.passes["base"]) {
                throw new Error("do not have base pass group.");
            }
        };
        Shader.prototype._parseProperties = function (properties) {
            for (var k in properties) {
                var property = properties[k];
                var words = property.match(egret3d.RegexpUtil.floatRegexp);
                if (!words)
                    words = property.match(egret3d.RegexpUtil.rangeRegexp);
                if (!words)
                    words = property.match(egret3d.RegexpUtil.vectorRegexp);
                if (!words)
                    words = property.match(egret3d.RegexpUtil.textureRegexp);
                if (!words) {
                    console.error("Asset (" + this.url + ") property error! info:\n" + property);
                    return;
                }
                if (words.length >= 4) {
                    var key = words[1];
                    // let showName = words[2];
                    var type = words[3].toLowerCase();
                    switch (type) {
                        case "float":
                            this.defaultValue[key] = { type: type, value: parseFloat(words[4]) };
                            break;
                        case "range":
                            this.defaultValue[key] = { type: type, min: parseFloat(words[4]), max: parseFloat(words[5]), value: parseFloat(words[6]) };
                            break;
                        case "vector":
                        case "color":
                            var _vector = new egret3d.Vector4(parseFloat(words[4]), parseFloat(words[5]), parseFloat(words[6]), parseFloat(words[7]));
                            this.defaultValue[key] = { type: type, value: _vector };
                            break;
                        case "texture":
                            this.defaultValue[key] = { type: type, value: paper.Asset.find(words[4]) };
                            break;
                        default:
                            console.log("Asset (" + this.url + ") property error! unknown type : " + type);
                            break;
                    }
                }
            }
        };
        /**
         * TODO 应补全接口和枚举。
         */
        Shader.prototype._parsePass = function (json) {
            var vs = Shader._vertShaderInfoMap[json["vs"]];
            var fs = Shader._fragShaderInfoMap[json["fs"]];
            if (!vs) {
                console.error("vertex shader " + json["vs"] + " not found!");
            }
            if (!fs) {
                console.error("fragment shader " + json["fs"] + " not found!");
            }
            var blendmode = egret3d.BlendModeEnum.Close;
            var pass = new egret3d.DrawPass(vs, fs);
            pass.state_ztest = true;
            switch (json["showface"]) {
                case "cw":
                    pass.state_showface = egret3d.ShowFaceStateEnum.CW;
                    break;
                case "ccw":
                    pass.state_showface = egret3d.ShowFaceStateEnum.CCW;
                    break;
                default:
                    pass.state_showface = egret3d.ShowFaceStateEnum.ALL;
                    break;
            }
            switch (json["zwrite"]) {
                case "off":
                    pass.state_zwrite = false;
                    break;
                case "on":
                default:
                    pass.state_zwrite = true;
                    break;
            }
            switch (json["ztest"]) {
                case "greater":
                    pass.state_ztest_method = egret3d.WebGLKit.GREATER;
                    break;
                case "gequal":
                    pass.state_ztest_method = egret3d.WebGLKit.GEQUAL;
                    break;
                case "less":
                    pass.state_ztest_method = egret3d.WebGLKit.LESS;
                    break;
                case "equal":
                    pass.state_ztest_method = egret3d.WebGLKit.EQUAL;
                    break;
                case "notequal":
                    pass.state_ztest_method = egret3d.WebGLKit.NOTEQUAL;
                    break;
                case "always":
                case "off":
                    pass.state_ztest = false;
                    break;
                case "never":
                    pass.state_ztest_method = egret3d.WebGLKit.NEVER;
                    break;
                case "lequal":
                default:
                    pass.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                    break;
            }
            switch (json["blendmode"]) {
                case "add":
                    blendmode = egret3d.BlendModeEnum.Add;
                    break;
                case "addpremult":
                    blendmode = egret3d.BlendModeEnum.Add_PreMultiply;
                    break;
                case "blend":
                    blendmode = egret3d.BlendModeEnum.Blend;
                    break;
                case "blendpremult":
                    blendmode = egret3d.BlendModeEnum.Blend_PreMultiply;
                    break;
            }
            pass.setAlphaBlend(blendmode);
            if (this.renderQueue === egret3d.RenderQueue.Overlay) {
                pass.state_ztest = true;
                pass.state_zwrite = true;
                pass.state_ztest_method = egret3d.WebGLKit.ALWAYS;
            }
            return pass;
        };
        /**
         * @inheritDoc
         */
        Shader.prototype.dispose = function () {
            for (var k in this.passes) {
                delete this.passes[k];
            }
            for (var k in this.defaultValue) {
                delete this.defaultValue[k];
            }
        };
        /**
         * @inheritDoc
         */
        Shader.prototype.caclByteLength = function () {
            return 0;
        };
        Shader._vertShaderInfoMap = {};
        Shader._fragShaderInfoMap = {};
        return Shader;
    }(paper.Asset));
    egret3d.Shader = Shader;
    __reflect(Shader.prototype, "egret3d.Shader");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * TODO Gizmos系统
     * 可以用来绘制一些图标等
     */
    var GizmosSystem = (function (_super) {
        __extends(GizmosSystem, _super);
        function GizmosSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @inheritDoc
         */
        GizmosSystem.prototype.update = function () {
        };
        return GizmosSystem;
    }(paper.BaseSystem));
    egret3d.GizmosSystem = GizmosSystem;
    __reflect(GizmosSystem.prototype, "egret3d.GizmosSystem");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var tmpVecA = new egret3d.Vector3();
    var tmpVecB = new egret3d.Vector3();
    var tmpVecC = new egret3d.Vector3();
    var tmpVecD = new egret3d.Vector3();
    var tmpVecE = new egret3d.Vector3();
    /**
     * aabb box
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 轴对称包围盒
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var AABB = (function () {
        /**
         * build a aabb
         * @param _minimum min point
         * @param _maximum max point
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 构建轴对称包围盒
         * @param _minimum 最小点
         * @param _maximum 最大点
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        function AABB(_minimum, _maximum) {
            /**
             * min point
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 最小点
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            this.minimum = new egret3d.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            /**
             * max point
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 最大点
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            this.maximum = new egret3d.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
            this._dirtyCenter = true;
            this._dirtyRadius = true;
            // TODO local bounding box 与 world bounding box 分离
            this.srcmin = new egret3d.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            this.srcmax = new egret3d.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
            this._center = new egret3d.Vector3();
            if (_minimum) {
                egret3d.Vector3.copy(_minimum, this.srcmin);
                egret3d.Vector3.copy(_minimum, this.minimum);
            }
            if (_maximum) {
                egret3d.Vector3.copy(_maximum, this.srcmax);
                egret3d.Vector3.copy(_maximum, this.maximum);
            }
        }
        /**
         * update
         * @param worldmatrix world matrix
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 刷新轴对称包围盒
         * @param worldmatrix 物体的世界矩阵
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        AABB.prototype.update = function (worldmatrix) {
            egret3d.Matrix.getTranslation(worldmatrix, tmpVecA);
            egret3d.Matrix.getTranslation(worldmatrix, tmpVecB);
            if (worldmatrix.rawData[0] > 0) {
                tmpVecA.x += worldmatrix.rawData[0] * this.srcmin.x;
                tmpVecB.x += worldmatrix.rawData[0] * this.srcmax.x;
            }
            else {
                tmpVecA.x += worldmatrix.rawData[0] * this.srcmax.x;
                tmpVecB.x += worldmatrix.rawData[0] * this.srcmin.x;
            }
            if (worldmatrix.rawData[1] > 0) {
                tmpVecA.y += worldmatrix.rawData[1] * this.srcmin.y;
                tmpVecB.y += worldmatrix.rawData[1] * this.srcmax.y;
            }
            else {
                tmpVecA.y += worldmatrix.rawData[1] * this.srcmax.y;
                tmpVecB.y += worldmatrix.rawData[1] * this.srcmin.y;
            }
            if (worldmatrix.rawData[2] > 0) {
                tmpVecA.z += worldmatrix.rawData[2] * this.srcmin.z;
                tmpVecB.z += worldmatrix.rawData[2] * this.srcmax.z;
            }
            else {
                tmpVecA.z += worldmatrix.rawData[2] * this.srcmax.z;
                tmpVecB.z += worldmatrix.rawData[2] * this.srcmin.z;
            }
            if (worldmatrix.rawData[4] > 0) {
                tmpVecA.x += worldmatrix.rawData[4] * this.srcmin.x;
                tmpVecB.x += worldmatrix.rawData[4] * this.srcmax.x;
            }
            else {
                tmpVecA.x += worldmatrix.rawData[4] * this.srcmax.x;
                tmpVecB.x += worldmatrix.rawData[4] * this.srcmin.x;
            }
            if (worldmatrix.rawData[5] > 0) {
                tmpVecA.y += worldmatrix.rawData[5] * this.srcmin.y;
                tmpVecB.y += worldmatrix.rawData[5] * this.srcmax.y;
            }
            else {
                tmpVecA.y += worldmatrix.rawData[5] * this.srcmax.y;
                tmpVecB.y += worldmatrix.rawData[5] * this.srcmin.y;
            }
            if (worldmatrix.rawData[6] > 0) {
                tmpVecA.z += worldmatrix.rawData[6] * this.srcmin.z;
                tmpVecB.z += worldmatrix.rawData[6] * this.srcmax.z;
            }
            else {
                tmpVecA.z += worldmatrix.rawData[6] * this.srcmax.z;
                tmpVecB.z += worldmatrix.rawData[6] * this.srcmin.z;
            }
            if (worldmatrix.rawData[8] > 0) {
                tmpVecA.x += worldmatrix.rawData[8] * this.srcmin.x;
                tmpVecB.x += worldmatrix.rawData[8] * this.srcmax.x;
            }
            else {
                tmpVecA.x += worldmatrix.rawData[8] * this.srcmax.x;
                tmpVecB.x += worldmatrix.rawData[8] * this.srcmin.x;
            }
            if (worldmatrix.rawData[9] > 0) {
                tmpVecA.y += worldmatrix.rawData[9] * this.srcmin.y;
                tmpVecB.y += worldmatrix.rawData[9] * this.srcmax.y;
            }
            else {
                tmpVecA.y += worldmatrix.rawData[9] * this.srcmax.y;
                tmpVecB.y += worldmatrix.rawData[9] * this.srcmin.y;
            }
            if (worldmatrix.rawData[10] > 0) {
                tmpVecA.z += worldmatrix.rawData[10] * this.srcmin.z;
                tmpVecB.z += worldmatrix.rawData[10] * this.srcmax.z;
            }
            else {
                tmpVecA.z += worldmatrix.rawData[10] * this.srcmax.z;
                tmpVecB.z += worldmatrix.rawData[10] * this.srcmin.z;
            }
            egret3d.Vector3.copy(tmpVecA, this.minimum);
            egret3d.Vector3.copy(tmpVecB, this.maximum);
            this._dirtyCenter = true;
            this._dirtyRadius = true;
        };
        /**
         * extend by a point
         * @param vec a world point
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 包含一个点
         * @param vec 世界坐标
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        AABB.prototype.addVector3 = function (vec) {
            egret3d.Vector3.max(this.maximum, vec, this.maximum);
            egret3d.Vector3.min(this.minimum, vec, this.minimum);
            this._dirtyCenter = true;
            this._dirtyRadius = true;
        };
        /**
         * check contains vector
         * @param vec a world point
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 检查是否包含点
         * @param vec 世界坐标
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        AABB.prototype.containsVector3 = function (vec) {
            return (vec.x > this.minimum.x) && (vec.x < this.maximum.x) &&
                (vec.y > this.minimum.y) && (vec.x < this.maximum.y) &&
                (vec.z > this.minimum.z) && (vec.z < this.maximum.z);
        };
        /**
         * intersect with aabb
         * @param aabb aabb
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 检查是否与aabb相交
         * @param aabb 轴对称包围盒
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        AABB.prototype.intersectAABB = function (aabb) {
            if (this.minimum.x > aabb.maximum.x)
                return false;
            if (this.maximum.x < aabb.minimum.x)
                return false;
            if (this.minimum.x > aabb.maximum.x)
                return false;
            if (this.maximum.x < aabb.minimum.x)
                return false;
            if (this.minimum.x > aabb.maximum.x)
                return false;
            if (this.maximum.x < aabb.minimum.x)
                return false;
            return true;
        };
        /**
         *
         * 用于视锥检测的计算，引擎内部使用
         * 这里采用包围球式计算以提高性能
         */
        AABB.prototype.intersectPlane = function (v0, v1, v2) {
            var subV0 = tmpVecA;
            var subV1 = tmpVecB;
            var cross = tmpVecC;
            var hitPoint = tmpVecD;
            var distVec = tmpVecE;
            var center = this.center;
            egret3d.Vector3.subtract(v1, v0, subV0);
            egret3d.Vector3.subtract(v2, v1, subV1);
            egret3d.Vector3.cross(subV0, subV1, cross);
            egret3d.calPlaneLineIntersectPoint(cross, v0, cross, center, hitPoint);
            egret3d.Vector3.subtract(hitPoint, center, distVec);
            var val = egret3d.Vector3.dot(cross, distVec);
            if (val <= 0) {
                return true;
            }
            var dist = egret3d.Vector3.getDistance(center, hitPoint);
            if (dist < this.radius) {
                return true;
            }
            return false;
        };
        /**
         * extend by aabb
         * @param aabb aabb
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 包含一个aabb
         * @param aabb 轴对称包围盒
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        AABB.prototype.addAABB = function (aabb) {
            egret3d.Vector3.max(this.maximum, aabb.maximum, this.maximum);
            egret3d.Vector3.min(this.minimum, aabb.minimum, this.minimum);
            this._dirtyCenter = true;
            this._dirtyRadius = true;
        };
        Object.defineProperty(AABB.prototype, "center", {
            /**
             * get center
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 获取中心点位置
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            get: function () {
                if (this._dirtyCenter) {
                    egret3d.Vector3.add(this.maximum, this.minimum, this._center);
                    egret3d.Vector3.scale(this._center, 0.5);
                    this._dirtyCenter = false;
                }
                return this._center;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AABB.prototype, "radius", {
            /**
             * get bounding sphere radius
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 获取包围球的半径
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            get: function () {
                if (this._dirtyRadius) {
                    egret3d.Vector3.subtract(this.maximum, this.minimum, tmpVecA);
                    egret3d.Vector3.scale(tmpVecA, 0.5);
                    this._dirtyRadius = false;
                }
                return egret3d.Vector3.getLength(tmpVecA);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * clear
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 清空
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        AABB.prototype.clear = function () {
            egret3d.Vector3.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, this.minimum);
            egret3d.Vector3.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE, this.maximum);
            this._dirtyCenter = true;
            this._dirtyRadius = true;
        };
        /**
         * clone
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 克隆
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        AABB.prototype.clone = function () {
            var aabb = new egret3d.AABB(this.minimum, this.maximum);
            return aabb;
        };
        /**
         * copy
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 复制
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        AABB.prototype.copy = function (aabb) {
            egret3d.Vector3.copy(aabb.minimum, this.minimum);
            egret3d.Vector3.copy(aabb.maximum, this.maximum);
            this._dirtyCenter = true;
            this._dirtyRadius = true;
            return this;
        };
        /**
         * get vectors
         * @param vecs output vectors
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取包围盒顶点数据
         * @param vecs 引用数组
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        AABB.prototype.getVec3 = function (vecs) {
            vecs[0] = egret3d.Vector3.copy(this.minimum, new egret3d.Vector3());
            vecs[1] = egret3d.Vector3.copy(this.minimum, new egret3d.Vector3());
            vecs[1].z = this.maximum.z;
            vecs[2] = egret3d.Vector3.copy(this.minimum, new egret3d.Vector3());
            vecs[2].x = this.maximum.x;
            vecs[3] = egret3d.Vector3.copy(this.maximum, new egret3d.Vector3());
            vecs[3].y = this.minimum.y;
            vecs[4] = egret3d.Vector3.copy(this.minimum, new egret3d.Vector3());
            vecs[4].y = this.maximum.y;
            vecs[5] = egret3d.Vector3.copy(this.maximum, new egret3d.Vector3());
            vecs[5].x = this.minimum.x;
            vecs[6] = egret3d.Vector3.copy(this.maximum, new egret3d.Vector3());
            vecs[6].z = this.minimum.z;
            vecs[7] = egret3d.Vector3.copy(this.maximum, new egret3d.Vector3());
        };
        return AABB;
    }());
    egret3d.AABB = AABB;
    __reflect(AABB.prototype, "egret3d.AABB");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var Border = (function () {
        /**
         *
         */
        function Border(l, t, r, b) {
            if (l === void 0) { l = 0.0; }
            if (t === void 0) { t = 0.0; }
            if (r === void 0) { r = 0.0; }
            if (b === void 0) { b = 0.0; }
            this.l = l;
            this.t = t;
            this.r = r;
            this.b = b;
        }
        /**
         * @inheritDoc
         */
        Border.prototype.serialize = function () {
            return [this.l, this.t, this.r, this.b];
        };
        /**
         * @inheritDoc
         */
        Border.prototype.deserialize = function (element) {
            this.l = element[0];
            this.t = element[1];
            this.r = element[2];
            this.b = element[3];
        };
        return Border;
    }());
    egret3d.Border = Border;
    __reflect(Border.prototype, "egret3d.Border", ["paper.ISerializable"]);
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var Color = (function () {
        /**
         *
         */
        function Color(r, g, b, a) {
            if (r === void 0) { r = 1.0; }
            if (g === void 0) { g = 1.0; }
            if (b === void 0) { b = 1.0; }
            if (a === void 0) { a = 1.0; }
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }
        /**
         * @inheritDoc
         */
        Color.prototype.serialize = function () {
            return [this.r, this.g, this.b, this.a];
        };
        /**
         * @inheritDoc
         */
        Color.prototype.deserialize = function (element) {
            this.r = element[0];
            this.g = element[1];
            this.b = element[2];
            this.a = element[3];
        };
        Color.set = function (r, g, b, a, out) {
            if (r === void 0) { r = 1; }
            if (g === void 0) { g = 1; }
            if (b === void 0) { b = 1; }
            if (a === void 0) { a = 1; }
            out.r = r;
            out.g = g;
            out.b = b;
            out.a = a;
            return out;
        };
        Color.multiply = function (c1, c2, out) {
            out.r = c1.r * c2.r;
            out.g = c1.g * c2.g;
            out.b = c1.b * c2.b;
            out.a = c1.a * c2.a;
            return out;
        };
        Color.scale = function (c, scaler) {
            c.r = c.r * scaler;
            c.g = c.g * scaler;
            c.b = c.b * scaler;
            c.a = c.a * scaler;
            return c;
        };
        Color.copy = function (c, out) {
            out.r = c.r;
            out.g = c.g;
            out.b = c.b;
            out.a = c.a;
            return out;
        };
        Color.lerp = function (c1, c2, value, out) {
            out.a = value * (c2.a - c1.a) + c1.a;
            out.r = value * (c2.r - c1.r) + c1.r;
            out.g = value * (c2.g - c1.g) + c1.g;
            out.b = value * (c2.b - c1.b) + c1.b;
            return out;
        };
        return Color;
    }());
    egret3d.Color = Color;
    __reflect(Color.prototype, "egret3d.Color", ["paper.ISerializable"]);
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     * 贝塞尔曲线，目前定义了三种：线性贝塞尔曲线(两个点形成),二次方贝塞尔曲线（三个点形成），三次方贝塞尔曲线（四个点形成）
     */
    var Curve3 = (function () {
        function Curve3(points, nbPoints) {
            this._beizerPoints = points;
            this._bezierPointNum = nbPoints;
        }
        Object.defineProperty(Curve3.prototype, "beizerPoints", {
            get: function () {
                return this._beizerPoints;
            },
            set: function (value) {
                this._beizerPoints = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Curve3.prototype, "bezierPointNum", {
            get: function () {
                return this._bezierPointNum;
            },
            set: function (value) {
                this._bezierPointNum = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 线性贝塞尔曲线
         */
        Curve3.CreateLinearBezier = function (start, end, indices) {
            indices = indices > 2 ? indices : 3;
            var bez = new Array();
            var equation = function (t, va10, va11) {
                var res = (1.0 - t) * va10 + t * va11;
                return res;
            };
            bez.push(start);
            for (var i = 1; i <= indices; i++) {
                bez.push(new egret3d.Vector3(equation(i / indices, start.x, end.x), equation(i / indices, start.y, start.y), equation(i / indices, start.z, start.z)));
            }
            return new Curve3(bez, indices);
        };
        /**
         * 二次方贝塞尔曲线路径
         * @param v0 起始点
         * @param v1 选中的节点
         * @param v2 结尾点
         * @param nbPoints 将贝塞尔曲线拆分nbPoints段，一共有nbPoints + 1个点
         */
        Curve3.CreateQuadraticBezier = function (v0, v1, v2, bezierPointNum) {
            bezierPointNum = bezierPointNum > 2 ? bezierPointNum : 3;
            var beizerPoint = new Array();
            var equation = function (t, val0, val1, val2) {
                var res = (1.0 - t) * (1.0 - t) * val0 + 2.0 * t * (1.0 - t) * val1 + t * t * val2;
                return res;
            };
            for (var i = 1; i <= bezierPointNum; i++) {
                beizerPoint.push(new egret3d.Vector3(equation(i / bezierPointNum, v0.x, v1.x, v2.x), equation(i / bezierPointNum, v0.y, v1.y, v2.y), equation(i / bezierPointNum, v0.z, v1.z, v2.z)));
            }
            return new Curve3(beizerPoint, bezierPointNum);
        };
        /**
         * 三次方贝塞尔曲线路径
         * @param v0
         * @param v1
         * @param v2
         * @param v3
         * @param nbPoints
         */
        Curve3.CreateCubicBezier = function (v0, v1, v2, v3, bezierPointNum) {
            bezierPointNum = bezierPointNum > 3 ? bezierPointNum : 4;
            var beizerPoint = new Array();
            var equation = function (t, val0, val1, val2, val3) {
                var res = (1.0 - t) * (1.0 - t) * (1.0 - t) * val0 + 3.0 * t * (1.0 - t) * (1.0 - t) * val1 + 3.0 * t * t * (1.0 - t) * val2 + t * t * t * val3;
                return res;
            };
            for (var i = 1; i <= bezierPointNum; i++) {
                beizerPoint.push(new egret3d.Vector3(equation(i / bezierPointNum, v0.x, v1.x, v2.x, v3.x), equation(i / bezierPointNum, v0.y, v1.y, v2.y, v3.y), equation(i / bezierPointNum, v0.z, v1.z, v2.z, v3.z)));
            }
            return new Curve3(beizerPoint, bezierPointNum);
        };
        /**
         * 贝塞尔曲线上的点
         */
        Curve3.prototype.getPoints = function () {
            return this._beizerPoints;
        };
        return Curve3;
    }());
    egret3d.Curve3 = Curve3;
    __reflect(Curve3.prototype, "egret3d.Curve3");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    egret3d.RAD_DEG = 180.0 / Math.PI;
    /**
     *
     */
    egret3d.DEG_RAD = Math.PI / 180.0;
    function floatClamp(v, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        if (v < min)
            return min;
        else if (v > max)
            return max;
        else
            return v;
    }
    egret3d.floatClamp = floatClamp;
    function sign(value) {
        value = +value; // convert to a number
        if (value === 0 || isNaN(value))
            return value;
        return value > 0 ? 1 : -1;
    }
    egret3d.sign = sign;
    function numberLerp(fromV, toV, v) {
        return fromV * (1 - v) + toV * v;
    }
    egret3d.numberLerp = numberLerp;
    function calPlaneLineIntersectPoint(planeVector, planePoint, lineVector, linePoint, out) {
        var vp1 = planeVector.x;
        var vp2 = planeVector.y;
        var vp3 = planeVector.z;
        var n1 = planePoint.x;
        var n2 = planePoint.y;
        var n3 = planePoint.z;
        var v1 = lineVector.x;
        var v2 = lineVector.y;
        var v3 = lineVector.z;
        var m1 = linePoint.x;
        var m2 = linePoint.y;
        var m3 = linePoint.z;
        var vpt = v1 * vp1 + v2 * vp2 + v3 * vp3;
        if (vpt === 0) {
            out = null;
        }
        else {
            var t = ((n1 - m1) * vp1 + (n2 - m2) * vp2 + (n3 - m3) * vp3) / vpt;
            out.x = m1 + v1 * t;
            out.y = m2 + v2 * t;
            out.z = m3 + v3 * t;
        }
        return out;
    }
    egret3d.calPlaneLineIntersectPoint = calPlaneLineIntersectPoint;
    var helpVec3_1 = new egret3d.Vector3();
    var helpVec3_2 = new egret3d.Vector3();
    var helpVec3_3 = new egret3d.Vector3();
    var helpVec3_4 = new egret3d.Vector3();
    var helpVec3_5 = new egret3d.Vector3();
    function getPointAlongCurve(curveStart, curveStartHandle, curveEnd, curveEndHandle, t, out, crease) {
        if (crease === void 0) { crease = 0.3; }
        var oneMinT = 1 - t;
        var oneMinTPow3 = Math.pow(oneMinT, 3);
        var oneMinTPow2 = Math.pow(oneMinT, 2);
        var oneMinCrease = 1 - crease;
        var tempt1 = helpVec3_1;
        egret3d.Vector3.copy(curveStart, tempt1);
        egret3d.Vector3.scale(tempt1, oneMinTPow3 * oneMinCrease);
        var tempt2 = helpVec3_2;
        egret3d.Vector3.copy(curveStartHandle, tempt2);
        egret3d.Vector3.scale(tempt2, 3 * oneMinTPow2 * t * crease);
        var tempt3 = helpVec3_3;
        egret3d.Vector3.copy(curveEndHandle, tempt3);
        egret3d.Vector3.scale(tempt3, 3 * oneMinT * Math.pow(t, 2) * crease);
        var tempt4 = helpVec3_4;
        egret3d.Vector3.copy(curveEnd, tempt4);
        egret3d.Vector3.scale(tempt4, Math.pow(t, 3) * oneMinCrease);
        var tempt5 = helpVec3_5;
        egret3d.Vector3.add(tempt1, tempt2, tempt5);
        egret3d.Vector3.add(tempt5, tempt3, tempt5);
        egret3d.Vector3.add(tempt5, tempt4, tempt5);
        egret3d.Vector3.copy(tempt5, out);
        egret3d.Vector3.scale(out, 1 / (oneMinTPow3 * oneMinCrease + 3 * oneMinTPow2 * t * crease + 3 * oneMinT * Math.pow(t, 2) * crease + Math.pow(t, 3) * oneMinCrease));
    }
    egret3d.getPointAlongCurve = getPointAlongCurve;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * atlas asset
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 图集资源。
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Atlas = (function (_super) {
        __extends(Atlas, _super);
        function Atlas() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * texture pixel width
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 纹理像素宽度。
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.texturewidth = 0;
            /**
             * texture pixel height
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 纹理像素高度。
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.textureheight = 0;
            /**
             * sprite map
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 精灵字典，key为精灵名称。
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this._sprites = {};
            _this._texture = null;
            return _this;
        }
        /**
         *
         */
        Atlas.prototype.$parse = function (jsonStr) {
            var json = JSON.parse(jsonStr);
            var name = json["t"]; // name
            this.texturewidth = json["w"];
            this.textureheight = json["h"];
            var s = json["s"];
            this.texture = paper.Asset.find(egret3d.utils.getPathByUrl(this.url) + "/" + name);
            if (!this.texture) {
                console.log("atlas texture not found");
            }
            for (var i in s) {
                var ss = s[i];
                var spriteName = ss[0];
                var r = new egret3d.Sprite(this.name + "_" + spriteName); // 用Atlas的名字的Sprite的名字拼接
                // - 引用计数
                if (this.texture) {
                    r.texture = this.texture;
                }
                r.rect.x = ss[1];
                r.rect.y = ss[1];
                r.rect.w = ss[1];
                r.rect.h = ss[1];
                r.border.t = 0;
                r.border.b = 0;
                r.border.l = 0;
                r.border.r = 0;
                r.atlas = this.hashCode.toString();
                this._sprites[spriteName] = r;
            }
        };
        /**
         * @inheritDoc
         */
        Atlas.prototype.dispose = function () {
            for (var k in this._sprites) {
                delete this._sprites[k];
            }
            this._texture = null;
        };
        /**
         * @inheritDoc
         */
        Atlas.prototype.caclByteLength = function () {
            var total = 0;
            for (var k in this._sprites) {
                total += this._sprites[k].caclByteLength();
                total += egret3d.utils.caclStringByteLength(k);
            }
            return total;
        };
        Object.defineProperty(Atlas.prototype, "sprites", {
            get: function () {
                return this._sprites;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Atlas.prototype, "texture", {
            /**
             * atlas texture
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 图集材质。
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            get: function () {
                return this._texture;
            },
            set: function (value) {
                // if (this._texture != null) {
                //     this._texture.unuse();
                // }
                this._texture = value;
                // this._texture.use();
            },
            enumerable: true,
            configurable: true
        });
        return Atlas;
    }(paper.Asset));
    egret3d.Atlas = Atlas;
    __reflect(Atlas.prototype, "egret3d.Atlas");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var Angelref = (function () {
        function Angelref() {
        }
        return Angelref;
    }());
    egret3d.Angelref = Angelref;
    __reflect(Angelref.prototype, "egret3d.Angelref");
    var Matrix3x2 = (function () {
        function Matrix3x2(datas) {
            if (datas === void 0) { datas = null; }
            if (datas) {
                this.rawData = datas;
            }
            else {
                this.rawData = new Float32Array([1, 0, 0, 0, 1, 0]);
            }
        }
        Matrix3x2.multiply = function (lhs, rhs, out) {
            var a00 = lhs.rawData[0], a01 = lhs.rawData[1], a02 = 0;
            var a10 = lhs.rawData[2], a11 = lhs.rawData[3], a12 = 0;
            var a30 = lhs.rawData[4], a31 = lhs.rawData[5], a32 = 1;
            var b0 = rhs.rawData[0], b1 = rhs.rawData[1], b3 = 0;
            out.rawData[0] = b0 * a00 + b1 * a10 + b3 * a30;
            out.rawData[1] = b0 * a01 + b1 * a11 + b3 * a31;
            b0 = rhs.rawData[2];
            b1 = rhs.rawData[3];
            b3 = 0;
            out.rawData[2] = b0 * a00 + b1 * a10 + b3 * a30;
            out.rawData[3] = b0 * a01 + b1 * a11 + b3 * a31;
            b0 = rhs.rawData[4];
            b1 = rhs.rawData[5];
            b3 = 1;
            out.rawData[4] = b0 * a00 + b1 * a10 + b3 * a30;
            out.rawData[5] = b0 * a01 + b1 * a11 + b3 * a31;
            return out;
        };
        Matrix3x2.fromRotate = function (angle, out) {
            var x = 0, y = 0, z = 1;
            var s = Math.sin(angle);
            var c = Math.cos(angle);
            out.rawData[0] = c;
            out.rawData[1] = s;
            out.rawData[2] = -s;
            out.rawData[3] = c;
            out.rawData[4] = 0;
            out.rawData[5] = 0;
            return out;
        };
        Matrix3x2.fromScale = function (xScale, yScale, out) {
            out.rawData[0] = xScale;
            out.rawData[1] = 0.0;
            out.rawData[2] = 0.0;
            out.rawData[3] = yScale;
            out.rawData[4] = 0.0;
            out.rawData[5] = 0.0;
            return out;
        };
        Matrix3x2.fromTranslate = function (x, y, out) {
            out.rawData[0] = 1.0;
            out.rawData[1] = 0.0;
            out.rawData[2] = 0.0;
            out.rawData[3] = 1.0;
            out.rawData[4] = x;
            out.rawData[5] = y;
            return out;
        };
        Matrix3x2.fromRTS = function (pos, scale, rot, out) {
            var matS = helpMat3x2_1;
            this.fromScale(scale.x, scale.y, matS);
            var matR = helpMat3x2_2;
            this.fromRotate(rot, matR);
            this.multiply(matR, matS, out);
            out.rawData[4] = pos.x;
            out.rawData[5] = pos.y;
        };
        Matrix3x2.transformVector2 = function (mat, inp, out) {
            out.x = inp.x * mat.rawData[0] + inp.y * mat.rawData[2] + mat.rawData[4];
            out.y = inp.x * mat.rawData[1] + inp.y * mat.rawData[3] + mat.rawData[5];
            return out;
        };
        Matrix3x2.transformNormal = function (mat, inp, out) {
            out.x = inp.x * mat.rawData[0] + inp.y * mat.rawData[2];
            out.y = inp.x * mat.rawData[1] + inp.y * mat.rawData[3];
            return out;
        };
        Matrix3x2.inverse = function (src, out) {
            var l1 = src.rawData[0];
            var l2 = src.rawData[1];
            var l5 = src.rawData[2];
            var l6 = src.rawData[3];
            var l13 = src.rawData[4];
            var l14 = src.rawData[5];
            var l26 = -(((l5 * -l14) - (l6 * -l13)));
            var l27 = 1.0 / ((((l1 * l6) + (l2 * -l5))));
            out.rawData[0] = l6 * l27;
            out.rawData[2] = -l5 * l27;
            out.rawData[4] = l26 * l27;
            out.rawData[1] = -(((l2))) * l27;
            out.rawData[3] = (((l1))) * l27;
            out.rawData[5] = (((l1 * -l14) - (l2 * -l13))) * l27;
            return out;
        };
        Matrix3x2.identify = function (out) {
            out.rawData[0] = 1;
            out.rawData[1] = 0;
            out.rawData[2] = 0;
            out.rawData[3] = 1;
            out.rawData[4] = 0;
            out.rawData[5] = 0;
            return out;
        };
        Matrix3x2.copy = function (src, out) {
            for (var i = 0; i < 16; i++) {
                out.rawData[i] = src.rawData[i];
            }
            return out;
        };
        Matrix3x2.decompose = function (src, scale, rotation, translation) {
            translation.x = src.rawData[4];
            translation.y = src.rawData[5];
            var xs = egret3d.sign(src.rawData[0] * src.rawData[1]) < 0 ? -1 : 1;
            var ys = egret3d.sign(src.rawData[2] * src.rawData[3]) < 0 ? -1 : 1;
            scale.x = xs * Math.sqrt(src.rawData[0] * src.rawData[0] + src.rawData[1] * src.rawData[1]);
            scale.y = ys * Math.sqrt(src.rawData[2] * src.rawData[2] + src.rawData[3] * src.rawData[3]);
            if (scale.x === 0 || scale.y === 0) {
                rotation.v = 0;
                return false;
            }
            var sx = src.rawData[0] / scale.x;
            var csx = src.rawData[1] / scale.x;
            var r1 = Math.asin(sx);
            var r2 = Math.acos(csx);
            rotation.v = r1;
            return true;
        };
        return Matrix3x2;
    }());
    egret3d.Matrix3x2 = Matrix3x2;
    __reflect(Matrix3x2.prototype, "egret3d.Matrix3x2");
    var helpMat3x2_1 = new Matrix3x2();
    var helpMat3x2_2 = new Matrix3x2();
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var _helpVector3A = new egret3d.Vector3();
    var _helpVector3B = new egret3d.Vector3();
    /**
     * obb box
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 定向包围盒
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var OBB = (function (_super) {
        __extends(OBB, _super);
        function OBB() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * center
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 包围盒中心
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.center = new egret3d.Vector3();
            /**
             * size
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 包围盒各轴向长
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.size = new egret3d.Vector3();
            /**
             * vectors
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 包围盒世界空间下各个点坐标
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.vectors = [
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
            ];
            _this._directions = [
                new egret3d.Vector3(),
                new egret3d.Vector3(),
                new egret3d.Vector3(),
            ];
            return _this;
        }
        OBB.prototype._computeBoxExtents = function (axis, box, out) {
            var p = egret3d.Vector3.dot(box.center, axis);
            //
            var r0 = Math.abs(egret3d.Vector3.dot(box._directions[0], axis)) * box.size.x * 0.5;
            var r1 = Math.abs(egret3d.Vector3.dot(box._directions[1], axis)) * box.size.y * 0.5;
            var r2 = Math.abs(egret3d.Vector3.dot(box._directions[2], axis)) * box.size.z * 0.5;
            //
            var r = r0 + r1 + r2;
            out.x = p - r;
            out.y = p + r;
            return out;
        };
        OBB.prototype._axisOverlap = function (axis, a, b) {
            var resultA = this._computeBoxExtents(axis, a, _helpVector3A);
            var resultB = this._computeBoxExtents(axis, b, _helpVector3B);
            return !(resultA.x > resultA.y || resultB.x > resultB.y);
        };
        /**
         * clone a obb
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 克隆一个obb
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        OBB.prototype.clone = function () {
            var value = new OBB();
            egret3d.Vector3.copy(this.center, value.center);
            egret3d.Vector3.copy(this.center, value.size);
            for (var key in this._directions) {
                egret3d.Vector3.copy(this._directions[key], value._directions[key]);
            }
            return value;
        };
        /**
         * build by min point and max point
         * @param minimum min point
         * @param maximum max point
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 由最大最小点构建定向包围盒
         * @param minimum 最小点坐标
         * @param maximum 最大点坐标
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        OBB.prototype.setByMaxMin = function (minimum, maximum) {
            egret3d.Vector3.copy(minimum, this.vectors[0]);
            egret3d.Vector3.copy(minimum, this.vectors[1]);
            egret3d.Vector3.copy(minimum, this.vectors[2]);
            egret3d.Vector3.copy(maximum, this.vectors[3]);
            egret3d.Vector3.copy(minimum, this.vectors[4]);
            egret3d.Vector3.copy(maximum, this.vectors[5]);
            egret3d.Vector3.copy(maximum, this.vectors[6]);
            egret3d.Vector3.copy(maximum, this.vectors[7]);
            //
            this.vectors[1].z = maximum.z;
            this.vectors[2].x = maximum.x;
            this.vectors[3].y = minimum.y;
            this.vectors[4].y = maximum.y;
            this.vectors[5].x = minimum.x;
            this.vectors[6].z = minimum.z;
            //
            egret3d.Vector3.add(maximum, minimum, this.center);
            egret3d.Vector3.scale(this.center, 0.5);
            egret3d.Vector3.subtract(maximum, minimum, this.size);
        };
        /**
         * build by center and size
         * @param center center
         * @param size size
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 由中心点和各轴向长度构建定向包围盒
         * @param center 中心点坐标
         * @param size 各轴向长度
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        OBB.prototype.setByCenterSize = function (center, size) {
            egret3d.Vector3.copy(center, this.center);
            egret3d.Vector3.copy(size, this.size);
            //
            var hsx = this.size.x * 0.5;
            var hsy = this.size.y * 0.5;
            var hsz = this.size.z * 0.5;
            var cenx = this.center.x;
            var ceny = this.center.y;
            var cenz = this.center.z;
            //
            egret3d.Vector3.set(cenx - hsx, ceny - hsy, cenz - hsz, this.vectors[0]);
            egret3d.Vector3.set(cenx - hsx, ceny - hsy, cenz + hsz, this.vectors[1]);
            egret3d.Vector3.set(cenx + hsx, ceny - hsy, cenz - hsz, this.vectors[2]);
            egret3d.Vector3.set(cenx + hsx, ceny - hsy, cenz + hsz, this.vectors[3]);
            egret3d.Vector3.set(cenx - hsx, ceny + hsy, cenz - hsz, this.vectors[4]);
            egret3d.Vector3.set(cenx - hsx, ceny + hsy, cenz + hsz, this.vectors[5]);
            egret3d.Vector3.set(cenx + hsx, ceny + hsy, cenz - hsz, this.vectors[6]);
            egret3d.Vector3.set(cenx + hsx, ceny + hsy, cenz + hsz, this.vectors[7]);
        };
        /**
         * update by world matrix
         * @param worldmatrix world matrix
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 刷新定向包围盒
         * @param worldmatrix 世界矩阵
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        OBB.prototype.update = function (worldMatrix) {
            egret3d.Matrix.getTranslation(worldMatrix, this.center);
            egret3d.Matrix.getVector3ByOffset(worldMatrix, 0, this._directions[0]);
            egret3d.Matrix.getVector3ByOffset(worldMatrix, 4, this._directions[1]);
            egret3d.Matrix.getVector3ByOffset(worldMatrix, 8, this._directions[2]);
        };
        /**
         * intersect width obb
         * @param value obb
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * obb的碰撞检测
         * @param value 待检测obb
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        OBB.prototype.intersects = function (value) {
            var a = this;
            var b = value;
            //
            if (!this._axisOverlap(a._directions[0], a, b))
                return false;
            if (!this._axisOverlap(a._directions[1], a, b))
                return false;
            if (!this._axisOverlap(a._directions[2], a, b))
                return false;
            if (!this._axisOverlap(b._directions[0], a, b))
                return false;
            if (!this._axisOverlap(b._directions[1], a, b))
                return false;
            if (!this._axisOverlap(b._directions[2], a, b))
                return false;
            var result = _helpVector3A;
            egret3d.Vector3.cross(a._directions[0], b._directions[0], result);
            if (!this._axisOverlap(result, a, b))
                return false;
            egret3d.Vector3.cross(a._directions[0], b._directions[1], result);
            if (!this._axisOverlap(result, a, b))
                return false;
            egret3d.Vector3.cross(a._directions[0], b._directions[2], result);
            if (!this._axisOverlap(result, a, b))
                return false;
            egret3d.Vector3.cross(a._directions[1], b._directions[0], result);
            if (!this._axisOverlap(result, a, b))
                return false;
            egret3d.Vector3.cross(a._directions[1], b._directions[1], result);
            if (!this._axisOverlap(result, a, b))
                return false;
            egret3d.Vector3.cross(a._directions[1], b._directions[2], result);
            if (!this._axisOverlap(result, a, b))
                return false;
            egret3d.Vector3.cross(a._directions[2], b._directions[0], result);
            if (!this._axisOverlap(result, a, b))
                return false;
            egret3d.Vector3.cross(a._directions[2], b._directions[1], result);
            if (!this._axisOverlap(result, a, b))
                return false;
            egret3d.Vector3.cross(a._directions[2], b._directions[2], result);
            if (!this._axisOverlap(result, a, b))
                return false;
            return true;
        };
        /**
         * update vectors by world matrix
         * @param vectors vectors
         * @param worldMatrix world matrix
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 计算世界空间下各点坐标
         * @param vectors 结果数组
         * @param worldMatrix 物体的世界矩阵
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        OBB.prototype.caclWorldVectors = function (vectors, worldMatrix) {
            for (var i = 0; i < 8; ++i) {
                egret3d.Matrix.transformVector3(this.vectors[i], worldMatrix, vectors[i]);
            }
        };
        OBB.prototype.deserialize = function (element) {
            this.center.deserialize(element.center);
            this.size.deserialize(element.size);
        };
        __decorate([
            paper.serializedField
        ], OBB.prototype, "center", void 0);
        __decorate([
            paper.serializedField
        ], OBB.prototype, "size", void 0);
        return OBB;
    }(paper.SerializableObject));
    egret3d.OBB = OBB;
    __reflect(OBB.prototype, "egret3d.OBB");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * Asset Bundle
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 资源包.
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var AssetBundle = (function (_super) {
        __extends(AssetBundle, _super);
        function AssetBundle() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.assets = [];
            return _this;
        }
        /**
         * @inheritDoc
         */
        AssetBundle.prototype.dispose = function () {
            this.assets.length = 0;
        };
        /**
         * @inheritDoc
         */
        AssetBundle.prototype.caclByteLength = function () {
            return 0;
        };
        /**
         *
         */
        AssetBundle.prototype.$parse = function (json) {
            this.assets.length = 0;
            if (!json.assets || json.assets.length === 0) {
                return;
            }
            for (var _i = 0, _a = json.assets; _i < _a.length; _i++) {
                var asset = _a[_i];
                this.assets.push(asset);
            }
        };
        return AssetBundle;
    }(paper.Asset));
    egret3d.AssetBundle = AssetBundle;
    __reflect(AssetBundle.prototype, "egret3d.AssetBundle");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var _helpVector3A = new egret3d.Vector3();
    var _helpVector3B = new egret3d.Vector3();
    var _helpVector3C = new egret3d.Vector3();
    var _helpVector3D = new egret3d.Vector3();
    var _helpVector3E = new egret3d.Vector3();
    var _helpVector3F = new egret3d.Vector3();
    var _helpVector3G = new egret3d.Vector3();
    var _helpVector3H = new egret3d.Vector3();
    var _helpVectors = [
        _helpVector3A,
        _helpVector3B,
        _helpVector3C,
        _helpVector3D,
        _helpVector3E,
        _helpVector3F,
        _helpVector3G,
        _helpVector3H,
    ];
    var helpVec3_1 = new egret3d.Vector3();
    var helpVec3_2 = new egret3d.Vector3();
    var helpVec3_3 = new egret3d.Vector3();
    var helpVec3_4 = new egret3d.Vector3();
    var helpVec3_5 = new egret3d.Vector3();
    var boxIndices = [
        0, 1, 2, 3,
        4, 5, 6, 7,
        1, 3, 5, 7,
        0, 2, 4, 6,
        6, 2, 7, 3,
        0, 4, 1, 5
    ];
    /**
     * ray
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 射线
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Ray = (function () {
        /**
         * build a ray
         * @param origin ray origin point
         * @param dir ray direction vector
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 构建一条射线
         * @param origin 射线起点
         * @param dir 射线方向
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        function Ray(origin, direction) {
            this.origin = egret3d.Vector3.copy(origin, new egret3d.Vector3());
            this.direction = egret3d.Vector3.copy(direction, new egret3d.Vector3());
        }
        /**
         * intersect with aabb
         * @param aabb aabb instance
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 与aabb碰撞相交检测
         * @param aabb aabb实例
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Ray.prototype.intersectAABB = function (aabb) {
            return this.intersectBoxMinMax(aabb.minimum, aabb.maximum);
        };
        /**
         * intersect with transform plane
         * @param tran tranform instance
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 与transform表示的plane碰撞相交检测，主要用于2d检测
         * @param tran transform实例
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Ray.prototype.intersectPlaneTransform = function (tran) {
            var pickinfo = null;
            var panelpoint = tran.getPosition();
            var forward = helpVec3_1;
            tran.getForward(forward);
            var hitposition = this.intersectPlane(panelpoint, forward);
            if (hitposition) {
                pickinfo = new egret3d.PickInfo();
                pickinfo.hitposition = hitposition;
                pickinfo.distance = egret3d.Vector3.getDistance(pickinfo.hitposition, this.origin);
            }
            return pickinfo;
        };
        Ray.prototype.intersectPlane = function (planePoint, planeNormal) {
            var vp1 = planeNormal.x;
            var vp2 = planeNormal.y;
            var vp3 = planeNormal.z;
            var n1 = planePoint.x;
            var n2 = planePoint.y;
            var n3 = planePoint.z;
            var v1 = this.direction.x;
            var v2 = this.direction.y;
            var v3 = this.direction.z;
            var m1 = this.origin.x;
            var m2 = this.origin.y;
            var m3 = this.origin.z;
            var vpt = v1 * vp1 + v2 * vp2 + v3 * vp3;
            if (vpt === 0) {
                return null;
            }
            else {
                var t = ((n1 - m1) * vp1 + (n2 - m2) * vp2 + (n3 - m3) * vp3) / vpt;
                return new egret3d.Vector3(m1 + v1 * t, m2 + v2 * t, m3 + v3 * t);
            }
        };
        /**
         * intersect with collider
         * @param tran tranform instance
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 与碰撞盒相交检测
         * @param tran 待检测带碰撞盒的transform
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Ray.prototype.intersectCollider = function (tran) {
            var _collider = tran.gameObject.getComponent(egret3d.BaseCollider);
            var pickinfo = null;
            if (_collider instanceof egret3d.BoxCollider) {
                var obb = _collider.bounds;
                obb.caclWorldVectors(_helpVectors, _collider.gameObject.transform.getWorldMatrix());
                // let data = MeshData.genBoxByArray(vecs); !!!???
                for (var index = 0; index < boxIndices.length; index += 3) {
                    var verindex0 = boxIndices[index];
                    var verindex1 = boxIndices[index + 1];
                    var verindex2 = boxIndices[index + 2];
                    var p0 = _helpVectors[verindex0];
                    var p1 = _helpVectors[verindex1];
                    var p2 = _helpVectors[verindex2];
                    var result = this.intersectsTriangle(p0, p1, p2);
                    if (result) {
                        if (result.distance < 0)
                            continue;
                        if (!pickinfo || pickinfo.distance > result.distance) {
                            pickinfo = result;
                            var tdir = helpVec3_1;
                            egret3d.Vector3.copy(this.direction, tdir);
                            egret3d.Vector3.scale(tdir, result.distance);
                            egret3d.Vector3.add(this.origin, tdir, pickinfo.hitposition);
                        }
                    }
                }
            }
            // else if (_collider instanceof MeshCollider) { // TODO
            //     let mesh = _collider.getBound();
            //     if (mesh != null) {
            //         pickinfo = mesh.intersects(this, tran.getWorldMatrix());
            //     }
            // }
            //  else if (_collider instanceof CanvasRenderer) {
            //     pickinfo = this.intersectPlaneTransform(tran);
            // }
            return pickinfo;
        };
        /**
         * intersect with box
         * @param minimum min vector
         * @param maximum max vector
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 与最大最小点表示的box相交检测
         * @param minimum 最小点
         * @param maximum 最大点
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Ray.prototype.intersectBoxMinMax = function (minimum, maximum) {
            var d = 0.0;
            var maxValue = Number.MAX_VALUE;
            var inv;
            var min;
            var max;
            var temp;
            if (Math.abs(this.direction.x) < 0.0000001) {
                if (this.origin.x < minimum.x || this.origin.x > maximum.x) {
                    return false;
                }
            }
            else {
                inv = 1.0 / this.direction.x;
                min = (minimum.x - this.origin.x) * inv;
                max = (maximum.x - this.origin.x) * inv;
                if (max === -Infinity) {
                    max = Infinity;
                }
                if (min > max) {
                    temp = min;
                    min = max;
                    max = temp;
                }
                d = Math.max(min, d);
                maxValue = Math.min(max, maxValue);
                if (d > maxValue) {
                    return false;
                }
            }
            if (Math.abs(this.direction.y) < 0.0000001) {
                if (this.origin.y < minimum.y || this.origin.y > maximum.y) {
                    return false;
                }
            }
            else {
                inv = 1.0 / this.direction.y;
                min = (minimum.y - this.origin.y) * inv;
                max = (maximum.y - this.origin.y) * inv;
                if (max === -Infinity) {
                    max = Infinity;
                }
                if (min > max) {
                    temp = min;
                    min = max;
                    max = temp;
                }
                d = Math.max(min, d);
                maxValue = Math.min(max, maxValue);
                if (d > maxValue) {
                    return false;
                }
            }
            if (Math.abs(this.direction.z) < 0.0000001) {
                if (this.origin.z < minimum.z || this.origin.z > maximum.z) {
                    return false;
                }
            }
            else {
                inv = 1.0 / this.direction.z;
                min = (minimum.z - this.origin.z) * inv;
                max = (maximum.z - this.origin.z) * inv;
                if (max === -Infinity) {
                    max = Infinity;
                }
                if (min > max) {
                    temp = min;
                    min = max;
                    max = temp;
                }
                d = Math.max(min, d);
                maxValue = Math.min(max, maxValue);
                if (d > maxValue) {
                    return false;
                }
            }
            return true;
        };
        /**
         * intersect with sphere
         * @param center sphere center
         * @param radius sphere radius
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 与球相交检测
         * @param center 球圆心坐标
         * @param radius 球半径
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Ray.prototype.intersectsSphere = function (center, radius) {
            var center_ori = helpVec3_1;
            egret3d.Vector3.subtract(center, this.origin, center_ori);
            var raydist = egret3d.Vector3.dot(this.direction, center_ori);
            if (raydist < 0)
                return false; // 到圆心的向量在方向向量上的投影为负，夹角不在-90与90之间
            var orilen2 = egret3d.Vector3.getSqrLength(center_ori);
            var rad2 = radius * radius;
            if (orilen2 < rad2)
                return true; // 射线起点在球里
            var d = rad2 - (orilen2 - raydist * raydist);
            if (d < 0)
                return false;
            return true;
        };
        /**
         * intersect with triangle
         * @param vertex0
         * @param vertex1
         * @param vertex2
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 与三角形相交检测
         * @param vertex0
         * @param vertex1
         * @param vertex2
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Ray.prototype.intersectsTriangle = function (vertex0, vertex1, vertex2) {
            var _edge1 = helpVec3_1;
            var _edge2 = helpVec3_2;
            var _pvec = helpVec3_3;
            var _tvec = helpVec3_4;
            var _qvec = helpVec3_5;
            egret3d.Vector3.subtract(vertex1, vertex0, _edge1);
            egret3d.Vector3.subtract(vertex2, vertex0, _edge2);
            egret3d.Vector3.cross(this.direction, _edge2, _pvec);
            var det = egret3d.Vector3.dot(_edge1, _pvec);
            if (det === 0) {
                return null;
            }
            var invdet = 1 / det;
            egret3d.Vector3.subtract(this.origin, vertex0, _tvec);
            var bu = egret3d.Vector3.dot(_tvec, _pvec) * invdet;
            if (bu < 0 || bu > 1.0) {
                return null;
            }
            egret3d.Vector3.cross(_tvec, _edge1, _qvec);
            var bv = egret3d.Vector3.dot(this.direction, _qvec) * invdet;
            if (bv < 0 || bu + bv > 1.0) {
                return null;
            }
            var pickInfo = new egret3d.PickInfo();
            pickInfo.distance = egret3d.Vector3.dot(_edge2, _qvec) * invdet;
            pickInfo.textureCoordA.x = bu;
            pickInfo.textureCoordA.y = bv;
            return pickInfo;
        };
        return Ray;
    }());
    egret3d.Ray = Ray;
    __reflect(Ray.prototype, "egret3d.Ray");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var ShaderLib;
    (function (ShaderLib) {
        ShaderLib.boneeff_vert = "attribute vec4 _glesVertex;   \nattribute vec4 _glesBlendIndex4;\nattribute vec4 _glesBlendWeight4;\nattribute vec4 _glesMultiTexCoord0;\nuniform highp mat4 glstate_matrix_mvp;\nuniform highp vec4 glstate_vec4_bones[110];\nuniform highp vec4 _MainTex_ST; \nvarying highp vec2 xlv_TEXCOORD0;\nmat4 buildMat4(int index)\n{\n\tvec4 quat = glstate_vec4_bones[index * 2 + 0];\n\tvec4 translation = glstate_vec4_bones[index * 2 + 1];\n\tfloat xy2 = 2.0 * quat.x * quat.y;\n\tfloat xz2 = 2.0 * quat.x * quat.z;\n\tfloat xw2 = 2.0 * quat.x * quat.w;\n\tfloat yz2 = 2.0 * quat.y * quat.z;\n\tfloat yw2 = 2.0 * quat.y * quat.w;\n\tfloat zw2 = 2.0 * quat.z * quat.w;\n\tfloat xx = quat.x * quat.x;\n\tfloat yy = quat.y * quat.y;\n\tfloat zz = quat.z * quat.z;\n\tfloat ww = quat.w * quat.w;\n\tmat4 matrix = mat4(\n\txx - yy - zz + ww, xy2 + zw2, xz2 - yw2, 0,\n\txy2 - zw2, -xx + yy - zz + ww, yz2 + xw2, 0,\n\txz2 + yw2, yz2 - xw2, -xx - yy + zz + ww, 0,\n\ttranslation.x, translation.y, translation.z, 1);\n\treturn matrix;\n}\nhighp vec4 calcVertex(highp vec4 srcVertex,highp vec4 blendIndex,highp vec4 blendWeight)\n{\n\tint i = int(blendIndex.x);  \n    int i2 =int(blendIndex.y);\n\tint i3 =int(blendIndex.z);\n\tint i4 =int(blendIndex.w);\n\t\n    mat4 mat = buildMat4(i)*blendWeight.x \n\t\t\t + buildMat4(i2)*blendWeight.y \n\t\t\t + buildMat4(i3)*blendWeight.z \n\t\t\t + buildMat4(i4)*blendWeight.w;\n\treturn mat* srcVertex;\n}\nvoid main()\n{                                               \n    highp vec4 tmpvar_1;                        \n    tmpvar_1.w = 1.0;                           \n    tmpvar_1.xyz = calcVertex(_glesVertex,_glesBlendIndex4,_glesBlendWeight4).xyz;  \n\t\t\t \n    gl_Position = glstate_matrix_mvp *  tmpvar_1;\n\txlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw;  \n}";
        ShaderLib.bone_vert = "attribute vec4 _glesVertex;   \nattribute vec4 _glesBlendIndex4;\nattribute vec4 _glesBlendWeight4;\nattribute vec4 _glesMultiTexCoord0;\nuniform highp mat4 glstate_matrix_mvp;\nuniform highp mat4 glstate_matrix_bones[24];\nuniform highp vec4 _MainTex_ST; \nvarying highp vec2 xlv_TEXCOORD0;\nvoid main()                                     \n{                                               \n    highp vec4 tmpvar_1;                        \n    tmpvar_1.w = 1.0;                           \n    tmpvar_1.xyz = _glesVertex.xyz;  \n\t\n    int i = int(_glesBlendIndex4.x);  \n    int i2 =int(_glesBlendIndex4.y);\n\tint i3 =int(_glesBlendIndex4.z);\n\tint i4 =int(_glesBlendIndex4.w);\n\t\n    mat4 mat = glstate_matrix_bones[i]*_glesBlendWeight4.x \n\t\t\t + glstate_matrix_bones[i2]*_glesBlendWeight4.y \n\t\t\t + glstate_matrix_bones[i3]*_glesBlendWeight4.z \n\t\t\t + glstate_matrix_bones[i4]*_glesBlendWeight4.w;\n\t\t\t \n    gl_Position = (glstate_matrix_mvp * mat)* tmpvar_1;\n\txlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n}";
        ShaderLib.code2_frag = "void main() {\n    gl_FragData[0] = vec4(1.0, 1.0, 1.0, 1.0);\n}";
        ShaderLib.code_frag = "uniform sampler2D _MainTex;                                                 \nvarying lowp vec4 xlv_COLOR;                                                 \nvarying highp vec2 xlv_TEXCOORD0;   \nvoid main() {\n    lowp vec4 col_1;    \n    mediump vec4 prev_2;\n    lowp vec4 tmpvar_3;\n    tmpvar_3 = (xlv_COLOR * texture2D(_MainTex, xlv_TEXCOORD0));\n    prev_2 = tmpvar_3;\n    mediump vec4 tmpvar_4;\n    tmpvar_4 = mix(vec4(1.0, 1.0, 1.0, 1.0), prev_2, prev_2.wwww);\n    col_1 = tmpvar_4;\n    col_1.x =xlv_TEXCOORD0.x;\n    col_1.y =xlv_TEXCOORD0.y;\n    gl_FragData[0] = col_1;\n}";
        ShaderLib.code_vert = "attribute vec4 _glesVertex;\nattribute vec4 _glesColor;             \nattribute vec4 _glesMultiTexCoord0;    \nuniform highp mat4 glstate_matrix_mvp; \nvarying lowp vec4 xlv_COLOR;           \nvarying highp vec2 xlv_TEXCOORD0;      \nvoid main() {                                          \n    highp vec4 tmpvar_1;                   \n    tmpvar_1.w = 1.0;                      \n    tmpvar_1.xyz = _glesVertex.xyz;        \n    xlv_COLOR = _glesColor;                \n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy;\n    gl_Position = (glstate_matrix_mvp * tmpvar_1);\n}";
        ShaderLib.depthpackage_frag = "#include <packing>\nvoid main() {\n\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n}";
        ShaderLib.depthpackage_vert = "attribute vec3 _glesVertex;\nuniform mat4 glstate_matrix_mvp;\nvoid main() { \n    gl_Position = glstate_matrix_mvp * vec4(_glesVertex, 1.0);\n}";
        ShaderLib.diffuselightmap_frag = "uniform sampler2D _MainTex;\nuniform sampler2D _LightmapTex;\nuniform lowp float _AlphaCut;\nvarying highp vec2 xlv_TEXCOORD0;\nvarying highp vec2 xlv_TEXCOORD1;\nlowp vec3 decode_hdr(lowp vec4 data)\n{\n    highp float power =pow( 2.0 ,data.a * 255.0 - 128.0);\n    return data.rgb * power * 1.0 ;\n}\nvoid main() \n{\n    lowp vec4 outColor = texture2D(_MainTex, xlv_TEXCOORD0);\n    if(outColor.a < _AlphaCut)\n        discard;\n    lowp vec4 lightmap = texture2D(_LightmapTex, xlv_TEXCOORD1);\n    outColor.xyz *= decode_hdr(lightmap);\n    gl_FragData[0] = outColor;\n}";
        ShaderLib.diffuselightmap_vert = "attribute vec4 _glesVertex;\nattribute vec4 _glesMultiTexCoord0;\nattribute vec4 _glesMultiTexCoord1;\nuniform highp mat4 glstate_matrix_mvp;\nuniform highp vec4 glstate_lightmapOffset;\nuniform lowp float glstate_lightmapUV;\nuniform highp vec4 _MainTex_ST; \nvarying highp vec2 xlv_TEXCOORD0;\nvarying highp vec2 xlv_TEXCOORD1;\nvoid main()\n{\n    highp vec4 tmpvar_1;\n    tmpvar_1.w = 1.0;\n    tmpvar_1.xyz = _glesVertex.xyz;\n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw;  \n    highp vec2 beforelightUV = _glesMultiTexCoord1.xy;\n    if(glstate_lightmapUV == 0.0)\n    {\n        beforelightUV = _glesMultiTexCoord0.xy;\n    }\n    highp float u = beforelightUV.x * glstate_lightmapOffset.x + glstate_lightmapOffset.z;\n    highp float v = 1.0 - ((1.0 - beforelightUV.y) * glstate_lightmapOffset.y + glstate_lightmapOffset.w);\n    xlv_TEXCOORD1 = vec2(u,v);\n    gl_Position = (glstate_matrix_mvp * tmpvar_1);\n}";
        ShaderLib.diffuse_frag = "uniform sampler2D _MainTex;\nuniform lowp float _AlphaCut;\nvarying highp vec2 xlv_TEXCOORD0;\nvoid main() {\n    lowp vec4 tmpvar_3 = texture2D(_MainTex, xlv_TEXCOORD0);\n    if(tmpvar_3.a < _AlphaCut)\n        discard;\n    gl_FragData[0] = tmpvar_3;\n}";
        ShaderLib.diffuse_vert = "attribute vec4 _glesVertex;\nattribute vec4 _glesMultiTexCoord0;\nuniform highp mat4 glstate_matrix_mvp;\nuniform highp vec4 _MainTex_ST;  \nvarying highp vec2 xlv_TEXCOORD0;\nvoid main() {\n    highp vec4 tmpvar_1;\n    tmpvar_1.w = 1.0;\n    tmpvar_1.xyz = _glesVertex.xyz;\n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw;  \n    gl_Position = (glstate_matrix_mvp * tmpvar_1);\n}";
        ShaderLib.distancepackage_frag = "#include <packing>\nvarying vec3 xlv_POS;\nuniform vec4 glstate_referencePosition;\nuniform float glstate_nearDistance;\nuniform float glstate_farDistance;\nvoid main() {\n    float dist = length( xlv_POS - glstate_referencePosition.xyz );\n\tdist = ( dist - glstate_nearDistance ) / ( glstate_farDistance - glstate_nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}";
        ShaderLib.distancepackage_vert = "attribute vec3 _glesVertex;\nuniform mat4 glstate_matrix_mvp;\nuniform mat4 glstate_matrix_model;\nvarying vec3 xlv_POS;\nvoid main() {   \n    xlv_POS = (glstate_matrix_model * vec4(_glesVertex, 1.0)).xyz;\n    gl_Position = glstate_matrix_mvp * vec4(_glesVertex, 1.0);\n}";
        ShaderLib.lambert_frag = "#extension GL_OES_standard_derivatives : enable\nuniform sampler2D _MainTex;\nuniform vec4 _Color;         \n#include <bsdfs>\n#include <light_pars_frag>\n#include <shadowMap_pars_frag>\nvarying vec3 xlv_POS;\nvarying vec3 xlv_NORMAL;                \nvarying vec2 xlv_TEXCOORD0;\n#ifdef USE_NORMAL_MAP\n    #include <tbn>\n    #include <tsn>\n    uniform sampler2D _NormalTex;\n#endif\n#include <bumpMap_pars_frag>\nvoid main() {\n    vec4 outColor = vec4(0., 0., 0., 1.);\n    vec4 diffuseColor = _Color * texture2D(_MainTex, xlv_TEXCOORD0);\n    #include <normal_frag>\n    #include <light_frag>\n    outColor.a = diffuseColor.a;\n    gl_FragColor = outColor;\n}";
        ShaderLib.lambert_vert = "attribute vec3 _glesVertex;   \nattribute vec3 _glesNormal;               \nattribute vec4 _glesMultiTexCoord0;    \nuniform mat4 glstate_matrix_mvp;      \nuniform mat4 glstate_matrix_model;\n#include <shadowMap_pars_vert>\nvarying vec3 xlv_POS;\nvarying vec3 xlv_NORMAL;                \nvarying vec2 xlv_TEXCOORD0;\n#include <transpose>\n#include <inverse>\nvoid main() {   \n    vec4 tmpvar_1 = vec4(_glesVertex.xyz, 1.0);                            \n    vec3 normal = (transpose(inverse(glstate_matrix_model)) * vec4(_glesNormal, 1.0)).xyz;\n    xlv_NORMAL = normal;\n    #ifdef FLIP_SIDED\n    \txlv_NORMAL = - xlv_NORMAL;\n    #endif\n    vec3 worldpos = (glstate_matrix_model * tmpvar_1).xyz;\n    xlv_POS = worldpos; \n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy;\n    #include <shadowMap_vert>\n     \n    gl_Position = (glstate_matrix_mvp * tmpvar_1);\n}";
        ShaderLib.line_frag = "varying lowp vec4 xlv_COLOR;\nvoid main() {\n    gl_FragData[0] = xlv_COLOR;\n}";
        ShaderLib.line_vert = "attribute vec4 _glesVertex;\nattribute vec4 _glesColor;\nuniform highp mat4 glstate_matrix_mvp;\nvarying lowp vec4 xlv_COLOR;\nvoid main() {\n    highp vec4 tmpvar_1;\n    tmpvar_1.w = 1.0;\n    tmpvar_1.xyz = _glesVertex.xyz;\n    xlv_COLOR = _glesColor;\n    gl_Position = (glstate_matrix_mvp * tmpvar_1);\n}";
        ShaderLib.materialcolor_vert = "attribute vec4 _glesVertex;\nuniform vec4 _Color;\nuniform highp mat4 glstate_matrix_mvp;\nvarying lowp vec4 xlv_COLOR;\nvoid main() {\n    highp vec4 tmpvar_1;\n    tmpvar_1.w = 1.0;\n    tmpvar_1.xyz = _glesVertex.xyz;\n    xlv_COLOR = _Color;\n    gl_Position = (glstate_matrix_mvp * tmpvar_1);\n}";
        ShaderLib.postdepth_frag = "precision highp float;\nconst float PackUpscale = 256. / 255.; \nconst float UnpackDownscale = 255. / 256.; \nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) \n{\n    vec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\n    return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) \n{\n    return dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( const in float v ) \n{\n    vec2 r = vec2( fract( v * PackFactors.z ), v );\n\tr.y -= r.x * ShiftRight8;\n    return r * PackUpscale;\n}\nfloat unpackRGToDepth( const in vec2 v ) \n{\n    return dot( v.xy, UnpackFactors.zw );\n}\nvec3 packDepthToRGB( const in float v ) \n{\n    vec3 r = vec3( fract( v * PackFactors.yz ), v );\n\tr.yz -= r.xy * ShiftRight8;\n    return r * PackUpscale;\n}\nfloat unpackRGBToDepth( const in vec3 v ) \n{\n    return dot( v.xyz, UnpackFactors.yzw );\n}\nvoid main() \n{\n    float z = gl_FragCoord.z;    gl_FragColor=packDepthToRGBA(z);\n}";
        ShaderLib.postdepth_vert = "precision highp float;\nattribute vec4 _glesVertex;    \nuniform highp mat4 glstate_matrix_mvp;      \n            \nvoid main()                                     \n{        \n    gl_Position = (glstate_matrix_mvp * _glesVertex);  \n}";
        ShaderLib.postquaddepth_frag = "precision mediump float;\nvarying highp vec2 xlv_TEXCOORD0;       \nuniform sampler2D _DepthTex;   \nuniform sampler2D _MainTex;  \nconst float PackUpscale = 256. / 255.; \nconst float UnpackDownscale = 255. / 256.; \nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) \n{\n    vec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\n    return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) \n{\n    return dot( v, UnpackFactors );\n}\nfloat planeDistance(const in vec3 positionA, const in vec3 normalA, \n                    const in vec3 positionB, const in vec3 normalB) \n{\n  vec3 positionDelta = positionB-positionA;\n  float planeDistanceDelta = max(abs(dot(positionDelta, normalA)), abs(dot(positionDelta, normalB)));\n  return planeDistanceDelta;\n}\nvoid main()         \n{\n    lowp vec4 c1=texture2D(_DepthTex, xlv_TEXCOORD0+vec2(0.001,0));\n    lowp vec4 c2=texture2D(_DepthTex, xlv_TEXCOORD0+vec2(-0.001,0));\n    lowp vec4 c3=texture2D(_DepthTex, xlv_TEXCOORD0+vec2(0,0.001));\n    lowp vec4 c4=texture2D(_DepthTex, xlv_TEXCOORD0+vec2(0,-0.001));\n    highp float z1 = unpackRGBAToDepth(c1);\n    highp float z2 = unpackRGBAToDepth(c2);\n    highp float z3 = unpackRGBAToDepth(c3);\n    highp float z4 = unpackRGBAToDepth(c4);\n    highp float d = clamp(  (abs(z2-z1)+abs(z4-z3))*10.0,0.0,1.0);\n    lowp vec4 c=texture2D(_MainTex, xlv_TEXCOORD0);\n    lowp float g = c.r*0.3+c.g*0.6+c.b*0.1;\n    gl_FragColor =mix(vec4(g,g,g,1.),vec4(1.0,1.0,0.0,1.0),d);}";
        ShaderLib.postquad_vert = "attribute vec4 _glesVertex;\nattribute vec4 _glesMultiTexCoord0; \nuniform highp vec4 _MainTex_ST; \nvarying highp vec2 xlv_TEXCOORD0;   \nvoid main()                     \n{ \n    gl_Position = _glesVertex;\n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw; \n}   ";
        ShaderLib.tintcolor_frag = "uniform sampler2D _MainTex;\nuniform lowp float _AlphaCut;\nuniform lowp vec4 _TintColor;\nvarying highp vec2 xlv_TEXCOORD0;\nvoid main() \n{\n    lowp vec4 tmpvar_3 = _TintColor*texture2D(_MainTex, xlv_TEXCOORD0);\n    if(tmpvar_3.a < _AlphaCut)\n        discard;\n    gl_FragData[0] = tmpvar_3;\n}";
        ShaderLib.transparentdiffuse_vert = "";
        ShaderLib.uifont_frag = "precision mediump float;\nuniform sampler2D _MainTex;\nvarying lowp vec4 xlv_COLOR;\nvarying lowp vec4 xlv_COLOREx;\nvarying highp vec2 xlv_TEXCOORD0;  \nvoid main() {\n    float scale = 10.0;\n    float d = (texture2D(_MainTex, xlv_TEXCOORD0).r - 0.5) * scale;    float bd = (texture2D(_MainTex, xlv_TEXCOORD0).r - 0.34) * scale;\n    float c=xlv_COLOR.a * clamp ( d,0.0,1.0);\n    float bc=xlv_COLOREx.a * clamp ( bd,0.0,1.0);\n    bc =min(1.0-c,bc);\n    gl_FragData[0] =xlv_COLOR*c + xlv_COLOREx*bc;\n}";
        ShaderLib.uifont_vert = "attribute vec4 _glesVertex;   \nattribute vec4 _glesColor;                  \nattribute vec4 _glesColorEx;                  \nattribute vec4 _glesMultiTexCoord0;         \nuniform highp mat4 glstate_matrix_mvp;      \nvarying lowp vec4 xlv_COLOR;                \nvarying lowp vec4 xlv_COLOREx;                                                 \nvarying highp vec2 xlv_TEXCOORD0;           \nvoid main() {                                               \n    highp vec4 tmpvar_1;                        \n    tmpvar_1.w = 1.0;                           \n    tmpvar_1.xyz = _glesVertex.xyz;             \n    xlv_COLOR = _glesColor;                     \n    xlv_COLOREx = _glesColorEx;                     \n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy;     \n    gl_Position = (glstate_matrix_mvp * tmpvar_1);  \n}";
        ShaderLib.ui_frag = "uniform sampler2D _MainTex;\nvarying lowp vec4 xlv_COLOR;\nvarying highp vec2 xlv_TEXCOORD0;\nvoid main() {\n    lowp vec4 tmpvar_3;\n    tmpvar_3 = (xlv_COLOR * texture2D(_MainTex, xlv_TEXCOORD0));\n    gl_FragData[0] = tmpvar_3;\n}";
        ShaderLib.vertcolor_frag = "uniform sampler2D _MainTex;                                                 \nvarying lowp vec4 xlv_COLOR;                                                 \nvarying highp vec2 xlv_TEXCOORD0;   \nvoid main() \n{\n    lowp vec4 col_1;    \n    mediump vec4 prev_2;\n    lowp vec4 tmpvar_3;\n    tmpvar_3 = (texture2D(_MainTex, xlv_TEXCOORD0));\n    gl_FragData[0] = tmpvar_3;\n}";
        ShaderLib.vertcolor_vert = "attribute vec4 _glesVertex;   \nattribute vec4 _glesNormal;   \nattribute vec4 _glesColor;                  \nattribute vec4 _glesMultiTexCoord0;        \nuniform highp mat4 glstate_matrix_mvp;   \nvarying lowp vec4 xlv_COLOR;                \nvarying highp vec2 xlv_TEXCOORD0;   \nuniform highp vec4 _MainTex_ST;       \nvoid main()                                     \n{                                               \n    highp vec4 tmpvar_1;                        \n    tmpvar_1.w = 1.0;                           \n    tmpvar_1.xyz = _glesVertex.xyz;             \n    xlv_COLOR = _glesColor;                     \n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw;   \n    gl_Position = (glstate_matrix_mvp * tmpvar_1);  \n}\n";
    })(ShaderLib = egret3d.ShaderLib || (egret3d.ShaderLib = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var ShaderChunk;
    (function (ShaderChunk) {
        ShaderChunk.begin_vert = "vec3 transformed = vec3(_glesVertex);\n    vec3 objectNormal = vec3(_glesNormal);\n// #endif";
        ShaderChunk.bsdfs = "\nvec3 BRDF_Diffuse_Lambert(vec3 diffuseColor) {\n    return RECIPROCAL_PI * diffuseColor;\n}\nvec4 F_Schlick( const in vec4 specularColor, const in float dotLH ) {\n\tfloat fresnel = pow( 1.0 - dotLH, 5.0 );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nvec4 BRDF_Specular_BlinnPhong(vec4 specularColor, vec3 N, vec3 L, vec3 V, float shininess) {\n    vec3 H = normalize(L + V);\n    float dotNH = saturate(dot(N, H));\n    float dotLH = saturate(dot(L, H));\n    vec4 F = F_Schlick(specularColor, dotLH);\n    float G = G_BlinnPhong_Implicit( );\n    float D = D_BlinnPhong(shininess, dotNH);\n    return F * G * D;\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nvec4 BRDF_Specular_GGX(vec4 specularColor, vec3 N, vec3 L, vec3 V, float roughness) {\n\tfloat alpha = pow2( roughness );\n\tvec3 H = normalize(L + V);\n\tfloat dotNL = saturate( dot(N, L) );\n\tfloat dotNV = saturate( dot(N, V) );\n\tfloat dotNH = saturate( dot(N, H) );\n\tfloat dotLH = saturate( dot(L, H) );\n\tvec4 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * G * D;\n}\nvec4 BRDF_Specular_GGX_Environment( const in vec3 N, const in vec3 V, const in vec4 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( N, V ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}";
        ShaderChunk.bumpMap_pars_frag = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd(vec2 uv) {\n\t\tvec2 dSTdx = dFdx( uv );\n\t\tvec2 dSTdy = dFdy( uv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, uv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, uv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, uv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n";
        ShaderChunk.inverse = "mat4 inverse(mat4 m) {\n    float\n    a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],\n    a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],\n    a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],\n    a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],\n    b00 = a00 * a11 - a01 * a10,\n    b01 = a00 * a12 - a02 * a10,\n    b02 = a00 * a13 - a03 * a10,\n    b03 = a01 * a12 - a02 * a11,\n    b04 = a01 * a13 - a03 * a11,\n    b05 = a02 * a13 - a03 * a12,\n    b06 = a20 * a31 - a21 * a30,\n    b07 = a20 * a32 - a22 * a30,\n    b08 = a20 * a33 - a23 * a30,\n    b09 = a21 * a32 - a22 * a31,\n    b10 = a21 * a33 - a23 * a31,\n    b11 = a22 * a33 - a23 * a32,\n    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;\n    return mat4(\n        a11 * b11 - a12 * b10 + a13 * b09,\n        a02 * b10 - a01 * b11 - a03 * b09,\n        a31 * b05 - a32 * b04 + a33 * b03,\n        a22 * b04 - a21 * b05 - a23 * b03,\n        a12 * b08 - a10 * b11 - a13 * b07,\n        a00 * b11 - a02 * b08 + a03 * b07,\n        a32 * b02 - a30 * b05 - a33 * b01,\n        a20 * b05 - a22 * b02 + a23 * b01,\n        a10 * b10 - a11 * b08 + a13 * b06,\n        a01 * b08 - a00 * b10 - a03 * b06,\n        a30 * b04 - a31 * b02 + a33 * b00,\n        a21 * b02 - a20 * b04 - a23 * b00,\n        a11 * b07 - a10 * b09 - a12 * b06,\n        a00 * b09 - a01 * b07 + a02 * b06,\n        a31 * b01 - a30 * b03 - a32 * b00,\n        a20 * b03 - a21 * b01 + a22 * b00) / det;\n}";
        ShaderChunk.light_frag = "#ifdef USE_LIGHT    \n    vec3 L;\n    vec3 light;\n    vec3 totalReflect = vec3(0., 0., 0.);\n    #ifdef USE_DIRECT_LIGHT\n        for(int i = 0; i < USE_DIRECT_LIGHT; i++) {\n            light = vec3(glstate_directLights[i * 15 + 6], glstate_directLights[i * 15 + 7], glstate_directLights[i * 15 + 8]) * glstate_directLights[i * 15 + 9];\n            L.x = glstate_directLights[i * 15 + 3];\n            L.y = glstate_directLights[i * 15 + 4];\n            L.z = glstate_directLights[i * 15 + 5];\n            L = normalize(-L);\n            float dotNL = saturate( dot(N, L) );\n            vec3 irradiance = light * dotNL;\n            #ifdef USE_PBR\n                irradiance *= PI;\n            #endif\n            #ifdef USE_SHADOW\n                irradiance *= bool( glstate_directLights[i * 15 + 10] ) ? getShadow( glstate_directionalShadowMap[ i ], vDirectionalShadowCoord[ i ], glstate_directLights[i * 15 + 11], glstate_directLights[i * 15 + 12], vec2(glstate_directLights[i * 15 + 13], glstate_directLights[i * 15 + 14]) ) : 1.0;\n            #endif\n            vec3 reflectLight = irradiance * BRDF_Diffuse_Lambert(diffuseColor.xyz);\n            totalReflect += reflectLight;\n        }\n    #endif\n    #ifdef USE_POINT_LIGHT\n        for(int i = 0; i < USE_POINT_LIGHT; i++) {\n            L = vec3(glstate_pointLights[i * 19 + 0], glstate_pointLights[i * 19 + 1], glstate_pointLights[i * 19 + 2]) - xlv_POS;\n            float dist = pow(clamp(1. - length(L) / glstate_pointLights[i * 19 + 10], 0.0, 1.0), glstate_pointLights[i * 19 + 11]);\n            light = vec3(glstate_pointLights[i * 19 + 6], glstate_pointLights[i * 19 + 7], glstate_pointLights[i * 19 + 8]) * glstate_pointLights[i * 19 + 9] * dist;\n            L = normalize(L);\n            float dotNL = saturate( dot(N, L) );\n            vec3 irradiance = light * dotNL;\n            #ifdef USE_PBR\n                irradiance *= PI;\n            #endif\n            #ifdef USE_SHADOW\n                vec3 worldV = xlv_POS - vec3(glstate_pointLights[i * 19 + 0], glstate_pointLights[i * 19 + 1], glstate_pointLights[i * 19 + 2]);\n                irradiance *= bool( glstate_pointLights[i * 19 + 12] ) ? getPointShadow( glstate_pointShadowMap[ i ], worldV, glstate_pointLights[i * 19 + 13], glstate_pointLights[i * 19 + 14], vec2(glstate_pointLights[i * 19 + 17], glstate_pointLights[i * 19 + 18]), glstate_pointLights[i * 19 + 15], glstate_pointLights[i * 19 + 16]) : 1.0;\n            #endif\n            vec3 reflectLight = irradiance * BRDF_Diffuse_Lambert(diffuseColor.xyz);\n            totalReflect += reflectLight;\n        }\n    #endif\n    #ifdef USE_SPOT_LIGHT\n        for(int i = 0; i < USE_SPOT_LIGHT; i++) {\n            L = vec3(glstate_spotLights[i * 19 + 0], glstate_spotLights[i * 19 + 1], glstate_spotLights[i * 19 + 2]) - xlv_POS;\n            float lightDistance = length(L);\n            L = normalize(L);\n            float angleCos = dot( L, -normalize(vec3(glstate_spotLights[i * 19 + 3], glstate_spotLights[i * 19 + 4], glstate_spotLights[i * 19 + 5])) );\n            if( all( bvec2(angleCos > glstate_spotLights[i * 19 + 12], lightDistance < glstate_spotLights[i * 19 + 10]) ) ) {\n                float spotEffect = smoothstep( glstate_spotLights[i * 19 + 12], glstate_spotLights[i * 19 + 13], angleCos );\n                float dist = pow(clamp(1. - lightDistance / glstate_spotLights[i * 19 + 10], 0.0, 1.0), glstate_spotLights[i * 19 + 11]);\n                light = vec3(glstate_spotLights[i * 19 + 6], glstate_spotLights[i * 19 + 7], glstate_spotLights[i * 19 + 8]) * glstate_spotLights[i * 19 + 9] * dist * spotEffect;\n                float dotNL = saturate( dot(N, L) );\n                vec3 irradiance = light * dotNL;\n                #ifdef USE_PBR\n                    irradiance *= PI;\n                #endif\n                #ifdef USE_SHADOW\n                    irradiance *= bool( glstate_spotLights[i * 17 + 14] ) ? getShadow( glstate_spotShadowMap[ i ], vSpotShadowCoord[ i ], glstate_spotLights[i * 17 + 15], glstate_spotLights[i * 17 + 16], vec2(glstate_spotLights[i * 17 + 17], glstate_spotLights[i * 17 + 18])) : 1.0;\n                #endif\n                vec3 reflectLight = irradiance * BRDF_Diffuse_Lambert(diffuseColor.xyz);\n                totalReflect += reflectLight;\n            }\n        }\n    #endif\n    outColor.xyz = totalReflect;\n#endif";
        ShaderChunk.light_pars_frag = "#ifdef USE_DIRECT_LIGHT\n    uniform float glstate_directLights[USE_DIRECT_LIGHT * 15];\n#endif\n#ifdef USE_POINT_LIGHT\n    uniform float glstate_pointLights[USE_POINT_LIGHT * 19];\n#endif\n#ifdef USE_SPOT_LIGHT\n    uniform float glstate_spotLights[USE_SPOT_LIGHT * 19];\n#endif";
        ShaderChunk.normal_frag = "#ifdef DOUBLE_SIDED\n    float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n    float flipNormal = 1.0;\n#endif\n#ifdef FLAT_SHADED\n    vec3 fdx = vec3( dFdx( xlv_POS.x ), dFdx( xlv_POS.y ), dFdx( xlv_POS.z ) );\n    vec3 fdy = vec3( dFdy( xlv_POS.x ), dFdy( xlv_POS.y ), dFdy( xlv_POS.z ) );\n    vec3 N = normalize( cross( fdx, fdy ) );\n#else\n    vec3 N = normalize(xlv_NORMAL) * flipNormal;\n#endif\n#ifdef USE_NORMAL_MAP\n    vec3 normalMapColor = texture2D(_NormalTex, xlv_TEXCOORD0).rgb;\n    mat3 tspace = tsn(N, -xlv_POS, vec2(xlv_TEXCOORD0.x, 1.0 - xlv_TEXCOORD0.y));\n    N = normalize(tspace * (normalMapColor * 2.0 - 1.0));\n#elif defined(USE_BUMPMAP)\n    N = perturbNormalArb(-xlv_POS, N, dHdxy_fwd(xlv_TEXCOORD0));\n#endif";
        ShaderChunk.packing = "const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n    vec4 r = vec4( fract( v * PackFactors ), v );\n    r.yzw -= r.xyz * ShiftRight8;    return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n    return dot( v, UnpackFactors );\n}";
        ShaderChunk.shadowMap_frag = "#ifdef USE_SHADOW\n#endif";
        ShaderChunk.shadowMap_pars_frag = "#ifdef USE_SHADOW\n    #include <packing>\n    #ifdef USE_DIRECT_LIGHT\n        uniform sampler2D glstate_directionalShadowMap[ USE_DIRECT_LIGHT ];\n        varying vec4 vDirectionalShadowCoord[ USE_DIRECT_LIGHT ];\n    #endif\n    #ifdef USE_POINT_LIGHT\n        uniform samplerCube glstate_pointShadowMap[ USE_POINT_LIGHT ];\n    #endif\n    #ifdef USE_SPOT_LIGHT\n        uniform sampler2D glstate_spotShadowMap[ USE_SPOT_LIGHT ];\n        varying vec4 vSpotShadowCoord[ USE_SPOT_LIGHT ];\n    #endif\n    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n        return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n    }\n    float textureCubeCompare( samplerCube depths, vec3 uv, float compare ) {\n        return step( compare, unpackRGBAToDepth( textureCube( depths, uv ) ) );\n    }\n    float getShadow( sampler2D shadowMap, vec4 shadowCoord, float shadowBias, float shadowRadius, vec2 shadowMapSize ) {\n        shadowCoord.xyz /= shadowCoord.w;\n        float depth = shadowCoord.z + shadowBias;\n        bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n        bool inFrustum = all( inFrustumVec );\n        bvec2 frustumTestVec = bvec2( inFrustum, depth <= 1.0 );\n        bool frustumTest = all( frustumTestVec );\n        if ( frustumTest ) {\n            #ifdef USE_PCF_SOFT_SHADOW\n                float texelSize = shadowRadius / shadowMapSize.x;\n                vec2 poissonDisk[4];\n                poissonDisk[0] = vec2(-0.94201624, -0.39906216);\n                poissonDisk[1] = vec2(0.94558609, -0.76890725);\n                poissonDisk[2] = vec2(-0.094184101, -0.92938870);\n                poissonDisk[3] = vec2(0.34495938, 0.29387760);\n                return texture2DCompare( shadowMap, shadowCoord.xy + poissonDisk[0] * texelSize, depth ) * 0.25 +\n                    texture2DCompare( shadowMap, shadowCoord.xy + poissonDisk[1] * texelSize, depth ) * 0.25 +\n                    texture2DCompare( shadowMap, shadowCoord.xy + poissonDisk[2] * texelSize, depth ) * 0.25 +\n                    texture2DCompare( shadowMap, shadowCoord.xy + poissonDisk[3] * texelSize, depth ) * 0.25;\n            #else\n                return texture2DCompare( shadowMap, shadowCoord.xy, depth );\n            #endif\n        }\n        return 1.0;\n    }\n    float getPointShadow( samplerCube shadowMap, vec3 V, float shadowBias, float shadowRadius, vec2 shadowMapSize, float shadowCameraNear, float shadowCameraFar ) {\n\t\tfloat depth = ( length( V ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdepth += shadowBias;\n        V.x = -V.x;\n        #ifdef USE_PCF_SOFT_SHADOW\n            float texelSize = shadowRadius / shadowMapSize.x;\n            vec3 poissonDisk[4];\n    \t\tpoissonDisk[0] = vec3(-1.0, 1.0, -1.0);\n    \t\tpoissonDisk[1] = vec3(1.0, -1.0, -1.0);\n    \t\tpoissonDisk[2] = vec3(-1.0, -1.0, -1.0);\n    \t\tpoissonDisk[3] = vec3(1.0, -1.0, 1.0);\n            return textureCubeCompare( shadowMap, normalize(V) + poissonDisk[0] * texelSize, depth ) * 0.25 +\n                textureCubeCompare( shadowMap, normalize(V) + poissonDisk[1] * texelSize, depth ) * 0.25 +\n                textureCubeCompare( shadowMap, normalize(V) + poissonDisk[2] * texelSize, depth ) * 0.25 +\n                textureCubeCompare( shadowMap, normalize(V) + poissonDisk[3] * texelSize, depth ) * 0.25;\n        #else\n            return textureCubeCompare( shadowMap, normalize(V), depth);\n        #endif\n    }\n#endif";
        ShaderChunk.shadowMap_pars_vert = "#ifdef USE_SHADOW\n    #ifdef USE_DIRECT_LIGHT\n        uniform mat4 glstate_directionalShadowMatrix[ USE_DIRECT_LIGHT ];\n        varying vec4 vDirectionalShadowCoord[ USE_DIRECT_LIGHT ];\n    #endif\n    #ifdef USE_POINT_LIGHT\n    #endif\n    #ifdef USE_SPOT_LIGHT\n        uniform mat4 glstate_spotShadowMatrix[ USE_SPOT_LIGHT ];\n        varying vec4 vSpotShadowCoord[ USE_SPOT_LIGHT ];\n    #endif\n#endif";
        ShaderChunk.shadowMap_vert = "#ifdef USE_SHADOW\n    vec4 worldPosition = glstate_matrix_model * tmpvar_1;\n    #ifdef USE_DIRECT_LIGHT\n        for ( int i = 0; i < USE_DIRECT_LIGHT; i ++ ) {\n            vDirectionalShadowCoord[ i ] = glstate_directionalShadowMatrix[ i ] * worldPosition;\n        }\n    #endif\n    #ifdef USE_POINT_LIGHT\n    #endif\n    #ifdef USE_SPOT_LIGHT\n        for ( int i = 0; i < USE_SPOT_LIGHT; i ++ ) {\n            vSpotShadowCoord[ i ] = glstate_spotShadowMatrix[ i ] * worldPosition;\n        }\n    #endif\n#endif";
        ShaderChunk.tbn = "mat3 tbn(vec3 N, vec3 p, vec2 uv) {\n    vec3 dp1 = dFdx(p.xyz);\n    vec3 dp2 = dFdy(p.xyz);\n    vec2 duv1 = dFdx(uv.st);\n    vec2 duv2 = dFdy(uv.st);\n    vec3 dp2perp = cross(dp2, N);\n    vec3 dp1perp = cross(N, dp1);\n    vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;\n    vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;\n    float invmax = 1.0 / sqrt(max(dot(T,T), dot(B,B)));\n    return mat3(T * invmax, B * invmax, N);\n}";
        ShaderChunk.transpose = "mat4 transpose(mat4 inMatrix) {\n    vec4 i0 = inMatrix[0];\n    vec4 i1 = inMatrix[1];\n    vec4 i2 = inMatrix[2];\n    vec4 i3 = inMatrix[3];\n    mat4 outMatrix = mat4(\n        vec4(i0.x, i1.x, i2.x, i3.x),\n        vec4(i0.y, i1.y, i2.y, i3.y),\n        vec4(i0.z, i1.z, i2.z, i3.z),\n        vec4(i0.w, i1.w, i2.w, i3.w)\n    );\n    return outMatrix;\n}";
        ShaderChunk.tsn = "mat3 tsn(vec3 N, vec3 V, vec2 uv) {\n    vec3 q0 = dFdx( V.xyz );\n    vec3 q1 = dFdy( V.xyz );\n    vec2 st0 = dFdx( uv.st );\n    vec2 st1 = dFdy( uv.st );\n    vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n    vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n    mat3 tsn = mat3( S, T, N );\n    return tsn;\n}";
    })(ShaderChunk = egret3d.ShaderChunk || (egret3d.ShaderChunk = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var DefaultTextures = (function () {
        function DefaultTextures() {
        }
        DefaultTextures.init = function () {
            if (this._inited) {
                return;
            }
            this._inited = true;
            var gl = egret3d.WebGLKit.webgl;
            var t1 = new egret3d.Texture("white");
            t1.glTexture = egret3d.GlTexture2D.staticTexture(gl, "white");
            t1.url = "white";
            // t1.defaultAsset = true;
            this.WHITE = t1;
            var t2 = new egret3d.Texture("gray");
            t2.glTexture = egret3d.GlTexture2D.staticTexture(gl, "gray");
            // t2.defaultAsset = true;
            t2.url = "gray";
            this.GRAY = t2;
            var t3 = new egret3d.Texture("grid");
            t3.glTexture = egret3d.GlTexture2D.staticTexture(gl, "grid");
            // t3.defaultAsset = true;
            t3.url = "grid";
            this.GRID = t3;
            paper.Asset.register(this.WHITE);
            paper.Asset.register(this.GRAY);
            paper.Asset.register(this.GRID);
        };
        DefaultTextures._inited = false;
        return DefaultTextures;
    }());
    egret3d.DefaultTextures = DefaultTextures;
    __reflect(DefaultTextures.prototype, "egret3d.DefaultTextures");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * physics
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 物理类
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var Physics = (function () {
        function Physics() {
        }
        /**
         * get the nearest transform contect to the ray
         * @param ray ray
         * @param isPickMesh true pick mesh, false pick collider
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取射线拾取到的最近物体。
         * @param ray 射线实例
         * @param isPickMesh 是否为拾取mesh，否为拾取collider
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Physics.Raycast = function (ray, isPickMesh, maxDistance, layerMask) {
            if (isPickMesh === void 0) { isPickMesh = false; }
            if (maxDistance === void 0) { maxDistance = Number.MAX_VALUE; }
            if (layerMask === void 0) { layerMask = 2 /* Default */ | 4 /* UI */; }
            return this._doPick(ray, maxDistance, layerMask, false, isPickMesh);
        };
        /**
         * get all transforms contect to the ray
         * @param ray ray
         * @param isPickMesh true pick mesh, false pick collider
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取射线路径上的所有物体。
         * @param ray 射线实例
         * @param isPickMesh 是否为拾取mesh，否为拾取collider
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        Physics.RaycastAll = function (ray, isPickMesh, maxDistance, layerMask) {
            if (isPickMesh === void 0) { isPickMesh = false; }
            if (maxDistance === void 0) { maxDistance = Number.MAX_VALUE; }
            if (layerMask === void 0) { layerMask = 2 /* Default */ | 4 /* UI */; }
            return this._doPick(ray, maxDistance, layerMask, true, isPickMesh);
        };
        Physics._doPick = function (ray, maxDistance, layerMask, pickAll, isPickMesh) {
            if (maxDistance === void 0) { maxDistance = Number.MAX_VALUE; }
            if (pickAll === void 0) { pickAll = false; }
            if (isPickMesh === void 0) { isPickMesh = false; }
            var pickedList = [];
            for (var _i = 0, _a = paper.Application.sceneManager.getActiveScene().getRootGameObjects(); _i < _a.length; _i++) {
                var gameObject = _a[_i];
                if (gameObject.layer & layerMask) {
                    if (isPickMesh) {
                        this._pickMesh(ray, gameObject.transform, pickedList);
                    }
                    else {
                        this._pickCollider(ray, gameObject.transform, pickedList);
                    }
                }
            }
            if (pickedList.length === 0) {
                return null;
            }
            if (pickAll) {
                return pickedList;
            }
            var index = 0;
            for (var i = 1; i < pickedList.length; i++) {
                if (pickedList[i].distance < pickedList[index].distance) {
                    index = i;
                }
            }
            return pickedList[index];
        };
        Physics._pickMesh = function (ray, transform, pickInfos) {
            if (transform.gameObject.activeInHierarchy) {
                var meshFilter = transform.gameObject.getComponent(egret3d.MeshFilter);
                if (meshFilter) {
                    var mesh = meshFilter.mesh;
                    var pickinfo = mesh.intersects(ray, transform.getWorldMatrix());
                    if (pickinfo) {
                        pickInfos.push(pickinfo);
                        pickinfo.transform = transform;
                    }
                }
                else {
                    var skinmesh = transform.gameObject.getComponent(egret3d.SkinnedMeshRenderer);
                    if (skinmesh) {
                        var pickinfo = skinmesh.intersects(ray);
                        if (pickinfo) {
                            pickInfos.push(pickinfo);
                            pickinfo.pickedtran = transform;
                        }
                    }
                }
            }
            for (var _i = 0, _a = transform.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this._pickMesh(ray, child, pickInfos);
            }
        };
        Physics._pickCollider = function (ray, transform, pickInfos) {
            if (transform.gameObject.activeInHierarchy) {
                var pickInfo = ray.intersectCollider(transform);
                if (pickInfo) {
                    pickInfos.push(pickInfo);
                    pickInfo.transform = transform;
                }
            }
            for (var _i = 0, _a = transform.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this._pickCollider(ray, child, pickInfos);
            }
        };
        return Physics;
    }());
    egret3d.Physics = Physics;
    __reflect(Physics.prototype, "egret3d.Physics");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * scene pick up info
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 场景拣选信息
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var PickInfo = (function () {
        function PickInfo() {
            this.subMeshIndex = -1;
            this.triangleIndex = -1;
            this.distance = 0.0;
            this.position = new egret3d.Vector3();
            this.textureCoordA = new egret3d.Vector2();
            this.textureCoordB = new egret3d.Vector2();
            this.transform = null;
            this.collider = null;
        }
        return PickInfo;
    }());
    egret3d.PickInfo = PickInfo;
    __reflect(PickInfo.prototype, "egret3d.PickInfo");
})(egret3d || (egret3d = {}));
var RES;
(function (RES) {
    var processor;
    (function (processor) {
        // 按照加载优先级排序
        var AssetTypeEnum;
        (function (AssetTypeEnum) {
            AssetTypeEnum[AssetTypeEnum["Unknown"] = 0] = "Unknown";
            AssetTypeEnum[AssetTypeEnum["Auto"] = 1] = "Auto";
            AssetTypeEnum[AssetTypeEnum["Bundle"] = 2] = "Bundle";
            AssetTypeEnum[AssetTypeEnum["CompressBundle"] = 3] = "CompressBundle";
            AssetTypeEnum[AssetTypeEnum["GLVertexShader"] = 4] = "GLVertexShader";
            AssetTypeEnum[AssetTypeEnum["GLFragmentShader"] = 5] = "GLFragmentShader";
            AssetTypeEnum[AssetTypeEnum["Shader"] = 6] = "Shader";
            AssetTypeEnum[AssetTypeEnum["Texture"] = 7] = "Texture";
            AssetTypeEnum[AssetTypeEnum["TextureDesc"] = 8] = "TextureDesc";
            AssetTypeEnum[AssetTypeEnum["Material"] = 9] = "Material";
            AssetTypeEnum[AssetTypeEnum["GLTF"] = 10] = "GLTF";
            AssetTypeEnum[AssetTypeEnum["GLTFBinary"] = 11] = "GLTFBinary";
            AssetTypeEnum[AssetTypeEnum["Prefab"] = 12] = "Prefab";
            AssetTypeEnum[AssetTypeEnum["Scene"] = 13] = "Scene";
            AssetTypeEnum[AssetTypeEnum["TextAsset"] = 14] = "TextAsset";
            AssetTypeEnum[AssetTypeEnum["Atlas"] = 15] = "Atlas";
            AssetTypeEnum[AssetTypeEnum["Font"] = 16] = "Font";
            AssetTypeEnum[AssetTypeEnum["PackBin"] = 17] = "PackBin";
            AssetTypeEnum[AssetTypeEnum["PackTxt"] = 18] = "PackTxt";
            AssetTypeEnum[AssetTypeEnum["pathAsset"] = 19] = "pathAsset";
            AssetTypeEnum[AssetTypeEnum["PVR"] = 20] = "PVR";
            AssetTypeEnum[AssetTypeEnum["Sound"] = 21] = "Sound";
        })(AssetTypeEnum = processor.AssetTypeEnum || (processor.AssetTypeEnum = {}));
        var typeMap = {
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
        };
        function calcType(url) {
            var filei = url.lastIndexOf("/");
            var file = url.substr(filei + 1);
            var i = file.indexOf(".", 0);
            var extname = null;
            while (i >= 0) {
                extname = file.substr(i);
                if (typeMap[extname] != undefined) {
                    return typeMap[extname];
                }
                i = file.indexOf(".", i + 1);
            }
            return AssetTypeEnum.Unknown;
        }
        function getFileName(url, removeEX) {
            if (removeEX === void 0) { removeEX = false; }
            var filei = url.lastIndexOf("/");
            var file = url.substr(filei + 1);
            if (removeEX) {
                file = file.substring(0, file.indexOf("."));
            }
            return file;
        }
        ;
        function getPath(url) {
            return url.substring(0, url.lastIndexOf("/"));
        }
        function getUrl(resource) {
            if (resource.root) {
                return resource.root + resource.url;
            }
            else {
                return RES['resourceRoot'] + resource.url; //兼容引擎5.1.9以及更低版本
            }
        }
        function formatUrlAndSort(assets, path, urlKey) {
            if (urlKey === void 0) { urlKey = "url"; }
            var list = [];
            list = assets.map(function (item) {
                return { url: egret3d.utils.combinePath(path + "/", item[urlKey]), type: calcType(item[urlKey]) };
            });
            list.sort(function (a, b) {
                return a.type - b.type;
            });
            return list;
        }
        function promisify(loader, resource) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var onSuccess = function () {
                                var texture = loader['data'] ? loader['data'] : loader['response'];
                                resolve(texture);
                            };
                            var onError = function () {
                                var e = new RES.ResourceManagerError(1001, resource.url);
                                reject(e);
                            };
                            loader.addEventListener(egret.Event.COMPLETE, onSuccess, _this);
                            loader.addEventListener(egret.IOErrorEvent.IO_ERROR, onError, _this);
                        })];
                });
            });
        }
        function promisifySoundDecode(arrayBuffer, resource) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var onSuccess = function (audioBuffer) {
                                resolve(audioBuffer);
                            };
                            var onError = function () {
                                var e = new RES.ResourceManagerError(1001, resource.url);
                                reject(e);
                            };
                            egret3d.sound.WebAudio.instance.decodeAudioData(arrayBuffer, onSuccess, onError);
                        })];
                });
            });
        }
        processor.BundleProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, bundle, list, i, r, asset;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                bundle = new egret3d.AssetBundle(filename);
                                bundle.url = url;
                                bundle.$parse(JSON.parse(text));
                                list = formatUrlAndSort(bundle.assets, getPath(resource.url));
                                i = 0;
                                _a.label = 2;
                            case 2:
                                if (!(i < list.length)) return [3 /*break*/, 5];
                                r = RES.host.resourceConfig["getResource"](list[i].url);
                                if (!r) return [3 /*break*/, 4];
                                return [4 /*yield*/, host.load(r)];
                            case 3:
                                asset = _a.sent();
                                _a.label = 4;
                            case 4:
                                i++;
                                return [3 /*break*/, 2];
                            case 5: return [2 /*return*/, bundle];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        return [2 /*return*/];
                    });
                });
            }
            // getData(host, resource, key, subkey) { //可选函数
            // }
        };
        processor.GLVertexShaderProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, name;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                return [2 /*return*/, egret3d.Shader.registerVertShader(name, text)];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            }
            // getData(host, resource, key, subkey) { //可选函数
            // }
        };
        processor.GLFragmentShaderProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, name;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                return [2 /*return*/, egret3d.Shader.registerFragShader(name, text)];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.ShaderProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, name, shader;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                shader = new egret3d.Shader(filename, url);
                                shader.$parse(JSON.parse(text));
                                paper.Asset.register(shader);
                                return [2 /*return*/, shader];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.D3PVRProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.TextureDescProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, name, _texturedesc, _name, _filterMode, _format, _mipmap, _wrap, _textureFormat, _linear, _repeat, _textureSrc, loader, image, _texture, t2d;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                _texturedesc = JSON.parse(text);
                                _name = _texturedesc["name"];
                                _filterMode = _texturedesc["filterMode"];
                                _format = _texturedesc["format"];
                                _mipmap = _texturedesc["mipmap"];
                                _wrap = _texturedesc["wrap"];
                                if (_name.indexOf("LightmapFar") >= 0) {
                                    console.log("");
                                }
                                _textureFormat = 1 /* RGBA */;
                                if (_format == "RGB") {
                                    _textureFormat = 2 /* RGB */;
                                }
                                else if (_format == "Gray") {
                                    _textureFormat = 3 /* Gray */;
                                }
                                _linear = true;
                                if (_filterMode.indexOf("linear") < 0) {
                                    _linear = false;
                                }
                                _repeat = false;
                                if (_wrap.indexOf("Repeat") >= 0) {
                                    _repeat = true;
                                }
                                _textureSrc = url.replace(filename, _name);
                                loader = new egret.ImageLoader();
                                loader.load(_textureSrc);
                                return [4 /*yield*/, promisify(loader, resource)];
                            case 2:
                                image = _a.sent();
                                _texture = new egret3d.Texture(filename, url);
                                _texture.realName = _name;
                                t2d = new egret3d.GlTexture2D(gl, _textureFormat);
                                t2d.uploadImage(image.source, _mipmap, _linear, true, _repeat);
                                _texture.glTexture = t2d;
                                paper.Asset.register(_texture);
                                return [2 /*return*/, _texture];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.TextureProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var gl, url, filename, name, loader, image, _texture, _textureFormat, t2d;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                loader = new egret.ImageLoader();
                                loader.load(url);
                                return [4 /*yield*/, promisify(loader, resource)];
                            case 1:
                                image = _a.sent();
                                _texture = new egret3d.Texture(filename, url);
                                _textureFormat = 1 /* RGBA */;
                                t2d = new egret3d.GlTexture2D(gl, _textureFormat);
                                t2d.uploadImage(image.source, true, true, true, true);
                                _texture.glTexture = t2d;
                                paper.Asset.register(_texture);
                                return [2 /*return*/, _texture];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.MaterialProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, name, _material;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                _material = new egret3d.Material(filename, url);
                                _material.$parse(JSON.parse(text));
                                paper.Asset.register(_material);
                                return [2 /*return*/, _material];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.GLTFProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var result, url, filename, glTF, glTFBuffers, buffers, glTFPath, _i, glTFBuffers_1, buffer, url_1, r, buffer_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, resource.type === "GLTF" ? RES.processor.JsonProcessor : RES.processor.BinaryProcessor)];
                            case 1:
                                result = _a.sent();
                                url = getUrl(resource);
                                filename = getFileName(url, true);
                                glTF = new egret3d.GLTFAsset(filename, url);
                                if (!(resource.type === "GLTF")) return [3 /*break*/, 6];
                                glTFBuffers = result.buffers;
                                buffers = [];
                                if (!glTFBuffers) return [3 /*break*/, 5];
                                glTFPath = getPath(resource.url);
                                _i = 0, glTFBuffers_1 = glTFBuffers;
                                _a.label = 2;
                            case 2:
                                if (!(_i < glTFBuffers_1.length)) return [3 /*break*/, 5];
                                buffer = glTFBuffers_1[_i];
                                url_1 = egret3d.utils.combinePath(glTFPath + "/", buffer.uri);
                                r = RES.host.resourceConfig["getResource"](url_1);
                                if (!r) return [3 /*break*/, 4];
                                return [4 /*yield*/, host.load(r, RES.processor.BinaryProcessor)];
                            case 3:
                                buffer_1 = _a.sent();
                                if (buffer_1) {
                                    buffers.push(buffer_1);
                                }
                                else {
                                    console.error("Load glTF resource error.", url_1);
                                }
                                _a.label = 4;
                            case 4:
                                _i++;
                                return [3 /*break*/, 2];
                            case 5:
                                glTF.parse(result, buffers);
                                return [3 /*break*/, 7];
                            case 6:
                                glTF.parseFromBinary(result);
                                _a.label = 7;
                            case 7:
                                paper.Asset.register(glTF);
                                return [2 /*return*/, glTF];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.AtlasProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, name, _atlas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                _atlas = new egret3d.Atlas(filename, url);
                                _atlas.$parse(text);
                                paper.Asset.register(_atlas);
                                return [2 /*return*/, _atlas];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.NewPrefabProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, name, assets, list, i, r, asset, _prefab;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                assets = JSON.parse(text).assets;
                                list = formatUrlAndSort(assets, getPath(resource.url));
                                i = 0;
                                _a.label = 2;
                            case 2:
                                if (!(i < list.length)) return [3 /*break*/, 5];
                                if (list[i].type == AssetTypeEnum.Shader)
                                    return [3 /*break*/, 4];
                                r = RES.host.resourceConfig["getResource"](list[i].url);
                                if (!r) return [3 /*break*/, 4];
                                return [4 /*yield*/, host.load(r)];
                            case 3:
                                asset = _a.sent();
                                _a.label = 4;
                            case 4:
                                i++;
                                return [3 /*break*/, 2];
                            case 5:
                                _prefab = new egret3d.Prefab(filename, url);
                                _prefab.$parse(text);
                                paper.Asset.register(_prefab);
                                return [2 /*return*/, _prefab];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.NewSceneProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, name, assets, list, i, r, asset, _scene;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                assets = JSON.parse(text).assets;
                                list = formatUrlAndSort(assets, getPath(resource.url));
                                i = 0;
                                _a.label = 2;
                            case 2:
                                if (!(i < list.length)) return [3 /*break*/, 5];
                                if (list[i].type == AssetTypeEnum.Shader)
                                    return [3 /*break*/, 4];
                                r = RES.host.resourceConfig["getResource"](list[i].url);
                                if (!r) return [3 /*break*/, 4];
                                return [4 /*yield*/, host.load(r)];
                            case 3:
                                asset = _a.sent();
                                _a.label = 4;
                            case 4:
                                i++;
                                return [3 /*break*/, 2];
                            case 5:
                                _scene = new egret3d.RawScene(filename, url);
                                _scene.$parse(text);
                                paper.Asset.register(_scene);
                                return [2 /*return*/, _scene];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.D3FontProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, name, _font;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                _font = new egret3d.Font(filename, url);
                                _font.$parse(text);
                                paper.Asset.register(_font);
                                return [2 /*return*/, _font];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.Sound3DProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var arrayBuffer, gl, url, filename, name, audioBuffer, sound;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.BinaryProcessor)];
                            case 1:
                                arrayBuffer = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                return [4 /*yield*/, promisifySoundDecode(arrayBuffer, resource)];
                            case 2:
                                audioBuffer = _a.sent();
                                sound = new egret3d.Sound(filename, url);
                                sound.buffer = audioBuffer;
                                paper.Asset.register(sound);
                                return [2 /*return*/, sound];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.TextAssetProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, name, _text;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                _text = new egret3d.TextAsset(filename, url);
                                _text.content = text;
                                paper.Asset.register(_text);
                                return [2 /*return*/, _text];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        processor.PathAssetProcessor = {
            onLoadStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var text, gl, url, filename, name, _path;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, host.load(resource, RES.processor.TextProcessor)];
                            case 1:
                                text = _a.sent();
                                gl = egret3d.WebGLKit.webgl;
                                url = getUrl(resource);
                                filename = getFileName(url);
                                name = filename.substring(0, filename.indexOf("."));
                                _path = new egret3d.PathAsset(filename, url);
                                _path.$parse(JSON.parse(text));
                                paper.Asset.register(_path);
                                return [2 /*return*/, _path];
                        }
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        data = host.get(resource);
                        data.dispose();
                        paper.Asset.unregister(data);
                        return [2 /*return*/];
                    });
                });
            }
        };
        RES.processor.map("GLVertexShader", processor.GLVertexShaderProcessor);
        RES.processor.map("GLFragmentShader", processor.GLFragmentShaderProcessor);
        RES.processor.map("Shader", processor.ShaderProcessor);
        RES.processor.map("Bundle", processor.BundleProcessor);
        RES.processor.map("Texture", processor.TextureProcessor);
        RES.processor.map("TextureDesc", processor.TextureDescProcessor);
        RES.processor.map("PVR", processor.D3PVRProcessor);
        RES.processor.map("Material", processor.MaterialProcessor);
        RES.processor.map("GLTF", processor.GLTFProcessor);
        RES.processor.map("GLTFBinary", processor.GLTFProcessor);
        RES.processor.map("Prefab", processor.NewPrefabProcessor);
        RES.processor.map("Scene", processor.NewSceneProcessor);
        RES.processor.map("Atlas", processor.AtlasProcessor);
        RES.processor.map("Font", processor.D3FontProcessor);
        RES.processor.map("TextAsset", processor.TextAssetProcessor);
        RES.processor.map("pathAsset", processor.PathAssetProcessor);
        RES.processor.map("Sound", processor.Sound3DProcessor);
    })(processor = RES.processor || (RES.processor = {}));
})(RES || (RES = {}));
var egret3d;
(function (egret3d) {
    var DefaultShaders = (function () {
        function DefaultShaders() {
        }
        DefaultShaders.init = function () {
            if (this._inited) {
                return;
            }
            this._inited = true;
            var def_code_vs = egret3d.Shader.registerVertShader("def_code", egret3d.ShaderLib.code_vert);
            var def_code_fs = egret3d.Shader.registerFragShader("def_code", egret3d.ShaderLib.code_frag);
            var def_code2_fs = egret3d.Shader.registerFragShader("def_code2", egret3d.ShaderLib.code2_frag);
            var def_ui_fs = egret3d.Shader.registerFragShader("def_ui", egret3d.ShaderLib.ui_frag);
            var def_uifont_vs = egret3d.Shader.registerVertShader("def_uifont", egret3d.ShaderLib.uifont_vert);
            var def_uifont_fs = egret3d.Shader.registerFragShader("def_uifont", egret3d.ShaderLib.uifont_frag);
            var def_diffuse_vs = egret3d.Shader.registerVertShader("def_diffuse", egret3d.ShaderLib.diffuse_vert);
            var def_diffuse_fs = egret3d.Shader.registerFragShader("def_diffuse", egret3d.ShaderLib.diffuse_frag);
            var def_boneeff_vs = egret3d.Shader.registerVertShader("def_boneeff", egret3d.ShaderLib.boneeff_vert);
            var def_diffuselightmap_vs = egret3d.Shader.registerVertShader("def_diffuselightmap", egret3d.ShaderLib.diffuselightmap_vert);
            var def_diffuselightmap_fs = egret3d.Shader.registerFragShader("def_diffuselightmap", egret3d.ShaderLib.diffuselightmap_frag);
            var def_postquad_vs = egret3d.Shader.registerVertShader("def_postquad", egret3d.ShaderLib.postquad_vert);
            var def_postquaddepth_fs = egret3d.Shader.registerFragShader("def_postquaddepth", egret3d.ShaderLib.postquaddepth_frag);
            var def_postdepth_vs = egret3d.Shader.registerVertShader("def_postdepth", egret3d.ShaderLib.postdepth_vert);
            var def_postdepth_fs = egret3d.Shader.registerFragShader("def_postdepth", egret3d.ShaderLib.postdepth_frag);
            var def_line_vs = egret3d.Shader.registerVertShader("def_line", egret3d.ShaderLib.line_vert);
            var def_line_fs = egret3d.Shader.registerFragShader("def_line", egret3d.ShaderLib.line_frag);
            var def_materialcolor_vs = egret3d.Shader.registerVertShader("def_materialcolor", egret3d.ShaderLib.materialcolor_vert);
            var def_diffusetintcolor_fs = egret3d.Shader.registerFragShader("def_diffusetintcolor", egret3d.ShaderLib.tintcolor_frag);
            var def_diffusevertcolor_vs = egret3d.Shader.registerVertShader("def_diffusevertcolor", egret3d.ShaderLib.vertcolor_vert);
            var def_diffusevertcolor_fs = egret3d.Shader.registerFragShader("def_diffusevertcolor", egret3d.ShaderLib.vertcolor_frag);
            var def_lambert_vs = egret3d.Shader.registerVertShader("def_lambert", egret3d.ShaderLib.lambert_vert);
            var def_lambert_fs = egret3d.Shader.registerFragShader("def_lambert", egret3d.ShaderLib.lambert_frag);
            var def_lambertnormal_vs = egret3d.Shader.registerVertShader("def_lambertnormal", "#define USE_NORMAL_MAP \n" + egret3d.ShaderLib.lambert_vert);
            var def_lambertnormal_fs = egret3d.Shader.registerFragShader("def_lambertnormal", "#define USE_NORMAL_MAP \n" + egret3d.ShaderLib.lambert_frag);
            var def_depthpackage_vs = egret3d.Shader.registerVertShader("def_depthpackage", egret3d.ShaderLib.depthpackage_vert); // non-linear
            var def_depthpackage_fs = egret3d.Shader.registerFragShader("def_depthpackage", egret3d.ShaderLib.depthpackage_frag);
            var def_distancepackage_vs = egret3d.Shader.registerVertShader("def_depthpackage", egret3d.ShaderLib.distancepackage_vert); // linear
            var def_distancepackage_fs = egret3d.Shader.registerFragShader("def_depthpackage", egret3d.ShaderLib.distancepackage_frag);
            {
                var shader = new egret3d.Shader("shader/lambert");
                shader.url = "shader/lambert";
                shader.renderQueue = egret3d.RenderQueue.Geometry;
                shader.defaultValue["_MainTex"] = { type: "Texture", value: paper.Asset.find("gray") };
                shader.defaultValue["_Color"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 1, 1) };
                shader.passes["base"] = [];
                var renderPass = new egret3d.DrawPass(def_lambert_vs, def_lambert_fs);
                renderPass.state_ztest = true;
                renderPass.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                renderPass.state_zwrite = true;
                renderPass.state_showface = egret3d.ShowFaceStateEnum.CCW;
                renderPass.setAlphaBlend(egret3d.BlendModeEnum.Close);
                shader.passes["base"].push(renderPass);
                shader.passes["base_depth_package"] = [];
                var depthPass = new egret3d.DrawPass(def_depthpackage_vs, def_depthpackage_fs);
                depthPass.state_ztest = true;
                depthPass.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                depthPass.state_zwrite = true;
                depthPass.state_showface = egret3d.ShowFaceStateEnum.CCW;
                depthPass.setAlphaBlend(egret3d.BlendModeEnum.Close);
                shader.passes["base_depth_package"].push(depthPass);
                shader.passes["base_distance_package"] = [];
                var distancePass = new egret3d.DrawPass(def_distancepackage_vs, def_distancepackage_fs);
                distancePass.state_ztest = true;
                distancePass.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                distancePass.state_zwrite = true;
                distancePass.state_showface = egret3d.ShowFaceStateEnum.CCW;
                distancePass.setAlphaBlend(egret3d.BlendModeEnum.Close);
                shader.passes["base_distance_package"].push(distancePass);
                this.LAMBERT = shader;
                paper.Asset.register(shader);
            }
            {
                var shader = new egret3d.Shader("shader/lambertnormal");
                shader.url = "shader/lambertnormal";
                shader.renderQueue = egret3d.RenderQueue.Geometry;
                shader.defaultValue["_MainTex"] = { type: "Texture", value: paper.Asset.find("gray") };
                shader.defaultValue["_Color"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 1, 1) };
                shader.passes["base"] = [];
                var renderPass = new egret3d.DrawPass(def_lambertnormal_vs, def_lambertnormal_fs);
                renderPass.state_ztest = true;
                renderPass.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                renderPass.state_zwrite = true;
                renderPass.state_showface = egret3d.ShowFaceStateEnum.CCW;
                renderPass.setAlphaBlend(egret3d.BlendModeEnum.Close);
                shader.passes["base"].push(renderPass);
                shader.passes["base_depth_package"] = [];
                var depthPass = new egret3d.DrawPass(def_depthpackage_vs, def_depthpackage_fs);
                depthPass.state_ztest = true;
                depthPass.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                depthPass.state_zwrite = true;
                depthPass.state_showface = egret3d.ShowFaceStateEnum.CCW;
                depthPass.setAlphaBlend(egret3d.BlendModeEnum.Close);
                shader.passes["base_depth_package"].push(depthPass);
                shader.passes["base_distance_package"] = [];
                var distancePass = new egret3d.DrawPass(def_distancepackage_vs, def_distancepackage_fs);
                distancePass.state_ztest = true;
                distancePass.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                distancePass.state_zwrite = true;
                distancePass.state_showface = egret3d.ShowFaceStateEnum.CCW;
                distancePass.setAlphaBlend(egret3d.BlendModeEnum.Close);
                shader.passes["base_distance_package"].push(distancePass);
                this.LAMBERT_NORMAL = shader;
                paper.Asset.register(shader);
            }
            {
                var sh = new egret3d.Shader("shader/def");
                sh.url = "shader/def";
                // sh.defaultAsset = true;
                sh.renderQueue = egret3d.RenderQueue.Geometry;
                sh.passes["base"] = [];
                sh.defaultValue["_MainTex"] = { type: "Texture", value: paper.Asset.find("grid") };
                sh.defaultValue["_MainTex_ST"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 0, 0) };
                sh.defaultValue["_AlphaCut"] = { type: "Range", value: 0.1, min: 0, max: 1 };
                var p = new egret3d.DrawPass(def_diffuse_vs, def_diffuse_fs);
                sh.passes["base"].push(p);
                p.state_ztest = true;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = true;
                p.state_showface = egret3d.ShowFaceStateEnum.CCW;
                // p.setProgram(diffuseProgram);
                p.setAlphaBlend(egret3d.BlendModeEnum.Close);
                // p.uniformTexture("_MainTex", null);
                paper.Asset.register(sh);
            }
            {
                // 兼容外部引入的 transparent.shader.json
                var sh = new egret3d.Shader("transparent.shader.json");
                sh.url = "transparent.shader.json";
                // sh.defaultAsset = true;
                sh.renderQueue = egret3d.RenderQueue.Transparent;
                sh.passes["base"] = [];
                sh.defaultValue["_MainTex"] = { type: "Texture", value: paper.Asset.find("grid") };
                sh.defaultValue["_MainTex_ST"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 0, 0) };
                sh.defaultValue["_AlphaCut"] = { type: "Range", value: 0.1, min: 0, max: 1 };
                var p = new egret3d.DrawPass(def_diffuse_vs, def_diffuse_fs);
                sh.passes["base"].push(p);
                p.state_ztest = true;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = true;
                p.state_showface = egret3d.ShowFaceStateEnum.CCW;
                // p.setProgram(diffuseProgram);
                p.setAlphaBlend(egret3d.BlendModeEnum.Blend);
                // p.uniformTexture("_MainTex", null);
                this.TRANSPARENT = sh;
                paper.Asset.register(sh);
            }
            {
                // 兼容外部引入的 transparent_additive.shader.json
                var sh = new egret3d.Shader("transparent_additive.shader.json");
                sh.url = "transparent_additive.shader.json";
                // sh.defaultAsset = true;
                sh.renderQueue = egret3d.RenderQueue.Transparent;
                sh.passes["base"] = [];
                sh.defaultValue["_MainTex"] = { type: "Texture", value: paper.Asset.find("grid") };
                sh.defaultValue["_MainTex_ST"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 0, 0) };
                sh.defaultValue["_AlphaCut"] = { type: "Range", value: 0.1, min: 0, max: 1 };
                var p = new egret3d.DrawPass(def_diffuse_vs, def_diffuse_fs);
                sh.passes["base"].push(p);
                p.state_ztest = true;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = true;
                p.state_showface = egret3d.ShowFaceStateEnum.CCW;
                // p.setProgram(diffuseProgram);
                p.setAlphaBlend(egret3d.BlendModeEnum.Add);
                // p.uniformTexture("_MainTex", null);
                this.TRANSPARENT_ADDITIVE = sh;
                paper.Asset.register(sh);
            }
            {
                // 兼容外部引入的 transparent_additive_bothside.shader.json
                var sh = new egret3d.Shader("transparent_additive_bothside.shader.json");
                sh.url = "transparent_additive_bothside.shader.json";
                // sh.defaultAsset = true;
                sh.renderQueue = egret3d.RenderQueue.Transparent;
                sh.passes["base"] = [];
                sh.defaultValue["_MainTex"] = { type: "Texture", value: paper.Asset.find("grid") };
                sh.defaultValue["_MainTex_ST"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 0, 0) };
                sh.defaultValue["_AlphaCut"] = { type: "Range", value: 0.1, min: 0, max: 1 };
                var p = new egret3d.DrawPass(def_diffuse_vs, def_diffuse_fs);
                sh.passes["base"].push(p);
                p.state_ztest = true;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = true;
                p.state_showface = egret3d.ShowFaceStateEnum.ALL;
                // p.setProgram(diffuseProgram);
                p.setAlphaBlend(egret3d.BlendModeEnum.Add);
                // p.uniformTexture("_MainTex", null);
                this.TRANSPARENT_ADDITIVE_BOTH_SIDE = sh;
                paper.Asset.register(sh);
            }
            {
                // 兼容外部引入的 transparent_bothside.shader.json
                var sh = new egret3d.Shader("transparent_bothside.shader.json");
                sh.url = "transparent_bothside.shader.json";
                // sh.defaultAsset = true;
                sh.renderQueue = egret3d.RenderQueue.Transparent;
                sh.passes["base"] = [];
                sh.defaultValue["_MainTex"] = { type: "Texture", value: paper.Asset.find("grid") };
                sh.defaultValue["_MainTex_ST"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 0, 0) };
                sh.defaultValue["_AlphaCut"] = { type: "Range", value: 0.1, min: 0, max: 1 };
                var p = new egret3d.DrawPass(def_diffuse_vs, def_diffuse_fs);
                sh.passes["base"].push(p);
                p.state_ztest = true;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = true;
                p.state_showface = egret3d.ShowFaceStateEnum.ALL;
                // p.setProgram(diffuseProgram);
                p.setAlphaBlend(egret3d.BlendModeEnum.Blend);
                // p.uniformTexture("_MainTex", null);
                this.TRANSPARENT_BOTH_SIDE = sh;
                paper.Asset.register(sh);
            }
            {
                // 兼容外部引入的 diffuse.shader.json
                var sh = new egret3d.Shader("diffuse.shader.json");
                sh.url = "diffuse.shader.json";
                // sh.defaultAsset = true;
                sh.renderQueue = egret3d.RenderQueue.Geometry;
                sh.defaultValue["_MainTex"] = { type: "Texture", value: paper.Asset.find("gray") };
                sh.defaultValue["_MainTex_ST"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 0, 0) };
                sh.defaultValue["_AlphaCut"] = { type: "Range", value: 0.1, min: 0, max: 1 };
                var p = new egret3d.DrawPass(def_diffuse_vs, def_diffuse_fs);
                sh.passes["base"] = [];
                sh.passes["base"].push(p);
                p.state_ztest = true;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = true;
                p.state_showface = egret3d.ShowFaceStateEnum.CCW;
                p.setAlphaBlend(egret3d.BlendModeEnum.Close);
                var p2 = new egret3d.DrawPass(def_boneeff_vs, def_diffuse_fs);
                sh.passes["skin"] = [];
                sh.passes["skin"].push(p2);
                p2.state_ztest = true;
                p2.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p2.state_zwrite = true;
                p2.state_showface = egret3d.ShowFaceStateEnum.CCW;
                p2.setAlphaBlend(egret3d.BlendModeEnum.Close);
                var p3 = new egret3d.DrawPass(def_diffuselightmap_vs, def_diffuselightmap_fs);
                sh.passes["lightmap"] = [];
                sh.passes["lightmap"].push(p3);
                p3.state_ztest = true;
                p3.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p3.state_zwrite = true;
                p3.state_showface = egret3d.ShowFaceStateEnum.CCW;
                p3.setAlphaBlend(egret3d.BlendModeEnum.Close);
                var p4 = new egret3d.DrawPass(def_postquad_vs, def_postquaddepth_fs);
                sh.passes["quad"] = [];
                sh.passes["quad"].push(p4);
                p4.state_ztest = true;
                p4.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p4.state_zwrite = true;
                p4.state_showface = egret3d.ShowFaceStateEnum.CCW;
                p4.setAlphaBlend(egret3d.BlendModeEnum.Close);
                var p5 = new egret3d.DrawPass(def_postdepth_vs, def_postdepth_fs);
                sh.passes["base_depth"] = [];
                sh.passes["base_depth"].push(p5);
                p5.state_ztest = true;
                p5.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p5.state_zwrite = true;
                p5.state_showface = egret3d.ShowFaceStateEnum.CCW;
                p5.setAlphaBlend(egret3d.BlendModeEnum.Close);
                var p6 = new egret3d.DrawPass(def_depthpackage_vs, def_depthpackage_fs);
                sh.passes["base_depth_package"] = [];
                sh.passes["base_depth_package"].push(p6);
                p6.state_ztest = false;
                p6.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p6.state_zwrite = false;
                p6.state_showface = egret3d.ShowFaceStateEnum.CCW;
                p6.setAlphaBlend(egret3d.BlendModeEnum.Close);
                // p.uniformTexture("_MainTex", null);
                this.DIFFUSE = sh;
                paper.Asset.register(sh);
            }
            {
                var sh = new egret3d.Shader("shader/diffuse_tintcolor");
                sh.url = "shader/diffuse_tintcolor";
                // sh.defaultAsset = true;
                sh.renderQueue = egret3d.RenderQueue.Geometry;
                sh.passes["base"] = [];
                sh.defaultValue["_MainTex"] = { type: "Texture", value: paper.Asset.find("grid") };
                sh.defaultValue["_MainTex_ST"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 0, 0) };
                sh.defaultValue["_AlphaCut"] = { type: "Range", value: 0.1, min: 0, max: 1 };
                sh.defaultValue["_TintColor"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 1, 1) };
                var p = new egret3d.DrawPass(def_diffuse_vs, def_diffusetintcolor_fs);
                sh.passes["base"].push(p);
                p.state_ztest = true;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = true;
                p.state_showface = egret3d.ShowFaceStateEnum.CCW;
                // p.setProgram(diffuseProgram);
                p.setAlphaBlend(egret3d.BlendModeEnum.Close);
                // p.uniformTexture("_MainTex", null);
                this.DIFFUSE_TINT_COLOR = sh;
                paper.Asset.register(sh);
            }
            {
                var sh = new egret3d.Shader("shader/diffuse_vertcolor");
                sh.url = "shader/diffuse_vertcolor";
                // sh.defaultAsset = true;
                sh.renderQueue = egret3d.RenderQueue.Geometry;
                sh.passes["base"] = [];
                sh.defaultValue["_MainTex"] = { type: "Texture", value: paper.Asset.find("grid") };
                sh.defaultValue["_MainTex_ST"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 0, 0) };
                sh.defaultValue["_AlphaCut"] = { type: "Range", value: 0.1, min: 0, max: 1 };
                var p = new egret3d.DrawPass(def_diffusevertcolor_vs, def_diffusevertcolor_fs);
                sh.passes["base"].push(p);
                p.state_ztest = true;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = true;
                p.state_showface = egret3d.ShowFaceStateEnum.CCW;
                // p.setProgram(diffuseProgram);
                p.setAlphaBlend(egret3d.BlendModeEnum.Close);
                // p.uniformTexture("_MainTex", null);
                this.DIFFUSE_VERT_COLOR = sh;
                paper.Asset.register(sh);
            }
            {
                // 兼容外部引入的 diffuse_bothside.shader.json
                var sh = new egret3d.Shader("diffuse_bothside.shader.json");
                sh.url = "diffuse_bothside.shader.json";
                sh.renderQueue = egret3d.RenderQueue.Geometry;
                // sh.defaultAsset = true;
                sh.defaultValue["_MainTex"] = { type: "Texture", value: paper.Asset.find("grid") };
                sh.defaultValue["_MainTex_ST"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 0, 0) };
                sh.defaultValue["_AlphaCut"] = { type: "Range", value: 0.1, min: 0, max: 1 };
                var p = new egret3d.DrawPass(def_diffuse_vs, def_diffuse_fs);
                sh.passes["base"] = [];
                sh.passes["base"].push(p);
                p.state_ztest = true;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = true;
                p.state_showface = egret3d.ShowFaceStateEnum.ALL;
                p.setAlphaBlend(egret3d.BlendModeEnum.Close);
                var p2 = new egret3d.DrawPass(def_boneeff_vs, def_diffuse_fs);
                sh.passes["skin"] = [];
                sh.passes["skin"].push(p2);
                p2.state_ztest = true;
                p2.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p2.state_zwrite = true;
                p2.state_showface = egret3d.ShowFaceStateEnum.CCW;
                p2.setAlphaBlend(egret3d.BlendModeEnum.Close);
                var p3 = new egret3d.DrawPass(def_diffuselightmap_vs, def_diffuselightmap_fs);
                sh.passes["lightmap"] = [];
                sh.passes["lightmap"].push(p3);
                p3.state_ztest = true;
                p3.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p3.state_zwrite = true;
                p3.state_showface = egret3d.ShowFaceStateEnum.CCW;
                p3.setAlphaBlend(egret3d.BlendModeEnum.Close);
                var p4 = new egret3d.DrawPass(def_postquad_vs, def_postquaddepth_fs);
                sh.passes["quad"] = [];
                sh.passes["quad"].push(p4);
                p4.state_ztest = true;
                p4.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p4.state_zwrite = true;
                p4.state_showface = egret3d.ShowFaceStateEnum.CCW;
                p4.setAlphaBlend(egret3d.BlendModeEnum.Close);
                var p5 = new egret3d.DrawPass(def_postdepth_vs, def_postdepth_fs);
                sh.passes["base_depth"] = [];
                sh.passes["base_depth"].push(p5);
                p5.state_ztest = true;
                p5.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p5.state_zwrite = true;
                p5.state_showface = egret3d.ShowFaceStateEnum.CCW;
                p5.setAlphaBlend(egret3d.BlendModeEnum.Close);
                // p.uniformTexture("_MainTex", null);
                this.DIFFUSE_BOTH_SIDE = sh;
                paper.Asset.register(sh);
            }
            {
                var sh = new egret3d.Shader("shader/defui");
                sh.url = "shader/defui";
                // sh.defaultAsset = true;
                sh.passes["base"] = [];
                var p = new egret3d.DrawPass(def_code_vs, def_ui_fs);
                sh.passes["base"].push(p);
                // p.setProgram(program2);
                p.state_showface = egret3d.ShowFaceStateEnum.CW; // ui 只需要显示正面
                p.state_ztest = false;
                p.state_zwrite = false;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.setAlphaBlend(egret3d.BlendModeEnum.Blend_PreMultiply);
                var p2 = new egret3d.DrawPass(def_code_vs, def_ui_fs);
                sh.passes["base"].push(p2);
                // p2.setProgram(program2);
                p2.state_showface = egret3d.ShowFaceStateEnum.ALL;
                p2.state_ztest = true;
                p2.state_zwrite = false;
                p2.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p2.setAlphaBlend(egret3d.BlendModeEnum.Blend_PreMultiply);
                this.UI = sh;
                paper.Asset.register(sh);
            }
            {
                var sh = new egret3d.Shader("shader/defuifont");
                sh.url = "shader/defuifont";
                // sh.defaultAsset = true;
                sh.passes["base"] = [];
                var p = new egret3d.DrawPass(def_uifont_vs, def_uifont_fs);
                sh.passes["base"].push(p);
                // p.setProgram(programuifont);
                p.state_showface = egret3d.ShowFaceStateEnum.CW;
                p.state_ztest = false;
                p.state_zwrite = false;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.setAlphaBlend(egret3d.BlendModeEnum.Blend_PreMultiply);
                var p2 = new egret3d.DrawPass(def_uifont_vs, def_uifont_fs);
                sh.passes["base"].push(p2);
                // p2.setProgram(programuifont);
                p2.state_showface = egret3d.ShowFaceStateEnum.ALL;
                p2.state_ztest = true;
                p2.state_zwrite = false;
                p2.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p2.setAlphaBlend(egret3d.BlendModeEnum.Blend_PreMultiply);
                this.UI_FONT = sh;
                paper.Asset.register(sh);
            }
            {
                var sh = new egret3d.Shader("line.shader.json");
                sh.url = "line.shader.json";
                sh.renderQueue = egret3d.RenderQueue.Geometry;
                // sh.defaultAsset = true;
                sh.passes["base"] = [];
                var p = new egret3d.DrawPass(def_line_vs, def_line_fs);
                sh.passes["base"].push(p);
                // p.setProgram(programline);
                p.state_ztest = true;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = true;
                p.state_showface = egret3d.ShowFaceStateEnum.ALL;
                p.setAlphaBlend(egret3d.BlendModeEnum.Close);
                this.LINE = sh;
                paper.Asset.register(sh);
            }
            {
                var sh = new egret3d.Shader("materialcolor.shader.json");
                sh.url = "materialcolor.shader.json";
                sh.renderQueue = egret3d.RenderQueue.Geometry;
                sh.defaultValue["_Color"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 1, 1) };
                // sh.defaultAsset = true;
                sh.passes["base"] = [];
                var p = new egret3d.DrawPass(def_materialcolor_vs, def_line_fs);
                sh.passes["base"].push(p);
                // p.setProgram(programmaterialcolor);
                p.state_ztest = true;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = true;
                p.state_showface = egret3d.ShowFaceStateEnum.ALL;
                p.setAlphaBlend(egret3d.BlendModeEnum.Close);
                sh.renderQueue = egret3d.RenderQueue.Overlay;
                this.MATERIAL_COLOR = sh;
                paper.Asset.register(sh);
            }
            {
                var sh = new egret3d.Shader("gizmos.shader.json");
                sh.url = "gizmos.shader.json";
                sh.renderQueue = egret3d.RenderQueue.Overlay;
                sh.defaultValue["_Color"] = { type: "Vector4", value: new egret3d.Vector4(1, 1, 1, 1) };
                // sh.defaultAsset = true;
                sh.passes["base"] = [];
                var p = new egret3d.DrawPass(def_materialcolor_vs, def_line_fs);
                sh.passes["base"].push(p);
                // p.setProgram(programmaterialcolor);
                p.state_ztest = false;
                p.state_ztest_method = egret3d.WebGLKit.LEQUAL;
                p.state_zwrite = false;
                p.state_showface = egret3d.ShowFaceStateEnum.CCW;
                p.setAlphaBlend(egret3d.BlendModeEnum.Blend);
                sh.renderQueue = egret3d.RenderQueue.Overlay;
                this.GIZMOS_COLOR = sh;
                paper.Asset.register(sh);
            }
        };
        DefaultShaders._inited = false;
        return DefaultShaders;
    }());
    egret3d.DefaultShaders = DefaultShaders;
    __reflect(DefaultShaders.prototype, "egret3d.DefaultShaders");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var _plane = {
        vbo: new Float32Array([
            -5, 0, 5, -5, 0, -5, 5, 0, 5, 5, 0, -5,
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            0, 0, 0, 1, 1, 0, 1, 1
        ]),
        ibo: new Uint16Array([
            0, 1, 2,
            2, 1, 3
        ])
    };
    var _cube = {
        vbo: new Float32Array([
            -0.5, -0.5, -0.5,
            -0.5, -0.5, 0.5,
            0.5, -0.5, -0.5,
            0.5, -0.5, 0.5,
            -0.5, 0.5, 0.5,
            -0.5, 0.5, -0.5,
            0.5, 0.5, 0.5,
            0.5, 0.5, -0.5,
            -0.5, -0.5, 0.5,
            -0.5, 0.5, 0.5,
            0.5, -0.5, 0.5,
            0.5, 0.5, 0.5,
            -0.5, 0.5, -0.5,
            -0.5, -0.5, -0.5,
            0.5, 0.5, -0.5,
            0.5, -0.5, -0.5,
            0.5, -0.5, -0.5,
            0.5, -0.5, 0.5,
            0.5, 0.5, -0.5,
            0.5, 0.5, 0.5,
            -0.5, -0.5, 0.5,
            -0.5, -0.5, -0.5,
            -0.5, 0.5, 0.5,
            -0.5, 0.5, -0.5,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0, 1,
            -1, 0, 0, 1,
            -1, 0, 0, 1,
            -1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            -1, 0, 0, 1,
            -1, 0, 0, 1,
            -1, 0, 0, 1,
            -1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            0, 0, 1, 1,
            0, 0, 1, 1,
            0, 0, 1, 1,
            0, 0, 1, 1,
            0, 0, -1, 1,
            0, 0, -1, 1,
            0, 0, -1, 1,
            0, 0, -1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            0, 0,
            0, 1,
            1, 0,
            1, 1,
            0, 0,
            0, 1,
            1, 0,
            1, 1,
            1, 1,
            1, 0,
            0, 1,
            0, 0,
            0, 0,
            0, 1,
            1, 0,
            1, 1,
            0, 1,
            1, 1,
            0, 0,
            1, 0,
            0, 1,
            1, 1,
            0, 0,
            1, 0,
        ]),
        ibo: new Uint16Array([
            0, 1, 2, 2, 1, 3,
            4, 5, 6, 6, 5, 7,
            8, 9, 10, 10, 9, 11,
            12, 13, 14, 14, 13, 15,
            16, 17, 18, 18, 17, 19,
            20, 21, 22, 22, 21, 23
        ])
    };
    var _circleLine = {
        vbo: new Float32Array([
            -0.5, 0.5, 0,
            -0.5, -0.5, 0,
            0.5, 0.5, 0,
            0.5, -0.5, 0,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            0, 0,
            0, 1,
            1, 0,
            1, 1,
        ]),
        ibo: new Uint16Array([
            0, 1, 2,
            2, 1, 3
        ])
    };
    var _quadParticle = {
        vbo: new Float32Array([
            0, 0.5, 0,
            0, -0.5, 0,
            1, 0.5, 0,
            1, -0.5, 0,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            0, 0,
            0, 1,
            1, 0,
            1, 1,
        ]),
        ibo: new Uint16Array([
            0, 1, 2,
            2, 1, 3
        ])
    };
    var _quad = {
        vbo: new Float32Array([
            -0.5, 0.5, 0,
            -0.5, -0.5, 0,
            0.5, 0.5, 0,
            0.5, -0.5, 0,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            0, 0,
            0, 1,
            1, 0,
            1, 1,
        ]),
        ibo: new Uint16Array([
            0, 1, 2,
            2, 1, 3
        ])
    };
    var _pyramid = {
        vbo: new Float32Array([
            -0.5, -1, -0.5,
            0, 1, 0,
            0.5, -1, -0.5,
            0.5, -1, -0.5,
            0, 1, 0,
            0.5, -1, 0.5,
            0.5, -1, 0.5,
            0, 1, 0,
            -0.5, -1, 0.5,
            -0.5, -1, 0.5,
            0, 1, 0,
            -0.5, -1, -0.5,
            -0.5, -1, -0.5,
            0.5, -1, -0.5,
            0.5, -1, 0.5,
            -0.5, -1, 0.5,
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            0, 0, 0, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            0, 0,
            0.5, 0.5,
            0, 1,
            0, 1,
            0.5, 0.5,
            1, 1,
            1, 1,
            0.5, 0.5,
            1, 0,
            1, 0,
            0.5, 0.5,
            0, 0,
            0, 0,
            1, 0,
            1, 1,
            0, 1,
        ]),
        ibo: new Uint16Array([
            0, 2, 1, 3, 5, 4,
            6, 8, 7, 9, 11, 10,
            12, 14, 13, 15, 14, 12
        ])
    };
    var _box = {
        ibo: new Uint16Array([
            0, 1, 2, 2, 1, 3,
            4, 5, 6, 6, 5, 7,
            1, 3, 5, 5, 3, 7,
            0, 2, 4, 4, 2, 6,
            6, 2, 7, 7, 2, 3,
            0, 4, 1, 1, 4, 5,
        ])
    };
    var _attributesA = [
        "POSITION" /* POSITION */,
        "NORMAL" /* NORMAL */,
        "TANGENT" /* TANGENT */,
        "COLOR_0" /* COLOR_0 */,
        "TEXCOORD_0" /* TEXCOORD_0 */,
    ];
    var _attributesB = [
        "POSITION" /* POSITION */,
        "NORMAL" /* NORMAL */,
        "TEXCOORD_0" /* TEXCOORD_0 */,
    ];
    var _attributesC = [
        "POSITION" /* POSITION */,
    ];
    var DefaultMeshes = (function () {
        function DefaultMeshes() {
        }
        DefaultMeshes.init = function () {
            if (this._inited) {
                return;
            }
            this._inited = true;
            this.QUAD = this._createDefaultMeshA(_quad);
            this.QUAD_PARTICLE = this._createDefaultMeshA(_quadParticle);
            this.PLANE = this._createDefaultMeshA(_plane);
            this.CIRCLE_LINE = this._createDefaultMeshA(_circleLine);
            this.CUBE = this._createDefaultMeshA(_cube);
            this.PYRAMID = this._createDefaultMeshA(_pyramid);
            this.CYLINDER = this.createCylinderCCW(2, 0.5);
            this.SPHERE = this.createSphereCCW();
        };
        DefaultMeshes._createDefaultMeshA = function (data) {
            var mesh = new egret3d.Mesh(data.vbo, data.ibo, _attributesA);
            return mesh;
        };
        DefaultMeshes.genBoxByArray = function (array) {
            var vertexCount = 8;
            var mesh = new egret3d.Mesh(vertexCount, _box.ibo, _attributesC);
            for (var i = 0; i < vertexCount; ++i) {
                var vertex = array[i];
                mesh.setVertexAttribute(i, "POSITION" /* POSITION */, 0, vertex.x, vertex.y, vertex.z);
            }
            mesh.uploadSubVertexBuffer(_attributesC);
            return mesh;
        };
        DefaultMeshes.createCylinderCCW = function (height, radius, segment) {
            if (segment === void 0) { segment = 20; }
            var index = 0;
            var mesh = new egret3d.Mesh(4 * segment + 2, 3 * 4 * segment, _attributesB);
            var normal = new egret3d.Vector3(0.0, 1.0, 0.0);
            var indices = mesh.getIndices();
            for (var s = 0; s < 4; s++) {
                var y = (s < 2 ? 0.5 : -0.5) * height;
                if (s === 3) {
                    normal.x = 0.0;
                    normal.y = -1.0;
                    normal.z = 0.0;
                }
                for (var i = 0; i < segment; i++) {
                    var r = i / segment * Math.PI * 2.0;
                    var x = Math.sin(r);
                    var z = Math.cos(r);
                    if (s === 1 || s === 2) {
                        normal.x = x;
                        normal.y = 0.0;
                        normal.z = z;
                    }
                    mesh.setVertexAttribute(index, "POSITION" /* POSITION */, 0, x * radius, y, z * radius);
                    // mesh.setVertexAttribute(index, gltf.MeshAttributeType.NORMAL, 0, normal.x, normal.y, normal.z);
                    if (s === 0 || s === 3) {
                        mesh.setVertexAttribute(index, "TEXCOORD_0" /* TEXCOORD_0 */, 0, x * 0.5 + 0.5, z * 0.5 + 0.5);
                    }
                    else {
                        mesh.setVertexAttribute(index, "TEXCOORD_0" /* TEXCOORD_0 */, 0, i / segment, y < 0.0 ? 0.0 : 1.0);
                    }
                    index++;
                }
            }
            // Top
            mesh.setVertexAttribute(index, "POSITION" /* POSITION */, 0, 0.0, 0.5 * height, 0.0);
            // mesh.setVertexAttribute(index, gltf.MeshAttributeType.NORMAL, 0, 0.0, 1.0, 0.0);
            mesh.setVertexAttribute(index, "TEXCOORD_0" /* TEXCOORD_0 */, 0, 0.5, 0.5);
            index++;
            // Bottom
            mesh.setVertexAttribute(index, "POSITION" /* POSITION */, 0, 0.0, -0.5 * height, 0.0);
            // mesh.setVertexAttribute(index, gltf.MeshAttributeType.NORMAL, 0, 0.0, -1.0, 0.0);
            mesh.setVertexAttribute(index, "TEXCOORD_0" /* TEXCOORD_0 */, 0, 0.5, 0.5);
            index++;
            //
            index = 0;
            var iTop = 4 * segment;
            var iBottom = 4 * segment + 1;
            for (var i = 0; i < segment; i++) {
                // Top
                indices[index++] = iTop;
                indices[index++] = i === segment - 1 ? segment * 0 + 0 : segment * 0 + i + 1;
                indices[index++] = segment * 0 + i + 0;
                // Bottom
                indices[index++] = iBottom;
                indices[index++] = segment * 3 + i + 0;
                indices[index++] = i === segment - 1 ? segment * 3 + 0 : segment * 3 + i + 1;
                // Side
                var t = segment * 1 + i;
                var t2 = i === segment - 1 ? segment * 1 + 0 : segment * 1 + i + 1;
                var b = segment * 2 + i;
                var b2 = i === segment - 1 ? segment * 2 + 0 : segment * 2 + i + 1;
                indices[index++] = t;
                indices[index++] = t2;
                indices[index++] = b;
                indices[index++] = t2;
                indices[index++] = b2;
                indices[index++] = b;
            }
            mesh.uploadSubVertexBuffer(_attributesB);
            mesh.uploadSubIndexBuffer();
            return mesh;
        };
        DefaultMeshes.createSphereCCW = function (radius, widthSegments, heightSegments) {
            if (radius === void 0) { radius = 1.0; }
            if (widthSegments === void 0) { widthSegments = 24; }
            if (heightSegments === void 0) { heightSegments = 12; }
            widthSegments = Math.max(3, Math.floor(widthSegments));
            heightSegments = Math.max(2, Math.floor(heightSegments));
            var mesh = new egret3d.Mesh((widthSegments + 1) * (heightSegments + 1), widthSegments * heightSegments * 6 - 6, _attributesB);
            //
            var index = 0;
            var iv = 0;
            var vertex = new egret3d.Vector3();
            var normal = new egret3d.Vector3();
            var grid = new Array();
            for (var iy = 0; iy <= heightSegments; iy++) {
                var verticesRow = new Array();
                var v = iy / heightSegments;
                for (var ix = 0; ix <= widthSegments; ix++) {
                    var u = ix / widthSegments;
                    // Vertex.
                    vertex.x = -radius * Math.cos(u * Math.PI * 2) * Math.sin(v * Math.PI);
                    vertex.y = radius * Math.cos(v * Math.PI);
                    vertex.z = radius * Math.sin(u * Math.PI * 2) * Math.sin(v * Math.PI);
                    mesh.setVertexAttribute(iv, "POSITION" /* POSITION */, 0, vertex.x, vertex.y, vertex.z);
                    // Normal.
                    normal.x = vertex.x;
                    normal.y = vertex.y;
                    normal.z = vertex.z;
                    var num = Math.sqrt(normal.x * normal.x + normal.y * normal.y + normal.z * normal.z);
                    if (num > Number.MIN_VALUE) {
                        mesh.setVertexAttribute(iv, "NORMAL" /* NORMAL */, 0, normal.x / num, normal.y / num, normal.z / num);
                    }
                    else {
                        mesh.setVertexAttribute(iv, "NORMAL" /* NORMAL */, 0, 0.0, 0.0, 0.0);
                    }
                    mesh.setVertexAttribute(iv, "TEXCOORD_0" /* TEXCOORD_0 */, 0, 1.0 - u, v);
                    iv++;
                    verticesRow.push(index++);
                }
                grid.push(verticesRow);
            }
            // Indices.
            var tris = new Array();
            for (var iy = 0; iy < heightSegments; iy++) {
                for (var ix = 0; ix < widthSegments; ix++) {
                    var a = grid[iy][ix + 1];
                    var b = grid[iy][ix];
                    var c = grid[iy + 1][ix];
                    var d = grid[iy + 1][ix + 1];
                    if (iy !== 0) {
                        tris.push(a, d, b);
                    }
                    if (iy !== heightSegments - 1) {
                        tris.push(b, d, c);
                    }
                }
            }
            var indices = mesh.getIndices();
            for (var i = 0, l = tris.length; i < l; i++) {
                indices[i] = tris[i];
            }
            mesh.uploadSubVertexBuffer(_attributesB);
            mesh.uploadSubIndexBuffer();
            return mesh;
        };
        DefaultMeshes._inited = false;
        return DefaultMeshes;
    }());
    egret3d.DefaultMeshes = DefaultMeshes;
    __reflect(DefaultMeshes.prototype, "egret3d.DefaultMeshes");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     * 正则表达式的工具类，提供一些引擎用到的正则表达式
     */
    var RegexpUtil = (function () {
        function RegexpUtil() {
        }
        // shader properties
        RegexpUtil.textureRegexp = /([_0-9a-zA-Z]+)[ ]*\([ ]*'(.+)'[ ]*,[ ]*([0-9a-zA-Z]+)[ ]*\)[ ]*=[ ]*'(.+)'[ ]*\{[ ]*([a-zA-Z]*)[ ]*([a-zA-Z]*)[ ]*\}/;
        RegexpUtil.vectorRegexp = /([_0-9a-zA-Z]+)[ ]*\([ ]*'(.+)'[ ]*,[ ]*([0-9a-zA-Z]+)[ ]*\)[ ]*=[ ]*\([ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*\)/;
        RegexpUtil.floatRegexp = /([_0-9a-zA-Z]+)[ ]*\([ ]*'(.+)'[ ]*,[ ]*([0-9a-zA-Z]+)[ ]*\)[ ]*=[ ]*([0-9.-]+)/;
        RegexpUtil.rangeRegexp = /([_0-9a-zA-Z]+)[ ]*\([ ]*'(.+)'[ ]*,[ ]*([0-9a-zA-Z]+)[ ]*\([ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*\)[ ]*\)[ ]*=[ ]*([0-9.-]+)/;
        // material
        RegexpUtil.vector4Regexp = /\([ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*\)/;
        // 特效解析，[1,2],2,1
        RegexpUtil.vector3FloatOrRangeRegexp = /([0-9.-]+|\[[0-9.-]+,[0-9.-]+\]),([0-9.-]+|\[[0-9.-]+,[0-9.-]+\]),([0-9.-]+|\[[0-9.-]+,[0-9.-]+\])/;
        return RegexpUtil;
    }());
    egret3d.RegexpUtil = RegexpUtil;
    __reflect(RegexpUtil.prototype, "egret3d.RegexpUtil");
})(egret3d || (egret3d = {}));
// 0.04 处理utf8 string 不能用encode decode
var egret3d;
(function (egret3d) {
    var io;
    (function (io) {
        var BinReader = (function () {
            function BinReader(buf, seek) {
                if (seek === void 0) { seek = 0; }
                this._seek = seek;
                this._data = new DataView(buf, seek);
            }
            BinReader.prototype.seek = function (seek) {
                this._seek = seek;
            };
            BinReader.prototype.peek = function () {
                return this._seek;
            };
            BinReader.prototype.length = function () {
                return this._data.byteLength;
            };
            BinReader.prototype.canread = function () {
                return this._data.byteLength - this._seek;
            };
            BinReader.prototype.readStringAnsi = function () {
                var slen = this._data.getUint8(this._seek);
                this._seek++;
                var bs = "";
                for (var i = 0; i < slen; i++) {
                    bs += String.fromCharCode(this._data.getUint8(this._seek));
                    this._seek++;
                }
                return bs;
            };
            BinReader.utf8ArrayToString = function (array) {
                var ret = [];
                for (var i = 0; i < array.length; i++) {
                    var cc = array[i];
                    if (cc == 0)
                        break;
                    var ct = 0;
                    if (cc > 0xE0) {
                        ct = (cc & 0x0F) << 12;
                        cc = array[++i];
                        ct |= (cc & 0x3F) << 6;
                        cc = array[++i];
                        ct |= cc & 0x3F;
                        ret.push(String.fromCharCode(ct));
                    }
                    else if (cc > 0xC0) {
                        ct = (cc & 0x1F) << 6;
                        cc = array[++i];
                        ct |= (cc & 0x3F) << 6;
                        ret.push(String.fromCharCode(ct));
                    }
                    else if (cc > 0x80) {
                        throw new Error("InvalidCharacterError");
                    }
                    else {
                        ret.push(String.fromCharCode(array[i]));
                    }
                }
                return ret.join('');
            };
            BinReader.prototype.readStringUtf8 = function () {
                var length = this._data.getInt8(this._seek);
                this._seek++;
                var arr = new Uint8Array(length);
                this.readUint8Array(arr);
                return BinReader.utf8ArrayToString(arr);
            };
            BinReader.prototype.readStringUtf8FixLength = function (length) {
                var arr = new Uint8Array(length);
                this.readUint8Array(arr);
                return BinReader.utf8ArrayToString(arr);
            };
            BinReader.prototype.readSingle = function () {
                var num = this._data.getFloat32(this._seek, true);
                this._seek += 4;
                return num;
            };
            BinReader.prototype.readDouble = function () {
                var num = this._data.getFloat64(this._seek, true);
                this._seek += 8;
                return num;
            };
            BinReader.prototype.readInt8 = function () {
                var num = this._data.getInt8(this._seek);
                this._seek += 1;
                return num;
            };
            BinReader.prototype.readUInt8 = function () {
                var num = this._data.getUint8(this._seek);
                this._seek += 1;
                return num;
            };
            BinReader.prototype.readInt16 = function () {
                var num = this._data.getInt16(this._seek, true);
                this._seek += 2;
                return num;
            };
            BinReader.prototype.readUInt16 = function () {
                var num = this._data.getUint16(this._seek, true);
                this._seek += 2;
                return num;
            };
            BinReader.prototype.readInt32 = function () {
                var num = this._data.getInt32(this._seek, true);
                this._seek += 4;
                return num;
            };
            BinReader.prototype.readUInt32 = function () {
                var num = this._data.getUint32(this._seek, true);
                this._seek += 4;
                return num;
            };
            BinReader.prototype.readUint8Array = function (target, offset, length) {
                if (target === void 0) { target = null; }
                if (offset === void 0) { offset = 0; }
                if (length === void 0) { length = -1; }
                if (length < 0)
                    length = target.length;
                for (var i = 0; i < length; i++) {
                    target[i] = this._data.getUint8(this._seek);
                    this._seek++;
                }
                return target;
            };
            BinReader.prototype.readUint8ArrayByOffset = function (target, offset, length) {
                if (length === void 0) { length = 0; }
                if (length < 0)
                    length = target.length;
                for (var i = 0; i < length; i++) {
                    target[i] = this._data.getUint8(offset);
                    offset++;
                }
                return target;
            };
            BinReader.prototype.readUint16Array = function (target, offset, length) {
                if (target === void 0) { target = null; }
                if (offset === void 0) { offset = 0; }
                if (length === void 0) { length = -1; }
                if (length < 0)
                    length = target.length;
                for (var i = 0; i < length; i++) {
                    target[i] = this.readUInt16();
                }
                return target;
            };
            BinReader.prototype.readSingleArray = function (target, offset, length) {
                if (target === void 0) { target = null; }
                if (offset === void 0) { offset = 0; }
                if (length === void 0) { length = -1; }
                if (length < 0)
                    length = target.length;
                // console.log(this._data.byteLength, this._data.byteOffset);
                for (var i = 0; i < length; i++) {
                    // target[i] = this._data.getFloat32(this._seek, true);
                    // this._seek += 4;
                    target[i] = this.readSingle();
                }
                return target;
            };
            Object.defineProperty(BinReader.prototype, "position", {
                get: function () {
                    return this.peek();
                },
                set: function (value) {
                    this.seek(value);
                },
                enumerable: true,
                configurable: true
            });
            BinReader.prototype.readBoolean = function () {
                return this.readUInt8() > 0;
            };
            BinReader.prototype.readByte = function () {
                return this.readUInt8();
            };
            BinReader.prototype.readBytes = function (target, offset, length) {
                if (target === void 0) { target = null; }
                if (offset === void 0) { offset = 0; }
                if (length === void 0) { length = -1; }
                return this.readUint8Array(target, offset, length);
            };
            BinReader.prototype.readUnsignedShort = function () {
                return this.readUInt16();
            };
            BinReader.prototype.readUnsignedInt = function () {
                return this.readUInt32();
            };
            BinReader.prototype.readFloat = function () {
                return this.readSingle();
            };
            BinReader.prototype.readUTFBytes = function (length) {
                var arry = new Uint8Array(length);
                return BinReader.utf8ArrayToString(this.readUint8Array(arry));
            };
            BinReader.prototype.readSymbolByte = function () {
                return this.readInt8();
            };
            BinReader.prototype.readShort = function () {
                return this.readInt16();
            };
            BinReader.prototype.readInt = function () {
                return this.readInt32();
            };
            return BinReader;
        }());
        io.BinReader = BinReader;
        __reflect(BinReader.prototype, "egret3d.io.BinReader");
        var BinWriter = (function () {
            function BinWriter() {
                var buf = new ArrayBuffer(1024);
                this._length = 0;
                this._buf = new Uint8Array(buf);
                this._data = new DataView(this._buf.buffer);
                this._seek = 0;
            }
            BinWriter.prototype.sureData = function (addlen) {
                var nextlen = this._buf.byteLength;
                while (nextlen < (this._length + addlen)) {
                    nextlen += 1024;
                }
                if (nextlen != this._buf.byteLength) {
                    var newbuf = new Uint8Array(nextlen);
                    for (var i = 0; i < this._length; i++) {
                        newbuf[i] = this._buf[i];
                    }
                    this._buf = newbuf;
                    this._data = new DataView(this._buf.buffer);
                }
                this._length += addlen;
            };
            BinWriter.prototype.getLength = function () {
                return length;
            };
            BinWriter.prototype.getBuffer = function () {
                return this._buf.buffer.slice(0, this._length);
            };
            BinWriter.prototype.seek = function (seek) {
                this._seek = seek;
            };
            BinWriter.prototype.peek = function () {
                return this._seek;
            };
            BinWriter.prototype.writeInt8 = function (num) {
                this.sureData(1);
                this._data.setInt8(this._seek, num);
                this._seek++;
            };
            BinWriter.prototype.writeUInt8 = function (num) {
                this.sureData(1);
                this._data.setUint8(this._seek, num);
                this._seek++;
            };
            BinWriter.prototype.writeInt16 = function (num) {
                this.sureData(2);
                this._data.setInt16(this._seek, num, true);
                this._seek += 2;
            };
            BinWriter.prototype.writeUInt16 = function (num) {
                this.sureData(2);
                this._data.setUint16(this._seek, num, true);
                this._seek += 2;
            };
            BinWriter.prototype.writeInt32 = function (num) {
                this.sureData(4);
                this._data.setInt32(this._seek, num, true);
                this._seek += 4;
            };
            BinWriter.prototype.writeUInt32 = function (num) {
                this.sureData(4);
                this._data.setUint32(this._seek, num, true);
                this._seek += 4;
            };
            BinWriter.prototype.writeSingle = function (num) {
                this.sureData(4);
                this._data.setFloat32(this._seek, num, true);
                this._seek += 4;
            };
            BinWriter.prototype.writeDouble = function (num) {
                this.sureData(8);
                this._data.setFloat64(this._seek, num, true);
                this._seek += 8;
            };
            BinWriter.prototype.writeStringAnsi = function (str) {
                var slen = str.length;
                this.sureData(slen + 1);
                this._data.setUint8(this._seek, slen);
                this._seek++;
                for (var i = 0; i < slen; i++) {
                    this._data.setUint8(this._seek, str.charCodeAt(i));
                    this._seek++;
                }
            };
            BinWriter.prototype.writeStringUtf8 = function (str) {
                var bstr = BinWriter.stringToUtf8Array(str);
                this.writeUInt8(bstr.length);
                this.writeUint8Array(bstr);
            };
            BinWriter.stringToUtf8Array = function (str) {
                var bstr = [];
                for (var i = 0; i < str.length; i++) {
                    var c = str.charAt(i);
                    var cc = c.charCodeAt(0);
                    if (cc > 0xFFFF) {
                        throw new Error("InvalidCharacterError");
                    }
                    if (cc > 0x80) {
                        if (cc < 0x07FF) {
                            var c1 = (cc >>> 6) | 0xC0;
                            var c2 = (cc & 0x3F) | 0x80;
                            bstr.push(c1, c2);
                        }
                        else {
                            var c1 = (cc >>> 12) | 0xE0;
                            var c2 = ((cc >>> 6) & 0x3F) | 0x80;
                            var c3 = (cc & 0x3F) | 0x80;
                            bstr.push(c1, c2, c3);
                        }
                    }
                    else {
                        bstr.push(cc);
                    }
                }
                return bstr;
            };
            BinWriter.prototype.writeStringUtf8DataOnly = function (str) {
                var bstr = BinWriter.stringToUtf8Array(str);
                this.writeUint8Array(bstr);
            };
            BinWriter.prototype.writeUint8Array = function (array, offset, length) {
                if (offset === void 0) { offset = 0; }
                if (length === void 0) { length = -1; }
                if (length < 0)
                    length = array.length;
                this.sureData(length);
                for (var i = offset; i < offset + length; i++) {
                    this._data.setUint8(this._seek, array[i]);
                    this._seek++;
                }
            };
            Object.defineProperty(BinWriter.prototype, "length", {
                get: function () {
                    return this._seek;
                },
                enumerable: true,
                configurable: true
            });
            BinWriter.prototype.writeByte = function (num) {
                this.writeUInt8(num);
            };
            BinWriter.prototype.writeBytes = function (array, offset, length) {
                if (offset === void 0) { offset = 0; }
                if (length === void 0) { length = 0; }
                this.writeUint8Array(array, offset, length);
            };
            BinWriter.prototype.writeUnsignedShort = function (num) {
                this.writeUInt16(num);
            };
            BinWriter.prototype.writeUnsignedInt = function (num) {
                this.writeUInt32(num);
            };
            BinWriter.prototype.writeFloat = function (num) {
                this.writeSingle(num);
            };
            BinWriter.prototype.writeUTFBytes = function (str) {
                var strArray = BinWriter.stringToUtf8Array(str);
                this.writeUint8Array(strArray);
            };
            BinWriter.prototype.writeSymbolByte = function (num) {
                this.writeInt8(num);
            };
            BinWriter.prototype.writeShort = function (num) {
                this.writeInt16(num);
            };
            BinWriter.prototype.writeInt = function (num) {
                this.writeInt32(num);
            };
            return BinWriter;
        }());
        io.BinWriter = BinWriter;
        __reflect(BinWriter.prototype, "egret3d.io.BinWriter");
    })(io = egret3d.io || (egret3d.io = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var utils;
    (function (utils) {
        /**
         * Get path by url
         * @param content text
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取RUL的PATH。
         * @param content 文本
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        function getPathByUrl(url) {
            return url.substring(0, url.lastIndexOf("/"));
        }
        utils.getPathByUrl = getPathByUrl;
        function combinePath(base, relative) {
            var stack = base.split("/"), parts = relative.split("/");
            stack.pop(); // remove current file name (or empty string)
            // (omit if "base" is the current folder without trailing slash)
            for (var i = 0; i < parts.length; i++) {
                if (parts[i] == ".")
                    continue;
                if (parts[i] == "..")
                    stack.pop();
                else
                    stack.push(parts[i]);
            }
            return stack.join("/");
        }
        utils.combinePath = combinePath;
        function getRelativePath(targetPath, sourcePath) {
            var relPath = "";
            targetPath = targetPath.replace("\\", "/");
            sourcePath = sourcePath.replace("\\", "/");
            var targetPathArr = targetPath.split('/');
            var sourcePathArr = sourcePath.split('/');
            var targetPathLen = targetPathArr.length;
            var sourcePathLen = sourcePathArr.length;
            var i = 0;
            while (targetPathArr[i] == sourcePathArr[i] && i < targetPathLen && i < sourcePathLen) {
                i++;
            }
            for (var j = 0; j < sourcePathLen - i - 1; j++) {
                relPath += "../";
            }
            targetPathArr = targetPathArr.slice(i, targetPathArr.length);
            relPath = relPath + targetPathArr.join("/");
            relPath = relPath.replace(" ", "_");
            return relPath;
        }
        utils.getRelativePath = getRelativePath;
        /**
         * first char to lower case
         * @param str source string
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 将一个字符串中的第一个字符转为小写
         * @param str 要处理的字符串
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        function firstCharToLowerCase(str) {
            var firstChar = str.substr(0, 1).toLowerCase();
            var other = str.substr(1);
            return firstChar + other;
        }
        utils.firstCharToLowerCase = firstCharToLowerCase;
        /**
         * replace all
         * @param srcStr source string
         * @param fromStr from string
         * @param toStr to string
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 将一个字符串中的所有指定字符替换为指定字符
         * @param srcStr 要处理的字符串
         * @param fromStr 原字符串中的指定字符串
         * @param toStr 将被替换为的字符串
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        function replaceAll(srcStr, fromStr, toStr) {
            return srcStr.replace(new RegExp(fromStr, 'gm'), toStr);
        }
        utils.replaceAll = replaceAll;
        /**
         * remove all space
         * @param str source string
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 剔除掉字符串中所有的空格
         * @param str 要处理的字符串
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        function trimAll(str) {
            str += ""; // number to string
            var result = str.replace(/(^\s+)|(\s+$)/g, "");
            result = result.replace(/\s/g, "");
            return result;
        }
        utils.trimAll = trimAll;
        /**
         * Convert string to blob
         * @param content text
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * string转换为blob。
         * @param content 文本
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        function stringToBlob(content) {
            var u8 = new Uint8Array(stringToUtf8Array(content));
            var blob = new Blob([u8]);
            return blob;
        }
        utils.stringToBlob = stringToBlob;
        /**
         * Convert string to utf8 array
         * @param str text
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * string转换为utf8数组。
         * @param str 文本
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        function stringToUtf8Array(str) {
            var bstr = [];
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                var cc = c.charCodeAt(0);
                if (cc > 0xFFFF) {
                    throw new Error("InvalidCharacterError");
                }
                if (cc > 0x80) {
                    if (cc < 0x07FF) {
                        var c1 = (cc >>> 6) | 0xC0;
                        var c2 = (cc & 0x3F) | 0x80;
                        bstr.push(c1, c2);
                    }
                    else {
                        var c1 = (cc >>> 12) | 0xE0;
                        var c2 = ((cc >>> 6) & 0x3F) | 0x80;
                        var c3 = (cc & 0x3F) | 0x80;
                        bstr.push(c1, c2, c3);
                    }
                }
                else {
                    bstr.push(cc);
                }
            }
            return bstr;
        }
        utils.stringToUtf8Array = stringToUtf8Array;
        function caclStringByteLength(value) {
            var total = 0;
            for (var i = 0; i < value.length; i++) {
                var charCode = value.charCodeAt(i);
                if (charCode <= 0x007f) {
                    total += 1;
                }
                else if (charCode <= 0x07ff) {
                    total += 2;
                }
                else if (charCode <= 0xffff) {
                    total += 3;
                }
                else {
                    total += 4;
                }
            }
            return total;
        }
        utils.caclStringByteLength = caclStringByteLength;
        function getKeyCodeByAscii(ev) {
            if (ev.shiftKey) {
                return ev.keyCode - 32;
            }
            else {
                return ev.keyCode;
            }
        }
        utils.getKeyCodeByAscii = getKeyCodeByAscii;
    })(utils = egret3d.utils || (egret3d.utils = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var sound;
    (function (sound) {
        /**
         * web audio
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 基于 Web Audio 网络音频模块（单例）
         * @version paper 1.0
         * @platform Web
         * @language
         */
        var WebAudio = (function () {
            function WebAudio() {
                var _win = window;
                var _AudioContext = _win["AudioContext"] || _win["webkitAudioContext"] || _win["mozAudioContext"] || _win["msAudioContext"];
                if (!!_AudioContext) {
                    this._audioContext = new _AudioContext();
                    console.log("AudioContext inited --> ");
                    console.log(this._audioContext);
                }
                else {
                    console.warn("!Your browser does not support AudioContext");
                }
            }
            Object.defineProperty(WebAudio, "instance", {
                /**
                 * web audio instance
                 * @version paper 1.0
                 * @platform Web
                 * @language en_US
                 */
                /**
                 * 基于 Web Audio 网络音频模块单例
                 * @version paper 1.0
                 * @platform Web
                 * @language
                 */
                get: function () {
                    if (!this._instance) {
                        this._instance = new WebAudio();
                    }
                    return this._instance;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebAudio.prototype, "audioContext", {
                /**
                 *
                 */
                get: function () {
                    return this._audioContext;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebAudio.prototype, "isSupported", {
                /**
                 * is support web audio
                 * @version paper 1.0
                 * @platform Web
                 * @language en_US
                 */
                /**
                 * 当前运行环境是否支持 Web Audio
                 * @version paper 1.0
                 * @platform Web
                 * @language
                 */
                get: function () {
                    return !!this._audioContext;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * active
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 某些平台中（IOS），需要在用户输入事件监听中调用此方法，音频才能正常播放
             * @version paper 1.0
             * @platform Web
             * @language
             */
            WebAudio.prototype.active = function () {
                if (!this.isSupported) {
                    return;
                }
                var buffer = this._audioContext.createBuffer(1, 1, 22050);
                var source = this._audioContext.createBufferSource();
                source.buffer = buffer;
                // connect to output (your speakers)
                source.connect(this._audioContext.destination);
                // play the file
                source.start();
            };
            /**
             *
             */
            WebAudio.prototype.decodeAudioData = function (buffer, onSuccess, onError) {
                this._audioContext.decodeAudioData(buffer, function (audiobuffer) { return onSuccess(audiobuffer); }, function () { return onError(); });
            };
            WebAudio.prototype.getAudioListener = function () {
                if (!this.audioListener) {
                    this.audioListener = new sound.WebAudioListener();
                }
                return this.audioListener;
            };
            return WebAudio;
        }());
        sound.WebAudio = WebAudio;
        __reflect(WebAudio.prototype, "egret3d.sound.WebAudio");
    })(sound = egret3d.sound || (egret3d.sound = {}));
})(egret3d || (egret3d = {}));
var Stats;
(function (Stats_1) {
    var stats;
    var loop;
    /**
     * 显示调试面板
     */
    function show(container, refreshTime) {
        if (refreshTime === void 0) { refreshTime = 500; }
        if (stats == null) {
            stats = new Stats();
            stats.container.style.position = 'absolute';
            stats.container.style.left = '0px';
            stats.container.style.top = '0px';
            container.appendChild(stats.container);
        }
        else {
            container.appendChild(stats.container);
        }
        if (loop) {
            hide();
        }
        loop = setInterval(function () {
            stats.update();
        }, refreshTime);
        egret3d.Performance.enable = true;
    }
    Stats_1.show = show;
    /**
     * 关闭调试面板
     */
    function hide() {
        if (loop) {
            clearInterval(loop);
        }
        if (stats != null && stats.container.parentNode) {
            stats.container.parentNode.removeChild(stats.container);
        }
        egret3d.Performance.enable = false;
    }
    Stats_1.hide = hide;
    /**
     *
     * @author mrdoob / http://mrdoob.com/
     * @modify egret
     */
    var Stats = (function () {
        function Stats() {
            var _this = this;
            this.mode = 0;
            this.container = document.createElement('div');
            this.container.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.7;z-index:1';
            this.container.addEventListener('click', function (event) {
                event.preventDefault();
                _this.showPanel(++_this.mode % _this.container.children.length);
            }, false);
            this.fpsPanel = this.addPanel(new Panel('FPS', '#0ff', '#002'));
            this.msPanel = this.addPanel(new Panel('MS', '#0f0', '#020'));
            this.renderPanel = this.addPanel(new Panel('R%', '#0f0', '#020'));
            if (self.performance && self.performance["memory"]) {
                this.memPanel = this.addPanel(new Panel('MB', '#f08', '#201'));
            }
            this.showPanel(0);
        }
        Stats.prototype.update = function () {
            var fps = egret3d.Performance.getFPS();
            var fpsEntity = egret3d.Performance.getEntity("fps");
            var allEntity = egret3d.Performance.getEntity("all");
            var renderEntity = egret3d.Performance.getEntity("render");
            this.fpsPanel.update(fps, 100);
            this.msPanel.update(allEntity.delta, 200);
            this.renderPanel.update(Math.floor(renderEntity.delta / fpsEntity.delta * 100), 100);
            if (this.memPanel) {
                var memory = performance["memory"];
                this.memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
            }
        };
        Stats.prototype.showPanel = function (id) {
            for (var i = 0; i < this.container.children.length; i++) {
                this.container.children[i]["style"].display = i === id ? 'block' : 'none';
            }
            this.mode = id;
        };
        Stats.prototype.addPanel = function (panel) {
            this.container.appendChild(panel.canvas);
            return panel;
        };
        return Stats;
    }());
    __reflect(Stats.prototype, "Stats");
    /**
     *
     */
    var Panel = (function () {
        function Panel(name, fg, bg) {
            this.name = name;
            this.fg = fg;
            this.bg = bg;
            this.min = Infinity;
            this.max = 0;
            this.PR = Math.round(window.devicePixelRatio || 1);
            this.WIDTH = 80 * this.PR;
            this.HEIGHT = 48 * this.PR;
            this.TEXT_X = 3 * this.PR;
            this.TEXT_Y = 2 * this.PR;
            this.GRAPH_X = 3 * this.PR;
            this.GRAPH_Y = 15 * this.PR;
            this.GRAPH_WIDTH = 74 * this.PR, this.GRAPH_HEIGHT = 30 * this.PR;
            this.canvas = document.createElement('canvas');
            this.canvas.width = this.WIDTH;
            this.canvas.height = this.HEIGHT;
            this.canvas.style.cssText = 'width:80px;height:48px';
            this.context = this.canvas.getContext('2d');
            this.context.font = 'bold ' + (9 * this.PR) + 'px Helvetica,Arial,sans-serif';
            this.context.textBaseline = 'top';
            this.context.fillStyle = bg;
            this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT);
            this.context.fillStyle = fg;
            this.context.fillText(name, this.TEXT_X, this.TEXT_Y);
            this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);
            this.context.fillStyle = bg;
            this.context.globalAlpha = 0.9;
            this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);
        }
        Panel.prototype.update = function (value, maxValue) {
            this.min = Math.min(this.min, value);
            this.max = Math.max(this.max, value);
            this.context.fillStyle = this.bg;
            this.context.globalAlpha = 1;
            this.context.fillRect(0, 0, this.WIDTH, this.GRAPH_Y);
            this.context.fillStyle = this.fg;
            this.context.fillText(Math.round(value) + ' ' + this.name + ' (' + Math.round(this.min) + '-' + Math.round(this.max) + ')', this.TEXT_X, this.TEXT_Y);
            this.context.drawImage(this.canvas, this.GRAPH_X + this.PR, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT, this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT);
            this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, this.GRAPH_HEIGHT);
            this.context.fillStyle = this.bg;
            this.context.globalAlpha = 0.9;
            this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, Math.round((1 - (value / maxValue)) * this.GRAPH_HEIGHT));
        };
        return Panel;
    }());
    __reflect(Panel.prototype, "Panel");
})(Stats || (Stats = {}));
/// <reference path="WebAudioChannel2D.ts" />
var egret3d;
(function (egret3d) {
    var sound;
    (function (sound) {
        /**
         *
         */
        var WebAudioChannel3D = (function (_super) {
            __extends(WebAudioChannel3D, _super);
            function WebAudioChannel3D() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.position = new egret3d.Vector3();
                _this.velocity = new egret3d.Vector3();
                return _this;
            }
            WebAudioChannel3D.prototype._init = function () {
                var context = sound.WebAudio.instance.audioContext;
                this.source = context.createBufferSource();
                this.panner = context.createPanner();
                this.gain = context.createGain();
                // Connect up the nodes
                this.source.connect(this.panner);
                this.panner.connect(this.gain);
                this.gain.connect(context.destination);
            };
            Object.defineProperty(WebAudioChannel3D.prototype, "maxDistance", {
                get: function () {
                    return this.panner.maxDistance;
                },
                set: function (value) {
                    this.panner.maxDistance = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebAudioChannel3D.prototype, "minDistance", {
                get: function () {
                    return this.panner.refDistance;
                },
                set: function (value) {
                    this.panner.refDistance = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebAudioChannel3D.prototype, "rollOffFactor", {
                get: function () {
                    return this.panner.rolloffFactor;
                },
                set: function (value) {
                    this.panner.rolloffFactor = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebAudioChannel3D.prototype, "distanceModel", {
                get: function () {
                    return this.panner.distanceModel;
                },
                set: function (value) {
                    if (value === "linear" || value === "inverse" || value === "exponential") {
                        this.panner.distanceModel = value;
                    }
                    else {
                        console.warn("distanceModel: " + value + " Is not a valid parameter");
                    }
                },
                enumerable: true,
                configurable: true
            });
            WebAudioChannel3D.prototype.setPosition = function (x, y, z) {
                this.position.x = x;
                this.position.y = y;
                this.position.z = z;
                this.panner.setPosition(x, y, z);
            };
            WebAudioChannel3D.prototype.getPosition = function () {
                return this.position;
            };
            WebAudioChannel3D.prototype.setVelocity = function (x, y, z) {
                this.position.x = x;
                this.position.y = y;
                this.position.z = z;
                this.panner.setVelocity(x, y, z);
            };
            WebAudioChannel3D.prototype.getVelocity = function () {
                return this.velocity;
            };
            return WebAudioChannel3D;
        }(sound.WebAudioChannel2D));
        sound.WebAudioChannel3D = WebAudioChannel3D;
        __reflect(WebAudioChannel3D.prototype, "egret3d.sound.WebAudioChannel3D");
    })(sound = egret3d.sound || (egret3d.sound = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var sound;
    (function (sound) {
        var WebAudioListener = (function () {
            function WebAudioListener() {
                this.position = new egret3d.Vector3();
                this.velocity = new egret3d.Vector3();
                this.orientation = new egret3d.Matrix();
                this.listener = sound.WebAudio.instance.audioContext.listener;
            }
            WebAudioListener.prototype.setPosition = function (x, y, z) {
                this.position.x = x;
                this.position.y = y;
                this.position.z = z;
                this.listener.setPosition(x, y, z);
            };
            WebAudioListener.prototype.getPosition = function () {
                return this.position;
            };
            WebAudioListener.prototype.setVelocity = function (x, y, z) {
                this.velocity.x = x;
                this.velocity.y = y;
                this.velocity.z = z;
                this.listener.setVelocity(x, y, z);
            };
            WebAudioListener.prototype.getVelocity = function () {
                return this.velocity;
            };
            WebAudioListener.prototype.setOrientation = function (orientation) {
                egret3d.Matrix.copy(orientation, this.orientation);
                this.listener.setOrientation(-orientation.rawData[8], -orientation.rawData[9], -orientation.rawData[10], orientation.rawData[4], orientation.rawData[5], orientation.rawData[6]);
            };
            WebAudioListener.prototype.getOrientation = function () {
                return this.orientation;
            };
            return WebAudioListener;
        }());
        sound.WebAudioListener = WebAudioListener;
        __reflect(WebAudioListener.prototype, "egret3d.sound.WebAudioListener");
    })(sound = egret3d.sound || (egret3d.sound = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * device input manager
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 用户输入设备管理器
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var InputManager = (function () {
        function InputManager() {
        }
        /**
         *
         */
        InputManager.init = function (canvas) {
            if (this._isInit) {
                return;
            }
            this._isInit = true;
            this.keyboard = new egret3d.KeyboardDevice(window);
            this.mouse = new egret3d.MouseDevice(canvas);
            this.touch = new egret3d.TouchDevice(canvas);
        };
        /**
         *
         */
        InputManager.update = function (deltaTime) {
            this.keyboard.update();
            this.mouse.update();
            this.touch.update();
        };
        /**
         * is pressed
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 是否正在被点击或者触摸
         * 只有单点触摸才被触发，多点触摸请使用 MouseDivice
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        InputManager.isPressed = function () {
            if (this.mouse.isPressed(0)) {
                return true;
            }
            else {
                var t = this.touch.getTouch(0);
                if (t && this.touch.touchCount == 1) {
                    if (t.phase == egret3d.TouchPhase.MOVED || t.phase == egret3d.TouchPhase.STATIONARY) {
                        return true;
                    }
                }
            }
            return false;
        };
        /**
         * was pressed
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 是否完成一次点击或触摸
         * 只有单点触摸才被触发，多点触摸请使用 MouseDivice
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        InputManager.wasPressed = function () {
            if (this.mouse.wasPressed(0)) {
                return true;
            }
            else {
                var t = this.touch.getTouch(0);
                if (t && this.touch.touchCount == 1) {
                    if (t.phase == egret3d.TouchPhase.BEGAN) {
                        return true;
                    }
                }
            }
            return false;
        };
        /**
         * was released
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 是否完成一次鼠标或触摸释放。
         * 只有单点触摸才被触发，多点触摸请使用 MouseDivice
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        InputManager.wasReleased = function () {
            if (this.mouse.wasReleased(0)) {
                return true;
            }
            else {
                var t = this.touch.getTouch(0);
                if (t && this.touch.touchCount == 1) {
                    if (t.phase == egret3d.TouchPhase.ENDED || t.phase == egret3d.TouchPhase.CANCELED) {
                        return true;
                    }
                }
            }
            return false;
        };
        /**
         * get touch point
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取点击或触摸位置
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        InputManager.getTouchPoint = function () {
            var t = this.touch.getTouch(0);
            if (t) {
                this._touchPoint.x = t.position.x;
                this._touchPoint.y = t.position.y;
            }
            else {
                this._touchPoint.x = this.mouse.position.x;
                this._touchPoint.y = this.mouse.position.y;
            }
            return this._touchPoint;
        };
        InputManager._isInit = false;
        InputManager._touchPoint = new egret3d.Vector2();
        return InputManager;
    }());
    egret3d.InputManager = InputManager;
    __reflect(InputManager.prototype, "egret3d.InputManager");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var _keyCodeToKeyIdentifier = {
        'TAB': 9,
        'ENTER': 13,
        'SHIFT': 16,
        'CONTROL': 17,
        'ALT': 18,
        'ESCAPE': 27,
        'LEFT': 37,
        'UP': 38,
        'RIGHT': 39,
        'DOWN': 40,
        'DELETE': 46,
        'WIN': 91
    };
    /**
     * keyboard input
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 键盘输入
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var KeyboardDevice = (function () {
        /**
         *
         */
        function KeyboardDevice(element, options) {
            if (options === void 0) { options = { preventDefault: false, stopPropagation: false }; }
            this._element = null;
            this._keymap = {};
            this._lastmap = {};
            this._keyDownHandler = this._handleKeyDown.bind(this);
            this._keyUpHandler = this._handleKeyUp.bind(this);
            this._keyPressHandler = this._handleKeyPress.bind(this);
            this._cacheKeyCodeMap = {};
            this.attach(element);
            this.preventDefault = options.preventDefault;
            this.stopPropagation = options.stopPropagation;
        }
        KeyboardDevice.prototype.attach = function (element) {
            if (this._element) {
                this.detach();
            }
            this._element = element;
            this._element.addEventListener("keydown", this._keyDownHandler, false);
            this._element.addEventListener("keypress", this._keyPressHandler, false);
            this._element.addEventListener("keyup", this._keyUpHandler, false);
        };
        KeyboardDevice.prototype.detach = function () {
            if (!this._element)
                return;
            this._element.removeEventListener("keydown", this._keyDownHandler, false);
            this._element.removeEventListener("keypress", this._keyPressHandler, false);
            this._element.removeEventListener("keyup", this._keyUpHandler, false);
            this._element = null;
        };
        KeyboardDevice.prototype._handleKeyDown = function (event) {
            var code = event.keyCode || event.charCode;
            var id = this._toKeyIdentifier(code);
            this._keymap[id] = true;
            if (this.preventDefault) {
                event.preventDefault();
            }
            if (this.stopPropagation) {
                event.stopPropagation();
            }
        };
        KeyboardDevice.prototype._handleKeyPress = function (event) {
            var code = event.keyCode || event.charCode;
            var id = this._toKeyIdentifier(code);
            // do nothing
            if (this.preventDefault) {
                event.preventDefault();
            }
            if (this.stopPropagation) {
                event.stopPropagation();
            }
        };
        KeyboardDevice.prototype._handleKeyUp = function (event) {
            var code = event.keyCode || event.charCode;
            var id = this._toKeyIdentifier(code);
            delete this._keymap[id];
            if (this.preventDefault) {
                event.preventDefault();
            }
            if (this.stopPropagation) {
                event.stopPropagation();
            }
        };
        KeyboardDevice.prototype._toKeyIdentifier = function (keyCode) {
            var code;
            if (typeof (keyCode) == "string") {
                var upperCode = keyCode.toUpperCase();
                if (!this._cacheKeyCodeMap[keyCode]) {
                    var _code = _keyCodeToKeyIdentifier[upperCode] || upperCode.charCodeAt(0);
                    this._cacheKeyCodeMap[upperCode] = _code;
                }
                code = this._cacheKeyCodeMap[upperCode];
            }
            else {
                code = keyCode;
            }
            // Convert to hex and add leading 0's
            var hex = code.toString(16).toUpperCase();
            var length = hex.length;
            for (var count = 0; count < (4 - length); count++) {
                hex = '0' + hex;
            }
            return 'U+' + hex;
        };
        /**
         *
         */
        KeyboardDevice.prototype.update = function () {
            var prop;
            for (prop in this._lastmap) {
                delete this._lastmap[prop];
            }
            for (prop in this._keymap) {
                if (this._keymap.hasOwnProperty(prop)) {
                    this._lastmap[prop] = this._keymap[prop];
                }
            }
        };
        /**
         * is pressed
         * @param key key code or char string
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 按键是否在按下状态
         * @param key 按键，可以为健值或者字符。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        KeyboardDevice.prototype.isPressed = function (key) {
            var id = this._toKeyIdentifier(key);
            return this._keymap[id];
        };
        /**
         * was pressed
         * @param key key code or char string
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 按键被按下一次
         * @param key 按键，可以为健值或者字符。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        KeyboardDevice.prototype.wasPressed = function (key) {
            var id = this._toKeyIdentifier(key);
            return (this._keymap[id] && !this._lastmap[id]);
        };
        /**
         * was released
         * @param key key code or char string
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 按键被抬起一次
         * @param key 按键，可以为健值或者字符。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        KeyboardDevice.prototype.wasReleased = function (key) {
            var id = this._toKeyIdentifier(key);
            return (!this._keymap[id] && this._lastmap[id]);
        };
        return KeyboardDevice;
    }());
    egret3d.KeyboardDevice = KeyboardDevice;
    __reflect(KeyboardDevice.prototype, "egret3d.KeyboardDevice");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * mouse input
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 鼠标输入
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var MouseDevice = (function (_super) {
        __extends(MouseDevice, _super);
        /**
         *
         */
        function MouseDevice(element) {
            var _this = _super.call(this) || this;
            _this._offsetX = 0;
            _this._offsetY = 0;
            _this._scaler = 1;
            /**
             * mouse position
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 当前鼠标位置
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.position = new egret3d.Vector2();
            /**
             * mouse wheel value
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 当前鼠标滚轮值
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.wheel = 0;
            _this._buttons = [false, false, false];
            _this._lastbuttons = [false, false, false];
            _this._element = null;
            _this._upHandler = _this._handleUp.bind(_this);
            _this._moveHandler = _this._handleMove.bind(_this);
            _this._downHandler = _this._handleDown.bind(_this);
            _this._wheelHandler = _this._handleWheel.bind(_this);
            _this._contextMenuHandler = function (event) { event.preventDefault(); };
            _this.attach(element);
            return _this;
        }
        /**
         *
         */
        MouseDevice.prototype.updateOffsetAndScale = function (offsetX, offsetY, scaler) {
            this._offsetX = offsetX;
            this._offsetY = offsetY;
            this._scaler = scaler;
        };
        /**
         *
         */
        MouseDevice.prototype.convertPosition = function (e, out) {
            out.x = (e.clientX - this._offsetX) * this._scaler;
            out.y = (e.clientY - this._offsetY) * this._scaler;
        };
        /**
         * disable right key menu
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 禁用右键菜单
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        MouseDevice.prototype.disableContextMenu = function () {
            if (!this._element)
                return;
            this._element.addEventListener("contextmenu", this._contextMenuHandler);
        };
        /**
         * enable right key menu
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 启用右键菜单
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        MouseDevice.prototype.enableContextMenu = function () {
            if (!this._element)
                return;
            this._element.removeEventListener("contextmenu", this._contextMenuHandler);
        };
        MouseDevice.prototype.attach = function (element) {
            if (this._element) {
                this.detach();
            }
            this._element = element;
            this._element.addEventListener("mouseup", this._upHandler, false);
            this._element.addEventListener("mousemove", this._moveHandler, false);
            this._element.addEventListener("mousedown", this._downHandler, false);
            this._element.addEventListener("mousewheel", this._wheelHandler, false); // WebKit
            this._element.addEventListener("DOMMouseScroll", this._wheelHandler, false); // Gecko
        };
        MouseDevice.prototype.detach = function () {
            if (!this._element)
                return;
            this._element.removeEventListener("mouseup", this._upHandler, false);
            this._element.removeEventListener("mousemove", this._moveHandler, false);
            this._element.removeEventListener("mousedown", this._downHandler, false);
            this._element.removeEventListener("mousewheel", this._wheelHandler, false); // WebKit
            this._element.removeEventListener("DOMMouseScroll", this._wheelHandler, false); // Gecko
            this._element = null;
        };
        /**
         *
         */
        MouseDevice.prototype.update = function () {
            // Copy current button state
            this._lastbuttons[0] = this._buttons[0];
            this._lastbuttons[1] = this._buttons[1];
            this._lastbuttons[2] = this._buttons[2];
            // set wheel to 0
            this.wheel = 0;
        };
        /**
         * is pressed
         * @param key key value. 0: left key; 1: middle key; 2: right key.
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 按键是否在按下状态
         * @param key 按键。0: 左键；1: 中键；2: 右键。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        MouseDevice.prototype.isPressed = function (button) {
            return this._buttons[button];
        };
        /**
         * was pressed
         * @param key key value. 0: left key; 1: middle key; 2: right key.
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 按键被按下一次
         * @param key 按键。0: 左键；1: 中键；2: 右键。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        MouseDevice.prototype.wasPressed = function (button) {
            return (this._buttons[button] && !this._lastbuttons[button]);
        };
        /**
         * was released
         * @param key key value. 0: left key; 1: middle key; 2: right key.
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 按键被抬起一次
         * @param key 按键。0: 左键；1: 中键；2: 右键。
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        MouseDevice.prototype.wasReleased = function (button) {
            return (!this._buttons[button] && this._lastbuttons[button]);
        };
        MouseDevice.prototype._handleUp = function (event) {
            // disable released button
            this._buttons[event.button] = false;
            this.convertPosition(event, this.position);
            this.dispatchEvent({ type: "mouseup", x: this.position.x, y: this.position.y, identifier: event.button });
        };
        MouseDevice.prototype._handleMove = function (event) {
            this.convertPosition(event, this.position);
            if (this._buttons[event.button]) {
                this.dispatchEvent({ type: "mousemove", x: this.position.x, y: this.position.y, identifier: event.button });
            }
        };
        MouseDevice.prototype._handleDown = function (event) {
            // Store which button has affected
            this._buttons[event.button] = true;
            this.convertPosition(event, this.position);
            this.dispatchEvent({ type: "mousedown", x: this.position.x, y: this.position.y, identifier: event.button });
        };
        MouseDevice.prototype._handleWheel = function (event) {
            // FF uses 'detail' and returns a value in 'no. of lines' to scroll
            // WebKit and Opera use 'wheelDelta', WebKit goes in multiples of 120 per wheel notch
            if (event.detail) {
                this.wheel = -1 * event.detail;
            }
            else if (event.wheelDelta) {
                this.wheel = event.wheelDelta / 120;
            }
            else {
                this.wheel = 0;
            }
        };
        return MouseDevice;
    }(egret3d.EventDispatcher));
    egret3d.MouseDevice = MouseDevice;
    __reflect(MouseDevice.prototype, "egret3d.MouseDevice");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * touch phase type
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 触摸状态
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var TouchPhase;
    (function (TouchPhase) {
        /**
         * touch began
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 触摸开始
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        TouchPhase[TouchPhase["BEGAN"] = 0] = "BEGAN";
        /**
         * touch moved
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 触摸移动
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        TouchPhase[TouchPhase["MOVED"] = 1] = "MOVED";
        /**
         * touch stationary
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 触摸静止
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        TouchPhase[TouchPhase["STATIONARY"] = 2] = "STATIONARY";
        /**
         * touch ended
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 触摸结束
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        TouchPhase[TouchPhase["ENDED"] = 3] = "ENDED";
        /**
         * touch canceled
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 触摸取消
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        TouchPhase[TouchPhase["CANCELED"] = 4] = "CANCELED";
    })(TouchPhase = egret3d.TouchPhase || (egret3d.TouchPhase = {}));
    /**
     * touch point
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 触摸点信息
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var TouchPoint = (function () {
        function TouchPoint() {
            this.altitudeAngle = Math.PI / 2; // Value of 0 radians indicates that the stylus is parallel to the surface, pi/2 indicates that it is perpendicular.
            this.azimuthAngle = 0; // Value of 0 radians indicates that the stylus is pointed along the x-axis of the device.
            this.deltaPosition = new egret3d.Vector2(); // The position delta since last change.
            // public deltaTime:number = 0; // TODO Amount of time that has passed since the last recorded change in Touch values.
            this.fingerId = 0; // The unique index for the touch.
            this.maximumPossiblePressure = 1.0; // The maximum possible pressure value for a platform. If Input.touchPressureSupported returns false, the value of this property will always be 1.0f.
            this.position = new egret3d.Vector2(); // The position of the touch in pixel coordinates.
            this.pressure = 1.0; //	The current amount of pressure being applied to a touch. 1.0f is considered to be the pressure of an average touch. If Input.touchPressureSupported returns false, the value of this property will always be 1.0f.
            this.radius = new egret3d.Vector2(); // ADD: different from Unity
            // public radius:number = 0; // DELETE: An estimated value of the radius of a touch. Add radiusletiance to get the maximum touch size, subtract it to get the minimum touch size.
            // public radiusletiance:number = 0; // DELETE: The amount that the radius leties by for a touch.
            // public rawPosition:Vector2 = new Vector2(); // DELETE: The raw position used for the touch.
            // public tapCount:number = 0; // TODO Number of taps.
            this.type = "Direct"; // A value that indicates whether a touch was of Direct, Indirect (or remote), or Stylus type.
        }
        /**
         *
         */
        TouchPoint.prototype.set = function (touch, phase, device) {
            this.altitudeAngle = touch.rotationAngle;
            this.azimuthAngle = touch.rotationAngle;
            if (phase == TouchPhase.BEGAN || phase == TouchPhase.STATIONARY) {
                this.deltaPosition.x = 0;
                this.deltaPosition.y = 0;
            }
            else {
                device.convertPosition(touch, this.deltaPosition);
                egret3d.Vector2.subtract(this.deltaPosition, this.position, this.deltaPosition);
            }
            // this.deltaTime;
            this.fingerId = touch.identifier;
            this.phase = phase;
            device.convertPosition(touch, this.position);
            this.pressure = touch.force;
            this.radius.x = touch.radiusX;
            this.radius.y = touch.radiusY;
            // this.tapCount;
        };
        /**
         *
         */
        TouchPoint.create = function () {
            return this._pointPool.pop() || new TouchPoint();
        };
        /**
         *
         */
        TouchPoint.release = function (touchPoint) {
            this._pointPool.push(touchPoint);
        };
        TouchPoint._pointPool = [];
        return TouchPoint;
    }());
    egret3d.TouchPoint = TouchPoint;
    __reflect(TouchPoint.prototype, "egret3d.TouchPoint");
    /**
     * touch input
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 触摸输入
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    var TouchDevice = (function (_super) {
        __extends(TouchDevice, _super);
        /**
         *
         */
        function TouchDevice(element, options) {
            if (options === void 0) { options = { preventDefault: true, stopPropagation: true }; }
            var _this = _super.call(this) || this;
            _this._offsetX = 0;
            _this._offsetY = 0;
            _this._scaler = 1;
            _this._touchesMap = {};
            _this._touches = [];
            /**
             * touch count
             * @version paper 1.0
             * @platform Web
             * @language en_US
             */
            /**
             * 当前触摸点的数量
             * @version paper 1.0
             * @platform Web
             * @language zh_CN
             */
            _this.touchCount = 0;
            _this._startHandler = _this._handleTouchStart.bind(_this);
            _this._endHandler = _this._handleTouchEnd.bind(_this);
            _this._moveHandler = _this._handleTouchMove.bind(_this);
            _this._cancelHandler = _this._handleTouchCancel.bind(_this);
            _this._element = null;
            _this.attach(element);
            _this.preventDefault = options.preventDefault;
            _this.stopPropagation = options.stopPropagation;
            return _this;
        }
        /**
         *
         */
        TouchDevice.prototype.updateOffsetAndScale = function (offsetX, offsetY, scaler) {
            this._offsetX = offsetX;
            this._offsetY = offsetY;
            this._scaler = scaler;
        };
        /**
         *
         */
        TouchDevice.prototype.convertPosition = function (e, out) {
            out.x = (e.clientX - this._offsetX) * this._scaler;
            out.y = (e.clientY - this._offsetY) * this._scaler;
        };
        TouchDevice.prototype.attach = function (element) {
            if (this._element) {
                this.detach();
            }
            this._element = element;
            this._element.addEventListener('touchstart', this._startHandler, false);
            this._element.addEventListener('touchend', this._endHandler, false);
            this._element.addEventListener('touchmove', this._moveHandler, false);
            this._element.addEventListener('touchcancel', this._cancelHandler, false);
        };
        TouchDevice.prototype.detach = function () {
            if (!this._element)
                return;
            this._element.removeEventListener('touchstart', this._startHandler, false);
            this._element.removeEventListener('touchend', this._endHandler, false);
            this._element.removeEventListener('touchmove', this._moveHandler, false);
            this._element.removeEventListener('touchcancel', this._cancelHandler, false);
            this._element = null;
        };
        /**
         *
         */
        TouchDevice.prototype.update = function () {
            for (var i in this._touchesMap) {
                var touch = this._touchesMap[i];
                if (touch.phase === TouchPhase.BEGAN) {
                    touch.phase = TouchPhase.STATIONARY;
                }
                if (touch.phase === TouchPhase.MOVED) {
                    touch.phase = TouchPhase.STATIONARY;
                }
                if (touch.phase === TouchPhase.ENDED || touch.phase === TouchPhase.CANCELED) {
                    delete this._touchesMap[i];
                    var index = this._touches.indexOf(touch);
                    if (index > -1) {
                        this._touches.splice(index, 1);
                    }
                    this.touchCount--;
                }
            }
        };
        /**
         * get touch point
         * @param index touch index
         * @version paper 1.0
         * @platform Web
         * @language en_US
         */
        /**
         * 获取触摸点
         * @param index 触摸点的索引
         * @version paper 1.0
         * @platform Web
         * @language zh_CN
         */
        TouchDevice.prototype.getTouch = function (index) {
            return this._touches[index];
        };
        TouchDevice.prototype._getTouch = function (identifier) {
            var touchPoint = this._touchesMap[identifier];
            if (!touchPoint) {
                touchPoint = TouchPoint.create();
                this._touchesMap[identifier] = touchPoint;
                this._touches.push(touchPoint);
                this.touchCount++;
            }
            return touchPoint;
        };
        TouchDevice.prototype._handleTouchStart = function (event) {
            // call preventDefault to avoid issues in Chrome Android:
            // http://wilsonpage.co.uk/touch-events-in-chrome-android/
            if (event["isScroll"] != true && !this._element['userTyping']) {
                event.preventDefault();
            }
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var identifier = touch.identifier;
                var touchPoint = this._getTouch(identifier);
                touchPoint.set(touch, TouchPhase.BEGAN, this);
                this.dispatchEvent({ type: "touchstart", x: touchPoint.position.x, y: touchPoint.position.y, identifier: identifier });
            }
            if (this.preventDefault) {
                event.preventDefault();
            }
            if (this.stopPropagation) {
                event.stopPropagation();
            }
        };
        TouchDevice.prototype._handleTouchEnd = function (event) {
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var identifier = touch.identifier;
                var touchPoint = this._getTouch(identifier);
                touchPoint.set(touch, TouchPhase.ENDED, this);
                this.dispatchEvent({ type: "touchend", x: touchPoint.position.x, y: touchPoint.position.y, identifier: identifier });
            }
            if (this.preventDefault) {
                event.preventDefault();
            }
            if (this.stopPropagation) {
                event.stopPropagation();
            }
        };
        TouchDevice.prototype._handleTouchMove = function (event) {
            // call preventDefault to avoid issues in Chrome Android:
            // http://wilsonpage.co.uk/touch-events-in-chrome-android/
            if (event["isScroll"] != true && !this._element['userTyping']) {
                event.preventDefault();
            }
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var identifier = touch.identifier;
                var touchPoint = this._getTouch(identifier);
                touchPoint.set(touch, TouchPhase.MOVED, this);
                this.dispatchEvent({ type: "touchmove", x: touchPoint.position.x, y: touchPoint.position.y, identifier: identifier });
            }
            if (this.preventDefault) {
                event.preventDefault();
            }
            if (this.stopPropagation) {
                event.stopPropagation();
            }
        };
        TouchDevice.prototype._handleTouchCancel = function (event) {
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var identifier = touch.identifier;
                var touchPoint = this._getTouch(identifier);
                touchPoint.set(touch, TouchPhase.CANCELED, this);
                this.dispatchEvent({ type: "touchend", x: touchPoint.position.x, y: touchPoint.position.y, identifier: identifier });
            }
            if (this.preventDefault) {
                event.preventDefault();
            }
            if (this.stopPropagation) {
                event.stopPropagation();
            }
        };
        return TouchDevice;
    }(egret3d.EventDispatcher));
    egret3d.TouchDevice = TouchDevice;
    __reflect(TouchDevice.prototype, "egret3d.TouchDevice");
})(egret3d || (egret3d = {}));
var paper;
(function (paper) {
    var _deserializedObjects;
    /**
     * 反序列化
     * @param data 反序列化数据
     * @param expandMap 扩展的对象映射，此映射中存在的对象不需要重新序列化，直接使用即可（例如已经加载完成的资源文件）。
     */
    function deserialize(data, expandMap) {
        _deserializedObjects = {};
        for (var k in expandMap) {
            _deserializedObjects[k] = expandMap[k];
        }
        var root = null;
        for (var _i = 0, _a = data.objects; _i < _a.length; _i++) {
            var source = _a[_i];
            var target = null;
            if (source.hashCode in _deserializedObjects) {
                target = _deserializedObjects[source.hashCode];
            }
            else {
                var className = paper.serializeClassMap[source.class] || source.class;
                var clazz = egret.getDefinitionByName(className);
                if (clazz) {
                    target = new clazz();
                    _deserializedObjects[source.hashCode] = target;
                }
                else {
                    console.error("Class " + source.class + " not defined.");
                }
            }
            root = root || target;
        }
        for (var _b = 0, _c = data.objects; _b < _c.length; _b++) {
            var source = _c[_b];
            if (source.hashCode in expandMap) {
                continue;
            }
            var target = _deserializedObjects[source.hashCode];
            if (target) {
                _deserializeObject(source, target);
                if (target instanceof paper.GameObject) {
                    for (var _d = 0, _e = target.components; _d < _e.length; _d++) {
                        var component = _e[_d];
                        component.gameObject = target; // TODO
                    }
                }
            }
            else {
                console.warn("Deserialize error.", source.hashCode);
            }
        }
        for (var _f = 0, _g = data.objects; _f < _g.length; _f++) {
            var element = _g[_f];
            var object = _deserializedObjects[element.hashCode];
            if (object instanceof paper.GameObject) {
                for (var _h = 0, _j = object.components; _h < _j.length; _h++) {
                    var component = _j[_h];
                    component.initialize();
                    paper.EventPool.dispatchEvent("__create__" /* Create */, component);
                }
            }
        }
        _deserializedObjects = null;
        return root;
    }
    paper.deserialize = deserialize;
    /**
     *
     */
    function getDeserializedObject(source) {
        return _deserializedObjects[source.hashCode];
    }
    paper.getDeserializedObject = getDeserializedObject;
    function _deserializeObject(source, target) {
        if (target.constructor.prototype.hasOwnProperty("deserialize")) {
            target.deserialize(source);
        }
        else {
            for (var k in source) {
                if (k === "hashCode" || k === "class") {
                    continue;
                }
                if ("__deserializedIgnore" /* DeserializedIgnore */ in target &&
                    target["__deserializedIgnore" /* DeserializedIgnore */].indexOf(k) >= 0) {
                    continue;
                }
                target[k] = _deserializeChild(source[k], target[k]);
            }
        }
    }
    function _deserializeChild(source, target) {
        if (source === null || source === undefined) {
            return source;
        }
        switch (typeof source) {
            case "function":
                return undefined;
            case "object": {
                if (target && target.constructor.prototype.hasOwnProperty("deserialize")) {
                    target.deserialize(source);
                    return target;
                }
                if (Array.isArray(source)) {
                    target = [];
                    for (var i = 0, l = source.length; i < l; ++i) {
                        target[i] = _deserializeChild(source[i]);
                    }
                    return target;
                }
                var hashCode = source.hashCode; // TODO 字符串依赖。
                var classCodeOrName = source.class; // TODO 字符串依赖。
                if (hashCode) {
                    if (hashCode in _deserializedObjects) {
                        return _deserializedObjects[hashCode];
                    }
                    else if (classCodeOrName) {
                        if (classCodeOrName === paper.findClassCodeFrom(paper.Scene)) {
                            // TODO
                        }
                        else if (classCodeOrName === paper.findClassCodeFrom(paper.GameObject)) {
                            for (var _i = 0, _a = paper.Application.sceneManager.getActiveScene().gameObjects; _i < _a.length; _i++) {
                                var gameObject = _a[_i];
                                if (gameObject.hashCode === hashCode) {
                                    return gameObject;
                                }
                            }
                        }
                        else {
                            for (var _b = 0, _c = paper.Application.sceneManager.getActiveScene().gameObjects; _b < _c.length; _b++) {
                                var gameObject = _c[_b];
                                for (var _d = 0, _e = gameObject.components; _d < _e.length; _d++) {
                                    var component = _e[_d];
                                    if (component.hashCode === hashCode) {
                                        return component;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (classCodeOrName) {
                    classCodeOrName = paper.serializeClassMap[classCodeOrName] || classCodeOrName;
                    var clazz = egret.getDefinitionByName(classCodeOrName);
                    if (clazz) {
                        target = new clazz();
                        _deserializeObject(source, target);
                        return target;
                    }
                }
                else {
                    target = {};
                    for (var k in source) {
                        target[k] = _deserializeChild(source[k]);
                    }
                    return target;
                }
                console.warn("Deserialize error.", source);
                return null;
            }
            default:
                return source;
        }
    }
})(paper || (paper = {}));
var egret3d;
(function (egret3d) {
    var WebGLKit = (function () {
        function WebGLKit() {
        }
        WebGLKit.SetMaxVertexAttribArray = function (webgl, count) {
            for (var i = count; i < WebGLKit._maxVertexAttribArray; i++) {
                webgl.disableVertexAttribArray(i);
            }
            WebGLKit._maxVertexAttribArray = count;
        };
        WebGLKit.allocTexUnit = function () {
            var textureUnit = this._usedTextureUnits;
            if (textureUnit >= this.capabilities.maxTextures) {
                console.warn('trying to use ' + textureUnit + ' texture units while this GPU supports only ' + this.capabilities.maxTextures);
            }
            this._usedTextureUnits += 1;
            return textureUnit;
        };
        WebGLKit.resetTexUnit = function () {
            this._usedTextureUnits = 0;
        };
        WebGLKit.activeTexture = function (index) {
            if (this._activeTextureIndex != index) {
                this.webgl.activeTexture(WebGLKit._texNumber[index]);
                this._activeTextureIndex = index;
            }
        };
        WebGLKit.showFace = function (value, frontFaceCW) {
            if (frontFaceCW === void 0) { frontFaceCW = false; }
            if (this._showFace != value || this._frontFaceCW != frontFaceCW) {
                var webgl = this.webgl;
                if (value == egret3d.ShowFaceStateEnum.ALL) {
                    webgl.disable(webgl.CULL_FACE);
                }
                else {
                    var ccw = (value == egret3d.ShowFaceStateEnum.CCW);
                    if (frontFaceCW) {
                        ccw = !ccw;
                    }
                    if (ccw) {
                        webgl.frontFace(webgl.CCW);
                    }
                    else {
                        webgl.frontFace(webgl.CW);
                    }
                    webgl.cullFace(webgl.BACK);
                    webgl.enable(webgl.CULL_FACE);
                }
                this._showFace = value;
                this._frontFaceCW = frontFaceCW;
            }
        };
        WebGLKit.zWrite = function (value) {
            if (this._zWrite !== value) {
                this.webgl.depthMask(value);
                this._zWrite = value;
            }
        };
        WebGLKit.zTest = function (value) {
            if (this._zTest !== value) {
                var webgl = this.webgl;
                if (value) {
                    webgl.enable(webgl.DEPTH_TEST);
                }
                else {
                    webgl.disable(webgl.DEPTH_TEST);
                }
                this._zTest = value;
            }
        };
        WebGLKit.zTestMethod = function (value) {
            if (this._zTestMethod !== value) {
                this.webgl.depthFunc(value);
                this._zTestMethod = value;
            }
        };
        WebGLKit.blend = function (value, equation, srcRGB, destRGB, srcAlpha, destAlpha) {
            var webgl = this.webgl;
            if (this._blend !== value) {
                value ? webgl.enable(webgl.BLEND) : webgl.disable(webgl.BLEND);
                this._blend = value;
            }
            if (value) {
                webgl.blendEquation(equation);
                // this.webgl.blendFunc(this.webgl.ONE, this.webgl.ONE_MINUS_SRC_ALPHA);
                webgl.blendFuncSeparate(srcRGB, destRGB, srcAlpha, destAlpha);
            }
        };
        WebGLKit.useProgram = function (program) {
            if (this._program != program) {
                this._program = program;
                this.webgl.useProgram(program);
                return true;
            }
            return false;
        };
        // 三角形应用vbo
        WebGLKit.drawArrayTris = function (start, count) {
            var webgl = this.webgl;
            // DrawInfo.ins.triCount += count / 3;
            // DrawInfo.ins.renderCount++;
            webgl.drawArrays(webgl.TRIANGLES, start, count);
        };
        // 直线应用vbo
        WebGLKit.drawArrayLines = function (start, count) {
            var webgl = this.webgl;
            // DrawInfo.ins.renderCount++;
            webgl.drawArrays(webgl.LINES, start, count);
        };
        WebGLKit.drawElementTris = function (start, count) {
            var webgl = this.webgl;
            // DrawInfo.ins.triCount += count / 3;
            // DrawInfo.ins.renderCount++;
            webgl.drawElements(webgl.TRIANGLES, count, webgl.UNSIGNED_SHORT, start * 2);
        };
        WebGLKit.drawElementLines = function (start, count) {
            var webgl = this.webgl;
            // DrawInfo.ins.renderCount++;
            webgl.drawElements(webgl.LINES, count, webgl.UNSIGNED_SHORT, start * 2);
        };
        WebGLKit.setStates = function (drawPass, frontFaceCW) {
            if (frontFaceCW === void 0) { frontFaceCW = false; }
            WebGLKit.showFace(drawPass.state_showface, frontFaceCW);
            WebGLKit.zWrite(drawPass.state_zwrite);
            WebGLKit.zTest(drawPass.state_ztest);
            WebGLKit.blend(drawPass.state_blend, drawPass.state_blendEquation, drawPass.state_blendSrcRGB, drawPass.state_blendDestRGB, drawPass.state_blendSrcAlpha, drawPass.state_blendDestALpha);
            if (drawPass.state_ztest) {
                WebGLKit.zTestMethod(drawPass.state_ztest_method);
            }
        };
        WebGLKit.draw = function (context, material, mesh, subMeshIndex, basetype, frontFaceCW) {
            if (basetype === void 0) { basetype = "base"; }
            if (frontFaceCW === void 0) { frontFaceCW = false; }
            if (!material) {
                return;
            }
            var shader = material.getShader();
            if (!shader) {
                return;
            }
            var drawPasses = shader.passes[basetype + context.drawtype];
            if (!drawPasses) {
                drawPasses = shader.passes["base" + context.drawtype];
            }
            if (!drawPasses) {
                return;
            }
            var webGL = this.webgl;
            for (var i = 0; i < drawPasses.length; i++) {
                var pass = drawPasses[i];
                var program = egret3d.GlProgram.get(pass, context, material);
                this.setStates(pass, frontFaceCW);
                var force = WebGLKit.useProgram(program.program);
                program.uploadUniforms(material, context, force);
                program.bindAttributes(mesh, subMeshIndex, force);
                // MD Mesh
                // if (sm.useVertexIndex < 0) {
                //     if (sm.line) {
                //         WebGLKit.drawArrayLines(sm.start, sm.size);
                //     } else {
                //         WebGLKit.drawArrayTris(sm.start, sm.size);
                //     }
                // } else {
                //     if (sm.line) {
                //         WebGLKit.drawElementLines(sm.start, sm.size);
                //     } else {
                //         WebGLKit.drawElementTris(sm.start, sm.size);
                //     }
                // }
                var primitive = mesh.glTFMesh.primitives[subMeshIndex];
                var vertexAccessor = mesh.glTFAsset.getAccessor(primitive.attributes.POSITION);
                var bufferOffset = mesh.glTFAsset.getBufferOffset(vertexAccessor);
                if (primitive.indices !== undefined) {
                    var indexAccessor = mesh.glTFAsset.getAccessor(primitive.indices);
                    switch (primitive.mode) {
                        case 1 /* Lines */:
                            webGL.drawElements(webGL.LINES, indexAccessor.count, webGL.UNSIGNED_SHORT, bufferOffset); // TODO CHECK
                            break;
                        case 4 /* Triangles */:
                        default:
                            webGL.drawElements(webGL.TRIANGLES, indexAccessor.count, webGL.UNSIGNED_SHORT, bufferOffset); // TODO CHECK
                            break;
                    }
                }
                else {
                    switch (primitive.mode) {
                        case 1 /* Lines */:
                            webGL.drawArrays(webGL.LINES, bufferOffset, vertexAccessor.count);
                            break;
                        case 4 /* Triangles */:
                        default:
                            webGL.drawArrays(webGL.TRIANGLES, bufferOffset, vertexAccessor.count);
                            break;
                    }
                }
            }
        };
        WebGLKit.resetState = function () {
            this._activeTextureIndex = -1;
            this._showFace = undefined;
            this._zWrite = undefined;
            this._zTest = undefined;
            this._zTestMethod = undefined;
            this._blend = undefined;
            this._program = undefined;
            // ...
        };
        WebGLKit.init = function (canvas, options) {
            var webgl = canvas.getContext('webgl', options) ||
                canvas.getContext("experimental-webgl", options);
            if (WebGLKit._texNumber == null) {
                this.webgl = webgl;
                WebGLKit._texNumber = [];
                WebGLKit._texNumber.push(webgl.TEXTURE0);
                WebGLKit._texNumber.push(webgl.TEXTURE1);
                WebGLKit._texNumber.push(webgl.TEXTURE2);
                WebGLKit._texNumber.push(webgl.TEXTURE3);
                WebGLKit._texNumber.push(webgl.TEXTURE4);
                WebGLKit._texNumber.push(webgl.TEXTURE5);
                WebGLKit._texNumber.push(webgl.TEXTURE6);
                WebGLKit._texNumber.push(webgl.TEXTURE7);
                WebGLKit._texNumber.push(webgl.TEXTURE8);
                WebGLKit._texNumber.push(webgl.TEXTURE9);
                WebGLKit.LEQUAL = webgl.LEQUAL;
                WebGLKit.NEVER = webgl.NEVER;
                WebGLKit.EQUAL = webgl.EQUAL;
                WebGLKit.GEQUAL = webgl.GEQUAL;
                WebGLKit.NOTEQUAL = webgl.NOTEQUAL;
                WebGLKit.LESS = webgl.LESS;
                WebGLKit.GREATER = webgl.GREATER;
                WebGLKit.ALWAYS = webgl.ALWAYS;
                WebGLKit.FUNC_ADD = webgl.FUNC_ADD;
                WebGLKit.FUNC_SUBTRACT = webgl.FUNC_SUBTRACT;
                WebGLKit.FUNC_REVERSE_SUBTRACT = webgl.FUNC_REVERSE_SUBTRACT;
                WebGLKit.ONE = webgl.ONE;
                WebGLKit.ZERO = webgl.ZERO;
                WebGLKit.SRC_ALPHA = webgl.SRC_ALPHA;
                WebGLKit.SRC_COLOR = webgl.SRC_COLOR;
                WebGLKit.ONE_MINUS_SRC_ALPHA = webgl.ONE_MINUS_SRC_ALPHA;
                WebGLKit.ONE_MINUS_SRC_COLOR = webgl.ONE_MINUS_SRC_COLOR;
                WebGLKit.ONE_MINUS_DST_ALPHA = webgl.ONE_MINUS_DST_ALPHA;
                WebGLKit.ONE_MINUS_DST_COLOR = webgl.ONE_MINUS_DST_COLOR;
                this.capabilities.initialize(webgl);
            }
        };
        WebGLKit._maxVertexAttribArray = 0;
        WebGLKit._usedTextureUnits = 0;
        WebGLKit._texNumber = null;
        WebGLKit._activeTextureIndex = -1;
        WebGLKit._frontFaceCW = false;
        WebGLKit.capabilities = new egret3d.WebGLCapabilities();
        return WebGLKit;
    }());
    egret3d.WebGLKit = WebGLKit;
    __reflect(WebGLKit.prototype, "egret3d.WebGLKit");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    //最大允许合并的顶点数，超过就是下一批次
    egret3d.MAX_VERTEX_COUNT_PER_BUFFER = 50000;
    //
    var helpVec3_1 = new egret3d.Vector3();
    var helpVec3_2 = new egret3d.Vector3();
    var helpInverseMatrix = new egret3d.Matrix();
    //缓存已经校验过的对象，用于过滤
    var cacheInstances = [];
    /**
     * 尝试对场景内所有静态对象合并
     */
    function autoCombine() {
        var curScene = paper.Application.sceneManager.getActiveScene();
        var allObjects = curScene.gameObjects;
        //
        combine(allObjects);
    }
    egret3d.autoCombine = autoCombine;
    /**
     * 尝试合并静态对象列表。
     * @param instances
     * @param root
     */
    function combine(instances) {
        cacheInstances.length = 0;
        var allCombines = {};
        //1.通过材质填充合并列表
        for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
            var obj = instances_1[_i];
            _colletCombineInstance(obj, allCombines);
        }
        //2.相同材质的合并
        for (var key in allCombines) {
            var combines = allCombines[key];
            for (var _a = 0, combines_1 = combines; _a < combines_1.length; _a++) {
                var combine_1 = combines_1[_a];
                _combineInstance(combine_1);
            }
        }
        cacheInstances.length = 0;
    }
    egret3d.combine = combine;
    /**
     * TODO(root暂时不支持)尝试合并静态对象列表，如果root有值，合并后可以操作root对象的transform，来实现整体移动，旋转，缩放；反之，相同材质列表的第一个对象为合并节点。
     * @param instances
     * @param root
     */
    function _colletCombineInstance(target, out, root) {
        //过滤重复的对象
        if (cacheInstances.indexOf(target.hashCode) >= 0) {
            return;
        }
        cacheInstances.push(target.hashCode);
        //
        for (var _i = 0, _a = target.transform.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child) {
                _colletCombineInstance(child.gameObject, out, root);
            }
        }
        //不是静态的不考虑合并
        if (!target.isStatic) {
            return;
        }
        var meshFilter = target.getComponent(egret3d.MeshFilter);
        var meshRenderer = target.getComponent(egret3d.MeshRenderer);
        //合并条件判断
        if (!meshFilter || !meshFilter.mesh || !meshRenderer || !meshRenderer.materials || meshRenderer.materials.length < 1) {
            return;
        }
        var materials = meshRenderer.materials;
        var meshData = meshFilter.mesh;
        //合并筛选的条件:光照贴图_材质0_材质1... ：0_234_532...
        var key = meshRenderer.lightmapIndex + "_";
        materials.forEach(function (element) { key = key + "_" + element.hashCode; });
        if (!out[key]) {
            out[key] = [];
            out[key].push(new CombineInstance());
        }
        var combines = out[key];
        //找相同材质合成列表的最后一个，如果最后一个顶点超过允许最大数了，就新建一个，下个批次处理
        var combine = combines[combines.length - 1];
        if (combine.vertexCount + meshData.vertexCount > egret3d.MAX_VERTEX_COUNT_PER_BUFFER) {
            combine = new CombineInstance();
            out[key].push(combine);
        }
        //合并节点以传入的对象为优先，如果没有传入，那么以每种材质的第一个对象为准
        if (!combine.root) {
            combine.root = root ? root : target;
            combine.lightmapIndex = meshRenderer.lightmapIndex;
            combine.lightmapScaleOffset = meshRenderer.lightmapScaleOffset;
        }
        //适配最大格式
        var glTFAsset = meshData.glTFAsset;
        var primitives = meshData.glTFMesh.primitives;
        for (var i = 0; i < primitives.length; i++) {
            var primitive = primitives[i];
            for (var attStr in primitives[i].attributes) {
                var attrType = attStr;
                if (!combine.meshAttribute[attrType]) {
                    combine.vertexBufferSize += egret3d.GLTFAsset.getAccessorTypeCount(glTFAsset.getAccessor(primitive.attributes[attStr]).type);
                }
                combine.meshAttribute[attrType] = attrType;
            }
            combine.indexBufferTotalSize += glTFAsset.getBufferLength(glTFAsset.getAccessor(primitive.indices)) / Uint16Array.BYTES_PER_ELEMENT;
        }
        //
        combine.vertexCount += meshData.vertexCount;
        combine.instances.push(target);
    }
    /**
     * 合并拥有共享材质的渲染对象
     * @param combineInstance
     */
    function _combineInstance(combineInstance) {
        var combineMesh = _combineMesh(combineInstance);
        var combineRoot = combineInstance.root;
        //把合成好的放入root中，重新绘制
        if (combineRoot) {
            var meshFilter = combineRoot.getComponent(egret3d.MeshFilter);
            meshFilter.mesh = combineMesh;
        }
        // for(const instance of combineInstance.instances){
        //     const meshFilter = instance.getComponent(MeshFilter);
        //     meshFilter.mesh = combineMesh;
        // }
    }
    /**
     * 合并拥有共享材质的渲染对象
     * @param combineInstance
     * @param root
     */
    function _combineMesh(combineInstance) {
        //
        egret3d.Matrix.inverse(combineInstance.root.transform.getWorldMatrix(), helpInverseMatrix);
        var meshAttribute = combineInstance.meshAttribute;
        var lightmapScaleOffset = combineInstance.lightmapScaleOffset;
        var newAttribute = [];
        var tempIndexBuffers = [];
        var tempVertexBuffers = {};
        for (var key in meshAttribute) {
            tempVertexBuffers[key] = [];
            newAttribute.push(key);
        }
        //
        var startIndex = 0;
        var endIndex = 0;
        for (var _i = 0, _a = combineInstance.instances; _i < _a.length; _i++) {
            var instance = _a[_i];
            var meshFilter = instance.getComponent(egret3d.MeshFilter);
            var meshRenderer = instance.getComponent(egret3d.MeshRenderer);
            var worldMatrix = instance.transform.getWorldMatrix();
            var orginLightmapScaleOffset = meshRenderer.lightmapScaleOffset;
            var mesh = meshFilter.mesh;
            var glTFAsset = mesh.glTFAsset;
            var primitives = mesh.glTFMesh.primitives;
            var isSharedBuffer = mesh.isSharedBuffer;
            //共享一个的buffer，vbo只处理一个submesh就可以了
            var combineOnce = true;
            for (var i = 0; i < primitives.length; i++) {
                var primitive = primitives[i];
                if (combineOnce) {
                    combineOnce = !isSharedBuffer;
                    var orginVertexCount = mesh.getVertexCount(i);
                    var orginAttributes = primitives[i].attributes;
                    var positionBuffer = glTFAsset.createTypeArrayFromAccessor(glTFAsset.getAccessor(orginAttributes.POSITION));
                    //vertexBuffers
                    for (var j = 0; j < positionBuffer.length; j += 3) {
                        helpVec3_1.x = positionBuffer[j + 0];
                        helpVec3_1.y = positionBuffer[j + 1];
                        helpVec3_1.z = positionBuffer[j + 2];
                        //转换成世界坐标后在转换为合并节点的本地坐标
                        egret3d.Matrix.transformVector3(helpVec3_1, worldMatrix, helpVec3_2);
                        egret3d.Matrix.transformVector3(helpVec3_2, helpInverseMatrix, helpVec3_1);
                        //
                        tempVertexBuffers["POSITION" /* POSITION */].push(helpVec3_1.x, helpVec3_1.y, helpVec3_1.z);
                    }
                    //
                    if (meshAttribute["NORMAL" /* NORMAL */]) {
                        if (orginAttributes.NORMAL) {
                            _copyAccessorBufferArray(glTFAsset, orginAttributes.NORMAL, tempVertexBuffers["NORMAL" /* NORMAL */]);
                        }
                        else {
                            _fillDefaultArray(tempVertexBuffers["NORMAL" /* NORMAL */], orginVertexCount, [0, 0, 0]);
                        }
                    }
                    if (meshAttribute["TANGENT" /* TANGENT */]) {
                        if (orginAttributes.TANGENT) {
                            _copyAccessorBufferArray(glTFAsset, orginAttributes.TANGENT, tempVertexBuffers["TANGENT" /* TANGENT */]);
                        }
                        else {
                            _fillDefaultArray(tempVertexBuffers["TANGENT" /* TANGENT */], orginVertexCount, [0, 0, 0, 1]);
                        }
                    }
                    if (meshAttribute["COLOR_0" /* COLOR_0 */]) {
                        if (orginAttributes.COLOR_0) {
                            _copyAccessorBufferArray(glTFAsset, orginAttributes.COLOR_0, tempVertexBuffers["COLOR_0" /* COLOR_0 */]);
                        }
                        else {
                            _fillDefaultArray(tempVertexBuffers["COLOR_0" /* COLOR_0 */], orginVertexCount, [1, 1, 1, 1]);
                        }
                    }
                    if (meshAttribute["TEXCOORD_0" /* TEXCOORD_0 */]) {
                        if (orginAttributes.TEXCOORD_0) {
                            _copyAccessorBufferArray(glTFAsset, orginAttributes.TEXCOORD_0, tempVertexBuffers["TEXCOORD_0" /* TEXCOORD_0 */]);
                        }
                        else {
                            _fillDefaultArray(tempVertexBuffers["TEXCOORD_0" /* TEXCOORD_0 */], orginVertexCount, [0, 0]);
                        }
                    }
                    if (meshAttribute["TEXCOORD_1" /* TEXCOORD_1 */]) {
                        if (combineInstance.lightmapIndex >= 0) {
                            //如果有lightmap,那么将被合并的uv1的坐标转换为root下的坐标,有可能uv1没有，那用uv0来算
                            var uvBuffer = orginAttributes.TEXCOORD_1 ?
                                glTFAsset.createTypeArrayFromAccessor(glTFAsset.getAccessor(orginAttributes.TEXCOORD_1)) :
                                glTFAsset.createTypeArrayFromAccessor(glTFAsset.getAccessor(orginAttributes.TEXCOORD_0));
                            //
                            for (var j = 0; j < uvBuffer.length; j += 2) {
                                var u = uvBuffer[j + 0];
                                var v = uvBuffer[j + 1];
                                u = ((u * orginLightmapScaleOffset.x + orginLightmapScaleOffset.z) - lightmapScaleOffset.z) / lightmapScaleOffset.x;
                                v = ((v * orginLightmapScaleOffset.y - orginLightmapScaleOffset.y - orginLightmapScaleOffset.w) + lightmapScaleOffset.w + lightmapScaleOffset.y) / lightmapScaleOffset.y;
                                tempVertexBuffers["TEXCOORD_1" /* TEXCOORD_1 */].push(u, v);
                            }
                        }
                        else {
                            if (orginAttributes.TEXCOORD_1) {
                                _copyAccessorBufferArray(glTFAsset, orginAttributes.TEXCOORD_1, tempVertexBuffers["TEXCOORD_1" /* TEXCOORD_1 */]);
                            }
                            else {
                                _fillDefaultArray(tempVertexBuffers["TEXCOORD_1" /* TEXCOORD_1 */], orginVertexCount, [0, 0]);
                            }
                        }
                    }
                    if (meshAttribute["JOINTS_0" /* JOINTS_0 */]) {
                        if (orginAttributes.JOINTS_0) {
                            _copyAccessorBufferArray(glTFAsset, orginAttributes.JOINTS_0, tempVertexBuffers["JOINTS_0" /* JOINTS_0 */]);
                        }
                        else {
                            _fillDefaultArray(tempVertexBuffers["JOINTS_0" /* JOINTS_0 */], orginVertexCount, [0, 0, 0, 0]);
                        }
                    }
                    if (meshAttribute["WEIGHTS_0" /* WEIGHTS_0 */]) {
                        if (orginAttributes.WEIGHTS_0) {
                            _copyAccessorBufferArray(glTFAsset, orginAttributes.WEIGHTS_0, tempVertexBuffers["WEIGHTS_0" /* WEIGHTS_0 */]);
                        }
                        else {
                            _fillDefaultArray(tempVertexBuffers["WEIGHTS_0" /* WEIGHTS_0 */], orginVertexCount, [1, 0, 0, 0]);
                        }
                    }
                    if (meshAttribute["COLOR_1" /* COLOR_1 */]) {
                        if (orginAttributes.COLOR_1) {
                            _copyAccessorBufferArray(glTFAsset, orginAttributes.COLOR_1, tempVertexBuffers["COLOR_1" /* COLOR_1 */]);
                        }
                        else {
                            _fillDefaultArray(tempVertexBuffers["COLOR_1" /* COLOR_1 */], orginVertexCount, [1, 1, 1, 1]);
                        }
                    }
                }
                var subIndexBuffer = glTFAsset.createTypeArrayFromAccessor(glTFAsset.getAccessor(primitive.indices));
                // //indexBuffers
                if (!tempIndexBuffers[i]) {
                    tempIndexBuffers[i] = [];
                }
                for (var j = 0; j < subIndexBuffer.length; j++) {
                    var index = subIndexBuffer[j] + startIndex;
                    tempIndexBuffers[i].push(index);
                    endIndex = index > endIndex ? index : endIndex;
                }
            }
            startIndex = endIndex + 1;
            meshFilter.mesh = null;
        }
        var newVertexBuffers = new Float32Array(combineInstance.vertexBufferSize * combineInstance.vertexCount);
        var newIndexBuffers = new Uint16Array(combineInstance.indexBufferTotalSize);
        var iv = 0;
        for (var key in tempVertexBuffers) {
            var arr = tempVertexBuffers[key];
            for (var _b = 0, arr_1 = arr; _b < arr_1.length; _b++) {
                var v = arr_1[_b];
                newVertexBuffers[iv++] = v;
            }
        }
        var ii = 0;
        for (var key in tempIndexBuffers) {
            var arr = tempIndexBuffers[key];
            for (var _c = 0, arr_2 = arr; _c < arr_2.length; _c++) {
                var v = arr_2[_c];
                newIndexBuffers[ii++] = v;
            }
        }
        var combineMesh = new egret3d.Mesh(newVertexBuffers, newIndexBuffers, tempIndexBuffers[0].length, newAttribute, 1 /* Static */);
        var indicesCount = 0;
        for (var i = 0; i < tempIndexBuffers.length; i++) {
            var subLen = tempIndexBuffers[i].length;
            if (i > 0) {
                //第一个submesh在构造函数中已经添加，需要手动添加手续的
                combineMesh.addSubMesh(indicesCount, subLen, i);
                combineMesh.uploadSubIndexBuffer(i);
            }
            indicesCount += subLen;
        }
        return combineMesh;
    }
    function _copyAccessorBufferArray(gltf, accessor, target) {
        var buffer = gltf.createTypeArrayFromAccessor(gltf.getAccessor(accessor));
        var count = buffer.length;
        var startIndex = target.length;
        target.length += count;
        for (var i = 0; i < count; i++) {
            target[startIndex + i] = buffer[i];
        }
    }
    function _fillDefaultArray(target, count, defaultValue) {
        var startIndex = target.length;
        var defaultValueCount = defaultValue.length;
        target.length += count * defaultValueCount;
        for (var i = 0; i < count; i++) {
            for (var j = 0; j < defaultValueCount; j++) {
                target[startIndex++] = defaultValue[j];
            }
        }
    }
    var CombineInstance = (function () {
        function CombineInstance() {
            this.vertexCount = 0;
            this.vertexBufferSize = 0;
            this.indexBufferTotalSize = 0;
            this.lightmapIndex = -1;
            this.lightmapScaleOffset = new egret3d.Vector4();
            this.meshAttribute = {};
            this.root = null;
            this.instances = [];
        }
        return CombineInstance;
    }());
    __reflect(CombineInstance.prototype, "CombineInstance");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * Performance
     * 数据收集
     */
    var Performance = (function () {
        function Performance() {
        }
        Performance.getEntity = function (key) {
            return this._entities[key];
        };
        Performance.getFPS = function () {
            var entity = this.getEntity("fps");
            return (entity && entity.averageDelta) ? Math.floor(1000 / entity.averageDelta) : 0;
        };
        Performance.updateFPS = function () {
            if (!this.enable) {
                return;
            }
            this.endCounter("fps");
            this.startCounter("fps", 60);
        };
        Performance._getNow = function () {
            if (window.performance) {
                return window.performance.now();
            }
            return new Date().getTime();
        };
        Performance.startCounter = function (key, averageRange) {
            if (averageRange === void 0) { averageRange = 1; }
            if (!this.enable) {
                return;
            }
            var entity = this._entities[key];
            if (!entity) {
                entity = {
                    start: 0,
                    end: 0,
                    delta: 0,
                    _cache: [],
                    averageRange: 1,
                    averageDelta: 0
                };
                this._entities[key] = entity;
            }
            entity.start = this._getNow();
            entity.averageRange = averageRange;
        };
        Performance.endCounter = function (key) {
            if (!this.enable) {
                return;
            }
            var entity = this._entities[key];
            if (entity) {
                entity.end = this._getNow();
                entity.delta = entity.end - entity.start;
                if (entity.averageRange > 1) {
                    entity._cache.push(entity.delta);
                    var length = entity._cache.length;
                    if (length >= entity.averageRange) {
                        if (length > entity.averageRange) {
                            entity._cache.shift();
                            length--;
                        }
                        var sum = 0;
                        for (var i = 0; i < length; i++) {
                            sum += entity._cache[i];
                        }
                        entity.averageDelta = sum / length;
                    }
                }
            }
        };
        Performance._entities = {};
        Performance.enable = false;
        return Performance;
    }());
    egret3d.Performance = Performance;
    __reflect(Performance.prototype, "egret3d.Performance");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var _attributeInfos = {
        "_glesVertex": { name: "POSITION" /* POSITION */, normalized: false },
        "_glesNormal": { name: "NORMAL" /* NORMAL */, normalized: true },
        "_glesTangent": { name: "TANGENT" /* TANGENT */, normalized: true },
        "_glesMultiTexCoord0": { name: "TEXCOORD_0" /* TEXCOORD_0 */, normalized: false },
        "_glesMultiTexCoord1": { name: "TEXCOORD_1" /* TEXCOORD_1 */, normalized: false },
        "_glesColor": { name: "COLOR_0" /* COLOR_0 */, normalized: false },
        "_glesColorEx": { name: "COLOR_1" /* COLOR_1 */, normalized: false },
        "_glesBlendIndex4": { name: "JOINTS_0" /* JOINTS_0 */, normalized: false },
        "_glesBlendWeight4": { name: "WEIGHTS_0" /* WEIGHTS_0 */, normalized: false },
    };
    var _vsShaderMap = {};
    var _fsShaderMap = {};
    var parseIncludes = function (string) {
        var pattern = /#include +<([\w\d.]+)>/g;
        function replace(match, include) {
            var replace = egret3d.ShaderChunk[include];
            if (replace === undefined) {
                throw new Error('Can not resolve #include <' + include + '>');
            }
            return parseIncludes(replace);
        }
        return string.replace(pattern, replace);
    };
    var constDefines;
    function createConstDefines() {
        var defines = "precision " + egret3d.WebGLKit.capabilities.maxPrecision + " float; \n";
        defines += "precision " + egret3d.WebGLKit.capabilities.maxPrecision + " int; \n";
        defines += '#define PI 3.14159265359 \n';
        defines += '#define EPSILON 1e-6 \n';
        defines += 'float pow2( const in float x ) { return x*x; } \n';
        defines += '#define LOG2 1.442695 \n';
        defines += '#define RECIPROCAL_PI 0.31830988618 \n';
        defines += '#define saturate(a) clamp( a, 0.0, 1.0 ) \n';
        defines += '#define whiteCompliment(a) ( 1.0 - saturate( a ) ) \n';
        // defines += '#extension GL_OES_standard_derivatives : enable \n';
        return defines;
    }
    function buildDefines(context, material) {
        var defines = "";
        if (context.lightCount > 0) {
            defines += "#define USE_LIGHT " + context.lightCount + "\n";
            if (context.directLightCount > 0) {
                defines += "#define USE_DIRECT_LIGHT " + context.directLightCount + "\n";
            }
            if (context.pointLightCount > 0) {
                defines += "#define USE_POINT_LIGHT " + context.pointLightCount + "\n";
            }
            if (context.spotLightCount > 0) {
                defines += "#define USE_SPOT_LIGHT " + context.spotLightCount + "\n";
            }
            if (context.receiveShadow) {
                defines += "#define USE_SHADOW \n";
                defines += "#define USE_PCF_SOFT_SHADOW \n";
            }
        }
        return defines;
    }
    function getWebGLShader(type, gl, info, defines) {
        var shader = gl.createShader(type);
        if (!constDefines) {
            constDefines = createConstDefines();
        }
        gl.shaderSource(shader, constDefines + defines + parseIncludes(info.src));
        gl.compileShader(shader);
        var parameter = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!parameter) {
            if (confirm("shader compile:" + info.name + " " + type + " error! ->" + gl.getShaderInfoLog(shader) + "\n" + ". did you want see the code?")) {
                gl.deleteShader(shader);
                alert(info.src);
            }
            return null;
        }
        return shader;
    }
    function getWebGLProgram(gl, vs, fs, defines) {
        var program = gl.createProgram();
        var key;
        key = vs.name + defines;
        var vertexShader = _vsShaderMap[key];
        if (!vertexShader) {
            var key_1 = vs.name + defines;
            vertexShader = getWebGLShader(gl.VERTEX_SHADER, gl, vs, defines);
            _vsShaderMap[key_1] = vertexShader;
        }
        key = fs.name + defines;
        var fragmentShader = _fsShaderMap[key];
        if (!fragmentShader) {
            var key_2 = fs.name + defines;
            fragmentShader = getWebGLShader(gl.FRAGMENT_SHADER, gl, fs, defines);
            _fsShaderMap[key_2] = fragmentShader;
        }
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        var parameter = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!parameter) {
            alert("program compile: " + vs.name + "_" + fs.name + " error! ->" + gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }
        return program;
    }
    /**
     * extract attributes
     */
    function extractAttributes(gl, program) {
        var attributes = {};
        var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        for (var i = 0; i < totalAttributes; i++) {
            var attribData = gl.getActiveAttrib(program, i);
            var name = attribData.name;
            var attribute = new egret3d.WebGLAttribute(gl, program, attribData);
            attributes[name] = attribute;
        }
        return attributes;
    }
    /**
     * extract uniforms
     */
    function extractUniforms(gl, program) {
        var uniforms = {};
        var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (var i = 0; i < totalUniforms; i++) {
            var uniformData = gl.getActiveUniform(program, i);
            var name = uniformData.name;
            var uniform = new egret3d.WebGLUniform(gl, program, uniformData);
            uniforms[name] = uniform;
        }
        return uniforms;
    }
    /**
     *
     * WebGLProgram的包装类，可以批量上传数据并具有标脏功能
     */
    var GlProgram = (function () {
        function GlProgram(gl, vShaderInfo, fShaderInfo, defines) {
            this._unifromsValue = {};
            this._cacheContextVer = -1;
            this._cacheMeshVer = -1;
            this._cacheMeshEbo = -1;
            this._cacheMaterialVer = -1;
            this._samplerUnitMap = {};
            this._cacheTextureUniforms = [];
            this.gl = gl;
            var program = getWebGLProgram(gl, vShaderInfo, fShaderInfo, defines);
            this.program = program;
            this._attributes = extractAttributes(gl, program);
            this._uniforms = extractUniforms(gl, program);
            this._allocTexUnits();
        }
        GlProgram.get = function (pass, context, material) {
            var defines = buildDefines(context, material);
            var name = pass.vShaderInfo.name + "_" + pass.fShaderInfo.name + "_" + defines;
            if (!this._programMap[name]) {
                this._programMap[name] = new GlProgram(egret3d.WebGLKit.webgl, pass.vShaderInfo, pass.fShaderInfo, defines);
            }
            return this._programMap[name];
        };
        GlProgram.prototype._allocTexUnits = function () {
            var _this = this;
            // sampler数组中使用unit0会导致错误？
            var samplerArrayKeys = [];
            var samplerKeys = [];
            for (var key in this._uniforms) {
                if (this._uniforms[key].type == egret3d.WEBGL_UNIFORM_TYPE.SAMPLER_2D || this._uniforms[key].type == egret3d.WEBGL_UNIFORM_TYPE.SAMPLER_CUBE) {
                    if (key.indexOf("[") > -1) {
                        samplerArrayKeys.push(key);
                    }
                    else {
                        samplerKeys.push(key);
                    }
                }
            }
            var allKeys = samplerKeys.concat(samplerArrayKeys);
            var unitNumber = 0;
            allKeys.forEach(function (key) {
                _this._samplerUnitMap[key] = unitNumber;
                unitNumber++;
            });
        };
        GlProgram.prototype.bindAttributes = function (mesh, subMeshIndex, forceUpdate) {
            if (subMeshIndex === void 0) { subMeshIndex = 0; }
            if (forceUpdate === void 0) { forceUpdate = false; }
            if (!forceUpdate && this._cacheMesh == mesh && this._cacheMeshVer == mesh._version && this._cacheMeshEbo == subMeshIndex) {
                return;
            }
            // MD mesh
            // this._cacheMesh = mesh;
            // this._cacheMeshVer = mesh._version;
            // this._cacheMeshEbo = subMeshIndex;
            // let gl = this.gl;
            // gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vbo);
            // if (bindEbo >= 0) {
            //     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.ibos[bindEbo]);
            // }
            // let meshVertexFormat = mesh.vertexFormatData;
            // let info: { size: number, normalized: boolean, stride: number, offset: number }, attribute: WebGLAttribute;
            // for (let key in this._attributes) {
            //     attribute = this._attributes[key];
            //     info = meshVertexFormat[key];
            //     if (info) {
            //         if (attribute.count !== info.size) {
            //             // console.warn("Renderer: attribute " + name + " size not match! attribute-count:" + attribute.count + ", info-size:" + info.size);
            //         }
            //         gl.vertexAttribPointer(attribute.location, info.size, attribute.format, info.normalized, info.stride, info.offset);
            //         gl.enableVertexAttribArray(attribute.location);
            //     } else {
            //         gl.disableVertexAttribArray(attribute.location);
            //     }
            // }
            if (0 <= subMeshIndex && subMeshIndex < mesh.glTFMesh.primitives.length) {
                this._cacheMesh = mesh;
                this._cacheMeshVer = mesh._version;
                this._cacheMeshEbo = subMeshIndex;
                var gl = this.gl;
                var glTFAsset = mesh.glTFAsset;
                var primitive = mesh.glTFMesh.primitives[subMeshIndex];
                var ibo = mesh.ibos[subMeshIndex];
                gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vbo);
                if (ibo) {
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
                }
                for (var k in this._attributes) {
                    var webGLAttribute = this._attributes[k];
                    var location_1 = webGLAttribute.location;
                    var name_2 = webGLAttribute.name;
                    var attributeInfo = _attributeInfos[name_2];
                    var accessorIndex = primitive.attributes[attributeInfo.name];
                    if (accessorIndex !== undefined) {
                        var accessor = glTFAsset.getAccessor(accessorIndex);
                        var bufferOffset = glTFAsset.getBufferOffset(accessor);
                        var vertexCount = egret3d.GLTFAsset.getAccessorTypeCount(accessor.type);
                        gl.vertexAttribPointer(location_1, vertexCount, webGLAttribute.format, attributeInfo.normalized, 0, bufferOffset);
                        gl.enableVertexAttribArray(location_1);
                    }
                    else {
                        gl.disableVertexAttribArray(location_1);
                    }
                }
            }
            else {
                console.warn("Error arguments.");
            }
        };
        GlProgram.prototype._updateRenderContextUniforms = function (context) {
            for (var key in this._uniforms) {
                switch (key) {
                    case "glstate_matrix_model":
                        this.setMatrix4(key, context.matrix_m);
                        break;
                    case "glstate_matrix_mvp":
                        this.setMatrix4(key, context.matrix_mvp);
                        break;
                    case "glstate_directLights[0]":
                        if (context.directLightCount > 0) {
                            this.setFloatv(key, context.directLightArray);
                        }
                        break;
                    case "glstate_pointLights[0]":
                        if (context.pointLightCount > 0) {
                            this.setFloatv(key, context.pointLightArray);
                        }
                        break;
                    case "glstate_spotLights[0]":
                        if (context.spotLightCount > 0) {
                            this.setFloatv(key, context.spotLightArray);
                        }
                        break;
                    case "glstate_lightCount":
                        this.setFloat(key, context.lightCount);
                        break;
                    case "glstate_directionalShadowMatrix[0]":
                        this.setMatrix4v(key, context.directShadowMatrix);
                        break;
                    case "glstate_spotShadowMatrix[0]":
                        this.setMatrix4v(key, context.spotShadowMatrix);
                        break;
                    case "glstate_directionalShadowMap[0]":
                        for (var i = 0; i < context.directShadowMaps.length; i++) {
                            if (context.directShadowMaps[i]) {
                                this.setWebGLTexture("glstate_directionalShadowMap[" + i + "]", context.directShadowMaps[i]);
                            }
                        }
                        break;
                    case "glstate_pointShadowMap[0]":
                        for (var i = 0; i < context.pointShadowMaps.length; i++) {
                            if (context.pointShadowMaps[i]) {
                                this.setWebGLTexture("glstate_pointShadowMap[" + i + "]", context.pointShadowMaps[i]);
                            }
                        }
                        break;
                    case "glstate_spotShadowMap[0]":
                        for (var i = 0; i < context.spotShadowMaps.length; i++) {
                            if (context.spotShadowMaps[i]) {
                                this.setWebGLTexture("glstate_spotShadowMap[" + i + "]", context.spotShadowMaps[i]);
                            }
                        }
                        break;
                    case "_LightmapTex":
                        this.setTexture(key, context.lightmap);
                        break;
                    case "glstate_lightmapOffset":
                        this.setVector4_2(key, context.lightmapOffset);
                        break;
                    case "glstate_lightmapUV":
                        this.setFloat(key, context.lightmapUV);
                        break;
                    case "glstate_vec4_bones[0]":
                        this.setVector4v(key, context.boneData);
                        break;
                    case "glstate_matrix_bones":
                        this.setVector4v(key, context.boneData);
                        break;
                    case "glstate_referencePosition":
                        this.setVector4_2(key, context.lightPosition);
                        break;
                    case "glstate_nearDistance":
                        this.setFloat(key, context.lightShadowCameraNear);
                        break;
                    case "glstate_farDistance":
                        this.setFloat(key, context.lightShadowCameraFar);
                        break;
                }
            }
        };
        GlProgram.prototype.setMatrix4 = function (key, value) {
            var uniform = this._uniforms[key];
            uniform.value = value.rawData;
            this.gl.uniformMatrix4fv(uniform.location, false, uniform.value);
        };
        GlProgram.prototype.setMatrix4v = function (key, value) {
            var uniform = this._uniforms[key];
            uniform.value = value;
            this.gl.uniformMatrix4fv(uniform.location, false, uniform.value);
        };
        GlProgram.prototype.setVector4v = function (key, value) {
            var uniform = this._uniforms[key];
            uniform.value = value;
            this.gl.uniform4fv(uniform.location, uniform.value);
        };
        GlProgram.prototype.setFloat = function (key, value) {
            if (this._uniforms[key].value != value) {
                var uniform = this._uniforms[key];
                uniform.value = value;
                this.gl.uniform1f(uniform.location, uniform.value);
            }
        };
        GlProgram.prototype.setFloatv = function (key, value) {
            var uniform = this._uniforms[key];
            uniform.value = value;
            this.gl.uniform1fv(uniform.location, uniform.value);
        };
        GlProgram.prototype.setVector4_2 = function (key, value) {
            var uniform = this._uniforms[key];
            var letray = uniform.value;
            if (!letray) {
                uniform.value = value;
                this.gl.uniform4fv(uniform.location, uniform.value);
            }
            else {
                // if (letray[0] != value[0] || letray[1] != value[1] || letray[2] != value[2] || letray[3] != value[3]) {
                uniform.value = value;
                this.gl.uniform4fv(uniform.location, uniform.value);
                // }
            }
        };
        GlProgram.prototype.setVector4 = function (key, value) {
            var uniform = this._uniforms[key];
            var letray = uniform.value;
            if (!letray) {
                uniform.value = [value.x, value.y, value.z, value.w];
                this.gl.uniform4fv(uniform.location, uniform.value);
            }
            else {
                if (letray[0] != value.x || letray[1] != value.y || letray[2] != value.z || letray[3] != value.w) {
                    letray[0] = value.x;
                    letray[1] = value.y;
                    letray[2] = value.z;
                    letray[3] = value.w;
                    this.gl.uniform4fv(uniform.location, uniform.value);
                }
            }
        };
        GlProgram.prototype.setTexture = function (key, value) {
            var uniform = this._uniforms[key];
            uniform.value = value ? value.glTexture : null;
            var index = this._samplerUnitMap[key];
            var tex = uniform.value != null ? uniform.value.texture : null;
            // 只标记对应的纹理单元，之后再统一上传纹理
            var cacheTextureUniform = this._cacheTextureUniforms[index];
            if (!cacheTextureUniform) {
                this.gl.uniform1i(uniform.location, index);
                this._cacheTextureUniforms[index] = { dirty: true, texture: tex, cube: uniform.type === egret3d.WEBGL_UNIFORM_TYPE.SAMPLER_CUBE };
            }
            else {
                cacheTextureUniform.texture = tex;
                cacheTextureUniform.dirty = true;
            }
        };
        GlProgram.prototype.setWebGLTexture = function (key, value) {
            var uniform = this._uniforms[key];
            uniform.value = value;
            var index = this._samplerUnitMap[key];
            var tex = uniform.value != null ? value : null;
            // 只标记对应的纹理单元，之后再统一上传纹理
            var cacheTextureUniform = this._cacheTextureUniforms[index];
            if (!cacheTextureUniform) {
                this.gl.uniform1i(uniform.location, index);
                this._cacheTextureUniforms[index] = { dirty: true, texture: tex, cube: uniform.type === egret3d.WEBGL_UNIFORM_TYPE.SAMPLER_CUBE };
            }
            else {
                cacheTextureUniform.texture = tex;
                cacheTextureUniform.dirty = true;
            }
        };
        GlProgram.prototype._updateUniforms = function (unifroms) {
            for (var key in unifroms) {
                var type = unifroms[key].type;
                var value = unifroms[key].value;
                var target = this._uniforms[key];
                if (target == null) {
                    continue;
                }
                switch (type) {
                    case egret3d.UniformTypeEnum.Float:
                        this.setFloat(key, value);
                        break;
                    case egret3d.UniformTypeEnum.Floatv:
                        this.setFloatv(key, value);
                        break;
                    case egret3d.UniformTypeEnum.Float4:
                        this.setVector4(key, value);
                        break;
                    case egret3d.UniformTypeEnum.Float4v:
                        this.setVector4v(key, value);
                        break;
                    case egret3d.UniformTypeEnum.Float4x4:
                        this.setMatrix4(key, value);
                        break;
                    case egret3d.UniformTypeEnum.Float4x4v:
                        this.setMatrix4(key, value);
                        break;
                    case egret3d.UniformTypeEnum.Texture:
                        this.setTexture(key, value);
                        break;
                }
            }
        };
        GlProgram.prototype.uploadUniforms = function (material, context, forceUpdate) {
            if (forceUpdate === void 0) { forceUpdate = false; }
            var materialChange = this._cacheMaterial !== material || this._cacheMaterialVer !== material.version;
            if (materialChange) {
                this._updateUniforms(material.$uniforms);
                this._cacheMaterial = material;
                this._cacheMaterialVer = material.version;
            }
            var contextChange = this._cacheContext != context || this._cacheContextVer != context.version;
            if (contextChange) {
                this._updateRenderContextUniforms(context);
                this._cacheContext = context;
                this._cacheContextVer = context.version;
            }
            // 纹理上传特殊处理
            // shader切换的情况下，只需要重新上传纹理到对应的纹理单元即可
            // 并不需要调用unifrom函数
            if (forceUpdate) {
                for (var i = 0; i < this._cacheTextureUniforms.length; i++) {
                    var info = this._cacheTextureUniforms[i];
                    if (info) {
                        egret3d.WebGLKit.activeTexture(i);
                        this.gl.bindTexture(info.cube ? this.gl.TEXTURE_CUBE_MAP : this.gl.TEXTURE_2D, info.texture);
                    }
                }
            }
            else if (materialChange || contextChange) {
                for (var i = 0; i < this._cacheTextureUniforms.length; i++) {
                    var info = this._cacheTextureUniforms[i];
                    if (info && info.dirty) {
                        egret3d.WebGLKit.activeTexture(i);
                        this.gl.bindTexture(info.cube ? this.gl.TEXTURE_CUBE_MAP : this.gl.TEXTURE_2D, info.texture);
                    }
                }
            }
            else {
                // TODO 判断纹理标脏上传
            }
        };
        GlProgram._programMap = {};
        return GlProgram;
    }());
    egret3d.GlProgram = GlProgram;
    __reflect(GlProgram.prototype, "egret3d.GlProgram");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     *
     */
    var TextureReader = (function () {
        function TextureReader(webgl, texRGBA, width, height, gray) {
            if (gray === void 0) { gray = true; }
            this.gray = gray;
            this.width = width;
            this.height = height;
            var fbo = webgl.createFramebuffer();
            var fbold = webgl.getParameter(webgl.FRAMEBUFFER_BINDING);
            webgl.bindFramebuffer(webgl.FRAMEBUFFER, fbo);
            webgl.framebufferTexture2D(webgl.FRAMEBUFFER, webgl.COLOR_ATTACHMENT0, webgl.TEXTURE_2D, texRGBA, 0);
            var readData = new Uint8Array(this.width * this.height * 4);
            readData[0] = 2;
            webgl.readPixels(0, 0, this.width, this.height, webgl.RGBA, webgl.UNSIGNED_BYTE, readData);
            webgl.deleteFramebuffer(fbo);
            webgl.bindFramebuffer(webgl.FRAMEBUFFER, fbold);
            if (gray) {
                this.data = new Uint8Array(this.width * this.height);
                for (var i = 0; i < width * height; i++) {
                    this.data[i] = readData[i * 4];
                }
            }
            else {
                this.data = readData;
            }
        }
        TextureReader.prototype.getPixel = function (u, v) {
            var x = (u * this.width) | 0;
            var y = (v * this.height) | 0;
            if (x < 0 || x >= this.width || y < 0 || y >= this.height)
                return 0;
            if (this.gray) {
                return this.data[y * this.width + x];
            }
            else {
                var i = (y * this.width + x) * 4;
                return new egret3d.Color(this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]);
            }
        };
        return TextureReader;
    }());
    egret3d.TextureReader = TextureReader;
    __reflect(TextureReader.prototype, "egret3d.TextureReader");
    var GlRenderTarget = (function () {
        function GlRenderTarget(webgl, width, height, depth, stencil) {
            if (depth === void 0) { depth = false; }
            if (stencil === void 0) { stencil = false; }
            this.width = width;
            this.height = height;
            this.fbo = webgl.createFramebuffer();
            webgl.bindFramebuffer(webgl.FRAMEBUFFER, this.fbo);
            if (depth || stencil) {
                this.renderbuffer = webgl.createRenderbuffer();
                webgl.bindRenderbuffer(webgl.RENDERBUFFER, this.renderbuffer);
                if (depth && stencil) {
                    webgl.renderbufferStorage(webgl.RENDERBUFFER, webgl.DEPTH_STENCIL, width, height);
                    webgl.framebufferRenderbuffer(webgl.FRAMEBUFFER, webgl.DEPTH_STENCIL_ATTACHMENT, webgl.RENDERBUFFER, this.renderbuffer);
                }
                else if (depth) {
                    webgl.renderbufferStorage(webgl.RENDERBUFFER, webgl.DEPTH_COMPONENT16, width, height);
                    webgl.framebufferRenderbuffer(webgl.FRAMEBUFFER, webgl.DEPTH_ATTACHMENT, webgl.RENDERBUFFER, this.renderbuffer);
                }
                else {
                    webgl.renderbufferStorage(webgl.RENDERBUFFER, webgl.STENCIL_INDEX8, width, height);
                    webgl.framebufferRenderbuffer(webgl.FRAMEBUFFER, webgl.STENCIL_ATTACHMENT, webgl.RENDERBUFFER, this.renderbuffer);
                }
                webgl.bindRenderbuffer(webgl.RENDERBUFFER, null);
            }
            this.texture = webgl.createTexture();
            this.fbo["width"] = width;
            this.fbo["height"] = height;
            webgl.bindTexture(webgl.TEXTURE_2D, this.texture);
            webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MAG_FILTER, webgl.LINEAR);
            webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MIN_FILTER, webgl.LINEAR);
            webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, width, height, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, null);
            webgl.framebufferTexture2D(webgl.FRAMEBUFFER, webgl.COLOR_ATTACHMENT0, webgl.TEXTURE_2D, this.texture, 0);
        }
        GlRenderTarget.prototype.use = function (webgl) {
            webgl.bindFramebuffer(webgl.FRAMEBUFFER, this.fbo);
            // webgl.bindRenderbuffer(webgl.RENDERBUFFER, this.renderbuffer);
            // webgl.bindTexture(webgl.TEXTURE_2D, this.texture);
            //webgl.framebufferTexture2D(webgl.FRAMEBUFFER, webgl.COLOR_ATTACHMENT0, webgl.TEXTURE_2D, this.texture, 0);
        };
        GlRenderTarget.useNull = function (webgl) {
            webgl.bindFramebuffer(webgl.FRAMEBUFFER, null);
        };
        GlRenderTarget.prototype.dispose = function (webgl) {
            //if (this.texture == null && this.img != null)
            //    this.disposeit = true;
            if (this.texture != null) {
                webgl.deleteFramebuffer(this.renderbuffer);
                this.renderbuffer = null;
                webgl.deleteTexture(this.texture);
                this.texture = null;
            }
        };
        GlRenderTarget.prototype.caclByteLength = function () {
            //RGBA & no mipmap
            return this.width * this.height * 4;
        };
        GlRenderTarget.prototype.isFrameBuffer = function () {
            return true;
        };
        return GlRenderTarget;
    }());
    egret3d.GlRenderTarget = GlRenderTarget;
    __reflect(GlRenderTarget.prototype, "egret3d.GlRenderTarget", ["egret3d.IRenderTarget", "egret3d.ITexture"]);
    var GlRenderTargetCube = (function () {
        function GlRenderTargetCube(webgl, width, height, depth, stencil) {
            if (depth === void 0) { depth = false; }
            if (stencil === void 0) { stencil = false; }
            this.activeCubeFace = 0; // PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5
            this.width = width;
            this.height = height;
            this.fbo = webgl.createFramebuffer();
            webgl.bindFramebuffer(webgl.FRAMEBUFFER, this.fbo);
            if (depth || stencil) {
                this.renderbuffer = webgl.createRenderbuffer();
                webgl.bindRenderbuffer(webgl.RENDERBUFFER, this.renderbuffer);
                if (depth && stencil) {
                    webgl.renderbufferStorage(webgl.RENDERBUFFER, webgl.DEPTH_STENCIL, width, height);
                    webgl.framebufferRenderbuffer(webgl.FRAMEBUFFER, webgl.DEPTH_STENCIL_ATTACHMENT, webgl.RENDERBUFFER, this.renderbuffer);
                }
                else if (depth) {
                    webgl.renderbufferStorage(webgl.RENDERBUFFER, webgl.DEPTH_COMPONENT16, width, height);
                    webgl.framebufferRenderbuffer(webgl.FRAMEBUFFER, webgl.DEPTH_ATTACHMENT, webgl.RENDERBUFFER, this.renderbuffer);
                }
                else {
                    webgl.renderbufferStorage(webgl.RENDERBUFFER, webgl.STENCIL_INDEX8, width, height);
                    webgl.framebufferRenderbuffer(webgl.FRAMEBUFFER, webgl.STENCIL_ATTACHMENT, webgl.RENDERBUFFER, this.renderbuffer);
                }
                webgl.bindRenderbuffer(webgl.RENDERBUFFER, null);
            }
            this.texture = webgl.createTexture();
            this.fbo["width"] = width;
            this.fbo["height"] = height;
            webgl.bindTexture(webgl.TEXTURE_CUBE_MAP, this.texture);
            webgl.texParameteri(webgl.TEXTURE_CUBE_MAP, webgl.TEXTURE_MAG_FILTER, webgl.LINEAR);
            webgl.texParameteri(webgl.TEXTURE_CUBE_MAP, webgl.TEXTURE_MIN_FILTER, webgl.LINEAR);
            for (var i = 0; i < 6; i++) {
                webgl.texImage2D(webgl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, webgl.RGBA, width, height, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, null);
            }
            webgl.framebufferTexture2D(webgl.FRAMEBUFFER, webgl.COLOR_ATTACHMENT0, webgl.TEXTURE_CUBE_MAP_POSITIVE_X + this.activeCubeFace, this.texture, 0);
        }
        GlRenderTargetCube.prototype.use = function (webgl) {
            webgl.bindFramebuffer(webgl.FRAMEBUFFER, this.fbo);
            // webgl.bindRenderbuffer(webgl.RENDERBUFFER, this.renderbuffer);
            // webgl.bindTexture(webgl.TEXTURE_2D, this.texture);
            webgl.framebufferTexture2D(webgl.FRAMEBUFFER, webgl.COLOR_ATTACHMENT0, webgl.TEXTURE_CUBE_MAP_POSITIVE_X + this.activeCubeFace, this.texture, 0);
        };
        GlRenderTargetCube.useNull = function (webgl) {
            webgl.bindFramebuffer(webgl.FRAMEBUFFER, null);
        };
        GlRenderTargetCube.prototype.dispose = function (webgl) {
            //if (this.texture == null && this.img != null)
            //    this.disposeit = true;
            if (this.texture != null) {
                webgl.deleteFramebuffer(this.renderbuffer);
                this.renderbuffer = null;
                webgl.deleteTexture(this.texture);
                this.texture = null;
            }
        };
        GlRenderTargetCube.prototype.caclByteLength = function () {
            //RGBA & no mipmap
            return this.width * this.height * 4;
        };
        GlRenderTargetCube.prototype.isFrameBuffer = function () {
            return true;
        };
        return GlRenderTargetCube;
    }());
    egret3d.GlRenderTargetCube = GlRenderTargetCube;
    __reflect(GlRenderTargetCube.prototype, "egret3d.GlRenderTargetCube", ["egret3d.IRenderTarget", "egret3d.ITexture"]);
    /**
     *
     */
    var GlTexture2D = (function () {
        function GlTexture2D(webgl, format, mipmap, linear) {
            if (format === void 0) { format = 1 /* RGBA */; }
            if (mipmap === void 0) { mipmap = false; }
            if (linear === void 0) { linear = true; }
            //img: HTMLImageElement = null;
            this.loaded = false;
            this.width = 0;
            this.height = 0;
            this.mipmap = false;
            this.webgl = webgl;
            this.format = format;
            this.texture = webgl.createTexture();
            // Webglkit.caps.pvrtcExtension;
        }
        GlTexture2D.prototype.uploadImage = function (img, mipmap, linear, premultiply, repeat, mirroredU, mirroredV) {
            if (premultiply === void 0) { premultiply = true; }
            if (repeat === void 0) { repeat = false; }
            if (mirroredU === void 0) { mirroredU = false; }
            if (mirroredV === void 0) { mirroredV = false; }
            this.width = img.width;
            this.height = img.height;
            this.mipmap = mipmap;
            this.loaded = true;
            this.webgl.pixelStorei(this.webgl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, premultiply ? 1 : 0);
            this.webgl.pixelStorei(this.webgl.UNPACK_FLIP_Y_WEBGL, 0);
            this.webgl.bindTexture(this.webgl.TEXTURE_2D, this.texture);
            var formatGL = this.webgl.RGBA;
            if (this.format == 2 /* RGB */) {
                formatGL = this.webgl.RGB;
            }
            else if (this.format == 3 /* Gray */) {
                formatGL = this.webgl.LUMINANCE;
            }
            this.webgl.texImage2D(this.webgl.TEXTURE_2D, 0, formatGL, formatGL, this.webgl.UNSIGNED_BYTE, img);
            if (mipmap) {
                this.webgl.generateMipmap(this.webgl.TEXTURE_2D);
                if (linear) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.LINEAR);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.LINEAR_MIPMAP_LINEAR);
                }
                else {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.NEAREST);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.NEAREST_MIPMAP_NEAREST);
                }
            }
            else {
                if (linear) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.LINEAR);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.LINEAR);
                }
                else {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.NEAREST);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.NEAREST);
                }
            }
            if (repeat) {
                if (mirroredU && mirroredV) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.MIRRORED_REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.MIRRORED_REPEAT);
                }
                else if (mirroredU) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.MIRRORED_REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.REPEAT);
                }
                else if (mirroredV) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.MIRRORED_REPEAT);
                }
                else {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.REPEAT);
                }
            }
            else {
                this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.CLAMP_TO_EDGE);
                this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.CLAMP_TO_EDGE);
            }
        };
        GlTexture2D.prototype.uploadByteArray = function (mipmap, linear, width, height, data, repeat, mirroredU, mirroredV) {
            if (repeat === void 0) { repeat = false; }
            if (mirroredU === void 0) { mirroredU = false; }
            if (mirroredV === void 0) { mirroredV = false; }
            this.width = width;
            this.height = height;
            this.mipmap = mipmap;
            this.loaded = true;
            this.webgl.pixelStorei(this.webgl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
            this.webgl.pixelStorei(this.webgl.UNPACK_FLIP_Y_WEBGL, 0);
            this.webgl.bindTexture(this.webgl.TEXTURE_2D, this.texture);
            var formatGL = this.webgl.RGBA;
            if (this.format == 2 /* RGB */) {
                formatGL = this.webgl.RGB;
            }
            else if (this.format == 3 /* Gray */) {
                formatGL = this.webgl.LUMINANCE;
            }
            this.webgl.texImage2D(this.webgl.TEXTURE_2D, 0, formatGL, width, height, 0, formatGL, this.webgl.UNSIGNED_BYTE, data);
            if (mipmap) {
                this.webgl.generateMipmap(this.webgl.TEXTURE_2D);
                if (linear) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.LINEAR);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.LINEAR_MIPMAP_LINEAR);
                }
                else {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.NEAREST);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.NEAREST_MIPMAP_NEAREST);
                }
            }
            else {
                if (linear) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.LINEAR);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.LINEAR);
                }
                else {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.NEAREST);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.NEAREST);
                }
            }
            if (repeat) {
                if (mirroredU && mirroredV) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.MIRRORED_REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.MIRRORED_REPEAT);
                }
                else if (mirroredU) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.MIRRORED_REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.REPEAT);
                }
                else if (mirroredV) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.MIRRORED_REPEAT);
                }
                else {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.REPEAT);
                }
            }
            else {
                this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.CLAMP_TO_EDGE);
                this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.CLAMP_TO_EDGE);
            }
        };
        GlTexture2D.prototype.caclByteLength = function () {
            var pixellen = 1;
            if (this.format == 1 /* RGBA */) {
                pixellen = 4;
            }
            else if (this.format == 2 /* RGB */) {
                pixellen = 3;
            }
            var len = this.width * this.height * pixellen;
            if (this.mipmap) {
                len = len * (1 - Math.pow(0.25, 10)) / 0.75;
            }
            return len;
        };
        GlTexture2D.prototype.getReader = function (redOnly) {
            if (redOnly === void 0) { redOnly = false; }
            if (this.reader != null) {
                if (this.reader.gray != redOnly)
                    throw new Error("get param diff with this.reader");
                return this.reader;
            }
            if (this.format != 1 /* RGBA */)
                throw new Error("only rgba texture can read");
            if (this.texture == null)
                return null;
            if (this.reader == null)
                this.reader = new TextureReader(this.webgl, this.texture, this.width, this.height, redOnly);
            return this.reader;
        };
        //disposeit: boolean = false;
        GlTexture2D.prototype.dispose = function (webgl) {
            //if (this.texture == null && this.img != null) this.disposeit = true;
            if (this.texture != null) {
                webgl.deleteTexture(this.texture);
                this.texture = null;
            }
        };
        GlTexture2D.prototype.isFrameBuffer = function () {
            return false;
        };
        GlTexture2D.formGrayArray = function (webgl, array, width, height) {
            var mipmap = false;
            var linear = true;
            var t = new GlTexture2D(webgl, 1 /* RGBA */, mipmap, linear);
            var data = new Uint8Array(array.length * 4);
            for (var y = 0; y < width; y++) {
                for (var x = 0; x < width; x++) {
                    var fi = y * 512 + x;
                    var i = y * width + x;
                    data[fi * 4] = array[i] * 255;
                    data[fi * 4 + 1] = array[i] * 255;
                    data[fi * 4 + 2] = array[i] * 255;
                    data[fi * 4 + 3] = 255;
                }
            }
            t.uploadByteArray(mipmap, linear, 512, 512, data);
            return t;
        };
        GlTexture2D.staticTexture = function (webgl, name) {
            var t = GlTexture2D.mapTexture[name];
            if (t != undefined)
                return t;
            var mipmap = false;
            var linear = true;
            t = new GlTexture2D(webgl, 1 /* RGBA */, mipmap, linear);
            var data = new Uint8Array(4);
            var width = 1;
            var height = 1;
            data[0] = 128;
            data[1] = 0;
            data[2] = 128;
            data[3] = 255;
            if (name == "gray") {
                data[0] = 128;
                data[1] = 128;
                data[2] = 128;
                data[3] = 255;
            }
            else if (name == "white") {
                data[0] = 255;
                data[1] = 255;
                data[2] = 255;
                data[3] = 255;
            }
            else if (name == "black") {
                data[0] = 0;
                data[1] = 0;
                data[2] = 0;
                data[3] = 255;
            }
            else if (name == "grid") {
                width = 256;
                height = 256;
                data = new Uint8Array(width * width * 4);
                for (var y = 0; y < height; y++) {
                    for (var x = 0; x < width; x++) {
                        var seek = (y * width + x) * 4;
                        if (((x - width * 0.5) * (y - height * 0.5)) > 0) {
                            data[seek] = 0;
                            data[seek + 1] = 0;
                            data[seek + 2] = 0;
                            data[seek + 3] = 255;
                        }
                        else {
                            data[seek] = 255;
                            data[seek + 1] = 255;
                            data[seek + 2] = 255;
                            data[seek + 3] = 255;
                        }
                    }
                }
            }
            t.uploadByteArray(mipmap, linear, width, height, data);
            GlTexture2D.mapTexture[name] = t;
            return t;
        };
        GlTexture2D.mapTexture = {};
        return GlTexture2D;
    }());
    egret3d.GlTexture2D = GlTexture2D;
    __reflect(GlTexture2D.prototype, "egret3d.GlTexture2D", ["egret3d.ITexture"]);
    /**
     *
     */
    var WriteableTexture2D = (function () {
        function WriteableTexture2D(webgl, format, width, height, linear, premultiply, repeat, mirroredU, mirroredV) {
            if (format === void 0) { format = 1 /* RGBA */; }
            if (premultiply === void 0) { premultiply = true; }
            if (repeat === void 0) { repeat = false; }
            if (mirroredU === void 0) { mirroredU = false; }
            if (mirroredV === void 0) { mirroredV = false; }
            this.premultiply = true;
            this.repeat = false;
            this.mirroredU = false;
            this.mirroredV = false;
            this.width = 0;
            this.height = 0;
            this.webgl = webgl;
            this.texture = webgl.createTexture();
            this.webgl.pixelStorei(this.webgl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, premultiply ? 1 : 0);
            this.webgl.pixelStorei(this.webgl.UNPACK_FLIP_Y_WEBGL, 0);
            this.webgl.bindTexture(this.webgl.TEXTURE_2D, this.texture);
            this.format = format;
            this.formatGL = this.webgl.RGBA;
            if (format == 2 /* RGB */) {
                this.formatGL = this.webgl.RGB;
            }
            else if (format == 3 /* Gray */) {
                this.formatGL = this.webgl.LUMINANCE;
            }
            var data = null;
            this.webgl.texImage2D(this.webgl.TEXTURE_2D, 0, this.formatGL, width, height, 0, this.formatGL, this.webgl.UNSIGNED_BYTE, data);
            if (linear) {
                this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.LINEAR);
                this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.LINEAR);
            }
            else {
                this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.NEAREST);
                this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.NEAREST);
            }
            if (repeat) {
                if (mirroredU && mirroredV) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.MIRRORED_REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.MIRRORED_REPEAT);
                }
                else if (mirroredU) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.MIRRORED_REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.REPEAT);
                }
                else if (mirroredV) {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.MIRRORED_REPEAT);
                }
                else {
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.REPEAT);
                    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.REPEAT);
                }
            }
            else {
                this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.CLAMP_TO_EDGE);
                this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.CLAMP_TO_EDGE);
            }
        }
        WriteableTexture2D.prototype.updateRect = function (data, x, y, width, height) {
            this.webgl.bindTexture(this.webgl.TEXTURE_2D, this.texture);
            this.webgl.texSubImage2D(this.webgl.TEXTURE_2D, 0, x, y, width, height, this.formatGL, this.webgl.UNSIGNED_BYTE, data);
        };
        WriteableTexture2D.prototype.updateRectImg = function (data, x, y) {
            this.webgl.bindTexture(this.webgl.TEXTURE_2D, this.texture);
            this.webgl.texSubImage2D(this.webgl.TEXTURE_2D, 0, x, y, this.formatGL, this.webgl.UNSIGNED_BYTE, data);
        };
        WriteableTexture2D.prototype.isFrameBuffer = function () {
            return false;
        };
        WriteableTexture2D.prototype.dispose = function (webgl) {
            if (this.texture != null) {
                webgl.deleteTexture(this.texture);
                this.texture = null;
            }
        };
        WriteableTexture2D.prototype.caclByteLength = function () {
            var pixellen = 1;
            if (this.format == 1 /* RGBA */) {
                pixellen = 4;
            }
            else if (this.format == 2 /* RGB */) {
                pixellen = 3;
            }
            var len = this.width * this.height * pixellen;
            return len;
        };
        return WriteableTexture2D;
    }());
    egret3d.WriteableTexture2D = WriteableTexture2D;
    __reflect(WriteableTexture2D.prototype, "egret3d.WriteableTexture2D", ["egret3d.ITexture"]);
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var WEBGL_ATTRIBUTE_TYPE;
    (function (WEBGL_ATTRIBUTE_TYPE) {
        WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
        WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
        WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
        WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT"] = 5126] = "FLOAT";
        WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["BYTE"] = 65535] = "BYTE";
        WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
        WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    })(WEBGL_ATTRIBUTE_TYPE = egret3d.WEBGL_ATTRIBUTE_TYPE || (egret3d.WEBGL_ATTRIBUTE_TYPE = {}));
    var WebGLAttribute = (function () {
        function WebGLAttribute(gl, program, attributeData) {
            this.gl = gl;
            this.name = attributeData.name;
            this.type = attributeData.type;
            this.size = attributeData.size;
            this.location = gl.getAttribLocation(program, this.name);
            this.count = this._initCount(this.type);
            this.format = this._initFormat(gl, this.type);
        }
        WebGLAttribute.prototype._initCount = function (type) {
            var count = 0;
            switch (type) {
                case WEBGL_ATTRIBUTE_TYPE.FLOAT:
                case WEBGL_ATTRIBUTE_TYPE.BYTE:
                case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_BYTE:
                case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_SHORT:
                    count = 1;
                    break;
                case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC2:
                    count = 2;
                    break;
                case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC3:
                    count = 3;
                    break;
                case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC4:
                    count = 4;
                    break;
            }
            return count;
        };
        WebGLAttribute.prototype._initFormat = function (gl, type) {
            var format;
            switch (type) {
                case WEBGL_ATTRIBUTE_TYPE.FLOAT:
                case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC2:
                case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC3:
                case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC4:
                    format = gl.FLOAT;
                    break;
                case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_BYTE:
                    format = gl.UNSIGNED_BYTE;
                    break;
                case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_SHORT:
                    format = gl.UNSIGNED_SHORT;
                    break;
                case WEBGL_ATTRIBUTE_TYPE.BYTE:
                    format = gl.BYTE;
                    break;
            }
            return format;
        };
        return WebGLAttribute;
    }());
    egret3d.WebGLAttribute = WebGLAttribute;
    __reflect(WebGLAttribute.prototype, "egret3d.WebGLAttribute");
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var helpMat4_1 = new egret3d.Matrix();
    var helpMat4_2 = new egret3d.Matrix();
    var DirectLightShadow = (function () {
        function DirectLightShadow() {
            this.bias = 0.0003;
            this.radius = 2;
            this.windowSize = 16;
            this.renderTarget = new egret3d.GlRenderTarget(egret3d.WebGLKit.webgl, 1024, 1024, true);
            this.map = this.renderTarget.texture;
            this.matrix = new egret3d.Matrix();
            this.camera = new egret3d.Camera(); // TODO 不要这样
            this.camera.opvalue = 0;
            this.camera.backgroundColor.r = 1.0;
            this.camera.backgroundColor.g = 1.0;
            this.camera.backgroundColor.b = 1.0;
            this.camera.backgroundColor.a = 1.0;
            this.camera.clearOption_Color = true;
            this.camera.clearOption_Depth = true;
            this.camera.near = 0.1;
            this.camera.far = 1000;
            this.camera.renderTarget = this.renderTarget;
            this.camera.initialize();
        }
        DirectLightShadow.prototype.update = function (light) {
            this.bias = light.shadowBias;
            this.radius = light.shadowRadius;
            this.windowSize = light.shadowSize;
            this._updateCamera(light);
            this._updateMatrix();
        };
        DirectLightShadow.prototype._updateCamera = function (light) {
            this.camera.gameObject = light.gameObject; // for calcViewMatrix // TODO 不要这样
            this.camera.near = light.shadowCameraNear;
            this.camera.far = light.shadowCameraFar;
            this.camera.size = this.windowSize;
        };
        DirectLightShadow.prototype._updateMatrix = function () {
            var matrix = this.matrix;
            var camera = this.camera;
            // matrix * 0.5 + 0.5, after identity, range is 0 ~ 1 instead of -1 ~ 1
            egret3d.Matrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0, matrix);
            var viewMatrix = camera.calcViewMatrix(helpMat4_1);
            var projectionMatrix = camera.calcProjectMatrix(512 / 512, helpMat4_2);
            egret3d.Matrix.multiply(matrix, projectionMatrix, matrix);
            egret3d.Matrix.multiply(matrix, viewMatrix, matrix);
        };
        return DirectLightShadow;
    }());
    egret3d.DirectLightShadow = DirectLightShadow;
    __reflect(DirectLightShadow.prototype, "egret3d.DirectLightShadow", ["egret3d.ILightShadow"]);
})(egret3d || (egret3d = {}));

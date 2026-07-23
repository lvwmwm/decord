// Module ID: 8892
// Function ID: 70120
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 8889, 8888]
// Exports: hmac

// Module 8892 (_isNativeReflectConstruct)
import _classCallCheck from "asciiToBase16";
import _defineProperties from "_defineProperties";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((Hash) => {
  class HMAC {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_2(this, HMAC);
      obj = outer1_5(HMAC);
      tmp2 = outer1_4;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, [], outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.finished = false;
      tmp2Result.destroyed = false;
      hashResult = HMAC(outer1_1[5]).hash(Hash);
      toBytesResult = HMAC(outer1_1[6]).toBytes(arg1);
      tmp2Result.iHash = Hash.create();
      if ("function" !== typeof tmp2Result.iHash.update) {
        tmp13 = globalThis;
        _Error = Error;
        prototype = Error.prototype;
        tmp14 = new.target;
        str = "Expected instance of class which extends utils.Hash";
        tmp15 = new.target;
        error = new Error("Expected instance of class which extends utils.Hash");
        tmp17 = error;
        throw error;
      } else {
        tmp2Result.blockLen = tmp2Result.iHash.blockLen;
        tmp2Result.outputLen = tmp2Result.iHash.outputLen;
        blockLen = tmp2Result.blockLen;
        tmp18 = globalThis;
        _Uint8Array = Uint8Array;
        prototype2 = Uint8Array.prototype;
        tmp19 = new.target;
        tmp20 = new.target;
        tmp21 = blockLen;
        uint8Array = new Uint8Array(blockLen);
        tmp22 = uint8Array;
        digestResult = toBytesResult;
        if (toBytesResult.length > blockLen) {
          obj = Hash.create();
          updateResult = obj.update(toBytesResult);
          digestResult = updateResult.digest();
        }
        result = uint8Array.set(digestResult);
        num = 0;
        num2 = 54;
        num3 = 0;
        if (0 < uint8Array.length) {
          do {
            uint8Array[num3] = uint8Array[num3] ^ 54;
            num3 = num3 + 1;
            length = uint8Array.length;
          } while (num3 < length);
        }
        iHash = tmp2Result.iHash;
        updateResult1 = iHash.update(uint8Array);
        tmp2Result.oHash = Hash.create();
        num4 = 106;
        num5 = 0;
        if (0 < uint8Array.length) {
          do {
            uint8Array[num5] = uint8Array[num5] ^ 106;
            num5 = num5 + 1;
            length2 = uint8Array.length;
          } while (num5 < length2);
        }
        oHash = tmp2Result.oHash;
        updateResult2 = oHash.update(uint8Array);
        fillResult = uint8Array.fill(0);
        return tmp2Result;
      }
    }
  }
  _inherits(HMAC, Hash);
  let obj = {
    key: "update",
    value: function update(arg0) {
      HMAC(outer1_1[5]).exists(this);
      const iHash = this.iHash;
      iHash.update(arg0);
      return this;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "digestInto",
    value: function digestInto(arg0) {
      HMAC(outer1_1[5]).exists(this);
      HMAC(outer1_1[5]).bytes(arg0, this.outputLen);
      this.finished = true;
      const iHash = this.iHash;
      iHash.digestInto(arg0);
      const oHash = this.oHash;
      oHash.update(arg0);
      const oHash2 = this.oHash;
      oHash2.digestInto(arg0);
      this.destroy();
    }
  };
  items[1] = obj;
  obj = {
    key: "digest",
    value: function digest() {
      const uint8Array = new Uint8Array(this.oHash.outputLen);
      this.digestInto(uint8Array);
      return uint8Array;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_cloneInto",
    value: function _cloneInto(arg0) {
      let iHash;
      let oHash;
      let obj = arg0;
      const self = this;
      if (!arg0) {
        const _Object = Object;
        const _Object2 = Object;
        obj = Object.create(Object.getPrototypeOf(self), {});
      }
      ({ oHash, iHash, finished: tmp.finished, destroyed: tmp.destroyed, blockLen: tmp.blockLen, outputLen: tmp.outputLen } = self);
      obj.oHash = oHash._cloneInto(obj.oHash);
      obj.iHash = iHash._cloneInto(obj.iHash);
      return obj;
    }
  };
  items[4] = {
    key: "destroy",
    value: function destroy() {
      this.destroyed = true;
      const oHash = this.oHash;
      oHash.destroy();
      const iHash = this.iHash;
      iHash.destroy();
    }
  };
  return _defineProperties(HMAC, items);
})(require("asciiToBase16").Hash);
let closure_7 = tmp2;
exports.hmac.create = (arg0, arg1) => new closure_7(arg0, arg1);

export const HMAC = tmp2;
export const hmac = function hmac(arg0, arg1, arg2) {
  const obj = new closure_7(arg0, arg1);
  return new closure_7(arg0, arg1).update(arg2).digest();
};

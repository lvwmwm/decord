// Module ID: 8884
// Function ID: 70066
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: hmac

// Module 8884 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
let closure_6 = require(dependencyMap[4]);
const tmp2 = (Hash) => {
  class HMAC {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_2(this, HMAC);
      obj = closure_5(HMAC);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, [], closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.finished = false;
      tmp2Result.destroyed = false;
      hashResult = HMAC(closure_1[5]).hash(Hash);
      toBytesResult = HMAC(closure_1[6]).toBytes(arg1);
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
  const require = HMAC;
  callback2(HMAC, Hash);
  let obj = {
    key: "update",
    value: function update(arg0) {
      HMAC(closure_1[5]).exists(this);
      const iHash = this.iHash;
      iHash.update(arg0);
      return this;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "digestInto",
    value: function digestInto(arg0) {
      HMAC(closure_1[5]).exists(this);
      HMAC(closure_1[5]).bytes(arg0, this.outputLen);
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
  return callback(HMAC, items);
}(require(dependencyMap[6]).Hash);
exports.hmac.create = (arg0, arg1) => new tmp2(arg0, arg1);

export const HMAC = tmp2;
export const hmac = function hmac(arg0, arg1, arg2) {
  const obj = new tmp2(arg0, arg1);
  return new tmp2(arg0, arg1).update(arg2).digest();
};

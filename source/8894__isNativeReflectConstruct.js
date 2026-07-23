// Module ID: 8894
// Function ID: 70149
// Name: _isNativeReflectConstruct
// Dependencies: [65, 6, 7, 15, 17, 18, 8888, 8889]
// Exports: Chi, Maj

// Module 8894 (_isNativeReflectConstruct)
import _toConsumableArray from "_toConsumableArray";
import _classCallCheck from "asciiToBase16";
import _defineProperties from "number";
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

export const Chi = function Chi(E, F, G) {
  return E & F ^ ~E & G;
};
export const Maj = function Maj(A, B, C) {
  return A & B ^ A & C ^ B & C;
};
export const HashMD = ((Hash) => {
  class HashMD {
    constructor(arg0, arg1, arg2, arg3) {
      self = this;
      tmp = outer1_3(this, HashMD);
      obj = outer1_6(HashMD);
      tmp2 = outer1_5;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, [], outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.blockLen = Hash;
      tmp2Result.outputLen = arg1;
      tmp2Result.padOffset = arg2;
      tmp2Result.isLE = arg3;
      tmp2Result.finished = false;
      tmp2Result.length = 0;
      tmp2Result.pos = 0;
      tmp2Result.destroyed = false;
      uint8Array = new Uint8Array(Hash);
      tmp2Result.buffer = uint8Array;
      tmp2Result.view = HashMD(outer1_1[6]).createView(tmp2Result.buffer);
      return tmp2Result;
    }
  }
  _inherits(HashMD, Hash);
  let obj = {
    key: "update",
    value: function update(B) {
      let blockLen;
      let buffer;
      let tmp9;
      const self = this;
      HashMD(outer1_1[7]).exists(this);
      ({ buffer, blockLen } = this);
      const toBytesResult = HashMD(outer1_1[6]).toBytes(B);
      let num = 0;
      if (0 < toBytesResult.length) {
        do {
          let _Math = Math;
          let bound = Math.min(blockLen - self.pos, length - num);
          if (bound !== blockLen) {
            let result = buffer.set(toBytesResult.subarray(num, num + bound), self.pos);
            self.pos = self.pos + bound;
            let sum = num + bound;
            tmp9 = sum;
            let tmp10 = tmp3;
            if (self.pos === blockLen) {
              let processResult = self.process(tmp2, 0);
              self.pos = 0;
              tmp9 = sum;
              tmp10 = tmp3;
            }
          } else {
            let tmp5 = HashMD;
            let tmp6 = outer1_1;
            let view = HashMD(outer1_1[6]).createView(toBytesResult);
            let tmp8 = num;
            tmp9 = num;
            tmp10 = view;
            if (blockLen <= length - num) {
              do {
                let processResult1 = self.process(view, tmp8);
                let sum1 = tmp8 + blockLen;
                tmp8 = sum1;
                tmp9 = sum1;
                tmp10 = view;
                diff = length - sum1;
              } while (blockLen <= diff);
            }
          }
          num = tmp9;
          tmp3 = tmp10;
        } while (tmp9 < length);
      }
      self.length = self.length + toBytesResult.length;
      self.roundClean();
      return self;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "digestInto",
    value: function digestInto(content) {
      let blockLen;
      let buffer;
      let isLE;
      let view;
      const self = this;
      HashMD(outer1_1[7]).exists(this);
      HashMD(outer1_1[7]).output(content, this);
      this.finished = true;
      ({ buffer, view, blockLen, isLE } = this);
      let num = tmp3 + 1;
      buffer[+this.pos] = 128;
      const buffer2 = this.buffer;
      buffer2.subarray(num).fill(0);
      if (this.padOffset > blockLen - num) {
        self.process(view, 0);
        num = 0;
      }
      if (num < blockLen) {
        do {
          buffer[num] = 0;
          num = num + 1;
        } while (num < blockLen);
      }
      const diff = blockLen - 8;
      const BigIntResult = BigInt(8 * self.length);
      if ("function" === typeof view.setBigUint64) {
        view.setBigUint64(diff, BigIntResult, isLE);
      } else {
        const _BigInt = BigInt;
        const _BigInt2 = BigInt;
        const BigIntResult2 = BigInt(4294967295);
        const _Number = Number;
        const _Number2 = Number;
        const BigIntResult1 = BigInt(32);
        let num2 = 0;
        const NumberResult = Number(BigIntResult >> BigInt(32) & BigIntResult2);
        if (isLE) {
          num2 = 4;
        }
        let num3 = 4;
        if (isLE) {
          num3 = 0;
        }
        view.setUint32(diff + num2, NumberResult, isLE);
        view.setUint32(diff + num3, Number(BigIntResult & BigIntResult2), isLE);
        const NumberResult1 = Number(BigIntResult & BigIntResult2);
      }
      self.process(view, 0);
      view = HashMD(outer1_1[6]).createView(content);
      const outputLen = self.outputLen;
      if (outputLen % 4) {
        const _Error2 = Error;
        const error = new Error("_sha2: outputLen should be aligned to 32bit");
        throw error;
      } else {
        const result = outputLen / 4;
        const value = self.get();
        if (result > value.length) {
          const _Error = Error;
          const error1 = new Error("_sha2: outputLen bigger than state");
          throw error1;
        } else {
          let num4 = 0;
          if (0 < result) {
            do {
              let setUint32Result2 = view.setUint32(4 * num4, value[num4], isLE);
              num4 = num4 + 1;
            } while (num4 < result);
          }
        }
      }
      const subarrayResult = buffer2.subarray(num);
    }
  };
  items[1] = obj;
  obj = {
    key: "digest",
    value: function digest() {
      let buffer;
      let outputLen;
      ({ buffer, outputLen } = this);
      this.digestInto(buffer);
      const substr = buffer.slice(0, outputLen);
      this.destroy();
      return substr;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_cloneInto",
    value: function _cloneInto(arg0) {
      let constructor = arg0;
      const self = this;
      if (!arg0) {
        constructor = self.constructor;
        const prototype = constructor.prototype;
        constructor = new constructor();
      }
      constructor.set.apply(constructor, outer1_2(self.get()));
      constructor.length = self.length;
      ({ pos: tmp.pos, finished: tmp.finished, destroyed: tmp.destroyed } = self);
      if (self.length % self.blockLen) {
        const buffer = constructor.buffer;
        const result = buffer.set(tmp5);
      }
      return constructor;
    }
  };
  return _defineProperties(HashMD, items);
})(require("asciiToBase16").Hash);

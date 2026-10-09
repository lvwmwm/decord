// Module ID: 8806
// Function ID: 8807
// Name: Chi
// Dependencies: [41, 42, 93, 95, 98, 8800, 8801]
// Exports: Chi, Maj

// Module 8806 (Chi)
import u8 from "u8" /* 8800 */;
import _mod8801 from "module_8801" /* 8801 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class HashMD {
  constructor(blockLen, outputLen, padOffset, isLE) {
    let constructResult;
    const self = this;
    _classCallCheck(this, HashMD);
    const obj = _getPrototypeOf(HashMD);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.blockLen = blockLen;
    tmp3Result.outputLen = outputLen;
    tmp3Result.padOffset = padOffset;
    tmp3Result.isLE = isLE;
    tmp3Result.finished = false;
    tmp3Result.length = 0;
    tmp3Result.pos = 0;
    tmp3Result.destroyed = false;
    const uint8Array = new Uint8Array(blockLen);
    tmp3Result.buffer = uint8Array;
    tmp3Result.view = u8.createView(tmp3Result.buffer);
    return tmp3Result;
  }
}
_inherits(HashMD, u8.Hash);
const entry = {
  key: "update",
  value: function update(B) {
    let blockLen;
    let buffer;
    let diff;
    let tmp8;
    let view;
    const self = this;
    _mod8801.exists(this);
    ({ buffer, blockLen, view } = this);
    const toBytesResult = u8.toBytes(B);
    let num = 0;
    if (0 < toBytesResult.length) {
      do {
        let _Math = Math;
        let bound = Math.min(blockLen - self.pos, length - num);
        if (bound !== blockLen) {
          let result = buffer.set(toBytesResult.subarray(num, num + bound), self.pos);
          self.pos = self.pos + bound;
          let sum = num + bound;
          tmp8 = sum;
          if (self.pos === blockLen) {
            let processResult = self.process(view, 0);
            self.pos = 0;
            tmp8 = sum;
          }
        } else {
          let tmp7 = num;
          tmp8 = num;
          if (blockLen <= length - num) {
            do {
              let processResult1 = self.process(tmp6, tmp7);
              let sum1 = tmp7 + blockLen;
              tmp7 = sum1;
              tmp8 = sum1;
              diff = length - sum1;
            } while (blockLen <= diff);
          }
        }
        num = tmp8;
      } while (tmp8 < toBytesResult.length);
    }
    self.length = self.length + toBytesResult.length;
    self.roundClean();
    return self;
  }
};
let items = [
  entry,
  {
    key: "digestInto",
    value: function digestInto(content) {
      let blockLen;
      let buffer;
      let isLE;
      let view;
      const self = this;
      _mod8801.exists(this);
      _mod8801.output(content, this);
      this.finished = true;
      ({ buffer, view, blockLen, isLE } = this);
      let num = tmp3 + 1;
      buffer[+this.pos] = 128;
      const buffer2 = this.buffer;
      const subarrayResult = buffer2.subarray(num);
      subarrayResult.fill(0);
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
      if (typeof view.setBigUint64 === "function") {
        view.setBigUint64(diff, BigIntResult, isLE);
      } else {
        const _BigInt = BigInt;
        const _BigInt2 = BigInt;
        const BigIntResult1 = BigInt(32);
        const BigIntResult2 = BigInt(4294967295);
        const _Number = Number;
        const _Number2 = Number;
        let num2 = 0;
        const NumberResult = Number(BigIntResult >> BigIntResult1 & BigIntResult2);
        const NumberResult1 = Number(BigIntResult & BigIntResult2);
        if (isLE) {
          num2 = 4;
        }
        let num3 = 4;
        if (isLE) {
          num3 = 0;
        }
        view.setUint32(diff + num2, NumberResult, isLE);
        view.setUint32(diff + num3, NumberResult1, isLE);
      }
      self.process(view, 0);
      const view1 = u8.createView(content);
      const outputLen = self.outputLen;
      if (outputLen % 4) {
        const _Error2 = Error;
        const self4 = this;
        const self5 = this;
        const error = new Error("_sha2: outputLen should be aligned to 32bit");
        throw error;
      } else {
        const result = outputLen / 4;
        const value = self.get();
        if (result > value.length) {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error1 = new Error("_sha2: outputLen bigger than state");
          throw error1;
        } else {
          let num5 = 0;
          if (0 < result) {
            do {
              let setUint32Result2 = view1.setUint32(4 * num5, value[num5], isLE);
              num5 = num5 + 1;
            } while (num5 < result);
          }
        }
      }
    }
  },
  {
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
  },
  {
    key: "_cloneInto",
    value: function _cloneInto(arg0) {
      const self = this;
      let constructor = arg0;
      if (!constructor) {
        const self2 = this;
        const self3 = this;
        constructor = new self.constructor();
      }
      const items = [...self.get()];
      constructor.set.apply(items);
      constructor.length = self.length;
      ({ pos: tmp.pos, finished: tmp.finished, destroyed: tmp.destroyed } = self);
      if (self.length % self.blockLen) {
        const buffer = constructor.buffer;
        const result = buffer.set(tmp3);
      }
      return constructor;
    }
  }
];
const HashMD_export = _createClass(HashMD, items);

export const Chi = (arg0, arg1, arg2) => arg0 & arg1 ^ ~arg0 & arg2;
export const Maj = (arg0, arg1, arg2) => arg0 & arg1 ^ arg0 & arg2 ^ arg1 & arg2;
export { HashMD_export as HashMD };

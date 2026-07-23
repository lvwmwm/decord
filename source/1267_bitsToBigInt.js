// Module ID: 1267
// Function ID: 14305
// Name: bitsToBigInt
// Dependencies: [6, 7, 99, 100]
// Exports: hash

// Module 1267 (bitsToBigInt)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";

function bitsToBigInt(arg0, arg1, arg2, arg3) {
  const BigIntResult = BigInt(arg0);
  const tmp2 = BigInt(arg0) | BigInt(arg1) << 16n;
  return BigInt(arg0) | BigInt(arg1) << 16n | BigInt(0) << 32n | BigInt(0) << 48n;
}
function memoryToBigInt(arg0, arg1) {
  const BigIntResult = BigInt(arg0[arg1]);
  const tmp2 = BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 8n;
  const tmp3 = BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 8n | BigInt(arg0[arg1 + 2]) << 16n;
  const tmp4 = BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 8n | BigInt(arg0[arg1 + 2]) << 16n | BigInt(arg0[arg1 + 3]) << 24n;
  const tmp5 = BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 8n | BigInt(arg0[arg1 + 2]) << 16n | BigInt(arg0[arg1 + 3]) << 24n | BigInt(arg0[arg1 + 4]) << 32n;
  const tmp6 = BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 8n | BigInt(arg0[arg1 + 2]) << 16n | BigInt(arg0[arg1 + 3]) << 24n | BigInt(arg0[arg1 + 4]) << 32n | BigInt(arg0[arg1 + 5]) << 40n;
  return BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 8n | BigInt(arg0[arg1 + 2]) << 16n | BigInt(arg0[arg1 + 3]) << 24n | BigInt(arg0[arg1 + 4]) << 32n | BigInt(arg0[arg1 + 5]) << 40n | BigInt(arg0[arg1 + 6]) << 48n | BigInt(arg0[arg1 + 7]) << 56n;
}
function rotl(arg0, arg1) {
  return arg0 << arg1 & closure_3 | arg0 >> 64n - arg1;
}
function trunc(arg0) {
  return BigInt.asUintN(64, arg0);
}
let closure_3 = 2n ** 64n - 1n;
const textEncoder = new TextEncoder();
let closure_5 = importDefaultResult("seed");
let closure_6 = importDefaultResult("v1");
let closure_7 = importDefaultResult("v2");
let closure_8 = importDefaultResult("v3");
let closure_9 = importDefaultResult("v4");
let closure_10 = importDefaultResult("memory");
let closure_11 = importDefaultResult("len");
let closure_12 = importDefaultResult("memsize");
let tmp4 = (() => {
  class XXH64 {
    constructor() {
      self = this;
      num = 0;
      if (arguments.length > 0) {
        num = 0;
        if (undefined !== arguments[0]) {
          num = arguments[0];
        }
      }
      tmp = XXH64(self, XXH64);
      definePropertyResult = Object.defineProperty(self, outer1_5, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(self, outer1_6, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(self, outer1_7, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(self, outer1_8, { writable: true, value: undefined });
      definePropertyResult4 = Object.defineProperty(self, outer1_9, { writable: true, value: undefined });
      definePropertyResult5 = Object.defineProperty(self, outer1_10, { writable: true, value: undefined });
      definePropertyResult6 = Object.defineProperty(self, outer1_11, { writable: true, value: undefined });
      definePropertyResult7 = Object.defineProperty(self, outer1_12, { writable: true, value: undefined });
      resetResult = self.reset(num);
      return;
    }
  }
  let obj = {
    key: "reset",
    value: function reset() {
      const self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          let first = arguments[0];
        }
        const _BigInt = BigInt;
        const _BigInt2 = BigInt;
        outer1_2(self, outer1_5)[outer1_5] = BigInt.asUintN(32, BigInt(first));
        const tmp4 = outer1_2(self, outer1_5);
        const bigint = 0x009e3779b185ebca87n;
        const bigint2 = 0x00c2b2ae3d27d4eb4fn;
        outer1_2(self, outer1_6)[outer1_6] = outer1_17(outer1_2(self, outer1_5)[outer1_5] + 0x009e3779b185ebca87n + 0x00c2b2ae3d27d4eb4fn);
        const tmp7 = outer1_2(self, outer1_6);
        outer1_2(self, outer1_7)[outer1_7] = outer1_17(outer1_2(self, outer1_5)[outer1_5] + 0x00c2b2ae3d27d4eb4fn);
        const tmp10 = outer1_2(self, outer1_7);
        outer1_2(self, outer1_8)[outer1_8] = outer1_2(self, outer1_5)[outer1_5];
        const tmp12 = outer1_2(self, outer1_8);
        outer1_2(self, outer1_9)[outer1_9] = outer1_17(outer1_2(self, outer1_5)[outer1_5] - 0x009e3779b185ebca87n);
        outer1_2(self, outer1_10)[outer1_10] = null;
        outer1_2(self, outer1_11)[outer1_11] = 0;
        outer1_2(self, outer1_12)[outer1_12] = 0;
        return self;
      }
      first = outer1_2(self, outer1_5)[outer1_5];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "update",
    value: function update(arg0) {
      const self = this;
      let encodeResult = arg0;
      if ("string" === typeof arg0) {
        encodeResult = outer1_4.encode(arg0);
      }
      if (0 === encodeResult.length) {
        return self;
      } else {
        const tmp68 = outer1_2(self, outer1_11);
        tmp68[outer1_11] = tmp68[outer1_11] + length;
        if (0 === outer1_2(self, outer1_12)[outer1_12]) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(32);
          outer1_2(self, outer1_10)[outer1_10] = uint8Array;
          const tmp5 = outer1_2(self, outer1_10);
        }
        if (outer1_2(self, outer1_12)[outer1_12] + length < 32) {
          const obj3 = outer1_2(self, outer1_10)[outer1_10];
          const result = obj3.set(encodeResult.subarray(0, length), outer1_2(self, outer1_12)[outer1_12]);
          const tmp65 = outer1_2(self, outer1_12);
          tmp65[outer1_12] = tmp65[outer1_12] + length;
          return self;
        } else {
          let num6 = 0;
          if (outer1_2(self, outer1_12)[outer1_12] > 0) {
            const obj = outer1_2(self, outer1_10)[outer1_10];
            const result1 = obj.set(encodeResult.subarray(0, 32 - outer1_2(self, outer1_12)[outer1_12]), outer1_2(self, outer1_12)[outer1_12]);
            const subarrayResult1 = encodeResult.subarray(0, 32 - outer1_2(self, outer1_12)[outer1_12]);
            const tmp19 = outer1_15(outer1_2(self, outer1_10)[outer1_10], 0);
            const bigint = 0x00c2b2ae3d27d4eb4fn;
            const bigint2 = 31n;
            const bigint3 = 0x009e3779b185ebca87n;
            outer1_2(self, outer1_6)[outer1_6] = outer1_17(outer1_16(outer1_17(outer1_2(self, outer1_6)[outer1_6] + tmp19 * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n);
            const tmp21 = outer1_2(self, outer1_6);
            const tmp24 = outer1_15(self.memory, 8);
            outer1_2(self, outer1_7)[outer1_7] = outer1_17(outer1_16(outer1_17(outer1_2(self, outer1_7)[outer1_7] + tmp24 * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n);
            const tmp26 = outer1_2(self, outer1_7);
            const tmp27 = outer1_15(self.memory, 16);
            outer1_2(self, outer1_8)[outer1_8] = outer1_17(outer1_16(outer1_17(outer1_2(self, outer1_8)[outer1_8] + tmp27 * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n);
            const tmp29 = outer1_2(self, outer1_8);
            const tmp30 = outer1_15(self.memory, 24);
            outer1_2(self, outer1_9)[outer1_9] = outer1_17(outer1_16(outer1_17(outer1_2(self, outer1_9)[outer1_9] + tmp30 * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n);
            num6 = 32 - outer1_2(self, outer1_12)[outer1_12];
            outer1_2(self, outer1_12)[outer1_12] = 0;
            const tmp32 = outer1_2(self, outer1_9);
          }
          const diff = tmp2 - 32;
          const bigint4 = 0x00c2b2ae3d27d4eb4fn;
          const bigint5 = 31n;
          const bigint6 = 0x009e3779b185ebca87n;
          let sum3 = num6;
          let tmp35 = num6;
          if (num6 <= diff) {
            do {
              let tmp36 = outer1_15;
              let tmp38 = outer1_2;
              let tmp39 = outer1_6;
              let tmp37 = outer1_15(encodeResult, sum3);
              let tmp41 = outer1_17;
              let tmp42 = outer1_16;
              let tmp40 = outer1_2(self, outer1_6);
              tmp40[outer1_6] = outer1_17(outer1_16(outer1_17(outer1_2(self, outer1_6)[outer1_6] + tmp37 * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n);
              let sum = sum3 + 8;
              let tmp45 = outer1_7;
              let tmp44 = outer1_15(encodeResult, sum);
              let tmp46 = outer1_2(self, outer1_7);
              tmp46[outer1_7] = outer1_17(outer1_16(outer1_17(outer1_2(self, outer1_7)[outer1_7] + tmp44 * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n);
              let sum1 = sum + 8;
              let tmp49 = outer1_8;
              let tmp48 = outer1_15(encodeResult, sum1);
              let tmp50 = outer1_2(self, outer1_8);
              tmp50[outer1_8] = outer1_17(outer1_16(outer1_17(outer1_2(self, outer1_8)[outer1_8] + tmp48 * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n);
              let sum2 = sum1 + 8;
              let tmp53 = outer1_9;
              let tmp52 = outer1_15(encodeResult, sum2);
              let tmp54 = outer1_2(self, outer1_9);
              tmp54[outer1_9] = outer1_17(outer1_16(outer1_17(outer1_2(self, outer1_9)[outer1_9] + tmp52 * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n);
              sum3 = sum2 + 8;
              tmp35 = sum3;
            } while (sum3 <= diff);
          }
          if (tmp35 < tmp2) {
            const obj2 = outer1_2(self, outer1_10)[outer1_10];
            const result2 = obj2.set(encodeResult.subarray(tmp35, tmp2), outer1_2(self, outer1_12)[outer1_12]);
            outer1_2(self, outer1_12)[outer1_12] = tmp2 - tmp35;
            const subarrayResult2 = encodeResult.subarray(tmp35, tmp2);
          }
          return self;
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "digest",
    value: function digest() {
      let diff;
      const self = this;
      const tmp = outer1_2(this, outer1_10)[outer1_10];
      const tmp2 = outer1_2(this, outer1_12)[outer1_12];
      if (outer1_2(this, outer1_11)[outer1_11] >= 32) {
        const bigint2 = 1n;
        const bigint3 = 7n;
        const sum = outer1_16(outer1_2(self, outer1_6)[outer1_6], 1n) + outer1_16(outer1_2(self, outer1_7)[outer1_7], 7n);
        const bigint4 = 12n;
        const sum1 = sum + outer1_16(outer1_2(self, outer1_8)[outer1_8], 12n);
        const bigint5 = 18n;
        const sum2 = sum1 + outer1_16(outer1_2(self, outer1_9)[outer1_9], 18n);
        const bigint6 = 0x00c2b2ae3d27d4eb4fn;
        const bigint7 = 31n;
        const bigint8 = 0x009e3779b185ebca87n;
        const bigint9 = 0x0085ebca77c2b2ae63n;
        const tmp11 = outer1_16(outer1_2(self, outer1_6)[outer1_6], 1n);
        const tmp18 = outer1_17(outer1_17(sum2 ^ outer1_16(outer1_17(outer1_2(self, outer1_6)[outer1_6] * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n) * 0x009e3779b185ebca87n + 0x0085ebca77c2b2ae63n);
        const tmp19 = outer1_17(outer1_17(outer1_17(outer1_17(sum2 ^ outer1_16(outer1_17(outer1_2(self, outer1_6)[outer1_6] * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n) * 0x009e3779b185ebca87n + 0x0085ebca77c2b2ae63n) ^ outer1_16(outer1_17(outer1_2(self, outer1_7)[outer1_7] * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n) * 0x009e3779b185ebca87n + 0x0085ebca77c2b2ae63n);
        let tmp6 = outer1_17(outer1_17(outer1_17(outer1_17(outer1_17(outer1_17(outer1_17(outer1_17(sum2 ^ outer1_16(outer1_17(outer1_2(self, outer1_6)[outer1_6] * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n) * 0x009e3779b185ebca87n + 0x0085ebca77c2b2ae63n) ^ outer1_16(outer1_17(outer1_2(self, outer1_7)[outer1_7] * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n) * 0x009e3779b185ebca87n + 0x0085ebca77c2b2ae63n) ^ outer1_16(outer1_17(outer1_2(self, outer1_8)[outer1_8] * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n) * 0x009e3779b185ebca87n + 0x0085ebca77c2b2ae63n) ^ outer1_16(outer1_17(outer1_2(self, outer1_9)[outer1_9] * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n) * 0x009e3779b185ebca87n + 0x0085ebca77c2b2ae63n);
        const tmp20 = outer1_17(outer1_17(outer1_17(outer1_17(outer1_17(outer1_17(sum2 ^ outer1_16(outer1_17(outer1_2(self, outer1_6)[outer1_6] * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n) * 0x009e3779b185ebca87n + 0x0085ebca77c2b2ae63n) ^ outer1_16(outer1_17(outer1_2(self, outer1_7)[outer1_7] * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n) * 0x009e3779b185ebca87n + 0x0085ebca77c2b2ae63n) ^ outer1_16(outer1_17(outer1_2(self, outer1_8)[outer1_8] * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n) * 0x009e3779b185ebca87n + 0x0085ebca77c2b2ae63n);
      } else {
        const bigint = 2870177450012600261n;
        tmp6 = outer1_17(outer1_2(self, outer1_5)[outer1_5] + 2870177450012600261n);
      }
      let sum3 = tmp6 + BigInt(outer1_2(self, outer1_11)[outer1_11]);
      let num = 0;
      let tmp22 = sum3;
      let num2 = 0;
      if (0 <= tmp2 - 8) {
        do {
          let tmp23 = outer1_17;
          let tmp24 = outer1_16;
          let tmp25 = outer1_15;
          sum3 = outer1_17(outer1_16(sum3 ^ outer1_17(outer1_16(outer1_17(outer1_15(tmp, num) * 0x00c2b2ae3d27d4eb4fn), 31n) * 0x009e3779b185ebca87n), 27n) * 0x009e3779b185ebca87n + 0x0085ebca77c2b2ae63n);
          num = num + 8;
          tmp22 = sum3;
          num2 = num;
          diff = tmp2 - 8;
        } while (num <= diff);
      }
      const sum4 = num2 + 4;
      let sum5 = num2;
      let tmp29 = tmp22;
      if (sum4 <= tmp2) {
        const bigint10 = 23n;
        const bigint11 = 1609587929392839161n;
        tmp29 = outer1_17(outer1_16(tmp22 ^ outer1_17(outer1_14(tmp[num2 + 1] << 8 | tmp[num2], tmp[num2 + 3] << 8 | tmp[num2 + 2], 0, 0) * 0x009e3779b185ebca87n), 23n) * 0x00c2b2ae3d27d4eb4fn + 1609587929392839161n);
        sum5 = sum4;
      }
      let tmp33 = tmp29;
      let tmp34 = tmp29;
      if (sum5 < tmp2) {
        do {
          let tmp35 = outer1_17;
          let tmp36 = outer1_16;
          let tmp37 = outer1_14;
          let tmp38 = +sum5;
          sum5 = tmp38 + 1;
          let num8 = 0;
          let num9 = 0;
          let num10 = 0;
          tmp33 = outer1_17(outer1_16(tmp33 ^ outer1_17(outer1_14(tmp[tmp38], 0, 0, 0) * 2870177450012600261n), 11n) * 0x009e3779b185ebca87n);
          tmp34 = tmp33;
        } while (sum5 < tmp2);
      }
      const tmp39 = outer1_17((tmp34 ^ outer1_17(tmp34 >> 33n)) * 0x00c2b2ae3d27d4eb4fn);
      const tmp40 = outer1_17((tmp39 ^ outer1_17(tmp39 >> 29n)) * 1609587929392839161n);
      return outer1_17(tmp40 ^ outer1_17(tmp40 >> 32n));
    }
  };
  items[2] = obj;
  return callback(XXH64, items);
})();
let closure_13 = tmp4;

export const XXH64 = tmp4;
export const hash = function hash(arg0) {
  let tmp = closure_13;
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  tmp = new tmp(num);
  return tmp.update(arg0).digest();
};

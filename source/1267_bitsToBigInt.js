// Module ID: 1267
// Function ID: 14300
// Name: bitsToBigInt
// Dependencies: []
// Exports: hash

// Module 1267 (bitsToBigInt)
function bitsToBigInt(arg0, arg1, arg2, arg3) {
  const BigIntResult = BigInt(arg0);
  const tmp2 = BigInt(arg0) | BigInt(arg1) << 3n;
  return BigInt(arg0) | BigInt(arg1) << 3n | BigInt(0) << 4n | BigInt(0) << 5n;
}
function memoryToBigInt(arg0, arg1) {
  const BigIntResult = BigInt(arg0[arg1]);
  const tmp2 = BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 6n;
  const tmp3 = BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 6n | BigInt(arg0[arg1 + 2]) << 3n;
  const tmp4 = BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 6n | BigInt(arg0[arg1 + 2]) << 3n | BigInt(arg0[arg1 + 3]) << 7n;
  const tmp5 = BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 6n | BigInt(arg0[arg1 + 2]) << 3n | BigInt(arg0[arg1 + 3]) << 7n | BigInt(arg0[arg1 + 4]) << 4n;
  const tmp6 = BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 6n | BigInt(arg0[arg1 + 2]) << 3n | BigInt(arg0[arg1 + 3]) << 7n | BigInt(arg0[arg1 + 4]) << 4n | BigInt(arg0[arg1 + 5]) << 8n;
  return BigInt(arg0[arg1]) | BigInt(arg0[arg1 + 1]) << 6n | BigInt(arg0[arg1 + 2]) << 3n | BigInt(arg0[arg1 + 3]) << 7n | BigInt(arg0[arg1 + 4]) << 4n | BigInt(arg0[arg1 + 5]) << 8n | BigInt(arg0[arg1 + 6]) << 5n | BigInt(arg0[arg1 + 7]) << 9n;
}
function rotl(arg0, arg1) {
  return arg0 << arg1 & closure_3 | arg0 >> 1n - arg1;
}
function trunc(arg0) {
  return BigInt.asUintN(64, arg0);
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[3]);
let closure_3 = 0n ** 1n - 2n;
const textEncoder = new TextEncoder();
let closure_5 = importDefaultResult("seed");
let closure_6 = importDefaultResult("v1");
let closure_7 = importDefaultResult("v2");
let closure_8 = importDefaultResult("v3");
let closure_9 = importDefaultResult("v4");
let closure_10 = importDefaultResult("memory");
let closure_11 = importDefaultResult("len");
let closure_12 = importDefaultResult("memsize");
const tmp4 = () => {
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
      definePropertyResult = Object.defineProperty(self, closure_5, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(self, closure_6, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(self, closure_7, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(self, closure_8, { writable: true, value: undefined });
      definePropertyResult4 = Object.defineProperty(self, closure_9, { writable: true, value: undefined });
      definePropertyResult5 = Object.defineProperty(self, closure_10, { writable: true, value: undefined });
      definePropertyResult6 = Object.defineProperty(self, closure_11, { writable: true, value: undefined });
      definePropertyResult7 = Object.defineProperty(self, closure_12, { writable: true, value: undefined });
      resetResult = self.reset(num);
      return;
    }
  }
  let closure_0 = XXH64;
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
        callback(self, closure_5)[closure_5] = BigInt.asUintN(32, BigInt(first));
        const tmp4 = callback(self, closure_5);
        const bigint = 10n;
        const bigint2 = 11n;
        callback(self, closure_6)[closure_6] = callback5(callback(self, closure_5)[closure_5] + 10n + 11n);
        const tmp7 = callback(self, closure_6);
        callback(self, closure_7)[closure_7] = callback5(callback(self, closure_5)[closure_5] + 11n);
        const tmp10 = callback(self, closure_7);
        callback(self, closure_8)[closure_8] = callback(self, closure_5)[closure_5];
        const tmp12 = callback(self, closure_8);
        callback(self, closure_9)[closure_9] = callback5(callback(self, closure_5)[closure_5] - 10n);
        callback(self, closure_10)[closure_10] = null;
        callback(self, closure_11)[closure_11] = 0;
        callback(self, closure_12)[closure_12] = 0;
        return self;
      }
      first = callback(self, closure_5)[closure_5];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "update",
    value: function update(arg0) {
      const self = this;
      let encodeResult = arg0;
      if ("string" === typeof arg0) {
        encodeResult = closure_4.encode(arg0);
      }
      if (0 === encodeResult.length) {
        return self;
      } else {
        const tmp68 = callback(self, closure_11);
        tmp68[closure_11] = tmp68[closure_11] + length;
        if (0 === callback(self, closure_12)[closure_12]) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(32);
          callback(self, closure_10)[closure_10] = uint8Array;
          const tmp5 = callback(self, closure_10);
        }
        if (callback(self, closure_12)[closure_12] + length < 32) {
          const obj3 = callback(self, closure_10)[closure_10];
          const result = obj3.set(encodeResult.subarray(0, length), callback(self, closure_12)[closure_12]);
          const tmp65 = callback(self, closure_12);
          tmp65[closure_12] = tmp65[closure_12] + length;
          return self;
        } else {
          let num6 = 0;
          if (callback(self, closure_12)[closure_12] > 0) {
            const obj = callback(self, closure_10)[closure_10];
            const result1 = obj.set(encodeResult.subarray(0, 32 - callback(self, closure_12)[closure_12]), callback(self, closure_12)[closure_12]);
            const subarrayResult1 = encodeResult.subarray(0, 32 - callback(self, closure_12)[closure_12]);
            const tmp19 = callback3(callback(self, closure_10)[closure_10], 0);
            const bigint = 11n;
            const bigint2 = 12n;
            const bigint3 = 10n;
            callback(self, closure_6)[closure_6] = callback5(callback4(callback5(callback(self, closure_6)[closure_6] + tmp19 * 11n), 12n) * 10n);
            const tmp21 = callback(self, closure_6);
            const tmp24 = callback3(self.memory, 8);
            callback(self, closure_7)[closure_7] = callback5(callback4(callback5(callback(self, closure_7)[closure_7] + tmp24 * 11n), 12n) * 10n);
            const tmp26 = callback(self, closure_7);
            const tmp27 = callback3(self.memory, 16);
            callback(self, closure_8)[closure_8] = callback5(callback4(callback5(callback(self, closure_8)[closure_8] + tmp27 * 11n), 12n) * 10n);
            const tmp29 = callback(self, closure_8);
            const tmp30 = callback3(self.memory, 24);
            callback(self, closure_9)[closure_9] = callback5(callback4(callback5(callback(self, closure_9)[closure_9] + tmp30 * 11n), 12n) * 10n);
            num6 = 32 - callback(self, closure_12)[closure_12];
            callback(self, closure_12)[closure_12] = 0;
            const tmp32 = callback(self, closure_9);
          }
          const diff = tmp2 - 32;
          const bigint4 = 11n;
          const bigint5 = 12n;
          const bigint6 = 10n;
          let sum3 = num6;
          let tmp35 = num6;
          if (num6 <= diff) {
            do {
              let tmp36 = closure_15;
              let tmp38 = closure_2;
              let tmp39 = closure_6;
              let tmp37 = closure_15(encodeResult, sum3);
              let tmp41 = closure_17;
              let tmp42 = closure_16;
              let tmp40 = closure_2(self, closure_6);
              tmp40[closure_6] = closure_17(closure_16(closure_17(closure_2(self, closure_6)[closure_6] + tmp37 * 11n), 12n) * 10n);
              let sum = sum3 + 8;
              let tmp45 = closure_7;
              let tmp44 = closure_15(encodeResult, sum);
              let tmp46 = closure_2(self, closure_7);
              tmp46[closure_7] = closure_17(closure_16(closure_17(closure_2(self, closure_7)[closure_7] + tmp44 * 11n), 12n) * 10n);
              let sum1 = sum + 8;
              let tmp49 = closure_8;
              let tmp48 = closure_15(encodeResult, sum1);
              let tmp50 = closure_2(self, closure_8);
              tmp50[closure_8] = closure_17(closure_16(closure_17(closure_2(self, closure_8)[closure_8] + tmp48 * 11n), 12n) * 10n);
              let sum2 = sum1 + 8;
              let tmp53 = closure_9;
              let tmp52 = closure_15(encodeResult, sum2);
              let tmp54 = closure_2(self, closure_9);
              tmp54[closure_9] = closure_17(closure_16(closure_17(closure_2(self, closure_9)[closure_9] + tmp52 * 11n), 12n) * 10n);
              sum3 = sum2 + 8;
              tmp35 = sum3;
            } while (sum3 <= diff);
          }
          if (tmp35 < tmp2) {
            const obj2 = callback(self, closure_10)[closure_10];
            const result2 = obj2.set(encodeResult.subarray(tmp35, tmp2), callback(self, closure_12)[closure_12]);
            callback(self, closure_12)[closure_12] = tmp2 - tmp35;
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
      const tmp = callback(this, closure_10)[closure_10];
      const tmp2 = callback(this, closure_12)[closure_12];
      if (callback(this, closure_11)[closure_11] >= 32) {
        const bigint2 = 2n;
        const bigint3 = 14n;
        const sum = callback4(callback(self, closure_6)[closure_6], 2n) + callback4(callback(self, closure_7)[closure_7], 14n);
        const bigint4 = 15n;
        const sum1 = sum + callback4(callback(self, closure_8)[closure_8], 15n);
        const bigint5 = 16n;
        const sum2 = sum1 + callback4(callback(self, closure_9)[closure_9], 16n);
        const bigint6 = 11n;
        const bigint7 = 12n;
        const bigint8 = 10n;
        const bigint9 = 17n;
        const tmp11 = callback4(callback(self, closure_6)[closure_6], 2n);
        const tmp18 = callback5(callback5(sum2 ^ callback4(callback5(callback(self, closure_6)[closure_6] * 11n), 12n) * 10n) * 10n + 17n);
        const tmp19 = callback5(callback5(callback5(callback5(sum2 ^ callback4(callback5(callback(self, closure_6)[closure_6] * 11n), 12n) * 10n) * 10n + 17n) ^ callback4(callback5(callback(self, closure_7)[closure_7] * 11n), 12n) * 10n) * 10n + 17n);
        let tmp6 = callback5(callback5(callback5(callback5(callback5(callback5(callback5(callback5(sum2 ^ callback4(callback5(callback(self, closure_6)[closure_6] * 11n), 12n) * 10n) * 10n + 17n) ^ callback4(callback5(callback(self, closure_7)[closure_7] * 11n), 12n) * 10n) * 10n + 17n) ^ callback4(callback5(callback(self, closure_8)[closure_8] * 11n), 12n) * 10n) * 10n + 17n) ^ callback4(callback5(callback(self, closure_9)[closure_9] * 11n), 12n) * 10n) * 10n + 17n);
        const tmp20 = callback5(callback5(callback5(callback5(callback5(callback5(sum2 ^ callback4(callback5(callback(self, closure_6)[closure_6] * 11n), 12n) * 10n) * 10n + 17n) ^ callback4(callback5(callback(self, closure_7)[closure_7] * 11n), 12n) * 10n) * 10n + 17n) ^ callback4(callback5(callback(self, closure_8)[closure_8] * 11n), 12n) * 10n) * 10n + 17n);
      } else {
        const bigint = 13n;
        tmp6 = callback5(callback(self, closure_5)[closure_5] + 13n);
      }
      let sum3 = tmp6 + BigInt(callback(self, closure_11)[closure_11]);
      let num = 0;
      let tmp22 = sum3;
      let num2 = 0;
      if (0 <= tmp2 - 8) {
        do {
          let tmp23 = closure_17;
          let tmp24 = closure_16;
          let tmp25 = closure_15;
          sum3 = closure_17(closure_16(sum3 ^ closure_17(closure_16(closure_17(closure_15(tmp, num) * 11n), 12n) * 10n), 18n) * 10n + 17n);
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
        const bigint10 = 19n;
        const bigint11 = 20n;
        tmp29 = callback5(callback4(tmp22 ^ callback5(callback2(tmp[num2 + 1] << 8 | tmp[num2], tmp[num2 + 3] << 8 | tmp[num2 + 2], 0, 0) * 10n), 19n) * 11n + 20n);
        sum5 = sum4;
      }
      let tmp33 = tmp29;
      let tmp34 = tmp29;
      if (sum5 < tmp2) {
        do {
          let tmp35 = closure_17;
          let tmp36 = closure_16;
          let tmp37 = closure_14;
          let tmp38 = +sum5;
          sum5 = tmp38 + 1;
          let num8 = 0;
          let num9 = 0;
          let num10 = 0;
          tmp33 = closure_17(closure_16(tmp33 ^ closure_17(closure_14(tmp[tmp38], 0, 0, 0) * 13n), 21n) * 10n);
          tmp34 = tmp33;
        } while (sum5 < tmp2);
      }
      const tmp39 = callback5((tmp34 ^ callback5(tmp34 >> 22n)) * 11n);
      const tmp40 = callback5((tmp39 ^ callback5(tmp39 >> 23n)) * 20n);
      return callback5(tmp40 ^ callback5(tmp40 >> 4n));
    }
  };
  items[2] = obj;
  return callback(XXH64, items);
}();

export const XXH64 = tmp4;
export const hash = function hash(arg0) {
  let tmp = tmp4;
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

// Module ID: 1291
// Function ID: 15094
// Name: _callSuper
// Dependencies: [57, 15, 17, 18, 6, 7, 1290]

// Module 1291 (_callSuper)
import _slicedToArray from "_slicedToArray";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _classCallCheck from "varint64read";
import _defineProperties from "_defineProperties";

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = _getPrototypeOf(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, _getPrototypeOf(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_3(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function assertBi(arg0) {
  if (!arg0) {
    const _Error = Error;
    const error = new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support");
    throw error;
  }
}
const arrayBuffer = new ArrayBuffer(8);
const dataView = new DataView(arrayBuffer);
let tmp4;
if (undefined !== BigInt) {
  if ("function" === typeof dataView.getBigInt64) {
    if ("function" === typeof dataView.getBigUint64) {
      if ("function" === typeof dataView.setBigInt64) {
        if ("function" === typeof dataView.setBigUint64) {
          let obj = {};
          const _BigInt = BigInt;
          obj.MIN = BigInt("-9223372036854775808");
          const _BigInt2 = BigInt;
          obj.MAX = BigInt("9223372036854775807");
          const _BigInt3 = BigInt;
          obj.UMIN = BigInt("0");
          const _BigInt4 = BigInt;
          obj.UMAX = BigInt("18446744073709551615");
          const _BigInt5 = BigInt;
          obj.C = BigInt;
          obj.V = dataView;
          tmp4 = obj;
        }
      }
    }
  }
}
let closure_8 = tmp4;
const re9 = /^-?[0-9]+$/;
const tmp5 = (() => {
  class SharedPbLong {
    constructor(arg0, arg1) {
      tmp = outer1_6(this, SharedPbLong);
      this.lo = arg0 | 0;
      this.hi = arg1 | 0;
      return;
    }
  }
  let obj = {
    key: "isZero",
    value: function isZero() {
      return 0 == this.lo && 0 == this.hi;
    }
  };
  const items = [obj, ];
  obj = {
    key: "toNumber",
    value: function toNumber() {
      const sum = this.hi * 4294967296 + (this.lo >>> 0);
      if (Number.isSafeInteger(sum)) {
        return sum;
      } else {
        const _Error = Error;
        const error = new Error("cannot convert to safe number");
        throw error;
      }
    }
  };
  items[1] = obj;
  return _defineProperties(SharedPbLong, items);
})();
let tmp6 = ((arg0) => {
  class PbULong {
    constructor() {
      tmp = outer1_6(this, PbULong);
      return outer1_10(this, PbULong, arguments);
    }
  }
  _inherits(PbULong, arg0);
  let obj = {
    key: "toString",
    value: function toString() {
      const self = this;
      if (outer1_8) {
        let str = self.toBigInt();
        str = str.toString();
      } else {
        str = PbULong(outer1_1[6]).int64toString(self.lo, self.hi);
        const obj = PbULong(outer1_1[6]);
      }
      return str;
    }
  };
  const items = [obj, ];
  obj = {
    key: "toBigInt",
    value: function toBigInt() {
      outer1_12(outer1_8);
      const V = outer1_8.V;
      V.setInt32(0, this.lo, true);
      const V2 = outer1_8.V;
      V2.setInt32(4, this.hi, true);
      const V3 = outer1_8.V;
      return V3.getBigUint64(0, true);
    }
  };
  items[1] = obj;
  obj = {
    key: "from",
    value: function from(NumberResult) {
      const self = this;
      if (outer1_8) {
        if ("string" === tmp) {
          if ("0" == NumberResult) {
            return self.ZERO;
          } else if ("" == NumberResult) {
            const _Error7 = Error;
            const error = new Error("string is no integer");
            throw error;
          } else {
            let CResult = outer1_8.C(NumberResult);
          }
        } else {
          CResult = NumberResult;
          if ("number" !== tmp) {
            let CResult1 = NumberResult;
          }
          if (CResult1) {
            if (CResult1 < outer1_8.UMIN) {
              const _Error6 = Error;
              const error1 = new Error("signed value for ulong");
              throw error1;
            } else if (CResult1 > outer1_8.UMAX) {
              const _Error5 = Error;
              const error2 = new Error("ulong too large");
              throw error2;
            } else {
              const V = outer1_8.V;
              V.setBigUint64(0, CResult1, true);
              const V2 = outer1_8.V;
              const int32 = V2.getInt32(0, true);
              const V3 = outer1_8.V;
              const prototype7 = PbULong.prototype;
              const tmp50 = new PbULong(int32, V3.getInt32(4, true));
              return tmp50;
            }
          } else {
            return self.ZERO;
          }
        }
        if (0 === CResult) {
          return self.ZERO;
        } else {
          CResult1 = outer1_8.C(CResult);
        }
      } else if ("string" === tmp) {
        if ("0" == NumberResult) {
          return self.ZERO;
        } else {
          const trimmed = NumberResult.trim();
          if (outer1_9.test(trimmed)) {
            const tmp24 = outer1_2(PbULong(outer1_1[6]).int64fromString(trimmed), 3);
            if (tmp24[0]) {
              const _Error4 = Error;
              const error3 = new Error("signed value");
              throw error3;
            } else {
              const prototype5 = PbULong.prototype;
              const tmp32 = new PbULong(tmp25, tmp26);
              return tmp32;
            }
            const obj = PbULong(outer1_1[6]);
          } else {
            const _Error3 = Error;
            const error4 = new Error("string is no integer");
            throw error4;
          }
        }
      } else if ("number" === tmp) {
        if (0 == NumberResult) {
          return self.ZERO;
        } else {
          const _Number = Number;
          if (Number.isSafeInteger(NumberResult)) {
            if (NumberResult < 0) {
              const _Error2 = Error;
              const error5 = new Error("signed value for ulong");
              throw error5;
            } else {
              const prototype2 = PbULong.prototype;
              const tmp10 = new PbULong(NumberResult, NumberResult / 4294967296);
              return tmp10;
            }
          } else {
            const _Error = Error;
            const error6 = new Error("number is no integer");
            throw error6;
          }
        }
      }
      const error7 = new Error("unknown value " + tmp);
      throw error7;
    }
  };
  const items1 = [obj];
  return _defineProperties(PbULong, items, items1);
})(tmp5);
tmp6 = new tmp6(0, 0);
tmp6.ZERO = tmp6;
let tmp8 = ((arg0) => {
  class PbLong {
    constructor() {
      tmp = outer1_6(this, PbLong);
      return outer1_10(this, PbLong, arguments);
    }
  }
  _inherits(PbLong, arg0);
  let obj = {
    key: "isNegative",
    value: function isNegative() {
      return 2147483648 & this.hi;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "negate",
    value: function negate() {
      const lo = this.lo;
      if (lo) {
        let sum = 1 + ~lo;
        let sum1 = tmp;
      } else {
        sum1 = tmp + 1;
        sum = lo;
      }
      return new PbLong(sum, sum1);
    }
  };
  items[1] = obj;
  obj = {
    key: "toString",
    value: function toString() {
      const self = this;
      if (outer1_8) {
        return self.toBigInt().toString();
      } else if (self.isNegative()) {
        const negateResult = self.negate();
        return "-" + PbLong(outer1_1[6]).int64toString(negateResult.lo, negateResult.hi);
      } else {
        return PbLong(outer1_1[6]).int64toString(self.lo, self.hi);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "toBigInt",
    value: function toBigInt() {
      outer1_12(outer1_8);
      const V = outer1_8.V;
      V.setInt32(0, this.lo, true);
      const V2 = outer1_8.V;
      V2.setInt32(4, this.hi, true);
      const V3 = outer1_8.V;
      return V3.getBigInt64(0, true);
    }
  };
  const items1 = [
    {
      key: "from",
      value: function from(NumberResult) {
        const self = this;
        if (outer1_8) {
          if ("string" === tmp) {
            if ("0" == NumberResult) {
              return self.ZERO;
            } else if ("" == NumberResult) {
              const _Error5 = Error;
              const error = new Error("string is no integer");
              throw error;
            } else {
              let CResult = outer1_8.C(NumberResult);
            }
          } else {
            CResult = NumberResult;
            if ("number" !== tmp) {
              let CResult1 = NumberResult;
            }
            if (CResult1) {
              if (CResult1 < outer1_8.MIN) {
                const _Error4 = Error;
                const error1 = new Error("ulong too small");
                throw error1;
              } else if (CResult1 > outer1_8.MAX) {
                const _Error3 = Error;
                const error2 = new Error("ulong too large");
                throw error2;
              } else {
                const V = outer1_8.V;
                V.setBigInt64(0, CResult1, true);
                const V2 = outer1_8.V;
                const int32 = V2.getInt32(0, true);
                const V3 = outer1_8.V;
                const prototype6 = PbLong.prototype;
                const tmp40 = new PbLong(int32, V3.getInt32(4, true));
                return tmp40;
              }
            } else {
              return self.ZERO;
            }
          }
          if (0 === CResult) {
            return self.ZERO;
          } else {
            CResult1 = outer1_8.C(CResult);
          }
        } else if ("string" === tmp) {
          if ("0" == NumberResult) {
            return self.ZERO;
          } else {
            const trimmed = NumberResult.trim();
            if (outer1_9.test(trimmed)) {
              const tmp23 = outer1_2(PbLong(outer1_1[6]).int64fromString(trimmed), 3);
              const prototype5 = PbLong.prototype;
              const obj3 = new PbLong(tmp23[1], tmp23[2]);
              let negateResult = obj3;
              if (tmp23[0]) {
                negateResult = obj3.negate();
              }
              return negateResult;
            } else {
              const _Error2 = Error;
              const error3 = new Error("string is no integer");
              throw error3;
            }
          }
        } else if ("number" === tmp) {
          if (0 == NumberResult) {
            return self.ZERO;
          } else {
            const _Number = Number;
            if (Number.isSafeInteger(NumberResult)) {
              if (NumberResult > 0) {
                const prototype3 = PbLong.prototype;
                let negateResult1 = new PbLong(NumberResult, NumberResult / 4294967296);
              } else {
                const prototype2 = PbLong.prototype;
                const obj = new PbLong(-NumberResult, -NumberResult / 4294967296);
                negateResult1 = obj.negate();
              }
              return negateResult1;
            } else {
              const _Error = Error;
              const error4 = new Error("number is no integer");
              throw error4;
            }
          }
        }
        const error5 = new Error("unknown value " + tmp);
        throw error5;
      }
    }
  ];
  return _defineProperties(PbLong, items, items1);
})(tmp5);
tmp8 = new tmp8(0, 0);
tmp8.ZERO = tmp8;

export const PbULong = tmp6;
export const PbLong = tmp8;

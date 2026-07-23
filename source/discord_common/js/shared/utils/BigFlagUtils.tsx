// Module ID: 483
// Function ID: 6245
// Name: fromHexReverseArray
// Dependencies: [57, 6, 7, 24, 2]

// Module 483 (fromHexReverseArray)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

function fromHexReverseArray(arg0, arg1, arg2) {
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < 4) {
    num3 = num;
    while (undefined !== arg0[arg1 + num2]) {
      let num4 = 16;
      let tmp2 = num2;
      num = num + tmp * 16 ** num2;
      num2 = num2 + 1;
      num3 = num;
      if (num2 >= 4) {
        break;
      }
    }
  }
  return num3;
}
function toHexReverseArray(arg0) {
  const items = [];
  for (let num = 0; num < arg0.length; num = num + 1) {
    let _Number = Number;
    let NumberResult = Number(arg0[num]);
    let tmp2 = NumberResult;
    let num2 = 0;
    if (NumberResult) {
      while (true) {
        let tmp3 = items[num2] || 0;
        let num3 = 10;
        let sum = tmp2 + 10 * tmp3;
        let num4 = 16;
        items[num2] = sum % 16;
        let result = (sum - items[num2]) / 16;
        let sum1 = num2 + 1;
        tmp2 = result;
        num2 = sum1;
        if (result) {
          continue;
        } else {
          tmp2 = result;
          num2 = sum1;
          if (sum1 >= items.length) {
            break;
          }
        }
        continue;
      }
    } else {
      tmp2 = NumberResult;
      num2 = 0;
    }
  }
  return items;
}
let closure_5 = (() => {
  class HighLow {
    constructor(arg0, arg1) {
      tmp = outer1_3(this, HighLow);
      this.parts = arg0;
      this.str = arg1;
      return;
    }
  }
  let obj = {
    key: "and",
    value(parts) {
      parts = parts.parts;
      parts = this.parts;
      return new parts(parts.map((arg0, arg1) => arg0 & parts[arg1]));
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "or",
    value(parts) {
      parts = parts.parts;
      parts = this.parts;
      return new parts(parts.map((arg0, arg1) => arg0 | parts[arg1]));
    }
  };
  items[1] = obj;
  obj = {
    key: "xor",
    value(parts) {
      parts = parts.parts;
      parts = this.parts;
      return new parts(parts.map((arg0, arg1) => arg0 ^ parts[arg1]));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "not",
    value() {
      const parts = this.parts;
      return new HighLow(parts.map((arg0) => ~arg0));
    }
  };
  items[4] = {
    key: "equals",
    value(parts) {
      parts = parts.parts;
      parts = this.parts;
      return parts.every((arg0, arg1) => arg0 === parts[arg1]);
    }
  };
  items[5] = {
    key: "toString",
    value() {
      const self = this;
      if (null != this.str) {
        return self.str;
      } else {
        const _Array = Array;
        const array = new Array(16);
        const parts = self.parts;
        const item = parts.forEach((arg0, arg1) => {
          let num = 0;
          do {
            let num2 = tmp[3 - num];
            let tmp2 = array;
            let sum = num + 4 * arg1;
            if (!num2) {
              num2 = 0;
            }
            tmp2[sum] = num2;
            num = num + 1;
          } while (num < 4);
        });
        let str = HighLow(outer1_1[3]).fromArray(array, 16);
        str = str.toString();
        self.str = str;
        return str;
      }
    }
  };
  items[6] = {
    key: "toJSON",
    value() {
      return this.toString();
    }
  };
  const items1 = [
    {
      key: "fromString",
      value(arg0) {
        let tmp = HighLow;
        const ArrayResult = Array(4);
        let num = 0;
        do {
          let tmp5 = outer1_13;
          let diff = 3 - num;
          ArrayResult[diff] = outer1_13(tmp2, 4 * num, 4);
          num = num + 1;
        } while (num < 4);
        tmp = new tmp(ArrayResult, arg0);
        return tmp;
      }
    },
    {
      key: "fromBit",
      value(arg0) {
        const ArrayResult = Array(4);
        const rounded = Math.floor(arg0 / 16);
        let num = 0;
        do {
          let num2 = 0;
          let diff = 3 - num;
          if (num === rounded) {
            num2 = 1 << arg0 - 16 * rounded;
          }
          ArrayResult[diff] = num2;
          num = num + 1;
        } while (num < 4);
        return new HighLow(ArrayResult);
      }
    },
    {
      key: "asUintN",
      value(arg0, parts) {
        parts = parts.parts;
        let num = 0;
        if (0 < arg0) {
          let num4 = 0;
          let num5 = 0;
          num = 0;
          if (0 < 16 * parts.length) {
            const _Math = Math;
            const bound = Math.min(arg0 - num5, 16);
            const _Math2 = Math;
            const tmp4 = num4 | (parts[parts.length - Math.floor(Math, num5 / 16) - 1] & (1 << bound) - 1) << num5;
            num5 = num5 + bound;
            num = tmp4;
            while (num5 < arg0) {
              num4 = tmp4;
              num = tmp4;
              if (num5 >= 16 * parts.length) {
                break;
              }
            }
            const tmp3 = 1 << bound;
          }
        }
        return num;
      }
    }
  ];
  return callback2(HighLow, items, items1);
})();
while (true) {
  let tmp2 = flag;
  if (!flag) {
    break;
  } else {
    let _BigInt = BigInt;
    let tmp3 = null;
    tmp2 = null == BigInt.prototype.toJSON;
    break;
  }
  if (tmp2) {
    let _BigInt2 = BigInt;
    BigInt.prototype.toJSON = function() {
      return this.toString();
    };
  }
  let closure_6 = {};
  let tmp5 = flag ? ((arg0) => BigInt(arg0)) : ((arg0) => {
    let tmp = arg0;
    if (!(arg0 instanceof closure_5)) {
      let str = "number";
      str = arg0;
      if ("number" === typeof arg0) {
        str = arg0.toString();
      }
      if (null == dependencyMap[str]) {
        dependencyMap[str] = closure_5.fromString(str);
      }
      tmp = dependencyMap[str];
    }
    return tmp;
  });
  let tmp4 = flag ? ((arg0) => "bigint" === typeof arg0) : ((arg0) => arg0 instanceof closure_5);
  let tmp5Result = require("_slicedToArray");
  let closure_7 = tmp5Result;
  let tmp7 = tmp5;
  let tmp8 = flag ? (() => {
    let tmp = arg0;
    let tmp2 = arg1;
    if (arg0 === undefined) {
      tmp = closure_7;
    }
    if (tmp2 === undefined) {
      tmp2 = closure_7;
    }
    return tmp & tmp2;
  }) : (() => {
    let obj = arg0;
    let tmp = arg1;
    if (arg0 === undefined) {
      obj = closure_7;
    }
    if (tmp === undefined) {
      tmp = closure_7;
    }
    return obj.and(tmp);
  });
  let closure_8 = tmp8;
  let closure_9 = flag ? (() => {
    let tmp = arg0;
    let tmp2 = arg1;
    if (arg0 === undefined) {
      tmp = closure_7;
    }
    if (tmp2 === undefined) {
      tmp2 = closure_7;
    }
    return tmp | tmp2;
  }) : (() => {
    let obj = arg0;
    let tmp = arg1;
    if (arg0 === undefined) {
      obj = closure_7;
    }
    if (tmp === undefined) {
      tmp = closure_7;
    }
    return obj.or(tmp);
  });
  let closure_10 = flag ? (() => {
    let tmp = arg0;
    let tmp2 = arg1;
    if (arg0 === undefined) {
      tmp = closure_7;
    }
    if (tmp2 === undefined) {
      tmp2 = closure_7;
    }
    return tmp ^ tmp2;
  }) : (() => {
    let obj = arg0;
    let tmp = arg1;
    if (arg0 === undefined) {
      obj = closure_7;
    }
    if (tmp === undefined) {
      tmp = closure_7;
    }
    return obj.xor(tmp);
  });
  let tmp10 = flag ? ((arg0, arg1) => arg0 === arg1) : ((equals) => {
    if (null != equals) {
      if (null != arg1) {
        let equalsResult = equals.equals(arg1);
      }
      return equalsResult;
    }
    equalsResult = equals == arg1;
  });
  let closure_11 = tmp10;
  let tmp11 = flag ? ((arg0) => BigInt(1) << BigInt(arg0)) : ((arg0) => closure_5.fromBit(arg0));
  let closure_12 = tmp11;
  let num = 4;
  let tmp13 = arg1;
  let tmp9 = flag ? (() => {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = closure_7;
    }
    return ~tmp;
  }) : (() => {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = closure_7;
    }
    return obj.not();
  });
  let tmp12 = flag ? ((arg0, arg1) => Number(BigInt.asUintN(arg0, arg1))) : ((arg0, arg1) => closure_5.asUintN(arg0, arg1));
  let obj = require("_defineProperties");
  let str = "../discord_common/js/shared/utils/BigFlagUtils.tsx";
  let result = obj.fileFinishedImporting("../discord_common/js/shared/utils/BigFlagUtils.tsx");
  exports.isBigFlag = tmp4;
  exports.deserialize = tmp5;
  exports.EMPTY_FLAG = tmp5Result;
  exports.filter = tmp8;
  exports.invert = tmp9;
  exports.equals = tmp10;
  exports.combine = function combine(arg0) {
    let length;
    const items = [...arguments];
    let first = items[0];
    let num = 1;
    let tmp2 = first;
    if (1 < items.length) {
      do {
        let tmp3 = callback3;
        first = callback3(first, items[num]);
        num = num + 1;
        tmp2 = first;
        length = items.length;
      } while (num < length);
    }
    return tmp2;
  };
  exports.has = function has(arg0, arg1) {
    return tmp10(tmp8(arg0, arg1), arg1);
  };
  exports.hasAny = function hasAny(permissions, closure_10) {
    return !tmp10(tmp8(permissions, closure_10), closure_7);
  };
  exports.add = function add(arg0, arg1) {
    let tmp = arg0;
    if (arg1 !== closure_7) {
      tmp = callback3(arg0, arg1);
    }
    return tmp;
  };
  exports.remove = function remove(arg0, arg1) {
    let tmp = arg0;
    if (arg1 !== closure_7) {
      tmp = callback4(arg0, tmp8(arg0, arg1));
    }
    return tmp;
  };
  exports.getFlag = tmp11;
  exports.asUintN = tmp12;
  exports.getBrandedFlag = function getBrandedFlag(arg0) {
    return tmp11(arg0);
  };
  exports.flagNameOf = function flagNameOf(arg0, arg1) {
    const entries = Object.entries(arg1);
    let num = 0;
    if (0 < entries.length) {
      const tmp2 = callback(entries[num], 2);
      while (!tmp10(arg0, tmp2[1])) {
        num = num + 1;
      }
      return tmp2[0];
    }
  };
}

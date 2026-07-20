// Module ID: 23
// Function ID: 951
// Name: extractTimestamp
// Dependencies: []
// Exports: age, atNextMillisecond, atPreviousMillisecond, compare, fromTimestampWithSequence, isProbablyAValidSnowflake

// Module 23 (extractTimestamp)
function extractTimestamp(arg0) {
  return Math.floor(Number(arg0) / 4194304) + closure_4;
}
function fromTimestamp(arg0) {
  const diff = arg0 - closure_4;
  let str = "0";
  if (diff > 0) {
    const obj = importDefault(dependencyMap[2])(diff);
    str = importDefault(dependencyMap[2])(diff).shiftLeft(22).toString();
    const str2 = importDefault(dependencyMap[2])(diff).shiftLeft(22);
  }
  return str;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = 1420070400000;
const tmp2 = () => {
  class SnowflakeSequence {
    constructor() {
      tmp = closure_2(this, SnowflakeSequence);
      this.seq = 0;
      return;
    }
  }
  const importDefault = SnowflakeSequence;
  let obj = {
    key: "next",
    value() {
      const self = this;
      if (this.seq > 4095) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Snowflake sequence number overflow: " + self.seq);
        throw error;
      } else {
        self.seq = +self.seq + 1;
        return +self.seq;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "willOverflowNext",
    value() {
      return this.seq > 4095;
    }
  };
  items[1] = obj;
  obj = {
    key: "reset",
    value() {
      this.seq = 0;
    }
  };
  items[2] = obj;
  return callback(SnowflakeSequence, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/shared/utils/SnowflakeUtils.tsx");

export const DISCORD_EPOCH = 1420070400000;
export const MAX_SNOWFLAKE_SEQ = 4095;
export { extractTimestamp };
export { fromTimestamp };
export const fromTimestampWithSequence = function fromTimestampWithSequence(arg0, next) {
  const diff = arg0 - closure_4;
  let num = 0;
  if (diff > 0) {
    num = diff;
  }
  const tmp2 = importDefault(dependencyMap[2]);
  const tmp2Result = importDefault(dependencyMap[2])(num);
  const shiftLeftResult = importDefault(dependencyMap[2])(num).shiftLeft(22);
  return importDefault(dependencyMap[2])(num).shiftLeft(22).add(next.next()).toString();
};
export const atPreviousMillisecond = function atPreviousMillisecond(arg0) {
  return fromTimestamp(extractTimestamp(arg0) - 1);
};
export const atNextMillisecond = function atNextMillisecond(arg0) {
  return fromTimestamp(extractTimestamp(arg0) + 1);
};
export const age = function age(arg0) {
  const timestamp = Date.now();
  return timestamp - extractTimestamp(arg0);
};
export const compare = function compare(arg0, arg1) {
  let num = 0;
  if (arg0 !== arg1) {
    let num3 = 1;
    if (null != arg1) {
      let num4 = -1;
      let num5 = -1;
      if (null != arg0) {
        let num6 = 1;
        if (arg0.length <= arg1.length) {
          let tmp2 = num4;
          if (arg0.length >= arg1.length) {
            if (arg0 > arg1) {
              num4 = 1;
            }
            tmp2 = num4;
          }
          num6 = tmp2;
        }
        num5 = num6;
      }
      num3 = num5;
    }
    num = num3;
  }
  return num;
};
export const isProbablyAValidSnowflake = function isProbablyAValidSnowflake(arg0) {
  if (null == arg0) {
    return false;
  } else {
    if (obj.test(tmp)) {
      return extractTimestamp(tmp) >= closure_4;
    } else {
      return false;
    }
    const obj = /^\d{17,19}$/;
  }
};
export const SnowflakeSequence = tmp2;

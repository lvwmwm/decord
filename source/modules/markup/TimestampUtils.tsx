// Module ID: 4587
// Function ID: 40211
// Name: formatTimestampMention
// Dependencies: [3800, 3712, 664, 2]
// Exports: parseTimestamp, unparseTimestamp

// Module 4587 (formatTimestampMention)
function formatTimestampMention(arg0) {
  let format;
  let timestamp;
  ({ timestamp, format } = arg0);
  const tmp = importDefault(3712);
  const tmpResult = tmp(Number(timestamp) * importDefault(664).Millis.SECOND);
  if (tmpResult.isValid()) {
    let f;
    if (null != format) {
      f = obj[format];
    }
    if (null == f) {
      f = obj.f;
    }
    obj = { timestamp, format, parsed: tmpResult };
    obj.full = obj.F(tmpResult);
    obj.formatted = f(tmpResult);
    return obj;
  } else {
    return null;
  }
  const NumberResult = Number(timestamp);
}
let obj = {
  t(date) {
    return require(3800) /* resetCache */.dateFormat(date, "LT");
  },
  T(date) {
    return require(3800) /* resetCache */.dateFormat(date, "LTS");
  },
  d(date) {
    return require(3800) /* resetCache */.dateFormat(date, "L");
  },
  D(date) {
    return require(3800) /* resetCache */.dateFormat(date, "LL");
  },
  f(date) {
    return require(3800) /* resetCache */.dateFormat(date, "LLL");
  },
  F(date) {
    return require(3800) /* resetCache */.dateFormat(date, "LLLL");
  },
  s(date) {
    return require(3800) /* resetCache */.dateFormat(date, "L LT");
  },
  S(date) {
    return require(3800) /* resetCache */.dateFormat(date, "L LTS");
  },
  R(toDate) {
    const result = importDefault(3712).relativeTimeThreshold("s");
    const obj = importDefault(3712);
    const result1 = importDefault(3712).relativeTimeThreshold("s", 60);
    const obj2 = importDefault(3712);
    const result2 = importDefault(3712).relativeTimeThreshold("ss");
    const obj3 = importDefault(3712);
    const result3 = importDefault(3712).relativeTimeThreshold("ss", -1);
    const obj4 = importDefault(3712);
    const result4 = importDefault(3712).relativeTimeThreshold("m");
    const obj5 = importDefault(3712);
    const result5 = importDefault(3712).relativeTimeThreshold("m", 60);
    const obj6 = importDefault(3712);
    const tmp7 = importDefault(3712);
    const fromNowResult = importDefault(3712)(toDate.toDate()).fromNow();
    while (true) {
      let tmp9 = importDefault;
      let tmp10 = dependencyMap;
      let obj8 = importDefault(3712);
      let result6 = obj8.relativeTimeThreshold("s", result);
      let obj9 = importDefault(3712);
      let result7 = obj9.relativeTimeThreshold("ss", result2);
      let obj10 = importDefault(3712);
      let result8 = obj10.relativeTimeThreshold("m", result4);
      let tmp14 = fromNowResult;
      if (null != fromNowResult) {
        let fromNowResult1 = fromNowResult;
      } else {
        let tmp15 = importDefault;
        let tmp16 = dependencyMap;
        let tmp18 = toDate;
        let tmp17 = importDefault(3712);
        let tmp17Result = tmp17(toDate.toDate());
        fromNowResult1 = tmp17Result.fromNow();
      }
      return fromNowResult1;
    }
  }
};
Object.setPrototypeOf(obj, null);
const keys = Object.keys(obj);
const regExp = new RegExp("^<t:(-?\\d{1,17})(?::(" + keys.join("|") + "))?>");
let result = require("set").fileFinishedImporting("modules/markup/TimestampUtils.tsx");

export const TIMESTAMP_FORMATS = obj;
export const DEFAULT_TIMESTAMP_FORMAT = "f";
export const TIMESTAMP_REGEX = regExp;
export { formatTimestampMention };
export const parseTimestamp = function parseTimestamp(timestamp, format) {
  return formatTimestampMention({ timestamp, format });
};
export const unparseTimestamp = function unparseTimestamp(arg0, arg1) {
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "<t:" + arg0 + ":" + arg1 + ">";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "<t:" + arg0 + ">";
  }
  return combined;
};

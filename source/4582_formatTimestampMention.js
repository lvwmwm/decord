// Module ID: 4582
// Function ID: 40119
// Name: formatTimestampMention
// Dependencies: []
// Exports: parseTimestamp, unparseTimestamp

// Module 4582 (formatTimestampMention)
function formatTimestampMention(arg0) {
  let format;
  let timestamp;
  ({ timestamp, format } = arg0);
  const tmp = importDefault(dependencyMap[1]);
  const tmpResult = tmp(Number(timestamp) * importDefault(dependencyMap[2]).Millis.SECOND);
  if (tmpResult.isValid()) {
    let f;
    if (null != format) {
      f = obj[format];
    }
    if (null == f) {
      f = obj.f;
    }
    const obj = { timestamp, format, parsed: tmpResult };
    obj.full = obj.F(tmpResult);
    obj.formatted = f(tmpResult);
    return obj;
  } else {
    return null;
  }
  const NumberResult = Number(timestamp);
}
const obj = {
  t(date) {
    return require(dependencyMap[0]).dateFormat(date, "LT");
  },
  T(date) {
    return require(dependencyMap[0]).dateFormat(date, "LTS");
  },
  d(date) {
    return require(dependencyMap[0]).dateFormat(date, "L");
  },
  D(date) {
    return require(dependencyMap[0]).dateFormat(date, "LL");
  },
  f(date) {
    return require(dependencyMap[0]).dateFormat(date, "LLL");
  },
  F(date) {
    return require(dependencyMap[0]).dateFormat(date, "LLLL");
  },
  s(date) {
    return require(dependencyMap[0]).dateFormat(date, "L LT");
  },
  S(date) {
    return require(dependencyMap[0]).dateFormat(date, "L LTS");
  },
  R(toDate) {
    const result = importDefault(dependencyMap[1]).relativeTimeThreshold("s");
    const obj = importDefault(dependencyMap[1]);
    const result1 = importDefault(dependencyMap[1]).relativeTimeThreshold("s", 60);
    const obj2 = importDefault(dependencyMap[1]);
    const result2 = importDefault(dependencyMap[1]).relativeTimeThreshold("ss");
    const obj3 = importDefault(dependencyMap[1]);
    const result3 = importDefault(dependencyMap[1]).relativeTimeThreshold("ss", -1);
    const obj4 = importDefault(dependencyMap[1]);
    const result4 = importDefault(dependencyMap[1]).relativeTimeThreshold("m");
    const obj5 = importDefault(dependencyMap[1]);
    const result5 = importDefault(dependencyMap[1]).relativeTimeThreshold("m", 60);
    const obj6 = importDefault(dependencyMap[1]);
    const tmp7 = importDefault(dependencyMap[1]);
    const fromNowResult = importDefault(dependencyMap[1])(toDate.toDate()).fromNow();
    while (true) {
      let tmp9 = importDefault;
      let tmp10 = dependencyMap;
      let obj8 = importDefault(dependencyMap[1]);
      let result6 = obj8.relativeTimeThreshold("s", result);
      let obj9 = importDefault(dependencyMap[1]);
      let result7 = obj9.relativeTimeThreshold("ss", result2);
      let obj10 = importDefault(dependencyMap[1]);
      let result8 = obj10.relativeTimeThreshold("m", result4);
      let tmp14 = fromNowResult;
      if (null != fromNowResult) {
        let fromNowResult1 = fromNowResult;
      } else {
        let tmp15 = importDefault;
        let tmp16 = dependencyMap;
        let tmp18 = toDate;
        let tmp17 = importDefault(dependencyMap[1]);
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
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/markup/TimestampUtils.tsx");

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

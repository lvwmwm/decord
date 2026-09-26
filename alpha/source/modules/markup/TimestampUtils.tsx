// Module ID: 5330
// Function ID: 5331
// Name: TimestampUtils
// Dependencies: [4512, 4421, 1091, 2]
// Exports: formatTimestampMention, parseTimestamp, unparseTimestamp

// Module 5330 (TimestampUtils)
import DurationsDefault from "Durations" /* 1091 */;
import _modDef4421 from "module_4421" /* 4421 */;
import DateUtils from "DateUtils" /* 4512 */;
import size from "module_2" /* 2 */;

const TIMESTAMP_FORMATS = {
  t(date) {
    return DateUtils.dateFormat(date, "LT");
  },
  T(date) {
    return DateUtils.dateFormat(date, "LTS");
  },
  d(date) {
    return DateUtils.dateFormat(date, "L");
  },
  D(date) {
    return DateUtils.dateFormat(date, "LL");
  },
  f(date) {
    return DateUtils.dateFormat(date, "LLL");
  },
  F(date) {
    return DateUtils.dateFormat(date, "LLLL");
  },
  s(date) {
    return DateUtils.dateFormat(date, "L LT");
  },
  S(date) {
    return DateUtils.dateFormat(date, "L LTS");
  },
  R(toDate) {
    const result = _modDef4421.relativeTimeThreshold("s");
    const result1 = _modDef4421.relativeTimeThreshold("s", 60);
    const result2 = _modDef4421.relativeTimeThreshold("ss");
    const result3 = _modDef4421.relativeTimeThreshold("ss", -1);
    const result4 = _modDef4421.relativeTimeThreshold("m");
    const result5 = _modDef4421.relativeTimeThreshold("m", 60);
    try {
      const tmpResult = tmp(4421);
      let fromNowResult = tmp(4421)(toDate.toDate()).fromNow();
      const tmpResultResult = tmp(4421)(toDate.toDate());
      const result6 = tmp(4421).relativeTimeThreshold("s", result);
      const tmpResult5 = tmp(4421);
      const result7 = tmp(4421).relativeTimeThreshold("ss", result2);
      const tmpResult6 = tmp(4421);
      const result8 = tmp(4421).relativeTimeThreshold("m", result4);
      if (fromNowResult == null) {
        const tmpResult8 = tmp(4421);
        fromNowResult = tmp(4421)(toDate.toDate()).fromNow();
        const tmpResult4Result = tmp(4421)(toDate.toDate());
      }
      return fromNowResult;
    } catch (err) {
    }
  }
};
Object.setPrototypeOf(TIMESTAMP_FORMATS, null);
const keys = Object.keys(TIMESTAMP_FORMATS);
const regExp = new RegExp("^<t:(-?\\d{1,17})(?::(" + keys.join("|") + "))?>");
let result = size.fileFinishedImporting("modules/markup/TimestampUtils.tsx");

export { TIMESTAMP_FORMATS };
export const DEFAULT_TIMESTAMP_FORMAT = "f";
export const TIMESTAMP_REGEX = regExp;
export const formatTimestampMention = function formatTimestampMention(mention) {
  ({ timestamp, format } = mention);
  const tmp = _modDef4421;
  const tmpResult = tmp(Number(timestamp) * DurationsDefault.Millis.SECOND);
  if (tmpResult.isValid()) {
    let f;
    if (null != format) {
      f = obj[format];
    }
    if (null == f) {
      f = obj.f;
    }
    obj = { timestamp, format, parsed: tmpResult, full: null, formatted: null };
    obj.full = obj.F(tmpResult);
    obj.formatted = f(tmpResult);
    return obj;
  } else {
    return null;
  }
  const NumberResult = Number(timestamp);
};
export const parseTimestamp = function parseTimestamp(timestamp, format) {
  const tmp = _modDef4421;
  const tmpResult = tmp(Number(timestamp) * DurationsDefault.Millis.SECOND);
  let tmp3 = null;
  if (tmpResult.isValid()) {
    let f;
    if (null != format) {
      f = obj[format];
    }
    if (null == f) {
      f = obj.f;
    }
    obj = { timestamp, format, parsed: tmpResult, full: null, formatted: null };
    obj.full = obj.F(tmpResult);
    obj.formatted = f(tmpResult);
    tmp3 = obj;
  }
  return tmp3;
};
export const unparseTimestamp = function unparseTimestamp(timestamp, format) {
  if (null != format) {
    const _HermesInternal2 = HermesInternal;
    let combined = "<t:" + timestamp + ":" + format + ">";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "<t:" + timestamp + ">";
  }
  return combined;
};

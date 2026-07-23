// Module ID: 855
// Function ID: 9603
// Name: parseRetryAfterHeader
// Dependencies: [57, 808]
// Exports: isRateLimited, updateRateLimits

// Module 855 (parseRetryAfterHeader)
import _slicedToArray from "_slicedToArray";

function parseRetryAfterHeader(arg0) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let safeDateNowResult = arguments[1];
    }
    const _parseInt = parseInt;
    const _HermesInternal = HermesInternal;
    const parsed = parseInt("" + arg0, 10);
    const _isNaN = isNaN;
    if (isNaN(parsed)) {
      const _Date = Date;
      const _HermesInternal2 = HermesInternal;
      const parsed1 = Date.parse("" + arg0);
      const _isNaN2 = isNaN;
      let num3 = 60000;
      if (!isNaN(parsed1)) {
        num3 = parsed1 - safeDateNowResult;
      }
      return num3;
    } else {
      return 1000 * parsed;
    }
  }
  safeDateNowResult = require(808) /* withRandomSafeContext */.safeDateNow();
}
function disabledUntil(all) {
  return all[arg1] || all.all || 0;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const DEFAULT_RETRY_AFTER = 60000;
export { disabledUntil };
export const isRateLimited = function isRateLimited(arg0, arg1) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let safeDateNowResult = arguments[2];
    }
    return disabledUntil(arg0, arg1) > safeDateNowResult;
  }
  safeDateNowResult = require(808) /* withRandomSafeContext */.safeDateNow();
};
export { parseRetryAfterHeader };
export const updateRateLimits = function updateRateLimits(arg0, headers) {
  headers = headers.headers;
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let safeDateNowResult = arguments[2];
    }
    const _Object = Object;
    const merged = Object.assign({}, arg0);
    let prop;
    if (null != headers) {
      prop = headers["x-sentry-rate-limits"];
    }
    if (null != headers) {
      retry_after = headers["retry-after"];
    }
    if (prop) {
      const parts = prop.trim().split(",");
      const iter = parts[Symbol.iterator]();
      const str = prop.trim();
      while (iter !== undefined) {
        let tmp34 = _slicedToArray;
        let tmp35 = _slicedToArray(str7.split(":", 5), 5);
        let str8 = tmp35[1];
        let str9 = tmp35[4];
        let _parseInt = parseInt;
        let parsed = parseInt(tmp35[0], 10);
        let tmp37 = parsed;
        let _isNaN = isNaN;
        let num9 = 60;
        if (!isNaN(parsed)) {
          num9 = parsed;
        }
        let result = 1000 * num9;
        let tmp16 = str8;
        if (str8) {
          let tmp20 = str8;
          let parts1 = str8.split(";");
          let tmp22 = parts1;
          for (const item10072 of parts1) {
            let tmp24 = "metric_bucket" === item10072;
            let tmp25 = tmp24;
            let tmp23 = item10072;
            if (tmp24) {
              tmp25 = str9;
            }
            let tmp26 = tmp25;
            if (tmp25) {
              let tmp27 = str9;
              let parts2 = str9.split(";");
              tmp26 = !parts2.includes("custom");
            }
            if (!tmp26) {
              let tmp28 = merged;
              let tmp29 = item10072;
              let tmp30 = safeDateNowResult;
              let tmp31 = result;
              merged[tmp23] = tmp3 + result;
            }
            continue;
          }
        } else {
          let tmp17 = merged;
          let tmp18 = safeDateNowResult;
          let tmp19 = result;
          merged.all = tmp3 + result;
        }
        continue;
      }
      str7 = iter.next();
    } else if (retry_after) {
      merged.all = tmp3 + parseRetryAfterHeader(retry_after, tmp3);
    } else if (429 === tmp) {
      merged.all = tmp3 + 60000;
    }
    return merged;
  }
  safeDateNowResult = require(808) /* withRandomSafeContext */.safeDateNow();
};

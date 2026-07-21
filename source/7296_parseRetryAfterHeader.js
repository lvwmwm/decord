// Module ID: 7296
// Function ID: 58865
// Name: parseRetryAfterHeader
// Dependencies: []
// Exports: isRateLimited, updateRateLimits

// Module 7296 (parseRetryAfterHeader)
function parseRetryAfterHeader(arg0) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let timestamp = arguments[1];
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
        num3 = parsed1 - timestamp;
      }
      return num3;
    } else {
      return 1000 * parsed;
    }
  }
  timestamp = Date.now();
}
function disabledUntil(all) {
  return all[arg1] || all.all || 0;
}
let closure_0 = require(dependencyMap[0]);

export const DEFAULT_RETRY_AFTER = 60000;
export { disabledUntil };
export const isRateLimited = function isRateLimited(arg0, arg1) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let timestamp = arguments[2];
    }
    return disabledUntil(arg0, arg1) > timestamp;
  }
  timestamp = Date.now();
};
export { parseRetryAfterHeader };
export const updateRateLimits = function updateRateLimits(arg0, headers) {
  headers = headers.headers;
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let timestamp = arguments[2];
    }
    const _Object = Object;
    const merged = Object.assign({}, arg0);
    let str = headers;
    if (headers) {
      str = headers.x-sentry-rate-limits;
    }
    retry-after = headers;
    if (headers) {
      retry-after = headers.retry-after;
    }
    if (str) {
      const parts = str.trim().split(",");
      const iter = parts[Symbol.iterator]();
      const str2 = str.trim();
      while (iter !== undefined) {
        let tmp32 = callback;
        let tmp33 = callback(str8.split(":", 5), 5);
        let str9 = tmp33[1];
        let str10 = tmp33[4];
        let _parseInt = parseInt;
        let parsed = parseInt(tmp33[0], 10);
        let tmp35 = parsed;
        let _isNaN = isNaN;
        let num9 = 60;
        if (!isNaN(parsed)) {
          num9 = parsed;
        }
        let result = 1000 * num9;
        let tmp14 = str9;
        if (str9) {
          let tmp18 = str9;
          let parts1 = str9.split(";");
          let tmp20 = parts1;
          for (const item10066 of parts1) {
            let tmp22 = "metric_bucket" === item10066;
            let tmp23 = tmp22;
            let tmp21 = item10066;
            if (tmp22) {
              tmp23 = str10;
            }
            let tmp24 = tmp23;
            if (tmp23) {
              let tmp25 = str10;
              let parts2 = str10.split(";");
              tmp24 = !parts2.includes("custom");
            }
            if (!tmp24) {
              let tmp26 = merged;
              let tmp27 = item10066;
              let tmp28 = timestamp;
              let tmp29 = result;
              merged[tmp21] = tmp3 + result;
            }
          }
        } else {
          let tmp15 = merged;
          let tmp16 = timestamp;
          let tmp17 = result;
          merged.all = tmp3 + result;
        }
        // continue
      }
      const str8 = iter.next();
    } else if (retry_after) {
      merged.all = tmp3 + parseRetryAfterHeader(retry_after, tmp3);
    } else if (429 === tmp) {
      merged.all = tmp3 + 60000;
    }
    return merged;
  }
  timestamp = Date.now();
};

// Module ID: 5729
// Function ID: 49247
// Name: items
// Dependencies: []
// Exports: captureOrIgnoreApiError

// Module 5729 (items)
const items = [, , ];
({ UNAUTHORIZED: arr[0], EMAIL_VERIFICATION_REQUIRED: arr[1], USER_BANNED: arr[2] } = require(dependencyMap[0]).AbortCodes);
const set = new Set([true, true, true, true]);
const set1 = new Set([]);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/errors/ErrorHandlingUtils.tsx");

export const captureOrIgnoreApiError = function captureOrIgnoreApiError(cause) {
  let tmp = null == cause;
  if (!tmp) {
    let flag = false;
    if (null != cause) {
      cause = undefined;
      if (null != cause) {
        cause = cause.cause;
      }
      let crossDomain;
      if (null != cause) {
        crossDomain = cause.crossDomain;
      }
      let tmp4 = true === crossDomain;
      if (!tmp4) {
        let tmp6 = !tmp5;
        if ("status" in cause) {
          tmp6 = "number" !== typeof cause.status;
        }
        if (!tmp6) {
          let tmp7 = 0 !== cause.status;
          if (tmp7) {
            tmp7 = !set.has(cause.status);
          }
          if (tmp7) {
            tmp7 = !set1.has(cause.status);
          }
          tmp6 = tmp7;
        }
        let tmp10 = !tmp6;
        if (tmp6) {
          let tmp12 = !tmp11;
          if ("code" in cause) {
            tmp12 = "number" !== typeof cause.code;
          }
          if (!tmp12) {
            tmp12 = !items.includes(cause.code);
          }
          let tmp14 = !tmp12;
          if (tmp12) {
            let hasItem = "body" in cause && null != cause.body;
            if (hasItem) {
              hasItem = "object" === typeof cause.body;
            }
            if (hasItem) {
              hasItem = "code" in cause.body;
            }
            if (hasItem) {
              const body = cause.body;
              let code;
              if (null != body) {
                code = body.code;
              }
              hasItem = "number" === typeof code;
            }
            if (hasItem) {
              hasItem = items.includes(cause.body.code);
            }
            tmp14 = hasItem;
          }
          tmp10 = tmp14;
        }
        tmp4 = tmp10;
      }
      flag = tmp4;
    }
    tmp = flag;
  }
  if (!tmp) {
    importDefault(dependencyMap[1]).captureException(cause);
    const obj = importDefault(dependencyMap[1]);
  }
};

// Module ID: 12323
// Function ID: 96044
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 1194, 4047, 653, 1212, 22, 2]
// Exports: default

// Module 12323 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { BUILD_OVERRIDE_TARGET_NAMES as closure_5 } from "BUILD_OVERRIDE_TARGET_NAMES";
import { PublicReleaseChannels } from "ME";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
const result = require("BUILD_OVERRIDE_TARGET_NAMES").fileFinishedImporting("modules/build_overrides/validateBuildOverride.tsx");

export default function validateBuildOverride(targetBuildOverride, closure_6) {
  let allowedVersions;
  let expiresAt;
  let releaseChannel;
  let validForUserIds;
  if (null != targetBuildOverride) {
    if (null != closure_6) {
      ({ releaseChannel, expiresAt, validForUserIds, allowedVersions } = targetBuildOverride);
      const _Object = Object;
      const keys = Object.keys(targetBuildOverride.targetBuildOverride);
      if (0 === obj13.intersection(keys, closure_6).length) {
        let obj = { valid: false };
        const intl5 = require(1212) /* getSystemLocale */.intl;
        obj = {};
        const mapped = keys.map((arg0) => {
          let str = "unknown";
          if (null != outer1_5[arg0]) {
            str = tmp;
          }
          return str;
        });
        obj.requestedTargets = mapped.join(", ");
        obj.reason = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.wySUzv, obj);
        return obj;
      } else {
        if (null != releaseChannel) {
          const _window = window;
          if (releaseChannel !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
            if (releaseChannel === PublicReleaseChannels.PTB) {
              let formatted = releaseChannel.toUpperCase();
            } else {
              const formatted1 = releaseChannel.charAt(0).toUpperCase();
              const _HermesInternal = HermesInternal;
              formatted = "" + formatted1 + releaseChannel.slice(1);
              const str5 = releaseChannel.charAt(0);
            }
            const obj1 = { valid: false };
            const intl4 = require(1212) /* getSystemLocale */.intl;
            const obj2 = { releaseChannel: formatted };
            obj1.reason = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.GOEF0C, obj2);
            return obj1;
          }
        }
        if (null != allowedVersions) {
          let flag = false;
          if (null != arg2) {
            flag = true;
            if (!allowedVersions.includes(arg2)) {
              const tmp4 = _createForOfIteratorHelperLoose(allowedVersions);
              let iter = tmp4();
              flag = false;
              if (!iter.done) {
                while (true) {
                  let str3 = iter.value;
                  let tmp5 = callback;
                  let tmp6 = callback(str3.split("."), 2);
                  if ("*" !== tmp6[1]) {
                    let iter2 = tmp4();
                    iter = iter2;
                    flag = false;
                    if (iter2.done) {
                      break;
                    }
                  } else {
                    flag = true;
                    if (tmp2 === tmp7) {
                      break;
                    }
                  }
                  break;
                }
              }
            }
          }
          if (!flag) {
            obj = { valid: false };
            const intl = require(1212) /* getSystemLocale */.intl;
            const obj3 = { releaseChannel: allowedVersions.join(", ") };
            obj.reason = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.GOEF0C, obj3);
            return obj;
          }
        }
        let time = null;
        if (null != expiresAt) {
          const _Date = Date;
          const date = new Date(expiresAt);
          time = date.getTime();
        }
        if (null != time) {
          const _Date2 = Date;
          if (time < Date.now()) {
            const obj4 = { valid: false };
            const intl3 = require(1212) /* getSystemLocale */.intl;
            obj4.reason = intl3.string(require(1212) /* getSystemLocale */.t["8eRE6S"]);
            let obj5 = obj4;
          }
          return obj5;
        }
        if (validForUserIds.length > 0) {
          if (!validForUserIds.includes(id.getId())) {
            obj5 = { valid: false };
            const intl2 = require(1212) /* getSystemLocale */.intl;
            obj5.reason = intl2.string(require(1212) /* getSystemLocale */.t.qZgV0a);
          }
        }
        const obj6 = { valid: true };
        obj5 = obj6;
      }
      obj13 = importDefault(22);
    }
  }
  const obj7 = { valid: false };
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj7.reason = intl6.string(require(1212) /* getSystemLocale */.t.d34xi4);
  return obj7;
};

// Module ID: 12178
// Function ID: 93627
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 12178 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).BUILD_OVERRIDE_TARGET_NAMES;
const PublicReleaseChannels = arg1(dependencyMap[3]).PublicReleaseChannels;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/build_overrides/validateBuildOverride.tsx");

export default function validateBuildOverride(targetBuildOverride) {
  let allowedVersions;
  let expiresAt;
  let releaseChannel;
  let validForUserIds;
  if (null != targetBuildOverride) {
    if (null != arg1) {
      ({ releaseChannel, expiresAt, validForUserIds, allowedVersions } = targetBuildOverride);
      const _Object = Object;
      const keys = Object.keys(targetBuildOverride.targetBuildOverride);
      if (0 === obj13.intersection(keys, arg1).length) {
        let obj = { valid: false };
        const intl5 = arg1(dependencyMap[4]).intl;
        obj = {};
        const mapped = keys.map((arg0) => {
          let str = "unknown";
          if (null != closure_5[arg0]) {
            str = tmp;
          }
          return str;
        });
        obj.requestedTargets = mapped.join(", ");
        obj.reason = intl5.formatToPlainString(arg1(dependencyMap[4]).t.wySUzv, obj);
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
            const intl4 = arg1(dependencyMap[4]).intl;
            const obj2 = { releaseChannel: formatted };
            obj1.reason = intl4.formatToPlainString(arg1(dependencyMap[4]).t.GOEF0C, obj2);
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
            const intl = arg1(dependencyMap[4]).intl;
            const obj3 = { releaseChannel: allowedVersions.join(", ") };
            obj.reason = intl.formatToPlainString(arg1(dependencyMap[4]).t.GOEF0C, obj3);
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
            const intl3 = arg1(dependencyMap[4]).intl;
            obj4.reason = intl3.string(arg1(dependencyMap[4]).t.8eRE6S);
            let obj5 = obj4;
          }
          return obj5;
        }
        if (validForUserIds.length > 0) {
          if (!validForUserIds.includes(id.getId())) {
            obj5 = { valid: false };
            const intl2 = arg1(dependencyMap[4]).intl;
            obj5.reason = intl2.string(arg1(dependencyMap[4]).t.qZgV0a);
          }
        }
        const obj6 = { valid: true };
        obj5 = obj6;
      }
      const obj13 = importDefault(dependencyMap[5]);
    }
  }
  const obj7 = { valid: false };
  const intl6 = arg1(dependencyMap[4]).intl;
  obj7.reason = intl6.string(arg1(dependencyMap[4]).t.d34xi4);
  return obj7;
};

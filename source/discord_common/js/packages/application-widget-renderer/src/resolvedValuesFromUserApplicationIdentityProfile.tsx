// Module ID: 12111
// Function ID: 94909
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 12029, 12112, 2]
// Exports: default

// Module 12111 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";

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
function isVisualUnfurledMedia(value) {
  let tmp = null != value.width;
  if (tmp) {
    tmp = value.width > 0;
  }
  if (tmp) {
    tmp = null != value.height;
  }
  if (tmp) {
    tmp = value.height > 0;
  }
  return tmp;
}
function resolvedValuesFromProfileTopLevel(username) {
  let obj = {};
  if (null != username.username) {
    obj = { type: require(12029) /* resolveFieldValue */.ResolvedValueType.STRING, value: username.username };
    obj.username = obj;
  }
  return obj;
}
function resolvedValuesFromPrimary(data) {
  let tmp4;
  let tmp5;
  data = data.data;
  let primary;
  if (null != data) {
    primary = data.primary;
  }
  let obj = {};
  if (null == primary) {
    return obj;
  } else {
    const _Object = Object;
    const entries = Object.entries(primary);
    for (let num = 0; num < entries.length; num = num + 1) {
      let tmp2 = callback;
      let tmp3 = callback(entries[num], 2);
      [tmp4, tmp5] = tmp3;
      let tmp6 = typeof tmp5;
      if ("string" === tmp6) {
        obj = {};
        let tmp12 = require;
        let tmp13 = dependencyMap;
        obj.type = require(12029) /* resolveFieldValue */.ResolvedValueType.STRING;
        obj.value = tmp5;
        obj[tmp4] = obj;
      } else if ("number" === tmp6) {
        obj = {};
        let tmp10 = require;
        let tmp11 = dependencyMap;
        obj.type = require(12029) /* resolveFieldValue */.ResolvedValueType.NUMBER;
        obj.value = tmp5;
        obj[tmp4] = obj;
      } else if ("object" === tmp6) {
        if ("url" in tmp5) {
          if ("proxy_url" in tmp5) {
            if ("loading_state" in tmp5) {
              let tmp7 = isVisualUnfurledMedia;
              if (isVisualUnfurledMedia(tmp5)) {
                let obj1 = {};
                let tmp8 = require;
                let tmp9 = dependencyMap;
                obj1.type = require(12029) /* resolveFieldValue */.ResolvedValueType.MEDIA;
                let obj2 = {};
                ({ proxy_url: obj3.url, width: obj3.width, height: obj3.height } = tmp5);
                obj1.media = obj2;
                obj[tmp4] = obj1;
              }
            }
          }
        }
      }
    }
    return obj;
  }
}
function resolvedValuesFromDynamic(data) {
  let iter2;
  data = data.data;
  let dynamic;
  if (null != data) {
    dynamic = data.dynamic;
  }
  let obj = {};
  if (null == dynamic) {
    return obj;
  } else {
    const tmp11 = _createForOfIteratorHelperLoose(dynamic);
    let iter3 = tmp11();
    if (!iter3.done) {
      do {
        let iter = iter3.value;
        let tmp2 = require;
        let tmp3 = dependencyMap;
        if (iter.type === require(12112) /* ProfileDataDynamicType */.ProfileDataDynamicType.STRING) {
          obj = {};
          let tmp8 = require;
          let tmp9 = dependencyMap;
          obj.type = require(12029) /* resolveFieldValue */.ResolvedValueType.STRING;
          obj.value = iter.value;
          obj[iter.name] = obj;
        } else {
          let tmp12 = require;
          let tmp13 = dependencyMap;
          if (iter.type === require(12112) /* ProfileDataDynamicType */.ProfileDataDynamicType.NUMBER) {
            obj = {};
            let tmp6 = require;
            let tmp7 = dependencyMap;
            obj.type = require(12029) /* resolveFieldValue */.ResolvedValueType.NUMBER;
            obj.value = iter.value;
            obj[iter.name] = obj;
          } else {
            let tmp14 = require;
            let tmp15 = dependencyMap;
            if (iter.type === require(12112) /* ProfileDataDynamicType */.ProfileDataDynamicType.MEDIA) {
              let tmp16 = isVisualUnfurledMedia;
              if (isVisualUnfurledMedia(iter.value)) {
                let obj1 = {};
                let tmp4 = require;
                let tmp5 = dependencyMap;
                obj1.type = require(12029) /* resolveFieldValue */.ResolvedValueType.MEDIA;
                let obj2 = { url: iter.value.proxy_url, width: iter.value.width, height: iter.value.height };
                obj1.media = obj2;
                obj[iter.name] = obj1;
              }
            }
          }
        }
        iter2 = tmp11();
        iter3 = iter2;
      } while (!iter2.done);
    }
    return obj;
  }
}
const result = require("ProfileDataDynamicType").fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/resolvedValuesFromUserApplicationIdentityProfile.tsx");

export default function resolvedValuesFromUserApplicationIdentityProfile(username) {
  if (null == username) {
    let obj = {};
  } else {
    obj = {};
    const merged = Object.assign(resolvedValuesFromProfileTopLevel(username));
    const merged1 = Object.assign(resolvedValuesFromPrimary(username));
    const merged2 = Object.assign(resolvedValuesFromDynamic(username));
  }
  return obj;
};
export const UnfurledMediaLoadingState = { UNKNOWN: 0, [0]: "UNKNOWN", LOADING: 1, [1]: "LOADING", LOADED_SUCCESS: 2, [2]: "LOADED_SUCCESS", LOADED_NOT_FOUND: 3, [3]: "LOADED_NOT_FOUND" };

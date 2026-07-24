// Module ID: 11990
// Function ID: 92695
// Name: _createForOfIteratorHelperLoose
// Dependencies: [653, 22, 2]
// Exports: getUserProfileLiveActivities, getUserProfileStackedActivityCards

// Module 11990 (_createForOfIteratorHelperLoose)
import { ActivityTypes } from "ME";

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
const result = require("set").fileFinishedImporting("modules/user_profile/utils/UserProfileStackedActivityCardUtils.tsx");

export const getUserProfileLiveActivities = function getUserProfileLiveActivities(stateFromStores) {
  return require(22) /* apply */.uniqWith(stateFromStores.filter((type) => {
    type = type.type;
    let tmp = type !== outer1_2.CUSTOM_STATUS;
    if (tmp) {
      tmp = type !== outer1_2.HANG_STATUS;
    }
    return tmp;
  }), (application_id, application_id2) => {
    let tmp = null != application_id.application_id && null != application_id2.application_id && application_id.application_id === application_id2.application_id;
    if (!tmp) {
      tmp = null != application_id.name && null != application_id2.name && application_id.name === application_id2.name;
      const tmp2 = null != application_id.name && null != application_id2.name && application_id.name === application_id2.name;
    }
    return tmp;
  });
};
export const getUserProfileStackedActivityCards = function getUserProfileStackedActivityCards(arg0) {
  let done;
  let isPrivate;
  let live;
  let stream;
  let voiceActivity;
  let voiceChannel;
  ({ stream, live } = arg0);
  if (live === undefined) {
    live = [];
  }
  ({ voiceChannel, isPrivate, voiceActivity } = arg0);
  if (isPrivate === undefined) {
    isPrivate = false;
  }
  const items = [];
  if (null != stream) {
    let obj = { type: "stream", stream };
    items.push(obj);
  }
  const tmp2 = _createForOfIteratorHelperLoose(live);
  let iter = tmp2();
  if (!iter.done) {
    do {
      obj = { type: "live", activity: iter.value };
      let arr = items.push(obj);
      let iter2 = tmp2();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  if (!isPrivate) {
    isPrivate = null != stream;
  }
  if (!isPrivate) {
    isPrivate = null != voiceActivity;
  }
  if (!isPrivate) {
    isPrivate = null == voiceChannel;
  }
  if (!isPrivate) {
    obj = { type: "voice", voiceChannel };
    items.push(obj);
  }
  return items;
};

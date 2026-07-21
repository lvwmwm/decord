// Module ID: 11951
// Function ID: 92392
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getUserProfileLiveActivities, getUserProfileStackedActivityCards

// Module 11951 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
const ActivityTypes = require(dependencyMap[0]).ActivityTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_profile/utils/UserProfileStackedActivityCardUtils.tsx");

export const getUserProfileLiveActivities = function getUserProfileLiveActivities(stateFromStores) {
  return require(dependencyMap[1]).uniqWith(stateFromStores.filter((type) => {
    type = type.type;
    let tmp = type !== constants.CUSTOM_STATUS;
    if (tmp) {
      tmp = type !== constants.HANG_STATUS;
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

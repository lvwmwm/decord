// Module ID: 14788
// Function ID: 111463
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getAffinityProperties

// Module 14788 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
function convertNullableArrayToItemAndItemIndex(arg0) {
  let iter2;
  const items = [];
  const items1 = [];
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      if (null === value) {
        let arr = items1.push(-1);
      } else {
        arr = items.push(value);
        let arr1 = items1.push(items.length - 1);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  const items2 = [items, items1];
  return items2;
}
function getItemUserId(userId) {
  userId = null;
  if ("userId" in userId) {
    userId = userId.userId;
  }
  return userId;
}
function getItemChannelId(channelId) {
  if ("channelId" in channelId) {
    channelId = channelId.channelId;
  } else if ("voiceState" in channelId) {
    const voiceState = channelId.voiceState;
    let channelId1;
    if (null != voiceState) {
      channelId1 = voiceState.channelId;
    }
    let tmp9 = null;
    if (null != channelId1) {
      tmp9 = channelId1;
    }
    channelId = tmp9;
  } else if ("stream" in channelId) {
    const stream = channelId.stream;
    let channelId2;
    if (null != stream) {
      channelId2 = stream.channelId;
    }
    let tmp6 = null;
    if (null != channelId2) {
      tmp6 = channelId2;
    }
    channelId = tmp6;
  } else {
    channelId = null;
    if ("stage" in channelId) {
      const stage = channelId.stage;
      let channel_id;
      if (null != stage) {
        channel_id = stage.channel_id;
      }
      channelId = null;
      if (null != channel_id) {
        channelId = channel_id;
      }
    }
  }
  return channelId;
}
function getUserIdProperties(arr) {
  const tmp = callback(convertNullableArrayToItemAndItemIndex(arr.map(getItemUserId)), 2);
  return { highlighted_user_ids: tmp[0], highlighted_user_ids_index: tmp[1] };
}
function getChannelIdProperties(arr) {
  const tmp = callback(convertNullableArrayToItemAndItemIndex(arr.map(getItemChannelId)), 2);
  return { destination_channel_ids: tmp[0], destination_channel_ids_index: tmp[1] };
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAnalytics.tsx");

export const getAffinityProperties = function getAffinityProperties(data) {
  const id = id.getId();
  let obj = importDefault(dependencyMap[2]);
  if (obj.extractTimestamp(id) % 25 === 0) {
    obj = {};
    const merged = Object.assign(getChannelIdProperties(data));
    const merged1 = Object.assign(getUserIdProperties(data));
  } else {
    obj = {};
  }
  return obj;
};

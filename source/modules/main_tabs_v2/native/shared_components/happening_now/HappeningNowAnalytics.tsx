// Module ID: 14969
// Function ID: 114053
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 1194, 21, 2]
// Exports: getAffinityProperties

// Module 14969 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAnalytics.tsx");

export const getAffinityProperties = function getAffinityProperties(data) {
  id = id.getId();
  let obj = importDefault(21);
  if (obj.extractTimestamp(id) % 25 === 0) {
    obj = {};
    const merged = Object.assign(getChannelIdProperties(data));
    const merged1 = Object.assign(getUserIdProperties(data));
  } else {
    obj = {};
  }
  return obj;
};

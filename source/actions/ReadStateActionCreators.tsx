// Module ID: 5069
// Function ID: 44018
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5039, 1352, 1348, 5070, 1849, 653, 686, 21, 2]
// Exports: ackChannel, ackGuildFeature, ackUserFeature, bulkAck, clearOldestUnreadMessageId, disableAutomaticAck, enableAutomaticAck, localAck

// Module 5069 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isReadableType } from "_callSuper";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { CURRENT_APP_CONTEXT } from "ME";

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
function ack(id, location, flag, flag2, id2) {
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = importDefault(686);
  obj = { type: "CHANNEL_ACK", channelId: id, messageId: id2, immediate: flag, force: flag2, context: CURRENT_APP_CONTEXT, location };
  obj.dispatch(obj);
}
function ackCategory(id, location, flag, flag2) {
  let done;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let channel;
  let mapped;
  channel = channel.getChannel(id);
  if (null != channel) {
    if (null != channel.guild_id) {
      categories = categories.getCategories(channel.guild_id);
      if (null != categories[id]) {
        const found = categories[id].filter((channel) => outer1_3(channel.channel.type));
        mapped = found.map((channel) => channel.channel.id);
        const item = found.forEach((channel) => {
          channel = channel.channel;
          let guild_id = channel.guild_id;
          if (null == guild_id) {
            guild_id = channel.guild_id;
          }
          const activeJoinedThreadsForParent = outer1_2.getActiveJoinedThreadsForParent(guild_id, channel.id);
          for (const key10011 in activeJoinedThreadsForParent) {
            let tmp3 = key10011;
            let tmp4 = mapped;
            let arr = mapped.push(key10011);
            continue;
          }
        });
        const tmp5 = _createForOfIteratorHelperLoose(mapped);
        let iter = tmp5();
        if (!iter.done) {
          do {
            let tmp6 = ack;
            let tmp7 = location;
            let tmp8 = flag;
            let tmp9 = flag2;
            let tmp10 = ack(iter.value, location, flag, flag2);
            let iter2 = tmp5();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        let arr = categories[id];
      }
    }
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/ReadStateActionCreators.tsx");

export { ack };
export { ackCategory };
export const ackChannel = function ackChannel(channel, location) {
  if (channel.isCategory()) {
    ackCategory(channel.id, location, true, true);
  } else {
    const id = channel.id;
    if (channel.isForumLikeChannel()) {
      const _Date = Date;
      tmp(id, location, true, true, importDefault(21).fromTimestamp(Date.now()));
      const obj = importDefault(21);
    } else {
      tmp(id, location, true, true);
    }
  }
};
export const bulkAck = function bulkAck(mapped, onFinished) {
  let obj = importDefault(686);
  obj = { type: "BULK_ACK", channels: mapped, context: CURRENT_APP_CONTEXT, onFinished };
  obj.dispatch(obj);
};
export const localAck = function localAck(channelId) {
  let obj = importDefault(686);
  obj = { type: "CHANNEL_LOCAL_ACK", channelId };
  obj.dispatch(obj);
};
export const enableAutomaticAck = function enableAutomaticAck(channelId, windowId) {
  let obj = importDefault(686);
  obj = { type: "ENABLE_AUTOMATIC_ACK", channelId, windowId };
  obj.dispatch(obj);
};
export const disableAutomaticAck = function disableAutomaticAck(channelId, windowId) {
  let obj = importDefault(686);
  obj = { type: "DISABLE_AUTOMATIC_ACK", channelId, windowId };
  obj.dispatch(obj);
};
export const ackGuildFeature = function ackGuildFeature(guildId, GUILD_EVENT, outer2_11) {
  let obj = importDefault(686);
  obj = { type: "GUILD_FEATURE_ACK", id: guildId, ackType: GUILD_EVENT, ackedId: outer2_11, local: false };
  obj.dispatch(obj);
};
export const ackUserFeature = function ackUserFeature(NOTIFICATION_CENTER) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  if (null != id) {
    let obj = importDefault(686);
    obj = { type: "USER_NON_CHANNEL_ACK", ackType: NOTIFICATION_CENTER, ackedId: arg1, local: false };
    obj.dispatch(obj);
  }
};
export const clearOldestUnreadMessageId = function clearOldestUnreadMessageId(channelId) {
  let obj = importDefault(686);
  obj = { type: "CLEAR_OLDEST_UNREAD_MESSAGE", channelId };
  obj.dispatch(obj);
};

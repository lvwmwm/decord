// Module ID: 5339
// Function ID: 45589
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: ackChannel, ackGuildFeature, ackUserFeature, bulkAck, clearOldestUnreadMessageId, disableAutomaticAck, enableAutomaticAck, localAck

// Module 5339 (_createForOfIteratorHelperLoose)
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
function ack(id, location, arg2, arg3, id2) {
  let flag = arg2;
  let flag2 = arg3;
  if (arg2 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "CHANNEL_ACK", channelId: id, messageId: id2, immediate: flag, force: flag2, context: CURRENT_APP_CONTEXT, location };
  obj.dispatch(obj);
}
function ackCategory(id, arg1, arg2, arg3) {
  let done;
  let flag = arg2;
  let flag2 = arg3;
  if (arg2 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let importDefault;
  let dependencyMap;
  const channel = channel.getChannel(id);
  importDefault = channel;
  if (null != channel) {
    if (null != channel.guild_id) {
      const categories = categories.getCategories(channel.guild_id);
      if (null != categories[id]) {
        const found = categories[id].filter((channel) => callback(channel.channel.type));
        const mapped = found.map((channel) => channel.channel.id);
        dependencyMap = mapped;
        const item = found.forEach((channel) => {
          channel = channel.channel;
          let guild_id = channel.guild_id;
          if (null == guild_id) {
            guild_id = channel.guild_id;
          }
          const activeJoinedThreadsForParent = activeJoinedThreadsForParent.getActiveJoinedThreadsForParent(guild_id, channel.id);
          for (const key10011 in activeJoinedThreadsForParent) {
            let tmp3 = key10011;
            let tmp4 = closure_1;
            let arr = closure_1.push(key10011);
          }
        });
        const tmp5 = _createForOfIteratorHelperLoose(mapped);
        let iter = tmp5();
        if (!iter.done) {
          do {
            let tmp6 = closure_10;
            let tmp7 = arg1;
            let tmp8 = flag;
            let tmp9 = flag2;
            let tmp10 = closure_10(iter.value, arg1, flag, flag2);
            let iter2 = tmp5();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        const arr = categories[id];
      }
    }
  }
}
let closure_2 = importDefault(dependencyMap[0]);
const isReadableType = arg1(dependencyMap[1]).isReadableType;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const CURRENT_APP_CONTEXT = arg1(dependencyMap[5]).CURRENT_APP_CONTEXT;
const result = arg1(dependencyMap[8]).fileFinishedImporting("actions/ReadStateActionCreators.tsx");

export { ack };
export { ackCategory };
export const ackChannel = function ackChannel(channel, arg1) {
  if (channel.isCategory()) {
    ackCategory(channel.id, arg1, true, true);
  } else {
    const id = channel.id;
    if (channel.isForumLikeChannel()) {
      const _Date = Date;
      tmp(id, arg1, true, true, importDefault(dependencyMap[7]).fromTimestamp(Date.now()));
      const obj = importDefault(dependencyMap[7]);
    } else {
      tmp(id, arg1, true, true);
    }
  }
};
export const bulkAck = function bulkAck(mapped, onFinished) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "BULK_ACK", channels: mapped, context: CURRENT_APP_CONTEXT, onFinished };
  obj.dispatch(obj);
};
export const localAck = function localAck(channelId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "CHANNEL_LOCAL_ACK", channelId };
  obj.dispatch(obj);
};
export const enableAutomaticAck = function enableAutomaticAck(channelId, windowId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "ENABLE_AUTOMATIC_ACK", channelId, windowId };
  obj.dispatch(obj);
};
export const disableAutomaticAck = function disableAutomaticAck(channelId, windowId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "DISABLE_AUTOMATIC_ACK", channelId, windowId };
  obj.dispatch(obj);
};
export const ackGuildFeature = function ackGuildFeature(closure_0, GUILD_EVENT, closure_11) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "GUILD_FEATURE_ACK", id: closure_0, ackType: GUILD_EVENT, ackedId: closure_11, local: false };
  obj.dispatch(obj);
};
export const ackUserFeature = function ackUserFeature(NOTIFICATION_CENTER) {
  const currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  if (null != id) {
    let obj = importDefault(dependencyMap[6]);
    obj = { type: "USER_NON_CHANNEL_ACK", ackType: NOTIFICATION_CENTER, ackedId: arg1, local: false };
    obj.dispatch(obj);
  }
};
export const clearOldestUnreadMessageId = function clearOldestUnreadMessageId(channelId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "CLEAR_OLDEST_UNREAD_MESSAGE", channelId };
  obj.dispatch(obj);
};

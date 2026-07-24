// Module ID: 13019
// Function ID: 100708
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5058, 5039, 1907, 4142, 653, 4326, 22, 21, 675, 5069, 2]
// Exports: default

// Module 13019 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { ReadStateTypes } from "ReadStateTypes";

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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

export default function markGuildsAsRead(arr, source, onFinished) {
  let obj = importDefault(22);
  const mapped = obj.flatMap(arr, (arg0) => {
    let iter2;
    const selectableChannelIds = outer1_5.getSelectableChannelIds(arg0);
    const vocalChannelIds = outer1_5.getVocalChannelIds(arg0);
    const items = [...vocalChannelIds];
    const activeJoinedThreadsForGuild = outer1_4.getActiveJoinedThreadsForGuild(arg0);
    const tmp4 = outer1_9(selectableChannelIds);
    let iter = tmp4();
    if (!iter.done) {
      do {
        let obj = activeJoinedThreadsForGuild[iter.value];
        if (null == obj) {
          obj = {};
        }
        let tmp5 = obj;
        for (const key10027 in obj) {
          let tmp6 = key10027;
          let arr = items.push(key10027);
          continue;
        }
        iter2 = tmp4();
        iter = iter2;
      } while (!iter2.done);
    }
    return items;
  }).map((channelId) => ({ channelId, readStateType: outer1_8.CHANNEL, messageId: outer1_6.lastMessageId(channelId) }));
  const item = arr.forEach((id) => {
    let obj = { channelId: outer1_1(outer1_2[7]).cast(id), readStateType: outer1_8.GUILD_EVENT, messageId: outer1_6.lastMessageId(id, outer1_8.GUILD_EVENT) };
    mapped.push(obj);
    obj = {};
    const obj2 = outer1_1(outer1_2[7]);
    obj.channelId = outer1_1(outer1_2[7]).cast(id);
    obj.readStateType = outer1_8.GUILD_ONBOARDING_QUESTION;
    obj.messageId = outer1_3.ackIdForGuild(id);
    mapped.push(obj);
  });
  const flatMapResult = obj.flatMap(arr, (arg0) => {
    let iter2;
    const selectableChannelIds = outer1_5.getSelectableChannelIds(arg0);
    const vocalChannelIds = outer1_5.getVocalChannelIds(arg0);
    const items = [...vocalChannelIds];
    const activeJoinedThreadsForGuild = outer1_4.getActiveJoinedThreadsForGuild(arg0);
    const tmp4 = outer1_9(selectableChannelIds);
    let iter = tmp4();
    if (!iter.done) {
      do {
        let obj = activeJoinedThreadsForGuild[iter.value];
        if (null == obj) {
          obj = {};
        }
        let tmp5 = obj;
        for (const key10027 in obj) {
          let tmp6 = key10027;
          let arr = items.push(key10027);
          continue;
        }
        iter2 = tmp4();
        iter = iter2;
      } while (!iter2.done);
    }
    return items;
  });
  obj = { source, type: "guild" };
  importDefault(675).track(AnalyticEvents.MARK_AS_READ, obj);
  let obj2 = importDefault(675);
  return mapped(5069).bulkAck(mapped, onFinished);
};

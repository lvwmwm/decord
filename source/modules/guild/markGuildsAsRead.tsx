// Module ID: 12844
// Function ID: 98174
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 12844 (_createForOfIteratorHelperLoose)
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
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const ReadStateTypes = arg1(dependencyMap[5]).ReadStateTypes;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

export default function markGuildsAsRead(arr, source, onFinished) {
  let obj = importDefault(dependencyMap[6]);
  const mapped = obj.flatMap(arr, (arg0) => {
    let iter2;
    const selectableChannelIds = store.getSelectableChannelIds(arg0);
    const vocalChannelIds = store.getVocalChannelIds(arg0);
    const items = [...vocalChannelIds];
    const activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(arg0);
    const tmp4 = callback2(selectableChannelIds);
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
        }
        iter2 = tmp4();
        iter = iter2;
      } while (!iter2.done);
    }
    return items;
  }).map((channelId) => ({ channelId, readStateType: constants.CHANNEL, messageId: closure_6.lastMessageId(channelId) }));
  source = mapped;
  const item = arr.forEach((id) => {
    let obj = { channelId: callback(closure_2[7]).cast(id), readStateType: constants.GUILD_EVENT, messageId: closure_6.lastMessageId(id, constants.GUILD_EVENT) };
    mapped.push(obj);
    obj = {};
    const obj2 = callback(closure_2[7]);
    obj.channelId = callback(closure_2[7]).cast(id);
    obj.readStateType = constants.GUILD_ONBOARDING_QUESTION;
    obj.messageId = closure_3.ackIdForGuild(id);
    mapped.push(obj);
  });
  const flatMapResult = obj.flatMap(arr, (arg0) => {
    let iter2;
    const selectableChannelIds = store.getSelectableChannelIds(arg0);
    const vocalChannelIds = store.getVocalChannelIds(arg0);
    const items = [...vocalChannelIds];
    const activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(arg0);
    const tmp4 = callback2(selectableChannelIds);
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
        }
        iter2 = tmp4();
        iter = iter2;
      } while (!iter2.done);
    }
    return items;
  });
  obj = { source, type: "guild" };
  importDefault(dependencyMap[8]).track(AnalyticEvents.MARK_AS_READ, obj);
  const obj2 = importDefault(dependencyMap[8]);
  return source(dependencyMap[9]).bulkAck(mapped, onFinished);
};

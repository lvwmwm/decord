// Module ID: 5678
// Function ID: 48779
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: computeThreadIdsSnapshot

// Module 5678 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function getLastMessageId(arg0) {
  let tmp = arg0;
  const lastMessageIdResult = closure_12.lastMessageId(arg0);
  if (null != lastMessageIdResult) {
    tmp = lastMessageIdResult;
  }
  return tmp;
}
function getSortFunction(LATEST_ACTIVITY) {
  const arg1 = LATEST_ACTIVITY;
  return (id, id) => {
    let tmp = id;
    let num = -1;
    if (!obj.isForumPostPinned(id)) {
      if (obj2.isForumPostPinned(tmp)) {
        num = 1;
      } else if (id === id(closure_2[11]).ThreadSortOrder.LATEST_ACTIVITY) {
        tmp = callback2(tmp);
        let compareResult = callback(closure_2[15]).compare(tmp, callback2(id));
        const obj4 = callback(closure_2[15]);
      } else {
        compareResult = callback(closure_2[15]).compare(tmp, id);
        const obj3 = callback(closure_2[15]);
      }
      const obj2 = id(closure_2[14]);
    }
    return num;
  };
}
function resetState() {
  let closure_22 = [];
  let closure_14 = null;
  let closure_17 = null;
  const set = new Set();
  const LATEST_ACTIVITY = arg1(dependencyMap[11]).ThreadSortOrder.LATEST_ACTIVITY;
  const MATCH_SOME = arg1(dependencyMap[12]).ThreadSearchTagSetting.MATCH_SOME;
  let closure_21 = 0;
  let closure_24 = [];
  let closure_25 = importDefault(dependencyMap[13]).chain(items);
  const obj = importDefault(dependencyMap[13]);
  let closure_26 = importDefault(dependencyMap[13]).chain(items);
  set2.clear();
  set1.clear();
}
function maybeRebuildState() {
  const channelId = channelId.getChannelId();
  if (null != channelId) {
    const channel = store2.getChannel(channelId);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        const obj = { refreshThreadIds: true };
        rebuildState(obj);
      }
    }
  }
  resetState();
  return false;
}
function rebuildState(refreshThreadIds) {
  const channel = store2.getChannel(closure_17);
  if (null != channel) {
    if (tmp2) {
      const _Object = Object;
      const values = Object.values(store.getThreadsForParent(channel.guild_id, channel.id));
      let closure_24 = values.map((id) => id.id);
      let closure_21 = 0;
      let closure_23 = true;
    }
    if (0 !== set1.size) {
      closure_24 = closure_24.filter((arg0) => !set.has(arg0));
      set1.clear();
    }
    if (0 !== set2.size) {
      const _Array = Array;
      const _Set = Set;
      const items = [];
      HermesBuiltin.arraySpread(set2, HermesBuiltin.arraySpread(closure_24, 0));
      const set = new Set(items);
      closure_24 = Array.from(set);
      set2.clear();
    }
    let tmp23 = null != refreshThreadIds && refreshThreadIds.refreshThreadIds;
    if (!tmp23) {
      tmp23 = null != refreshThreadIds && refreshThreadIds.sortThreadIds;
      const tmp24 = null != refreshThreadIds && refreshThreadIds.sortThreadIds;
    }
    if (tmp23) {
      const obj = importDefault(dependencyMap[13]);
      let closure_26 = importDefault(dependencyMap[13]).chain(closure_24).sort(getSortFunction(arg1(dependencyMap[11]).ThreadSortOrder.LATEST_ACTIVITY));
      const chainResult = importDefault(dependencyMap[13]).chain(closure_24);
      const obj3 = importDefault(dependencyMap[13]);
      let closure_25 = importDefault(dependencyMap[13]).chain(closure_24).sort(getSortFunction(arg1(dependencyMap[11]).ThreadSortOrder.CREATION_DATE));
      const chainResult1 = importDefault(dependencyMap[13]).chain(closure_24);
    }
    const valueResult = LATEST_ACTIVITY === arg1(dependencyMap[11]).ThreadSortOrder.LATEST_ACTIVITY ? closure_26 : closure_25.value();
    let found = valueResult;
    if (0 !== set.size) {
      found = valueResult.filter(function getFilterFunction(set, MATCH_SOME) {
        return (channelId) => {
          const channel = channel.getChannel(channelId);
          let appliedTags;
          if (null != channel) {
            appliedTags = channel.appliedTags;
          }
          if (null != appliedTags) {
            if (0 !== appliedTags.length) {
              if (arg1 === channelId(closure_2[12]).ThreadSearchTagSetting.MATCH_SOME) {
                return appliedTags.some((arg0) => set.has(arg0));
              } else {
                const tmp5 = callback(channelId.values());
                let iter = tmp5();
                if (!iter.done) {
                  while (appliedTags.includes(iter.value)) {
                    let iter2 = tmp5();
                    iter = iter2;
                  }
                  return false;
                }
                return true;
              }
            }
          }
          return false;
        };
      }(set, MATCH_SOME));
    }
    let closure_22 = found;
    const found1 = found.find((arg0) => {
      const count = count.getCount(arg0);
      let tmp2 = null === count;
      if (!tmp2) {
        tmp2 = 0 === count;
      }
      return tmp2;
    });
    let tmp38 = null;
    if (null != found1) {
      tmp38 = found1;
    }
    const iter = LATEST_ACTIVITY === arg1(dependencyMap[11]).ThreadSortOrder.LATEST_ACTIVITY ? closure_26 : closure_25;
    const tmp2 = null != refreshThreadIds && refreshThreadIds.refreshThreadIds;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const items = [];
let closure_16 = null;
let closure_17 = null;
const set = new Set();
const LATEST_ACTIVITY = arg1(dependencyMap[11]).ThreadSortOrder.LATEST_ACTIVITY;
const MATCH_SOME = arg1(dependencyMap[12]).ThreadSearchTagSetting.MATCH_SOME;
let closure_21 = 0;
let closure_22 = [];
let closure_23 = false;
let closure_24 = [];
let closure_25 = importDefault(dependencyMap[13]).chain(items);
const importDefaultResult = importDefault(dependencyMap[13]);
let closure_26 = importDefault(dependencyMap[13]).chain(items);
const set1 = new Set();
const set2 = new Set();
let tmp5 = (Store) => {
  class ForumActivePostStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ForumActivePostStore);
      obj = closure_6(ForumActivePostStore);
      tmp2 = closure_5;
      if (closure_29()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ForumActivePostStore;
  callback2(ForumActivePostStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_10, closure_11, closure_12, closure_13, closure_9);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getNewThreadCount",
    value() {
      return closure_21;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCanAckThreads",
    value() {
      return closure_23;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getThreadIds",
    value(arg0, arg1, set) {
      let obj = ForumActivePostStore(closure_2[16]);
      let tmp = !obj.areSetsEqual(set, set);
      if (arg0 !== arg0) {
        obj = { refreshThreadIds: true };
        callback4(obj);
      } else if (arg1 !== tmp2) {
        obj = { sortThreadIds: true };
        callback4(obj);
      } else {
        if (!tmp) {
          tmp = tmp3;
        }
        if (tmp) {
          callback4();
        }
      }
      return closure_22;
    }
  };
  items[4] = {
    key: "getCurrentThreadIds",
    value() {
      return closure_22;
    }
  };
  items[5] = {
    key: "getAndDeleteMostRecentUserCreatedThreadId",
    value() {
      let closure_16 = null;
      return closure_16;
    }
  };
  items[6] = {
    key: "getFirstNoReplyThreadId",
    value() {
      return closure_14;
    }
  };
  return callback(ForumActivePostStore, items);
}(importDefault(dependencyMap[17]).Store);
tmp5.displayName = "ForumActivePostStore";
tmp5 = new tmp5(importDefault(dependencyMap[18]), {
  CONNECTION_OPEN: maybeRebuildState,
  OVERLAY_INITIALIZE: maybeRebuildState,
  GUILD_CREATE: maybeRebuildState,
  CHANNEL_SELECT: maybeRebuildState,
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === closure_17) {
        resetState();
      }
    }
    return false;
  },
  THREAD_LIST_SYNC: function handleThreadListSync(arg0) {
    let tmp2 = null != closure_17;
    if (tmp2) {
      const channel = store2.getChannel(closure_17);
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      if (tmp === guild_id) {
        const obj = { refreshThreadIds: true };
        rebuildState(obj);
      }
      tmp2 = tmp7;
    }
    return tmp2;
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    let tmp = null != channel.parent_id;
    if (tmp) {
      tmp = channel.parent_id === closure_17;
    }
    if (tmp) {
      if (!channel.isNewlyCreated) {
        tmp = !tmp3;
      } else if (channel.ownerId !== id.getId()) {
        let closure_21 = tmp6 + 1;
      } else {
        const id2 = channel.id;
      }
    }
    return tmp;
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === closure_17) {
        const isForumPostPinnedResult = arg1(dependencyMap[14]).isForumPostPinned(channel.id);
        const hasItem = set2.has(channel.id);
        if (isForumPostPinnedResult) {
          if (!hasItem) {
            set2.add(channel.id);
            let obj = { sortThreadIds: true };
            rebuildState(obj);
          }
        }
        if (!isForumPostPinnedResult) {
          if (hasItem) {
            set2.delete(channel.id);
            obj = { sortThreadIds: true };
            rebuildState(obj);
          }
        }
        return false;
      }
    }
    return false;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === closure_17) {
        set1.add(channel.id);
        const obj = { sortThreadIds: true };
        rebuildState(obj);
      }
    }
    return false;
  },
  RESORT_THREADS: function handleResortThreads(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (channelId === closure_17) {
        const obj = { refreshThreadIds: true };
        rebuildState(obj);
      }
    }
    return false;
  },
  CHANNEL_ACK: function handleChannelAck(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (channelId === closure_17) {
        let closure_23 = false;
      }
    }
    return false;
  }
});
const importDefaultResult1 = importDefault(dependencyMap[13]);
const obj = {
  CONNECTION_OPEN: maybeRebuildState,
  OVERLAY_INITIALIZE: maybeRebuildState,
  GUILD_CREATE: maybeRebuildState,
  CHANNEL_SELECT: maybeRebuildState,
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === closure_17) {
        resetState();
      }
    }
    return false;
  },
  THREAD_LIST_SYNC: function handleThreadListSync(arg0) {
    let tmp2 = null != closure_17;
    if (tmp2) {
      const channel = store2.getChannel(closure_17);
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      if (tmp === guild_id) {
        const obj = { refreshThreadIds: true };
        rebuildState(obj);
      }
      tmp2 = tmp7;
    }
    return tmp2;
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    let tmp = null != channel.parent_id;
    if (tmp) {
      tmp = channel.parent_id === closure_17;
    }
    if (tmp) {
      if (!channel.isNewlyCreated) {
        tmp = !tmp3;
      } else if (channel.ownerId !== id.getId()) {
        let closure_21 = tmp6 + 1;
      } else {
        const id2 = channel.id;
      }
    }
    return tmp;
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === closure_17) {
        const isForumPostPinnedResult = arg1(dependencyMap[14]).isForumPostPinned(channel.id);
        const hasItem = set2.has(channel.id);
        if (isForumPostPinnedResult) {
          if (!hasItem) {
            set2.add(channel.id);
            let obj = { sortThreadIds: true };
            rebuildState(obj);
          }
        }
        if (!isForumPostPinnedResult) {
          if (hasItem) {
            set2.delete(channel.id);
            obj = { sortThreadIds: true };
            rebuildState(obj);
          }
        }
        return false;
      }
    }
    return false;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === closure_17) {
        set1.add(channel.id);
        const obj = { sortThreadIds: true };
        rebuildState(obj);
      }
    }
    return false;
  },
  RESORT_THREADS: function handleResortThreads(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (channelId === closure_17) {
        const obj = { refreshThreadIds: true };
        rebuildState(obj);
      }
    }
    return false;
  },
  CHANNEL_ACK: function handleChannelAck(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (channelId === closure_17) {
        let closure_23 = false;
      }
    }
    return false;
  }
};
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/forums/ForumActivePostStore.tsx");

export default tmp5;
export const computeThreadIdsSnapshot = function computeThreadIdsSnapshot(id) {
  const channel = store2.getChannel(id);
  if (null == channel) {
    let items = [];
  } else {
    const _Object = Object;
    const values = Object.values(store.getThreadsForParent(channel.guild_id, channel.id));
    const mapped = values.map((id) => id.id);
    items = mapped.sort(getSortFunction(LATEST_ACTIVITY));
  }
  return items;
};

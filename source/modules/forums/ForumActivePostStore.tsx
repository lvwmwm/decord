// Module ID: 5682
// Function ID: 48832
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5040, 5683, 1194, 1348, 4142, 1906, 1357, 1359, 22, 5684, 21, 1390, 566, 686, 2]
// Exports: computeThreadIdsSnapshot

// Module 5682 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import initialize from "initialize";
import dispatcher from "dispatcher";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import importDefaultResult from "apply";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function getLastMessageId(arg0) {
  let tmp = arg0;
  const lastMessageIdResult = closure_12.lastMessageId(arg0);
  if (null != lastMessageIdResult) {
    tmp = lastMessageIdResult;
  }
  return tmp;
}
function getSortFunction(LATEST_ACTIVITY) {
  let closure_0 = LATEST_ACTIVITY;
  return (id, id) => {
    let tmp = id;
    let num = -1;
    if (!obj.isForumPostPinned(id)) {
      if (obj2.isForumPostPinned(tmp)) {
        num = 1;
      } else if (LATEST_ACTIVITY === LATEST_ACTIVITY(outer1_2[11]).ThreadSortOrder.LATEST_ACTIVITY) {
        tmp = outer1_32(tmp);
        let compareResult = outer1_1(outer1_2[15]).compare(tmp, outer1_32(id));
        const obj4 = outer1_1(outer1_2[15]);
      } else {
        compareResult = outer1_1(outer1_2[15]).compare(tmp, id);
        const obj3 = outer1_1(outer1_2[15]);
      }
      obj2 = LATEST_ACTIVITY(outer1_2[14]);
    }
    return num;
  };
}
function resetState() {
  let closure_22 = [];
  let c14 = null;
  let c17 = null;
  const set = new Set();
  const LATEST_ACTIVITY = require(1357) /* set */.ThreadSortOrder.LATEST_ACTIVITY;
  const MATCH_SOME = require(1359) /* set */.ThreadSearchTagSetting.MATCH_SOME;
  let c21 = 0;
  let closure_24 = [];
  let closure_25 = importDefault(22).chain(items);
  const obj = importDefault(22);
  let closure_26 = importDefault(22).chain(items);
  set2.clear();
  set1.clear();
}
function maybeRebuildState() {
  channelId = channelId.getChannelId();
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
  let channel = store2.getChannel(c17);
  if (null != channel) {
    if (tmp2) {
      const _Object = Object;
      const values = Object.values(store.getThreadsForParent(channel.guild_id, channel.id));
      let closure_24 = values.map((id) => id.id);
      let c21 = 0;
      let c23 = true;
    }
    if (0 !== set1.size) {
      closure_24 = closure_24.filter((arg0) => !outer1_27.has(arg0));
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
      const obj = importDefault(22);
      let closure_26 = importDefault(22).chain(closure_24).sort(getSortFunction(require(1357) /* set */.ThreadSortOrder.LATEST_ACTIVITY));
      const chainResult = importDefault(22).chain(closure_24);
      const obj3 = importDefault(22);
      let closure_25 = importDefault(22).chain(closure_24).sort(getSortFunction(require(1357) /* set */.ThreadSortOrder.CREATION_DATE));
      const chainResult1 = importDefault(22).chain(closure_24);
    }
    const valueResult = LATEST_ACTIVITY === require(1357) /* set */.ThreadSortOrder.LATEST_ACTIVITY ? closure_26 : closure_25.value();
    let found = valueResult;
    if (0 !== set.size) {
      found = valueResult.filter((function getFilterFunction(set, MATCH_SOME) {
        let closure_0 = set;
        let closure_1 = MATCH_SOME;
        return (channelId) => {
          const channel = outer2_11.getChannel(channelId);
          let appliedTags;
          if (null != channel) {
            appliedTags = channel.appliedTags;
          }
          if (null != appliedTags) {
            if (0 !== appliedTags.length) {
              if (closure_1 === outer2_0(outer2_2[12]).ThreadSearchTagSetting.MATCH_SOME) {
                return appliedTags.some((arg0) => outer1_0.has(arg0));
              } else {
                const tmp5 = outer2_30(set.values());
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
      })(set, MATCH_SOME));
    }
    const found1 = found.find((arg0) => {
      const count = outer1_9.getCount(arg0);
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
    let closure_14 = tmp38;
    let iter = LATEST_ACTIVITY === require(1357) /* set */.ThreadSortOrder.LATEST_ACTIVITY ? closure_26 : closure_25;
    tmp2 = null != refreshThreadIds && refreshThreadIds.refreshThreadIds;
  }
}
let items = [];
let c16 = null;
let c17 = null;
let set = new Set();
let LATEST_ACTIVITY = require("set").ThreadSortOrder.LATEST_ACTIVITY;
let MATCH_SOME = require("set").ThreadSearchTagSetting.MATCH_SOME;
let c21 = 0;
let closure_22 = [];
let c23 = false;
let closure_24 = [];
let closure_25 = require("apply").chain(items);
let closure_26 = require("apply").chain(items);
const set1 = new Set();
const set2 = new Set();
let tmp5 = ((Store) => {
  class ForumActivePostStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ForumActivePostStore);
      obj = outer1_6(ForumActivePostStore);
      tmp2 = outer1_5;
      if (outer1_29()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ForumActivePostStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_10, outer1_11, outer1_12, outer1_13, outer1_9);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getNewThreadCount",
    value() {
      return outer1_21;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCanAckThreads",
    value() {
      return outer1_23;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getThreadIds",
    value(arg0, arg1, set) {
      let obj = ForumActivePostStore(outer1_2[16]);
      let tmp = !obj.areSetsEqual(set, outer1_18);
      const outer1_17 = arg0;
      outer1_18 = set;
      const outer1_19 = arg1;
      const outer1_20 = arg3;
      if (arg0 !== outer1_17) {
        obj = { refreshThreadIds: true };
        outer1_35(obj);
      } else if (arg1 !== tmp2) {
        obj = { sortThreadIds: true };
        outer1_35(obj);
      } else {
        if (!tmp) {
          tmp = tmp3;
        }
        if (tmp) {
          outer1_35();
        }
      }
      return outer1_22;
    }
  };
  items[4] = {
    key: "getCurrentThreadIds",
    value() {
      return outer1_22;
    }
  };
  items[5] = {
    key: "getAndDeleteMostRecentUserCreatedThreadId",
    value() {
      const outer1_16 = null;
      return outer1_16;
    }
  };
  items[6] = {
    key: "getFirstNoReplyThreadId",
    value() {
      return outer1_14;
    }
  };
  return callback(ForumActivePostStore, items);
})(require("initialize").Store);
tmp5.displayName = "ForumActivePostStore";
tmp5 = new tmp5(require("dispatcher"), {
  CONNECTION_OPEN: maybeRebuildState,
  OVERLAY_INITIALIZE: maybeRebuildState,
  GUILD_CREATE: maybeRebuildState,
  CHANNEL_SELECT: maybeRebuildState,
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === c17) {
        resetState();
      }
    }
    return false;
  },
  THREAD_LIST_SYNC: function handleThreadListSync(arg0) {
    let tmp2 = null != c17;
    if (tmp2) {
      const channel = store2.getChannel(c17);
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
      tmp = channel.parent_id === c17;
    }
    if (tmp) {
      if (!channel.isNewlyCreated) {
        tmp = !tmp3;
      } else if (channel.ownerId !== id.getId()) {
        let closure_21 = tmp6 + 1;
      } else {
        id = channel.id;
      }
    }
    return tmp;
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === c17) {
        const isForumPostPinnedResult = require(5684) /* getForumPostReadStates */.isForumPostPinned(channel.id);
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
      if (channel.parent_id === c17) {
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
      if (channelId === c17) {
        const obj = { refreshThreadIds: true };
        rebuildState(obj);
      }
    }
    return false;
  },
  CHANNEL_ACK: function handleChannelAck(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (channelId === c17) {
        let c23 = false;
      }
    }
    return false;
  }
});
let result = set.fileFinishedImporting("modules/forums/ForumActivePostStore.tsx");

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

// Module ID: 7008
// Function ID: 56125
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 1352, 1348, 4142, 3760, 1357, 7009, 22, 1359, 21, 5684, 566, 686, 2]

// Module 7008 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getForumPostReadStates from "getForumPostReadStates";
import dispatcher from "dispatcher";
import set from "set";
import _slicedToArray from "_slicedToArray";
import { ALL_CHANNEL_TYPES } from "_callSuper";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";

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
function listKey(channelId, sortOrder, tagFilter, tagSetting) {
  let iter = tagFilter;
  const combined = "" + channelId + "|" + sortOrder + "|" + tagSetting + "|";
  if (0 === tagFilter.size) {
    return combined;
  } else if (1 === iter.size) {
    iter = iter.values();
    let sum = combined + iter.next().value;
  } else {
    const _Array = Array;
    const sorted = Array.from(iter).sort();
    sum = combined + sorted.join(",");
    const arr = Array.from(iter);
  }
}
function getSortValue(channel, sortOrder) {
  if (sortOrder === require(1357) /* set */.ThreadSortOrder.LATEST_ACTIVITY) {
    let id = closure_11.lastMessageId(channel.id);
  } else {
    id = channel.id;
  }
  return id;
}
function resortListState(value) {
  let _callSuper;
  let dependencyMap;
  let importDefault;
  const sortOrder = value.sortOrder;
  ({ tagFilter: importDefault, tagSetting: dependencyMap, hasMore: _callSuper } = value);
  const channel = store.getChannel(value.threads[value.threads.length - 1]);
  let tmp2 = null;
  if (null != channel) {
    tmp2 = getSortValue(channel, sortOrder);
  }
  let _isNativeReflectConstruct = tmp2;
  const tmp4 = importDefault(22);
  const found = importDefault(22)(store.getAllThreadsForParent(value.channelId)).filter((isArchivedThread) => isArchivedThread.isArchivedThread());
  const found1 = found.filter((appliedTags) => {
    if (0 !== closure_1.size) {
      if (sortOrder(outer1_2[13]).ThreadSearchTagSetting.MATCH_SOME === closure_2) {
        const appliedTags2 = appliedTags.appliedTags;
        let someResult;
        if (null != appliedTags2) {
          someResult = appliedTags2.some((arg0) => outer1_1.has(arg0));
        }
        if (true !== someResult) {
          return false;
        }
      } else if (sortOrder(outer1_2[13]).ThreadSearchTagSetting.MATCH_ALL === tmp14) {
        const tmp21 = outer1_16(closure_1.values());
        let iter2 = tmp21();
        if (!iter2.done) {
          while (true) {
            appliedTags = appliedTags.appliedTags;
            let hasItem;
            if (null != appliedTags) {
              hasItem = appliedTags.includes(tmp);
            }
            if (true !== hasItem) {
              break;
            } else {
              let iter = tmp21();
              iter2 = iter;
            }
          }
          return false;
        }
      }
      tmp14 = closure_2;
    }
    if (_callSuper) {
      if (null != _isNativeReflectConstruct) {
        let tmp7 = null;
        if (null != appliedTags) {
          tmp7 = outer1_19(appliedTags, sortOrder);
        }
        let tmp10 = null != tmp7;
        if (tmp10) {
          tmp10 = outer1_1(outer1_2[14]).compare(tmp7, _isNativeReflectConstruct) >= 0;
          const obj = outer1_1(outer1_2[14]);
        }
        return tmp10;
      }
    }
    return true;
  });
  const sorted = found1.sort((arg0, arg1) => {
    const obj = outer1_1(outer1_2[14]);
    return obj.compare(outer1_19(arg0, sortOrder), outer1_19(arg1, sortOrder));
  });
  const mapped = sorted.map((id) => id.id);
  const tmp4Result = importDefault(22)(store.getAllThreadsForParent(value.channelId));
  value.threads = mapped.reverse().value();
}
const map = new Map();
let closure_14 = [];
let tmp3 = ((Store) => {
  class ArchivedThreadsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ArchivedThreadsStore);
      obj = outer1_6(ArchivedThreadsStore);
      tmp2 = outer1_5;
      if (outer1_15()) {
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
  callback2(ArchivedThreadsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10, outer1_12, outer1_11);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getCanLoadMore",
    value(arg0, arg1, arg2, arg3) {
      const value = outer1_13.get(outer1_18(arg0, arg1, arg2, arg3));
      let tmp2 = null != value;
      if (tmp2) {
        tmp2 = value.hasMore && !value.loading && !value.failed;
        const tmp3 = value.hasMore && !value.loading && !value.failed;
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getNextOffset",
    value(arg0, arg1, arg2, arg3) {
      const value = outer1_13.get(outer1_18(arg0, arg1, arg2, arg3));
      let nextOffset;
      if (null != value) {
        nextOffset = value.nextOffset;
      }
      let num = 0;
      if (null != nextOffset) {
        num = nextOffset;
      }
      return num;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIsInitialLoad",
    value(arg0, arg1, arg2, arg3) {
      const value = outer1_13.get(outer1_18(arg0, arg1, arg2, arg3));
      let isInitialLoad;
      if (null != value) {
        isInitialLoad = value.isInitialLoad;
      }
      return null == isInitialLoad || isInitialLoad;
    }
  };
  items[4] = {
    key: "isLoading",
    value(arg0, arg1, arg2, arg3) {
      const value = outer1_13.get(outer1_18(arg0, arg1, arg2, arg3));
      let loading;
      if (null != value) {
        loading = value.loading;
      }
      return null != loading && loading;
    }
  };
  items[5] = {
    key: "getThreads",
    value(arg0, arg1, arg2, arg3) {
      const value = outer1_13.get(outer1_18(arg0, arg1, arg2, arg3));
      let threads;
      if (null != value) {
        threads = value.threads;
      }
      if (null == threads) {
        threads = outer1_14;
      }
      return threads;
    }
  };
  return callback(ArchivedThreadsStore, items);
})(require("initialize").Store);
tmp3.displayName = "ArchivedThreadsStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: function resetAll() {
    map.clear();
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    if (!(function removeThreadIdFromAllLists(id) {
      let iter3;
      let closure_0 = id;
      const tmp = outer1_16(outer1_13.values());
      const iter = tmp();
      let iter2 = iter;
      let flag = false;
      let flag2 = false;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let threads = value.threads;
          if (threads.indexOf(id) >= 0) {
            let threads1 = value.threads;
            value.threads = threads1.filter((arg0) => arg0 !== closure_0);
            flag = true;
          }
          iter3 = tmp();
          iter2 = iter3;
          flag2 = flag;
        } while (!iter3.done);
      }
      return flag2;
    })(channel.channel.id)) {
      return false;
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    let iter3;
    channel = channel.channel;
    if (obj.isForumPostPinned(channel.id)) {
      const tmp3 = _createForOfIteratorHelperLoose(map.values());
      const iter = tmp3();
      let iter2 = iter;
      let flag2 = false;
      let flag3 = false;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp4 = flag2;
          if (value.channelId === channel.parent_id) {
            let threads = value.threads;
            if (threads.indexOf(channel.id) >= 0) {
              let threads1 = value.threads;
              value.threads = threads1.filter((arg0) => arg0 !== channel.id);
              flag2 = true;
            }
            tmp4 = flag2;
          }
          iter3 = tmp3();
          flag2 = tmp4;
          iter2 = iter3;
          flag3 = tmp4;
        } while (!iter3.done);
      }
      return flag3;
    } else {
      return false;
    }
    obj = channel(5684);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(map);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp2 = callback3;
        let tmp3 = callback3(iter2.value, 2);
        if (tmp3[1].channelId === channel.channel.id) {
          let tmp5 = map;
          let deleteResult = map.delete(tmp4);
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2 ? undefined : false;
  },
  LOAD_ARCHIVED_THREADS: function handleLoadArchivedThreads(tagFilter) {
    let iter2;
    let tmp7;
    let tmp8;
    if (tagFilter.tagFilter instanceof Set) {
      tagFilter = tagFilter.tagFilter;
    } else {
      const _Set = Set;
      tagFilter = new Set(tagFilter.tagFilter);
    }
    const tmp3 = listKey(tagFilter.channelId, tagFilter.sortOrder, tagFilter, tagFilter.tagSetting);
    const tmp4 = _createForOfIteratorHelperLoose(map);
    let iter = tmp4();
    if (!iter.done) {
      do {
        let tmp5 = callback3;
        let tmp6 = callback3(iter.value, 2);
        [tmp7, tmp8] = tmp6;
        let tmp9 = tmp7 !== tmp3 && tmp8.channelId === tagFilter.channelId && tmp8.failed;
        if (tmp9) {
          let tmp10 = map;
          let deleteResult = map.delete(tmp7);
        }
        iter2 = tmp4();
        iter = iter2;
      } while (!iter2.done);
    }
    const value = map.get(tmp3);
    if (null == value) {
      const obj = { loading: false, isInitialLoad: true, hasMore: false, failed: false, threads: [], nextOffset: 0 };
      ({ channelId: obj.channelId, sortOrder: obj.sortOrder } = tagFilter);
      obj.tagFilter = tagFilter;
      obj.tagSetting = tagFilter.tagSetting;
      let tmp13 = obj;
    } else {
      value.tagFilter = tagFilter;
      value.failed = false;
      tmp13 = value;
    }
    tmp13.loading = true;
    tmp13.isInitialLoad = false;
    map.delete(tmp3);
    const result = map.set(tmp3, tmp13);
    if (map.size > 50) {
      const tmp18 = _createForOfIteratorHelperLoose(map);
      let iter3 = tmp18();
      if (!iter3.done) {
        while (map.size > 50) {
          if (!tmp20[1].loading) {
            let tmp23 = map;
            let deleteResult2 = map.delete(tmp21);
          }
          let iter4 = tmp18();
          iter3 = iter4;
          if (iter4.done) {
            break;
          }
        }
        tmp20 = callback3(iter3.value, 2);
      }
    }
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function handleLoadArchivedThreadsSuccess(tagFilter) {
    if (tagFilter.tagFilter instanceof Set) {
      tagFilter = tagFilter.tagFilter;
    } else {
      const _Set = Set;
      tagFilter = new Set(tagFilter.tagFilter);
    }
    const value = map.get(listKey(tagFilter.channelId, tagFilter.sortOrder, tagFilter, tagFilter.tagSetting));
    if (null == value) {
      return false;
    } else {
      let threads = tagFilter.threads;
      const found = threads.filter((type) => outer1_9.has(type.type));
      threads = value.threads;
      value.threads = threads.concat(found.map((id) => id.id));
      const channel = store.getChannel(value.channelId);
      if (tmp4) {
        let obj = require(7009) /* trackForumChannelSeenBatch */;
        obj = {};
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel);
        obj.numArchivedThreads = value.threads.length;
        obj.hasMoreThreads = tagFilter.hasMore;
        const _Array = Array;
        obj.filterTagIds = Array.from(tagFilter.tagFilter);
        obj.sortOrder = tagFilter.sortOrder;
        const result = obj.trackForumMorePostsLoaded(obj);
      }
      resortListState(value);
      value.hasMore = tagFilter.hasMore;
      value.nextOffset = tagFilter.offset + 25;
      value.loading = false;
      value.isInitialLoad = false;
    }
  },
  LOAD_ARCHIVED_THREADS_FAIL: function handleLoadArchivedThreadsFail(tagFilter) {
    if (tagFilter.tagFilter instanceof Set) {
      tagFilter = tagFilter.tagFilter;
    } else {
      const _Set = Set;
      tagFilter = new Set(tagFilter.tagFilter);
    }
    const value = map.get(listKey(tagFilter.channelId, tagFilter.sortOrder, tagFilter, tagFilter.tagSetting));
    if (null == value) {
      return false;
    } else {
      value.loading = false;
      value.failed = true;
      value.isInitialLoad = false;
    }
  },
  RESORT_THREADS: function handleResortThreads(channelId) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(map.values());
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = null != channelId.channelId && value.channelId !== channelId.channelId;
        if (!tmp2) {
          let tmp3 = resortListState;
          let tmp4 = resortListState(value);
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2 ? undefined : false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/threads/ArchivedThreadsStore.tsx");

export default tmp3;
export const PAGE_SIZE = 25;

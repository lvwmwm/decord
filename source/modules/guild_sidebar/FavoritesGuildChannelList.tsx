// Module ID: 15135
// Function ID: 115121
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 1347, 1351, 3757, 4808, 6758, 5039, 3760, 1352, 5076, 1348, 6759, 4162, 3758, 4142, 1906, 4325, 1386, 482, 6760, 1282, 5690, 10220, 22, 1327, 2]
// Exports: useFavoritesGuildChannelList

// Module 15135 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import importDefaultResult1 from "_isNativeReflectConstruct";
import { createFavoritesChannelRecord as closure_6 } from "createFavoritesChannelRecord";
import importDefaultResult2 from "_isNativeReflectConstruct";
import importDefaultResult from "_createForOfIteratorHelperLoose";
import importDefaultResult4 from "_isNativeReflectConstruct";
import importDefaultResult5 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import importDefaultResult6 from "_isNativeReflectConstruct";
import importDefaultResult7 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult3 from "_isNativeReflectConstruct";
import importDefaultResult9 from "_isNativeReflectConstruct";
import importDefaultResult10 from "_isNativeReflectConstruct";
import importDefaultResult11 from "_isNativeReflectConstruct";
import importDefaultResult12 from "_isNativeReflectConstruct";
import importDefaultResult8 from "_isNativeReflectConstruct";
import { Permissions } from "sum";
import date from "date";

let closure_10;
let closure_11;
let closure_12;
let closure_20;
let closure_21;
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
function getMissingFavoriteThreadIds(includeLoading) {
  includeLoading = includeLoading.includeLoading;
  const favoriteChannels = importDefaultResult1.getFavoriteChannels();
  const items = [];
  for (const key10016 in favoriteChannels) {
    let tmp13 = key10016;
    if (items.length >= tmp) {
      break;
    } else {
      let tmp14 = favoriteChannels[key10016];
      let tmp15 = require;
      let tmp16 = dependencyMap;
      if (tmp14.type !== require(1282) /* _callSuper */.FavoriteChannelType.REFERENCE_ORIGINAL) {
        continue;
      } else {
        if (null == tmp14.channelType) {
          continue;
        } else {
          let tmp3 = set;
          if (!set.has(tmp14.channelType)) {
            continue;
          } else {
            let tmp4 = importDefaultResult7;
            if (null != importDefaultResult7.getChannel(key10016)) {
              continue;
            } else {
              let tmp5 = importDefault;
              let tmp6 = dependencyMap;
              let obj = importDefault(5690);
              let loadState = obj.getLoadState(key10016);
              let tmp8 = "NOT_FOUND" !== loadState;
              if (tmp8) {
                let tmp9 = includeLoading;
                if (!includeLoading) {
                  tmp9 = "LOADING" !== loadState;
                }
                tmp8 = tmp9;
              }
              let tmp10 = loadState;
              if (!tmp8) {
                continue;
              } else {
                let arr = items.push(key10016);
                let tmp12 = loadState;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  return items;
}
function computeFavoritesState(favoriteChannels) {
  function makeChannelList(items, arg1) {
    let closure_1;
    let closure_2;
    let closure_0 = arg1;
    ({ isCollapsed: closure_1, isMuted: closure_2 } = arg1);
    const mapped = isGuildCollapsedResult(22)(items).map((isPrivate) => {
      if (!isPrivate.isPrivate()) {
        if (!outer2_16.can(outer2_22.VIEW_CHANNEL, isPrivate)) {
          return null;
        }
      }
      let tmp4 = null != outer1_2;
      if (tmp4) {
        let tmp6 = outer1_2.id === isPrivate.id;
        if (!tmp6) {
          tmp6 = outer1_3 === isPrivate.id;
        }
        tmp4 = tmp6;
      }
      let isThreadResult = null != outer1_2;
      if (isThreadResult) {
        isThreadResult = outer1_2.isThread();
      }
      if (isThreadResult) {
        isThreadResult = outer1_2.parent_id === isPrivate.id;
      }
      if (!tmp4) {
        if (!isThreadResult) {
          if (closure_1) {
            let activeJoinedUnreadThreadsForParent = found1.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
          }
          if (null == activeJoinedUnreadThreadsForParent) {
            activeJoinedUnreadThreadsForParent = {};
          }
          const obj2 = favoriteChannels(6760);
          const threadIds = obj2.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, outer1_2, outer1_3, outer1_1);
          const isCollapsedResult = outer2_15.isCollapsed(isPrivate.id);
          if (isPrivate.isThread()) {
            let isMutedResult = muted.isMuted(isPrivate.id);
          } else {
            isMutedResult = outer2_19.isChannelMuted(isPrivate.guild_id, isPrivate.id);
          }
          const obj = { id: isPrivate.id, record: isPrivate, category: table, position: table[isPrivate.id].order, threadIds, threadCount: isGuildCollapsedResult(22).size(threadIds), isCollapsed: isCollapsedResult, isMuted: isMutedResult, isFirstVoiceChannel: false };
          const obj4 = isGuildCollapsedResult(22);
          obj.subtitle = favoriteChannels(6760).computeSubtitle(isPrivate, isCollapsedResult, false);
          if (!tmp4) {
            if (!isThreadResult) {
              if (obj6.isEmpty(activeJoinedUnreadThreadsForParent)) {
                if (outer2_17.getMentionCount(isPrivate.id) <= 0) {
                  if (outer1_1) {
                    if (isMutedResult) {
                      return null;
                    }
                  }
                  if (closure_1) {
                    if (!isMutedResult) {
                      if (!dependencyMap) {
                        if (!outer2_12(isPrivate.type)) {
                          if (makeChannelList(isPrivate.type)) {
                            if (false === outer2_17.hasUnread(isPrivate.id)) {
                              return null;
                            }
                          }
                        }
                      }
                    }
                    return null;
                  }
                  return obj;
                }
              }
              obj6 = isGuildCollapsedResult(22);
            }
          }
          return obj;
        }
      }
      activeJoinedUnreadThreadsForParent = found1.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
    });
    const found = mapped.filter(favoriteChannels(1327).isNotNullish);
    const arr = isGuildCollapsedResult(22)(items);
    return found.sortBy((arg0) => {
      let position;
      let record;
      ({ record, position } = arg0);
      if (record.isGuildVocal()) {
        let sum = position + 10000;
      } else {
        sum = position;
      }
      return sum;
    }).value();
  }
  if (null == favoriteChannels) {
    favoriteChannels = obj.getFavoriteChannels();
  }
  const isGuildCollapsedResult = importDefaultResult12.isGuildCollapsed(closure_20);
  const importDefault = isGuildCollapsedResult;
  const dependencyMap = importDefaultResult7.getChannel(importDefaultResult11.getChannelId());
  const voiceChannelId = importDefaultResult11.getVoiceChannelId();
  let items = [];
  obj = {};
  for (const key10026 in favoriteChannels) {
    let tmp21 = key10026;
    let tmp22 = favoriteChannels[key10026];
    let tmp23 = importDefaultResult7;
    let channel = importDefaultResult7.getChannel(tmp22.id);
    if (null == channel) {
      continue;
    } else {
      let tmp4 = favoriteChannels;
      let tmp5 = dependencyMap;
      if (tmp22.type === favoriteChannels(1282).FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let tmp6 = callback2;
        let tmp7 = callback2(favoriteChannels, tmp22, channel);
        if (null != tmp22.parentId) {
          if (null != favoriteChannels[tmp22.parentId]) {
            let tmp8 = favoriteChannels;
            let tmp9 = dependencyMap;
            if (favoriteChannels[tmp22.parentId].type === favoriteChannels(1282).FavoriteChannelType.CATEGORY) {
              let parentId = tmp22.parentId;
              if (!(parentId in obj)) {
                obj[parentId] = [];
              }
              let arr2 = obj[parentId];
              let arr = arr2.push(tmp7);
              let tmp13 = tmp7;
              continue;
            }
          }
        }
        arr = items.push(tmp7);
        let tmp11 = tmp7;
        continue;
      }
      continue;
    }
    continue;
  }
  const callback2 = null;
  obj = { isMuted: false, isCollapsed: false, position: 0 };
  let num = 0;
  obj.getChannelRecords = function getChannelRecords() {
    return items;
  };
  obj.getShownChannelIds = function getShownChannelIds() {
    return items.map((id) => id.id);
  };
  obj.getShownChannelAndThreadIds = function getShownChannelAndThreadIds() {
    return items.map((id) => id.id);
  };
  obj.isEmpty = function isEmpty() {
    return 0 === items.length;
  };
  Object.defineProperty(obj, "channelList", {
    get: function() {
      if (null == closure_6) {
        const self = this;
        closure_6 = makeChannelList(items, this);
      }
      return closure_6;
    },
    set: undefined
  });
  const favoritesCategories = favoriteChannels(10220).getFavoritesCategories(favoriteChannels);
  let found = favoritesCategories.filter((id) => null != id.id);
  let mapped = found.map((id) => {
    id = id.id;
    let items;
    let c1;
    const categoryRecord = obj.getCategoryRecord(id);
    if (null == categoryRecord) {
      return null;
    } else {
      items = obj[id];
      if (null == items) {
        items = [];
      }
      c1 = null;
      obj = { isMuted: outer1_19.isChannelMuted(outer1_20, id), isCollapsed: outer1_13.isCollapsed(id), record: categoryRecord, id };
      let order;
      if (null != items[id]) {
        order = tmp7.order;
      }
      let num = 0;
      if (null != order) {
        num = order;
      }
      obj.position = num;
      obj.getChannelRecords = function getChannelRecords() {
        return items;
      };
      obj.getShownChannelIds = function getShownChannelIds() {
        return items.map((id) => id.id);
      };
      obj.getShownChannelAndThreadIds = function getShownChannelAndThreadIds() {
        return items.map((id) => id.id);
      };
      obj.isEmpty = function isEmpty() {
        return 0 === items.length;
      };
      Object.defineProperty(obj, "channelList", {
        get: function() {
            if (null == closure_1) {
              const self = this;
              closure_1 = outer1_11(items, this);
            }
            return closure_1;
          },
        set: undefined
      });
      return obj;
    }
  });
  const found1 = mapped.filter((arg0) => null != arg0);
  let items1 = [obj, ...found1];
  let num2 = 0;
  if (0 < items1.length) {
    do {
      let tmp15 = items1[num];
      let sum = num2 + 1;
      tmp15.position = sum;
      let tmp17 = _createForOfIteratorHelperLoose;
      let tmp18 = _createForOfIteratorHelperLoose(tmp15.channelList);
      let iter = tmp18();
      let tmp19 = sum;
      num2 = sum;
      if (!iter.done) {
        do {
          let sum1 = tmp19 + 1;
          iter.value.position = sum1;
          let iter2 = tmp18();
          tmp19 = sum1;
          iter = iter2;
          num2 = sum1;
          done = iter2.done;
        } while (!done);
      }
      num = num + 1;
    } while (num < items1.length);
  }
  let closure_9 = {
    isEmpty() {
      return true;
    },
    getRows() {
      return [];
    },
    getRow() {
      return null;
    }
  };
  let closure_10 = {
    isEmpty() {
      return true;
    },
    getRows() {
      return [];
    },
    getRow() {
      return null;
    }
  };
  obj = {
    id: closure_20,
    hideMutedChannels: isGuildCollapsedResult,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: -999,
    getSections() {
      let length;
      const items = [];
      let num = 0;
      items[favoriteChannels(6760).SECTION_INDEX_CHANNEL_NOTICES] = 0;
      items[favoriteChannels(6760).SECTION_INDEX_GUILD_ACTIONS] = 0;
      items[favoriteChannels(6760).SECTION_INDEX_FAVORITES] = 0;
      items[favoriteChannels(6760).SECTION_INDEX_RECENTS] = 0;
      items[favoriteChannels(6760).SECTION_INDEX_UNCATEGORIZED_CHANNELS] = obj.channelList.length;
      if (0 < found1.length) {
        do {
          let tmp = favoriteChannels;
          let tmp2 = dependencyMap;
          let _Math = Math;
          let tmp4 = found1;
          let sum = favoriteChannels(6760).SECTION_INDEX_FIRST_NAMED_CATEGORY + num;
          items[sum] = Math.max(1, found1[num].channelList.length);
          num = num + 1;
          let tmp5 = found1;
          length = found1.length;
        } while (num < length);
      }
      return items;
    },
    isPlaceholderRow(arg0, arg1) {
      let tmp = arg0 < favoriteChannels(6760).SECTION_INDEX_FIRST_NAMED_CATEGORY;
      if (!tmp) {
        tmp = 0 !== arg1;
      }
      let tmp3 = !tmp;
      if (!tmp) {
        tmp3 = 0 === found1[arg0 - favoriteChannels(undefined, 6760).SECTION_INDEX_FIRST_NAMED_CATEGORY].channelList.length;
      }
      return tmp3;
    },
    getCategoryFromSection(recentsSectionNumber) {
      if (recentsSectionNumber === favoriteChannels(6760).SECTION_INDEX_UNCATEGORIZED_CHANNELS) {
        let tmp4 = obj;
      } else {
        tmp4 = found1[recentsSectionNumber - favoriteChannels(undefined, 6760).SECTION_INDEX_FIRST_NAMED_CATEGORY];
      }
      return tmp4;
    },
    getNamedCategoryFromSection(first) {
      return found1[first - favoriteChannels(undefined, 6760).SECTION_INDEX_FIRST_NAMED_CATEGORY];
    },
    getChannelFromSectionRow(section, row) {
      const categoryFromSection = this.getCategoryFromSection(section);
      let tmp2 = null;
      if (null != categoryFromSection) {
        tmp2 = null;
        if (null != categoryFromSection.channelList[row]) {
          const obj = { category: categoryFromSection, channel: categoryFromSection.channelList[row] };
          tmp2 = obj;
        }
      }
      return tmp2;
    },
    getGuildActionSection() {
      return closure_9;
    },
    getChannelNoticeSection() {
      return closure_10;
    },
    getFirstVoiceChannel(arg0) {
      return null;
    },
    getSectionRowsFromChannel(arg0) {
      let obj;
      const items = [obj, ...found1];
      let num = 0;
      if (0 < items.length) {
        while (true) {
          let tmp = num;
          let num2 = 0;
          if (0 < items[num].channelList.length) {
            let tmp2 = num2;
            while (items[num].channelList[num2].id !== arg0) {
              num2 = num2 + 1;
              continue;
            }
            obj = {};
            let tmp3 = favoriteChannels;
            let tmp4 = dependencyMap;
            let num3 = 20;
            obj.section = num + favoriteChannels(6760).SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            obj.row = num2;
            let items1 = [obj];
            return items1;
          }
          num = num + 1;
        }
      }
      return [];
    },
    forEachShownChannel(arg0) {
      const items = [obj, ...found1];
      for (let num = 0; num < items.length; num = num + 1) {
        let tmp2 = outer1_24;
        let tmp3 = outer1_24(items[num].channelList);
        let iter = tmp3();
        let iter2 = iter;
        let tmp4 = tmp;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp5 = arg0(value.record);
            let tmp6 = outer1_24;
            let tmp7 = outer1_24(value.threadIds);
            let iter3 = tmp7();
            let iter4 = iter3;
            let tmp8 = iter3;
            if (!iter3.done) {
              do {
                let tmp9 = outer1_14;
                let channel = outer1_14.getChannel(iter4.value);
                if (null != channel) {
                  let tmp11 = arg0(channel);
                }
                iter5 = tmp7();
                iter4 = iter5;
                tmp8 = iter5;
                tmp4 = channel;
              } while (!iter5.done);
            }
            iter6 = tmp3();
            let tmp12 = tmp8;
            iter2 = iter6;
            let tmp13 = tmp7;
            tmp = tmp4;
          } while (!iter6.done);
        }
      }
    },
    forEachChannel(arg0, arg1) {
      let obj;
      const items = [obj, ...found1];
      for (let num = 0; num < items.length; num = num + 1) {
        let tmp = outer1_24;
        obj = items[num];
        let tmp2 = outer1_24(obj.getChannelRecords());
        let iter = tmp2();
        if (!iter.done) {
          do {
            let tmp3 = arg0(iter.value);
            let iter2 = tmp2();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
      }
    },
    getSlicedChannels(arg0) {
      const items = [[], arg0, []];
      return items;
    },
    getChannels() {
      return [];
    }
  };
  return obj;
}
({ THREAD_CHANNEL_TYPES: closure_10, isGuildReadableType: closure_11, isVoiceChannel: closure_12 } = _callSuper);
({ FAVORITES_RAW_GUILD_ID: closure_20, MAX_FAVORITE_CHANNELS: closure_21 } = require("date"));
let items = [importDefaultResult, importDefaultResult1, importDefaultResult2, importDefaultResult3, importDefaultResult4, importDefaultResult5, importDefaultResult6, importDefaultResult7, importDefaultResult8, importDefaultResult9, importDefaultResult10, importDefaultResult11, importDefaultResult12];
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_sidebar/FavoritesGuildChannelList.tsx");

export const useFavoritesGuildChannelList = function useFavoritesGuildChannelList() {
  let obj = hasAccess(10220);
  hasAccess = obj.useFavoritesAccess("FavoritesGuildChannelList").hasAccess;
  let tmp = callback(React.useState(() => outer1_27()), 2);
  let closure_1 = tmp[1];
  const isConnectedResult = importDefaultResult2.isConnected();
  const dependencyMap = isConnectedResult;
  let memo = React.useMemo(() => outer1_27({}), []);
  const effect = React.useEffect(() => {
    let closure_0 = callback(isConnectedResult[24]).throttle(() => outer1_1(outer2_27()), 100);
    const item = outer1_23.forEach((addChangeListener) => addChangeListener.addChangeListener(closure_0));
    return () => outer2_23.forEach((removeChangeListener) => removeChangeListener.removeChangeListener(outer1_0));
  }, []);
  const items = [hasAccess, isConnectedResult];
  const effect1 = React.useEffect(() => {
    let tmp = hasAccess;
    if (hasAccess) {
      tmp = closure_2;
    }
    if (tmp) {
      const obj = { limit: outer1_21, includeLoading: false };
      const arr = outer1_26(obj);
      if (0 === arr.length) {
        const resolved = Promise.resolve();
      } else {
        const threadsBulk = callback(isConnectedResult[22]).loadThreadsBulk(arr);
        const obj2 = callback(isConnectedResult[22]);
      }
    }
  }, items);
  if (hasAccess) {
    memo = tmp[0];
  }
  if (hasAccess) {
    hasAccess = getMissingFavoriteThreadIds({ limit: 1, includeLoading: true }).length > 0;
  }
  obj = {
    guildChannels: memo,
    shouldShowEmptyState: (function shouldShowFavoritesEmptyState(memo) {
      if (memo.getSections().length > hasAccess(isConnectedResult[20]).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
        return false;
      } else {
        let c0 = false;
        memo.forEachShownChannel(() => {
          let c0 = true;
        });
        return !c0;
      }
    })(memo) && !hasAccess
  };
  return obj;
};
export { computeFavoritesState };

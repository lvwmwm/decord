// Module ID: 14972
// Function ID: 112632
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useFavoritesGuildChannelList

// Module 14972 (_createForOfIteratorHelperLoose)
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
      let tmp15 = closure_0;
      let tmp16 = closure_2;
      if (tmp14.type !== closure_0(closure_2[21]).FavoriteChannelType.REFERENCE_ORIGINAL) {
        continue;
      } else {
        if (null == tmp14.channelType) {
          continue;
        } else {
          let tmp3 = closure_10;
          if (!closure_10.has(tmp14.channelType)) {
            continue;
          } else {
            let tmp4 = closure_14;
            if (null != closure_14.getChannel(key10016)) {
              continue;
            } else {
              let tmp5 = closure_1;
              let tmp6 = closure_2;
              let obj = closure_1(closure_2[22]);
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
                // continue
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
    const favoriteChannels = arg1;
    ({ isCollapsed: closure_1, isMuted: closure_2 } = arg1);
    const mapped = isGuildCollapsedResult(closure_2[24])(items).map((isPrivate) => {
      if (!isPrivate.isPrivate()) {
        if (!closure_16.can(constants.VIEW_CHANNEL, isPrivate)) {
          return null;
        }
      }
      let tmp4 = null != thread;
      if (tmp4) {
        let tmp6 = thread.id === isPrivate.id;
        if (!tmp6) {
          tmp6 = closure_3 === isPrivate.id;
        }
        tmp4 = tmp6;
      }
      let isThreadResult = null != thread;
      if (isThreadResult) {
        isThreadResult = thread.isThread();
      }
      if (isThreadResult) {
        isThreadResult = thread.parent_id === isPrivate.id;
      }
      if (!tmp4) {
        if (!isThreadResult) {
          if (callback) {
            let activeJoinedUnreadThreadsForParent = store.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
          }
          if (null == activeJoinedUnreadThreadsForParent) {
            activeJoinedUnreadThreadsForParent = {};
          }
          const obj2 = arg1(thread[20]);
          const threadIds = obj2.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, thread, closure_3, callback);
          const isCollapsedResult = collapsed.isCollapsed(isPrivate.id);
          if (isPrivate.isThread()) {
            let isMutedResult = muted.isMuted(isPrivate.id);
          } else {
            isMutedResult = channelMuted.isChannelMuted(isPrivate.guild_id, isPrivate.id);
          }
          const obj = { id: isPrivate.id, record: isPrivate, category: arg1, position: arg1[isPrivate.id].order, threadIds, threadCount: callback(thread[24]).size(threadIds), isCollapsed: isCollapsedResult, isMuted: isMutedResult, isFirstVoiceChannel: false };
          const obj4 = callback(thread[24]);
          obj.subtitle = arg1(thread[20]).computeSubtitle(isPrivate, isCollapsedResult, false);
          if (!tmp4) {
            if (!isThreadResult) {
              if (obj6.isEmpty(activeJoinedUnreadThreadsForParent)) {
                if (closure_17.getMentionCount(isPrivate.id) <= 0) {
                  if (callback) {
                    if (isMutedResult) {
                      return null;
                    }
                  }
                  if (callback) {
                    if (!isMutedResult) {
                      if (!thread) {
                        if (!callback3(isPrivate.type)) {
                          if (callback2(isPrivate.type)) {
                            if (false === closure_17.hasUnread(isPrivate.id)) {
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
              const obj6 = callback(thread[24]);
            }
          }
          return obj;
        }
      }
      activeJoinedUnreadThreadsForParent = store.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
    });
    const found = mapped.filter(favoriteChannels(closure_2[25]).isNotNullish);
    const arr = isGuildCollapsedResult(closure_2[24])(items);
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
    favoriteChannels = importDefaultResult1.getFavoriteChannels();
  }
  const arg1 = favoriteChannels;
  const isGuildCollapsedResult = importDefaultResult12.isGuildCollapsed(closure_20);
  const importDefault = isGuildCollapsedResult;
  const channel2 = importDefaultResult7.getChannel(importDefaultResult11.getChannelId());
  const voiceChannelId = importDefaultResult11.getVoiceChannelId();
  const items = [];
  let closure_4 = items;
  let obj = {};
  for (const key10026 in favoriteChannels) {
    let tmp21 = key10026;
    let tmp22 = favoriteChannels[key10026];
    let tmp23 = closure_14;
    let channel = closure_14.getChannel(tmp22.id);
    if (null == channel) {
      continue;
    } else {
      let tmp4 = closure_0;
      let tmp5 = closure_2;
      if (tmp22.type === closure_0(closure_2[21]).FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let tmp6 = closure_6;
        let tmp7 = closure_6(favoriteChannels, tmp22, channel);
        if (null != tmp22.parentId) {
          if (null != favoriteChannels[tmp22.parentId]) {
            let tmp8 = closure_0;
            let tmp9 = closure_2;
            if (favoriteChannels[tmp22.parentId].type === closure_0(closure_2[21]).FavoriteChannelType.CATEGORY) {
              let parentId = tmp22.parentId;
              if (!(parentId in obj)) {
                obj[parentId] = [];
              }
              let arr2 = obj[parentId];
              let arr = arr2.push(tmp7);
              let tmp13 = tmp7;
              // continue
            }
          }
        }
        arr = items.push(tmp7);
        let tmp11 = tmp7;
        // continue
      }
      continue;
    }
    continue;
  }
  let closure_6 = null;
  obj = {
    getChannelRecords() {
      return items;
    },
    getShownChannelIds() {
      return items.map((id) => id.id);
    },
    getShownChannelAndThreadIds() {
      return items.map((id) => id.id);
    },
    isEmpty() {
      return 0 === items.length;
    }
  };
  let num = 0;
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
  const favoritesCategories = arg1(channel2[23]).getFavoritesCategories(favoriteChannels);
  const found = favoritesCategories.filter((id) => null != id.id);
  const mapped = found.map((id) => {
    id = id.id;
    let favoriteChannels;
    let closure_1;
    const categoryRecord = obj.getCategoryRecord(id);
    if (null == categoryRecord) {
      return null;
    } else {
      let items = obj[id];
      if (null == items) {
        items = [];
      }
      favoriteChannels = items;
      closure_1 = null;
      const obj = { isMuted: channelMuted.isChannelMuted(closure_20, id), isCollapsed: collapsed.isCollapsed(id), record: categoryRecord, id };
      let order;
      if (null != favoriteChannels[id]) {
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
              closure_1 = callback(items, this);
            }
            return closure_1;
          },
        set: undefined
      });
      return obj;
    }
  });
  const found1 = mapped.filter((arg0) => null != arg0);
  const items1 = [obj, ...found1];
  let num2 = 0;
  if (0 < items1.length) {
    do {
      let tmp15 = items1[num];
      let sum = num2 + 1;
      tmp15.position = sum;
      let tmp17 = closure_24;
      let tmp18 = closure_24(tmp15.channelList);
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
          let done = iter2.done;
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
    getSections() {
      let length;
      const items = [];
      let num = 0;
      items[favoriteChannels(closure_2[20]).SECTION_INDEX_CHANNEL_NOTICES] = 0;
      items[favoriteChannels(closure_2[20]).SECTION_INDEX_GUILD_ACTIONS] = 0;
      items[favoriteChannels(closure_2[20]).SECTION_INDEX_FAVORITES] = 0;
      items[favoriteChannels(closure_2[20]).SECTION_INDEX_RECENTS] = 0;
      items[favoriteChannels(closure_2[20]).SECTION_INDEX_UNCATEGORIZED_CHANNELS] = obj.channelList.length;
      if (0 < found1.length) {
        do {
          let tmp = closure_0;
          let tmp2 = closure_2;
          let _Math = Math;
          let tmp4 = closure_8;
          let sum = closure_0(closure_2[20]).SECTION_INDEX_FIRST_NAMED_CATEGORY + num;
          items[sum] = Math.max(1, closure_8[num].channelList.length);
          num = num + 1;
          let tmp5 = closure_8;
          length = closure_8.length;
        } while (num < length);
      }
      return items;
    },
    isPlaceholderRow(arg0, arg1) {
      let tmp = arg0 < favoriteChannels(closure_2[20]).SECTION_INDEX_FIRST_NAMED_CATEGORY;
      if (!tmp) {
        tmp = 0 !== arg1;
      }
      let tmp3 = !tmp;
      if (!tmp) {
        tmp3 = 0 === found1[arg0 - closure_0(undefined, closure_2[20]).SECTION_INDEX_FIRST_NAMED_CATEGORY].channelList.length;
      }
      return tmp3;
    },
    getCategoryFromSection(recentsSectionNumber) {
      if (recentsSectionNumber === favoriteChannels(closure_2[20]).SECTION_INDEX_UNCATEGORIZED_CHANNELS) {
        let tmp4 = obj;
      } else {
        tmp4 = found1[recentsSectionNumber - closure_0(undefined, closure_2[20]).SECTION_INDEX_FIRST_NAMED_CATEGORY];
      }
      return tmp4;
    },
    getNamedCategoryFromSection(first) {
      return found1[first - closure_0(undefined, closure_2[20]).SECTION_INDEX_FIRST_NAMED_CATEGORY];
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
    getSectionRowsFromChannel(selectedChannelId) {
      let obj;
      const items = [obj, ...closure_8];
      let num = 0;
      if (0 < items.length) {
        while (true) {
          let tmp = num;
          let num2 = 0;
          if (0 < items[num].channelList.length) {
            let tmp2 = num2;
            while (items[num].channelList[num2].id !== selectedChannelId) {
              num2 = num2 + 1;
              continue;
            }
            obj = {};
            let tmp3 = favoriteChannels;
            let tmp4 = closure_2;
            let num3 = 20;
            obj.section = num + favoriteChannels(closure_2[20]).SECTION_INDEX_UNCATEGORIZED_CHANNELS;
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
      const items = [obj, ...closure_8];
      for (let num = 0; num < items.length; num = num + 1) {
        let tmp2 = callback;
        let tmp3 = callback(items[num].channelList);
        let iter = tmp3();
        let iter2 = iter;
        let tmp4 = tmp;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp5 = arg0(value.record);
            let tmp6 = closure_24;
            let tmp7 = closure_24(value.threadIds);
            let iter3 = tmp7();
            let iter4 = iter3;
            let tmp8 = iter3;
            if (!iter3.done) {
              do {
                let tmp9 = closure_14;
                let channel = closure_14.getChannel(iter4.value);
                if (null != channel) {
                  let tmp11 = arg0(channel);
                }
                let iter5 = tmp7();
                iter4 = iter5;
                tmp8 = iter5;
                tmp4 = channel;
              } while (!iter5.done);
            }
            let iter6 = tmp3();
            let tmp12 = tmp8;
            iter2 = iter6;
            let tmp13 = tmp7;
            let tmp = tmp4;
          } while (!iter6.done);
        }
      }
    },
    forEachChannel(arg0, arg1) {
      let obj;
      const items = [obj, ...closure_8];
      for (let num = 0; num < items.length; num = num + 1) {
        let tmp = callback;
        obj = items[num];
        let tmp2 = callback(obj.getChannelRecords());
        let iter = tmp2();
        if (!iter.done) {
          do {
            let tmp3 = arg0(iter.value);
            let iter2 = tmp2();
            iter = iter2;
            let done = iter2.done;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const importDefaultResult1 = importDefault(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[4]).createFavoritesChannelRecord;
const importDefaultResult2 = importDefault(dependencyMap[5]);
const importDefaultResult = importDefault(dependencyMap[2]);
const importDefaultResult4 = importDefault(dependencyMap[7]);
const importDefaultResult5 = importDefault(dependencyMap[8]);
const importDefaultResult3 = importDefault(dependencyMap[6]);
({ THREAD_CHANNEL_TYPES: closure_10, isGuildReadableType: closure_11, isVoiceChannel: closure_12 } = arg1(dependencyMap[9]));
const importDefaultResult6 = importDefault(dependencyMap[10]);
const importDefaultResult7 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
const tmp8 = arg1(dependencyMap[9]);
const importDefaultResult9 = importDefault(dependencyMap[14]);
const importDefaultResult10 = importDefault(dependencyMap[15]);
const importDefaultResult11 = importDefault(dependencyMap[16]);
const importDefaultResult12 = importDefault(dependencyMap[17]);
const importDefaultResult8 = importDefault(dependencyMap[13]);
({ FAVORITES_RAW_GUILD_ID: closure_20, MAX_FAVORITE_CHANNELS: closure_21 } = arg1(dependencyMap[18]));
const Permissions = arg1(dependencyMap[19]).Permissions;
const items = [importDefaultResult, importDefaultResult1, importDefaultResult2, importDefaultResult3, importDefaultResult4, importDefaultResult5, importDefaultResult6, importDefaultResult7, importDefaultResult8, importDefaultResult9, importDefaultResult10, importDefaultResult11, importDefaultResult12];
const tmp16 = arg1(dependencyMap[18]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/guild_sidebar/FavoritesGuildChannelList.tsx");

export const useFavoritesGuildChannelList = function useFavoritesGuildChannelList() {
  let obj = arg1(dependencyMap[23]);
  let hasAccess = obj.useFavoritesAccess("FavoritesGuildChannelList").hasAccess;
  const arg1 = hasAccess;
  const tmp = callback(React.useState(() => callback3()), 2);
  let closure_1 = tmp[1];
  const isConnectedResult = importDefaultResult2.isConnected();
  const dependencyMap = isConnectedResult;
  let memo = React.useMemo(() => callback3({}), []);
  const effect = React.useEffect(() => {
    let closure_0 = callback(isConnectedResult[24]).throttle(() => callback(callback2()), 100);
    const item = closure_23.forEach((addChangeListener) => addChangeListener.addChangeListener(closure_0));
    return () => closure_23.forEach((removeChangeListener) => removeChangeListener.removeChangeListener(closure_0));
  }, []);
  const items = [hasAccess, isConnectedResult];
  const effect1 = React.useEffect(() => {
    let tmp = hasAccess;
    if (hasAccess) {
      tmp = isConnectedResult;
    }
    if (tmp) {
      const obj = { limit: closure_21, includeLoading: false };
      const arr = callback2(obj);
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
    hasAccess = getMissingFavoriteThreadIds({}).length > 0;
  }
  obj = {
    guildChannels: memo,
    shouldShowEmptyState: function shouldShowFavoritesEmptyState(memo) {
      if (memo.getSections().length > hasAccess(isConnectedResult[20]).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
        return false;
      } else {
        const hasAccess = false;
        memo.forEachShownChannel(() => {
          let closure_0 = true;
        });
        return !hasAccess;
      }
    }(memo) && !hasAccess
  };
  return obj;
};
export { computeFavoritesState };

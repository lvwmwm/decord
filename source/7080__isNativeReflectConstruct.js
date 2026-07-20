// Module ID: 7080
// Function ID: 56741
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7080 (_isNativeReflectConstruct)
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
function getGeneralQueryResultTypes() {
  const GameProfileInQuickswitcherExperiment = arg1(dependencyMap[20]).GameProfileInQuickswitcherExperiment;
  const items = [arg1(dependencyMap[21]).AutocompleterResultTypes.USER, arg1(dependencyMap[21]).AutocompleterResultTypes.GROUP_DM, arg1(dependencyMap[21]).AutocompleterResultTypes.TEXT_CHANNEL, arg1(dependencyMap[21]).AutocompleterResultTypes.GUILD, arg1(dependencyMap[21]).AutocompleterResultTypes.APPLICATION, , ];
  if (GameProfileInQuickswitcherExperiment.getConfig({ location: "QuickSwitcherStore.handleQuickSwitcherShow" }).enabled) {
    const items1 = [arg1(dependencyMap[21]).AutocompleterResultTypes.GAME_PROFILE];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(items2, 5);
  items[arraySpreadResult] = arg1(dependencyMap[21]).AutocompleterResultTypes.LINK;
  const sum = arraySpreadResult + 1;
  items[sum] = arg1(dependencyMap[21]).AutocompleterResultTypes.IN_APP_NAVIGATION;
  return items;
}
function handleConnectionOpen() {
  let tmp = store2.getGuildCount() >= 3;
  if (!tmp) {
    tmp = importDefault(dependencyMap[22]).size(mutablePrivateChannels.getMutablePrivateChannels()) >= 20;
    const obj = importDefault(dependencyMap[22]);
  }
  let closure_29 = tmp;
  let closure_34 = [];
}
function generateResultFromId(arg0) {
  const tmp = importDefault(dependencyMap[23])(arg0);
  let tmp2 = null;
  if (null != tmp) {
    if (null == closure_30) {
      tmp2 = tmp;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
}
function generateInitialResults() {
  let done;
  let done2;
  const guildId = store3.getGuildId();
  const channelId = channelId.getChannelId();
  let tmp4;
  if (null != channelId) {
    tmp4 = channelId;
  }
  const arg1 = tmp4;
  if (arg1(dependencyMap[21]).AutocompleterResultTypes.USER === closure_30) {
    const importDefault = store.getId();
    const recentlyTalked = importDefault(dependencyMap[24]).getRecentlyTalked(tmp4, 100);
    return recentlyTalked.filter((record) => record.record.id !== closure_1);
  } else if (arg1(dependencyMap[21]).AutocompleterResultTypes.APPLICATION === tmp5) {
    return importDefault(dependencyMap[24]).queryApplications({});
  } else if (arg1(dependencyMap[21]).AutocompleterResultTypes.GAME_PROFILE === tmp5) {
    return [];
  } else if (arg1(dependencyMap[21]).AutocompleterResultTypes.GUILD === tmp5) {
    return importDefault(dependencyMap[24]).queryGuilds({});
  } else if (arg1(dependencyMap[21]).AutocompleterResultTypes.TEXT_CHANNEL === tmp5) {
    let obj = { guildId: store3.getGuildId() };
    return importDefault(dependencyMap[24]).queryChannels(obj);
  } else if (arg1(dependencyMap[21]).AutocompleterResultTypes.VOICE_CHANNEL === tmp5) {
    obj = {
      guildId: store3.getGuildId(),
      filter() {
          return true;
        },
      type: GUILD_VOCAL_CHANNELS_KEY
    };
    return importDefault(dependencyMap[24]).queryChannels(obj);
  } else {
    const items = [];
    const _Set = Set;
    const set = new Set();
    const dependencyMap = set;
    const items1 = [];
    let num = 1;
    if (1 < closure_35.length) {
      do {
        let tmp6 = closure_42;
        let tmp7 = closure_35;
        let tmp8 = closure_42(closure_35[num]);
        if (null != tmp8) {
          let tmp65 = closure_0;
          let tmp66 = closure_2;
          let canResult = tmp8.type !== closure_0(closure_2[21]).AutocompleterResultTypes.TEXT_CHANNEL;
          if (canResult) {
            let tmp9 = closure_0;
            let tmp10 = closure_2;
            canResult = tmp8.type !== closure_0(closure_2[21]).AutocompleterResultTypes.VOICE_CHANNEL;
          }
          if (!canResult) {
            let tmp12 = closure_19;
            let tmp13 = closure_25;
            canResult = closure_19.can(closure_25.VIEW_CHANNEL, tmp8.record);
          }
          if (canResult) {
            let arr = items1.push(tmp8);
            if (set.size < 3) {
              let tmp15 = closure_35;
              let addResult = set.add(closure_35[num]);
            }
          }
        }
        num = num + 1;
        let tmp17 = closure_35;
      } while (num < closure_35.length);
    }
    arr = function getDrafts(arg0) {
      const items = [];
      let closure_1 = items;
      const recentlyEditedDrafts = recentlyEditedDrafts.getRecentlyEditedDrafts(ChannelMessage.ChannelMessage);
      const item = recentlyEditedDrafts.forEach((channelId) => {
        channelId = channelId.channelId;
        if (!channelId(channelId)) {
          const tmp2 = callback(channelId);
          if (null != tmp2) {
            const obj = { record: tmp2, channelId };
            items.push(obj);
          }
        }
      });
      return items;
    }((arg0) => {
      let hasItem = arg0 === tmp4;
      if (!hasItem) {
        hasItem = set.has(arg0);
      }
      return hasItem;
    });
    if (arr.length > 0) {
      const intl2 = arg1(dependencyMap[25]).intl;
      arr = items.push(arg1(dependencyMap[21]).createHeaderResult(intl2.string(arg1(dependencyMap[25]).t.4B63jZ)));
      const tmp71 = _createForOfIteratorHelperLoose(arr);
      let iter2 = tmp71();
      if (!iter2.done) {
        do {
          let value = iter2.value;
          let addResult1 = set.add(value.channelId);
          let arr1 = items.push(value.record);
          let iter = tmp71();
          iter2 = iter;
          done = iter.done;
        } while (!done);
      }
      const obj11 = arg1(dependencyMap[21]);
    }
    const mentionChannelIds = mentionChannelIds.getMentionChannelIds();
    const found = mentionChannelIds.filter((arg0) => {
      let tmp = arg0 !== tmp4;
      if (tmp) {
        tmp = !set.has(arg0);
      }
      return tmp;
    });
    const items2 = [];
    let diff = found.length - 1;
    if (diff >= 0) {
      do {
        let tmp22 = found[diff];
        if (null != tmp22) {
          let tmp23 = closure_42;
          let tmp24 = closure_42(tmp22);
          let tmp25 = tmp24;
          if (null != tmp24) {
            obj = { channelId: tmp22, result: tmp24 };
            let arr2 = items2.push(obj);
            let tmp27 = tmp24;
          }
        }
        diff = diff - 1;
      } while (diff >= 0);
    }
    if (items2.length > 0) {
      const intl3 = arg1(dependencyMap[25]).intl;
      items.push(arg1(dependencyMap[21]).createHeaderResult(intl3.string(arg1(dependencyMap[25]).t.61Df13)));
      const tmp76 = _createForOfIteratorHelperLoose(items2);
      let iter4 = tmp76();
      if (!iter4.done) {
        do {
          value = iter4.value;
          let result = value.result;
          let addResult2 = set.add(result.record.id);
          let addResult3 = set.add(value.channelId);
          let arr4 = items.push(result);
          let iter3 = tmp76();
          iter4 = iter3;
          done2 = iter3.done;
        } while (!done2);
      }
      const obj12 = arg1(dependencyMap[21]);
    }
    let combined = items;
    if (null != tmp2) {
      const selectableChannelIds = selectableChannelIds.getSelectableChannelIds(tmp2);
      const found1 = selectableChannelIds.filter((channelId) => {
        const channel = channel.getChannel(channelId);
        let hasItem = null == channel;
        if (!hasItem) {
          hasItem = channelId === tmp4;
        }
        if (!hasItem) {
          hasItem = set.has(channelId);
        }
        if (!hasItem) {
          hasItem = closure_23.isChannelMuted(channel.guild_id, channelId);
        }
        if (!hasItem) {
          let isChannelMutedResult = null != channel.parent_id;
          if (isChannelMutedResult) {
            isChannelMutedResult = closure_23.isChannelMuted(channel.guild_id, channel.parent_id);
          }
          hasItem = isChannelMutedResult;
        }
        let hasImportantUnread = !hasItem;
        if (hasImportantUnread) {
          hasImportantUnread = tmp4(set[26]).getHasImportantUnread(channel);
          const obj = tmp4(set[26]);
        }
        return hasImportantUnread;
      });
      const mapped = found1.map((arg0) => callback(arg0));
      const found2 = mapped.filter(arg1(dependencyMap[27]).isNotNullish);
      let closure_3 = found2;
      const _Object = Object;
      const values = Object.values(activeJoinedUnreadThreadsForGuild.getActiveJoinedUnreadThreadsForGuild(tmp2));
      const item = values.forEach((obj) => {
        for (const key10004 in arg0) {
          let tmp5 = key10004;
          let tmp6 = closure_42;
          let tmp7 = closure_42(key10004);
          let hasItem = null == tmp7;
          if (!hasItem) {
            let tmp = closure_2;
            hasItem = closure_2.has(tmp7.record.id);
          }
          if (hasItem) {
            continue;
          } else {
            let tmp3 = closure_3;
            let arr = closure_3.push(tmp7);
            // continue
          }
          continue;
        }
      });
      combined = items;
      if (found2.length > 0) {
        const intl = arg1(dependencyMap[25]).intl;
        items.push(arg1(dependencyMap[21]).createHeaderResult(intl.string(arg1(dependencyMap[25]).t.ieCAhD)));
        combined = items.concat(found2);
        const obj2 = arg1(dependencyMap[21]);
      }
    }
    let num4 = 7;
    if (combined.length > 0) {
      num4 = 3;
    }
    if (items1.length > num4) {
      items1.splice(num4);
    }
    let tmp35 = combined;
    if (items1.length > 0) {
      const intl4 = arg1(dependencyMap[25]).intl;
      const items3 = [arg1(dependencyMap[21]).createHeaderResult(intl4.string(arg1(dependencyMap[25]).t.80lOZ1))];
      HermesBuiltin.arraySpread(items1, 1);
      const items4 = [];
      HermesBuiltin.arraySpread(combined, HermesBuiltin.arraySpread(items3, 0));
      tmp35 = items4;
      const obj13 = arg1(dependencyMap[21]);
    }
    return tmp35;
  }
}
function updateResults(arr, arg1) {
  if (arg1(dependencyMap[21]).AutocompleterResultTypes.USER === closure_30) {
    let name = store2.getGuild(store3.getGuildId());
    if (null != name) {
      const intl7 = arg1(dependencyMap[25]).intl;
      let obj = {};
      name = name.name;
      obj.name = name;
      let formatToPlainStringResult = intl7.formatToPlainString(arg1(dependencyMap[25]).t.FREzQs, obj);
    } else {
      const intl6 = arg1(dependencyMap[25]).intl;
      formatToPlainStringResult = intl6.string(arg1(dependencyMap[25]).t.XFYW1o);
    }
    arr.unshift(arg1(dependencyMap[21]).createHeaderResult(formatToPlainStringResult));
    let closure_31 = arr;
    const obj6 = arg1(dependencyMap[21]);
  } else {
    if (arg1(dependencyMap[21]).AutocompleterResultTypes.TEXT_CHANNEL === tmp) {
      const intl5 = arg1(dependencyMap[25]).intl;
      arr.unshift(arg1(dependencyMap[21]).createHeaderResult(intl5.string(arg1(dependencyMap[25]).t.W26k4V)));
      closure_31 = arr;
      const obj5 = arg1(dependencyMap[21]);
    } else if (arg1(dependencyMap[21]).AutocompleterResultTypes.VOICE_CHANNEL === tmp) {
      const intl4 = arg1(dependencyMap[25]).intl;
      arr.unshift(arg1(dependencyMap[21]).createHeaderResult(intl4.string(arg1(dependencyMap[25]).t.zUoI5C)));
      closure_31 = arr;
      const obj4 = arg1(dependencyMap[21]);
    } else if (arg1(dependencyMap[21]).AutocompleterResultTypes.GUILD === tmp) {
      const intl3 = arg1(dependencyMap[25]).intl;
      arr.unshift(arg1(dependencyMap[21]).createHeaderResult(intl3.string(arg1(dependencyMap[25]).t.olADPs)));
      closure_31 = arr;
      const obj3 = arg1(dependencyMap[21]);
    } else if (arg1(dependencyMap[21]).AutocompleterResultTypes.APPLICATION === tmp) {
      const intl2 = arg1(dependencyMap[25]).intl;
      arr.unshift(arg1(dependencyMap[21]).createHeaderResult(intl2.string(arg1(dependencyMap[25]).t.VwK1ld)));
      closure_31 = arr;
      const obj2 = arg1(dependencyMap[21]);
    } else if (arg1(dependencyMap[21]).AutocompleterResultTypes.GAME_PROFILE === tmp) {
      obj = arg1(dependencyMap[21]);
      const intl = arg1(dependencyMap[25]).intl;
      arr.unshift(obj.createHeaderResult(intl.string(arg1(dependencyMap[25]).t.gEp2SG)));
      closure_31 = arr;
    } else {
      const GameProfileInQuickswitcherExperiment = arg1(dependencyMap[20]).GameProfileInQuickswitcherExperiment;
      obj = { location: "QuickSwitcherStore.updateResults" };
      if (GameProfileInQuickswitcherExperiment.getConfig(obj).enabled) {
        const found = arr.filter((type) => type.type === callback(closure_2[21]).AutocompleterResultTypes.GAME_PROFILE);
        const substr = found.slice(0, 3);
        const items = [];
        HermesBuiltin.arraySpread(substr, HermesBuiltin.arraySpread(arr.filter((type) => type.type !== callback(closure_2[21]).AutocompleterResultTypes.GAME_PROFILE), 0));
        closure_31 = items;
      } else {
        closure_31 = arr;
      }
    }
    if (arg1 !== closure_32) {
      closure_32 = arg1;
      const _Math = Math;
      closure_33 = Math.max(arg1.length, closure_33);
      let closure_27 = arg1(dependencyMap[21]).findNextSelectedResult(arg1(dependencyMap[21]).FindResultDirections.DOWN, -1, closure_31);
      const obj9 = arg1(dependencyMap[21]);
    } else {
      let tmp36 = null != tmp62;
      if (tmp36) {
        tmp36 = tmp62.type === arg1(dependencyMap[21]).AutocompleterResultTypes.HEADER;
      }
      if (tmp36) {
        closure_27 = arg1(dependencyMap[21]).findNextSelectedResult(arg1(dependencyMap[21]).FindResultDirections.DOWN, closure_27, closure_31);
        const obj8 = arg1(dependencyMap[21]);
      }
    }
    tmp3.emitChange();
  }
}
function handleQuickSwitcherShow(arg0) {
  let query;
  let queryMode;
  ({ query, queryMode } = arg0);
  const trimmed = query.trim();
  const guildId = store3.getGuildId();
  let tmp2;
  if (null != guildId) {
    tmp2 = guildId;
  }
  const items = ["user:" + store.getId()];
  const set = new Set(items);
  if (null != tmp2) {
    const _HermesInternal = HermesInternal;
    set.add("guild:" + tmp2);
  }
  let closure_36 = Date.now();
  if (null == tmp6) {
    let tmp6 = importDefault(dependencyMap[21]);
    const tmp9 = getGeneralQueryResultTypes();
    let num2 = 5;
    if (null != queryMode) {
      num2 = 100;
    }
    const obj = { display: 24, flexDirection: 24, paddingRight: null, blacklist: set };
    const prototype = tmp6.prototype;
    tmp6 = new tmp6(tmp7, tmp9, num2, obj, 100);
  }
  let closure_32 = null;
  let closure_33 = trimmed.length;
  let closure_30 = queryMode;
  tmp6.search(trimmed);
}
function handleUserSearchUpdate(arr, str) {
  str = str.trim();
  if ("" === str.trim()) {
    arr = generateInitialResults();
  }
  let flag = false;
  if (arr.length === length.length) {
    let num = 0;
    flag = true;
    if (0 < arr.length) {
      flag = false;
      while (arr[num].record.id === tmp2[num].record.id) {
        flag = false;
        if (tmp3.type !== tmp4.type) {
          break;
        } else {
          num = num + 1;
          flag = true;
          if (num >= arr.length) {
            break;
          }
        }
      }
    }
  }
  if (!flag) {
    updateResults(arr, str);
    const length = arr;
  }
}
function handleQuickSwitcherHide() {
  let closure_32 = null;
  let closure_33 = 0;
  let closure_34 = [];
  if (null != store4) {
    store4.destroy();
    const store4 = null;
  }
}
function handleGameAutocompleteSettled() {
  if (null == store4) {
    return false;
  } else {
    store4.refreshGameProfiles();
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
const DraftType = arg1(dependencyMap[10]).DraftType;
let closure_15 = importDefault(dependencyMap[11]);
const GUILD_VOCAL_CHANNELS_KEY = arg1(dependencyMap[11]).GUILD_VOCAL_CHANNELS_KEY;
let closure_17 = importDefault(dependencyMap[12]);
let closure_18 = importDefault(dependencyMap[13]);
let closure_19 = importDefault(dependencyMap[14]);
let closure_20 = importDefault(dependencyMap[15]);
let closure_21 = importDefault(dependencyMap[16]);
let closure_22 = importDefault(dependencyMap[17]);
let closure_23 = importDefault(dependencyMap[18]);
({ CHANNEL_NOTICE_SHOW_DELAY: closure_24, Permissions: closure_25 } = arg1(dependencyMap[19]));
let closure_27 = 0;
let closure_28 = false;
let closure_29 = false;
let closure_30 = null;
let closure_31 = [];
let closure_32 = null;
let closure_33 = 0;
let closure_34 = [];
let closure_35 = [];
let closure_36 = null;
let tmp3 = (PersistedStore) => {
  class QuickSwitcherStoreClass {
    constructor() {
      self = this;
      tmp = closure_3(this, QuickSwitcherStoreClass);
      obj = closure_6(QuickSwitcherStoreClass);
      tmp2 = closure_5;
      if (closure_38()) {
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
  const arg1 = QuickSwitcherStoreClass;
  callback2(QuickSwitcherStoreClass, PersistedStore);
  let obj = {
    key: "initialize",
    value(channelHistory) {
      this.waitFor(closure_9, closure_11, closure_12, closure_13, closure_8, closure_15, closure_17, closure_18, closure_19, closure_20, closure_21, closure_22, closure_10, closure_23);
      const items = [closure_10];
      this.syncWith(items, () => true);
      const Storage = QuickSwitcherStoreClass(closure_2[28]).Storage;
      const tmp3 = Storage.get("seenQSTutorial") || false;
      channelHistory = undefined;
      if (null != channelHistory) {
        channelHistory = channelHistory.channelHistory;
      }
      if (null == channelHistory) {
        channelHistory = [];
      }
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { channelHistory: closure_35 };
    }
  };
  items[1] = obj;
  obj = {
    key: "isOpen",
    value() {
      return null != closure_26;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getResultTotals",
    value(arg0) {
      const QuickSwitcherStoreClass = arg0;
      if (null == closure_26) {
        return 0;
      } else if (null == arg0) {
        const results = closure_26.results;
        let reduced = results.reduce((arg0, type) => {
          let sum = arg0;
          if (type.type !== arg0(closure_2[21]).AutocompleterResultTypes.HEADER) {
            sum = arg0 + 1;
          }
          return sum;
        }, 0);
      } else {
        const results1 = closure_26.results;
        reduced = results1.reduce((arg0, type) => {
          let sum = arg0;
          if (type.type === arg0) {
            sum = arg0 + 1;
          }
          return sum;
        }, 0);
      }
    }
  };
  items[4] = {
    key: "channelNoticePredicate",
    value(arg0, arg1) {
      let tmp = closure_29;
      if (closure_29) {
        tmp = Date.now() - arg1 >= closure_24;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getFrequentGuilds",
    value() {
      let queryGuildsResult = null;
      if (null != closure_26) {
        queryGuildsResult = closure_26.queryGuilds("", 100);
      }
      return queryGuildsResult;
    }
  };
  items[6] = {
    key: "getFrequentGuildsLength",
    value() {
      let num = 0;
      if (null != closure_26) {
        num = closure_26.queryGuilds("", 100).length;
      }
      return num;
    }
  };
  items[7] = {
    key: "getChannelHistory",
    value() {
      return closure_35;
    }
  };
  items[8] = {
    key: "getLastShowTimestamp",
    value() {
      return closure_36;
    }
  };
  items[9] = {
    key: "getProps",
    value() {
      const obj = { theme: theme.theme };
      let str = "";
      if (null != closure_26) {
        str = closure_26.query;
      }
      obj.query = str;
      obj.queryMode = closure_30;
      obj.results = closure_31;
      obj.selectedIndex = closure_27;
      obj.seenTutorial = closure_28;
      obj.maxQueryLength = closure_33;
      return obj;
    }
  };
  return callback(QuickSwitcherStoreClass, items);
}(importDefault(dependencyMap[29]).PersistedStore);
tmp3.displayName = "QuickSwitcherStore";
tmp3.persistKey = "QuickSwitcherStore";
tmp3 = new tmp3(importDefault(dependencyMap[30]), {
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  QUICKSWITCHER_SHOW: handleQuickSwitcherShow,
  SHOW_ACTION_SHEET_QUICK_SWITCHER: handleQuickSwitcherShow,
  QUICKSWITCHER_HIDE: handleQuickSwitcherHide,
  OVERLAY_SET_INPUT_LOCKED: handleQuickSwitcherHide,
  HIDE_ACTION_SHEET_QUICK_SWITCHER: handleQuickSwitcherHide,
  QUICKSWITCHER_SEARCH: function handleQuickSwitcherSearch(arg0) {
    let query;
    let queryMode;
    ({ query, queryMode } = arg0);
    const trimmed = query.trim();
    if (null == store4) {
      return false;
    } else {
      if (closure_30 !== queryMode) {
        if (null != queryMode) {
          const items = [queryMode];
          let tmp3 = items;
        } else {
          tmp3 = getGeneralQueryResultTypes();
        }
        store4.setResultTypes(tmp3);
        let num = 5;
        if (null != queryMode) {
          num = 100;
        }
        store4.setLimit(num);
        const guildId = store3.getGuildId();
        if (queryMode === arg1(dependencyMap[21]).AutocompleterResultTypes.USER) {
          if (null != tmp9) {
            let obj = {};
            obj = { guild: tmp9, friends: true };
            obj.userFilters = obj;
            store4.setOptions(obj, true);
          }
        }
        if (queryMode === arg1(dependencyMap[21]).AutocompleterResultTypes.VOICE_CHANNEL) {
          const obj1 = { voiceChannelGuildFilter: null };
          store4.setOptions(obj1, true);
        } else {
          obj = { userFilters: null, voiceChannelGuildFilter: undefined };
          store4.setOptions(obj, true);
        }
      }
      closure_30 = queryMode;
      if (queryMode === arg1(dependencyMap[21]).AutocompleterResultTypes.USER) {
        const guildId1 = store3.getGuildId();
        let tmp26 = null;
        if (null != guildId1) {
          tmp26 = guildId1;
        }
        store4.search(trimmed, tmp26);
      } else {
        store4.search(trimmed, undefined);
      }
    }
  },
  QUICKSWITCHER_SELECT: function handleQuickSwitcherSelect(selectedIndex) {
    selectedIndex = selectedIndex.selectedIndex;
  },
  QUICKSWITCHER_SWITCH_TO: function handleQuickSwitcherSwitchTo() {
    if (closure_28) {
      return false;
    } else {
      closure_28 = true;
      const Storage = arg1(dependencyMap[28]).Storage;
      const result = Storage.set("seenQSTutorial", true);
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const arg1 = channelId;
    if (null == channelId) {
      return false;
    } else {
      const found = closure_35.filter((arg0) => arg0 !== channelId);
      closure_35 = found;
      found.unshift(channelId);
      if (closure_35.length > 8) {
        closure_35.length = 8;
      }
    }
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: handleGameAutocompleteSettled,
  GAME_AUTOCOMPLETE_FETCH_FAILURE: handleGameAutocompleteSettled
});
const obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  QUICKSWITCHER_SHOW: handleQuickSwitcherShow,
  SHOW_ACTION_SHEET_QUICK_SWITCHER: handleQuickSwitcherShow,
  QUICKSWITCHER_HIDE: handleQuickSwitcherHide,
  OVERLAY_SET_INPUT_LOCKED: handleQuickSwitcherHide,
  HIDE_ACTION_SHEET_QUICK_SWITCHER: handleQuickSwitcherHide,
  QUICKSWITCHER_SEARCH: function handleQuickSwitcherSearch(arg0) {
    let query;
    let queryMode;
    ({ query, queryMode } = arg0);
    const trimmed = query.trim();
    if (null == store4) {
      return false;
    } else {
      if (closure_30 !== queryMode) {
        if (null != queryMode) {
          const items = [queryMode];
          let tmp3 = items;
        } else {
          tmp3 = getGeneralQueryResultTypes();
        }
        store4.setResultTypes(tmp3);
        let num = 5;
        if (null != queryMode) {
          num = 100;
        }
        store4.setLimit(num);
        const guildId = store3.getGuildId();
        if (queryMode === arg1(dependencyMap[21]).AutocompleterResultTypes.USER) {
          if (null != tmp9) {
            let obj = {};
            obj = { guild: tmp9, friends: true };
            obj.userFilters = obj;
            store4.setOptions(obj, true);
          }
        }
        if (queryMode === arg1(dependencyMap[21]).AutocompleterResultTypes.VOICE_CHANNEL) {
          const obj1 = { voiceChannelGuildFilter: null };
          store4.setOptions(obj1, true);
        } else {
          obj = { userFilters: null, voiceChannelGuildFilter: undefined };
          store4.setOptions(obj, true);
        }
      }
      closure_30 = queryMode;
      if (queryMode === arg1(dependencyMap[21]).AutocompleterResultTypes.USER) {
        const guildId1 = store3.getGuildId();
        let tmp26 = null;
        if (null != guildId1) {
          tmp26 = guildId1;
        }
        store4.search(trimmed, tmp26);
      } else {
        store4.search(trimmed, undefined);
      }
    }
  },
  QUICKSWITCHER_SELECT: function handleQuickSwitcherSelect(selectedIndex) {
    selectedIndex = selectedIndex.selectedIndex;
  },
  QUICKSWITCHER_SWITCH_TO: function handleQuickSwitcherSwitchTo() {
    if (closure_28) {
      return false;
    } else {
      closure_28 = true;
      const Storage = arg1(dependencyMap[28]).Storage;
      const result = Storage.set("seenQSTutorial", true);
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const arg1 = channelId;
    if (null == channelId) {
      return false;
    } else {
      const found = closure_35.filter((arg0) => arg0 !== channelId);
      closure_35 = found;
      found.unshift(channelId);
      if (closure_35.length > 8) {
        closure_35.length = 8;
      }
    }
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: handleGameAutocompleteSettled,
  GAME_AUTOCOMPLETE_FETCH_FAILURE: handleGameAutocompleteSettled
};
const tmp2 = arg1(dependencyMap[19]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/quickswitcher/QuickSwitcherStore.tsx");

export default tmp3;
export { generateResultFromId };

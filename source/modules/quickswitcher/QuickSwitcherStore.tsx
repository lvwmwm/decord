// Module ID: 7090
// Function ID: 56809
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 7091, 5039, 1278, 1194, 1348, 4468, 1907, 1917, 1838, 3758, 4142, 1906, 3947, 4325, 653, 7093, 7094, 22, 7105, 4974, 1212, 7106, 1327, 587, 566, 686, 2]

// Module 7090 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import { GUILD_VOCAL_CHANNELS_KEY } from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_24;
let closure_25;
let require = arg1;
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
function getGeneralQueryResultTypes() {
  const GameProfileInQuickswitcherExperiment = require(7093) /* GameProfileInQuickswitcherExperiment */.GameProfileInQuickswitcherExperiment;
  const items = [require(7094) /* sortByMatchScore */.AutocompleterResultTypes.USER, require(7094) /* sortByMatchScore */.AutocompleterResultTypes.GROUP_DM, require(7094) /* sortByMatchScore */.AutocompleterResultTypes.TEXT_CHANNEL, require(7094) /* sortByMatchScore */.AutocompleterResultTypes.GUILD, require(7094) /* sortByMatchScore */.AutocompleterResultTypes.APPLICATION, , ];
  if (GameProfileInQuickswitcherExperiment.getConfig({ location: "QuickSwitcherStore.handleQuickSwitcherShow" }).enabled) {
    const items1 = [require(7094) /* sortByMatchScore */.AutocompleterResultTypes.GAME_PROFILE];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(items2, 5);
  items[arraySpreadResult] = require(7094) /* sortByMatchScore */.AutocompleterResultTypes.LINK;
  const sum = arraySpreadResult + 1;
  items[sum] = require(7094) /* sortByMatchScore */.AutocompleterResultTypes.IN_APP_NAVIGATION;
  return items;
}
function handleConnectionOpen() {
  let tmp = store2.getGuildCount() >= 3;
  if (!tmp) {
    tmp = importDefault(22).size(mutablePrivateChannels.getMutablePrivateChannels()) >= 20;
    const obj = importDefault(22);
  }
  let c29 = tmp;
  let closure_34 = [];
}
function generateResultFromId(arg0) {
  const tmp = importDefault(7105)(arg0);
  let tmp2 = null;
  if (null != tmp) {
    if (null == c30) {
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
  channelId = channelId.getChannelId();
  let tmp4;
  if (null != channelId) {
    tmp4 = channelId;
  }
  const require = tmp4;
  if (require(set[21]).AutocompleterResultTypes.USER === c30) {
    const importDefault = store.getId();
    const recentlyTalked = importDefault(set[24]).getRecentlyTalked(tmp4, 100);
    return recentlyTalked.filter((record) => record.record.id !== closure_1);
  } else if (require(set[21]).AutocompleterResultTypes.APPLICATION === tmp5) {
    return importDefault(set[24]).queryApplications({ query: "", limit: 100, fuzzy: true });
  } else if (require(set[21]).AutocompleterResultTypes.GAME_PROFILE === tmp5) {
    return [];
  } else if (require(set[21]).AutocompleterResultTypes.GUILD === tmp5) {
    return importDefault(set[24]).queryGuilds({ query: "", limit: 100, fuzzy: true });
  } else if (require(set[21]).AutocompleterResultTypes.TEXT_CHANNEL === tmp5) {
    let obj = { query: "", guildId: store3.getGuildId(), limit: 100, fuzzy: true, allowEmptyQueries: true };
    return importDefault(set[24]).queryChannels(obj);
  } else if (require(set[21]).AutocompleterResultTypes.VOICE_CHANNEL === tmp5) {
    obj = {
      query: "",
      guildId: store3.getGuildId(),
      limit: 100,
      fuzzy: true,
      filter() {
          return true;
        },
      type: GUILD_VOCAL_CHANNELS_KEY,
      allowEmptyQueries: true
    };
    return importDefault(set[24]).queryChannels(obj);
  } else {
    let items = [];
    const _Set = Set;
    set = new Set();
    const items1 = [];
    let num = 1;
    if (1 < closure_35.length) {
      do {
        let tmp6 = generateResultFromId;
        let tmp7 = closure_35;
        let tmp8 = generateResultFromId(closure_35[num]);
        if (null != tmp8) {
          let tmp65 = require;
          let tmp66 = set;
          let canResult = tmp8.type !== require(set[21]).AutocompleterResultTypes.TEXT_CHANNEL;
          if (canResult) {
            let tmp9 = require;
            let tmp10 = set;
            canResult = tmp8.type !== require(set[21]).AutocompleterResultTypes.VOICE_CHANNEL;
          }
          if (!canResult) {
            let tmp12 = closure_19;
            let tmp13 = constants;
            canResult = closure_19.can(constants.VIEW_CHANNEL, tmp8.record);
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
    arr = (function getDrafts(arg0) {
      let closure_0 = arg0;
      const items = [];
      const recentlyEditedDrafts = outer1_13.getRecentlyEditedDrafts(outer1_14.ChannelMessage);
      const item = recentlyEditedDrafts.forEach((channelId) => {
        channelId = channelId.channelId;
        if (!callback(channelId)) {
          const tmp2 = outer2_42(channelId);
          if (null != tmp2) {
            const obj = { record: tmp2, channelId };
            items.push(obj);
          }
        }
      });
      return items;
    })((arg0) => {
      let hasItem = arg0 === closure_0;
      if (!hasItem) {
        hasItem = set.has(arg0);
      }
      return hasItem;
    });
    if (arr.length > 0) {
      const intl2 = require(set[25]).intl;
      arr = items.push(require(set[21]).createHeaderResult(intl2.string(require(set[25]).t["4B63jZ"])));
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
      const obj11 = require(set[21]);
    }
    mentionChannelIds = mentionChannelIds.getMentionChannelIds();
    const found = mentionChannelIds.filter((arg0) => {
      let tmp = arg0 !== closure_0;
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
          let tmp23 = generateResultFromId;
          let tmp24 = generateResultFromId(tmp22);
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
      const intl3 = require(set[25]).intl;
      items.push(require(set[21]).createHeaderResult(intl3.string(require(set[25]).t["61Df13"])));
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
      const obj12 = require(set[21]);
    }
    let combined = items;
    if (null != tmp2) {
      selectableChannelIds = selectableChannelIds.getSelectableChannelIds(tmp2);
      const found1 = selectableChannelIds.filter((channelId) => {
        const channel = outer1_12.getChannel(channelId);
        let hasItem = null == channel;
        if (!hasItem) {
          hasItem = channelId === tmp4;
        }
        if (!hasItem) {
          hasItem = set.has(channelId);
        }
        if (!hasItem) {
          hasItem = outer1_23.isChannelMuted(channel.guild_id, channelId);
        }
        if (!hasItem) {
          let isChannelMutedResult = null != channel.parent_id;
          if (isChannelMutedResult) {
            isChannelMutedResult = outer1_23.isChannelMuted(channel.guild_id, channel.parent_id);
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
      const mapped = found1.map((arg0) => outer1_42(arg0));
      const found2 = mapped.filter(require(set[27]).isNotNullish);
      const _Object = Object;
      const values = Object.values(activeJoinedUnreadThreadsForGuild.getActiveJoinedUnreadThreadsForGuild(tmp2));
      let item = values.forEach((obj) => {
        for (const key10004 in arg0) {
          let tmp5 = key10004;
          let tmp6 = outer1_42;
          let tmp7 = outer1_42(key10004);
          let hasItem = null == tmp7;
          if (!hasItem) {
            let tmp = set;
            hasItem = set.has(tmp7.record.id);
          }
          if (hasItem) {
            continue;
          } else {
            let tmp3 = found2;
            let arr = found2.push(tmp7);
            continue;
          }
          continue;
        }
      });
      combined = items;
      if (found2.length > 0) {
        const intl = require(set[25]).intl;
        items.push(require(set[21]).createHeaderResult(intl.string(require(set[25]).t.ieCAhD)));
        combined = items.concat(found2);
        const obj2 = require(set[21]);
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
      const intl4 = require(set[25]).intl;
      const items3 = [require(set[21]).createHeaderResult(intl4.string(require(set[25]).t["80lOZ1"]))];
      HermesBuiltin.arraySpread(items1, 1);
      const items4 = [];
      HermesBuiltin.arraySpread(combined, HermesBuiltin.arraySpread(items3, 0));
      tmp35 = items4;
      const obj13 = require(set[21]);
    }
    return tmp35;
  }
}
function updateResults(arr, arg1) {
  if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.USER === c30) {
    let name = store2.getGuild(store3.getGuildId());
    if (null != name) {
      const intl7 = require(1212) /* getSystemLocale */.intl;
      let obj = {};
      name = name.name;
      obj.name = name;
      let formatToPlainStringResult = intl7.formatToPlainString(require(1212) /* getSystemLocale */.t.FREzQs, obj);
    } else {
      const intl6 = require(1212) /* getSystemLocale */.intl;
      formatToPlainStringResult = intl6.string(require(1212) /* getSystemLocale */.t.XFYW1o);
    }
    arr.unshift(require(7094) /* sortByMatchScore */.createHeaderResult(formatToPlainStringResult));
    let table = arr;
    const obj6 = require(7094) /* sortByMatchScore */;
  } else {
    if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.TEXT_CHANNEL === tmp) {
      const intl5 = require(1212) /* getSystemLocale */.intl;
      arr.unshift(require(7094) /* sortByMatchScore */.createHeaderResult(intl5.string(require(1212) /* getSystemLocale */.t.W26k4V)));
      table = arr;
      const obj5 = require(7094) /* sortByMatchScore */;
    } else if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.VOICE_CHANNEL === tmp) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      arr.unshift(require(7094) /* sortByMatchScore */.createHeaderResult(intl4.string(require(1212) /* getSystemLocale */.t.zUoI5C)));
      table = arr;
      const obj4 = require(7094) /* sortByMatchScore */;
    } else if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.GUILD === tmp) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      arr.unshift(require(7094) /* sortByMatchScore */.createHeaderResult(intl3.string(require(1212) /* getSystemLocale */.t.olADPs)));
      table = arr;
      const obj3 = require(7094) /* sortByMatchScore */;
    } else if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.APPLICATION === tmp) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      arr.unshift(require(7094) /* sortByMatchScore */.createHeaderResult(intl2.string(require(1212) /* getSystemLocale */.t.VwK1ld)));
      table = arr;
      const obj2 = require(7094) /* sortByMatchScore */;
    } else if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.GAME_PROFILE === tmp) {
      obj = require(7094) /* sortByMatchScore */;
      const intl = require(1212) /* getSystemLocale */.intl;
      arr.unshift(obj.createHeaderResult(intl.string(require(1212) /* getSystemLocale */.t.gEp2SG)));
      table = arr;
    } else {
      const GameProfileInQuickswitcherExperiment = require(7093) /* GameProfileInQuickswitcherExperiment */.GameProfileInQuickswitcherExperiment;
      obj = { location: "QuickSwitcherStore.updateResults" };
      if (GameProfileInQuickswitcherExperiment.getConfig(obj).enabled) {
        const found = arr.filter((type) => type.type === outer1_0(outer1_2[21]).AutocompleterResultTypes.GAME_PROFILE);
        const substr = found.slice(0, 3);
        const items = [];
        HermesBuiltin.arraySpread(substr, HermesBuiltin.arraySpread(arr.filter((type) => type.type !== outer1_0(outer1_2[21]).AutocompleterResultTypes.GAME_PROFILE), 0));
        table = items;
      } else {
        table = arr;
      }
    }
    if (arg1 !== closure_32) {
      closure_32 = arg1;
      const _Math = Math;
      closure_33 = Math.max(arg1.length, closure_33);
      let closure_27 = require(7094) /* sortByMatchScore */.findNextSelectedResult(require(7094) /* sortByMatchScore */.FindResultDirections.DOWN, -1, table);
      const obj9 = require(7094) /* sortByMatchScore */;
    } else {
      let tmp36 = null != tmp62;
      if (tmp36) {
        tmp36 = tmp62.type === require(7094) /* sortByMatchScore */.AutocompleterResultTypes.HEADER;
      }
      if (tmp36) {
        closure_27 = require(7094) /* sortByMatchScore */.findNextSelectedResult(require(7094) /* sortByMatchScore */.FindResultDirections.DOWN, closure_27, table);
        const obj8 = require(7094) /* sortByMatchScore */;
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
  if (null != store4) {
    let tmp6 = store4;
  } else {
    tmp6 = importDefault(7094);
    const tmp9 = getGeneralQueryResultTypes();
    let num2 = 5;
    if (null != queryMode) {
      num2 = 100;
    }
    const obj = { frecencyBoosters: true, blacklist: set, allowSnowflake: true };
    const prototype = tmp6.prototype;
    tmp6 = new tmp6(tmp7, tmp9, num2, obj, 100);
  }
  store4 = tmp6;
  let c32 = null;
  store4.search(trimmed);
}
function handleUserSearchUpdate(arr, str) {
  str = str.trim();
  if ("" === str.trim()) {
    arr = generateInitialResults();
  }
  let flag = false;
  if (arr.length === arr.length) {
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
  }
}
function handleQuickSwitcherHide() {
  let c32 = null;
  let c33 = 0;
  let closure_34 = [];
  if (null != store4) {
    store4.destroy();
    store4 = null;
  }
}
function handleGameAutocompleteSettled() {
  if (null == store4) {
    return false;
  } else {
    store4.refreshGameProfiles();
  }
}
({ CHANNEL_NOTICE_SHOW_DELAY: closure_24, Permissions: closure_25 } = ME);
let c27 = 0;
let c28 = false;
let c29 = false;
let c30 = null;
let closure_31 = [];
let c32 = null;
let c33 = 0;
let closure_34 = [];
let closure_35 = [];
let c36 = null;
let tmp3 = ((PersistedStore) => {
  class QuickSwitcherStoreClass {
    constructor() {
      self = this;
      tmp = outer1_3(this, QuickSwitcherStoreClass);
      obj = outer1_6(QuickSwitcherStoreClass);
      tmp2 = outer1_5;
      if (outer1_38()) {
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
  callback2(QuickSwitcherStoreClass, PersistedStore);
  let obj = {
    key: "initialize",
    value(channelHistory) {
      this.waitFor(outer1_9, outer1_11, outer1_12, outer1_13, outer1_8, outer1_15, outer1_17, outer1_18, outer1_19, outer1_20, outer1_21, outer1_22, outer1_10, outer1_23);
      const items = [outer1_10];
      this.syncWith(items, () => true);
      const Storage = QuickSwitcherStoreClass(outer1_2[28]).Storage;
      const outer1_28 = Storage.get("seenQSTutorial") || false;
      channelHistory = undefined;
      if (null != channelHistory) {
        channelHistory = channelHistory.channelHistory;
      }
      if (null == channelHistory) {
        channelHistory = [];
      }
      const outer1_35 = channelHistory;
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { channelHistory: outer1_35 };
    }
  };
  items[1] = obj;
  obj = {
    key: "isOpen",
    value() {
      return null != outer1_26;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getResultTotals",
    value(arg0) {
      let closure_0 = arg0;
      if (null == outer1_26) {
        return 0;
      } else if (null == arg0) {
        const results = outer1_26.results;
        let reduced = results.reduce((arg0, type) => {
          let sum = arg0;
          if (type.type !== QuickSwitcherStoreClass(outer2_2[21]).AutocompleterResultTypes.HEADER) {
            sum = arg0 + 1;
          }
          return sum;
        }, 0);
      } else {
        const results1 = outer1_26.results;
        reduced = results1.reduce((arg0, type) => {
          let sum = arg0;
          if (type.type === closure_0) {
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
      let tmp = outer1_29;
      if (outer1_29) {
        tmp = Date.now() - arg1 >= outer1_24;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getFrequentGuilds",
    value() {
      let queryGuildsResult = null;
      if (null != outer1_26) {
        queryGuildsResult = outer1_26.queryGuilds("", 100);
      }
      return queryGuildsResult;
    }
  };
  items[6] = {
    key: "getFrequentGuildsLength",
    value() {
      let num = 0;
      if (null != outer1_26) {
        num = outer1_26.queryGuilds("", 100).length;
      }
      return num;
    }
  };
  items[7] = {
    key: "getChannelHistory",
    value() {
      return outer1_35;
    }
  };
  items[8] = {
    key: "getLastShowTimestamp",
    value() {
      return outer1_36;
    }
  };
  items[9] = {
    key: "getProps",
    value() {
      const obj = { theme: outer1_10.theme };
      let str = "";
      if (null != outer1_26) {
        str = outer1_26.query;
      }
      obj.query = str;
      obj.queryMode = outer1_30;
      obj.results = outer1_31;
      obj.selectedIndex = outer1_27;
      obj.seenTutorial = outer1_28;
      obj.maxQueryLength = outer1_33;
      return obj;
    }
  };
  return callback(QuickSwitcherStoreClass, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "QuickSwitcherStore";
tmp3.persistKey = "QuickSwitcherStore";
tmp3 = new tmp3(require("dispatcher"), {
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
      if (queryMode !== queryMode) {
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
        if (queryMode === require(7094) /* sortByMatchScore */.AutocompleterResultTypes.USER) {
          if (null != tmp9) {
            let obj = {};
            obj = { guild: tmp9, friends: true };
            obj.userFilters = obj;
            store4.setOptions(obj, true);
          }
        }
        if (queryMode === require(7094) /* sortByMatchScore */.AutocompleterResultTypes.VOICE_CHANNEL) {
          const obj1 = { voiceChannelGuildFilter: null };
          store4.setOptions(obj1, true);
        } else {
          obj = { userFilters: null, voiceChannelGuildFilter: undefined };
          store4.setOptions(obj, true);
        }
      }
      if (queryMode === require(7094) /* sortByMatchScore */.AutocompleterResultTypes.USER) {
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
    if (c28) {
      return false;
    } else {
      c28 = true;
      const Storage = require(587) /* Storage */.Storage;
      const result = Storage.set("seenQSTutorial", true);
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      return false;
    } else {
      found = found.filter((arg0) => arg0 !== channelId);
      found.unshift(channelId);
      if (found.length > 8) {
        found.length = 8;
      }
    }
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: handleGameAutocompleteSettled,
  GAME_AUTOCOMPLETE_FETCH_FAILURE: handleGameAutocompleteSettled
});
let closure_37 = tmp3;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/quickswitcher/QuickSwitcherStore.tsx");

export default tmp3;
export { generateResultFromId };

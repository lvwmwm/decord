// Module ID: 6159
// Function ID: 6160
// Name: getGeneralQueryResultTypes
// Dependencies: [6160, 5096, 1302, 1218, 1372, 4526, 1932, 1942, 1862, 3817, 4201, 1931, 4006, 4385, 676, 6162, 6163, 12, 6174, 5031, 1236, 6175, 1351, 595, 589, 709, 2]

// Module 6159 (getGeneralQueryResultTypes)
import set from "set";
import rebuild from "rebuild";
import handleThemeChange from "handleThemeChange";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleChanged from "handleChanged";
import { DraftType } from "handleChanged";
import comparator from "comparator";
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import handleConnectionOpen from "handleConnectionOpen";
import closure_18 from "handleConnectionOpen";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import ME from "ME";
import { PersistedStore } from "initialize";

let closure_20;
let closure_21;
const require = arg1;
function getGeneralQueryResultTypes() {
  const GameProfileInQuickswitcherExperiment = require(6162) /* GameProfileInQuickswitcherExperiment */.GameProfileInQuickswitcherExperiment;
  const items = [require(6163) /* sortByMatchScore */.AutocompleterResultTypes.USER, require(6163) /* sortByMatchScore */.AutocompleterResultTypes.GROUP_DM, require(6163) /* sortByMatchScore */.AutocompleterResultTypes.TEXT_CHANNEL, require(6163) /* sortByMatchScore */.AutocompleterResultTypes.GUILD, require(6163) /* sortByMatchScore */.AutocompleterResultTypes.APPLICATION, , ];
  if (GameProfileInQuickswitcherExperiment.getConfig({ location: "QuickSwitcherStore.handleQuickSwitcherShow" }).enabled) {
    const items1 = [tmp(6163).AutocompleterResultTypes.GAME_PROFILE];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(items2, 5);
  items[arraySpreadResult] = require(6163) /* sortByMatchScore */.AutocompleterResultTypes.LINK;
  items[arraySpreadResult + 1] = require(6163) /* sortByMatchScore */.AutocompleterResultTypes.IN_APP_NAVIGATION;
  return items;
}
function handleConnectionOpen() {
  let tmp = store3.getGuildCount() >= 3;
  if (!tmp) {
    tmp = importDefault(12).size(mutablePrivateChannels.getMutablePrivateChannels()) >= 20;
    const obj = importDefault(12);
  }
  let c26 = tmp;
  let closure_31 = [];
}
function generateResultFromId(arg0) {
  const tmp = importDefault(6174)(arg0);
  let tmp2 = null;
  if (null != tmp) {
    if (null == c27) {
      tmp2 = tmp;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
}
function generateInitialResults() {
  let channelId;
  let result;
  let obj = store4;
  const guildId = store4.getGuildId();
  channelId = channelId.getChannelId();
  if (channelId(set[16]).AutocompleterResultTypes.USER === c27) {
    const importDefault = store2.getId();
    const recentlyTalked = importDefault(tmp5[19]).getRecentlyTalked(channelId, 100);
    return recentlyTalked.filter((record) => record.record.id !== closure_1);
  } else if (tmp4(tmp5[16]).AutocompleterResultTypes.APPLICATION === tmp3) {
    return importDefault(tmp5[19]).queryApplications({ query: "", limit: 100, fuzzy: true });
  } else if (tmp4(tmp5[16]).AutocompleterResultTypes.GAME_PROFILE === tmp3) {
    return [];
  } else if (tmp4(tmp5[16]).AutocompleterResultTypes.GUILD === tmp3) {
    return importDefault(tmp5[19]).queryGuilds({ query: "", limit: 100, fuzzy: true });
  } else if (tmp4(tmp5[16]).AutocompleterResultTypes.TEXT_CHANNEL === tmp3) {
    obj = { query: "", guildId: null, limit: 100, fuzzy: true, allowEmptyQueries: true };
    obj[1] = obj.getGuildId();
    return importDefault(tmp5[19]).queryChannels(obj);
  } else if (tmp4(tmp5[16]).AutocompleterResultTypes.VOICE_CHANNEL === tmp3) {
    obj = { query: "", guildId: null, limit: 100, fuzzy: true, filter: null, type: null, allowEmptyQueries: true };
    obj[1] = obj.getGuildId();
    obj[4] = function filter() {
      return true;
    };
    obj[5] = GUILD_VOCAL_CHANNELS_KEY;
    return importDefault(tmp5[19]).queryChannels(obj);
  } else {
    const _Set = Set;
    set = new Set();
    let items = [];
    let num = 1;
    if (1 < closure_32.length) {
      do {
        let tmp6 = generateResultFromId;
        let tmp7 = closure_32;
        let tmp8 = generateResultFromId(closure_32[num]);
        let tmp9 = num;
        if (null != tmp8) {
          let tmp46 = channelId;
          let tmp47 = set;
          let canResult = tmp8.type !== channelId(set[16]).AutocompleterResultTypes.TEXT_CHANNEL;
          if (canResult) {
            canResult = tmp8.type !== tmp46(tmp47[16]).AutocompleterResultTypes.VOICE_CHANNEL;
          }
          if (!canResult) {
            let tmp11 = getUncachedChannelPermissions;
            let tmp12 = constants;
            canResult = getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, tmp8.record);
          }
          if (canResult) {
            let arr = items.push(tmp8);
            if (set.size < 3) {
              let tmp14 = closure_32;
              let addResult = set.add(closure_32[num]);
            }
          }
        }
        num = num + 1;
        let tmp16 = closure_32;
      } while (num < closure_32.length);
    }
    const items1 = [];
    let arr1 = (function getDrafts(arg0) {
      let closure_0 = arg0;
      const items = [];
      recentlyEditedDrafts = recentlyEditedDrafts.getRecentlyEditedDrafts(ChannelMessage.ChannelMessage);
      const item = recentlyEditedDrafts.forEach((channelId) => {
        channelId = channelId.channelId;
        if (!callback(channelId)) {
          const tmp3 = items(outer1_2[18])(channelId);
          let tmp5 = null;
          if (null != tmp3) {
            if (null == outer1_27) {
              tmp5 = tmp3;
            } else {
              tmp5 = null;
            }
          }
          if (null != tmp5) {
            const obj = { record: null, channelId: null };
            obj[0] = tmp5;
            obj[1] = channelId;
            items.push(obj);
            const tmp12 = callback;
          }
        }
      });
      return items;
    })((arg0) => {
      let hasItem = arg0 === channelId;
      if (!hasItem) {
        hasItem = set.has(arg0);
      }
      return hasItem;
    });
    if (arr1.length > 0) {
      const intl2 = channelId(set[20]).intl;
      items1.push(channelId(set[16]).createHeaderResult(intl2.string(channelId(set[20]).t["4B63jZ"])));
      for (const item10048 of arr1) {
        let addResult1 = set.add(item10048.channelId);
        arr1 = items1.push(item10048.record);
        continue;
      }
      const obj12 = channelId(set[16]);
    }
    mentionChannelIds = mentionChannelIds.getMentionChannelIds();
    const found = mentionChannelIds.filter((arg0) => {
      let tmp = arg0 !== channelId;
      if (tmp) {
        tmp = !set.has(arg0);
      }
      return tmp;
    });
    const items2 = [];
    let diff = found.length - 1;
    if (0 <= diff) {
      do {
        let tmp22 = found[diff];
        let tmp23 = diff;
        if (null != tmp22) {
          let tmp24 = generateResultFromId;
          let tmp25 = generateResultFromId(tmp22);
          if (null != tmp25) {
            let obj1 = { channelId: null, result: null };
            obj1[0] = tmp22;
            obj1[1] = tmp25;
            let arr2 = items2.push(obj1);
          }
        }
        diff = diff - 1;
      } while (0 <= diff);
    }
    if (items2.length > 0) {
      const intl3 = channelId(set[20]).intl;
      items1.push(channelId(set[16]).createHeaderResult(intl3.string(channelId(set[20]).t["61Df13"])));
      for (const item10075 of items2) {
        ({ result, channelId } = item10075);
        let addResult2 = set.add(result.record.id);
        let addResult3 = set.add(channelId);
        let arr4 = items1.push(result);
        continue;
      }
      const obj13 = channelId(set[16]);
    }
    let combined = items1;
    if (null != guildId) {
      selectableChannelIds = selectableChannelIds.getSelectableChannelIds(guildId);
      const found1 = selectableChannelIds.filter((id) => {
        const channel = outer1_8.getChannel(id);
        let hasItem = null == channel;
        if (!hasItem) {
          hasItem = id === channelId;
        }
        if (!hasItem) {
          hasItem = set.has(id);
        }
        if (!hasItem) {
          hasItem = outer1_19.isChannelMuted(channel.guild_id, id);
        }
        if (!hasItem) {
          let isChannelMutedResult = null != channel.parent_id;
          if (isChannelMutedResult) {
            isChannelMutedResult = outer1_19.isChannelMuted(channel.guild_id, channel.parent_id);
          }
          hasItem = isChannelMutedResult;
        }
        let hasImportantUnread = !hasItem;
        if (!hasItem) {
          hasImportantUnread = channelId(set[21]).getHasImportantUnread(channel);
          const obj = channelId(set[21]);
        }
        return hasImportantUnread;
      });
      const mapped = found1.map((arg0) => {
        const tmp = callback(set[18])(arg0);
        let tmp2 = null;
        if (null != tmp) {
          if (null == closure_27) {
            tmp2 = tmp;
          } else {
            tmp2 = null;
          }
        }
        return tmp2;
      });
      const found2 = mapped.filter(channelId(set[22]).isNotNullish);
      const _Object = Object;
      const values = Object.values(activeJoinedUnreadThreadsForGuild.getActiveJoinedUnreadThreadsForGuild(guildId));
      let item = values.forEach((obj) => {
        for (const key10004 in arg0) {
          let tmp8 = key10004;
          let tmp9 = callback;
          let tmp10 = set;
          let tmp11 = callback(set[18])(key10004);
          let tmp3 = null;
          if (null != tmp11) {
            let tmp = outer1_27;
            if (null == outer1_27) {
              tmp3 = tmp11;
            } else {
              let tmp2 = outer1_27;
              tmp3 = null;
            }
          }
          let hasItem = null == tmp3;
          if (!hasItem) {
            let tmp5 = set;
            hasItem = set.has(tmp3.record.id);
          }
          if (hasItem) {
            continue;
          } else {
            let tmp6 = found2;
            let arr = found2.push(tmp3);
            continue;
          }
          continue;
        }
      });
      combined = items1;
      if (found2.length > 0) {
        const intl = tmp57(tmp58[20]).intl;
        items1.push(tmp57(tmp58[16]).createHeaderResult(intl.string(tmp57(tmp58[20]).t.ieCAhD)));
        combined = items1.concat(found2);
        const tmp57Result = tmp57(tmp58[16]);
      }
    }
    let num3 = 7;
    if (combined.length > 0) {
      num3 = 3;
    }
    if (items.length > num3) {
      items.splice(num3);
    }
    let tmp33 = combined;
    if (items.length > 0) {
      const intl4 = channelId(set[20]).intl;
      const items3 = [channelId(set[16]).createHeaderResult(intl4.string(channelId(set[20]).t["80lOZ1"]))];
      HermesBuiltin.arraySpread(items, 1);
      const items4 = [];
      HermesBuiltin.arraySpread(combined, HermesBuiltin.arraySpread(items3, 0));
      tmp33 = items4;
      const obj14 = channelId(set[16]);
    }
    return tmp33;
  }
}
function handleQuickSwitcherShow(arg0) {
  let query;
  let queryMode;
  ({ query, queryMode } = arg0);
  const trimmed = query.trim();
  const guildId = store4.getGuildId();
  const items = ["user:" + store2.getId()];
  const set = new Set(items);
  if (null != guildId) {
    const _HermesInternal = HermesInternal;
    set.add("guild:" + guildId);
  }
  let closure_33 = Date.now();
  let tmp6 = store;
  if (store == null) {
    tmp6 = importDefault(6163);
    const tmp9 = getGeneralQueryResultTypes();
    let num2 = 5;
    if (null != queryMode) {
      num2 = 100;
    }
    const obj = { frecencyBoosters: true, blacklist: null, allowSnowflake: true };
    obj[1] = set;
    tmp6 = new tmp6(tmp7, tmp9, num2, obj, 100);
  }
  store = tmp6;
  let c29 = null;
  store.search(trimmed);
}
function handleUserSearchUpdate(arr, str) {
  str = str.trim();
  if ("" === str.trim()) {
    arr = generateInitialResults();
  }
  let flag = false;
  if (arr.length === arr.length) {
    let num2 = 0;
    flag = true;
    if (0 < arr.length) {
      flag = false;
      while (arr[num2].record.id === tmp2[num2].record.id) {
        flag = false;
        if (tmp3.type !== tmp4.type) {
          break;
        } else {
          let sum = num2 + 1;
          num2 = sum;
          flag = true;
          if (sum >= arr.length) {
            break;
          }
        }
      }
    }
  }
  if (!flag) {
    let DOWN = require;
    if (require(6163) /* sortByMatchScore */.AutocompleterResultTypes.USER === c27) {
      let name = store3.getGuild(store4.getGuildId());
      if (null != name) {
        const intl7 = DOWN(1236).intl;
        const obj = { name: null };
        name = name.name;
        obj[0] = name;
        let formatToPlainStringResult = intl7.formatToPlainString(DOWN(1236).t.FREzQs, obj);
      } else {
        const intl6 = DOWN(1236).intl;
        formatToPlainStringResult = intl6.string(DOWN(1236).t.XFYW1o);
      }
      arr = arr.unshift(DOWN(6163).createHeaderResult(formatToPlainStringResult));
      const DOWNResult = DOWN(6163);
    } else {
      if (DOWN(6163).AutocompleterResultTypes.TEXT_CHANNEL === tmp7) {
        const intl5 = DOWN(1236).intl;
        arr = arr.unshift(DOWN(6163).createHeaderResult(intl5.string(DOWN(1236).t.W26k4V)));
        let tmp9 = arr;
        const DOWNResult1 = DOWN(6163);
      } else if (DOWN(6163).AutocompleterResultTypes.VOICE_CHANNEL === tmp7) {
        const intl4 = DOWN(1236).intl;
        arr.unshift(DOWN(6163).createHeaderResult(intl4.string(DOWN(1236).t.zUoI5C)));
        tmp9 = arr;
        const DOWNResult2 = DOWN(6163);
      } else if (DOWN(6163).AutocompleterResultTypes.GUILD === tmp7) {
        const intl3 = DOWN(1236).intl;
        arr.unshift(DOWN(6163).createHeaderResult(intl3.string(DOWN(1236).t.olADPs)));
        tmp9 = arr;
        const DOWNResult3 = DOWN(6163);
      } else if (DOWN(6163).AutocompleterResultTypes.APPLICATION === tmp7) {
        const intl2 = DOWN(1236).intl;
        arr.unshift(DOWN(6163).createHeaderResult(intl2.string(DOWN(1236).t.VwK1ld)));
        tmp9 = arr;
        const DOWNResult4 = DOWN(6163);
      } else if (DOWN(6163).AutocompleterResultTypes.GAME_PROFILE === tmp7) {
        const intl = DOWN(1236).intl;
        arr.unshift(DOWN(6163).createHeaderResult(intl.string(DOWN(1236).t.gEp2SG)));
        tmp9 = arr;
        const DOWNResult5 = DOWN(6163);
      } else {
        const GameProfileInQuickswitcherExperiment = DOWN(6162).GameProfileInQuickswitcherExperiment;
        if (GameProfileInQuickswitcherExperiment.getConfig({ location: "QuickSwitcherStore.updateResults" }).enabled) {
          const found = arr.filter((type) => type.type === callback(6163).AutocompleterResultTypes.GAME_PROFILE);
          const substr = found.slice(0, 3);
          const items = [];
          HermesBuiltin.arraySpread(substr, HermesBuiltin.arraySpread(arr.filter((type) => type.type !== callback(6163).AutocompleterResultTypes.GAME_PROFILE), 0));
          arr = items;
          tmp9 = items;
        } else {
          tmp9 = arr;
        }
      }
      if (str !== str) {
        const _Math = Math;
        closure_30 = Math.max(str.length, closure_30);
        str = DOWN(6163).findNextSelectedResult;
        DOWN = DOWN(6163).FindResultDirections.DOWN;
        let closure_24 = str(DOWN, -1, arr);
        const DOWNResult6 = DOWN(6163);
      } else {
        let tmp30 = null != tmp28;
        if (tmp30) {
          tmp30 = tmp28.type === DOWN(6163).AutocompleterResultTypes.HEADER;
        }
        if (tmp30) {
          closure_24 = DOWN(6163).findNextSelectedResult(DOWN(6163).FindResultDirections.DOWN, closure_24, arr);
          const DOWNResult7 = DOWN(6163);
        }
      }
      quickSwitcherStoreClass.emitChange();
    }
  }
}
function handleQuickSwitcherHide() {
  let c29 = null;
  let c30 = 0;
  let closure_31 = [];
  if (null != store) {
    store.destroy();
    store = null;
  }
}
function handleGameAutocompleteSettled() {
  if (null == store) {
    return false;
  } else {
    store.refreshGameProfiles();
  }
}
({ CHANNEL_NOTICE_SHOW_DELAY: closure_20, Permissions: closure_21 } = ME);
const seenQSTutorial = "seenQSTutorial";
let c24 = 0;
let c25 = false;
let c26 = false;
let c27 = null;
let closure_28 = [];
let c29 = null;
let c30 = 0;
let closure_31 = [];
let closure_32 = [];
let c33 = null;
class QuickSwitcherStoreClass extends PersistedStore {
}
const prototype = QuickSwitcherStoreClass.prototype;
prototype["initialize"] = function initialize(channelHistory) {
  this.waitFor(rebuild, fetchFingerprint, ensureGuildLoaded, handleChanged, set, comparator, trackCommunicationDisabled, createGuildRecordFromRust, getUncachedChannelPermissions, generateOldThreadCutoff, handleConnectionOpen, closure_18, handleThemeChange, updateUserGuildSettingsInternal);
  const items = [handleThemeChange];
  this.syncWith(items, () => true);
  const Storage = require(595) /* Storage */.Storage;
  let c25 = Storage.get(seenQSTutorial) || false;
  channelHistory = undefined;
  if (channelHistory != null) {
    channelHistory = channelHistory.channelHistory;
  }
  if (channelHistory == null) {
    channelHistory = [];
  }
};
prototype["getState"] = function getState() {
  return { channelHistory: closure_32 };
};
prototype["isOpen"] = function isOpen() {
  return null != closure_3;
};
prototype["getResultTotals"] = function getResultTotals(GROUP_DM) {
  let closure_0 = GROUP_DM;
  if (null == store) {
    return 0;
  } else if (null == GROUP_DM) {
    const results = store.results;
    let reduced = results.reduce((arg0, type) => {
      let sum = arg0;
      if (type.type !== GROUP_DM(table[16]).AutocompleterResultTypes.HEADER) {
        sum = arg0 + 1;
      }
      return sum;
    }, 0);
  } else {
    const results1 = store.results;
    reduced = results1.reduce((arg0, type) => {
      let sum = arg0;
      if (type.type === closure_0) {
        sum = arg0 + 1;
      }
      return sum;
    }, 0);
  }
};
prototype["channelNoticePredicate"] = function channelNoticePredicate(arg0, arg1) {
  let tmp = c26;
  if (c26) {
    tmp = Date.now() - arg1 >= closure_20;
  }
  return tmp;
};
prototype["getFrequentGuilds"] = function getFrequentGuilds() {
  let queryGuildsResult = null;
  if (null != store) {
    queryGuildsResult = store.queryGuilds("", 100);
  }
  return queryGuildsResult;
};
prototype["getFrequentGuildsLength"] = function getFrequentGuildsLength() {
  let num = 0;
  if (null != store) {
    num = store.queryGuilds("", 100).length;
  }
  return num;
};
prototype["getChannelHistory"] = function getChannelHistory() {
  return closure_32;
};
prototype["getLastShowTimestamp"] = function getLastShowTimestamp() {
  return c33;
};
prototype["getProps"] = function getProps() {
  const obj = { theme: theme.theme, query: null, queryMode: null, results: null, selectedIndex: null, seenTutorial: null, maxQueryLength: null };
  let str = "";
  if (null != store) {
    str = store.query;
  }
  obj[1] = str;
  obj[2] = c27;
  obj[3] = closure_28;
  obj[4] = c24;
  obj[5] = c25;
  obj[6] = c30;
  return obj;
};
QuickSwitcherStoreClass.displayName = "QuickSwitcherStore";
QuickSwitcherStoreClass.persistKey = "QuickSwitcherStore";
const quickSwitcherStoreClass = new QuickSwitcherStoreClass(require("dispatcher"), {
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
    if (null == store) {
      return false;
    } else {
      if (queryMode !== queryMode) {
        if (null != queryMode) {
          const items = [queryMode];
          let tmp3 = items;
        } else {
          tmp3 = getGeneralQueryResultTypes();
        }
        store.setResultTypes(tmp3);
        let num2 = 5;
        if (null != queryMode) {
          num2 = 100;
        }
        store.setLimit(num2);
        const guildId = store4.getGuildId();
        if (queryMode === require(6163) /* sortByMatchScore */.AutocompleterResultTypes.USER) {
          if (null != guildId) {
            let obj = { userFilters: null };
            obj = { guild: null, friends: true };
            obj[0] = guildId;
            obj[0] = obj;
            store.setOptions(obj, true);
          }
        }
        if (queryMode === tmp9(6163).AutocompleterResultTypes.VOICE_CHANNEL) {
          store.setOptions({ voiceChannelGuildFilter: null }, true);
        } else {
          store.setOptions({ userFilters: null, voiceChannelGuildFilter: "r" }, true);
        }
        tmp9 = require;
      }
      if (queryMode === require(6163) /* sortByMatchScore */.AutocompleterResultTypes.USER) {
        let guildId1 = store4.getGuildId();
        if (guildId1 == null) {
          guildId1 = null;
        }
        store.search(trimmed, guildId1);
      } else {
        store.search(trimmed, undefined);
      }
    }
  },
  QUICKSWITCHER_SELECT: function handleQuickSwitcherSelect(selectedIndex) {
    selectedIndex = selectedIndex.selectedIndex;
  },
  QUICKSWITCHER_SWITCH_TO: function handleQuickSwitcherSwitchTo() {
    if (c25) {
      return false;
    } else {
      c25 = true;
      const Storage = require(595) /* Storage */.Storage;
      const result = Storage.set(seenQSTutorial, true);
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
let result = require("handleThemeChange").fileFinishedImporting("modules/quickswitcher/QuickSwitcherStore.tsx");

export default quickSwitcherStoreClass;
export { generateResultFromId };

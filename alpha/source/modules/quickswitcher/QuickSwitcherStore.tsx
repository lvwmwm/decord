// Module ID: 9066
// Function ID: 9067
// Name: QuickSwitcherStore
// Dependencies: [8579, 6771, 1204, 502, 6792, 4824, 7632, 4902, 4884, 4846, 4904, 6772, 4875, 5003, 6705, 1084, 9067, 12, 9079, 6709, 1125, 9080, 1385, 6794, 510, 504, 584, 2]

// Module 9066 (QuickSwitcherStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl8 from "intl" /* 1125 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4902 */;
import SidebarActionTypes from "SidebarActionTypes" /* 6794 */;
import DraftStore2 from "DraftStore" /* 7632 */;
import _mod9067 from "module_9067" /* 9067 */;
import createAutocompleterResultForChannelIdDefault from "createAutocompleterResultForChannelId" /* 9079 */;
import ReadStateUtils from "ReadStateUtils" /* 9080 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8579 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6771 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6792 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildMemberStore from "GuildMemberStore" /* 4884 */;
import GuildStore from "GuildStore" /* 4846 */;
import PermissionStore from "PermissionStore" /* 4904 */;
import ReadStateStore from "ReadStateStore" /* 6772 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4875 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5003 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6705 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const _modDef9067 = _mod9067;
const DraftStore = DraftStore2;
const GuildChannelStore = GuildChannelStore2;
let _null, importDefault, recentlyEditedDrafts, set;

let closure_21;
let closure_22;
function handleConnectionOpen() {
  let tmp = GuildStore.getGuildCount() >= 3;
  if (!tmp) {
    const obj = _modDef12;
    tmp = obj.size(ChannelStore.getMutablePrivateChannels()) >= 20;
  }
  closure_26 = tmp;
  let closure_31 = [];
}
function generateResultFromId(channelHistory) {
  const tmp2 = createAutocompleterResultForChannelIdDefault(channelHistory);
  if (null == tmp2) {
    return null;
  } else {
    const tmp3 = queryMode === _mod9067.AutocompleterResultTypes.USER || queryMode === _mod9067.AutocompleterResultTypes.USER_GLOBAL;
    if (tmp3) {
      if (tmp2.type !== _mod9067.AutocompleterResultTypes.USER) {
        return null;
      }
    } else if (null != queryMode) {
      if (queryMode !== tmp2.type) {
        return null;
      }
    }
    return tmp2;
  }
}
function generateInitialResults() {
  let ChannelMessage;
  let channelId;
  let closure_1;
  let result;
  function getDrafts(arg0) {
    let closure_0 = arg0;
    const items = [];
    recentlyEditedDrafts = recentlyEditedDrafts.getRecentlyEditedDrafts(ChannelMessage.ChannelMessage);
    const item = recentlyEditedDrafts.forEach((channelId) => {
      channelId = channelId.channelId;
      if (!closure_0(channelId)) {
        const tmp3 = items(set[18])(channelId);
        let tmp5 = null;
        if (null != tmp3) {
          const tmp8 = queryMode === channelId1(set[16]).AutocompleterResultTypes.USER || queryMode === channelId1(set[16]).AutocompleterResultTypes.USER_GLOBAL;
          if (tmp8) {
            tmp5 = tmp3;
            if (tmp3.type !== channelId1(set[16]).AutocompleterResultTypes.USER) {
              tmp5 = null;
            }
          } else {
            tmp5 = tmp3;
            if (null != queryMode) {
              tmp5 = tmp3;
              if (queryMode !== tmp3.type) {
                tmp5 = null;
              }
            }
          }
        }
        if (null != tmp5) {
          const obj = { record: tmp5, channelId };
          items.push(obj);
        }
      }
    });
    return items;
  }
  let obj = SelectedGuildStore;
  const guildId = SelectedGuildStore.getGuildId();
  const channelId1 = SelectedChannelStore.getChannelId();
  let tmp3 = queryMode;
  let tmp4 = channelId1;
  let tmp5 = set;
  const obj2 = SelectedChannelStore;
  if (channelId1(set[16]).AutocompleterResultTypes.USER_GLOBAL !== queryMode) {
    if (tmp4(tmp5[16]).AutocompleterResultTypes.USER !== tmp3) {
      if (tmp4(tmp5[16]).AutocompleterResultTypes.APPLICATION === tmp3) {
        const obj7 = require("AutocompleteUtils");
        return obj7.queryApplications({ query: "", limit: 100, fuzzy: true });
      } else if (tmp4(tmp5[16]).AutocompleterResultTypes.GAME_PROFILE === tmp3) {
        return [];
      } else if (tmp4(tmp5[16]).AutocompleterResultTypes.GUILD === tmp3) {
        const obj6 = require("AutocompleteUtils");
        return obj6.queryGuilds({ query: "", limit: 100, fuzzy: true });
      } else if (tmp4(tmp5[16]).AutocompleterResultTypes.TEXT_CHANNEL === tmp3) {
        const obj3 = { query: "", guildId: obj.getGuildId(), limit: 100, fuzzy: true, allowEmptyQueries: true };
        const queryChannels2 = require("AutocompleteUtils").queryChannels;
        require("AutocompleteUtils");
        return queryChannels2(obj3);
      } else if (tmp4(tmp5[16]).AutocompleterResultTypes.VOICE_CHANNEL === tmp3) {
        const obj4 = {
          query: "",
          guildId: obj.getGuildId(),
          limit: 100,
          fuzzy: true,
          filter() {
                  return true;
                },
          type: GUILD_VOCAL_CHANNELS_KEY,
          allowEmptyQueries: true
        };
        const queryChannels = require("AutocompleteUtils").queryChannels;
        require("AutocompleteUtils");
        return queryChannels(obj4);
      } else {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        let items = [];
        const channelId2 = obj2.getChannelId();
        let num = 0;
        if (0 < channelHistory.length) {
          do {
            let tmp6 = channelHistory;
            if (channelHistory[num] !== channelId2) {
              if (channelHistory[num] !== tmp47) {
                let tmp52 = generateResultFromId(channelHistory[num]);
                let tmp13 = null != tmp52;
                if (tmp13) {
                  let tmp8 = channelId1;
                  let tmp9 = set;
                  let canResult = tmp52.type !== channelId1(set[16]).AutocompleterResultTypes.TEXT_CHANNEL && tmp52.type !== tmp8(tmp9[16]).AutocompleterResultTypes.VOICE_CHANNEL;
                  if (!canResult) {
                    let tmp11 = PermissionStore;
                    let tmp12 = constants;
                    canResult = PermissionStore.can(constants.VIEW_CHANNEL, tmp52.record);
                  }
                  tmp13 = canResult;
                }
                if (tmp13) {
                  let arr = items.push(tmp52);
                  if (set.size < 3) {
                    let addResult = set.add(channelHistory[num]);
                  }
                }
              }
            }
            num = num + 1;
          } while (num < channelHistory.length);
        }
        const items1 = [];
        const arr2 = getDrafts((arg0) => {
          const hasItem = arg0 === channelId1 || set.has(arg0);
          return hasItem;
        });
        if (arr2.length > 0) {
          const push2 = items1.push;
          const createHeaderResult2 = channelId1(set[16]).createHeaderResult;
          const intl2 = channelId1(set[20]).intl;
          push2(createHeaderResult2(intl2.string(channelId1(set[20]).t["4B63jZ"])));
          for (const item10053 of arr2) {
            let addResult1 = set.add(item10053.channelId);
            let arr3 = items1.push(item10053.record);
            continue;
          }
        }
        const mentionChannelIds = ReadStateStore.getMentionChannelIds();
        const found = mentionChannelIds.filter((item) => {
          const tmp = item !== channelId1 && !set.has(item);
          return tmp;
        });
        const items2 = [];
        let diff = found.length - 1;
        if (0 <= diff) {
          do {
            let tmp23 = found[diff];
            if (null != tmp23) {
              let tmp26 = generateResultFromId(tmp23);
              if (null != tmp26) {
                let obj5 = { channelId: tmp23, result: tmp26 };
                let arr4 = items2.push(obj5);
              }
            }
            diff = diff - 1;
          } while (0 <= diff);
        }
        if (items2.length > 0) {
          const push3 = items1.push;
          const createHeaderResult3 = channelId1(set[16]).createHeaderResult;
          const intl3 = channelId1(set[20]).intl;
          push3(createHeaderResult3(intl3.string(channelId1(set[20]).t["61Df13"])));
          for (const item10080 of items2) {
            ({ result, channelId } = item10080);
            let addResult2 = set.add(result.record.id);
            let addResult3 = set.add(channelId);
            let arr5 = items1.push(result);
            continue;
          }
        }
        let combined = items1;
        if (null != guildId) {
          const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(guildId);
          const found1 = selectableChannelIds.filter((item) => {
            const channel = ChannelStore.getChannel(item);
            let hasItem = null == channel || item === channelId1 || set.has(item) || UserGuildSettingsStore.isChannelMuted(channel.guild_id, item);
            if (!hasItem) {
              hasItem = null != channel.parent_id && UserGuildSettingsStore.isChannelMuted(channel.guild_id, channel.parent_id);
              const isChannelMutedResult = null != channel.parent_id && UserGuildSettingsStore.isChannelMuted(channel.guild_id, channel.parent_id);
            }
            let hasImportantUnread = !hasItem;
            if (hasImportantUnread) {
              const obj = ReadStateUtils;
              hasImportantUnread = obj.getHasImportantUnread(channel);
            }
            return hasImportantUnread;
          });
          const mapped = found1.map((item) => {
            const tmp2 = closure_1(set[18])(item);
            let tmp3 = null;
            if (null != tmp2) {
              const tmp6 = queryMode === channelId1(set[16]).AutocompleterResultTypes.USER || queryMode === channelId1(set[16]).AutocompleterResultTypes.USER_GLOBAL;
              if (tmp6) {
                tmp3 = tmp2;
                if (tmp2.type !== channelId1(set[16]).AutocompleterResultTypes.USER) {
                  tmp3 = null;
                }
              } else {
                tmp3 = tmp2;
                if (null != queryMode) {
                  tmp3 = tmp2;
                  if (queryMode !== tmp2.type) {
                    tmp3 = null;
                  }
                }
              }
            }
            return tmp3;
          });
          const found2 = mapped.filter(channelId1(set[22]).isNotNullish);
          const _Object = Object;
          const values = Object.values(ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForGuild(guildId));
          let item = values.forEach((item) => {
            for (const key10004 in item) {
              let tmp14 = createAutocompleterResultForChannelIdDefault(key10004);
              let tmp5 = null;
              if (null != tmp14) {
                let tmp2 = require;
                let tmp = queryMode;
                let tmp3 = queryMode === _mod9067.AutocompleterResultTypes.USER || tmp === tmp2(9067).AutocompleterResultTypes.USER_GLOBAL;
                if (tmp3) {
                  tmp5 = tmp14;
                  if (tmp14.type !== tmp2(9067).AutocompleterResultTypes.USER) {
                    tmp5 = null;
                  }
                } else {
                  tmp5 = tmp14;
                  if (null != queryMode) {
                    tmp5 = tmp14;
                    if (queryMode !== tmp14.type) {
                      tmp5 = null;
                    }
                  }
                }
              }
              let hasItem = null == tmp5;
              if (!hasItem) {
                hasItem = set.has(tmp5.record.id);
              }
              if (hasItem) {
                continue;
              } else {
                let arr = found2.push(tmp5);
                continue;
              }
              continue;
            }
          });
          combined = items1;
          if (found2.length > 0) {
            const push = items1.push;
            const createHeaderResult = channelId1(set[16]).createHeaderResult;
            const intl = tmp64(tmp65[20]).intl;
            push(createHeaderResult(intl.string(channelId1(set[20]).t.ieCAhD)));
            combined = items1.concat(found2);
          }
        }
        let num2 = 7;
        if (combined.length > 0) {
          num2 = 3;
        }
        if (items.length > num2) {
          items.splice(num2);
        }
        let tmp35 = combined;
        if (items.length > 0) {
          const createHeaderResult4 = channelId1(set[16]).createHeaderResult;
          const intl4 = channelId1(set[20]).intl;
          const items3 = [createHeaderResult4(intl4.string(channelId1(set[20]).t["80lOZ1"]))];
          HermesBuiltin.arraySpread(items3, items, 1);
          const items4 = [];
          HermesBuiltin.arraySpread(items4, combined, HermesBuiltin.arraySpread(items4, items3, 0));
          tmp35 = items4;
        }
        return tmp35;
      }
    }
  }
  importDefault = AuthenticationStore.getId();
  const obj8 = require("AutocompleteUtils");
  const recentlyTalked = obj8.getRecentlyTalked(channelId1, 100);
  return recentlyTalked.filter((record) => record.record.id !== closure_1);
}
function handleQuickSwitcherShow(arg0) {
  let query;
  ({ query, queryMode } = arg0);
  const trimmed = query.trim();
  const guildId = SelectedGuildStore.getGuildId();
  const items = ["user:" + AuthenticationStore.getId()];
  set = new Set(items);
  if (null != guildId) {
    const _HermesInternal = HermesInternal;
    set.add("guild:" + guildId);
  }
  closure_34 = Date.now();
  let tmp112 = _null;
  if (_null == null) {
    const items1 = [, , , , , , , ];
    const tmp11 = _modDef9067;
    items1[0] = _mod9067.AutocompleterResultTypes.USER;
    items1[1] = _mod9067.AutocompleterResultTypes.GROUP_DM;
    items1[2] = _mod9067.AutocompleterResultTypes.TEXT_CHANNEL;
    items1[3] = _mod9067.AutocompleterResultTypes.GUILD;
    items1[4] = _mod9067.AutocompleterResultTypes.APPLICATION;
    items1[5] = _mod9067.AutocompleterResultTypes.GAME_PROFILE;
    items1[6] = _mod9067.AutocompleterResultTypes.LINK;
    items1[7] = _mod9067.AutocompleterResultTypes.IN_APP_NAVIGATION;
    let num = 5;
    if (null != queryMode) {
      num = 100;
    }
    const self = this;
    const self2 = this;
    const obj = { frecencyBoosters: true, blacklist: set, allowSnowflake: true };
    tmp112 = new tmp11(tmp12, items1, num, obj, 100);
  }
  _null = tmp112;
  c29 = null;
  let c30 = trimmed.length;
  _null.search(trimmed);
}
function handleUserSearchUpdate(arr, str) {
  str = str.trim();
  if ("" === str.trim()) {
    arr = generateInitialResults();
  }
  let flag = false;
  if (arr.length === length.length) {
    let num2 = 0;
    flag = true;
    if (0 < arr.length) {
      flag = false;
      while (arr[num2].record.id === tmp3[num2].record.id) {
        flag = false;
        if (tmp4.type !== tmp5.type) {
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
    let formatToPlainStringResult;
    length = arr;
    if (_mod9067.AutocompleterResultTypes.USER_GLOBAL !== queryMode) {
      if (_mod9067.AutocompleterResultTypes.USER !== queryMode) {
        let items;
        if (_mod9067.AutocompleterResultTypes.TEXT_CHANNEL === queryMode) {
          const unshift5 = arr.unshift;
          const createHeaderResult5 = _mod9067.createHeaderResult;
          const intl5 = tmp9(1125).intl;
          unshift5(createHeaderResult5(intl5.string(intl8.t.W26k4V)));
          items = arr;
        } else if (_mod9067.AutocompleterResultTypes.VOICE_CHANNEL === queryMode) {
          const unshift4 = arr.unshift;
          const createHeaderResult4 = _mod9067.createHeaderResult;
          const intl4 = tmp9(1125).intl;
          unshift4(createHeaderResult4(intl4.string(intl8.t.zUoI5C)));
          items = arr;
        } else if (_mod9067.AutocompleterResultTypes.GUILD === queryMode) {
          const unshift3 = arr.unshift;
          const createHeaderResult3 = _mod9067.createHeaderResult;
          const intl3 = tmp9(1125).intl;
          unshift3(createHeaderResult3(intl3.string(intl8.t.olADPs)));
          items = arr;
        } else if (_mod9067.AutocompleterResultTypes.APPLICATION === queryMode) {
          const unshift2 = arr.unshift;
          const createHeaderResult2 = _mod9067.createHeaderResult;
          const intl2 = tmp9(1125).intl;
          unshift2(createHeaderResult2(intl2.string(intl8.t.VwK1ld)));
          items = arr;
        } else if (_mod9067.AutocompleterResultTypes.GAME_PROFILE === queryMode) {
          const unshift = arr.unshift;
          const createHeaderResult = _mod9067.createHeaderResult;
          const intl = tmp9(1125).intl;
          unshift(createHeaderResult(intl.string(intl8.t.gEp2SG)));
          items = arr;
        } else {
          const found = arr.filter((type) => type.type === _mod9067.AutocompleterResultTypes.GAME_PROFILE);
          const substr = found.slice(0, 3);
          items = [];
          HermesBuiltin.arraySpread(items, substr, HermesBuiltin.arraySpread(items, arr.filter((type) => type.type !== _mod9067.AutocompleterResultTypes.GAME_PROFILE), 0));
          arr = items;
        }
      }
      if (str !== c29) {
        c29 = str;
        const _Math = Math;
        c30 = Math.max(str.length, c30);
        const tmp9Result12 = _mod9067;
        selectedIndex = tmp9Result12.findNextSelectedResult(tmp9(9067).FindResultDirections.DOWN, -1, arr);
      } else {
        const tmp38 = null != tmp36 && tmp36.type === tmp9(9067).AutocompleterResultTypes.HEADER;
        if (tmp38) {
          const tmp9Result13 = _mod9067;
          selectedIndex = tmp9Result13.findNextSelectedResult(tmp9(9067).FindResultDirections.DOWN, selectedIndex, arr);
        }
      }
      quickSwitcherStoreClass.emitChange();
    }
    let guild = null;
    if (queryMode !== _mod9067.AutocompleterResultTypes.USER_GLOBAL) {
      guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
    }
    const unshift6 = arr.unshift;
    const createHeaderResult6 = _mod9067.createHeaderResult;
    if (null != guild) {
      const intl7 = tmp9(1125).intl;
      const obj = { name: guild.name };
      formatToPlainStringResult = intl7.formatToPlainString(tmp9(1125).t.FREzQs, obj);
    } else {
      const intl6 = tmp9(1125).intl;
      formatToPlainStringResult = intl6.string(tmp9(1125).t.XFYW1o);
    }
    unshift6(createHeaderResult6(formatToPlainStringResult));
    items = arr;
  }
}
function handleQuickSwitcherHide() {
  c29 = null;
  let c30 = 0;
  let closure_31 = [];
  if (null != _null) {
    _null.destroy();
    _null = null;
  }
}
function handleGameAutocompleteSettled() {
  if (null == _null) {
    return false;
  } else {
    _null.refreshGameProfiles();
  }
}
const DraftType = DraftStore2.DraftType;
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
({ CHANNEL_NOTICE_SHOW_DELAY: closure_21, Permissions: closure_22 } = Constants);
const seenQSTutorial = "seenQSTutorial";
let selectedIndex = 0;
let c25 = false;
let closure_26 = false;
const queryMode = null;
let results = [];
let c29 = null;
let c30 = 0;
let length = [];
let channelHistory = [];
let c33 = null;
let closure_34 = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class QuickSwitcherStoreClass extends PersistedStore {
  initialize(channelHistory) {
    this.waitFor(ActiveJoinedThreadsStore, AuthenticationStore, ChannelSectionStore, ChannelStore, DraftStore, GameAutocompleteStore, GuildChannelStore, GuildMemberStore, GuildStore, PermissionStore, ReadStateStore, SelectedChannelStore, SelectedGuildStore, ThemeStore, UserGuildSettingsStore);
    const items = [ThemeStore];
    this.syncWith(items, () => true);
    const Storage = Storage2.Storage;
    let c25 = Storage.get(seenQSTutorial) || false;
    channelHistory = undefined;
    Storage.get(seenQSTutorial) || false;
    if (channelHistory != null) {
      channelHistory = channelHistory.channelHistory;
    }
    if (channelHistory == null) {
      channelHistory = [];
    }
  }
  getState() {
    return { channelHistory };
  }
  isOpen() {
    return null != c3;
  }
  getResultTotals(GROUP_DM) {
    let num = 0;
    if (null != _null) {
      let reduced;
      if (null == GROUP_DM) {
        results = _null.results;
        reduced = results.reduce((acc, type) => {
          let sum = acc;
          if (type.type !== GROUP_DM(dependencyMap[16]).AutocompleterResultTypes.HEADER) {
            sum = acc + 1;
          }
          return sum;
        }, 0);
      } else {
        const results1 = _null.results;
        reduced = results1.reduce((acc, type) => {
          let sum = acc;
          if (type.type === GROUP_DM) {
            sum = acc + 1;
          }
          return sum;
        }, 0);
      }
      num = reduced;
    }
    return num;
  }
  channelNoticePredicate(arg0, arg1) {
    const tmp = closure_26 && Date.now() - arg1 >= closure_21;
    return tmp;
  }
  getFrequentGuilds() {
    let queryGuildsResult = null;
    if (null != _null) {
      queryGuildsResult = _null.queryGuilds("", 100);
    }
    return queryGuildsResult;
  }
  getFrequentGuildsLength() {
    let num = 0;
    if (null != _null) {
      num = _null.queryGuilds("", 100).length;
    }
    return num;
  }
  getChannelHistory() {
    return channelHistory;
  }
  getLastShowTimestamp() {
    return closure_34;
  }
  getProps() {
    let str;
    const obj = { theme: ThemeStore.theme, query: str, queryMode, results, selectedIndex, seenTutorial, maxQueryLength };
    str = "";
    if (null != _null) {
      str = _null.query;
    }
    return obj;
  }
}
const prototype = QuickSwitcherStoreClass.prototype;
QuickSwitcherStoreClass.displayName = "QuickSwitcherStore";
QuickSwitcherStoreClass.persistKey = "QuickSwitcherStore";
let obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  QUICKSWITCHER_SHOW: handleQuickSwitcherShow,
  SHOW_ACTION_SHEET_QUICK_SWITCHER: handleQuickSwitcherShow,
  QUICKSWITCHER_HIDE: handleQuickSwitcherHide,
  OVERLAY_SET_INPUT_LOCKED: handleQuickSwitcherHide,
  HIDE_ACTION_SHEET_QUICK_SWITCHER: handleQuickSwitcherHide,
  QUICKSWITCHER_SEARCH: function handleQuickSwitcherSearch(arg0) {
    let obj2;
    let query;
    ({ query, queryMode } = arg0);
    const trimmed = query.trim();
    if (null == _null) {
      return false;
    } else {
      if (queryMode !== queryMode) {
        let tmp6;
        if (null == queryMode) {
          const items = [, , , , , , , ];
          const setResultTypes2 = _null.setResultTypes;
          items[0] = _mod9067.AutocompleterResultTypes.USER;
          items[1] = _mod9067.AutocompleterResultTypes.GROUP_DM;
          items[2] = _mod9067.AutocompleterResultTypes.TEXT_CHANNEL;
          items[3] = _mod9067.AutocompleterResultTypes.GUILD;
          items[4] = _mod9067.AutocompleterResultTypes.APPLICATION;
          items[5] = _mod9067.AutocompleterResultTypes.GAME_PROFILE;
          items[6] = _mod9067.AutocompleterResultTypes.LINK;
          items[7] = _mod9067.AutocompleterResultTypes.IN_APP_NAVIGATION;
          setResultTypes2(items);
          tmp6 = require;
        } else {
          const tmp2 = queryMode === _mod9067.AutocompleterResultTypes.USER || queryMode === _mod9067.AutocompleterResultTypes.USER_GLOBAL;
          if (tmp2) {
            const items1 = [_mod9067.AutocompleterResultTypes.USER];
            _null.setResultTypes(items1);
            tmp6 = tmp31;
          } else {
            const items2 = [queryMode];
            _null.setResultTypes(items2);
            tmp6 = tmp31;
          }
        }
        let num = 5;
        const setLimit = _null.setLimit;
        if (null != queryMode) {
          num = 100;
        }
        setLimit(num);
        const guildId = SelectedGuildStore.getGuildId();
        if (queryMode === tmp6(9067).AutocompleterResultTypes.USER) {
          if (null != guildId) {
            const obj = { userFilters: obj2 };
            obj2 = { guild: guildId, friends: true };
            _null.setOptions(obj, true);
          }
        }
        if (queryMode === tmp6(9067).AutocompleterResultTypes.VOICE_CHANNEL) {
          _null.setOptions({ voiceChannelGuildFilter: null }, true);
        } else {
          _null.setOptions({ userFilters: null, voiceChannelGuildFilter: "y" }, true);
        }
      }
      if (queryMode === _mod9067.AutocompleterResultTypes.USER) {
        let guildId1 = SelectedGuildStore.getGuildId();
        if (guildId1 == null) {
          guildId1 = null;
        }
        _null.search(trimmed, guildId1);
      } else {
        _null.search(trimmed, undefined);
      }
    }
  },
  QUICKSWITCHER_SELECT: function handleQuickSwitcherSelect(selectedIndex) {
    selectedIndex = selectedIndex.selectedIndex;
  },
  QUICKSWITCHER_SWITCH_TO: function handleQuickSwitcherSwitchTo() {
    const tmp = c25;
    if (tmp) {
      return false;
    } else {
      c25 = true;
      const Storage = Storage2.Storage;
      const result = Storage.set(seenQSTutorial, true);
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    let found1;
    channelId = channelId.channelId;
    let obj2 = null;
    if (null == channelId) {
      return false;
    } else {
      const found = found1.filter((item) => item !== channelId);
      found1 = found;
      found.unshift(channelId);
      if (found1.length > 8) {
        found1.length = 8;
      }
      const sidebarState = ChannelSectionStore.getSidebarState(channelId);
      let type;
      if (sidebarState != null) {
        type = sidebarState.type;
      }
      if (type === obj2(6794).SidebarType.VIEW_CHANNEL) {
        if (sidebarState.channelId !== channelId) {
          if (null != ChannelSectionStore.getCurrentSidebarChannelId(channelId)) {
            if (null == ChannelSectionStore.getGuildSidebarState(tmp)) {
              const channelId2 = sidebarState.channelId;
              const tmp13 = found1;
              found1 = found1.filter((item) => item !== channelId);
              found1.unshift(channelId2);
              if (found1.length > 8) {
                found1.length = 8;
              }
              obj2 = { parentId: channelId, channelId: sidebarState.channelId, historyBeforeRestore: tmp13 };
              const _queueMicrotask = queueMicrotask;
              queueMicrotask(() => {
                if (c33 === obj2) {
                  c33 = null;
                }
              });
            }
          }
        }
      }
    }
  },
  SIDEBAR_VIEW_CHANNEL: function handleSidebarViewChannel(sidebarType) {
    _null = null;
    if (sidebarType.sidebarType !== SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
      return false;
    } else {
      const tmp2 = null != _null && _null.parentId === sidebarType.baseChannelId && _null.channelId !== sidebarType.channelId;
      if (tmp2) {
        channelHistory = tmp.historyBeforeRestore;
      }
      const channelId = sidebarType.channelId;
      const found = channelHistory.filter((item) => item !== channelId);
      channelHistory = found;
      found.unshift(channelId);
      if (channelHistory.length > 8) {
        channelHistory.length = 8;
      }
    }
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: handleGameAutocompleteSettled,
  GAME_AUTOCOMPLETE_FETCH_FAILURE: handleGameAutocompleteSettled
};
const quickSwitcherStoreClass = new QuickSwitcherStoreClass(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/quickswitcher/QuickSwitcherStore.tsx");

export default quickSwitcherStoreClass;
export { generateResultFromId };

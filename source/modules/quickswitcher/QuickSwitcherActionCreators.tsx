// Module ID: 9917
// Function ID: 76737
// Name: getQuickSwitcherOptions
// Dependencies: [5, 57, 4975, 1352, 1348, 4165, 1906, 3947, 7089, 653, 1355, 655, 7093, 7092, 675, 8386, 686, 5737, 4138, 4323, 4944, 4140, 9918, 8636, 8642, 5626, 9919, 6773, 5482, 7540, 2]
// Exports: search, selectResult, switchToResult, toggle

// Module 9917 (getQuickSwitcherOptions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import { InAppNavigationType } from "_isNativeReflectConstruct";
import { ChannelRecordBase } from "_callSuper";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { isStaticChannelRoute } from "set";
import { CollectibleShopTab } from "items";

let Layers;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
const require = arg1;
function getQuickSwitcherOptions(str) {
  const GameProfileInQuickswitcherExperiment = require(7092) /* GameProfileInQuickswitcherExperiment */.GameProfileInQuickswitcherExperiment;
  const enabled = GameProfileInQuickswitcherExperiment.getConfig({ location: "QuickSwitcherActionCreators.getQueryMode" }).enabled;
  const tmp3 = enabled ? closure_20 : frozen[str.charAt(str, 0)];
  let tmp4 = null;
  if (null != tmp3) {
    tmp4 = tmp3;
  }
  const items = [str.replace(enabled ? regExp1 : regExp, ""), tmp4];
  const tmp5 = callback2(items, 2);
  return { query: tmp5[0], queryMode: tmp5[1] };
}
function trackOpen(source) {
  if (!uiStore.isOpen()) {
    const guildId = store2.getGuildId();
    const channelId = store.getChannelId(guildId);
    let tmp6;
    if (null != channelId) {
      const channel = authStore.getChannel(channelId);
      let type = null;
      if (null != channel) {
        type = channel.type;
      }
      tmp6 = type;
    }
    let obj = importDefault(675);
    obj = { source, current_guild_id: guildId, current_channel_id: channelId, current_channel_type: tmp6 };
    obj.track(constants.QUICKSWITCHER_OPENED, obj);
  }
}
function trackClose(QUICKSWITCHER_CLOSED, record) {
  let query;
  let queryMode;
  let results;
  let score;
  let type;
  function getResultType(record) {
    let type = record;
    if (null == record) {
      return null;
    } else if (type.type === outer1_0(outer1_2[12]).AutocompleterResultTypes.IN_APP_NAVIGATION) {
      const text = `${type.type}_`;
      type = type.record.type;
      let type2 = `${type.type}_${type}`;
    } else {
      type2 = type.type;
    }
  }
  const props = uiStore.getProps();
  ({ results, queryMode, query } = props);
  const guildId = store2.getGuildId();
  const channelId = store.getChannelId(guildId);
  let obj = require(7093) /* sortByMatchScore */;
  const tmp4 = results[obj.findNextSelectedResult(obj, require(undefined, 7093) /* sortByMatchScore */.FindResultDirections.DOWN, -1, results)];
  const isEmailResult = importDefault(8386).isEmail(query);
  const obj2 = importDefault(8386);
  const isPhoneNumberResult = importDefault(8386).isPhoneNumber(query);
  const obj3 = importDefault(8386);
  const isUserTagLikeResult = importDefault(8386).isUserTagLike(query);
  let tmp8 = null != channelId;
  if (tmp8) {
    tmp8 = isStaticChannelRoute(channelId);
  }
  obj = {};
  let tmp10;
  if (!tmp8) {
    tmp10 = channelId;
  }
  obj.current_channel_id = tmp10;
  let tmp11;
  if (tmp8) {
    tmp11 = channelId;
  }
  obj.current_channel_static_route = tmp11;
  obj.current_guild_id = guildId;
  let str = "GENERAL";
  if (null != queryMode) {
    str = queryMode;
  }
  obj.query_mode = str;
  obj.query_length = query.length;
  obj.max_query_length = props.maxQueryLength;
  obj.is_email_like = isEmailResult;
  obj.is_phone_like = isPhoneNumberResult;
  obj.is_username_like = isUserTagLikeResult;
  let tmp12 = null;
  if (!isEmailResult) {
    tmp12 = null;
    if (!isPhoneNumberResult) {
      tmp12 = null;
      if (!isUserTagLikeResult) {
        tmp12 = query;
      }
    }
  }
  obj.query = tmp12;
  obj.top_result_type = getResultType(tmp4);
  score = null;
  if (null != tmp4) {
    score = tmp4.score;
  }
  obj.top_result_score = score;
  obj.num_results_total = uiStore.getResultTotals();
  obj.num_results_users = uiStore.getResultTotals(require(7093) /* sortByMatchScore */.AutocompleterResultTypes.USER);
  obj.num_results_text_channels = uiStore.getResultTotals(require(7093) /* sortByMatchScore */.AutocompleterResultTypes.TEXT_CHANNEL);
  obj.num_results_voice_channels = uiStore.getResultTotals(require(7093) /* sortByMatchScore */.AutocompleterResultTypes.VOICE_CHANNEL);
  obj.num_results_guilds = uiStore.getResultTotals(require(7093) /* sortByMatchScore */.AutocompleterResultTypes.GUILD);
  obj.num_results_group_dms = uiStore.getResultTotals(require(7093) /* sortByMatchScore */.AutocompleterResultTypes.GROUP_DM);
  if (null != channelId) {
    const channel = authStore.getChannel(channelId);
    type = null;
    if (null != channel) {
      type = channel.type;
    }
    obj.current_channel_type = type;
  }
  if (null != record) {
    ({ type, record, score } = record);
    obj.selected_type = getResultType(record);
    obj.selected_score = score;
    obj.selected_index = results.indexOf(record);
    if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.GUILD === type) {
      obj.selected_guild_id = record.id;
    } else {
      if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.GROUP_DM === type) {
            obj.selected_channel_id = record.id;
          } else if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.USER === type) {
            obj.selected_user_id = record.id;
          }
        }
      }
      if (record instanceof ChannelRecordBase) {
        let guild_id = null;
        if (null != record.guild_id) {
          guild_id = record.guild_id;
        }
        obj.selected_guild_id = guild_id;
      }
      obj.selected_channel_id = record.id;
    }
  }
  const obj4 = importDefault(8386);
  importDefault(675).track(QUICKSWITCHER_CLOSED, obj);
}
function hideQuickSwitcher() {
  importDefault(686).dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function show() {
  let str = arg0;
  let str2 = arg1;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  if (str2 === undefined) {
    str2 = "";
  }
  trackOpen(str);
  let obj = importDefault(686);
  obj = { type: "QUICKSWITCHER_SHOW" };
  const merged = Object.assign(getQuickSwitcherOptions(str2));
  obj.dispatch(obj);
}
function hide() {
  trackClose(constants.QUICKSWITCHER_CLOSED);
  hideQuickSwitcher();
}
function _openInviteFromQuickSwitcher() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ Layers, ME: closure_12, AppContext: closure_13, AnalyticEvents: closure_14, AnalyticsLocations: closure_15, AnalyticsPages: closure_16 } = ME);
let obj = {};
obj[require("sortByMatchScore").AutocompleterQuerySymbols.USER] = require("sortByMatchScore").AutocompleterResultTypes.USER;
obj[require("sortByMatchScore").AutocompleterQuerySymbols.TEXT_CHANNEL] = require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL;
obj[require("sortByMatchScore").AutocompleterQuerySymbols.VOICE_CHANNEL] = require("sortByMatchScore").AutocompleterResultTypes.VOICE_CHANNEL;
obj[require("sortByMatchScore").AutocompleterQuerySymbols.GUILD] = require("sortByMatchScore").AutocompleterResultTypes.GUILD;
const frozen = Object.freeze(obj);
obj = {};
let merged = Object.assign(frozen);
obj[require("sortByMatchScore").AutocompleterQuerySymbols.GAME_PROFILE] = require("sortByMatchScore").AutocompleterResultTypes.GAME_PROFILE;
let closure_20 = Object.freeze(obj);
const regExp = new RegExp("^" + require("sortByMatchScore").AutocompleterQuerySymbols.USER + "|" + require("sortByMatchScore").AutocompleterQuerySymbols.TEXT_CHANNEL + "|" + require("sortByMatchScore").AutocompleterQuerySymbols.VOICE_CHANNEL + "|\\" + require("sortByMatchScore").AutocompleterQuerySymbols.GUILD);
const regExp1 = new RegExp("^" + require("sortByMatchScore").AutocompleterQuerySymbols.USER + "|" + require("sortByMatchScore").AutocompleterQuerySymbols.TEXT_CHANNEL + "|" + require("sortByMatchScore").AutocompleterQuerySymbols.VOICE_CHANNEL + "|\\" + require("sortByMatchScore").AutocompleterQuerySymbols.GUILD + "|\\" + require("sortByMatchScore").AutocompleterQuerySymbols.GAME_PROFILE);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quickswitcher/QuickSwitcherActionCreators.tsx");

export { getQuickSwitcherOptions };
export { trackOpen };
export { trackClose };
export { show };
export { hide };
export const toggle = function toggle() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  if (uiStore.isOpen()) {
    hide();
  } else {
    show(str);
  }
};
export const search = function search(arg0) {
  let obj = importDefault(686);
  obj = { type: "QUICKSWITCHER_SEARCH" };
  const merged = Object.assign(getQuickSwitcherOptions(arg0));
  obj.dispatch(obj);
};
export const selectResult = function selectResult(selectedIndex) {
  let obj = importDefault(686);
  obj = { type: "QUICKSWITCHER_SELECT", selectedIndex };
  obj.dispatch(obj);
};
export const switchToResult = function switchToResult(record) {
  let QUICK_SWITCHER;
  let QUICK_SWITCHER2;
  let type;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  hideQuickSwitcher();
  trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, record);
  ({ type, record } = record);
  let obj = { page: constants2.QUICK_SWITCHER };
  if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.GUILD === type) {
    obj = { navigationReplace: true };
    require(5737) /* transitionToGuild */.transitionToGuild(record.id, obj);
    const obj24 = require(5737) /* transitionToGuild */;
  } else if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.TEXT_CHANNEL === type) {
    const channel = authStore.getChannel(record.id);
    if (null != channel) {
      obj = {};
      const obj1 = { analyticsSource: obj };
      obj.state = obj1;
      obj.navigationReplace = true;
      require(4138) /* transitionToChannel */.transitionToChannel(channel.id, obj);
      const obj21 = require(4138) /* transitionToChannel */;
    }
  } else if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.VOICE_CHANNEL === type) {
    const channel1 = authStore.getChannel(record.id);
    if (null != channel1) {
      if (flag) {
        let tmp76Result = tmp76(4323);
        tmp76Result.updateChatOpen(record.id, true);
      } else {
        tmp76Result = tmp76(4944);
        const voiceChannel = tmp76Result.selectVoiceChannel(record.id);
      }
      let obj2 = {};
      const obj3 = { analyticsSource: obj };
      obj2.state = obj3;
      obj2.navigationReplace = true;
      require(4138) /* transitionToChannel */.transitionToChannel(channel1.id, obj2);
      const obj18 = require(4138) /* transitionToChannel */;
    }
  } else if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.USER === type) {
    let obj4 = {};
    const items = [record.id];
    obj4.recipientIds = items;
    obj4.location = "Quickswitcher";
    importDefault(4140).openPrivateChannel(obj4);
    const obj13 = importDefault(4140);
    importDefault(9918).channelListScrollTo(closure_12, authStore.getDMFromUserId(record.id));
    const obj15 = importDefault(9918);
  } else if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.GROUP_DM === type) {
    let obj9 = require(4138) /* transitionToChannel */;
    const obj5 = { navigationReplace: true };
    obj9.transitionToChannel(record.id, obj5);
    let obj11 = importDefault(9918);
    obj11.channelListScrollTo(closure_12, record.id);
  } else if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.APPLICATION === type) {
    activeLibraryApplication = activeLibraryApplication.getActiveLibraryApplication(record.id);
    const id = record.id;
    ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = closure_15);
    const resolved = Promise.resolve();
  } else if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.GAME_PROFILE === type) {
    let obj6 = importDefault(8636);
    obj6 = { gameId: record.id };
    const obj7 = { shouldOpenGameProfile: true, gameId: record.id };
    obj6.gameProfileModalChecks = obj7;
    obj6.source = require(8642) /* GameProfileEmbedAction */.GameProfileSources.QuickSwitcher;
    obj6.openGameProfileModal(obj6);
  } else if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.LINK === type) {
    if (null != record.inviteCode) {
      (function openInviteFromQuickSwitcher(inviteCode) {
        return outer1_29(...arguments);
      })(record.inviteCode);
    } else {
      const obj8 = { navigationReplace: true };
      importDefault(5626)(record.path, obj8);
    }
  } else if (require(7093) /* sortByMatchScore */.AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
    if (record.record.type !== InAppNavigationType.SETTINGS) {
      if (record.record.type === InAppNavigationType.PLAYGROUND) {
        obj4 = require(9919) /* usePlaygroundAccessExperiment */;
      } else if (record.record.type === InAppNavigationType.SHOP_ORBS_TAB) {
        obj2 = require(6773) /* _createForOfIteratorHelperLoose */;
        obj9 = { tab: CollectibleShopTab.ORBS };
        const items1 = [importDefault(5482).QUICK_SWITCHER];
        obj9.analyticsLocations = items1;
        obj9.analyticsSource = importDefault(5482).QUICK_SWITCHER;
        obj2.openCollectiblesShop(obj9);
      } else {
        const obj10 = { navigationReplace: true };
        importDefault(5626)(record.path, obj10);
      }
    }
  }
  obj11 = { type: "QUICKSWITCHER_SWITCH_TO", result: record };
  importDefault(686).dispatch(obj11);
};

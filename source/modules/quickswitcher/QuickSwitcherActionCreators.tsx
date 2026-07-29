// Module ID: 9907
// Function ID: 9908
// Name: trackClose
// Dependencies: [5, 32, 5032, 1376, 1372, 4224, 1931, 4006, 6159, 676, 1379, 678, 6163, 6162, 698, 8206, 709, 6690, 4197, 4383, 5001, 4199, 9908, 8480, 8486, 5679, 9909, 5797, 5535, 6693, 2]
// Exports: getQuickSwitcherOptions, hide, search, selectResult, switchToResult, toggle, trackOpen

// Module 9907 (trackClose)
import setLibraryApplications from "setLibraryApplications";
import _slicedToArray from "_slicedToArray";
import { InAppNavigationType } from "fromType";
import { ChannelRecordBase } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import closure_8 from "setLibraryApplications";
import handleConnectionOpen from "handleConnectionOpen";
import closure_10 from "handleConnectionOpen";
import getGeneralQueryResultTypes from "getGeneralQueryResultTypes";
import ME from "ME";
import { isStaticChannelRoute } from "set";
import { CollectibleShopTab } from "items";

let Layers;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
const require = arg1;
function trackClose(QUICKSWITCHER_CLOSED, type) {
  let query;
  let queryMode;
  let record;
  let results;
  let type3;
  let obj = getGeneralQueryResultTypes;
  const props = getGeneralQueryResultTypes.getProps();
  ({ results, queryMode, query } = props);
  const guildId = store2.getGuildId();
  const channelId = store.getChannelId(guildId);
  const obj2 = require(6163) /* sortByMatchScore */;
  const tmp6 = results[obj2.findNextSelectedResult(obj2, require(undefined, 6163) /* sortByMatchScore */.FindResultDirections.DOWN, -1, results)];
  const isEmailResult = importDefault(8206).isEmail(query);
  const obj3 = importDefault(8206);
  const tmp7 = importDefault;
  const isPhoneNumberResult = importDefault(8206).isPhoneNumber(query);
  const obj4 = importDefault(8206);
  const isUserTagLikeResult = importDefault(8206).isUserTagLike(query);
  let tmp11 = null != channelId;
  if (tmp11) {
    tmp11 = isStaticChannelRoute(channelId);
  }
  let tmp13;
  if (!tmp11) {
    tmp13 = channelId;
  }
  obj = { current_channel_id: tmp13, current_channel_static_route: null, current_guild_id: null, query_mode: null, query_length: null, max_query_length: null, is_email_like: null, is_phone_like: null, is_username_like: null, query: null, top_result_type: null, top_result_score: null, num_results_total: null, num_results_users: null, num_results_text_channels: null, num_results_voice_channels: null, num_results_guilds: null, num_results_group_dms: null };
  let tmp14;
  if (tmp11) {
    tmp14 = channelId;
  }
  obj[1] = tmp14;
  obj[2] = guildId;
  if (queryMode == null) {
    queryMode = "GENERAL";
  }
  obj[3] = queryMode;
  obj[4] = query.length;
  obj[5] = props.maxQueryLength;
  obj[6] = isEmailResult;
  obj[7] = isPhoneNumberResult;
  obj[8] = isUserTagLikeResult;
  let tmp15 = null;
  if (!isEmailResult) {
    tmp15 = null;
    if (!isPhoneNumberResult) {
      tmp15 = null;
      if (!isUserTagLikeResult) {
        tmp15 = query;
      }
    }
  }
  obj[9] = tmp15;
  if (null == tmp6) {
    obj[10] = null;
    let score = null;
    if (null != tmp6) {
      score = tmp6.score;
    }
    obj[11] = score;
    obj[12] = obj.getResultTotals();
    obj[13] = obj.getResultTotals(tmp4(6163).AutocompleterResultTypes.USER);
    obj[14] = obj.getResultTotals(tmp4(6163).AutocompleterResultTypes.TEXT_CHANNEL);
    obj[15] = obj.getResultTotals(tmp4(6163).AutocompleterResultTypes.VOICE_CHANNEL);
    obj[16] = obj.getResultTotals(tmp4(6163).AutocompleterResultTypes.GUILD);
    obj[17] = obj.getResultTotals(tmp4(6163).AutocompleterResultTypes.GROUP_DM);
    if (null != channelId) {
      const channel = authStore.getChannel(channelId);
      type = null;
      if (null != channel) {
        type = channel.type;
      }
      obj.current_channel_type = type;
    }
    if (null != type) {
      ({ type: type3, record } = type);
      if (null == type) {
        obj.selected_type = null;
        obj.selected_score = tmp27;
        obj.selected_index = results.indexOf(type);
        if (tmp4(6163).AutocompleterResultTypes.GUILD === type3) {
          obj.selected_guild_id = record.id;
        } else {
          if (tmp4(6163).AutocompleterResultTypes.TEXT_CHANNEL !== type3) {
            if (tmp4(6163).AutocompleterResultTypes.VOICE_CHANNEL !== type3) {
              if (tmp4(6163).AutocompleterResultTypes.GROUP_DM === type3) {
                obj.selected_channel_id = record.id;
              } else if (tmp4(6163).AutocompleterResultTypes.USER === type3) {
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
      } else if (type.type === tmp4(6163).AutocompleterResultTypes.IN_APP_NAVIGATION) {
        let type2 = `${type.type}_${type.record.type}`;
      } else {
        type2 = type.type;
      }
    }
    tmp7(698).track(QUICKSWITCHER_CLOSED, obj);
  } else if (tmp6.type === tmp4(6163).AutocompleterResultTypes.IN_APP_NAVIGATION) {
    type = `${tmp6.type}_${tmp6.record.type}`;
  } else {
    type = tmp6.type;
  }
}
function show() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  let str2 = arg1;
  if (arg1 === undefined) {
    str2 = "";
  }
  if (!getGeneralQueryResultTypes.isOpen()) {
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
    let obj = importDefault(698);
    obj = { source: null, current_guild_id: null, current_channel_id: null, current_channel_type: null };
    obj[0] = str;
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = tmp6;
    obj.track(constants.QUICKSWITCHER_OPENED, obj);
  }
  const GameProfileInQuickswitcherExperiment = require(6162) /* GameProfileInQuickswitcherExperiment */.GameProfileInQuickswitcherExperiment;
  const enabled = GameProfileInQuickswitcherExperiment.getConfig({ location: "QuickSwitcherActionCreators.getQueryMode" }).enabled;
  let tmp16 = enabled ? closure_20 : frozen[str2.charAt(str2, 0)];
  if (tmp16 == null) {
    tmp16 = null;
  }
  obj = { type: "QUICKSWITCHER_SHOW" };
  const items = [str2.replace(enabled ? regExp1 : regExp, ""), tmp16];
  const tmp17 = callback2(items, 2);
  const merged = Object.assign({ query: tmp17[0], queryMode: tmp17[1] });
  importDefault(709).dispatch(obj);
}
function _openInviteFromQuickSwitcher() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, invite) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw invite;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = invite;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw invite;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = invite;
              return obj;
            } else {
              const table = tmp5;
              invite = tmp2;
              invite = undefined;
              let obj3 = outer1_1(outer1_2[29]);
              c3 = 1;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj3.resolveInvite(closure_0, "Quick Switcher");
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw invite;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = invite;
            return obj2;
          } else {
            invite = invite.invite;
            if (null != invite) {
              obj = invite(table[16]);
              obj3 = { type: "INVITE_MODAL_OPEN", invite: null, code: null, context: null };
              obj3[1] = invite;
              obj3[2] = closure_0;
              obj3[3] = constants.APP;
              obj.dispatch(obj3);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c4 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  const _openInviteFromQuickSwitcher = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Layers, ME: closure_12, AppContext: map1, AnalyticEvents: closure_14, AnalyticsLocations: closure_15, AnalyticsPages: closure_16 } = ME);
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
const result = require("fromType").fileFinishedImporting("modules/quickswitcher/QuickSwitcherActionCreators.tsx");

export const getQuickSwitcherOptions = function getQuickSwitcherOptions(str) {
  const GameProfileInQuickswitcherExperiment = require(6162) /* GameProfileInQuickswitcherExperiment */.GameProfileInQuickswitcherExperiment;
  const enabled = GameProfileInQuickswitcherExperiment.getConfig({ location: "QuickSwitcherActionCreators.getQueryMode" }).enabled;
  let tmp3 = enabled ? closure_20 : frozen[str.charAt(str, 0)];
  if (tmp3 == null) {
    tmp3 = null;
  }
  const items = [str.replace(enabled ? regExp1 : regExp, ""), tmp3];
  const tmp4 = callback2(items, 2);
  return { query: tmp4[0], queryMode: tmp4[1] };
};
export const trackOpen = function trackOpen(arg0) {
  if (!getGeneralQueryResultTypes.isOpen()) {
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
    let obj = importDefault(698);
    obj = { source: null, current_guild_id: null, current_channel_id: null, current_channel_type: null };
    obj[0] = arg0;
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = tmp6;
    obj.track(constants.QUICKSWITCHER_OPENED, obj);
  }
};
export { trackClose };
export { show };
export const hide = function hide() {
  trackClose(constants.QUICKSWITCHER_CLOSED);
  importDefault(709).dispatch({ type: "QUICKSWITCHER_HIDE" });
};
export const toggle = function toggle() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  if (getGeneralQueryResultTypes.isOpen()) {
    trackClose(constants.QUICKSWITCHER_CLOSED);
    importDefault(709).dispatch({ type: "QUICKSWITCHER_HIDE" });
    const obj = importDefault(709);
  } else {
    show(str);
  }
};
export const search = function search(str) {
  let obj = importDefault(709);
  const GameProfileInQuickswitcherExperiment = require(6162) /* GameProfileInQuickswitcherExperiment */.GameProfileInQuickswitcherExperiment;
  const enabled = GameProfileInQuickswitcherExperiment.getConfig({ location: "QuickSwitcherActionCreators.getQueryMode" }).enabled;
  let tmp3 = enabled ? closure_20 : frozen[str.charAt(str, 0)];
  if (tmp3 == null) {
    tmp3 = null;
  }
  obj = { type: "QUICKSWITCHER_SEARCH" };
  const items = [str.replace(enabled ? regExp1 : regExp, ""), tmp3];
  const tmp4 = callback2(items, 2);
  obj = { query: tmp4[0], queryMode: tmp4[1] };
  const merged = Object.assign(obj);
  obj.dispatch(obj);
};
export const selectResult = function selectResult(selectedIndex) {
  let obj = importDefault(709);
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
  let obj = importDefault(709);
  obj.dispatch({ type: "QUICKSWITCHER_HIDE" });
  trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, record);
  ({ type, record } = record);
  obj = { page: constants2.QUICK_SWITCHER };
  if (require(6163) /* sortByMatchScore */.AutocompleterResultTypes.GUILD === type) {
    let tmp5Result = tmp5(6690);
    tmp5Result.transitionToGuild(record.id, { navigationReplace: true });
  } else if (tmp5(6163).AutocompleterResultTypes.TEXT_CHANNEL === type) {
    const channel = authStore.getChannel(record.id);
    if (null != channel) {
      tmp5Result = tmp5(4197);
      obj = { state: null, navigationReplace: true };
      const obj1 = { analyticsSource: null };
      obj1[0] = obj;
      obj[0] = obj1;
      tmp5Result.transitionToChannel(channel.id, obj);
    }
  } else if (tmp5(6163).AutocompleterResultTypes.VOICE_CHANNEL === type) {
    const channel1 = authStore.getChannel(record.id);
    if (null != channel1) {
      if (flag) {
        let tmpResult = tmp(4383);
        tmpResult.updateChatOpen(record.id, true);
      } else {
        tmpResult = tmp(5001);
        const voiceChannel = tmpResult.selectVoiceChannel(record.id);
      }
      const obj2 = { state: null, navigationReplace: true };
      const obj3 = { analyticsSource: null };
      obj3[0] = obj;
      obj2[0] = obj3;
      tmp5(4197).transitionToChannel(channel1.id, obj2);
      const tmp5Result1 = tmp5(4197);
    }
  } else if (tmp5(6163).AutocompleterResultTypes.USER === type) {
    const obj4 = { recipientIds: null, location: "Quickswitcher" };
    const items = [record.id];
    obj4[0] = items;
    tmp(4199).openPrivateChannel(obj4);
    const tmpResult1 = tmp(4199);
    tmp(9908).channelListScrollTo(closure_12, authStore.getDMFromUserId(record.id));
    const tmpResult2 = tmp(9908);
  } else if (tmp5(6163).AutocompleterResultTypes.GROUP_DM === type) {
    tmp5(4197).transitionToChannel(record.id, { navigationReplace: true });
    const tmp5Result2 = tmp5(4197);
    tmp(9908).channelListScrollTo(closure_12, record.id);
    const tmpResult3 = tmp(9908);
  } else if (tmp5(6163).AutocompleterResultTypes.APPLICATION === type) {
    activeLibraryApplication = activeLibraryApplication.getActiveLibraryApplication(record.id);
    const id = record.id;
    ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = closure_15);
    const resolved = Promise.resolve();
  } else if (tmp5(6163).AutocompleterResultTypes.GAME_PROFILE === type) {
    const obj5 = { gameId: null, gameProfileModalChecks: null, source: null };
    obj5[0] = record.id;
    const obj6 = { shouldOpenGameProfile: true, gameId: null };
    obj6[1] = record.id;
    obj5[1] = obj6;
    obj5[2] = tmp5(8486).GameProfileSources.QuickSwitcher;
    tmp(8480).openGameProfileModal(obj5);
    const tmpResult4 = tmp(8480);
  } else if (tmp5(6163).AutocompleterResultTypes.LINK === type) {
    if (null != record.inviteCode) {
      (function openInviteFromQuickSwitcher(inviteCode) {
        const self = this;
        const apply = closure_25.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(record.inviteCode);
    } else {
      tmp(5679)(record.path, { navigationReplace: true });
    }
  } else if (tmp5(6163).AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
    if (record.record.type !== InAppNavigationType.SETTINGS) {
      if (record.record.type === tmp37.PLAYGROUND) {
        const tmp5Result3 = tmp5(9909);
      } else if (record.record.type === tmp37.SHOP_ORBS_TAB) {
        const obj7 = { tab: null, analyticsLocations: null, analyticsSource: null };
        obj7[0] = CollectibleShopTab.ORBS;
        const items1 = [tmp(5535).QUICK_SWITCHER];
        obj7[1] = items1;
        obj7[2] = tmp(5535).QUICK_SWITCHER;
        tmp5(5797).openCollectiblesShop(obj7);
        const tmp5Result4 = tmp5(5797);
      } else {
        tmp(5679)(record.path, { navigationReplace: true });
      }
    }
  }
  importDefault(709).dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: record });
};

// Module ID: 11334
// Function ID: 11335
// Name: QuickSwitcherActionCreators
// Dependencies: [5, 32, 5746, 2046, 2042, 7725, 2096, 4648, 10176, 1074, 2049, 1076, 10177, 1241, 8722, 573, 7670, 4838, 5028, 5714, 4840, 11335, 9027, 9033, 7575, 11336, 7869, 7513, 11337, 8724, 2]
// Exports: hide, search, selectResult, switchToResultInNewTab, toggle, trackOpen

// Module 11334 (QuickSwitcherActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ValidationUtilsDefault from "ValidationUtils" /* 8722 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8724 */;
import sortByMatchScore from "sortByMatchScore" /* 10177 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 7725 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2096 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4648 */;
import QuickSwitcherStore from "QuickSwitcherStore" /* 10176 */;

const require = globalThis.__r;

require = fn;
function getQuickSwitcherOptions(str) {
  const charAtResult = str.charAt(0);
  if (charAtResult === sortByMatchScore.AutocompleterQuerySymbols.USER) {
    if (charAtResult1 === tmp2(10177).AutocompleterQuerySymbols.USER) {
      const items = [str.slice(2), tmp2(10177).AutocompleterResultTypes.USER_GLOBAL];
      let items1 = items;
    }
    charAtResult1 = str.charAt(1);
    const obj = { query: null, queryMode: null };
    [obj.query, obj.queryMode] = items1;
    return obj;
  }
  let tmp5 = closure_19[charAtResult];
  if (tmp5 == null) {
    tmp5 = null;
  }
  items1 = [str.replace(regExp, ""), tmp5];
}
function trackClose(QUICKSWITCHER_RESULT_SELECTED, type) {
  const props = QuickSwitcherStore.getProps();
  ({ results, queryMode, query } = props);
  const guildId = SelectedGuildStore.getGuildId();
  const channelId = SelectedChannelStore.getChannelId(guildId);
  const obj2 = sortByMatchScore;
  const tmp6 = results[obj2.findNextSelectedResult(obj2, sortByMatchScore.FindResultDirections.DOWN, -1, results)];
  const isEmailResult = ValidationUtilsDefault.isEmail(query);
  const isPhoneNumberResult = ValidationUtilsDefault.isPhoneNumber(query);
  const isUserTagLikeResult = ValidationUtilsDefault.isUserTagLike(query);
  let tmp11 = null != channelId;
  if (tmp11) {
    tmp11 = isStaticChannelRoute(channelId);
  }
  let tmp13;
  if (!tmp11) {
    tmp13 = channelId;
  }
  const obj6 = { current_channel_id: tmp13, current_channel_static_route: null, current_guild_id: null, query_mode: null, query_length: null, max_query_length: null, is_email_like: null, is_phone_like: null, is_username_like: null, query: null, top_result_type: null, top_result_score: null, num_results_total: null, num_results_users: null, num_results_text_channels: null, num_results_voice_channels: null, num_results_guilds: null, num_results_group_dms: null };
  let tmp14;
  if (tmp11) {
    tmp14 = channelId;
  }
  obj6.current_channel_static_route = tmp14;
  obj6.current_guild_id = guildId;
  if (queryMode == null) {
    queryMode = "GENERAL";
  }
  obj6.query_mode = queryMode;
  obj6.query_length = query.length;
  obj6.max_query_length = props.maxQueryLength;
  obj6.is_email_like = isEmailResult;
  obj6.is_phone_like = isPhoneNumberResult;
  obj6.is_username_like = isUserTagLikeResult;
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
  obj6.query = tmp15;
  if (null == tmp6) {
    obj6.top_result_type = null;
    let score = null;
    if (null != tmp6) {
      score = tmp6.score;
    }
    obj6.top_result_score = score;
    obj6.num_results_total = obj.getResultTotals();
    obj6.num_results_users = obj.getResultTotals(tmp4(10177).AutocompleterResultTypes.USER);
    obj6.num_results_text_channels = obj.getResultTotals(tmp4(10177).AutocompleterResultTypes.TEXT_CHANNEL);
    obj6.num_results_voice_channels = obj.getResultTotals(tmp4(10177).AutocompleterResultTypes.VOICE_CHANNEL);
    obj6.num_results_guilds = obj.getResultTotals(tmp4(10177).AutocompleterResultTypes.GUILD);
    obj6.num_results_group_dms = obj.getResultTotals(tmp4(10177).AutocompleterResultTypes.GROUP_DM);
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let type1 = null;
      if (null != channel) {
        type1 = channel.type;
      }
      obj6.current_channel_type = type1;
    }
    if (null != type) {
      ({ type: type3, record } = type);
      if (null == type) {
        obj6.selected_type = null;
        obj6.selected_score = tmp27;
        obj6.selected_index = results.indexOf(type);
        if (tmp4(10177).AutocompleterResultTypes.GUILD === type3) {
          obj6.selected_guild_id = record.id;
        } else {
          if (tmp4(10177).AutocompleterResultTypes.TEXT_CHANNEL !== type3) {
            if (tmp4(10177).AutocompleterResultTypes.VOICE_CHANNEL !== type3) {
              if (tmp4(10177).AutocompleterResultTypes.GROUP_DM === type3) {
                obj6.selected_channel_id = record.id;
              } else if (tmp4(10177).AutocompleterResultTypes.USER === type3) {
                obj6.selected_user_id = record.id;
              }
            }
          }
          if (record instanceof ChannelRecordBase) {
            let guild_id = null;
            if (null != record.guild_id) {
              guild_id = record.guild_id;
            }
            obj6.selected_guild_id = guild_id;
          }
          obj6.selected_channel_id = record.id;
        }
      } else if (type.type === tmp4(10177).AutocompleterResultTypes.IN_APP_NAVIGATION) {
        let type2 = `${type.type}_${type.record.type}`;
      } else {
        type2 = type.type;
      }
    }
    AnalyticsUtilsDefault.track(QUICKSWITCHER_RESULT_SELECTED, obj6);
  } else if (tmp6.type === tmp4(10177).AutocompleterResultTypes.IN_APP_NAVIGATION) {
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
  if (!QuickSwitcherStore.isOpen()) {
    const guildId = SelectedGuildStore.getGuildId();
    const channelId = SelectedChannelStore.getChannelId(guildId);
    let tmp6;
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let type = null;
      if (null != channel) {
        type = channel.type;
      }
      tmp6 = type;
    }
    const obj2 = { source: str, current_guild_id: guildId, current_channel_id: channelId, current_channel_type: tmp6 };
    AnalyticsUtilsDefault.track(constants.QUICKSWITCHER_OPENED, obj2);
  }
  const merged = Object.assign(getQuickSwitcherOptions(str2));
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SHOW" });
}
function switchToResult(record) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
  trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, record);
  ({ type, record } = record);
  const obj2 = { page: constants2.QUICK_SWITCHER };
  if (sortByMatchScore.AutocompleterResultTypes.GUILD === type) {
    tmp5(7670).transitionToGuild(record.id, { navigationReplace: true });
    const tmp5Result = tmp5(7670);
  } else if (tmp5(10177).AutocompleterResultTypes.TEXT_CHANNEL === type) {
    const channel = ChannelStore.getChannel(record.id);
    if (null != channel) {
      const obj3 = { state: null, navigationReplace: true };
      const obj4 = { analyticsSource: obj2 };
      obj3.state = obj4;
      tmp5(4838).transitionToChannel(channel.id, obj3);
      const tmp5Result6 = tmp5(4838);
    }
  } else if (tmp5(10177).AutocompleterResultTypes.VOICE_CHANNEL === type) {
    const channel1 = ChannelStore.getChannel(record.id);
    if (null != channel1) {
      if (flag) {
        tmp(5028).updateChatOpen(record.id, true);
        const tmpResult = tmp(5028);
      } else {
        const voiceChannel = tmp(5714).selectVoiceChannel(record.id);
        const tmpResult7 = tmp(5714);
      }
      const obj5 = { state: null, navigationReplace: true };
      const obj6 = { analyticsSource: obj2 };
      obj5.state = obj6;
      tmp5(4838).transitionToChannel(channel1.id, obj5);
      const tmp5Result7 = tmp5(4838);
    }
  } else if (tmp5(10177).AutocompleterResultTypes.USER === type) {
    const obj7 = { recipientIds: null, location: "Quickswitcher" };
    const items = [record.id];
    obj7.recipientIds = items;
    tmp(4840).openPrivateChannel(obj7);
    const tmpResult8 = tmp(4840);
    tmp(11335).channelListScrollTo(closure_1_12, ChannelStore.getDMFromUserId(record.id));
    const tmpResult9 = tmp(11335);
  } else if (tmp5(10177).AutocompleterResultTypes.GROUP_DM === type) {
    tmp5(4838).transitionToChannel(record.id, { navigationReplace: true });
    const tmp5Result8 = tmp5(4838);
    tmp(11335).channelListScrollTo(closure_1_12, record.id);
    const tmpResult10 = tmp(11335);
  } else if (tmp5(10177).AutocompleterResultTypes.APPLICATION === type) {
    const activeLibraryApplication = LibraryApplicationStore.getActiveLibraryApplication(record.id);
    const id = record.id;
    ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = __initData);
    const resolved = Promise.resolve();
  } else if (tmp5(10177).AutocompleterResultTypes.GAME_PROFILE === type) {
    const obj8 = { gameId: record.id, gameProfileModalChecks: null, source: null };
    const obj9 = { shouldOpenGameProfile: true, gameId: record.id };
    obj8.gameProfileModalChecks = obj9;
    obj8.source = tmp5(9033).GameProfileSources.QuickSwitcher;
    tmp(9027).openGameProfileModal(obj8);
    const tmpResult11 = tmp(9027);
  } else if (tmp5(10177).AutocompleterResultTypes.LINK === type) {
    if (null != record.inviteCode) {
      (function openInviteFromQuickSwitcher() {
        const self = this;
        const apply = closure_1_25.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(record.inviteCode);
    } else {
      tmp(7575)(record.path, { navigationReplace: true });
    }
  } else if (tmp5(10177).AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
    if (record.record.type !== InAppNavigationType.SETTINGS) {
      if (record.record.type === tmp37.PLAYGROUND) {
        const tmp5Result9 = tmp5(11336);
      } else if (record.record.type === tmp37.SHOP_ORBS_TAB) {
        const obj10 = { tab: CollectibleShopTab.ORBS, analyticsLocations: null, analyticsSource: null };
        const items1 = [tmp(7513).QUICK_SWITCHER];
        obj10.analyticsLocations = items1;
        obj10.analyticsSource = tmp(7513).QUICK_SWITCHER;
        tmp5(7869).openCollectiblesShop(obj10);
        const tmp5Result10 = tmp5(7869);
      } else {
        tmp(7575)(record.path, { navigationReplace: true });
      }
    }
  }
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: record });
}
let closure_25 = async function _openInviteFromQuickSwitcher(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          let invite;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: InstantInviteActionCreatorsDefault.resolveInvite(closure_0, "Quick Switcher"), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        invite = value.invite;
        if (null != invite) {
          const obj7 = { type: "INVITE_MODAL_OPEN", invite, code: closure_129_0, context: closure_130_13.APP };
          closure_130_1(closure_130_2[15]).dispatch(obj7);
          const obj = closure_130_1(closure_130_2[15]);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp20) {
      c4 = tmp;
      throw tmp20;
    }
  }
};
const InAppNavigationType = fn(5746).InAppNavigationType;
const ChannelRecordBase = fn(2046).ChannelRecordBase;
const Constants = fn(1074);
({ Layers, ME: closure_12, AppContext: map1, AnalyticEvents: closure_14, AnalyticsLocations: closure_15, AnalyticsPages: closure_16 } = Constants);
const isStaticChannelRoute = fn(2049).isStaticChannelRoute;
const CollectibleShopTab = fn(1076).CollectibleShopTab;
let obj = {};
obj[fn(10177).AutocompleterQuerySymbols.USER] = fn(10177).AutocompleterResultTypes.USER;
obj[fn(10177).AutocompleterQuerySymbols.TEXT_CHANNEL] = fn(10177).AutocompleterResultTypes.TEXT_CHANNEL;
obj[fn(10177).AutocompleterQuerySymbols.VOICE_CHANNEL] = fn(10177).AutocompleterResultTypes.VOICE_CHANNEL;
obj[fn(10177).AutocompleterQuerySymbols.GUILD] = fn(10177).AutocompleterResultTypes.GUILD;
obj[fn(10177).AutocompleterQuerySymbols.GAME_PROFILE] = fn(10177).AutocompleterResultTypes.GAME_PROFILE;
let closure_19 = Object.freeze(obj);
const regExp = new RegExp("^" + fn(10177).AutocompleterQuerySymbols.USER + "|" + fn(10177).AutocompleterQuerySymbols.TEXT_CHANNEL + "|" + fn(10177).AutocompleterQuerySymbols.VOICE_CHANNEL + "|\\" + fn(10177).AutocompleterQuerySymbols.GUILD + "|\\" + fn(10177).AutocompleterQuerySymbols.GAME_PROFILE);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quickswitcher/QuickSwitcherActionCreators.tsx");

export { getQuickSwitcherOptions };
export const trackOpen = function trackOpen(source) {
  if (!QuickSwitcherStore.isOpen()) {
    const guildId = SelectedGuildStore.getGuildId();
    const channelId = SelectedChannelStore.getChannelId(guildId);
    let tmp6;
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let type = null;
      if (null != channel) {
        type = channel.type;
      }
      tmp6 = type;
    }
    const obj2 = { source, current_guild_id: guildId, current_channel_id: channelId, current_channel_type: tmp6 };
    AnalyticsUtilsDefault.track(constants.QUICKSWITCHER_OPENED, obj2);
  }
};
export { trackClose };
export { show };
export const hide = function hide() {
  trackClose(constants.QUICKSWITCHER_CLOSED);
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
};
export const toggle = function toggle() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  if (QuickSwitcherStore.isOpen()) {
    trackClose(constants.QUICKSWITCHER_CLOSED);
    DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
  } else {
    show(str);
  }
};
export const search = function search(arg0) {
  const merged = Object.assign(getQuickSwitcherOptions(arg0));
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SEARCH" });
};
export const selectResult = function selectResult(selectedIndex) {
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex });
};
export { switchToResult };
export const switchToResultInNewTab = function switchToResultInNewTab(type) {
  _require = type;
  type = type.type;
  if (require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL !== type) {
    if (tmp(10177).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
      if (tmp(10177).AutocompleterResultTypes.GROUP_DM !== type) {
        if (tmp(10177).AutocompleterResultTypes.DM !== type) {
          if (tmp(10177).AutocompleterResultTypes.USER === type) {
            DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
            trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
            const obj3 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
            DispatcherDefault.dispatch(obj3);
            asyncGeneratorStep(async (arg0, value) => {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c3 = 2;
                  if (0 === dependencyMap) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      closure_128_0 = undefined;
                      const obj5 = { recipientIds: null, location: "Quickswitcher", navigateToChannel: false };
                      const items = [tmp5.record.id];
                      obj5.recipientIds = items;
                      dependencyMap = 1;
                      c3 = 1;
                      const obj6 = { value: tmp2(4840).openPrivateChannel(obj5), done: false };
                      return obj6;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    closure_128_0 = value;
                    tmp5(11337).openChannelTabActive(closure_128_0, null);
                    c3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp16) {
                  c3 = tmp;
                  throw tmp16;
                }
              }
            })().catch(() => {

            });
          } else {
            switchToResult(type);
          }
        }
      }
    }
  }
  const channel = ChannelStore.getChannel(type.record.id);
  if (null == channel) {
    switchToResult(type);
  } else {
    let guildId = channel.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
    trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
    let obj4 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
    DispatcherDefault.dispatch(obj4);
    tmp(11337).openChannelTabActive(channel.id, guildId);
    const tmpResult = tmp(11337);
  }
};

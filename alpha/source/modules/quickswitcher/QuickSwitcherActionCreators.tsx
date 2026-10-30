// Module ID: 13347
// Function ID: 13348
// Name: QuickSwitcherActionCreators
// Dependencies: [5, 32, 6774, 13348, 4862, 4858, 2038, 4912, 5040, 9115, 1072, 4865, 1074, 9116, 1253, 7488, 13350, 572, 7516, 5751, 5754, 6700, 7479, 11519, 9300, 9320, 7415, 13351, 7712, 7345, 8937, 2]
// Exports: hide, search, selectResult, switchToResultInNewTab, toggle, trackOpen

// Module 13347 (QuickSwitcherActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import transitionToChannel from "transitionToChannel" /* 5751 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6700 */;
import InAppNavigationRecord from "InAppNavigationRecord" /* 6774 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7415 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import ValidationUtilsDefault from "ValidationUtils" /* 7488 */;
import transitionToGuild from "transitionToGuild" /* 7516 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8937 */;
import _mod9116 from "module_9116" /* 9116 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9300 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 11519 */;
import ChannelTabsActionCreators from "ChannelTabsActionCreators" /* 13350 */;
import PlaygroundAccessExperiment from "PlaygroundAccessExperiment" /* 13351 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelTabsStore from "ChannelTabsStore" /* 13348 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 2038 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import QuickSwitcherStore from "QuickSwitcherStore" /* 9115 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, closure_2;

let Layers;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
function getQuickSwitcherOptions(str) {
  const charAtResult = str.charAt(0);
  if (charAtResult === _mod9116.AutocompleterQuerySymbols.USER) {
    let items1;
    const charAtResult1 = str.charAt(1);
    if (charAtResult1 === _mod9116.AutocompleterQuerySymbols.USER) {
      const items = [str.slice(2), _mod9116.AutocompleterResultTypes.USER_GLOBAL];
      items1 = items;
    }
    obj = { query: null, queryMode: null };
    [obj.query, obj.queryMode] = items1;
    _slicedToArray(items1, 2);
    return obj;
  }
  let tmp5 = closure_20[charAtResult];
  if (tmp5 == null) {
    tmp5 = null;
  }
  items1 = [str.replace(regExp, ""), tmp5];
}
function trackClose(QUICKSWITCHER_RESULT_SELECTED, score) {
  let query;
  let queryMode;
  let record;
  let results;
  let score1;
  let tmp14;
  let tmp15;
  let tmp16;
  let type3;
  const props = QuickSwitcherStore.getProps();
  ({ results, queryMode, query } = props);
  const maxQueryLength = props.maxQueryLength;
  const guildId = SelectedGuildStore.getGuildId();
  const channelId = SelectedChannelStore.getChannelId(guildId);
  const obj2 = _mod9116;
  const tmp6 = results[obj2.findNextSelectedResult(obj2, _mod9116.FindResultDirections.DOWN, -1, results)];
  const obj3 = ValidationUtilsDefault;
  const isEmailResult = obj3.isEmail(query);
  const obj4 = ValidationUtilsDefault;
  const isPhoneNumberResult = obj4.isPhoneNumber(query);
  const obj5 = ValidationUtilsDefault;
  const isUserTagLikeResult = obj5.isUserTagLike(query);
  let tmp11 = null != channelId;
  if (tmp11) {
    tmp11 = isStaticChannelRoute(channelId);
  }
  let tmp13;
  if (!tmp11) {
    tmp13 = channelId;
  }
  const obj6 = { current_channel_id: tmp13, current_channel_static_route: tmp14, current_guild_id: guildId, query_mode: queryMode, query_length: query.length, max_query_length: maxQueryLength, is_email_like: isEmailResult, is_phone_like: isPhoneNumberResult, is_username_like: isUserTagLikeResult, query: tmp15, top_result_type: tmp16, top_result_score: score1, num_results_total: QuickSwitcherStore.getResultTotals(), num_results_users: QuickSwitcherStore.getResultTotals(_mod9116.AutocompleterResultTypes.USER), num_results_text_channels: QuickSwitcherStore.getResultTotals(_mod9116.AutocompleterResultTypes.TEXT_CHANNEL), num_results_voice_channels: QuickSwitcherStore.getResultTotals(_mod9116.AutocompleterResultTypes.VOICE_CHANNEL), num_results_guilds: QuickSwitcherStore.getResultTotals(_mod9116.AutocompleterResultTypes.GUILD), num_results_group_dms: QuickSwitcherStore.getResultTotals(_mod9116.AutocompleterResultTypes.GROUP_DM) };
  tmp14 = undefined;
  if (tmp11) {
    tmp14 = channelId;
  }
  if (queryMode == null) {
    queryMode = "GENERAL";
  }
  tmp15 = null;
  if (!isEmailResult) {
    tmp15 = null;
    if (!isPhoneNumberResult) {
      tmp15 = null;
      if (!isUserTagLikeResult) {
        tmp15 = query;
      }
    }
  }
  tmp16 = null;
  if (null != tmp6) {
    let type;
    if (tmp6.type === _mod9116.AutocompleterResultTypes.IN_APP_NAVIGATION) {
      type = `${tmp6.type}_${tmp6.record.type}`;
    } else {
      type = tmp6.type;
    }
    tmp16 = type;
  }
  score1 = null;
  if (null != tmp6) {
    score1 = tmp6.score;
  }
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    let type1 = null;
    if (null != channel) {
      type1 = channel.type;
    }
    obj6.current_channel_type = type1;
  }
  if (null != score) {
    ({ type: type3, record } = score);
    let tmp21 = null;
    score = score.score;
    if (null != score) {
      let type2;
      if (score.type === _mod9116.AutocompleterResultTypes.IN_APP_NAVIGATION) {
        type2 = `${score.type}_${score.record.type}`;
      } else {
        type2 = score.type;
      }
      tmp21 = type2;
    }
    obj6.selected_type = tmp21;
    obj6.selected_score = score;
    obj6.selected_index = results.indexOf(score);
    if (_mod9116.AutocompleterResultTypes.GUILD === type3) {
      obj6.selected_guild_id = record.id;
    } else {
      if (_mod9116.AutocompleterResultTypes.TEXT_CHANNEL !== type3) {
        if (_mod9116.AutocompleterResultTypes.VOICE_CHANNEL !== type3) {
          if (_mod9116.AutocompleterResultTypes.GROUP_DM === type3) {
            obj6.selected_channel_id = record.id;
          } else if (_mod9116.AutocompleterResultTypes.USER === type3) {
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
  }
  const tmp7Result = AnalyticsUtilsDefault;
  tmp7Result.track(QUICKSWITCHER_RESULT_SELECTED, obj6);
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
    obj = AnalyticsUtilsDefault;
    obj.track(constants.QUICKSWITCHER_OPENED, obj2);
  }
  const dispatch = DispatcherDefault.dispatch;
  const obj3 = { type: "QUICKSWITCHER_SHOW" };
  DispatcherDefault;
  const merged = Object.assign(getQuickSwitcherOptions(str2));
  dispatch(obj3);
}
function switchToResult(type) {
  let QUICK_SWITCHER;
  let QUICK_SWITCHER2;
  let items;
  let items1;
  let obj11;
  let obj6;
  let obj8;
  let record;
  let type2;
  function openInviteFromQuickSwitcher() {
    return obj(...arguments);
  }
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  obj = DispatcherDefault;
  obj.dispatch({ type: "QUICKSWITCHER_HIDE" });
  trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
  let flag2 = false;
  if (ChannelTabsStore.isEnabled()) {
    type = type.type;
    if (_mod9116.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
      if (_mod9116.AutocompleterResultTypes.GROUP_DM !== type) {
        let tabForRoute;
        if (_mod9116.AutocompleterResultTypes.DM !== type) {
          if (_mod9116.AutocompleterResultTypes.USER === type) {
            const dMFromUserId = ChannelStore.getDMFromUserId(type.record.id);
            let tabForChannel = null;
            if (null != dMFromUserId) {
              tabForChannel = obj2.getTabForChannel(dMFromUserId);
            }
            tabForRoute = tabForChannel;
          } else {
            tabForRoute = null;
            if (_mod9116.AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
              tabForRoute = null;
              if (!set.has(type.record.type)) {
                tabForRoute = obj2.getTabForRoute(type.record.path);
              }
            }
          }
        }
        let flag3 = null != tabForRoute;
        if (flag3) {
          const tmp5Result = ChannelTabsActionCreators;
          const channelTab = tmp5Result.selectChannelTab(tabForRoute.id);
          flag3 = true;
        }
        flag2 = flag3;
      }
    }
    tabForRoute = obj2.getTabForChannel(type.record.id);
  }
  if (flag2) {
    const obj3 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
    const tmpResult = DispatcherDefault;
    tmpResult.dispatch(obj3);
  } else {
    ({ type: type2, record } = type);
    const obj4 = { page: constants2.QUICK_SWITCHER };
    if (_mod9116.AutocompleterResultTypes.GUILD === type2) {
      const tmp13Result = transitionToGuild;
      tmp13Result.transitionToGuild(record.id, { navigationReplace: true });
    } else if (_mod9116.AutocompleterResultTypes.TEXT_CHANNEL === type2) {
      const channel = ChannelStore.getChannel(record.id);
      if (null != channel) {
        const obj5 = { state: obj6, navigationReplace: true };
        obj6 = { analyticsSource: obj4 };
        const tmp13Result7 = transitionToChannel;
        tmp13Result7.transitionToChannel(channel.id, obj5);
      }
    } else if (_mod9116.AutocompleterResultTypes.VOICE_CHANNEL === type2) {
      const channel1 = ChannelStore.getChannel(record.id);
      if (null != channel1) {
        if (flag) {
          const tmpResult8 = ChannelRTCActionCreatorsDefault;
          tmpResult8.updateChatOpen(record.id, true);
        } else {
          const tmpResult9 = SelectedChannelActionCreatorsDefault;
          const voiceChannel = tmpResult9.selectVoiceChannel(record.id);
        }
        let tabForChannel1 = null;
        if (ChannelTabsStore.isEnabled()) {
          tabForChannel1 = obj2.getTabForChannel(record.id);
        }
        if (null != tabForChannel1) {
          const tmp13Result8 = ChannelTabsActionCreators;
          const channelTab1 = tmp13Result8.selectChannelTab(tabForChannel1.id, !flag);
        } else {
          const obj7 = { state: obj8, navigationReplace: true };
          obj8 = { analyticsSource: obj4 };
          const tmp13Result9 = transitionToChannel;
          tmp13Result9.transitionToChannel(channel1.id, obj7);
        }
      }
    } else if (_mod9116.AutocompleterResultTypes.USER === type2) {
      const obj9 = { recipientIds: items, location: "Quickswitcher" };
      items = [record.id];
      const tmpResult10 = ChannelActionCreatorsDefault;
      tmpResult10.openPrivateChannel(obj9);
      const tmpResult11 = DimensionActionCreatorsDefault;
      tmpResult11.channelListScrollTo(map1, ChannelStore.getDMFromUserId(record.id));
    } else if (_mod9116.AutocompleterResultTypes.GROUP_DM === type2) {
      const tmp13Result10 = transitionToChannel;
      tmp13Result10.transitionToChannel(record.id, { navigationReplace: true });
      const tmpResult12 = DimensionActionCreatorsDefault;
      tmpResult12.channelListScrollTo(map1, record.id);
    } else if (_mod9116.AutocompleterResultTypes.APPLICATION === type2) {
      const activeLibraryApplication = LibraryApplicationStore.getActiveLibraryApplication(record.id);
      const id = record.id;
      ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = authStore4);
      const resolved = Promise.resolve();
    } else if (_mod9116.AutocompleterResultTypes.GAME_PROFILE === type2) {
      const obj10 = { gameId: record.id, gameProfileModalChecks: obj11, source: GameProfileAnalyticUtils.GameProfileSources.QuickSwitcher };
      obj11 = { shouldOpenGameProfile: true, gameId: record.id };
      const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
      GameProfileActionCreatorsDefault;
      openGameProfileModal(obj10);
    } else if (_mod9116.AutocompleterResultTypes.LINK === type2) {
      if (null != record.inviteCode) {
        openInviteFromQuickSwitcher(record.inviteCode);
      } else {
        safeTransitionToDefault(record.path, { navigationReplace: true });
      }
    } else if (_mod9116.AutocompleterResultTypes.IN_APP_NAVIGATION === type2) {
      if (type.record.type !== InAppNavigationType.SETTINGS) {
        if (type.record.type === InAppNavigationType.PLAYGROUND) {
          PlaygroundAccessExperiment;
        } else if (type.record.type === InAppNavigationType.SHOP_ORBS_TAB) {
          const obj12 = { tab: CollectibleShopTab.ORBS, analyticsLocations: items1, analyticsSource: AnalyticsLocationDefault.QUICK_SWITCHER };
          const openCollectiblesShop = CollectiblesActionCreators.openCollectiblesShop;
          items1 = [];
          CollectiblesActionCreators;
          items1[0] = AnalyticsLocationDefault.QUICK_SWITCHER;
          openCollectiblesShop(obj12);
        } else {
          safeTransitionToDefault(record.path, { navigationReplace: true });
        }
      }
    }
    const obj13 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
    const tmpResult14 = DispatcherDefault;
    tmpResult14.dispatch(obj13);
  }
}
let obj = function _openInviteFromQuickSwitcher() {
  obj = _asyncToGenerator(async (code) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj4;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let invite;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              closure_1 = tmp;
              invite = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj4.resolveInvite(code, "Quick Switcher"), done: false };
              obj4 = InstantInviteActionCreatorsDefault;
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            invite = value.invite;
            if (null != invite) {
              const obj7 = { type: "INVITE_MODAL_OPEN", invite, code, context: closure_130_14.APP };
              obj = closure_130_1(closure_130_2[17]);
              obj.dispatch(obj7);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          c4 = 3;
          throw tmp19;
        }
      }
    })();
  });
  return obj(...arguments);
};
const InAppNavigationType = InAppNavigationRecord.InAppNavigationType;
const ChannelRecordBase = ChannelRecord.ChannelRecordBase;
({ Layers, ME: map1, AppContext: closure_14, AnalyticEvents: closure_15, AnalyticsLocations: closure_16, AnalyticsPages: closure_17 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const CollectibleShopTab = CollectiblesShopConstants.CollectibleShopTab;
obj = {};
obj[_mod9116.AutocompleterQuerySymbols.USER] = _mod9116.AutocompleterResultTypes.USER;
obj[_mod9116.AutocompleterQuerySymbols.TEXT_CHANNEL] = _mod9116.AutocompleterResultTypes.TEXT_CHANNEL;
obj[_mod9116.AutocompleterQuerySymbols.VOICE_CHANNEL] = _mod9116.AutocompleterResultTypes.VOICE_CHANNEL;
obj[_mod9116.AutocompleterQuerySymbols.GUILD] = _mod9116.AutocompleterResultTypes.GUILD;
obj[_mod9116.AutocompleterQuerySymbols.GAME_PROFILE] = _mod9116.AutocompleterResultTypes.GAME_PROFILE;
let closure_20 = freeze(obj);
const USER = _mod9116.AutocompleterQuerySymbols.USER;
const TEXT_CHANNEL = _mod9116.AutocompleterQuerySymbols.TEXT_CHANNEL;
const VOICE_CHANNEL = _mod9116.AutocompleterQuerySymbols.VOICE_CHANNEL;
const regExp = new RegExp("^" + USER + "|" + TEXT_CHANNEL + "|" + VOICE_CHANNEL + "|\\" + _mod9116.AutocompleterQuerySymbols.GUILD + "|\\" + _mod9116.AutocompleterQuerySymbols.GAME_PROFILE);
let items = [, , ];
({ SETTINGS: arr[0], PLAYGROUND: arr[1], SHOP_ORBS_TAB: arr[2] } = InAppNavigationType);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/quickswitcher/QuickSwitcherActionCreators.tsx");

export { getQuickSwitcherOptions };
export function trackOpen(source) {
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
    obj = AnalyticsUtilsDefault;
    obj.track(constants.QUICKSWITCHER_OPENED, obj2);
  }
}
export { trackClose };
export { show };
export function hide() {
  trackClose(constants.QUICKSWITCHER_CLOSED);
  obj = DispatcherDefault;
  obj.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
export function toggle() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  if (QuickSwitcherStore.isOpen()) {
    trackClose(constants.QUICKSWITCHER_CLOSED);
    obj = DispatcherDefault;
    obj.dispatch({ type: "QUICKSWITCHER_HIDE" });
  } else {
    show(str);
  }
}
export function search(arg0) {
  const dispatch = DispatcherDefault.dispatch;
  obj = { type: "QUICKSWITCHER_SEARCH" };
  DispatcherDefault;
  const merged = Object.assign(getQuickSwitcherOptions(arg0));
  dispatch(obj);
}
export function selectResult(selectedIndex) {
  obj = DispatcherDefault;
  const obj2 = { type: "QUICKSWITCHER_SELECT", selectedIndex };
  obj.dispatch(obj2);
}
export { switchToResult };
export function switchToResultInNewTab(type) {
  _require = type;
  type = type.type;
  const tmp = _require;
  if (require("module_9116").AutocompleterResultTypes.TEXT_CHANNEL !== type) {
    if (tmp(9116).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
      if (tmp(9116).AutocompleterResultTypes.GROUP_DM !== type) {
        if (tmp(9116).AutocompleterResultTypes.DM !== type) {
          if (tmp(9116).AutocompleterResultTypes.USER === type) {
            obj = DispatcherDefault;
            obj.dispatch({ type: "QUICKSWITCHER_HIDE" });
            trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
            let obj2 = DispatcherDefault;
            let obj3 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
            obj2.dispatch(obj3);
            const promise = (async (arg0, value) => {
              let closure_0;
              let closure_1;
              let items;
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
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
                  let tmp4;
                  c3 = 2;
                  if (0 === c2) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      tmp4 = undefined;
                      const obj5 = { recipientIds: items, location: "Quickswitcher", navigateToChannel: false };
                      items = [tmp4.record.id];
                      const obj3 = tmp(c2[22]);
                      c2 = 1;
                      c3 = 1;
                      const obj6 = { value: obj3.openPrivateChannel(obj5), done: false };
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
                    tmp4 = value;
                    obj = tmp4(c2[16]);
                    obj.openChannelTabActive(tmp4, null);
                    c3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp15) {
                  c3 = 3;
                  throw tmp15;
                }
              }
            })();
            promise.catch(() => {

            });
          } else {
            const tmp3 = switchToResult;
            let tmp4 = switchToResult(type);
          }
        }
      }
    }
  }
  const channel = ChannelStore.getChannel(type.record.id);
  if (null == channel) {
    switchToResult(type);
  } else {
    const id = channel.id;
    let guildId = channel.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    let obj5 = DispatcherDefault;
    obj5.dispatch({ type: "QUICKSWITCHER_HIDE" });
    trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
    let obj6 = DispatcherDefault;
    let obj4 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
    obj6.dispatch(obj4);
    const tmpResult = tmp(13350);
    tmpResult.openChannelTabActive(id, guildId);
  }
}

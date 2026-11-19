// Module ID: 9960
// Function ID: 9961
// Name: QuickSwitcherActionCreators
// Dependencies: [5, 32, 6436, 9961, 4645, 4641, 2163, 4695, 4825, 9939, 1072, 4648, 1074, 9940, 1256, 7141, 572, 9964, 5525, 6714, 5528, 6408, 7618, 9965, 9649, 9654, 6748, 9966, 7955, 7420, 9967, 9963, 6715, 7143, 2]
// Exports: hide, search, selectResult, switchToResultInNewTab, toggle, trackOpen

// Module 9960 (QuickSwitcherActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import ChannelRecord from "ChannelRecord" /* 4645 */;
import ChannelConstants from "ChannelConstants" /* 4648 */;
import transitionToChannel from "transitionToChannel" /* 5525 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5528 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6408 */;
import InAppNavigationRecord from "InAppNavigationRecord" /* 6436 */;
import transitionToGuild from "transitionToGuild" /* 6714 */;
import safeTransitionToDefault from "safeTransitionTo" /* 6748 */;
import ValidationUtilsDefault from "ValidationUtils" /* 7141 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7143 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7420 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7618 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7955 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9649 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9654 */;
import _mod9940 from "module_9940" /* 9940 */;
import ChannelTabRoutes from "ChannelTabRoutes" /* 9963 */;
import ChannelTabsActionCreators from "ChannelTabsActionCreators" /* 9964 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 9965 */;
import PlaygroundAccessExperiment from "PlaygroundAccessExperiment" /* 9966 */;
import showChannelTabLimitToast from "showChannelTabLimitToast" /* 9967 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelTabsStore from "ChannelTabsStore" /* 9961 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 2163 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4695 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4825 */;
import QuickSwitcherStore from "QuickSwitcherStore" /* 9939 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2;

let Layers;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
function getQuickSwitcherOptions(str) {
  const charAtResult = str.charAt(0);
  if (charAtResult === _mod9940.AutocompleterQuerySymbols.USER) {
    let items1;
    const charAtResult1 = str.charAt(1);
    if (charAtResult1 === _mod9940.AutocompleterQuerySymbols.USER) {
      const items = [str.slice(2), _mod9940.AutocompleterResultTypes.USER_GLOBAL];
      items1 = items;
    }
    obj = { query: null, queryMode: null };
    [obj.query, obj.queryMode] = items1;
    _slicedToArray(items1, 2);
    return obj;
  }
  let tmp5 = closure_21[charAtResult];
  if (tmp5 == null) {
    tmp5 = null;
  }
  items1 = [str.replace(regExp, ""), tmp5];
}
function trackClose(QUICKSWITCHER_RESULT_SELECTED, score) {
  let query;
  let queryMode;
  let record;
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
  const obj2 = _mod9940;
  const tmp6 = results[obj2.findNextSelectedResult(obj2, _mod9940.FindResultDirections.DOWN, -1, results)];
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
  const obj6 = { current_channel_id: tmp13, current_channel_static_route: tmp14, current_guild_id: guildId, query_mode: queryMode, query_length: query.length, max_query_length: maxQueryLength, is_email_like: isEmailResult, is_phone_like: isPhoneNumberResult, is_username_like: isUserTagLikeResult, query: tmp15, top_result_type: tmp16, top_result_score: score1, num_results_total: QuickSwitcherStore.getResultTotals(), num_results_users: QuickSwitcherStore.getResultTotals(_mod9940.AutocompleterResultTypes.USER), num_results_text_channels: QuickSwitcherStore.getResultTotals(_mod9940.AutocompleterResultTypes.TEXT_CHANNEL), num_results_voice_channels: QuickSwitcherStore.getResultTotals(_mod9940.AutocompleterResultTypes.VOICE_CHANNEL), num_results_guilds: QuickSwitcherStore.getResultTotals(_mod9940.AutocompleterResultTypes.GUILD), num_results_group_dms: QuickSwitcherStore.getResultTotals(_mod9940.AutocompleterResultTypes.GROUP_DM) };
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
    if (tmp6.type === _mod9940.AutocompleterResultTypes.IN_APP_NAVIGATION) {
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
      if (score.type === _mod9940.AutocompleterResultTypes.IN_APP_NAVIGATION) {
        type2 = `${score.type}_${score.record.type}`;
      } else {
        type2 = score.type;
      }
      tmp21 = type2;
    }
    obj6.selected_type = tmp21;
    obj6.selected_score = score;
    obj6.selected_index = results.indexOf(score);
    if (_mod9940.AutocompleterResultTypes.GUILD === type3) {
      obj6.selected_guild_id = record.id;
    } else {
      if (_mod9940.AutocompleterResultTypes.TEXT_CHANNEL !== type3) {
        if (_mod9940.AutocompleterResultTypes.VOICE_CHANNEL !== type3) {
          if (_mod9940.AutocompleterResultTypes.GROUP_DM === type3) {
            obj6.selected_channel_id = record.id;
          } else if (_mod9940.AutocompleterResultTypes.USER === type3) {
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
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const isTabPicker = obj.isTabPicker;
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
    const obj3 = { source: str, current_guild_id: guildId, current_channel_id: channelId, current_channel_type: tmp6 };
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(constants.QUICKSWITCHER_OPENED, obj3);
  }
  const obj4 = { type: "QUICKSWITCHER_SHOW", isTabPicker };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  const merged = Object.assign(getQuickSwitcherOptions(str2));
  dispatch(obj4);
}
function switchToResult(record) {
  let QUICK_SWITCHER;
  let QUICK_SWITCHER2;
  let items;
  let items1;
  let obj10;
  let obj4;
  let obj6;
  let type;
  function openInviteFromQuickSwitcher() {
    return obj(...arguments);
  }
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  obj = DispatcherDefault;
  obj.dispatch({ type: "QUICKSWITCHER_HIDE" });
  trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, record);
  ({ type, record } = record);
  const obj2 = { page: constants2.QUICK_SWITCHER };
  if (_mod9940.AutocompleterResultTypes.GUILD === type) {
    const tmp5Result = transitionToGuild;
    tmp5Result.transitionToGuild(record.id, { navigationReplace: true });
  } else if (_mod9940.AutocompleterResultTypes.TEXT_CHANNEL === type) {
    const channel = ChannelStore.getChannel(record.id);
    if (null != channel) {
      const id4 = channel.id;
      const obj3 = { state: obj4, navigationReplace: true };
      obj4 = { analyticsSource: obj2 };
      const tmp5Result11 = ChannelTabsActionCreators;
      if (!tmp5Result11.switchToOpenChannelTab(id4, "quick_switcher", obj3)) {
        const tmp5Result12 = transitionToChannel;
        tmp5Result12.transitionToChannel(id4, obj3);
      }
    }
  } else if (_mod9940.AutocompleterResultTypes.VOICE_CHANNEL === type) {
    const channel1 = ChannelStore.getChannel(record.id);
    if (null != channel1) {
      if (flag) {
        const tmpResult = ChannelRTCActionCreatorsDefault;
        tmpResult.updateChatOpen(record.id, true);
      } else {
        const tmpResult7 = SelectedChannelActionCreatorsDefault;
        const voiceChannel = tmpResult7.selectVoiceChannel(record.id);
        const tmp5Result13 = ChannelTabsActionCreators;
        tmp5Result13.showCallViewOnJoin(record.id);
      }
      const id3 = channel1.id;
      const obj5 = { state: obj6, navigationReplace: true };
      obj6 = { analyticsSource: obj2 };
      const tmp5Result14 = ChannelTabsActionCreators;
      if (!tmp5Result14.switchToOpenChannelTab(id3, "quick_switcher", obj5)) {
        const tmp5Result15 = transitionToChannel;
        tmp5Result15.transitionToChannel(id3, obj5);
      }
    }
  } else if (_mod9940.AutocompleterResultTypes.USER === type) {
    const dMFromUserId = ChannelStore.getDMFromUserId(record.id);
    const obj11 = ChannelStore;
    if (null == dMFromUserId) {
      const obj7 = { recipientIds: items, location: "Quickswitcher" };
      items = [record.id];
      const tmpResult8 = ChannelActionCreatorsDefault;
      tmpResult8.openPrivateChannel(obj7);
      const tmpResult9 = DimensionActionCreatorsDefault;
      tmpResult9.channelListScrollTo(map1, obj11.getDMFromUserId(record.id));
    } else {
      ChannelTabsActionCreators;
    }
  } else if (_mod9940.AutocompleterResultTypes.GROUP_DM === type) {
    const id2 = record.id;
    const obj8 = { navigationReplace: true };
    const tmp5Result17 = ChannelTabsActionCreators;
    if (!tmp5Result17.switchToOpenChannelTab(id2, "quick_switcher", obj8)) {
      const tmp5Result18 = transitionToChannel;
      tmp5Result18.transitionToChannel(id2, obj8);
    }
    const tmpResult10 = DimensionActionCreatorsDefault;
    tmpResult10.channelListScrollTo(map1, record.id);
  } else if (_mod9940.AutocompleterResultTypes.APPLICATION === type) {
    const activeLibraryApplication = LibraryApplicationStore.getActiveLibraryApplication(record.id);
    const id = record.id;
    ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = authStore3);
    const resolved = Promise.resolve();
  } else if (_mod9940.AutocompleterResultTypes.GAME_PROFILE === type) {
    const obj9 = { gameId: record.id, gameProfileModalChecks: obj10, source: GameProfileAnalyticUtils.GameProfileSources.QuickSwitcher };
    obj10 = { shouldOpenGameProfile: true, gameId: record.id };
    const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
    GameProfileActionCreatorsDefault;
    openGameProfileModal(obj9);
  } else if (_mod9940.AutocompleterResultTypes.LINK === type) {
    if (null != record.inviteCode) {
      openInviteFromQuickSwitcher(record.inviteCode);
    } else {
      safeTransitionToDefault(record.path, { navigationReplace: true });
    }
  } else if (_mod9940.AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
    if (record.record.type !== InAppNavigationType.SETTINGS) {
      if (record.record.type === InAppNavigationType.PLAYGROUND) {
        PlaygroundAccessExperiment;
      } else if (record.record.type === InAppNavigationType.SHOP_ORBS_TAB) {
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
  const obj13 = { type: "QUICKSWITCHER_SWITCH_TO", result: record };
  const tmpResult12 = DispatcherDefault;
  tmpResult12.dispatch(obj13);
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
          return { value: "HermesInternal", done: "+60" };
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
              obj = closure_130_1(closure_130_2[16]);
              obj.dispatch(obj7);
            }
            c4 = 3;
            return { value: "HermesInternal", done: "+60" };
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
let _asyncToGenerator = _asyncToGenerator_mod;
const InAppNavigationType = InAppNavigationRecord.InAppNavigationType;
const ChannelRecordBase = ChannelRecord.ChannelRecordBase;
({ Layers, ME: map1, AppContext: closure_14, AnalyticEvents: closure_15, AnalyticsLocations: closure_16, AnalyticsPages: closure_17, Routes: closure_18 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const CollectibleShopTab = CollectiblesShopConstants.CollectibleShopTab;
obj = {};
obj[_mod9940.AutocompleterQuerySymbols.USER] = _mod9940.AutocompleterResultTypes.USER;
obj[_mod9940.AutocompleterQuerySymbols.TEXT_CHANNEL] = _mod9940.AutocompleterResultTypes.TEXT_CHANNEL;
obj[_mod9940.AutocompleterQuerySymbols.VOICE_CHANNEL] = _mod9940.AutocompleterResultTypes.VOICE_CHANNEL;
obj[_mod9940.AutocompleterQuerySymbols.GUILD] = _mod9940.AutocompleterResultTypes.GUILD;
obj[_mod9940.AutocompleterQuerySymbols.GAME_PROFILE] = _mod9940.AutocompleterResultTypes.GAME_PROFILE;
let closure_21 = freeze(obj);
const USER = _mod9940.AutocompleterQuerySymbols.USER;
const TEXT_CHANNEL = _mod9940.AutocompleterQuerySymbols.TEXT_CHANNEL;
const VOICE_CHANNEL = _mod9940.AutocompleterQuerySymbols.VOICE_CHANNEL;
const regExp = new RegExp("^" + USER + "|" + TEXT_CHANNEL + "|" + VOICE_CHANNEL + "|\\" + _mod9940.AutocompleterQuerySymbols.GUILD + "|\\" + _mod9940.AutocompleterQuerySymbols.GAME_PROFILE);
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
  obj = QuickSwitcherStore;
  if (QuickSwitcherStore.isTabPicker()) {
    trackClose(constants.QUICKSWITCHER_CLOSED);
    const obj3 = DispatcherDefault;
    obj3.dispatch({ type: "QUICKSWITCHER_HIDE" });
    show(str);
  } else if (obj.isOpen()) {
    trackClose(constants.QUICKSWITCHER_CLOSED);
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "QUICKSWITCHER_HIDE" });
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
export const SPECIAL_IN_APP_NAVIGATION_TYPES = set;
export { switchToResult };
export function switchToResultInNewTab(type) {
  let closure_3;
  let result;
  _require = type;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let str = obj.source;
  if (str === undefined) {
    str = "quick_switcher";
  }
  let prop = obj.newTabPickerSelection;
  if (prop === undefined) {
    prop = null;
  }
  _asyncToGenerator = undefined;
  let record;
  let path;
  type = type.type;
  const tmp3 = _require;
  let tmp4 = prop;
  if (require("module_9940").AutocompleterResultTypes.TEXT_CHANNEL !== type) {
    if (tmp3(tmp4[13]).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
      if (tmp3(tmp4[13]).AutocompleterResultTypes.GROUP_DM !== type) {
        if (tmp3(tmp4[13]).AutocompleterResultTypes.DM !== type) {
          if (tmp3(tmp4[13]).AutocompleterResultTypes.USER === type) {
            let obj3 = str(tmp4[16]);
            obj3.dispatch({ type: "QUICKSWITCHER_HIDE" });
            trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
            let obj4 = str(tmp4[16]);
            let obj2 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
            obj4.dispatch(obj2);
            const tmp3Result = tmp3(tmp4[30]);
            if (tmp3Result.ensureRoomForChannelTab()) {
              _asyncToGenerator = ChannelTabsStore.getActiveTabId();
              const promise = (async (arg0, value) => {
                let c2;
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
                    return { value: "HermesInternal", done: "+60" };
                  }
                } else {
                  try {
                    let tmp4;
                    c3 = 2;
                    if (0 === prop) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        tmp4 = undefined;
                        const obj5 = { recipientIds: items, location: "Quickswitcher", navigateToChannel: false };
                        items = [tmp4.record.id];
                        const obj4 = tmp(prop[22]);
                        prop = 1;
                        c3 = 1;
                        const obj6 = { value: obj4.openPrivateChannel(obj5), done: false };
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
                      obj = tmp4(prop[17]);
                      const obj8 = { sourceTabId: closure_129_3, newTabPickerSelection: closure_129_2 };
                      obj.openChannelTabActive(tmp4, null, closure_129_1, obj8);
                      c3 = 3;
                      return { value: "HermesInternal", done: "+60" };
                    }
                  } catch (tmp20) {
                    c3 = 3;
                    throw tmp20;
                  }
                }
              })();
              promise.catch(() => {

              });
            }
          } else {
            function navigateInNewTab(path, fn) {
              obj = ChannelTabsStore;
              if (ChannelTabsStore.isEnabled()) {
                const obj2 = DispatcherDefault;
                obj2.dispatch({ type: "QUICKSWITCHER_HIDE" });
                trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, result);
                const obj4 = { type: "QUICKSWITCHER_SWITCH_TO", result };
                const obj3 = DispatcherDefault;
                obj3.dispatch(obj4);
                const obj5 = showChannelTabLimitToast;
                if (obj5.ensureRoomForChannelTab()) {
                  if (0 !== obj.getTabs().length) {
                    const tmp12Result = ChannelTabRoutes;
                    let tabLocationForPath = tmp12Result.getTabLocationForPath(path);
                    if (tabLocationForPath == null) {
                      const tmp12Result3 = ChannelTabRoutes;
                      tabLocationForPath = tmp12Result3.getFriendsTabLocation();
                    }
                    const tmp12Result4 = ChannelTabsActionCreators;
                    if (tmp12Result4.openTabWithoutHistory(tabLocationForPath, str, prop)) {
                      fn();
                    }
                  } else {
                    fn();
                  }
                }
              } else {
                switchToResult(result);
              }
            }
            if (tmp3(tmp4[13]).AutocompleterResultTypes.GUILD === type) {
              const CHANNEL = constants3.CHANNEL;
              let items = [type.record.id];
              const tmp3Result4 = tmp3(tmp4[32]);
              HermesBuiltin.arraySpread(items, tmp3Result4.getGuildTransitionRoute(type.record.id), 1);
              const tmp20 = constants3;
              navigateInNewTab(HermesBuiltin.apply(CHANNEL, items, constants3), () => {
                obj = transitionToGuild;
                return obj.transitionToGuild(result.record.id, { navigationReplace: true });
              });
            } else if (tmp3(tmp4[13]).AutocompleterResultTypes.LINK === type) {
              record = type.record;
              if (null != record.inviteCode) {
                switchToResult(type);
              } else {
                navigateInNewTab(record.path, () => safeTransitionToDefault(record.path, { navigationReplace: true }));
              }
            } else if (tmp3(tmp4[13]).AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
              if (set.has(type.record.type)) {
                switchToResult(type);
              } else {
                path = type.record.path;
                navigateInNewTab(path, () => safeTransitionToDefault(path, { navigationReplace: true }));
              }
            } else {
              switchToResult(type);
            }
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
    let obj8 = str(tmp4[16]);
    obj8.dispatch({ type: "QUICKSWITCHER_HIDE" });
    trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
    let obj5 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
    const obj9 = str(tmp4[16]);
    obj9.dispatch(obj5);
    const tmp3Result5 = tmp3(tmp4[30]);
    if (tmp3Result5.ensureRoomForChannelTab()) {
      let obj6 = { newTabPickerSelection: prop };
      const tmp3Result6 = tmp3(tmp4[17]);
      tmp3Result6.openChannelTabActive(id, guildId, str, obj6);
    }
  }
}

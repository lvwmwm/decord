// Module ID: 17216
// Function ID: 17217
// Name: ChannelDetailsNavigationBar
// Dependencies: [19, 17, 4708, 4709, 2063, 5971, 9245, 9581, 1085, 9246, 21, 5090, 12095, 587, 558, 576, 4778, 504, 1502, 1126, 10326, 7866, 8106, 12014, 12074, 5930, 6732, 10264, 9648, 7083, 17217, 4787, 4810, 5091, 17090, 5094, 11361, 6207, 6189, 2]

// Module 17216 (ChannelDetailsNavigationBar)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useToken from "useToken" /* 4778 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import AssetRegistryDefault from "AssetRegistry" /* 6732 */;
import TrackingConstants from "TrackingConstants" /* 9246 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 9648 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10264 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11361 */;
import useSearchContext from "useSearchContext" /* 12014 */;
import tracking_TrackingDefault from "tracking/Tracking" /* 12074 */;
import SearchButton2 from "SearchButton" /* 12095 */;
import ChannelDetailsMoreButtonDefault from "ChannelDetailsMoreButton" /* 17217 */;
import react_mod from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4708 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4709 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 9245 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9581 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation, obj1;

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function getItemKey(arg0) {
  return arg0;
}
let react = react_mod;
let View = react_native.View;
({ setIsChannelDetailsSearchActive: c9, useIsChannelDetailsSearchActive: c10 } = ChannelDetailsStore);
({ ChannelDetailsButtonTypes: unpackModuleId, ChannelDetailsNavigatorScreens: closure_12 } = ChannelDetailsConstants);
const ChannelSettingsSections = Constants.ChannelSettingsSections;
let closure_14 = TrackingConstants.SearchEntrypointAnalyticsLocations;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, navigationHeader: obj3, buttonsContainer: obj4, searchHeader: { position: "absolute" } };
obj2 = { position: "relative", zIndex: 1, height: SearchButton2.SEARCH_BAR_HEIGHT, marginTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, position: "absolute", height: SearchButton2.SEARCH_BAR_HEIGHT };
obj4 = { flex: 1, flexDirection: "row", gap: nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
let closure_17 = createStyles(obj);
const constants3 = { BUTTONS: "buttons", SEARCH: "search" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelDetailsIconButtonStyles() {
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  if (cResult[0] === token) {
    let tmp4;
    if (cResult[1] === token1) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj4 = { size: token, variant: token1 };
  cResult[0] = token;
  cResult[1] = token1;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : (function useChannelDetailsIconButtonStyles() {
  let obj2;
  let obj3;
  const obj = { size: obj2.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE), variant: obj3.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT) };
  obj2 = useToken;
  obj3 = useToken;
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function MuteButton(channelId) {
  let first;
  let tmp8;
  let variant;
  let tmp = channelId;
  let obj = channelId(576);
  const cResult = obj.c(12);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, JoinedThreadsStore, UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      const channel = ChannelStore.getChannel(channelId);
      let tmp = null != channel;
      if (tmp) {
        let isMutedResult;
        if (channel.isThread()) {
          isMutedResult = JoinedThreadsStore.isMuted(channel.id);
        } else {
          isMutedResult = UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
        }
        tmp = isMutedResult;
      }
      return tmp;
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  const tmpResult2 = tmp(1502);
  navigation = tmpResult2.useNavigation();
  if (cResult[3] === channelId) {
    let tmp11;
    let tmp14;
    if (cResult[4] === navigation) {
      tmp11 = cResult[5];
    }
    ({ size, variant } = closure_19());
    const _Symbol = Symbol;
    closure_19();
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.w4m945);
      cResult[6] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    const tmp16 = navigation(stateFromStores ? 10326 : 7866);
    if (cResult[7] === tmp11) {
      if (cResult[8] === size) {
        if (cResult[9] === tmp16) {
          let tmp17;
          if (cResult[10] === variant) {
            tmp17 = cResult[11];
          }
          return tmp17;
        }
      }
    }
    const obj2 = { accessibilityLabel: tmp14, onPress: tmp11, variant, size, icon: tmp16 };
    const tmp20 = closure_15(tmp(8106).IconButton, obj2, constants.MUTE);
    cResult[7] = tmp11;
    cResult[8] = size;
    cResult[9] = tmp16;
    cResult[10] = variant;
    cResult[11] = tmp20;
    tmp17 = tmp20;
  }
  const fn2 = function _() {
    const obj = { screen: constants.MUTE, channelId, source: "channel-details-navigation-bar" };
    navigation.navigate("sidebar", obj);
  };
  cResult[3] = channelId;
  cResult[4] = navigation;
  cResult[5] = fn2;
  tmp11 = fn2;
}) : (function MuteButton(channelId) {
  let intl;
  let variant;
  channelId = channelId.channelId;
  let tmp = dependencyMap;
  let obj = channelId(504);
  const items = [ChannelStore, JoinedThreadsStore, UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let tmp = null != channel;
    if (tmp) {
      let isMutedResult;
      if (channel.isThread()) {
        isMutedResult = JoinedThreadsStore.isMuted(channel.id);
      } else {
        isMutedResult = UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
      }
      tmp = isMutedResult;
    }
    return tmp;
  });
  const obj2 = channelId(1502);
  navigation = obj2.useNavigation();
  const items1 = [channelId, navigation];
  const callback = react.useCallback(() => {
    const obj = { screen: constants.MUTE, channelId, source: "channel-details-navigation-bar" };
    navigation.navigate("sidebar", obj);
  }, items1);
  ({ size, variant } = closure_19());
  const obj3 = { accessibilityLabel: intl.string(channelId(1126).t.w4m945), onPress: callback, variant, size, icon: navigation(stateFromStores ? 10326 : 7866) };
  closure_19();
  const IconButton = channelId(8106).IconButton;
  intl = channelId(1126).intl;
  return closure_15(IconButton, obj3, constants.MUTE);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchButton(channelId) {
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp7;
  let variant;
  let tmp = channelId;
  let obj = channelId(576);
  const cResult = obj.c(11);
  channelId = channelId.channelId;
  if (cResult[0] !== channelId) {
    const fn = function t() {
      React4(channelId, true, "action");
      const channel = ChannelStore.getChannel(channelId);
      const tmp = channelId;
      if (null != channel) {
        const guildId = channel.getGuildId();
        const isThreadResult = channel.isThread();
        const obj4 = useSearchContext;
        const channelDetailsSearchContext = obj4.getChannelDetailsSearchContext(tmp, guildId, isThreadResult);
        const obj = { searchContext: channelDetailsSearchContext, searchLocation: channel.isPrivate() ? constants.INDIVIDUAL_DM : constants.CHANNEL_DETAILS_HEADER };
        const obj2 = tracking_TrackingDefault;
        obj2.trackSearchOpened(obj);
      }
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[2] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== channelId) {
    const fn2 = function u() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[3] = channelId;
    cResult[4] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[4];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp7);
  const tmpResult2 = tmp(5930);
  const shouldHideChannelContent = tmpResult2.useShouldHideChannelContent(stateFromStores);
  ({ size, variant } = closure_19());
  closure_19();
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["5h0QOP"]);
    cResult[5] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === shouldHideChannelContent) {
    if (cResult[7] === tmp4) {
      if (cResult[8] === size) {
        let tmp13;
        if (cResult[9] === variant) {
          tmp13 = cResult[10];
        }
        return tmp13;
      }
    }
  }
  let obj2 = { accessibilityLabel: tmp11, onPress: tmp4, variant, size, icon: AssetRegistryDefault, disabled: shouldHideChannelContent };
  const IconButton = tmp(8106).IconButton;
  const tmp14 = closure_15(IconButton, obj2, constants.SEARCH);
  cResult[6] = shouldHideChannelContent;
  cResult[7] = tmp4;
  cResult[8] = size;
  cResult[9] = variant;
  cResult[10] = tmp14;
  tmp13 = tmp14;
}) : (function SearchButton(channelId) {
  let intl;
  let variant;
  channelId = channelId.channelId;
  const items = [channelId];
  const callback = react.useCallback(() => {
    React4(channelId, true, "action");
    const channel = ChannelStore.getChannel(channelId);
    const tmp = channelId;
    if (null != channel) {
      const guildId = channel.getGuildId();
      const isThreadResult = channel.isThread();
      const obj4 = useSearchContext;
      const channelDetailsSearchContext = obj4.getChannelDetailsSearchContext(tmp, guildId, isThreadResult);
      const obj = { searchContext: channelDetailsSearchContext, searchLocation: channel.isPrivate() ? constants.INDIVIDUAL_DM : constants.CHANNEL_DETAILS_HEADER };
      const obj2 = tracking_TrackingDefault;
      obj2.trackSearchOpened(obj);
    }
  }, items);
  let obj = channelId(504);
  const items1 = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(5930);
  const shouldHideChannelContent = obj2.useShouldHideChannelContent(stateFromStores);
  ({ size, variant } = closure_19());
  const tmp4 = closure_19();
  const obj3 = { accessibilityLabel: intl.string(channelId(1126).t["5h0QOP"]), onPress: callback, variant, size, icon: AssetRegistryDefault, disabled: shouldHideChannelContent };
  const IconButton = channelId(8106).IconButton;
  intl = channelId(1126).intl;
  return closure_15(IconButton, obj3, constants.SEARCH);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsButton(channel) {
  let variant;
  const obj = channel(576);
  const cResult = obj.c(8);
  channel = channel.channel;
  let obj2 = channel(1502);
  navigation = obj2.useNavigation();
  if (cResult[0] === channel) {
    let tmp5;
    let tmp9;
    if (cResult[1] === navigation) {
      tmp5 = cResult[2];
    }
    ({ size, variant } = closure_19());
    const _Symbol = Symbol;
    const tmp7 = closure_19();
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(channel(1126).t["3D5yo/"]);
      cResult[3] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === tmp5) {
      if (cResult[5] === size) {
        let tmp11;
        if (cResult[6] === variant) {
          tmp11 = cResult[7];
        }
        return tmp11;
      }
    }
    let obj3 = { accessibilityLabel: tmp9, onPress: tmp5, accessibilityRole: "button", variant, size, icon: navigation(7083) };
    const IconButton = tmp(8106).IconButton;
    const tmp15 = closure_15(IconButton, obj3, constants.SETTINGS);
    cResult[4] = tmp5;
    cResult[5] = size;
    cResult[6] = variant;
    cResult[7] = tmp15;
    tmp11 = tmp15;
  }
  const fn = function t() {
    if (null != channel) {
      if (!channel.isDM()) {
        if (!channel.isMultiUserDM()) {
          const obj2 = ChannelSettingsActionCreatorsDefault;
          obj2.init(channel.id);
          const obj3 = { screen: ChannelSettingsSections.OVERVIEW, channelId: channel.id, source: "channel-details-navigation-bar" };
          navigation.navigate("sidebar", obj3);
        }
      }
      const obj4 = openChannelLongPressActionSheet;
      const result = obj4.openChannelLongPressActionSheet(obj.id);
    }
  };
  cResult[0] = channel;
  cResult[1] = navigation;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function SettingsButton(channel) {
  let intl;
  let variant;
  channel = channel.channel;
  const obj = channel(1502);
  navigation = obj.useNavigation();
  const items = [channel, navigation];
  const callback = react.useCallback(() => {
    if (null != channel) {
      if (!channel.isDM()) {
        if (!channel.isMultiUserDM()) {
          const obj2 = ChannelSettingsActionCreatorsDefault;
          obj2.init(channel.id);
          const obj3 = { screen: ChannelSettingsSections.OVERVIEW, channelId: channel.id, source: "channel-details-navigation-bar" };
          navigation.navigate("sidebar", obj3);
        }
      }
      const obj4 = openChannelLongPressActionSheet;
      const result = obj4.openChannelLongPressActionSheet(obj.id);
    }
  }, items);
  ({ size, variant } = closure_19());
  let obj2 = { accessibilityLabel: intl.string(channel(1126).t["3D5yo/"]), onPress: callback, accessibilityRole: "button", variant, size, icon: navigation(7083) };
  closure_19();
  const IconButton = channel(8106).IconButton;
  intl = channel(1126).intl;
  return closure_15(IconButton, obj2, constants.SETTINGS);
});
const __initData = { code: "function ChannelDetailsNavigationBarTsx1(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?\"auto\":\"none\",opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1)},\"animate-always\",function(finished){if(finished){runOnJS(cleanUp)();}}),width:width};}" };
let closure_24 = { code: "function ChannelDetailsNavigationBarTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}" };
const __initData2 = { code: "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
let closure_26 = { code: "function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchBar(cleanUp) {
  let channel;
  let closure_2;
  let width;
  let tmp = dependencyMap;
  let obj = width(576);
  const cResult = obj.c(10);
  ({ channel, width } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  const transitionState = cleanUp.transitionState;
  const tmp3 = closure_17();
  let tmp4 = transitionState !== width(4787).TransitionStates.YEETED;
  dependencyMap = tmp4;
  let obj2 = width(4810);
  let fn = function t() {
    let Easing;
    let fn;
    let num;
    let obj2;
    let withTiming;
    let str = "none";
    let tmp = closure_2;
    if (tmp) {
      str = "auto";
    }
    let obj = { pointerEvents: str, opacity: withTiming(num, obj2, "animate-always", fn), width };
    num = 0;
    withTiming = timing.withTiming;
    if (tmp) {
      num = 1;
    }
    obj2 = { duration: 200, easing: Easing.bezier(0.25, 0.1, 0.25, 1) };
    Easing = tmp2(4810).Easing;
    fn = function n(arg0) {
      const tmp = arg0;
      if (tmp) {
        const obj = width(closure_2[32]);
        obj.runOnJS(cleanUp)();
      }
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 1906721458806;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, cleanUp });
    return obj;
  };
  const obj3 = { isActive: tmp4, withTiming: width(5091).withTiming, Easing: width(4810).Easing, runOnJS: width(4810).runOnJS, cleanUp, width };
  fn.__closure = obj3;
  fn.__workletHash = 2346374481841;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    let tmp6;
    if (cResult[1] === tmp3.searchHeader) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === channel.guild_id) {
      if (cResult[4] === channel.id) {
        let tmp7;
        if (cResult[5] === cleanUp.ref) {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          let tmp11;
          if (cResult[8] === tmp7) {
            tmp11 = cResult[9];
          }
          return tmp11;
        }
        const obj5 = { style: tmp6, children: tmp7 };
        const tmp14 = closure_15(cleanUp(4810).View, obj5);
        cResult[7] = tmp6;
        cResult[8] = tmp7;
        cResult[9] = tmp14;
        tmp11 = tmp14;
      }
    }
    const obj8 = { ref: cleanUp.ref, channelId: null, guildId: null, showBackButton: true };
    ({ id: obj4.channelId, guild_id: obj4.guildId } = channel);
    const tmp10 = closure_15(cleanUp(17090), obj8);
    let num = 3;
    cResult[3] = channel.guild_id;
    cResult[4] = channel.id;
    cResult[5] = cleanUp.ref;
    cResult[6] = tmp10;
    tmp7 = tmp10;
  }
  const items = [tmp3.searchHeader, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.searchHeader;
  cResult[2] = items;
  tmp6 = items;
}) : (function SearchBar(cleanUp) {
  let channel;
  let closure_2;
  let items;
  let obj4;
  let ref;
  let transitionState;
  let width;
  ({ channel, width } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  ({ transitionState, ref } = cleanUp);
  let tmp = closure_17();
  const tmp2 = transitionState !== width(4787).TransitionStates.YEETED;
  dependencyMap = tmp2;
  let obj = width(4810);
  let fn = function l() {
    let Easing;
    let fn;
    let num;
    let obj2;
    let withTiming;
    let str = "none";
    let tmp = closure_2;
    if (tmp) {
      str = "auto";
    }
    let obj = { pointerEvents: str, opacity: withTiming(num, obj2, "animate-always", fn), width };
    num = 0;
    withTiming = timing.withTiming;
    if (tmp) {
      num = 1;
    }
    obj2 = { duration: 200, easing: Easing.bezier(0.25, 0.1, 0.25, 1) };
    Easing = tmp2(4810).Easing;
    fn = function n(arg0) {
      const tmp = arg0;
      if (tmp) {
        const obj = width(closure_2[32]);
        obj.runOnJS(cleanUp)();
      }
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 17272451769590;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, cleanUp });
    return obj;
  };
  let obj2 = { isActive: tmp2, withTiming: width(5091).withTiming, Easing: width(4810).Easing, runOnJS: width(4810).runOnJS, cleanUp, width };
  fn.__closure = obj2;
  fn.__workletHash = 14243423616139;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, children: closure_15(cleanUp(17090), obj4) };
  items = [tmp.searchHeader, animatedStyle];
  View = cleanUp(4810).View;
  obj4 = { ref, channelId: channel.id, guildId: channel.guild_id, showBackButton: true };
  return closure_15(View, obj3);
});
const __initData3 = { code: "function ChannelDetailsNavigationBarTsx5(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?\"auto\":\"none\",opacity:withTiming(isActive?1:0,timingFast,\"animate-always\",function(finished){if(finished){runOnJS(cleanUp)();}}),width:width};}" };
const __initData4 = { code: "function ChannelDetailsNavigationBarTsx6(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}" };
const __initData5 = { code: "function ChannelDetailsNavigationBarTsx7(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
let closure_31 = { code: "function ChannelDetailsNavigationBarTsx8(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? (function NavigationHeader(channel) {
  let cleanUp;
  let first;
  let items2;
  let onBackPress;
  let tmp13;
  let tmp8;
  let tmp9;
  let width;
  let tmp = channel;
  const tmp2 = cleanUp;
  let obj = channel(cleanUp[15]);
  const cResult = obj.c(23);
  channel = channel.channel;
  ({ onBackPress, width } = channel);
  cleanUp = channel.cleanUp;
  const transitionState = channel.transitionState;
  let tmp4 = closure_17();
  const tmp5 = transitionState < channel(cleanUp[31]).TransitionStates.YEETED;
  let closure_3 = tmp5;
  const guild_id = channel.guild_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LurkingStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    let fn = function c() {
      const isLurkingResult = null != guild_id && LurkingStore.isLurking(tmp);
      return isLurkingResult;
    };
    const items1 = [guild_id];
    cResult[1] = guild_id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(tmp2[17]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  const tmpResult3 = tmp(tmp2[32]);
  class I {
    constructor() {
      str = "none";
      tmp = closure_3;
      if (tmp) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      tmp2 = closure_0;
      tmp3 = closure_2;
      tmp4 = closure_0(closure_2[33]);
      num = 0;
      withTiming = tmp4.withTiming;
      if (tmp) {
        num = 1;
      }
      fn = function n(arg0) {
        const tmp = arg0;
        if (tmp) {
          const obj = channel(cleanUp[32]);
          obj.runOnJS(closure_1_2)();
        }
      };
      obj1 = { runOnJS: null, cleanUp: null };
      timingFast = tmp2(tmp3[35]).timingFast;
      obj1.runOnJS = tmp2(tmp3[32]).runOnJS;
      obj1.cleanUp = cleanUp;
      fn.__closure = obj1;
      fn.__workletHash = 4666893285618;
      fn.__initData = closure_29;
      obj.opacity = withTiming(num, timingFast, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  let obj2 = { isActive: tmp5, withTiming: tmp(tmp2[33]).withTiming, timingFast: tmp(tmp2[35]).timingFast, runOnJS: tmp(tmp2[32]).runOnJS, cleanUp, width };
  I.__closure = obj2;
  I.__workletHash = 5691901693466;
  I.__initData = __initData3;
  const animatedStyle = tmpResult3.useAnimatedStyle(I);
  if (cResult[4] === channel) {
    let tmp12;
    if (cResult[5] === stateFromStores) {
      tmp12 = cResult[6];
    }
    if (cResult[9] === animatedStyle) {
      let tmp15;
      let tmp16;
      let tmp18;
      let tmp22;
      if (cResult[10] === tmp4.navigationHeader) {
        tmp15 = cResult[11];
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[19]).intl;
        const stringResult = intl.string(tmp(tmp2[19]).t["13/7kX"]);
        cResult[12] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[12];
      }
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { color: width(tmp2[13]).colors.INTERACTIVE_TEXT_DEFAULT };
        const ArrowLargeLeftIcon = tmp(tmp2[37]).ArrowLargeLeftIcon;
        const tmp21 = closure_15(ArrowLargeLeftIcon, obj3);
        cResult[13] = tmp21;
        tmp18 = tmp21;
      } else {
        tmp18 = cResult[13];
      }
      if (cResult[14] !== onBackPress) {
        let obj4 = { accessibilityLabel: tmp16, onPress: onBackPress, children: tmp18 };
        const tmp24 = closure_15(tmp(tmp2[38]).PressableOpacity, obj4);
        cResult[14] = onBackPress;
        cResult[15] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[15];
      }
      if (cResult[16] === tmp12) {
        let tmp25;
        if (cResult[17] === tmp4.buttonsContainer) {
          tmp25 = cResult[18];
        }
        if (cResult[19] === tmp15) {
          if (cResult[20] === tmp22) {
            let tmp29;
            if (cResult[21] === tmp25) {
              tmp29 = cResult[22];
            }
            return tmp29;
          }
        }
        const obj5 = { style: tmp15, children: items2 };
        items2 = [tmp22, tmp25];
        const tmp32 = closure_16(width(tmp2[32]).View, obj5);
        cResult[19] = tmp15;
        cResult[20] = tmp22;
        cResult[21] = tmp25;
        cResult[22] = tmp32;
        tmp29 = tmp32;
      }
      const obj6 = { style: tmp4.buttonsContainer, children: tmp12 };
      const tmp28 = closure_15(guild_id, obj6);
      cResult[16] = tmp12;
      cResult[17] = tmp4.buttonsContainer;
      cResult[18] = tmp28;
      tmp25 = tmp28;
    }
    const items3 = [tmp4.navigationHeader, animatedStyle];
    cResult[9] = animatedStyle;
    cResult[10] = tmp4.navigationHeader;
    cResult[11] = items3;
    tmp15 = items3;
  }
  if (cResult[7] !== channel) {
    const fn2 = function y(arg0) {
      let tmp3;
      if (unpackModuleId.SEARCH === arg0) {
        const obj2 = { channelId: channel.id };
        tmp3 = authStore3(closure_21, obj2, arg0);
      } else if (unpackModuleId.MUTE === arg0) {
        const obj3 = { channelId: channel.id };
        tmp3 = authStore3(closure_20, obj3, arg0);
      } else if (unpackModuleId.SETTINGS === arg0) {
        const obj = { channel };
        tmp3 = authStore3(closure_22, obj, arg0);
      } else if (unpackModuleId.MORE === arg0) {
        const obj4 = { channel };
        tmp3 = authStore3(ChannelDetailsMoreButtonDefault, obj4, arg0);
      }
      return tmp3;
    };
    cResult[7] = channel;
    cResult[8] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[8];
  }
  const tmpResult4 = tmp(tmp2[36]);
  const channelDetailsButtons = tmpResult4.getChannelDetailsButtons(channel, stateFromStores);
  const mapped = channelDetailsButtons.map(tmp13);
  cResult[4] = channel;
  cResult[5] = stateFromStores;
  cResult[6] = mapped;
  tmp12 = mapped;
}) : (function NavigationHeader(channel) {
  let ArrowLargeLeftIcon;
  let closure_3;
  let intl;
  let items3;
  let items4;
  let obj6;
  let onBackPress;
  let transitionState;
  channel = channel.channel;
  const width = channel.width;
  const cleanUp = channel.cleanUp;
  let stateFromStores;
  ({ onBackPress, transitionState } = channel);
  let tmp = closure_17();
  const tmp2 = transitionState < channel(cleanUp[31]).TransitionStates.YEETED;
  react = tmp2;
  const guild_id = channel.guild_id;
  let obj = channel(cleanUp[17]);
  const items = [stateFromStores];
  const items1 = [guild_id];
  stateFromStores = obj.useStateFromStores(items, () => {
    const isLurkingResult = null != guild_id && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  }, items1);
  let obj2 = channel(cleanUp[32]);
  let fn = function _() {
    let fn;
    let num;
    let timingFast;
    let withTiming;
    let str = "none";
    let tmp = closure_3;
    if (tmp) {
      str = "auto";
    }
    let obj = { pointerEvents: str, opacity: withTiming(num, timingFast, "animate-always", fn), width };
    num = 0;
    withTiming = timing.withTiming;
    if (tmp) {
      num = 1;
    }
    fn = function n(arg0) {
      const tmp = arg0;
      if (tmp) {
        const obj = channel(cleanUp[32]);
        obj.runOnJS(closure_1_2)();
      }
    };
    const obj2 = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    timingFast = tmp2(5094).timingFast;
    fn.__closure = obj2;
    fn.__workletHash = 7047546467450;
    fn.__initData = __initData;
    return obj;
  };
  let obj3 = { isActive: tmp2, withTiming: channel(cleanUp[33]).withTiming, timingFast: channel(cleanUp[35]).timingFast, runOnJS: channel(cleanUp[32]).runOnJS, cleanUp, width };
  fn.__closure = obj3;
  fn.__workletHash = 12379570402558;
  fn.__initData = __initData5;
  const items2 = [channel, stateFromStores];
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const memo = react.useMemo(() => {
    let obj = ChannelDetailsUtils;
    const channelDetailsButtons = obj.getChannelDetailsButtons(channel, stateFromStores);
    return channelDetailsButtons.map((item) => {
      let tmp3;
      if (constants.SEARCH === item) {
        const obj2 = { channelId: channel.id };
        tmp3 = closure_2_15(closure_2_21, obj2, item);
      } else if (constants.MUTE === item) {
        const obj3 = { channelId: channel.id };
        tmp3 = closure_2_15(closure_2_20, obj3, item);
      } else if (constants.SETTINGS === item) {
        const obj = { channel };
        tmp3 = closure_2_15(closure_2_22, obj, item);
      } else if (constants.MORE === item) {
        const obj4 = { channel };
        tmp3 = closure_2_15(width(cleanUp[30]), obj4, item);
      }
      return tmp3;
    });
  }, items2);
  let obj4 = { style: items3, children: items4 };
  items3 = [tmp.navigationHeader, animatedStyle];
  View = width(cleanUp[32]).View;
  const obj5 = { accessibilityLabel: intl.string(channel(cleanUp[19]).t["13/7kX"]), onPress: onBackPress, children: closure_15(ArrowLargeLeftIcon, obj6) };
  const PressableOpacity = channel(cleanUp[38]).PressableOpacity;
  intl = channel(cleanUp[19]).intl;
  obj6 = { color: width(cleanUp[13]).colors.INTERACTIVE_TEXT_DEFAULT };
  ArrowLargeLeftIcon = channel(cleanUp[37]).ArrowLargeLeftIcon;
  items4 = [closure_15(PressableOpacity, obj5), ];
  const obj7 = { style: tmp.buttonsContainer, children: memo };
  items4[1] = closure_15(guild_id, obj7);
  return closure_16(View, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function NavigationHeaderWithSearchWrapped(channel) {
  let componentWidth;
  let tmp6;
  const tmp = channel;
  let obj = channel(componentWidth[15]);
  const cResult = obj.c(13);
  channel = channel.channel;
  const onBackPress = channel.onBackPress;
  const tmp2 = componentWidth;
  componentWidth = channel.componentWidth;
  const ref = channel.ref;
  const tmp4 = closure_17();
  const tmp5 = closure_10(channel.id);
  if (cResult[0] !== tmp5) {
    let items1;
    if (tmp5) {
      const items = [tmp7.SEARCH];
      items1 = items;
    } else {
      items1 = [tmp7.BUTTONS];
    }
    cResult[0] = tmp5;
    cResult[1] = items1;
    tmp6 = items1;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === channel) {
    if (cResult[3] === componentWidth) {
      if (cResult[4] === onBackPress) {
        let tmp8;
        if (cResult[5] === ref) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === tmp8) {
          let tmp9;
          if (cResult[8] === tmp6) {
            tmp9 = cResult[9];
          }
          if (cResult[10] === tmp4.container) {
            let tmp13;
            if (cResult[11] === tmp9) {
              tmp13 = cResult[12];
            }
            return tmp13;
          }
          let obj2 = { style: tmp4.container, children: tmp9 };
          const tmp16 = closure_15(View, obj2);
          cResult[10] = tmp4.container;
          cResult[11] = tmp9;
          cResult[12] = tmp16;
          tmp13 = tmp16;
        }
        const obj3 = { items: tmp6, getItemKey, renderItem: tmp8 };
        const tmp12 = closure_15(tmp(tmp2[31]).TransitionGroup, obj3);
        cResult[7] = tmp8;
        cResult[8] = tmp6;
        cResult[9] = tmp12;
        tmp9 = tmp12;
      }
    }
  }
  class T {
    constructor(arg0, arg1, arg2, arg3) {
      if (closure_18.BUTTONS === arg1) {
        tmp7 = jsx;
        tmp8 = NavigationHeader;
        obj1 = { channel: null, onBackPress: null, transitionState: null, width: null, cleanUp: null };
        tmp9 = channel;
        obj1.channel = channel;
        tmp10 = onBackPress;
        obj1.onBackPress = onBackPress;
        obj1.transitionState = arg2;
        tmp11 = componentWidth;
        obj1.width = componentWidth;
        obj1.cleanUp = arg3;
        return jsx(NavigationHeader, obj1, channel);
      } else if (tmp.SEARCH === arg1) {
        tmp2 = jsx;
        tmp3 = SearchBar;
        obj = { ref: null, channel: null, transitionState: null, width: null, cleanUp: null };
        tmp4 = ref;
        obj.ref = ref;
        tmp5 = channel;
        obj.channel = channel;
        obj.transitionState = arg2;
        tmp6 = componentWidth;
        obj.width = componentWidth;
        obj.cleanUp = arg3;
        return jsx(SearchBar, obj, channel);
      } else {
        return;
      }
    }
  }
  cResult[2] = channel;
  cResult[3] = componentWidth;
  cResult[4] = onBackPress;
  cResult[5] = ref;
  cResult[6] = T;
  tmp8 = T;
}) : (function NavigationHeaderWithSearchWrapped(channel) {
  let obj2;
  channel = channel.channel;
  const onBackPress = channel.onBackPress;
  const componentWidth = channel.componentWidth;
  const ref = channel.ref;
  const tmp = closure_17();
  const tmp2 = closure_10(channel.id);
  let closure_4 = tmp2;
  let items = [tmp2];
  let items1 = [channel, onBackPress, componentWidth, ref];
  const memo = ref.useMemo(() => {
    let items1;
    if (closure_4) {
      const items = [constants3.SEARCH];
      items1 = items;
    } else {
      items1 = [constants3.BUTTONS];
    }
    return items1;
  }, items);
  let obj = { style: tmp.container, children: closure_15(channel(componentWidth[31]).TransitionGroup, obj2) };
  const callback = ref.useCallback((arg0, arg1, transitionState, cleanUp) => {
    if (constants.BUTTONS === arg1) {
      const obj2 = { channel, onBackPress, transitionState, width: componentWidth, cleanUp };
      return authStore3(closure_32, obj2, arg0);
    } else if (tmp.SEARCH === arg1) {
      const obj = { ref, channel, transitionState, width: componentWidth, cleanUp };
      return authStore3(closure_27, obj, arg0);
    }
  }, items1);
  obj2 = { items: memo, getItemKey, renderItem: callback };
  return closure_15(closure_4, obj);
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx");

export default memoResult;

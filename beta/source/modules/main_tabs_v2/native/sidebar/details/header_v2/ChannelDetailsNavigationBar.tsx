// Module ID: 17207
// Function ID: 17208
// Name: ChannelDetailsNavigationBar
// Dependencies: [19, 17, 4400, 4401, 2045, 4939, 8125, 11221, 1078, 8126, 21, 4758, 12518, 580, 558, 568, 4462, 504, 1488, 1119, 10383, 8212, 8178, 12447, 12506, 4968, 7299, 11219, 10630, 7625, 17208, 4471, 4497, 4759, 17100, 4762, 11732, 5843, 5341, 2]

// Module 17207 (ChannelDetailsNavigationBar)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useToken from "useToken" /* 4462 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;
import timing from "timing" /* 4759 */;
import timingPresets from "timingPresets" /* 4762 */;
import _modDef7299 from "module_7299" /* 7299 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10630 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11219 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11732 */;
import useSearchContext from "useSearchContext" /* 12447 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12506 */;
import ChannelDetailsMoreButtonDefault from "ChannelDetailsMoreButton" /* 17208 */;
import noop from "module_19" /* 19 */;
import LurkingStore from "LurkingStore" /* 4400 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4401 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4939 */;

const require = globalThis.__r;

require = fn;
function getItemKey(arg0) {
  return arg0;
}
const View = fn(17).View;
const ChannelDetailsStore = fn(8125);
({ setIsChannelDetailsSearchActive: closure_9, useIsChannelDetailsSearchActive: c10 } = ChannelDetailsStore);
const ChannelDetailsConstants = fn(11221);
({ ChannelDetailsButtonTypes: closure_11, ChannelDetailsNavigatorScreens: closure_12 } = ChannelDetailsConstants);
const ChannelSettingsSections = fn(1078).ChannelSettingsSections;
let closure_14 = fn(8126).SearchEntrypointAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4758);
let obj = { container: { position: "relative", zIndex: 1, height: fn(12518).SEARCH_BAR_HEIGHT, marginTop: nativeDefault.space.PX_8 }, navigationHeader: null, buttonsContainer: null, searchHeader: null };
let obj3 = { position: "relative", zIndex: 1, height: fn(12518).SEARCH_BAR_HEIGHT, marginTop: nativeDefault.space.PX_8 };
obj.navigationHeader = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, position: "absolute", height: fn(12518).SEARCH_BAR_HEIGHT };
let obj4 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, position: "absolute", height: fn(12518).SEARCH_BAR_HEIGHT };
obj.buttonsContainer = { flex: 1, flexDirection: "row", gap: nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
obj.searchHeader = { position: "absolute" };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { BUTTONS: "buttons", SEARCH: "search" };
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  if (cResult[0] === token) {
    if (cResult[1] === token1) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj4 = { size: token, variant: token1 };
  cResult[0] = token;
  cResult[1] = token1;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : (() => {
  const obj = { size: useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE), variant: null };
  obj.variant = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  return obj;
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(568).c(12);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, JoinedThreadsStore, UserGuildSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      let id = ChannelStore.getChannel(channelId);
      if (null == id) {
        return tmp;
      } else if (id.isThread()) {
        id = id.id;
        let isMutedResult = JoinedThreadsStore.isMuted(id);
      } else {
        isMutedResult = UserGuildSettingsStore.isChannelMuted(id.getGuildId(), id.id);
      }
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = channelId(568);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp8);
  const tmpResult = channelId(504);
  const navigation = channelId(1488).useNavigation();
  if (cResult[3] === channelId) {
    if (cResult[4] === navigation) {
      let tmp11 = cResult[5];
    }
    ({ size, variant } = closure_19());
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t.w4m945);
      cResult[6] = stringResult;
      let tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    const tmp16 = navigation(stateFromStores ? 10383 : 8212);
    if (cResult[7] === tmp11) {
      if (cResult[8] === size) {
        if (cResult[9] === tmp16) {
          if (cResult[10] === variant) {
            let tmp17 = cResult[11];
          }
          return tmp17;
        }
      }
    }
    const obj2 = { accessibilityLabel: tmp14, onPress: tmp11, variant, size, icon: tmp16 };
    const tmp20 = closure_15(tmp(8178).IconButton, obj2, constants.MUTE);
    cResult[7] = tmp11;
    class S {
      constructor() {
        obj = { screen: closure_12.MUTE, channelId, source: "channel-details-navigation-bar" };
        navigateResult = closure_1.navigate("sidebar", obj);
        return;
      }
    }
    cResult[8] = size;
    cResult[9] = tmp16;
    cResult[10] = variant;
    cResult[11] = tmp20;
    tmp17 = tmp20;
    const tmp13 = closure_19();
  }
  class S {
    constructor() {
      obj = { screen: closure_12.MUTE, channelId, source: "channel-details-navigation-bar" };
      navigateResult = closure_1.navigate("sidebar", obj);
      return;
    }
  }
  cResult[3] = channelId;
  cResult[4] = navigation;
  cResult[5] = S;
  tmp11 = S;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const items = [ChannelStore, JoinedThreadsStore, UserGuildSettingsStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let id = ChannelStore.getChannel(channelId);
    if (null == id) {
      return tmp;
    } else if (id.isThread()) {
      id = id.id;
      let isMutedResult = JoinedThreadsStore.isMuted(id);
    } else {
      isMutedResult = UserGuildSettingsStore.isChannelMuted(id.getGuildId(), id.id);
    }
  });
  const obj = channelId(504);
  const navigation = channelId(1488).useNavigation();
  const items1 = [channelId, navigation];
  const callback = noop.useCallback(() => {
    navigation.navigate("sidebar", { screen: constants2.MUTE, channelId, source: "channel-details-navigation-bar" });
  }, items1);
  const obj2 = channelId(1488);
  ({ size, variant } = closure_19());
  const obj3 = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null };
  const intl = channelId(1119).intl;
  obj3.accessibilityLabel = intl.string(channelId(1119).t.w4m945);
  obj3.onPress = callback;
  obj3.variant = variant;
  obj3.size = size;
  obj3.icon = navigation(stateFromStores ? 10383 : 8212);
  return closure_15(channelId(8178).IconButton, obj3, constants.MUTE);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(568).c(11);
  channelId = channelId.channelId;
  if (cResult[0] !== channelId) {
    const fn = function t() {
      options(channelId, true, "action");
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        const guildId = channel.getGuildId();
        const isThreadResult = channel.isThread();
        const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
        const obj2 = search_tracking_TrackingDefault;
        const obj = { searchContext: channelDetailsSearchContext, searchLocation: channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER };
        obj2.trackSearchOpened(obj);
        const tmp3 = channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER;
      }
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[2] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== channelId) {
    const fn2 = function u() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[3] = channelId;
    cResult[4] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[4];
  }
  let obj = channelId(568);
  const stateFromStores = channelId(504).useStateFromStores(tmp5, tmp7);
  const tmpResult = channelId(504);
  const shouldHideChannelContent = channelId(4968).useShouldHideChannelContent(stateFromStores);
  const tmpResult2 = channelId(4968);
  ({ size, variant } = closure_19());
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["5h0QOP"]);
    cResult[5] = stringResult;
    let tmp11 = stringResult;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === shouldHideChannelContent) {
    if (cResult[7] === tmp4) {
      if (cResult[8] === size) {
        if (cResult[9] === variant) {
          let tmp13 = cResult[10];
        }
        return tmp13;
      }
    }
  }
  const tmp10 = closure_19();
  const tmp14 = closure_15(channelId(8178).IconButton, { accessibilityLabel: tmp11, onPress: tmp4, variant, size, icon: _modDef7299, disabled: shouldHideChannelContent }, constants.SEARCH);
  cResult[6] = shouldHideChannelContent;
  cResult[7] = tmp4;
  cResult[8] = size;
  cResult[9] = variant;
  cResult[10] = tmp14;
  tmp13 = tmp14;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const items = [channelId];
  const callback = noop.useCallback(() => {
    options(channelId, true, "action");
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const guildId = channel.getGuildId();
      const isThreadResult = channel.isThread();
      const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      const obj2 = search_tracking_TrackingDefault;
      const obj = { searchContext: channelDetailsSearchContext, searchLocation: channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER };
      obj2.trackSearchOpened(obj);
      const tmp3 = channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER;
    }
  }, items);
  const items1 = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj = channelId(504);
  const shouldHideChannelContent = channelId(4968).useShouldHideChannelContent(stateFromStores);
  let obj2 = channelId(4968);
  ({ size, variant } = closure_19());
  const obj3 = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null, disabled: null };
  const intl = channelId(1119).intl;
  obj3.accessibilityLabel = intl.string(channelId(1119).t["5h0QOP"]);
  obj3.onPress = callback;
  obj3.variant = variant;
  obj3.size = size;
  obj3.icon = _modDef7299;
  obj3.disabled = shouldHideChannelContent;
  return closure_15(channelId(8178).IconButton, obj3, constants.SEARCH);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(8);
  channel = channel.channel;
  const obj = channel(568);
  const navigation = channel(1488).useNavigation();
  if (cResult[0] === channel) {
    if (cResult[1] === navigation) {
      let tmp5 = cResult[2];
    }
    ({ size, variant } = closure_19());
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t["3D5yo/"]);
      cResult[3] = stringResult;
      let tmp9 = stringResult;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === tmp5) {
      if (cResult[5] === size) {
        if (cResult[6] === variant) {
          let tmp11 = cResult[7];
        }
        return tmp11;
      }
    }
    let obj3 = { accessibilityLabel: tmp9, onPress: tmp5, accessibilityRole: "button", variant, size, icon: navigation(7625) };
    const tmp15 = closure_15(tmp(8178).IconButton, obj3, constants.SETTINGS);
    cResult[4] = tmp5;
    cResult[5] = size;
    cResult[6] = variant;
    cResult[7] = tmp15;
    tmp11 = tmp15;
    const tmp7 = closure_19();
  }
  const fn = function t() {
    if (null != channel) {
      if (!obj.isDM()) {
        if (!obj.isMultiUserDM()) {
          ChannelSettingsActionCreatorsDefault.init(obj.id);
          const obj3 = { screen: ChannelSettingsSections.OVERVIEW, channelId: obj.id, source: "channel-details-navigation-bar" };
          navigation.navigate("sidebar", obj3);
        }
      }
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(obj.id);
    }
  };
  cResult[0] = channel;
  cResult[1] = navigation;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((channel) => {
  channel = channel.channel;
  const navigation = channel(1488).useNavigation();
  const items = [channel, navigation];
  const callback = noop.useCallback(() => {
    if (null != channel) {
      if (!obj.isDM()) {
        if (!obj.isMultiUserDM()) {
          ChannelSettingsActionCreatorsDefault.init(obj.id);
          const obj3 = { screen: ChannelSettingsSections.OVERVIEW, channelId: obj.id, source: "channel-details-navigation-bar" };
          navigation.navigate("sidebar", obj3);
        }
      }
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(obj.id);
    }
  }, items);
  const obj = channel(1488);
  ({ size, variant } = closure_19());
  let obj2 = { accessibilityLabel: null, onPress: null, accessibilityRole: "button", variant: null, size: null, icon: null };
  const intl = channel(1119).intl;
  obj2.accessibilityLabel = intl.string(channel(1119).t["3D5yo/"]);
  obj2.onPress = callback;
  obj2.variant = variant;
  obj2.size = size;
  obj2.icon = navigation(7625);
  return closure_15(channel(8178).IconButton, obj2, constants.SETTINGS);
});
const __initData = { code: "function ChannelDetailsNavigationBarTsx1(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?\"auto\":\"none\",opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1)},\"animate-always\",function(finished){if(finished){runOnJS(cleanUp)();}}),width:width};}" };
let closure_24 = { code: "function ChannelDetailsNavigationBarTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}" };
const __initData2 = { code: "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
const __initData3 = { code: "function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
ReactCompilerGating = fn(558);
let closure_27 = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((cleanUp, ref) => {
  const cResult = width(568).c(13);
  ({ channel, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, width } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  const tmp3 = closure_17();
  const tmp4 = cleanUp.transitionState !== width(4471).TransitionStates.YEETED;
  dependencyMap = tmp4;
  let obj = width(568);
  let fn = function s() {
    let str = "none";
    if (dependencyMap) {
      str = "auto";
    }
    let obj = { pointerEvents: str, opacity: null, width: null };
    let num = 0;
    if (tmp) {
      num = 1;
    }
    const obj3 = { duration: 200, easing: null };
    const Easing = tmp2(4497).Easing;
    obj3.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
    const fn = function n(arg0) {
      if (arg0) {
        width(dependencyMap[32]).runOnJS(cleanUp)();
        const obj = width(dependencyMap[32]);
      }
    };
    const obj2 = timing;
    tmp = dependencyMap;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 1906721458806;
    fn.__initData = __initData;
    obj.opacity = obj2.withTiming(num, obj3, "animate-always", fn);
    obj.width = width;
    return obj;
  };
  let obj2 = width(4497);
  fn.__closure = { isActive: tmp4, withTiming: width(4759).withTiming, Easing: width(4497).Easing, runOnJS: width(4497).runOnJS, cleanUp, width };
  fn.__workletHash = 2346374481841;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp3.searchHeader) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === channel.guild_id) {
      if (cResult[4] === channel.id) {
        if (cResult[5] === onSuggestionsLayoutMeasure) {
          if (cResult[6] === ref) {
            if (cResult[7] === setSuggestionsDismissed) {
              if (cResult[8] === suggestionsDismissed) {
                let tmp8 = cResult[9];
              }
              if (cResult[10] === tmp6) {
                if (cResult[11] === tmp8) {
                  let tmp12 = cResult[12];
                }
                return tmp12;
              }
              const obj5 = { style: tmp6, children: tmp8 };
              const tmp15 = closure_15(cleanUp(4497).View, obj5);
              cResult[10] = tmp6;
              cResult[11] = tmp8;
              cResult[12] = tmp15;
              tmp12 = tmp15;
            }
          }
        }
      }
    }
    const obj8 = { ref, channelId: null, guildId: null, onSuggestionsLayoutMesure: null, suggestionsDismissed: null, setSuggestionsDismissed: null, showBackButton: true };
    ({ id: obj4.channelId, guild_id: obj4.guildId } = channel);
    obj8.onSuggestionsLayoutMesure = onSuggestionsLayoutMeasure;
    obj8.suggestionsDismissed = suggestionsDismissed;
    obj8.setSuggestionsDismissed = setSuggestionsDismissed;
    const tmp11 = closure_15(cleanUp(17100), obj8);
    cResult[3] = channel.guild_id;
    cResult[4] = channel.id;
    cResult[5] = onSuggestionsLayoutMeasure;
    cResult[6] = ref;
    cResult[7] = setSuggestionsDismissed;
    cResult[8] = suggestionsDismissed;
    cResult[9] = tmp11;
    tmp8 = tmp11;
  }
  const items = [tmp3.searchHeader, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.searchHeader;
  cResult[2] = items;
  tmp6 = items;
}) : ((cleanUp, ref) => {
  ({ channel, width } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  ({ onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState } = cleanUp);
  const tmp2 = transitionState !== width(4471).TransitionStates.YEETED;
  dependencyMap = tmp2;
  let tmp = closure_17();
  class S {
    constructor() {
      str = "none";
      tmp = closure_2;
      if (closure_2) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[33]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      obj1 = { duration: 200, easing: null };
      Easing = tmp2(tmp3[32]).Easing;
      obj1.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
      fn = function n() { ... };
      obj5 = { runOnJS: tmp2(tmp3[32]).runOnJS, cleanUp };
      fn.__closure = obj5;
      fn.__workletHash = 17272451769590;
      fn.__initData = closure_26;
      obj.opacity = obj2.withTiming(num, obj1, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  let obj = width(4497);
  S.__closure = { isActive: tmp2, withTiming: width(4759).withTiming, Easing: width(4497).Easing, runOnJS: width(4497).runOnJS, cleanUp, width };
  S.__workletHash = 14243423616139;
  S.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(S);
  let obj3 = { style: null, children: closure_15(cleanUp(17100), { ref, channelId: channel.id, guildId: channel.guild_id, onSuggestionsLayoutMesure: onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, showBackButton: true }) };
  const items = [tmp.searchHeader, animatedStyle];
  obj3.style = items;
  return closure_15(cleanUp(4497).View, obj3);
}));
const __initData4 = { code: "function ChannelDetailsNavigationBarTsx5(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?\"auto\":\"none\",opacity:withTiming(isActive?1:0,timingFast,\"animate-always\",function(finished){if(finished){runOnJS(cleanUp)();}}),width:width};}" };
const __initData5 = { code: "function ChannelDetailsNavigationBarTsx6(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}" };
const __initData6 = { code: "function ChannelDetailsNavigationBarTsx7(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
const __initData7 = { code: "function ChannelDetailsNavigationBarTsx8(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(cleanUp[15]).c(23);
  channel = channel.channel;
  ({ onBackPress, width } = channel);
  cleanUp = channel.cleanUp;
  const tmp4 = closure_17();
  const tmp5 = channel.transitionState < channel(cleanUp[31]).TransitionStates.YEETED;
  closure_3 = tmp5;
  const guild_id = channel.guild_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LurkingStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    let fn = function c() {
      let isLurkingResult = null != guild_id;
      if (isLurkingResult) {
        isLurkingResult = LurkingStore.isLurking(tmp);
      }
      return isLurkingResult;
    };
    const items1 = [guild_id];
    cResult[1] = guild_id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj = channel(cleanUp[15]);
  const stateFromStores = channel(cleanUp[17]).useStateFromStores(first, tmp8, tmp9);
  const tmpResult = channel(cleanUp[17]);
  class A {
    constructor() {
      str = "none";
      tmp = closure_3;
      if (closure_3) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[33]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      fn = function n(arg0) {
        if (arg0) {
          channel(cleanUp[32]).runOnJS(closure_1_2)();
          const obj = channel(cleanUp[32]);
        }
      };
      obj1 = { runOnJS: tmp2(tmp3[32]).runOnJS, cleanUp };
      fn.__closure = obj1;
      fn.__workletHash = 4666893285618;
      fn.__initData = closure_29;
      obj.opacity = obj2.withTiming(num, tmp2(tmp3[35]).timingFast, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  const tmpResult3 = channel(cleanUp[32]);
  A.__closure = { isActive: tmp5, withTiming: channel(cleanUp[33]).withTiming, timingFast: channel(cleanUp[35]).timingFast, runOnJS: channel(cleanUp[32]).runOnJS, cleanUp, width };
  A.__workletHash = 5691901693466;
  A.__initData = __initData4;
  const animatedStyle = tmpResult3.useAnimatedStyle(A);
  if (cResult[4] === channel) {
    if (cResult[5] === stateFromStores) {
      if (cResult[9] === animatedStyle) {
        if (cResult[10] === tmp4.navigationHeader) {
          let tmp15 = cResult[11];
        }
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[19]).intl;
          const stringResult = intl.string(tmp(tmp2[19]).t["13/7kX"]);
          cResult[12] = stringResult;
          let tmp16 = stringResult;
        } else {
          tmp16 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = { color: width(tmp2[13]).colors.INTERACTIVE_TEXT_DEFAULT };
          const tmp21 = closure_15(tmp(tmp2[37]).ArrowLargeLeftIcon, obj3);
          cResult[13] = tmp21;
          let tmp18 = tmp21;
        } else {
          tmp18 = cResult[13];
        }
        if (cResult[14] !== onBackPress) {
          let obj4 = { accessibilityLabel: tmp16, onPress: onBackPress, children: tmp18 };
          const tmp24 = closure_15(tmp(tmp2[38]).PressableOpacity, obj4);
          cResult[14] = onBackPress;
          cResult[15] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[15];
        }
        if (cResult[16] === tmp12) {
          if (cResult[17] === tmp4.buttonsContainer) {
            let tmp25 = cResult[18];
          }
          if (cResult[19] === tmp15) {
            if (cResult[20] === tmp22) {
              if (cResult[21] === tmp25) {
                let tmp29 = cResult[22];
              }
              return tmp29;
            }
          }
          const obj5 = { style: tmp15, children: null };
          const items2 = [tmp22, tmp25];
          obj5.children = items2;
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
  }
  if (cResult[7] !== channel) {
    const fn2 = function b(arg0) {
      if (constants.SEARCH === arg0) {
        const obj2 = { channelId: tmp.id };
        let tmp3 = closure_2_15(closure_21, obj2, arg0);
      } else if (tmp2.MUTE === arg0) {
        const obj3 = { channelId: tmp.id };
        tmp3 = closure_2_15(closure_20, obj3, arg0);
      } else if (tmp2.SETTINGS === arg0) {
        const obj = { channel: tmp };
        tmp3 = closure_2_15(closure_22, obj, arg0);
      } else if (tmp2.MORE === arg0) {
        const obj4 = { channel: tmp };
        tmp3 = closure_2_15(ChannelDetailsMoreButtonDefault, obj4, arg0);
      }
      return tmp3;
    };
    cResult[7] = channel;
    cResult[8] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[8];
  }
  let obj2 = { isActive: tmp5, withTiming: channel(cleanUp[33]).withTiming, timingFast: channel(cleanUp[35]).timingFast, runOnJS: channel(cleanUp[32]).runOnJS, cleanUp, width };
  const channelDetailsButtons = channel(cleanUp[36]).getChannelDetailsButtons(channel, stateFromStores);
  const mapped = channelDetailsButtons.map(tmp13);
  cResult[4] = channel;
  cResult[5] = stateFromStores;
  cResult[6] = mapped;
}) : ((channel) => {
  channel = channel.channel;
  const width = channel.width;
  const cleanUp = channel.cleanUp;
  let stateFromStores;
  ({ onBackPress, transitionState } = channel);
  let tmp = closure_17();
  const tmp2 = transitionState < channel(cleanUp[31]).TransitionStates.YEETED;
  noop = tmp2;
  const guild_id = channel.guild_id;
  const items = [stateFromStores];
  const items1 = [guild_id];
  stateFromStores = channel(cleanUp[17]).useStateFromStores(items, () => {
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  }, items1);
  let obj = channel(cleanUp[17]);
  class S {
    constructor() {
      str = "none";
      tmp = closure_3;
      if (closure_3) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[33]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      fn = function n(arg0) {
        if (arg0) {
          channel(cleanUp[32]).runOnJS(closure_1_2)();
          const obj = channel(cleanUp[32]);
        }
      };
      obj1 = { runOnJS: tmp2(tmp3[32]).runOnJS, cleanUp };
      fn.__closure = obj1;
      fn.__workletHash = 7047546467450;
      fn.__initData = closure_31;
      obj.opacity = obj2.withTiming(num, tmp2(tmp3[35]).timingFast, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  let obj2 = channel(cleanUp[32]);
  S.__closure = { isActive: tmp2, withTiming: channel(cleanUp[33]).withTiming, timingFast: channel(cleanUp[35]).timingFast, runOnJS: channel(cleanUp[32]).runOnJS, cleanUp, width };
  S.__workletHash = 12379570402558;
  S.__initData = __initData6;
  const items2 = [channel, stateFromStores];
  const animatedStyle = obj2.useAnimatedStyle(S);
  const memo = noop.useMemo(() => {
    const channelDetailsButtons = ChannelDetailsUtils.getChannelDetailsButtons(channel, stateFromStores);
    return channelDetailsButtons.map((item) => {
      if (constants.SEARCH === item) {
        const obj2 = { channelId: tmp.id };
        let tmp3 = closure_2_15(closure_2_21, obj2, item);
      } else if (tmp2.MUTE === item) {
        const obj3 = { channelId: tmp.id };
        tmp3 = closure_2_15(closure_2_20, obj3, item);
      } else if (tmp2.SETTINGS === item) {
        const obj = { channel: tmp };
        tmp3 = closure_2_15(closure_2_22, obj, item);
      } else if (tmp2.MORE === item) {
        const obj4 = { channel: tmp };
        tmp3 = closure_2_15(width(cleanUp[30]), obj4, item);
      }
      return tmp3;
    });
  }, items2);
  let obj4 = { style: null, children: null };
  const items3 = [tmp.navigationHeader, animatedStyle];
  obj4.style = items3;
  const obj5 = { accessibilityLabel: null, onPress: null, children: null };
  const intl = channel(cleanUp[19]).intl;
  obj5.accessibilityLabel = intl.string(channel(cleanUp[19]).t["13/7kX"]);
  obj5.onPress = onBackPress;
  let obj3 = { isActive: tmp2, withTiming: channel(cleanUp[33]).withTiming, timingFast: channel(cleanUp[35]).timingFast, runOnJS: channel(cleanUp[32]).runOnJS, cleanUp, width };
  obj5.children = closure_15(channel(cleanUp[37]).ArrowLargeLeftIcon, { color: width(cleanUp[13]).colors.INTERACTIVE_TEXT_DEFAULT });
  const items4 = [closure_15(channel(cleanUp[38]).PressableOpacity, obj5), closure_15(guild_id, { style: tmp.buttonsContainer, children: memo })];
  obj4.children = items4;
  return closure_16(width(cleanUp[32]).View, obj4);
});
ReactCompilerGating = fn(558);
let obj5 = { flex: 1, flexDirection: "row", gap: nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx");

export default noop.memo(noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((channel, ref) => {
  _require = ref;
  const cResult = require("c").c(16);
  channel = channel.channel;
  onBackPress = channel.onBackPress;
  const componentWidth = channel.componentWidth;
  const onSuggestionsLayoutMeasure = channel.onSuggestionsLayoutMeasure;
  const suggestionsDismissed = channel.suggestionsDismissed;
  const setSuggestionsDismissed = channel.setSuggestionsDismissed;
  const tmp4 = closure_17();
  const tmp5 = closure_10(channel.id);
  if (cResult[0] !== tmp5) {
    let items = constants;
    if (tmp5) {
      items = [];
      items[0] = items.SEARCH;
      let items1 = items;
    } else {
      items1 = [items.BUTTONS];
    }
    cResult[0] = tmp5;
    cResult[1] = items1;
  } else {
    if (cResult[2] === channel) {
      if (cResult[3] === componentWidth) {
        if (cResult[4] === onBackPress) {
          if (cResult[5] === onSuggestionsLayoutMeasure) {
            if (cResult[6] === ref) {
              if (cResult[7] === setSuggestionsDismissed) {
                if (cResult[8] === suggestionsDismissed) {
                  let tmp8 = cResult[9];
                }
                if (cResult[10] === tmp8) {
                  if (cResult[11] === tmp6) {
                    let tmp9 = cResult[12];
                  }
                  if (cResult[13] === tmp4.container) {
                    if (cResult[14] === tmp9) {
                      let tmp13 = cResult[15];
                    }
                    return tmp13;
                  }
                  let obj2 = { style: tmp4.container, children: tmp9 };
                  const tmp16 = closure_15(onSuggestionsLayoutMeasure, obj2);
                  cResult[13] = tmp4.container;
                  cResult[14] = tmp9;
                  cResult[15] = tmp16;
                  tmp13 = tmp16;
                }
                const obj3 = { items: tmp6, getItemKey, renderItem: tmp8 };
                const tmp12 = closure_15(require("native").TransitionGroup, obj3);
                cResult[10] = tmp8;
                cResult[11] = tmp6;
                cResult[12] = tmp12;
                tmp9 = tmp12;
              }
            }
          }
        }
      }
    }
    const fn = function w(arg0, arg1, transitionState, cleanUp) {
      if (constants.BUTTONS === arg1) {
        const obj2 = { channel, onBackPress, transitionState, width: componentWidth, cleanUp };
        return closure_2_15(closure_32, obj2, arg0);
      } else if (tmp.SEARCH === arg1) {
        const obj = { ref, channel, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState, width: componentWidth, cleanUp };
        return closure_2_15(closure_27, obj, arg0);
      }
    };
    cResult[2] = channel;
    cResult[3] = componentWidth;
    cResult[4] = onBackPress;
    cResult[5] = onSuggestionsLayoutMeasure;
    cResult[6] = ref;
    cResult[7] = setSuggestionsDismissed;
    cResult[8] = suggestionsDismissed;
    cResult[9] = fn;
    tmp8 = fn;
  }
}) : ((channel, ref) => {
  channel = channel.channel;
  const onBackPress = channel.onBackPress;
  const componentWidth = channel.componentWidth;
  const onSuggestionsLayoutMeasure = channel.onSuggestionsLayoutMeasure;
  const suggestionsDismissed = channel.suggestionsDismissed;
  const setSuggestionsDismissed = channel.setSuggestionsDismissed;
  const tmp2 = closure_10(channel.id);
  closure_7 = tmp2;
  let items = [tmp2];
  let items1 = [channel, onBackPress, componentWidth, ref, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed];
  const memo = onSuggestionsLayoutMeasure.useMemo(() => {
    if (closure_7) {
      const items = [tmp.SEARCH];
      let items1 = items;
    } else {
      items1 = [tmp.BUTTONS];
    }
    return items1;
  }, items);
  let obj = { style: closure_17().container, children: null };
  const callback = onSuggestionsLayoutMeasure.useCallback((arg0, arg1, transitionState, cleanUp) => {
    if (constants.BUTTONS === arg1) {
      const obj2 = { channel, onBackPress, transitionState, width: componentWidth, cleanUp };
      return closure_2_15(closure_32, obj2, arg0);
    } else if (tmp.SEARCH === arg1) {
      const obj = { ref, channel, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState, width: componentWidth, cleanUp };
      return closure_2_15(closure_27, obj, arg0);
    }
  }, items1);
  obj.children = closure_15(channel(componentWidth[31]).TransitionGroup, { items: memo, getItemKey, renderItem: callback });
  return closure_15(suggestionsDismissed, obj);
})));

// Module ID: 16555
// Function ID: 16556
// Name: ChannelDetailsNavigationBar
// Dependencies: [19, 17, 4470, 4471, 2045, 5017, 7301, 10377, 1074, 7302, 21, 4836, 11859, 576, 4531, 504, 1485, 7363, 1115, 9614, 7391, 11782, 11841, 5046, 6473, 10374, 8085, 6799, 16556, 4540, 4566, 4837, 16440, 4840, 11107, 5435, 5940, 2]

// Module 16555 (ChannelDetailsNavigationBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import AssetRegistryDefault from "AssetRegistry" /* 6473 */;
import TrackingConstants from "TrackingConstants" /* 7302 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8085 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10374 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11107 */;
import useSearchContext from "useSearchContext" /* 11782 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import SearchButton2 from "SearchButton" /* 11859 */;
import react_mod from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4470 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4471 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 7301 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation;

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function MuteButton(channelId) {
  let intl;
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
  const obj2 = channelId(1485);
  navigation = obj2.useNavigation();
  const items1 = [channelId, navigation];
  const callback = react.useCallback(() => {
    const obj = { screen: constants.MUTE, channelId, source: "channel-details-navigation-bar" };
    navigation.navigate("sidebar", obj);
  }, items1);
  const obj3 = channelId(4531);
  const token = obj3.useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj4 = channelId(4531);
  const token1 = obj4.useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  const obj5 = { accessibilityLabel: intl.string(channelId(1115).t.w4m945), onPress: callback, variant: token1, size: token, icon: navigation(stateFromStores ? 9614 : 7391) };
  const IconButton = channelId(7363).IconButton;
  intl = channelId(1115).intl;
  return closure_15(IconButton, obj5, constants.MUTE);
}
function SearchButton(channelId) {
  let intl;
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
      const obj2 = search_tracking_TrackingDefault;
      obj2.trackSearchOpened(obj);
    }
  }, items);
  let obj = channelId(504);
  const items1 = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(5046);
  const shouldHideChannelContent = obj2.useShouldHideChannelContent(stateFromStores);
  const obj3 = channelId(4531);
  const token = obj3.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  let obj4 = channelId(4531);
  const token1 = obj4.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  const obj5 = { accessibilityLabel: intl.string(channelId(1115).t["5h0QOP"]), onPress: callback, variant: token1, size: token, icon: AssetRegistryDefault, disabled: shouldHideChannelContent };
  const IconButton = channelId(7363).IconButton;
  intl = channelId(1115).intl;
  return closure_15(IconButton, obj5, constants.SEARCH);
}
function SettingsButton(channel) {
  let intl;
  channel = channel.channel;
  const obj = channel(1485);
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
  let obj2 = channel(4531);
  const token = obj2.useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  let obj3 = channel(4531);
  const token1 = obj3.useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  let obj4 = { accessibilityLabel: intl.string(channel(1115).t["3D5yo/"]), onPress: callback, accessibilityRole: "button", variant: token1, size: token, icon: navigation(6799) };
  const IconButton = channel(7363).IconButton;
  intl = channel(1115).intl;
  return closure_15(IconButton, obj4, constants.SETTINGS);
}
function NavigationHeader(channel) {
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
  const tmp2 = transitionState < channel(cleanUp[29]).TransitionStates.YEETED;
  react = tmp2;
  const guild_id = channel.guild_id;
  let obj = channel(cleanUp[15]);
  const items = [stateFromStores];
  const items1 = [guild_id];
  stateFromStores = obj.useStateFromStores(items, () => {
    const isLurkingResult = null != guild_id && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  }, items1);
  let obj2 = channel(cleanUp[30]);
  class S {
    constructor() {
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
          const obj = channel(cleanUp[30]);
          obj.runOnJS(closure_1_2)();
        }
      };
      const obj2 = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      timingFast = tmp2(4840).timingFast;
      fn.__closure = obj2;
      fn.__workletHash = 17272451769590;
      fn.__initData = __initData;
      return obj;
    }
  }
  let obj3 = { isActive: tmp2, withTiming: channel(cleanUp[31]).withTiming, timingFast: channel(cleanUp[33]).timingFast, runOnJS: channel(cleanUp[30]).runOnJS, cleanUp, width };
  S.__closure = obj3;
  S.__workletHash = 15139742229370;
  S.__initData = __initData2;
  const items2 = [channel, stateFromStores];
  const animatedStyle = obj2.useAnimatedStyle(S);
  const memo = react.useMemo(() => {
    let obj = ChannelDetailsUtils;
    const channelDetailsButtons = obj.getChannelDetailsButtons(channel, stateFromStores);
    return channelDetailsButtons.map((item) => {
      let tmp3;
      if (constants.SEARCH === item) {
        const obj2 = { channelId: channel.id };
        tmp3 = closure_2_15(SearchButton, obj2, item);
      } else if (constants.MUTE === item) {
        const obj3 = { channelId: channel.id };
        tmp3 = closure_2_15(MuteButton, obj3, item);
      } else if (constants.SETTINGS === item) {
        const obj = { channel };
        tmp3 = closure_2_15(SettingsButton, obj, item);
      } else if (constants.MORE === item) {
        const obj4 = { channel };
        tmp3 = closure_2_15(width(cleanUp[28]), obj4, item);
      }
      return tmp3;
    });
  }, items2);
  let obj4 = { style: items3, children: items4 };
  items3 = [tmp.navigationHeader, animatedStyle];
  View = width(cleanUp[30]).View;
  const obj5 = { accessibilityLabel: intl.string(channel(cleanUp[18]).t["13/7kX"]), onPress: onBackPress, children: closure_15(ArrowLargeLeftIcon, obj6) };
  const PressableOpacity = channel(cleanUp[35]).PressableOpacity;
  intl = channel(cleanUp[18]).intl;
  obj6 = { color: width(cleanUp[13]).colors.INTERACTIVE_TEXT_DEFAULT };
  ArrowLargeLeftIcon = channel(cleanUp[36]).ArrowLargeLeftIcon;
  items4 = [closure_15(PressableOpacity, obj5), ];
  const obj7 = { style: tmp.buttonsContainer, children: memo };
  items4[1] = closure_15(guild_id, obj7);
  return closure_16(View, obj4);
}
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
let closure_18 = { BUTTONS: "buttons", SEARCH: "search" };
const __initData = { code: "function ChannelDetailsNavigationBarTsx1(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
let closure_23 = { code: "function ChannelDetailsNavigationBarTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
let closure_24 = react.forwardRef((cleanUp, ref) => {
  let channel;
  let closure_2;
  let items;
  let obj4;
  let width;
  ({ channel, width } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  const transitionState = cleanUp.transitionState;
  let tmp = closure_17();
  const tmp2 = transitionState !== width(4540).TransitionStates.YEETED;
  dependencyMap = tmp2;
  let obj = width(4566);
  let fn = function c() {
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
    Easing = tmp2(4566).Easing;
    fn = function n(arg0) {
      const tmp = arg0;
      if (tmp) {
        const obj = width(closure_2[30]);
        obj.runOnJS(cleanUp)();
      }
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 10411737901360;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, cleanUp });
    return obj;
  };
  let obj2 = { isActive: tmp2, withTiming: width(4837).withTiming, Easing: width(4566).Easing, runOnJS: width(4566).runOnJS, cleanUp, width };
  fn.__closure = obj2;
  fn.__workletHash = 1270940013897;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, children: closure_15(cleanUp(16440), obj4) };
  items = [tmp.searchHeader, animatedStyle];
  View = cleanUp(4566).View;
  obj4 = { ref, channelId: channel.id, guildId: channel.guild_id, showBackButton: true };
  return closure_15(View, obj3);
});
const __initData2 = { code: "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
const __initData3 = { code: "function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
const memoResult = react.memo(react.forwardRef((channel, ref) => {
  let obj2;
  channel = channel.channel;
  const onBackPress = channel.onBackPress;
  const componentWidth = channel.componentWidth;
  react = ref;
  const tmp = closure_17();
  const tmp2 = closure_10(channel.id);
  let closure_4 = tmp2;
  let items = [tmp2];
  let items1 = [channel, onBackPress, componentWidth, ref];
  const memo = react.useMemo(() => {
    let items1;
    if (closure_4) {
      const items = [constants.SEARCH];
      items1 = items;
    } else {
      items1 = [constants.BUTTONS];
    }
    return items1;
  }, items);
  let obj = { style: tmp.container, children: closure_15(channel(componentWidth[29]).TransitionGroup, obj2) };
  const callback = react.useCallback((arg0, arg1, transitionState, cleanUp) => {
    if (constants.BUTTONS === arg1) {
      const obj2 = { channel, onBackPress, transitionState, width: componentWidth, cleanUp };
      return closure_15(NavigationHeader, obj2, arg0);
    } else if (tmp.SEARCH === arg1) {
      const obj = { ref, channel, transitionState, width: componentWidth, cleanUp };
      return closure_15(closure_24, obj, arg0);
    }
  }, items1);
  obj2 = { items: memo, getItemKey, renderItem: callback };
  return closure_15(closure_4, obj);
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx");

export default memoResult;

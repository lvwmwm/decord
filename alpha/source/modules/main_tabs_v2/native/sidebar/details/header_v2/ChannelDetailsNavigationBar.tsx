// Module ID: 18969
// Function ID: 18970
// Name: ChannelDetailsNavigationBar
// Dependencies: [19, 17, 5074, 5075, 4990, 6895, 9956, 10267, 1072, 9957, 21, 5141, 14059, 575, 5719, 504, 1499, 8152, 1113, 11126, 8523, 13978, 14038, 6854, 7341, 10932, 8323, 7686, 18970, 5207, 1652, 5377, 1705, 18843, 5380, 11784, 7106, 7128, 2]

// Module 18969 (ChannelDetailsNavigationBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5207 */;
import timing_timing from "timing/timing" /* 5377 */;
import AssetRegistryDefault from "AssetRegistry" /* 7341 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8323 */;
import TrackingConstants from "TrackingConstants" /* 9957 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10932 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11784 */;
import useSearchContext from "useSearchContext" /* 13978 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 14038 */;
import SearchButton2 from "SearchButton" /* 14059 */;
import ChannelDetailsSearchBarDefault from "ChannelDetailsSearchBar" /* 18843 */;
import react from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 5074 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 5075 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6895 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 9956 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10267 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let closure_0, closure_1, navigation, obj1;

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
  const obj2 = channelId(1499);
  navigation = obj2.useNavigation();
  const items1 = [channelId, navigation];
  const callback = react.useCallback(() => {
    const obj = { screen: constants.MUTE, channelId, source: "channel-details-navigation-bar" };
    navigation.navigate("sidebar", obj);
  }, items1);
  const obj3 = channelId(5719);
  const token = obj3.useToken(navigation(575).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj4 = channelId(5719);
  const token1 = obj4.useToken(navigation(575).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  const obj5 = { accessibilityLabel: intl.string(channelId(1113).t.w4m945), onPress: callback, variant: token1, size: token, icon: navigation(stateFromStores ? 11126 : 8523) };
  const IconButton = channelId(8152).IconButton;
  intl = channelId(1113).intl;
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
  let obj2 = channelId(6854);
  const shouldHideChannelContent = obj2.useShouldHideChannelContent(stateFromStores);
  const obj3 = channelId(5719);
  const token = obj3.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  let obj4 = channelId(5719);
  const token1 = obj4.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  const obj5 = { accessibilityLabel: intl.string(channelId(1113).t["5h0QOP"]), onPress: callback, variant: token1, size: token, icon: AssetRegistryDefault, disabled: shouldHideChannelContent };
  const IconButton = channelId(8152).IconButton;
  intl = channelId(1113).intl;
  return closure_15(IconButton, obj5, constants.SEARCH);
}
function SettingsButton(channel) {
  let intl;
  channel = channel.channel;
  const obj = channel(1499);
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
  let obj2 = channel(5719);
  const token = obj2.useToken(navigation(575).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  let obj3 = channel(5719);
  const token1 = obj3.useToken(navigation(575).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  let obj4 = { accessibilityLabel: intl.string(channel(1113).t["3D5yo/"]), onPress: callback, accessibilityRole: "button", variant: token1, size: token, icon: navigation(7686) };
  const IconButton = channel(8152).IconButton;
  intl = channel(1113).intl;
  return closure_15(IconButton, obj4, constants.SETTINGS);
}
function SearchBar(channel) {
  let cleanUp;
  let items2;
  let obj2;
  let ref;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let transitionState;
  channel = channel.channel;
  ({ transitionState, width, cleanUp, ref } = channel);
  let tmp2 = dependencyMap;
  let tmp = closure_17();
  const YEETED = native.TransitionStates.YEETED;
  const tmp3 = _mod1652;
  let items = [closure_23, transitionState !== YEETED, , , , , , ];
  const useAnimatedStyle = tmp3.useAnimatedStyle;
  items[2] = timing_timing.withTiming;
  items[3] = _mod1652.Easing;
  items[4] = closure_22;
  items[5] = _mod1705.scheduleOnRN;
  items[6] = cleanUp;
  items[7] = width;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class ChannelDetailsNavigationBarTsx2 {
    constructor() {
      str = "none";
      tmp = closure_0;
      if (tmp) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      num = 0;
      tmp2 = closure_1;
      if (tmp) {
        num = 1;
      }
      obj1 = { duration: 200, easing: closure_2.bezier(0.25, 0.1, 0.25, 1) };
      items = [, , ];
      items[0] = closure_3;
      items[1] = closure_4;
      items[2] = closure_5;
      closure_0 = undefined;
      closure_1 = undefined;
      [tmp3, tmp4, tmp5] = items;
      class ChannelDetailsNavigationBarTsx1 {
        constructor(arg0) {
          tmp = channel;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp4 = closure_0(closure_1);
          }
          return;
        }
      }
      items1 = [, ];
      items1[0] = tmp4;
      items1[1] = tmp5;
      ChannelDetailsNavigationBarTsx1.__closure = items1;
      ChannelDetailsNavigationBarTsx1.__workletHash = 1231697703371;
      ChannelDetailsNavigationBarTsx1.__initData = tmp3;
      obj.opacity = tmp2(num, obj1, "animate-always", ChannelDetailsNavigationBarTsx1);
      obj.width = closure_6;
      return obj;
    }
  }
  let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  ChannelDetailsNavigationBarTsx2.__closure = items1;
  ChannelDetailsNavigationBarTsx2.__workletHash = 15404870983083;
  ChannelDetailsNavigationBarTsx2.__initData = tmp4;
  const animatedStyle = useAnimatedStyle(ChannelDetailsNavigationBarTsx2);
  let obj = { style: items2, children: closure_15(ChannelDetailsSearchBarDefault, obj2) };
  items2 = [tmp.searchHeader, animatedStyle];
  View = _modDef1652.View;
  obj2 = { ref, channelId: channel.id, guildId: channel.guild_id, showBackButton: true };
  return closure_15(View, obj);
}
function NavigationHeader(channel) {
  let ArrowLargeLeftIcon;
  let cleanUp;
  let intl;
  let items5;
  let items6;
  let obj4;
  let onBackPress;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp7;
  let tmp8;
  let tmp9;
  let transitionState;
  channel = channel.channel;
  let stateFromStores;
  ({ onBackPress, transitionState, width, cleanUp } = channel);
  let tmp = closure_17();
  let tmp2 = channel;
  let tmp3 = stateFromStores;
  const guild_id = channel.guild_id;
  const tmp4 = transitionState < channel(stateFromStores[29]).TransitionStates.YEETED;
  let obj = channel(stateFromStores[15]);
  let items = [LurkingStore];
  let items1 = [guild_id];
  stateFromStores = obj.useStateFromStores(items, () => {
    const isLurkingResult = null != guild_id && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  }, items1);
  const tmp6 = channel(stateFromStores[30]);
  const items2 = [closure_26, tmp4, , , , , , ];
  const useAnimatedStyle = tmp6.useAnimatedStyle;
  items2[2] = channel(stateFromStores[31]).withTiming;
  items2[3] = channel(stateFromStores[34]).timingFast;
  items2[4] = closure_25;
  items2[5] = channel(stateFromStores[32]).scheduleOnRN;
  items2[6] = cleanUp;
  items2[7] = width;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class ChannelDetailsNavigationBarTsx4 {
    constructor() {
      let num;
      let tmp2;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let str = "none";
      let tmp = c0;
      if (tmp) {
        str = "auto";
      }
      const obj = { pointerEvents: str, opacity: tmp2(num, tmp3, "animate-always", ChannelDetailsNavigationBarTsx3), width };
      num = 0;
      tmp2 = c1;
      if (tmp) {
        num = 1;
      }
      const items = [c3, c4, c5];
      [tmp4, tmp5, tmp6] = items;
      tmp3 = c2;
      class ChannelDetailsNavigationBarTsx3 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp4 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp5, tmp6];
      ChannelDetailsNavigationBarTsx3.__closure = items1;
      ChannelDetailsNavigationBarTsx3.__workletHash = 12987339612745;
      ChannelDetailsNavigationBarTsx3.__initData = tmp4;
      return obj;
    }
  }
  const items3 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  ChannelDetailsNavigationBarTsx4.__closure = items3;
  ChannelDetailsNavigationBarTsx4.__workletHash = 4229809886411;
  ChannelDetailsNavigationBarTsx4.__initData = tmp7;
  const items4 = [channel, stateFromStores];
  const animatedStyle = useAnimatedStyle(ChannelDetailsNavigationBarTsx4);
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
        tmp3 = closure_2_15(guild_id(stateFromStores[28]), obj4, item);
      }
      return tmp3;
    });
  }, items4);
  let obj2 = { style: items5, children: items6 };
  items5 = [tmp.navigationHeader, animatedStyle];
  View = guild_id(tmp3[30]).View;
  let obj3 = { accessibilityRole: "button", accessibilityLabel: intl.string(tmp2(tmp3[18]).t["13/7kX"]), onPress: onBackPress, style: tmp.backButton, children: closure_15(ArrowLargeLeftIcon, obj4) };
  const PressableOpacity = tmp2(tmp3[36]).PressableOpacity;
  intl = tmp2(tmp3[18]).intl;
  obj4 = { color: guild_id(tmp3[13]).colors.INTERACTIVE_TEXT_DEFAULT };
  ArrowLargeLeftIcon = tmp2(tmp3[37]).ArrowLargeLeftIcon;
  items6 = [closure_15(PressableOpacity, obj3), ];
  const obj5 = { style: tmp.buttonsContainer, children: memo };
  items6[1] = closure_15(View, obj5);
  return closure_16(View, obj2);
}
function getItemKey(arg0) {
  return arg0;
}
let View = react_native.View;
({ setIsChannelDetailsSearchActive: c9, useIsChannelDetailsSearchActive: c10 } = ChannelDetailsStore);
({ ChannelDetailsButtonTypes: unpackModuleId, ChannelDetailsNavigatorScreens: closure_12 } = ChannelDetailsConstants);
const ChannelSettingsSections = Constants.ChannelSettingsSections;
let closure_14 = TrackingConstants.SearchEntrypointAnalyticsLocations;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, navigationHeader: obj3, backButton: { alignSelf: "stretch", justifyContent: "center" }, buttonsContainer: obj4, searchHeader: { position: "absolute" } };
obj2 = { position: "relative", zIndex: 1, height: SearchButton2.SEARCH_BAR_HEIGHT, marginTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, position: "absolute", height: SearchButton2.SEARCH_BAR_HEIGHT };
obj4 = { flex: 1, flexDirection: "row", gap: nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
let closure_17 = createStyles(obj);
let closure_18 = { BUTTONS: "buttons", SEARCH: "search" };
let closure_22 = { code: "(function ChannelDetailsNavigationBarTsx1(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished)scheduleOnRN(cleanUp);})" };
let closure_23 = { code: "(function ChannelDetailsNavigationBarTsx2(){let[isActive,withTiming,Easing,_worklet_1231697703371_init_data,scheduleOnRN,cleanUp,width]=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function ChannelDetailsNavigationBarTsx1Factory([_worklet_1231697703371_init_data,scheduleOnRN,cleanUp]){const ChannelDetailsNavigationBarTsx1=function(finished){if(finished)scheduleOnRN(cleanUp);};ChannelDetailsNavigationBarTsx1.__closure=[scheduleOnRN,cleanUp];ChannelDetailsNavigationBarTsx1.__workletHash=1231697703371;ChannelDetailsNavigationBarTsx1.__initData=_worklet_1231697703371_init_data;return ChannelDetailsNavigationBarTsx1;}([_worklet_1231697703371_init_data,scheduleOnRN,cleanUp])),width:width};})" };
let closure_25 = { code: "(function ChannelDetailsNavigationBarTsx3(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished)scheduleOnRN(cleanUp);})" };
let closure_26 = { code: "(function ChannelDetailsNavigationBarTsx4(){let[isActive,withTiming,timingFast,_worklet_12987339612745_init_data,scheduleOnRN,cleanUp,width]=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function ChannelDetailsNavigationBarTsx3Factory([_worklet_12987339612745_init_data,scheduleOnRN,cleanUp]){const ChannelDetailsNavigationBarTsx3=function(finished){if(finished)scheduleOnRN(cleanUp);};ChannelDetailsNavigationBarTsx3.__closure=[scheduleOnRN,cleanUp];ChannelDetailsNavigationBarTsx3.__workletHash=12987339612745;ChannelDetailsNavigationBarTsx3.__initData=_worklet_12987339612745_init_data;return ChannelDetailsNavigationBarTsx3;}([_worklet_12987339612745_init_data,scheduleOnRN,cleanUp])),width:width};})" };
const memoResult = react.memo(function NavigationHeaderWithSearchWrapped(channel) {
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
      const items = [constants.SEARCH];
      items1 = items;
    } else {
      items1 = [constants.BUTTONS];
    }
    return items1;
  }, items);
  let obj = { style: tmp.container, children: closure_15(channel(componentWidth[29]).TransitionGroup, obj2) };
  const callback = ref.useCallback((arg0, arg1, transitionState, cleanUp) => {
    if (constants.BUTTONS === arg1) {
      const obj2 = { channel, onBackPress, transitionState, width: componentWidth, cleanUp };
      return closure_15(NavigationHeader, obj2, arg0);
    } else if (tmp.SEARCH === arg1) {
      const obj = { ref, channel, transitionState, width: componentWidth, cleanUp };
      return closure_15(SearchBar, obj, arg0);
    }
  }, items1);
  obj2 = { items: memo, getItemKey, renderItem: callback };
  return closure_15(closure_4, obj);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx");

export default memoResult;

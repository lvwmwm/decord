// Module ID: 15467
// Function ID: 118846
// Name: navigateToChannelDetailsScreen
// Dependencies: [31, 27, 3759, 3760, 1348, 4325, 9168, 9140, 653, 9169, 33, 4130, 11443, 689, 3834, 566, 1456, 7533, 1212, 10233, 7727, 10107, 10108, 4345, 5787, 9137, 7685, 5792, 15468, 4476, 3991, 4131, 15366, 4134, 10907, 4660, 5091, 2]

// Module 15467 (navigateToChannelDetailsScreen)
import importAllResult from "withTiming";
import { View } from "registerAsset";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import createChannelState from "createChannelState";
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens";
import { ChannelSettingsSections } from "ME";
import { SearchEntrypointAnalyticsLocations as closure_14 } from "SearchEntrypointAnalyticsLocations";
import jsxProd from "timingNone";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_15;
let closure_16;
let closure_9;
const require = arg1;
function navigateToChannelDetailsScreen(navigate, screen, channelId) {
  navigate.navigate("sidebar", { screen, channelId, source: "channel-details-navigation-bar" });
}
function useChannelDetailsIconButtonStyles() {
  const obj = { size: require(3834) /* map */.useToken(importDefault(689).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE) };
  const obj2 = require(3834) /* map */;
  obj.variant = require(3834) /* map */.useToken(importDefault(689).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  return obj;
}
function MuteButton(channelId) {
  let size;
  let variant;
  channelId = channelId.channelId;
  let obj = channelId(566);
  const items = [closure_7, closure_6, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id = outer1_7.getChannel(channelId);
    if (null == id) {
      return tmp;
    } else if (id.isThread()) {
      id = id.id;
      let isMutedResult = outer1_6.isMuted(id);
    } else {
      isMutedResult = outer1_8.isChannelMuted(id.getGuildId(), id.id);
    }
  });
  const navigation = channelId(1456).useNavigation();
  const items1 = [channelId, navigation];
  const callback = importAllResult.useCallback(() => {
    outer1_24(navigation, outer1_12.MUTE, channelId);
  }, items1);
  const obj2 = channelId(1456);
  ({ size, variant } = useChannelDetailsIconButtonStyles());
  obj = {};
  const intl = channelId(1212).intl;
  obj.accessibilityLabel = intl.string(channelId(1212).t.w4m945);
  obj.onPress = callback;
  obj.variant = variant;
  obj.size = size;
  if (stateFromStores) {
    let tmp8 = 10233;
  } else {
    tmp8 = 7727;
  }
  obj.icon = navigation(tmp8);
  return closure_15(channelId(7533).IconButton, obj, constants.MUTE);
}
function SearchButton(channelId) {
  let size;
  let variant;
  channelId = channelId.channelId;
  const items = [channelId];
  const callback = importAllResult.useCallback(() => {
    outer1_9(channelId, true, "action");
    const channel = outer1_7.getChannel(channelId);
    if (null != channel) {
      const guildId = channel.getGuildId();
      const isThreadResult = channel.isThread();
      const channelDetailsSearchContext = channelId(outer1_2[21]).getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      let trackSearchOpened = outer1_14;
      const obj3 = channelId(outer1_2[21]);
      const tmp2 = channel.isPrivate() ? trackSearchOpened.INDIVIDUAL_DM : trackSearchOpened.CHANNEL_DETAILS_HEADER;
      trackSearchOpened = outer1_1(outer1_2[22]).trackSearchOpened;
      const obj = { searchContext: channelDetailsSearchContext, searchLocation: tmp2 };
      trackSearchOpened(obj);
      const tmp5 = outer1_1(outer1_2[22]);
    }
  }, items);
  let obj = channelId(566);
  const items1 = [closure_7];
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_7.getChannel(channelId));
  const shouldHideChannelContent = channelId(4345).useShouldHideChannelContent(stateFromStores);
  const obj2 = channelId(4345);
  ({ size, variant } = useChannelDetailsIconButtonStyles());
  obj = {};
  const intl = channelId(1212).intl;
  obj.accessibilityLabel = intl.string(channelId(1212).t["5h0QOP"]);
  obj.onPress = callback;
  obj.variant = variant;
  obj.size = size;
  obj.icon = importDefault(5787);
  obj.disabled = shouldHideChannelContent;
  return callback2(channelId(7533).IconButton, obj, constants.SEARCH);
}
function SettingsButton(channel) {
  let size;
  let variant;
  channel = channel.channel;
  let obj = channel(1456);
  const navigation = obj.useNavigation();
  const items = [channel, navigation];
  const callback = importAllResult.useCallback(() => {
    if (null != channel) {
      if (!channel.isDM()) {
        if (!channel.isMultiUserDM()) {
          navigation(outer1_2[26]).init(channel.id);
          outer1_24(navigation, outer1_13.OVERVIEW, channel.id);
          const obj = navigation(outer1_2[26]);
        }
      }
      const result = channel(outer1_2[25]).openChannelLongPressActionSheet(channel.id);
      const obj2 = channel(outer1_2[25]);
    }
  }, items);
  ({ size, variant } = useChannelDetailsIconButtonStyles());
  obj = {};
  const intl = channel(1212).intl;
  obj.accessibilityLabel = intl.string(channel(1212).t["3D5yo/"]);
  obj.onPress = callback;
  obj.accessibilityRole = "button";
  obj.variant = variant;
  obj.size = size;
  obj.icon = navigation(5792);
  return callback2(channel(7533).IconButton, obj, constants.SETTINGS);
}
function NavigationHeader(channel) {
  let onBackPress;
  let transitionState;
  channel = channel.channel;
  const width = channel.width;
  const cleanUp = channel.cleanUp;
  ({ onBackPress, transitionState } = channel);
  const tmp = callback4();
  const tmp2 = transitionState < channel(cleanUp[29]).TransitionStates.YEETED;
  const guild_id = channel.guild_id;
  let obj = channel(cleanUp[15]);
  const items = [stateFromStores];
  const items1 = [guild_id];
  stateFromStores = obj.useStateFromStores(items, () => {
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = stateFromStores.isLurking(guild_id);
    }
    return isLurkingResult;
  }, items1);
  let obj1 = channel(cleanUp[30]);
  class S {
    constructor() {
      obj = {};
      str = "none";
      if (closure_3) {
        str = "auto";
      }
      obj.pointerEvents = str;
      obj2 = channel(cleanUp[31]);
      num = 0;
      if (closure_3) {
        num = 1;
      }
      fn = function n(arg0) {
        if (arg0) {
          channel(cleanUp[30]).runOnJS(outer1_2)();
          const obj = channel(cleanUp[30]);
        }
      };
      obj = {};
      obj.runOnJS = channel(cleanUp[30]).runOnJS;
      obj.cleanUp = cleanUp;
      fn.__closure = obj;
      fn.__workletHash = 17272451769590;
      fn.__initData = outer1_23;
      obj.opacity = obj2.withTiming(num, channel(cleanUp[33]).timingFast, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  obj = { isActive: tmp2, withTiming: channel(cleanUp[31]).withTiming, timingFast: channel(cleanUp[33]).timingFast, runOnJS: channel(cleanUp[30]).runOnJS, cleanUp, width };
  S.__closure = obj;
  S.__workletHash = 15139742229370;
  S.__initData = closure_22;
  const items2 = [channel, stateFromStores];
  const animatedStyle = obj1.useAnimatedStyle(S);
  const memo = tmp2.useMemo(() => {
    const channelDetailsButtons = channel(cleanUp[34]).getChannelDetailsButtons(channel, stateFromStores);
    return channelDetailsButtons.map((arg0) => {
      if (outer2_11.SEARCH === arg0) {
        let obj = { channelId: tmp.id };
        let tmp4 = outer2_15(outer2_27, obj, arg0);
      } else if (outer2_11.MUTE === arg0) {
        obj = { channelId: tmp.id };
        tmp4 = outer2_15(outer2_26, obj, arg0);
      } else if (outer2_11.SETTINGS === arg0) {
        obj = { channel: tmp };
        tmp4 = outer2_15(outer2_28, obj, arg0);
      } else if (outer2_11.MORE === arg0) {
        const obj1 = { channel: tmp };
        tmp4 = outer2_15(width(cleanUp[28]), obj1, arg0);
      }
      return tmp4;
    });
  }, items2);
  obj = { style: items3 };
  items3 = [tmp.navigationHeader, animatedStyle];
  obj1 = {};
  const intl = channel(cleanUp[18]).intl;
  obj1.accessibilityLabel = intl.string(channel(cleanUp[18]).t["13/7kX"]);
  obj1.onPress = onBackPress;
  const obj2 = { color: width(cleanUp[13]).colors.INTERACTIVE_TEXT_DEFAULT };
  obj1.children = callback2(channel(cleanUp[36]).ArrowLargeLeftIcon, obj2);
  const items4 = [callback2(channel(cleanUp[35]).PressableOpacity, obj1), callback2(guild_id, { style: tmp.buttonsContainer, children: memo })];
  obj.children = items4;
  return callback3(width(cleanUp[30]).View, obj);
}
function getItemKey(arg0) {
  return arg0;
}
({ setIsChannelDetailsSearchActive: closure_9, useIsChannelDetailsSearchActive: closure_10 } = createChannelState);
({ ChannelDetailsButtonTypes: closure_11, ChannelDetailsNavigatorScreens: closure_12 } = ChannelDetailsNavigatorScreens);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let obj = {};
obj = { position: "relative", zIndex: 1, height: require("SEARCH_BAR_HEIGHT").SEARCH_BAR_HEIGHT, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.container = obj;
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, position: "absolute", height: require("SEARCH_BAR_HEIGHT").SEARCH_BAR_HEIGHT };
obj.navigationHeader = _createForOfIteratorHelperLoose;
let obj2 = { flex: 1, flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
obj.buttonsContainer = obj2;
obj.searchHeader = { position: "absolute" };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_18 = { BUTTONS: "buttons", SEARCH: "search" };
let closure_19 = { code: "function ChannelDetailsNavigationBarTsx1(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
let closure_20 = { code: "function ChannelDetailsNavigationBarTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
let closure_21 = importAllResult.forwardRef((cleanUp, ref) => {
  let channel;
  let onSuggestionsLayoutMeasure;
  let setSuggestionsDismissed;
  let suggestionsDismissed;
  let transitionState;
  let width;
  ({ channel, width } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  ({ onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState } = cleanUp);
  const tmp2 = transitionState !== width(4476).TransitionStates.YEETED;
  const dependencyMap = tmp2;
  let obj = width(3991);
  class S {
    constructor() {
      obj = {};
      str = "none";
      if (closure_2) {
        str = "auto";
      }
      obj.pointerEvents = str;
      obj2 = width(outer1_2[31]);
      num = 0;
      if (closure_2) {
        num = 1;
      }
      obj = { duration: 200 };
      Easing = width(outer1_2[30]).Easing;
      obj.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
      fn = function n(arg0) {
        if (arg0) {
          width(table[30]).runOnJS(outer1_1)();
          const obj = width(table[30]);
        }
      };
      obj1 = { runOnJS: width(outer1_2[30]).runOnJS, cleanUp };
      fn.__closure = obj1;
      fn.__workletHash = 10411737901360;
      fn.__initData = outer1_20;
      obj.opacity = obj2.withTiming(num, obj, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  obj = { isActive: tmp2, withTiming: width(4131).withTiming, Easing: width(3991).Easing, runOnJS: width(3991).runOnJS, cleanUp, width };
  S.__closure = obj;
  S.__workletHash = 1270940013897;
  S.__initData = closure_19;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: items };
  items = [callback4().searchHeader, animatedStyle];
  obj.children = callback2(cleanUp(15366), { ref, channelId: channel.id, guildId: channel.guild_id, onSuggestionsLayoutMesure: onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, showBackButton: true });
  return callback2(cleanUp(3991).View, obj);
});
let closure_22 = { code: "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
let closure_23 = { code: "function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
const memoResult = importAllResult.memo(importAllResult.forwardRef((channel) => {
  channel = channel.channel;
  const onBackPress = channel.onBackPress;
  const componentWidth = channel.componentWidth;
  const onSuggestionsLayoutMeasure = channel.onSuggestionsLayoutMeasure;
  const suggestionsDismissed = channel.suggestionsDismissed;
  const setSuggestionsDismissed = channel.setSuggestionsDismissed;
  let closure_6 = arg1;
  const tmp2 = callback(channel.id);
  let closure_7 = tmp2;
  let items = [tmp2];
  let items1 = [channel, onBackPress, componentWidth, arg1, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed];
  const memo = onSuggestionsLayoutMeasure.useMemo(() => {
    if (closure_7) {
      const items = [tmp.SEARCH];
      let items1 = items;
    } else {
      items1 = [tmp.BUTTONS];
    }
    return items1;
  }, items);
  let obj = { style: callback4().container };
  callback = onSuggestionsLayoutMeasure.useCallback((arg0, arg1, transitionState, cleanUp) => {
    if (outer1_18.BUTTONS === arg1) {
      let obj = { channel, onBackPress, transitionState, width: componentWidth, cleanUp };
      return outer1_15(outer1_29, obj, arg0);
    } else if (outer1_18.SEARCH === arg1) {
      obj = { ref: closure_6, channel, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState, width: componentWidth, cleanUp };
      return outer1_15(outer1_21, obj, arg0);
    }
  }, items1);
  obj = { items: memo, getItemKey, renderItem: callback };
  obj.children = callback2(channel(componentWidth[29]).TransitionGroup, obj);
  return callback2(suggestionsDismissed, obj);
}));
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx");

export default memoResult;

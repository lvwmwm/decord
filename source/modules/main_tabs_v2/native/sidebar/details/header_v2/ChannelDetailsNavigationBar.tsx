// Module ID: 15295
// Function ID: 116307
// Name: navigateToChannelDetailsScreen
// Dependencies: []

// Module 15295 (navigateToChannelDetailsScreen)
function navigateToChannelDetailsScreen(navigate, screen, channelId) {
  navigate.navigate("sidebar", { screen, channelId, source: "channel-details-navigation-bar" });
}
function useChannelDetailsIconButtonStyles() {
  const obj = { size: arg1(dependencyMap[14]).useToken(importDefault(dependencyMap[13]).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE) };
  const obj2 = arg1(dependencyMap[14]);
  obj.variant = arg1(dependencyMap[14]).useToken(importDefault(dependencyMap[13]).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  return obj;
}
function MuteButton(channelId) {
  let size;
  let variant;
  channelId = channelId.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_7, closure_6, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id = channel.getChannel(channelId);
    if (null == id) {
      return tmp;
    } else if (id.isThread()) {
      id = id.id;
      let isMutedResult = muted.isMuted(id);
    } else {
      isMutedResult = channelMuted.isChannelMuted(id.getGuildId(), id.id);
    }
  });
  const navigation = arg1(dependencyMap[16]).useNavigation();
  const importDefault = navigation;
  const items1 = [channelId, navigation];
  const callback = importAllResult.useCallback(() => {
    callback(navigation, constants.MUTE, channelId);
  }, items1);
  const obj2 = arg1(dependencyMap[16]);
  ({ size, variant } = useChannelDetailsIconButtonStyles());
  obj = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[18]).t.w4m945);
  obj.onPress = callback;
  obj.variant = variant;
  obj.size = size;
  if (stateFromStores) {
    let tmp8 = tmp7[19];
  } else {
    tmp8 = tmp7[20];
  }
  obj.icon = importDefault(tmp8);
  return closure_15(arg1(dependencyMap[17]).IconButton, obj, constants.MUTE);
}
function SearchButton(channelId) {
  let size;
  let variant;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const items = [channelId];
  const callback = importAllResult.useCallback(() => {
    callback2(channelId, true, "action");
    const channel = store.getChannel(channelId);
    if (null != channel) {
      const guildId = channel.getGuildId();
      const isThreadResult = channel.isThread();
      const channelDetailsSearchContext = channelId(closure_2[21]).getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      let trackSearchOpened = closure_14;
      const obj3 = channelId(closure_2[21]);
      const tmp2 = channel.isPrivate() ? trackSearchOpened.INDIVIDUAL_DM : trackSearchOpened.CHANNEL_DETAILS_HEADER;
      trackSearchOpened = callback(closure_2[22]).trackSearchOpened;
      const obj = { searchContext: channelDetailsSearchContext, searchLocation: tmp2 };
      trackSearchOpened(obj);
      const tmp5 = callback(closure_2[22]);
    }
  }, items);
  let obj = arg1(dependencyMap[15]);
  const items1 = [closure_7];
  const stateFromStores = obj.useStateFromStores(items1, () => store.getChannel(channelId));
  const shouldHideChannelContent = arg1(dependencyMap[23]).useShouldHideChannelContent(stateFromStores);
  const obj2 = arg1(dependencyMap[23]);
  ({ size, variant } = useChannelDetailsIconButtonStyles());
  obj = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[18]).t.5h0QOP);
  obj.onPress = callback;
  obj.variant = variant;
  obj.size = size;
  obj.icon = importDefault(dependencyMap[24]);
  obj.disabled = shouldHideChannelContent;
  return callback2(arg1(dependencyMap[17]).IconButton, obj, constants.SEARCH);
}
function SettingsButton(channel) {
  let size;
  let variant;
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[16]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const items = [channel, navigation];
  const callback = importAllResult.useCallback(() => {
    if (null != channel) {
      if (!channel.isDM()) {
        if (!channel.isMultiUserDM()) {
          navigation(closure_2[26]).init(channel.id);
          callback(navigation, constants.OVERVIEW, channel.id);
          const obj = navigation(closure_2[26]);
        }
      }
      const result = channel(closure_2[25]).openChannelLongPressActionSheet(channel.id);
      const obj2 = channel(closure_2[25]);
    }
  }, items);
  ({ size, variant } = useChannelDetailsIconButtonStyles());
  obj = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[18]).t.3D5yo/);
  obj.onPress = callback;
  obj.accessibilityRole = "button";
  obj.variant = variant;
  obj.size = size;
  obj.icon = importDefault(dependencyMap[27]);
  return callback2(arg1(dependencyMap[17]).IconButton, obj, constants.SETTINGS);
}
function NavigationHeader(channel) {
  let onBackPress;
  let transitionState;
  channel = channel.channel;
  const arg1 = channel;
  const width = channel.width;
  const importDefault = width;
  const cleanUp = channel.cleanUp;
  const dependencyMap = cleanUp;
  ({ onBackPress, transitionState } = channel);
  const tmp = callback4();
  const tmp2 = transitionState < arg1(dependencyMap[29]).TransitionStates.YEETED;
  const guild_id = channel.guild_id;
  const View = guild_id;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_5];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = stateFromStores.isLurking(guild_id);
    }
    return isLurkingResult;
  }, items1);
  closure_5 = stateFromStores;
  let obj1 = arg1(dependencyMap[30]);
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
          callback(closure_2[30]).runOnJS(closure_2)();
          const obj = callback(closure_2[30]);
        }
      };
      obj = {};
      obj.runOnJS = channel(cleanUp[30]).runOnJS;
      obj.cleanUp = cleanUp;
      fn.__closure = obj;
      fn.__workletHash = 17272451769590;
      fn.__initData = closure_23;
      obj.opacity = obj2.withTiming(num, channel(cleanUp[33]).timingFast, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  obj = { isActive: tmp2, withTiming: arg1(dependencyMap[31]).withTiming, timingFast: arg1(dependencyMap[33]).timingFast, runOnJS: arg1(dependencyMap[30]).runOnJS, cleanUp, width };
  S.__closure = obj;
  S.__workletHash = 15139742229370;
  S.__initData = closure_22;
  const items2 = [channel, stateFromStores];
  const animatedStyle = obj1.useAnimatedStyle(S);
  const memo = tmp2.useMemo(() => {
    const channelDetailsButtons = channel(cleanUp[34]).getChannelDetailsButtons(channel, stateFromStores);
    return channelDetailsButtons.map((arg0) => {
      if (constants.SEARCH === arg0) {
        let obj = { channelId: tmp.id };
        let tmp4 = callback2(closure_27, obj, arg0);
      } else if (constants.MUTE === arg0) {
        obj = { channelId: tmp.id };
        tmp4 = callback2(closure_26, obj, arg0);
      } else if (constants.SETTINGS === arg0) {
        obj = { channel: tmp };
        tmp4 = callback2(closure_28, obj, arg0);
      } else if (constants.MORE === arg0) {
        const obj1 = { channel: tmp };
        tmp4 = callback2(callback(closure_2[28]), obj1, arg0);
      }
      return tmp4;
    });
  }, items2);
  obj = { style: items3 };
  const items3 = [tmp.navigationHeader, animatedStyle];
  obj1 = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj1.accessibilityLabel = intl.string(arg1(dependencyMap[18]).t.13/7kX);
  obj1.onPress = onBackPress;
  const obj2 = { color: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT };
  obj1.children = callback2(arg1(dependencyMap[36]).ArrowLargeLeftIcon, obj2);
  const items4 = [callback2(arg1(dependencyMap[35]).PressableOpacity, obj1), callback2(View, { style: tmp.buttonsContainer, children: memo })];
  obj.children = items4;
  return callback3(importDefault(dependencyMap[30]).View, obj);
}
function getItemKey(arg0) {
  return arg0;
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ setIsChannelDetailsSearchActive: closure_9, useIsChannelDetailsSearchActive: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ ChannelDetailsButtonTypes: closure_11, ChannelDetailsNavigatorScreens: closure_12 } = arg1(dependencyMap[7]));
const ChannelSettingsSections = arg1(dependencyMap[8]).ChannelSettingsSections;
let closure_14 = arg1(dependencyMap[9]).SearchEntrypointAnalyticsLocations;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[10]));
let obj1 = arg1(dependencyMap[11]);
let obj = {};
obj = { 1365423970: true, 996475903: true, height: arg1(dependencyMap[12]).SEARCH_BAR_HEIGHT, marginTop: importDefault(dependencyMap[13]).space.PX_8 };
obj.container = obj;
obj1 = { paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16, paddingVertical: importDefault(dependencyMap[13]).space.PX_4, height: arg1(dependencyMap[12]).SEARCH_BAR_HEIGHT };
obj.navigationHeader = obj1;
const tmp4 = arg1(dependencyMap[10]);
obj.buttonsContainer = { gap: importDefault(dependencyMap[13]).modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP };
obj.searchHeader = { position: "absolute" };
let closure_17 = obj1.createStyles(obj);
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
  ref = width;
  cleanUp = cleanUp.cleanUp;
  const importDefault = cleanUp;
  ({ onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState } = cleanUp);
  const tmp2 = transitionState !== ref(dependencyMap[29]).TransitionStates.YEETED;
  const dependencyMap = tmp2;
  let obj = ref(dependencyMap[30]);
  class S {
    constructor() {
      obj = {};
      str = "none";
      if (closure_2) {
        str = "auto";
      }
      obj.pointerEvents = str;
      obj2 = width(closure_2[31]);
      num = 0;
      if (closure_2) {
        num = 1;
      }
      obj = { duration: 200 };
      Easing = width(closure_2[30]).Easing;
      obj.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
      fn = function n(arg0) {
        if (arg0) {
          callback(closure_2[30]).runOnJS(closure_1)();
          const obj = callback(closure_2[30]);
        }
      };
      obj1 = { runOnJS: width(closure_2[30]).runOnJS, cleanUp };
      fn.__closure = obj1;
      fn.__workletHash = 10411737901360;
      fn.__initData = closure_20;
      obj.opacity = obj2.withTiming(num, obj, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  obj = { isActive: tmp2, withTiming: ref(dependencyMap[31]).withTiming, Easing: ref(dependencyMap[30]).Easing, runOnJS: ref(dependencyMap[30]).runOnJS, cleanUp, width };
  S.__closure = obj;
  S.__workletHash = 1270940013897;
  S.__initData = closure_19;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: items };
  const items = [callback4().searchHeader, animatedStyle];
  obj.children = callback2(importDefault(dependencyMap[32]), { ref, channelId: channel.id, guildId: channel.guild_id, onSuggestionsLayoutMesure: onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, showBackButton: true });
  return callback2(importDefault(dependencyMap[30]).View, obj);
});
let closure_22 = { code: "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
let closure_23 = { code: "function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
const obj2 = { gap: importDefault(dependencyMap[13]).modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP };
const memoResult = importAllResult.memo(importAllResult.forwardRef((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  const onBackPress = channel.onBackPress;
  const importDefault = onBackPress;
  const componentWidth = channel.componentWidth;
  const dependencyMap = componentWidth;
  const onSuggestionsLayoutMeasure = channel.onSuggestionsLayoutMeasure;
  const suggestionsDismissed = channel.suggestionsDismissed;
  const View = suggestionsDismissed;
  const setSuggestionsDismissed = channel.setSuggestionsDismissed;
  let closure_5 = setSuggestionsDismissed;
  let closure_6 = arg1;
  const tmp2 = callback(channel.id);
  let closure_7 = tmp2;
  const items = [tmp2];
  const items1 = [channel, onBackPress, componentWidth, arg1, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed];
  const memo = importAllResult.useMemo(() => {
    if (tmp2) {
      const items = [tmp.SEARCH];
      let items1 = items;
    } else {
      items1 = [tmp.BUTTONS];
    }
    return items1;
  }, items);
  let obj = { style: callback4().container };
  const callback = importAllResult.useCallback((arg0, arg1, transitionState, cleanUp) => {
    if (constants.BUTTONS === arg1) {
      let obj = { channel, onBackPress, transitionState, width: componentWidth, cleanUp };
      return callback(closure_29, obj, arg0);
    } else if (constants.SEARCH === arg1) {
      obj = { ref: arg1, channel, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState, width: componentWidth, cleanUp };
      return callback(closure_21, obj, arg0);
    }
  }, items1);
  obj = { items: memo, getItemKey, renderItem: callback };
  obj.children = callback2(arg1(dependencyMap[29]).TransitionGroup, obj);
  return callback2(View, obj);
}));
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx");

export default memoResult;

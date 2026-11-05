// Module ID: 18907
// Function ID: 18908
// Name: MainTabsChannelScreenStack
// Dependencies: [32, 19, 17, 18908, 9968, 1072, 1083, 21, 5143, 1652, 1705, 18909, 18911, 5731, 5379, 5327, 5329, 18912, 5209, 6127, 11753, 18913, 1500, 18341, 5333, 11439, 5430, 5320, 18339, 19124, 18340, 572, 5334, 2]

// Module 18907 (MainTabsChannelScreenStack)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants2 from "Constants" /* 1083 */;
import Link from "Link" /* 1500 */;
import _mod1652 from "module_1652" /* 1652 */;
import native from "native" /* 5209 */;
import useChatLayoutDefault from "useChatLayout" /* 5327 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5329 */;
import ChatInputUtils from "ChatInputUtils" /* 5333 */;
import useThemeDefault from "useTheme" /* 5379 */;
import react_native from "react-native" /* 9968 */;
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 11439 */;
import reactDefault from "react" /* 11753 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 18339 */;
import MainTabsBackgroundChat from "MainTabsBackgroundChat" /* 18340 */;
import useMainTabsPanelsGestureDefault from "useMainTabsPanelsGesture" /* 18341 */;
import VisibleChannelScreenStore from "VisibleChannelScreenStore" /* 18908 */;
import navigationTTIEnabled from "navigationTTIEnabled" /* 18909 */;
import HideCoveredChannelsExperimentDefault from "HideCoveredChannelsExperiment" /* 18911 */;
import useMainTabsChannelScreenStyles from "useMainTabsChannelScreenStyles" /* 18912 */;
import StandaloneChannelScreenDefault from "StandaloneChannelScreen" /* 18913 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;
let _require, importDefault, navigation, num;

let c10;
let c9;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let tmp4;
let tmp5;
let unpackModuleId;
const _mod1705 = tmp4(1705);
const LegacyBaseButton = tmp5(5430);
const react2 = tmp5(6127);
const MainTabsNavigatorPanelContext = tmp5(11439);
function EnabledChannelScreenNavigationTTIVisibility(children) {
  let alwaysVisible;
  let highestFullyRenderedScreenIndex;
  let index;
  let isStackVisible;
  let maxWidth;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp2;
  let tmp3;
  let tmp7;
  let tmp8;
  let tmp9;
  let translateX;
  ({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible } = children);
  if (alwaysVisible === undefined) {
    alwaysVisible = false;
  }
  alwaysVisible = undefined;
  children = children.children;
  if (alwaysVisible === undefined) {
    alwaysVisible = false;
  }
  let tmp = _slicedToArray(react.useState(() => {
    let tmp = isStackVisible && highestFullyRenderedScreenIndex.get() <= index;
    if (tmp) {
      tmp = alwaysVisible || translateX.get() < maxWidth;
      const tmp4 = alwaysVisible || translateX.get() < maxWidth;
    }
    return tmp;
  }), 2);
  [tmp2, tmp3] = tmp;
  let tmp4 = require;
  const items = [closure_16, isStackVisible, highestFullyRenderedScreenIndex, index, alwaysVisible, translateX, maxWidth];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
  const tmp6 = _mod1652;
  class MainTabsChannelScreenStackTsx1 {
    constructor() {
      let tmp = c0 && _undefined.get() <= c2;
      if (tmp) {
        tmp = c3 || _undefined2.get() < c5;
        const tmp4 = c3 || _undefined2.get() < c5;
      }
      return tmp;
    }
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  MainTabsChannelScreenStackTsx1.__closure = items1;
  MainTabsChannelScreenStackTsx1.__workletHash = 1997617240646;
  MainTabsChannelScreenStackTsx1.__initData = tmp7;
  const items2 = [closure_17, , ];
  const useAnimatedReaction = tmp6.useAnimatedReaction;
  items2[1] = _mod1705.scheduleOnRN;
  items2[2] = tmp3;
  c0 = undefined;
  c1 = undefined;
  [tmp14, tmp15, tmp16] = items2;
  class MainTabsChannelScreenStackTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items3 = [tmp15, tmp16];
  MainTabsChannelScreenStackTsx2.__closure = items3;
  MainTabsChannelScreenStackTsx2.__workletHash = 2538011711038;
  MainTabsChannelScreenStackTsx2.__initData = tmp14;
  const animatedReaction = useAnimatedReaction(MainTabsChannelScreenStackTsx1, MainTabsChannelScreenStackTsx2);
  return children(tmp2);
}
function ChannelScreenNavigationTTIVisibility(children) {
  let childrenResult;
  const obj = navigationTTIEnabled;
  if (obj.isNavigationTTIEnabled()) {
    const obj2 = {};
    const merged = Object.assign(children);
    childrenResult = map1(EnabledChannelScreenNavigationTTIVisibility, obj2);
  } else {
    childrenResult = children.children(false);
  }
  return childrenResult;
}
function useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX) {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  _require = index;
  importDefault = highestFullyRenderedScreenIndex;
  let tmp = dependencyMap;
  let obj = HideCoveredChannelsExperimentDefault;
  const tmp2 = _require;
  const enabled = obj.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  let items = [closure_20, translateX];
  let c0;
  [tmp3, tmp4] = items;
  const obj2 = require("module_1652");
  class MainTabsChannelScreenStackTsx3 {
    constructor() {
      return _undefined.get() > 0;
    }
  }
  let items1 = [tmp4];
  MainTabsChannelScreenStackTsx3.__closure = items1;
  MainTabsChannelScreenStackTsx3.__workletHash = 14030664707715;
  MainTabsChannelScreenStackTsx3.__initData = tmp3;
  const items2 = [closure_21, highestFullyRenderedScreenIndex, index];
  c0 = undefined;
  let c1;
  [tmp5, tmp6, tmp7] = items2;
  class MainTabsChannelScreenStackTsx4 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const value = _undefined.get();
        if (arg0) {
          if (value >= c1) {
            const result = obj.set(tmp2 - 1);
          }
        } else if (value < c1) {
          const result1 = obj.set(tmp2);
        }
      }
    }
  }
  const items3 = [tmp6, tmp7];
  MainTabsChannelScreenStackTsx4.__closure = items3;
  MainTabsChannelScreenStackTsx4.__workletHash = 15152975546238;
  MainTabsChannelScreenStackTsx4.__initData = tmp5;
  const animatedReaction = obj2.useAnimatedReaction(MainTabsChannelScreenStackTsx3, MainTabsChannelScreenStackTsx4);
  const tmp2Result = tmp2(5731);
  const unmountEffect = tmp2Result.useUnmountEffect(() => {
    let tmp;
    let tmp2;
    let tmp3;
    let obj = _mod1705;
    const items = [closure_22, highestFullyRenderedScreenIndex, index];
    let c0;
    let c1;
    [tmp, tmp2, tmp3] = items;
    class MainTabsChannelScreenStackTsx5 {
      constructor() {
        obj = closure_0;
        if (closure_0.get() >= closure_1) {
          num = 1;
          result = obj.set(tmp - 1);
        }
        return;
      }
    }
    const items1 = [tmp2, tmp3];
    MainTabsChannelScreenStackTsx5.__closure = items1;
    MainTabsChannelScreenStackTsx5.__workletHash = 11869296074582;
    MainTabsChannelScreenStackTsx5.__initData = tmp;
    obj.scheduleOnUI(MainTabsChannelScreenStackTsx5);
  });
  const items4 = [closure_23, enabled, highestFullyRenderedScreenIndex, index];
  c0 = undefined;
  c1 = undefined;
  let c2;
  [tmp10, tmp11, tmp12, tmp13] = items4;
  const tmp2Result2 = tmp2(1652);
  class MainTabsChannelScreenStackTsx6 {
    constructor() {
      const tmp = c0 && _undefined.get() > c2;
      return tmp;
    }
  }
  const items5 = [tmp11, tmp12, tmp13];
  MainTabsChannelScreenStackTsx6.__closure = items5;
  MainTabsChannelScreenStackTsx6.__workletHash = 4301094108950;
  MainTabsChannelScreenStackTsx6.__initData = tmp10;
  return tmp2Result2.useDerivedValue(MainTabsChannelScreenStackTsx6);
}
function getKey(index) {
  return String(index.index);
}
({ NativeModules: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native2);
const setVisibleChannelScreen = VisibleChannelScreenStore.setVisibleChannelScreen;
const ONYX_BORDER_WIDTH = react_native.ONYX_BORDER_WIDTH;
({ AnalyticsObjectTypes: c9, AnalyticsObjects: c10, AnalyticsSections: unpackModuleId } = Constants);
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = { onyxContainerStyles: { marginTop: -ONYX_BORDER_WIDTH, marginLeft: -ONYX_BORDER_WIDTH } };
let closure_15 = createStyles.createStyles(obj);
let closure_16 = { code: "(function MainTabsChannelScreenStackTsx1(){let[isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth]=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);})" };
let closure_17 = { code: "(function MainTabsChannelScreenStackTsx2(visible,wasVisible){let[scheduleOnRN,setIsVisible]=this.__closure;if(visible===wasVisible)return;scheduleOnRN(setIsVisible,visible);})" };
let closure_20 = { code: "(function MainTabsChannelScreenStackTsx3(){let[translateX]=this.__closure;return translateX.get()>0;})" };
let closure_21 = { code: "(function MainTabsChannelScreenStackTsx4(isVisibleBeneath,wasVisibleBeneath){let[highestFullyRenderedScreenIndex,index]=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}})" };
let closure_22 = { code: "(function MainTabsChannelScreenStackTsx5(){let[highestFullyRenderedScreenIndex,index]=this.__closure;if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}})" };
let closure_23 = { code: "(function MainTabsChannelScreenStackTsx6(){let[enabled,highestFullyRenderedScreenIndex,index]=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;})" };
let closure_25 = react.memo(function FirstChannelScreen(isActive) {
  let channelId;
  let containerWidth;
  let focusChatPressableComponent;
  let frame;
  let freeze;
  let guildId;
  let index;
  let isDragging;
  let isNavigationTTIStackVisible;
  let items2;
  let maxWidth;
  let obj5;
  let obj6;
  let parentFreezeValue;
  let require;
  let showCreateThread;
  let str;
  let tmp12;
  let tmp13;
  let transitionState;
  let translateX;
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, frame: _slicedToArray, index } = isActive);
  ({ isDragging, translateX, containerWidth } = isActive);
  isActive = isActive.isActive;
  ({ maxWidth, transitionState } = isActive);
  const cleanup = isActive.cleanup;
  const highestFullyRenderedScreenIndex = isActive.highestFullyRenderedScreenIndex;
  ({ freeze, isNavigationTTIStackVisible, focusChatPressableComponent, parentFreezeValue } = isActive);
  let tmp2 = useThemeDefault();
  const tmp3 = closure_15();
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const width = useBaseAppContainerDimensionsDefault().width;
  let tmp4 = useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX);
  let tmp5 = require;
  let obj = useMainTabsChannelScreenStyles;
  const items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = obj.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, tmp4, parentFreezeValue);
  const effect = index.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      cleanup();
    }
  }, items);
  const items1 = [mainTabsChannelScreenStyles, , ];
  let tmp9 = null;
  const View = _modDef1652.View;
  const tmp8 = closure_14;
  if (null != containerWidth) {
    let obj2 = { width: containerWidth };
    tmp9 = obj2;
  }
  items1[1] = tmp9;
  let onyxContainerStyles;
  if (tmp2 === ThemeTypes.ONYX) {
    if (!isChatBesideChannelList) {
      onyxContainerStyles = tmp3.onyxContainerStyles;
    }
  }
  const obj3 = { style: items1, children: items2 };
  items1[2] = onyxContainerStyles;
  const obj4 = { freeze, children: closure_13(tmp12, obj5) };
  obj5 = { collapsable: false, style: isActive.absoluteFill, pointerEvents: str, accessibilityElementsHidden: tmp13, importantForAccessibility: "no-hide-descendants", children: closure_13(ChannelScreenNavigationTTIVisibility, obj6) };
  str = "box-only";
  const Freeze = react2.Freeze;
  tmp12 = transitionState;
  if (isActive) {
    str = "auto";
  }
  obj6 = {
    translateX,
    maxWidth,
    highestFullyRenderedScreenIndex,
    index,
    isStackVisible: isNavigationTTIStackVisible,
    alwaysVisible: null != containerWidth,
    children(isNavigationTTIVisible) {
      let obj2;
      let tmp5 = containerWidth;
      const Provider = reactDefault.Provider;
      const tmp4 = containerWidth;
      if (containerWidth == null) {
        tmp5 = width;
      }
      const obj = { value: tmp5, children: map1(StandaloneChannelScreenDefault, obj2) };
      obj2 = { guildId: require, channelId: importDefault, isActive, isNavigationTTIVisible, showCreateThread: dependencyMap, isNavigationScreen: null == tmp4, frame: _slicedToArray, screenIndex: index };
      return map1(Provider, obj);
    }
  };
  tmp13 = !isActive;
  items2 = [closure_13(Freeze, obj4), focusChatPressableComponent];
  return tmp8(View, obj3);
});
let closure_26 = { code: "(function MainTabsChannelScreenStackTsx7(){let[translateX]=this.__closure;return translateX.get()===0;})" };
let closure_27 = { code: "(function MainTabsChannelScreenStackTsx8(isFullyOpen,prev){let[index,mainTabsDisallowGesture]=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);})" };
let closure_28 = react.memo(function ChannelScreen(cleanup) {
  let Freeze;
  let Provider;
  let View;
  let channelId;
  let freeze;
  let gesture;
  let guildId;
  let index;
  let isDragging;
  let isNavigationTTIStackVisible;
  let maxWidth;
  let movePanel;
  let obj10;
  let obj7;
  let obj8;
  let obj9;
  let panelGestureContext;
  let parentFreezeValue;
  let require;
  let showCreateThread;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp22;
  let transitionState;
  let translateX;
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, transitionState } = cleanup);
  cleanup = cleanup.cleanup;
  const isActive = cleanup.isActive;
  ({ parentFreezeValue, index } = cleanup);
  const highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  let obj5;
  let ref2;
  let tmp2 = dependencyMap;
  ({ isNavigationTTIStackVisible, freeze } = cleanup);
  let tmp = importDefault;
  const tmp5 = require;
  const tmp3 = useThemeDefault();
  const tmp4 = closure_15();
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  let obj = Link;
  navigation = obj.useNavigation();
  const ref = cleanup.useRef(false);
  const items = [cleanup, navigation];
  const callback = cleanup.useCallback((arg0) => {
    const tmp = arg0;
    if (!tmp) {
      if (ref.current) {
        cleanup();
      } else {
        tmp2.current = true;
        navigation.goBack();
      }
    }
  }, items);
  const obj3 = { canDrag: transitionState !== native.TransitionStates.YEETED, onVisibilityChange: callback, onDragStart: ChatInputUtils.dismissKeyboard, startShown: false };
  const tmp8 = useMainTabsPanelsGestureDefault;
  const tmp8Result = tmp8(obj3);
  ({ isDragging, translateX, maxWidth } = tmp8Result);
  ({ gesture, panelGestureContext, movePanel } = tmp8Result);
  const tmp10 = useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX);
  const disallowGesture = cleanup.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture;
  const items1 = [closure_26, translateX];
  let c0;
  [tmp11, tmp12] = items1;
  const obj4 = _mod1652;
  class MainTabsChannelScreenStackTsx7 {
    constructor() {
      return 0 === _undefined.get();
    }
  }
  const items2 = [tmp12];
  MainTabsChannelScreenStackTsx7.__closure = items2;
  MainTabsChannelScreenStackTsx7.__workletHash = 4688173684036;
  MainTabsChannelScreenStackTsx7.__initData = tmp11;
  const items3 = [closure_27, index, disallowGesture];
  c0 = undefined;
  let c1;
  [tmp13, tmp14, tmp15] = items3;
  class MainTabsChannelScreenStackTsx8 {
    constructor(arg0, arg1) {
      const tmp = arg0 !== arg1 && 1 === c0;
      if (tmp) {
        const result = _undefined.set(arg0);
      }
    }
  }
  const items4 = [tmp14, tmp15];
  MainTabsChannelScreenStackTsx8.__closure = items4;
  MainTabsChannelScreenStackTsx8.__workletHash = 8338407226769;
  MainTabsChannelScreenStackTsx8.__initData = tmp13;
  const animatedReaction = obj4.useAnimatedReaction(MainTabsChannelScreenStackTsx7, MainTabsChannelScreenStackTsx8);
  obj5 = { cleanup, movePanel };
  ref2 = obj2.useRef(obj5);
  const effect = obj2.useEffect(() => {
    ref2.current = obj5;
  });
  const items5 = [transitionState];
  const effect1 = obj2.useEffect(() => {
    const current = ref2.current;
    const movePanel = current.movePanel;
    cleanup = current.cleanup;
    const tmp = transitionState;
    if (transitionState !== native.TransitionStates.MOUNTED) {
      if (tmp !== native.TransitionStates.ENTERED) {
        if (ref.current) {
          cleanup();
        } else {
          tmp5.current = true;
          movePanel(false, false, 0, true);
        }
      }
    }
    movePanel(true, false, 0, false);
  }, items5);
  const tmp5Result = useMainTabsChannelScreenStyles;
  const mainTabsChannelScreenStyles = tmp5Result.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, tmp10, parentFreezeValue);
  const obj6 = { gesture, children: closure_13(Provider, obj7) };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  obj7 = { value: panelGestureContext, children: closure_13(View, obj8) };
  Provider = MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext.Provider;
  const items6 = [mainTabsChannelScreenStyles, ];
  let onyxContainerStyles;
  View = _modDef1652.View;
  if (tmp3 === ThemeTypes.ONYX) {
    if (!isChatBesideChannelList) {
      onyxContainerStyles = tmp4.onyxContainerStyles;
    }
  }
  items6[1] = onyxContainerStyles;
  obj8 = { style: items6, accessibilityElementsHidden: tmp22, importantForAccessibility: "no-hide-descendants", children: closure_13(Freeze, obj9) };
  tmp22 = !isActive;
  obj9 = { freeze, children: closure_13(ChannelScreenNavigationTTIVisibility, obj10) };
  obj10 = {
    translateX,
    maxWidth,
    highestFullyRenderedScreenIndex,
    index,
    isStackVisible: isNavigationTTIStackVisible,
    children(isNavigationTTIVisible) {
      const obj = { guildId: require, channelId: importDefault, isActive, isNavigationTTIVisible, showCreateThread: dependencyMap, isNavigationScreen: true, frame: null, screenIndex: index };
      return map1(StandaloneChannelScreenDefault, obj);
    }
  };
  Freeze = react2.Freeze;
  return closure_13(GestureDetector, obj6);
});
let closure_30 = { code: "(function MainTabsChannelScreenStackTsx9(){let[translateX,maxWidth]=this.__closure;return translateX.get()===maxWidth;})" };
let closure_31 = { code: "(function MainTabsChannelScreenStackTsx10(value,prev){let[scheduleOnRN,setIsHidden]=this.__closure;if(value===prev)return;scheduleOnRN(setIsHidden,value);})" };
const memoResult = react.memo(function MainTabsChannelScreenStack(screens) {
  let ThemeContextProvider;
  let focusChatPressableComponent;
  let obj3;
  let obj4;
  let obj5;
  let shouldFreeze;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp34Result;
  let tmp35;
  let tmp37;
  let tmp5;
  let tmp6;
  let tmp9;
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  const screenStackVisible = screens.screenStackVisible;
  const navigationTTIStackVisible = screens.navigationTTIStackVisible;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  const highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  let memo;
  let closure_12;
  let first;
  let sharedValue;
  let ref;
  let ref2;
  let tmp2 = screenStackVisible;
  let tmp = screenStackActive;
  let obj = translateX;
  let tmp3 = screenStackActive(screenStackVisible[27])();
  let tmp7 = screens;
  [tmp5, tmp6] = navigationTTIStackVisible(translateX.useState(translateX.get() === maxWidth), 2);
  const tmp4 = navigationTTIStackVisible(translateX.useState(translateX.get() === maxWidth), 2);
  const tmp8 = screens(screenStackVisible[9]);
  const items = [closure_30, translateX, maxWidth];
  let c0;
  let c1;
  [tmp9, tmp10, tmp11] = items;
  class MainTabsChannelScreenStackTsx9 {
    constructor() {
      return _undefined.get() === c1;
    }
  }
  const items1 = [tmp10, tmp11];
  MainTabsChannelScreenStackTsx9.__closure = items1;
  MainTabsChannelScreenStackTsx9.__workletHash = 2670211334166;
  MainTabsChannelScreenStackTsx9.__initData = tmp9;
  const items2 = [closure_31, , ];
  const useAnimatedReaction = tmp8.useAnimatedReaction;
  items2[1] = tmp7(tmp2[10]).scheduleOnRN;
  items2[2] = tmp6;
  c0 = undefined;
  c1 = undefined;
  [tmp12, tmp13, tmp14] = items2;
  class MainTabsChannelScreenStackTsx10 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items3 = [tmp13, tmp14];
  MainTabsChannelScreenStackTsx10.__closure = items3;
  MainTabsChannelScreenStackTsx10.__workletHash = 1097722346952;
  MainTabsChannelScreenStackTsx10.__initData = tmp12;
  const animatedReaction = useAnimatedReaction(MainTabsChannelScreenStackTsx9, MainTabsChannelScreenStackTsx10);
  const items4 = [screens];
  memo = obj.useMemo(() => {
    const atResult = screens.at(-1);
    let type;
    if (atResult != null) {
      type = atResult.type;
    }
    let channelId = null;
    if (type === useChannelScreensFromNavigation.ChannelScreenType.DEFAULT) {
      channelId = atResult.channelId;
    }
    return channelId;
  }, items4);
  const items5 = [screenStackVisible, memo];
  const effect = obj.useEffect(() => {
    let tmp2 = null;
    const tmp = setVisibleChannelScreen;
    if (screenStackVisible) {
      tmp2 = memo;
    }
    tmp(tmp2);
  }, items5);
  const effect1 = obj.useEffect(() => () => focusChatPressableComponent(null), []);
  const items6 = [memo];
  const effect2 = obj.useEffect(() => {
    const MediaPlayerManager = isDragging.MediaPlayerManager;
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
  }, items6);
  const tmp20 = tmp(tmp2[29])();
  closure_12 = tmp20;
  first = screens[0];
  if (shouldFreeze) {
    shouldFreeze = tmp5;
  }
  if (shouldFreeze) {
    shouldFreeze = null == first || first.type !== tmp7(tmp2[28]).ChannelScreenType.DEFAULT;
    const tmp23 = null == first || first.type !== tmp7(tmp2[28]).ChannelScreenType.DEFAULT;
  }
  if (shouldFreeze) {
    shouldFreeze = !screens.some((channelId) => closure_12.includes(channelId.channelId));
  }
  let tmp7Result = tmp7(tmp2[9]);
  sharedValue = tmp7Result.useSharedValue(0);
  const items7 = [shouldFreeze, sharedValue];
  const effect3 = obj.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue.set(sharedValue.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items7);
  const items8 = [screens.length, tmp20, focusChatPressableComponent, isDragging, translateX, firstScreenWidth, firstScreenFrame, maxWidth, sharedValue, screenStackActive, navigationTTIStackVisible, highestFullyRenderedScreenIndex];
  let channelId;
  const callback = obj.useCallback((arg0, channelId, transitionState, cleanup) => {
    let showCreateThread;
    let showCreateThread2;
    let tmp14;
    let tmp18;
    let tmp5;
    const NumberResult = Number(arg0);
    if (0 === NumberResult) {
      const obj = { guildId: null, channelId: null, showCreateThread: showCreateThread2, focusChatPressableComponent, index: NumberResult, transitionState, cleanup, isDragging, translateX, isActive: tmp14, isNavigationTTIStackVisible: navigationTTIStackVisible, freeze: tmp18, containerWidth: firstScreenWidth, frame: firstScreenFrame, parentFreezeValue: sharedValue, maxWidth, highestFullyRenderedScreenIndex };
      ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = channelId);
      if (showCreateThread2 == null) {
        showCreateThread2 = false;
      }
      tmp14 = screenStackActive && NumberResult === screens.length - 1;
      tmp18 = NumberResult < screens.length - 2 && !closure_12.includes(channelId.channelId);
      const obj2 = { screen: channelId, children: map1(closure_25, obj, arg0) };
      map1(closure_25, obj, arg0);
      return map1(MainTabsBackgroundChat.BackgroundChatPortal, obj2, arg0);
    } else {
      const obj5 = { guildId: null, channelId: null, showCreateThread, index: NumberResult, transitionState, parentFreezeValue: sharedValue, cleanup, isActive: NumberResult === screens.length - 1, isNavigationTTIStackVisible: navigationTTIStackVisible, freeze: tmp5, highestFullyRenderedScreenIndex };
      ({ guildId: obj3.guildId, channelId: obj3.channelId, showCreateThread } = channelId);
      const tmp29 = map1;
      const tmp30 = closure_28;
      if (showCreateThread == null) {
        showCreateThread = false;
      }
      tmp5 = NumberResult < screens.length - 2 && !closure_12.includes(channelId.channelId);
      return tmp29(tmp30, obj5, arg0);
    }
  }, items8);
  const useRef = obj.useRef;
  if (first != null) {
    channelId = first.channelId;
  }
  if (channelId == null) {
    channelId = null;
  }
  ref = useRef(channelId);
  ref2 = obj.useRef(null);
  let type;
  const useEffect = obj.useEffect;
  if (first != null) {
    type = first.type;
  }
  const items9 = [type, ];
  let channelId1;
  if (first != null) {
    channelId1 = first.channelId;
  }
  items9[1] = channelId1;
  const effect4 = useEffect(() => {
    let obj3;
    let type;
    if (first != null) {
      type = tmp.type;
    }
    const tmp3 = null != type && ref2.current !== tmp.type;
    if (tmp3) {
      ref2.current = first.type;
      if (first.channelId === ref.current) {
        let isChatLockedOpen = tmp.type !== useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
        const tmp7 = require;
        if (!isChatLockedOpen) {
          const tmp7Result = tmp7(5327);
          isChatLockedOpen = tmp7Result.getChatLayout().isChatLockedOpen;
        }
        if (!isChatLockedOpen) {
          const obj = { type: "TRY_ACK", location: obj3, channelId: first.channelId };
          obj3 = { section: unpackModuleId.CHANNEL, object: firstScreenFrame.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: firstScreenWidth.ACK_AUTOMATIC };
          const obj2 = DispatcherDefault;
          obj2.dispatch(obj);
        }
      } else {
        tmp6.current = first.channelId;
      }
    }
  }, items9);
  const tmp7Result2 = tmp7(tmp2[32]);
  tmp7Result2.freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    let obj2 = { freeze: shouldFreeze, children: first(tmp35, obj3) };
    obj3 = { collapsable: false, style: maxWidth.absoluteFill, pointerEvents: "box-none", accessibilityElementsHidden: tmp37, importantForAccessibility: "no-hide-descendants", children: first(ThemeContextProvider, obj4) };
    tmp37 = !screenStackActive;
    const Freeze = tmp7(tmp2[19]).Freeze;
    obj4 = { gradient: tmp3, children: first(tmp7(tmp2[18]).TransitionGroup, obj5) };
    ThemeContextProvider = tmp7(tmp2[18]).ThemeContextProvider;
    obj5 = { items: screens, renderItem: callback, getItemKey: getKey };
    tmp34Result = tmp34(Freeze, obj2);
    tmp35 = highestFullyRenderedScreenIndex;
  } else {
    let showCreateThread;
    if (first != null) {
      showCreateThread = first.showCreateThread;
    }
    tmp34Result = null;
  }
  return tmp34Result;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default memoResult;

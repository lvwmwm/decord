// Module ID: 18547
// Function ID: 18548
// Name: MainTabsChannelScreenStack
// Dependencies: [32, 19, 17, 18548, 9792, 1072, 1083, 21, 5009, 5090, 18549, 18551, 5588, 5248, 5196, 5198, 18552, 5075, 5091, 5984, 11521, 18553, 1499, 18000, 5202, 12056, 5298, 5189, 17999, 18768, 572, 5203, 2]

// Module 18547 (MainTabsChannelScreenStack)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants2 from "Constants" /* 1083 */;
import Link from "Link" /* 1499 */;
import native from "native" /* 5075 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 5091 */;
import useChatLayoutDefault from "useChatLayout" /* 5196 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5198 */;
import ChatInputUtils from "ChatInputUtils" /* 5202 */;
import useThemeDefault from "useTheme" /* 5248 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import useMountEffect from "useMountEffect" /* 5588 */;
import react_native from "react-native" /* 9792 */;
import reactDefault from "react" /* 11521 */;
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 12056 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 17999 */;
import useMainTabsPanelsGestureDefault from "useMainTabsPanelsGesture" /* 18000 */;
import VisibleChannelScreenStore from "VisibleChannelScreenStore" /* 18548 */;
import navigationTTIEnabled from "navigationTTIEnabled" /* 18549 */;
import HideCoveredChannelsExperimentDefault from "HideCoveredChannelsExperiment" /* 18551 */;
import useMainTabsChannelScreenStyles from "useMainTabsChannelScreenStyles" /* 18552 */;
import StandaloneChannelScreenDefault from "StandaloneChannelScreen" /* 18553 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;
let navigation;

let c10;
let c9;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let tmp4;
let unpackModuleId;
const react2 = tmp4(5984);
function EnabledChannelScreenNavigationTTIVisibility(children) {
  let alwaysVisible;
  let highestFullyRenderedScreenIndex;
  let index;
  let isStackVisible;
  let maxWidth;
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
  let tmp = index(isStackVisible.useState(() => {
    let tmp = isStackVisible && highestFullyRenderedScreenIndex.get() <= index;
    if (tmp) {
      tmp = alwaysVisible || translateX.get() < maxWidth;
      const tmp4 = alwaysVisible || translateX.get() < maxWidth;
    }
    return tmp;
  }), 2);
  let closure_6 = tmp3;
  const first = tmp[0];
  let obj = translateX(highestFullyRenderedScreenIndex[9]);
  const fn = function b() {
    let tmp = isStackVisible && highestFullyRenderedScreenIndex.get() <= index;
    if (tmp) {
      tmp = alwaysVisible || translateX.get() < maxWidth;
      const tmp4 = alwaysVisible || translateX.get() < maxWidth;
    }
    return tmp;
  };
  fn.__closure = { isStackVisible, highestFullyRenderedScreenIndex, index, alwaysVisible, translateX, maxWidth };
  fn.__workletHash = 15384871148575;
  fn.__initData = __initData;
  class S {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_6)(arg0);
      }
    }
  }
  S.__closure = { runOnJS: translateX(highestFullyRenderedScreenIndex[9]).runOnJS, setIsVisible: tmp[1] };
  S.__workletHash = 9656458788554;
  S.__initData = __initData2;
  ({ runOnJS: translateX(highestFullyRenderedScreenIndex[9]).runOnJS, setIsVisible: tmp[1] });
  const animatedReaction = obj.useAnimatedReaction(fn, S);
  return children(first);
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
function getKey(index) {
  return String(index.index);
}
({ NativeModules: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native2);
const setVisibleChannelScreen = VisibleChannelScreenStore.setVisibleChannelScreen;
const ONYX_BORDER_WIDTH = react_native.ONYX_BORDER_WIDTH;
({ AnalyticsObjectTypes: c9, AnalyticsObjects: c10, AnalyticsSections: unpackModuleId } = Constants);
let ThemeTypes = Constants2.ThemeTypes;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = { onyxContainerStyles: { marginTop: -ONYX_BORDER_WIDTH, marginLeft: -ONYX_BORDER_WIDTH } };
let closure_15 = createStyles.createStyles(obj);
const __initData = { code: "function MainTabsChannelScreenStackTsx1(){const{isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth}=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);}" };
const __initData2 = { code: "function MainTabsChannelScreenStackTsx2(visible,wasVisible){const{runOnJS,setIsVisible}=this.__closure;if(visible===wasVisible)return;runOnJS(setIsVisible)(visible);}" };
const __initData3 = { code: "function MainTabsChannelScreenStackTsx3(){const{translateX}=this.__closure;return translateX.get()>0;}" };
const __initData4 = { code: "function MainTabsChannelScreenStackTsx4(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}" };
const __initData5 = { code: "function MainTabsChannelScreenStackTsx5(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}" };
let closure_23 = react.memo(function FirstChannelScreen(isActive) {
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
  let obj10;
  let obj9;
  let parentFreezeValue;
  let require;
  let showCreateThread;
  let str;
  let tmp15;
  let tmp16;
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
  let obj = HideCoveredChannelsExperimentDefault;
  const enabled = obj.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  let tmp4 = require;
  let obj2 = ReanimatedRexport;
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 9746145547258;
  fn.__initData = __initData3;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const value = highestFullyRenderedScreenIndex.get();
      if (arg0) {
        if (value >= index) {
          const result = obj.set(tmp2 - 1);
        }
      } else if (value < index) {
        const result1 = obj.set(tmp2);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 4785713026663;
  fn2.__initData = __initData4;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  const obj3 = useMountEffect;
  const unmountEffect = obj3.useUnmountEffect(() => {
    const obj = highestFullyRenderedScreenIndex;
    if (highestFullyRenderedScreenIndex.get() >= index) {
      const result = obj.set(tmp - 1);
    }
  });
  const fn3 = function u() {
    const tmp = enabled && highestFullyRenderedScreenIndex.get() > index;
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 13408221386604;
  fn3.__initData = __initData5;
  const obj4 = ReanimatedRexport;
  const derivedValue = obj4.useDerivedValue(fn3);
  const items = [cleanup, transitionState];
  const obj5 = useMainTabsChannelScreenStyles;
  const mainTabsChannelScreenStyles = obj5.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, derivedValue, parentFreezeValue);
  const effect = index.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      cleanup();
    }
  }, items);
  const items1 = [mainTabsChannelScreenStyles, , ];
  let tmp12 = null;
  const tmp10 = closure_14;
  const tmp11 = REAWorkaroundViewDefault;
  if (null != containerWidth) {
    tmp12 = { width: containerWidth };
    const obj6 = { width: containerWidth };
  }
  items1[1] = tmp12;
  let onyxContainerStyles;
  if (tmp2 === ThemeTypes.ONYX) {
    if (!isChatBesideChannelList) {
      onyxContainerStyles = tmp3.onyxContainerStyles;
    }
  }
  const obj7 = { style: items1, children: items2 };
  items1[2] = onyxContainerStyles;
  const obj8 = { freeze, children: closure_13(tmp15, obj9) };
  obj9 = { collapsable: false, style: isActive.absoluteFill, pointerEvents: str, accessibilityElementsHidden: tmp16, importantForAccessibility: "no-hide-descendants", children: closure_13(ChannelScreenNavigationTTIVisibility, obj10) };
  str = "box-only";
  const Freeze = react2.Freeze;
  tmp15 = transitionState;
  if (isActive) {
    str = "auto";
  }
  obj10 = {
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
  tmp16 = !isActive;
  items2 = [closure_13(Freeze, obj8), focusChatPressableComponent];
  return tmp10(tmp11, obj7);
});
const __initData6 = { code: "function MainTabsChannelScreenStackTsx6(){const{translateX}=this.__closure;return translateX.get()===0;}" };
const __initData7 = { code: "function MainTabsChannelScreenStackTsx7(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}" };
let closure_26 = react.memo(function ChannelScreen(cleanup) {
  let Freeze;
  let Provider;
  let channelId;
  let freeze;
  let gesture;
  let guildId;
  let isDragging;
  let isNavigationTTIStackVisible;
  let movePanel;
  let obj11;
  let obj12;
  let obj13;
  let obj14;
  let panelGestureContext;
  let parentFreezeValue;
  let ref2;
  let require;
  let showCreateThread;
  let tmp17;
  let tmp19;
  let transitionState;
  let translateX;
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, transitionState } = cleanup);
  cleanup = cleanup.cleanup;
  const isActive = cleanup.isActive;
  const index = cleanup.index;
  const highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  translateX = undefined;
  let obj8;
  ThemeTypes = undefined;
  ({ isNavigationTTIStackVisible, freeze, parentFreezeValue } = cleanup);
  let tmp = dependencyMap;
  let tmp2 = useThemeDefault();
  const tmp3 = closure_15();
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
  const obj2 = { canDrag: transitionState !== native.TransitionStates.YEETED, onVisibilityChange: callback, onDragStart: ChatInputUtils.dismissKeyboard, startShown: false };
  const tmp7 = useMainTabsPanelsGestureDefault;
  const tmp7Result = tmp7(obj2);
  ({ isDragging, translateX } = tmp7Result);
  const maxWidth = tmp7Result.maxWidth;
  ({ gesture, panelGestureContext, movePanel } = tmp7Result);
  const obj3 = HideCoveredChannelsExperimentDefault;
  const enabled = obj3.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 9746145547258;
  fn.__initData = __initData3;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const value = highestFullyRenderedScreenIndex.get();
      if (arg0) {
        if (value >= index) {
          const result = obj.set(tmp2 - 1);
        }
      } else if (value < index) {
        const result1 = obj.set(tmp2);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 4785713026663;
  fn2.__initData = __initData4;
  const obj4 = ReanimatedRexport;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const obj5 = useMountEffect;
  const unmountEffect = obj5.useUnmountEffect(() => {
    const obj = highestFullyRenderedScreenIndex;
    if (highestFullyRenderedScreenIndex.get() >= index) {
      const result = obj.set(tmp - 1);
    }
  });
  const fn3 = function u() {
    const tmp = enabled && highestFullyRenderedScreenIndex.get() > index;
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 13408221386604;
  fn3.__initData = __initData5;
  const obj6 = ReanimatedRexport;
  const derivedValue = obj6.useDerivedValue(fn3);
  const disallowGesture = cleanup.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture;
  const obj7 = ReanimatedRexport;
  class I {
    constructor() {
      return 0 === translateX.get();
    }
  }
  I.__closure = { translateX };
  I.__workletHash = 16117851266396;
  I.__initData = __initData6;
  const fn4 = function _(arg0, arg1) {
    const tmp = arg0 !== arg1 && 1 === index;
    if (tmp) {
      const result = disallowGesture.set(arg0);
    }
  };
  fn4.__closure = { index, mainTabsDisallowGesture: disallowGesture };
  fn4.__workletHash = 959541115719;
  fn4.__initData = __initData7;
  const animatedReaction1 = obj7.useAnimatedReaction(I, fn4);
  obj8 = { cleanup, movePanel };
  ThemeTypes = cleanup.useRef(obj8);
  const effect = cleanup.useEffect(() => {
    ref2.current = obj8;
  });
  const items1 = [transitionState];
  const effect1 = cleanup.useEffect(() => {
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
  }, items1);
  const obj9 = useMainTabsChannelScreenStyles;
  const mainTabsChannelScreenStyles = obj9.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, derivedValue, parentFreezeValue);
  const obj10 = { gesture, children: closure_13(Provider, obj11) };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  obj11 = { value: panelGestureContext, children: closure_13(tmp17, obj12) };
  Provider = MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext.Provider;
  const items2 = [mainTabsChannelScreenStyles, ];
  let onyxContainerStyles;
  tmp17 = REAWorkaroundViewDefault;
  if (tmp2 === ThemeTypes.ONYX) {
    if (!isChatBesideChannelList) {
      onyxContainerStyles = tmp3.onyxContainerStyles;
    }
  }
  items2[1] = onyxContainerStyles;
  obj12 = { style: items2, accessibilityElementsHidden: tmp19, importantForAccessibility: "no-hide-descendants", children: closure_13(Freeze, obj13) };
  tmp19 = !isActive;
  obj13 = { freeze, children: closure_13(ChannelScreenNavigationTTIVisibility, obj14) };
  obj14 = {
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
  return closure_13(GestureDetector, obj10);
});
const __initData8 = { code: "function MainTabsChannelScreenStackTsx8(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
const __initData9 = { code: "function MainTabsChannelScreenStackTsx9(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}" };
const memoResult = react.memo(function MainTabsChannelScreenStack(screens) {
  let ThemeContextProvider;
  let focusChatPressableComponent;
  let obj5;
  let obj6;
  let obj7;
  let shouldFreeze;
  let tmp26Result;
  let tmp27;
  let tmp29;
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
  let closure_13;
  let first1;
  let sharedValue;
  let ref;
  let ref2;
  let tmp = screenStackVisible;
  let obj = translateX;
  let tmp2 = screenStackActive(screenStackVisible[27])();
  let tmp3 = navigationTTIStackVisible(translateX.useState(translateX.get() === maxWidth), 2);
  let tmp5 = tmp3[1];
  let closure_11 = tmp5;
  const tmp6 = screens;
  const first = tmp3[0];
  let obj2 = screens(screenStackVisible[9]);
  class R {
    constructor() {
      return translateX.get() === maxWidth;
    }
  }
  R.__closure = { translateX, maxWidth };
  R.__workletHash = 8590655221454;
  R.__initData = __initData8;
  class E {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_11)(arg0);
      }
    }
  }
  let obj3 = { runOnJS: screens(screenStackVisible[9]).runOnJS, setIsHidden: tmp5 };
  E.__closure = obj3;
  E.__workletHash = 2291224972388;
  E.__initData = __initData9;
  const animatedReaction = obj2.useAnimatedReaction(R, E);
  const items = [screens];
  memo = translateX.useMemo(() => {
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
  }, items);
  const items1 = [screenStackVisible, memo];
  const effect = translateX.useEffect(() => {
    let tmp2 = null;
    const tmp = setVisibleChannelScreen;
    if (screenStackVisible) {
      tmp2 = memo;
    }
    tmp(tmp2);
  }, items1);
  const effect1 = translateX.useEffect(() => () => focusChatPressableComponent(null), []);
  const items2 = [memo];
  const effect2 = translateX.useEffect(() => {
    const MediaPlayerManager = isDragging.MediaPlayerManager;
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
  }, items2);
  const tmp12 = screenStackActive(screenStackVisible[29])();
  closure_13 = tmp12;
  first1 = screens[0];
  if (shouldFreeze) {
    shouldFreeze = first;
  }
  if (shouldFreeze) {
    let tmp15 = null == first1 || first1.type !== tmp6(tmp[28]).ChannelScreenType.DEFAULT;
    shouldFreeze = tmp15;
  }
  if (shouldFreeze) {
    shouldFreeze = !screens.some((channelId) => closure_13.includes(channelId.channelId));
  }
  const tmp6Result = tmp6(tmp[9]);
  sharedValue = tmp6Result.useSharedValue(0);
  const items3 = [shouldFreeze, sharedValue];
  const effect3 = obj.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue.set(sharedValue.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items3);
  const items4 = [screens.length, tmp12, focusChatPressableComponent, isDragging, translateX, firstScreenWidth, firstScreenFrame, maxWidth, sharedValue, screenStackActive, navigationTTIStackVisible, highestFullyRenderedScreenIndex];
  let channelId;
  const callback = obj.useCallback((arg0, channelId, transitionState, cleanup) => {
    let showCreateThread;
    let showCreateThread2;
    let tmp15;
    let tmp19;
    let tmp26Result;
    let tmp5;
    const NumberResult = Number(arg0);
    if (0 === NumberResult) {
      const obj = { guildId: null, channelId: null, showCreateThread: showCreateThread2, focusChatPressableComponent, index: NumberResult, transitionState, cleanup, isDragging, translateX, isActive: tmp15, isNavigationTTIStackVisible: navigationTTIStackVisible, freeze: tmp19, containerWidth: firstScreenWidth, frame: firstScreenFrame, parentFreezeValue: sharedValue, maxWidth, highestFullyRenderedScreenIndex };
      ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = channelId);
      const tmp10 = closure_23;
      const tmp9 = map1;
      if (showCreateThread2 == null) {
        showCreateThread2 = false;
      }
      tmp15 = screenStackActive && NumberResult === screens.length - 1;
      tmp19 = NumberResult < screens.length - 2 && !map1.includes(channelId.channelId);
      tmp26Result = tmp9(tmp10, obj, arg0);
    } else {
      const obj3 = { guildId: null, channelId: null, showCreateThread, index: NumberResult, transitionState, parentFreezeValue: sharedValue, cleanup, isActive: NumberResult === screens.length - 1, isNavigationTTIStackVisible: navigationTTIStackVisible, freeze: tmp5, highestFullyRenderedScreenIndex };
      ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = channelId);
      const tmp26 = map1;
      const tmp27 = closure_26;
      if (showCreateThread == null) {
        showCreateThread = false;
      }
      tmp5 = NumberResult < screens.length - 2 && !map1.includes(channelId.channelId);
      tmp26Result = tmp26(tmp27, obj3, arg0);
    }
    return tmp26Result;
  }, items4);
  const useRef = obj.useRef;
  if (first1 != null) {
    channelId = first1.channelId;
  }
  if (channelId == null) {
    channelId = null;
  }
  ref = useRef(channelId);
  ref2 = obj.useRef(null);
  let type;
  const useEffect = obj.useEffect;
  if (first1 != null) {
    type = first1.type;
  }
  const items5 = [type, ];
  let channelId1;
  if (first1 != null) {
    channelId1 = first1.channelId;
  }
  items5[1] = channelId1;
  const effect4 = useEffect(() => {
    let obj3;
    let type;
    if (first1 != null) {
      type = tmp.type;
    }
    const tmp3 = null != type && ref2.current !== tmp.type;
    if (tmp3) {
      ref2.current = first1.type;
      if (first1.channelId === ref.current) {
        let isChatLockedOpen = tmp.type !== useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
        const tmp7 = require;
        if (!isChatLockedOpen) {
          const tmp7Result = tmp7(5196);
          isChatLockedOpen = tmp7Result.getChatLayout().isChatLockedOpen;
        }
        if (!isChatLockedOpen) {
          const obj = { type: "TRY_ACK", location: obj3, channelId: first1.channelId };
          obj3 = { section: unpackModuleId.CHANNEL, object: firstScreenFrame.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: firstScreenWidth.ACK_AUTOMATIC };
          const obj2 = DispatcherDefault;
          obj2.dispatch(obj);
        }
      } else {
        tmp6.current = first1.channelId;
      }
    }
  }, items5);
  const tmp6Result2 = tmp6(tmp[31]);
  tmp6Result2.freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    let tmp26 = closure_13;
    const obj4 = { freeze: shouldFreeze, children: tmp26(tmp27, obj5) };
    obj5 = { collapsable: false, style: maxWidth.absoluteFill, pointerEvents: "box-none", accessibilityElementsHidden: tmp29, importantForAccessibility: "no-hide-descendants", children: tmp26(ThemeContextProvider, obj6) };
    tmp29 = !screenStackActive;
    const Freeze = tmp6(tmp[19]).Freeze;
    tmp27 = highestFullyRenderedScreenIndex;
    obj6 = { gradient: tmp2, children: tmp26(tmp6(tmp[17]).TransitionGroup, obj7) };
    ThemeContextProvider = tmp6(tmp[17]).ThemeContextProvider;
    obj7 = { items: screens, renderItem: callback, getItemKey: getKey };
    tmp26Result = tmp26(Freeze, obj4);
  } else {
    let showCreateThread;
    if (first1 != null) {
      showCreateThread = first1.showCreateThread;
    }
    tmp26Result = null;
  }
  return tmp26Result;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default memoResult;

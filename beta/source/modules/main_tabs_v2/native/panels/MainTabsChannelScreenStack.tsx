// Module ID: 16170
// Function ID: 16171
// Name: MainTabsChannelScreenStack
// Dependencies: [32, 19, 17, 8499, 7289, 1074, 8500, 1085, 21, 4836, 4566, 16171, 16172, 5298, 4767, 4695, 16173, 4540, 4567, 5234, 16174, 1486, 15631, 4701, 15635, 6073, 4688, 15630, 8751, 573, 4702, 2]

// Module 16170 (MainTabsChannelScreenStack)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants2 from "Constants" /* 1085 */;
import Link from "Link" /* 1486 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4567 */;
import useChatLayoutDefault from "useChatLayout" /* 4695 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import useThemeDefault from "useTheme" /* 4767 */;
import useMountEffect from "useMountEffect" /* 5298 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import react_native from "react-native" /* 7289 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8751 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 15630 */;
import useMainTabsPanelsGestureDefault from "useMainTabsPanelsGesture" /* 15631 */;
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 15635 */;
import navigationTTIEnabled from "navigationTTIEnabled" /* 16171 */;
import HideCoveredChannelsExperimentDefault from "HideCoveredChannelsExperiment" /* 16172 */;
import useMainTabsChannelScreenStyles from "useMainTabsChannelScreenStyles" /* 16173 */;
import StandaloneChannelScreenDefault from "StandaloneChannelScreen" /* 16174 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import FramesStore from "FramesStore" /* 8499 */;
import Constants from "Constants" /* 1074 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;
let constants, navigation;

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let tmp4;
let unpackModuleId;
const react2 = tmp4(5234);
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
  let obj = translateX(highestFullyRenderedScreenIndex[10]);
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
  S.__closure = { runOnJS: translateX(highestFullyRenderedScreenIndex[10]).runOnJS, setIsVisible: tmp[1] };
  S.__workletHash = 9656458788554;
  S.__initData = __initData2;
  ({ runOnJS: translateX(highestFullyRenderedScreenIndex[10]).runOnJS, setIsVisible: tmp[1] });
  const animatedReaction = obj.useAnimatedReaction(fn, S);
  return children(first);
}
function ChannelScreenNavigationTTIVisibility(children) {
  let childrenResult;
  const obj = navigationTTIEnabled;
  if (obj.isNavigationTTIEnabled()) {
    const obj2 = {};
    const merged = Object.assign(children);
    childrenResult = closure_15(EnabledChannelScreenNavigationTTIVisibility, obj2);
  } else {
    childrenResult = children.children(false);
  }
  return childrenResult;
}
function getKey(index) {
  return String(index.index);
}
({ NativeModules: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native2);
const ONYX_BORDER_WIDTH = react_native.ONYX_BORDER_WIDTH;
({ AnalyticsObjectTypes: c9, AnalyticsObjects: c10, AnalyticsSections: unpackModuleId } = Constants);
({ FrameIntent: closure_12, getChannelIdForSurface: map1 } = FramesConstants);
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let obj = { onyxContainerStyles: { marginTop: -ONYX_BORDER_WIDTH, marginLeft: -ONYX_BORDER_WIDTH } };
let closure_17 = createStyles.createStyles(obj);
const __initData = { code: "function MainTabsChannelScreenStackTsx1(){const{isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth}=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);}" };
const __initData2 = { code: "function MainTabsChannelScreenStackTsx2(visible,wasVisible){const{runOnJS,setIsVisible}=this.__closure;if(visible===wasVisible)return;runOnJS(setIsVisible)(visible);}" };
const __initData3 = { code: "function MainTabsChannelScreenStackTsx3(){const{translateX}=this.__closure;return translateX.get()>0;}" };
const __initData4 = { code: "function MainTabsChannelScreenStackTsx4(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}" };
const __initData5 = { code: "function MainTabsChannelScreenStackTsx5(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}" };
let closure_25 = react.memo(function FirstChannelScreen(cleanup) {
  let channelId;
  let containerWidth;
  let focusChatPressableComponent;
  let frame;
  let freeze;
  let guildId;
  let index;
  let isActive;
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
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, frame: _slicedToArray, index } = cleanup);
  ({ isDragging, translateX, containerWidth } = cleanup);
  ({ isActive, maxWidth, transitionState } = cleanup);
  cleanup = cleanup.cleanup;
  const highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  ({ freeze, isNavigationTTIStackVisible, focusChatPressableComponent, parentFreezeValue } = cleanup);
  const tmp2 = useThemeDefault();
  const tmp3 = closure_17();
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  let obj = HideCoveredChannelsExperimentDefault;
  const enabled = obj.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
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
  const obj2 = ReanimatedRexport;
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
  const tmp10 = closure_16;
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
  const obj8 = { freeze, children: closure_15(tmp15, obj9) };
  obj9 = { collapsable: false, style: transitionState.absoluteFill, pointerEvents: str, accessibilityElementsHidden: tmp16, importantForAccessibility: "no-hide-descendants", children: closure_15(ChannelScreenNavigationTTIVisibility, obj10) };
  str = "box-only";
  const Freeze = react2.Freeze;
  tmp15 = cleanup;
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
      const obj = { guildId: require, channelId: importDefault, isNavigationTTIVisible, showCreateThread: dependencyMap, isNavigationScreen: null == containerWidth, frame: _slicedToArray, screenIndex: index };
      return closure_15(StandaloneChannelScreenDefault, obj);
    }
  };
  tmp16 = !isActive;
  items2 = [closure_15(Freeze, obj8), focusChatPressableComponent];
  return tmp10(tmp11, obj7);
});
const __initData6 = { code: "function MainTabsChannelScreenStackTsx6(){const{translateX}=this.__closure;return translateX.get()===0;}" };
const __initData7 = { code: "function MainTabsChannelScreenStackTsx7(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}" };
let closure_28 = react.memo(function ChannelScreen(cleanup) {
  let Freeze;
  let Provider;
  let channelId;
  let freeze;
  let gesture;
  let guildId;
  let index;
  let isActive;
  let isDragging;
  let isNavigationTTIStackVisible;
  let movePanel;
  let obj11;
  let obj12;
  let obj13;
  let obj14;
  let panelGestureContext;
  let parentFreezeValue;
  let require;
  let showCreateThread;
  let tmp17;
  let tmp19;
  let transitionState;
  let translateX;
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, transitionState } = cleanup);
  cleanup = cleanup.cleanup;
  ({ isActive, index } = cleanup);
  const highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  translateX = undefined;
  ({ isNavigationTTIStackVisible, freeze, parentFreezeValue } = cleanup);
  let tmp = dependencyMap;
  let tmp2 = useThemeDefault();
  const tmp3 = closure_17();
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  let obj = Link;
  navigation = obj.useNavigation();
  const ref = cleanup.useRef(false);
  let items = [cleanup, navigation];
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
  const fn4 = function _() {
    return 0 === translateX.get();
  };
  fn4.__closure = { translateX };
  fn4.__workletHash = 16117851266396;
  fn4.__initData = __initData6;
  const fn5 = function y(arg0, arg1) {
    const tmp = arg0 !== arg1 && 1 === index;
    if (tmp) {
      const result = disallowGesture.set(arg0);
    }
  };
  fn5.__closure = { index, mainTabsDisallowGesture: disallowGesture };
  fn5.__workletHash = 959541115719;
  fn5.__initData = __initData7;
  const obj7 = ReanimatedRexport;
  const animatedReaction1 = obj7.useAnimatedReaction(fn4, fn5);
  const obj8 = { cleanup, movePanel };
  const ref2 = cleanup.useRef(obj8);
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
  const obj10 = { gesture, children: closure_15(Provider, obj11) };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  obj11 = { value: panelGestureContext, children: closure_15(tmp17, obj12) };
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
  obj12 = { style: items2, accessibilityElementsHidden: tmp19, importantForAccessibility: "no-hide-descendants", children: closure_15(Freeze, obj13) };
  tmp19 = !isActive;
  obj13 = { freeze, children: closure_15(ChannelScreenNavigationTTIVisibility, obj14) };
  obj14 = {
    translateX,
    maxWidth,
    highestFullyRenderedScreenIndex,
    index,
    isStackVisible: isNavigationTTIStackVisible,
    children(isNavigationTTIVisible) {
      const obj = { guildId: require, channelId: importDefault, isNavigationTTIVisible, showCreateThread: dependencyMap, isNavigationScreen: true, frame: null, screenIndex: index };
      return closure_15(StandaloneChannelScreenDefault, obj);
    }
  };
  Freeze = react2.Freeze;
  return closure_15(GestureDetector, obj10);
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
  let tmp24Result;
  let tmp25;
  let tmp27;
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  const navigationTTIStackVisible = screens.navigationTTIStackVisible;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  const highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  let memo;
  let first1;
  let sharedValue;
  let ref;
  let ref2;
  const tmp = navigationTTIStackVisible;
  let obj = isDragging;
  const tmp2 = screenStackActive(navigationTTIStackVisible[26])();
  let tmp3 = translateX(isDragging.useState(translateX.get() === maxWidth), 2);
  let tmp5 = tmp3[1];
  constants = tmp5;
  let tmp6 = screens;
  const first = tmp3[0];
  let obj2 = screens(navigationTTIStackVisible[10]);
  class R {
    constructor() {
      return translateX.get() === maxWidth;
    }
  }
  R.__closure = { translateX, maxWidth };
  R.__workletHash = 8590655221454;
  R.__initData = __initData8;
  const fn = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(constants)(arg0);
    }
  };
  let obj3 = { runOnJS: screens(navigationTTIStackVisible[10]).runOnJS, setIsHidden: tmp5 };
  fn.__closure = obj3;
  fn.__workletHash = 2291224972388;
  fn.__initData = __initData9;
  const animatedReaction = obj2.useAnimatedReaction(R, fn);
  const items = [screens];
  memo = isDragging.useMemo(() => {
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
  const items1 = [memo];
  const effect = isDragging.useEffect(() => {
    const MediaPlayerManager = maxWidth.MediaPlayerManager;
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
  }, items1);
  const items2 = [memo];
  const effect1 = isDragging.useEffect(() => {
    const allFrames = FramesStore.getAllFrames();
    const iter = allFrames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (nextResult.intent === first1.INLINE) {
        let tmp7 = map1(tmp3.surface);
        let tmp9 = null != tmp7;
        if (tmp9) {
          tmp9 = tmp8 !== memo;
        }
        if (tmp9) {
          let obj = FramesNativeManagerDefault;
          let leaveFrameResult = obj.leaveFrame(tmp3.id);
        }
      }
      continue;
    }
  }, items2);
  first1 = screens[0];
  if (shouldFreeze) {
    shouldFreeze = first;
  }
  if (shouldFreeze) {
    let tmp12 = null;
    let tmp13 = null == first1 || first1.type !== tmp6(tmp[27]).ChannelScreenType.DEFAULT;
    shouldFreeze = tmp13;
  }
  const tmp6Result = tmp6(tmp[10]);
  sharedValue = tmp6Result.useSharedValue(0);
  const items3 = [shouldFreeze, sharedValue];
  const effect2 = obj.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue.set(sharedValue.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items3);
  const items4 = [screens.length, focusChatPressableComponent, isDragging, translateX, firstScreenWidth, firstScreenFrame, maxWidth, sharedValue, screenStackActive, navigationTTIStackVisible, highestFullyRenderedScreenIndex];
  let channelId;
  const callback = obj.useCallback((arg0, arg1, transitionState, cleanup) => {
    let showCreateThread;
    let showCreateThread2;
    let tmp13;
    let tmp22Result;
    const NumberResult = Number(arg0);
    if (0 === NumberResult) {
      const obj = { guildId: null, channelId: null, showCreateThread: showCreateThread2, focusChatPressableComponent, index: NumberResult, transitionState, cleanup, isDragging, translateX, isActive: tmp13, isNavigationTTIStackVisible: navigationTTIStackVisible, freeze: NumberResult < screens.length - 2, containerWidth: firstScreenWidth, frame: firstScreenFrame, parentFreezeValue: sharedValue, maxWidth, highestFullyRenderedScreenIndex };
      ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = arg1);
      const tmp7 = closure_15;
      const tmp8 = closure_25;
      if (showCreateThread2 == null) {
        showCreateThread2 = false;
      }
      tmp13 = screenStackActive && NumberResult === screens.length - 1;
      tmp22Result = tmp7(tmp8, obj, arg0);
    } else {
      const obj3 = { guildId: null, channelId: null, showCreateThread, index: NumberResult, transitionState, parentFreezeValue: sharedValue, cleanup, isActive: NumberResult === screens.length - 1, isNavigationTTIStackVisible: navigationTTIStackVisible, freeze: NumberResult < screens.length - 2, highestFullyRenderedScreenIndex };
      ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = arg1);
      const tmp22 = closure_15;
      const tmp23 = closure_28;
      if (showCreateThread == null) {
        showCreateThread = false;
      }
      tmp22Result = tmp22(tmp23, obj3, arg0);
    }
    return tmp22Result;
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
  const effect3 = useEffect(() => {
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
          const tmp7Result = tmp7(4695);
          isChatLockedOpen = tmp7Result.getChatLayout().isChatLockedOpen;
        }
        if (!isChatLockedOpen) {
          const obj = { type: "TRY_ACK", location: obj3, channelId: first1.channelId };
          obj3 = { section: unpackModuleId.CHANNEL, object: constants.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: firstScreenFrame.ACK_AUTOMATIC };
          const obj2 = DispatcherDefault;
          obj2.dispatch(obj);
        }
      } else {
        tmp6.current = first1.channelId;
      }
    }
  }, items5);
  const tmp6Result2 = tmp6(tmp[30]);
  tmp6Result2.freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    const obj4 = { freeze: shouldFreeze, children: ref2(tmp25, obj5) };
    obj5 = { collapsable: false, style: highestFullyRenderedScreenIndex.absoluteFill, pointerEvents: "box-none", accessibilityElementsHidden: tmp27, importantForAccessibility: "no-hide-descendants", children: ref2(ThemeContextProvider, obj6) };
    tmp27 = !screenStackActive;
    const Freeze = tmp6(tmp[19]).Freeze;
    obj6 = { gradient: tmp2, children: ref2(tmp6(tmp[17]).TransitionGroup, obj7) };
    ThemeContextProvider = tmp6(tmp[17]).ThemeContextProvider;
    obj7 = { items: screens, renderItem: callback, getItemKey: getKey };
    tmp24Result = tmp24(Freeze, obj4);
    tmp25 = focusChatPressableComponent;
  } else {
    let showCreateThread;
    if (first1 != null) {
      showCreateThread = first1.showCreateThread;
    }
    tmp24Result = null;
  }
  return tmp24Result;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default memoResult;

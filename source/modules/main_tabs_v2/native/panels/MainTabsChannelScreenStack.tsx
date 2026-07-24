// Module ID: 15303
// Function ID: 116727
// Name: useIsCompletelyCovered
// Dependencies: [57, 31, 27, 9159, 653, 482, 33, 4130, 15304, 3991, 4559, 4066, 1324, 8347, 15305, 4476, 3992, 4489, 15306, 1457, 14838, 3989, 14842, 5217, 3977, 14837, 3984, 686, 3990, 3842, 2]

// Module 15303 (useIsCompletelyCovered)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "dispatcher";
import { MIDNIGHT_BORDER_WIDTH } from "MIN_HEADER_HEIGHT";
import ME from "ME";
import { ThemeTypes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX) {
  const _require = index;
  const importDefault = highestFullyRenderedScreenIndex;
  const dependencyMap = translateX;
  const enabled = importDefault(15304).useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  const obj = importDefault(15304);
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 10608377273080;
  fn.__initData = closure_15;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const value = highestFullyRenderedScreenIndex.get();
      if (arg0) {
        if (value >= tmp3) {
          const result = highestFullyRenderedScreenIndex.set(closure_0 - 1);
        }
      } else if (value < tmp3) {
        const result1 = highestFullyRenderedScreenIndex.set(closure_0);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 10137919010401;
  fn2.__initData = closure_16;
  const animatedReaction = _require(3991).useAnimatedReaction(fn, fn2);
  const obj2 = _require(3991);
  const unmountEffect = _require(4559).useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= closure_0) {
      const result = highestFullyRenderedScreenIndex.set(closure_0 - 1);
    }
  });
  const obj3 = _require(4559);
  const fn3 = function u() {
    let tmp = enabled;
    if (enabled) {
      tmp = highestFullyRenderedScreenIndex.get() > closure_0;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 1648562234730;
  fn3.__initData = closure_17;
  return _require(3991).useDerivedValue(fn3);
}
function getKey(index) {
  return String(index.index);
}
({ NativeModules: closure_5, StyleSheet: closure_6, View: closure_7 } = get_ActivityIndicator);
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: closure_10 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let closure_14 = _createForOfIteratorHelperLoose.createStyles({ midnightContainerStyles: { marginTop: -MIDNIGHT_BORDER_WIDTH, marginLeft: -MIDNIGHT_BORDER_WIDTH } });
let closure_15 = { code: "function MainTabsChannelScreenStackTsx1(){const{translateX}=this.__closure;return translateX.get()>0;}" };
let closure_16 = { code: "function MainTabsChannelScreenStackTsx2(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}" };
let closure_17 = { code: "function MainTabsChannelScreenStackTsx3(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}" };
let closure_18 = importAllResult.memo(function FirstChannelScreen(cleanup) {
  let channelId;
  let containerWidth;
  let focusChatPressableComponent;
  let frame;
  let freeze;
  let guildId;
  let highestFullyRenderedScreenIndex;
  let index;
  let isActive;
  let isDragging;
  let maxWidth;
  let parentFreezeValue;
  let showCreateThread;
  let transitionState;
  let translateX;
  ({ frame, index, isDragging, translateX, containerWidth, isActive, maxWidth, transitionState } = cleanup);
  cleanup = cleanup.cleanup;
  ({ guildId, channelId, showCreateThread, freeze, focusChatPressableComponent, parentFreezeValue, highestFullyRenderedScreenIndex } = cleanup);
  const tmp = cleanup(4066)();
  let obj = transitionState(1324);
  let obj1 = transitionState(8347);
  const orientation = obj1.useOrientation();
  const tmp2 = callback2();
  let obj2 = transitionState(15305);
  const items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = obj2.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX), parentFreezeValue);
  const effect = importAllResult.useEffect(() => {
    if (transitionState === transitionState(outer1_2[15]).TransitionStates.YEETED) {
      cleanup();
    }
  }, items);
  obj = {};
  const items1 = [mainTabsChannelScreenStyles, , ];
  let tmp9 = null;
  const tmp4 = useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX);
  const tmp7 = closure_13;
  if (null != containerWidth) {
    obj = { width: containerWidth };
    tmp9 = obj;
  }
  items1[1] = tmp9;
  let prop;
  if (tmp === ThemeTypes.MIDNIGHT) {
    if (!obj.useMobileVisualRefreshConfig({ location: "MainTabsChannelScreenStack" }).chatInputFloating) {
      prop = tmp2.midnightContainerStyles;
    }
  }
  items1[2] = prop;
  obj.style = items1;
  obj1 = { freeze };
  obj2 = { collapsable: false, style: absoluteFill.absoluteFill };
  let str = "box-only";
  if (isActive) {
    str = "auto";
  }
  obj2.pointerEvents = str;
  obj2.accessibilityElementsHidden = !isActive || undefined;
  obj2.importantForAccessibility = "no-hide-descendants";
  obj2.children = callback(cleanup(15306), { guildId, channelId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index });
  obj1.children = callback(closure_7, obj2);
  const items2 = [callback(transitionState(4489).Freeze, obj1), focusChatPressableComponent];
  obj.children = items2;
  return tmp7(cleanup(3992), obj);
});
let closure_19 = { code: "function MainTabsChannelScreenStackTsx4(){const{translateX}=this.__closure;return translateX.get()===0;}" };
let closure_20 = { code: "function MainTabsChannelScreenStackTsx5(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}" };
let closure_21 = importAllResult.memo(function ChannelScreen(transitionState) {
  let channelId;
  let freeze;
  let gesture;
  let guildId;
  let highestFullyRenderedScreenIndex;
  let index;
  let isActive;
  let isDragging;
  let movePanel;
  let panelGestureContext;
  let parentFreezeValue;
  let showCreateThread;
  let translateX;
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  ({ isActive, index } = transitionState);
  ({ guildId, channelId, showCreateThread, freeze, parentFreezeValue, highestFullyRenderedScreenIndex } = transitionState);
  let tmp = cleanup(index[11])();
  let obj = transitionState(index[12]);
  let obj1 = transitionState(index[13]);
  const orientation = obj1.useOrientation();
  let obj2 = transitionState(index[19]);
  const navigation = obj2.useNavigation();
  importAllResult = importAllResult.useRef(false);
  const items = [cleanup, navigation];
  const callback = importAllResult.useCallback((arg0) => {
    if (!arg0) {
      if (ref.current) {
        cleanup();
      } else {
        ref.current = true;
        navigation.goBack();
      }
    }
  }, items);
  obj = {};
  const tmp2 = callback2();
  obj.canDrag = transitionState !== transitionState(index[15]).TransitionStates.YEETED;
  obj.onVisibilityChange = callback;
  obj.onDragStart = transitionState(index[21]).dismissKeyboard;
  obj.startShown = false;
  const tmp6Result = cleanup(index[20])(obj);
  ({ isDragging, translateX } = tmp6Result);
  ({ gesture, panelGestureContext, movePanel } = tmp6Result);
  const tmp6 = cleanup(index[20]);
  const disallowGesture = importAllResult.useContext(cleanup(index[22])).disallowGesture;
  let obj4 = transitionState(index[9]);
  const fn = function v() {
    return 0 === translateX.get();
  };
  fn.__closure = { translateX };
  fn.__workletHash = 1803281708382;
  fn.__initData = closure_19;
  const fn2 = function y(arg0, arg1) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = 1 === index;
    }
    if (tmp) {
      const result = disallowGesture.set(arg0);
    }
  };
  fn2.__closure = { index, mainTabsDisallowGesture: disallowGesture };
  fn2.__workletHash = 4369586160197;
  fn2.__initData = closure_20;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  obj = { cleanup, movePanel };
  let closure_8 = importAllResult.useRef(obj);
  const effect = importAllResult.useEffect(() => {
    closure_8.current = obj;
  });
  const items1 = [transitionState];
  const effect1 = importAllResult.useEffect(() => {
    const current = ref2.current;
    const movePanel = current.movePanel;
    if (transitionState !== transitionState(index[15]).TransitionStates.MOUNTED) {
      if (transitionState !== transitionState(index[15]).TransitionStates.ENTERED) {
        if (ref.current) {
          current.cleanup();
        } else {
          ref.current = true;
          movePanel(false, false, 0, true);
        }
      }
    }
    movePanel(true, false, 0, false);
  }, items1);
  const tmp8 = useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX);
  const mainTabsChannelScreenStyles = transitionState(index[14]).useMainTabsChannelScreenStyles(isDragging, translateX, tmp6Result.maxWidth, tmp8, parentFreezeValue);
  obj1 = { gesture };
  obj2 = { value: panelGestureContext };
  const obj3 = {};
  const items2 = [mainTabsChannelScreenStyles, ];
  let prop;
  const obj7 = transitionState(index[14]);
  if (tmp === ThemeTypes.MIDNIGHT) {
    if (!obj.useMobileVisualRefreshConfig({ location: "MainTabsChannelScreenStack" }).chatInputFloating) {
      prop = tmp2.midnightContainerStyles;
    }
  }
  items2[1] = prop;
  obj3.style = items2;
  obj3.accessibilityElementsHidden = !isActive || undefined;
  obj3.importantForAccessibility = "no-hide-descendants";
  obj4 = { freeze, children: callback(cleanup(index[18]), { guildId, channelId, showCreateThread, isNavigationScreen: true, frame: null, screenIndex: index }) };
  obj3.children = callback(transitionState(index[17]).Freeze, obj4);
  obj2.children = callback(cleanup(index[16]), obj3);
  obj1.children = callback(transitionState(index[22]).MainTabsChannelScreenStackContext.Provider, obj2);
  return callback(transitionState(index[23]).GestureDetector, obj1);
});
let closure_22 = { code: "function MainTabsChannelScreenStackTsx6(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
let closure_23 = { code: "function MainTabsChannelScreenStackTsx7(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}" };
const memoResult = importAllResult.memo(function MainTabsChannelScreenStack(screens) {
  let focusChatPressableComponent;
  let shouldFreeze;
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  const highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  let sharedValue;
  let callback;
  let closure_13;
  let tmp2 = isDragging(maxWidth.useState(translateX.get() === maxWidth), 2);
  let closure_9 = tmp3;
  let obj = screens(translateX[9]);
  const fn = function k() {
    return translateX.get() === maxWidth;
  };
  fn.__closure = { translateX, maxWidth };
  fn.__workletHash = 9963940499904;
  fn.__initData = closure_22;
  class A {
    constructor(arg0, arg1) {
      if (screens !== arg1) {
        tmp = screens;
        tmp2 = translateX;
        num = 9;
        obj = screens(translateX[9]);
        tmp3 = closure_9;
        tmp4 = obj.runOnJS(closure_9)(screens);
      }
      return;
    }
  }
  obj = { runOnJS: screens(translateX[9]).runOnJS, setIsHidden: tmp3 };
  A.__closure = obj;
  A.__workletHash = 10167608718442;
  A.__initData = closure_23;
  const animatedReaction = obj.useAnimatedReaction(fn, A);
  const items = [screens];
  const items1 = [
    maxWidth.useMemo(() => {
      const atResult = screens.at(-1);
      let type;
      if (null != atResult) {
        type = atResult.type;
      }
      let channelId = null;
      if (type === screens(translateX[25]).ChannelScreenType.DEFAULT) {
        channelId = atResult.channelId;
      }
      return channelId;
    }, items)
  ];
  const effect = maxWidth.useEffect(() => {
    const MediaPlayerManager = highestFullyRenderedScreenIndex.MediaPlayerManager;
    if (!tmp) {
      MediaPlayerManager.pauseAllMediaPlayers();
    }
  }, items1);
  const first = screens[0];
  if (shouldFreeze) {
    shouldFreeze = tmp2[0];
  }
  if (shouldFreeze) {
    let tmp8 = null == first;
    if (!tmp8) {
      tmp8 = first.type !== screens(translateX[25]).ChannelScreenType.DEFAULT;
    }
    shouldFreeze = tmp8;
  }
  let obj2 = screens(translateX[9]);
  sharedValue = obj2.useSharedValue(0);
  const items2 = [shouldFreeze, sharedValue];
  const effect1 = maxWidth.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = outer1_11.set(outer1_11.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items2);
  const items3 = [screens.length, focusChatPressableComponent, isDragging, translateX, firstScreenWidth, firstScreenFrame, maxWidth, sharedValue, screenStackActive, highestFullyRenderedScreenIndex];
  let channelId;
  callback = maxWidth.useCallback((arg0, arg1, transitionState, cleanup) => {
    let showCreateThread;
    let showCreateThread2;
    const NumberResult = Number(arg0);
    if (0 === NumberResult) {
      let obj = {};
      ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread } = arg1);
      let tmp10 = null != showCreateThread;
      if (tmp10) {
        tmp10 = showCreateThread;
      }
      obj.showCreateThread = tmp10;
      obj.focusChatPressableComponent = focusChatPressableComponent;
      obj.index = NumberResult;
      obj.transitionState = transitionState;
      obj.cleanup = cleanup;
      obj.isDragging = isDragging;
      obj.translateX = translateX;
      let tmp14 = screenStackActive;
      if (screenStackActive) {
        tmp14 = NumberResult === screens.length - 1;
      }
      obj.isActive = tmp14;
      obj.freeze = NumberResult < screens.length - 2;
      obj.containerWidth = firstScreenWidth;
      obj.frame = firstScreenFrame;
      obj.parentFreezeValue = sharedValue;
      obj.maxWidth = maxWidth;
      obj.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      let tmp22Result = closure_12(outer1_18, obj, arg0);
      const tmp7 = closure_12;
      const tmp8 = outer1_18;
    } else {
      obj = {};
      ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread: showCreateThread2 } = arg1);
      let tmp2 = null != showCreateThread2;
      if (tmp2) {
        tmp2 = showCreateThread2;
      }
      obj.showCreateThread = tmp2;
      obj.index = NumberResult;
      obj.transitionState = transitionState;
      obj.parentFreezeValue = sharedValue;
      obj.cleanup = cleanup;
      obj.isActive = NumberResult === screens.length - 1;
      obj.freeze = NumberResult < screens.length - 2;
      obj.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      tmp22Result = closure_12(outer1_21, obj, arg0);
      const tmp22 = closure_12;
      const tmp23 = outer1_21;
    }
    return tmp22Result;
  }, items3);
  if (null != first) {
    channelId = first.channelId;
  }
  let tmp16 = null;
  if (null != channelId) {
    tmp16 = channelId;
  }
  callback = maxWidth.useRef(tmp16);
  closure_13 = maxWidth.useRef(null);
  let type;
  if (null != first) {
    type = first.type;
  }
  const items4 = [type, ];
  let channelId1;
  if (null != first) {
    channelId1 = first.channelId;
  }
  items4[1] = channelId1;
  const effect2 = maxWidth.useEffect(() => {
    let type;
    if (null != first) {
      type = first.type;
    }
    let tmp3 = null != type;
    if (tmp3) {
      tmp3 = ref2.current !== first.type;
    }
    if (tmp3) {
      ref2.current = first.type;
      if (first.channelId === ref.current) {
        let isChatLockedOpen = first.type !== screens(translateX[25]).ChannelScreenType.DEFAULT;
        if (!isChatLockedOpen) {
          let obj = screens(translateX[26]);
          isChatLockedOpen = obj.getChatLayout().isChatLockedOpen;
        }
        if (!isChatLockedOpen) {
          obj = { type: "TRY_ACK" };
          obj = { section: first.CHANNEL, object: tmp3.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: firstScreenFrame.ACK_AUTOMATIC };
          obj.location = obj;
          obj.channelId = first.channelId;
          screenStackActive(translateX[27]).dispatch(obj);
          const obj2 = screenStackActive(translateX[27]);
        }
      } else {
        ref.current = first.channelId;
      }
    }
  }, items4);
  let obj3 = screens(translateX[28]);
  obj3.freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    obj = { freeze: shouldFreeze };
    const obj1 = { collapsable: false, style: focusChatPressableComponent.absoluteFill, pointerEvents: "box-none", accessibilityElementsHidden: !screenStackActive, importantForAccessibility: "no-hide-descendants" };
    obj2 = { gradient: tmp };
    obj3 = { items: screens, renderItem: callback, getItemKey: getKey };
    obj2.children = callback(screens(translateX[15]).TransitionGroup, obj3);
    obj1.children = callback(screens(translateX[29]).ThemeContextProvider, obj2);
    obj.children = callback(firstScreenWidth, obj1);
    let tmp24Result = tmp24(screens(translateX[17]).Freeze, obj);
    const tmp27 = firstScreenWidth;
  } else {
    let showCreateThread;
    if (null != first) {
      showCreateThread = first.showCreateThread;
    }
    tmp24Result = null;
  }
  return tmp24Result;
});
let obj = { marginTop: -MIDNIGHT_BORDER_WIDTH, marginLeft: -MIDNIGHT_BORDER_WIDTH };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default memoResult;

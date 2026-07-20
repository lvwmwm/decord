// Module ID: 15123
// Function ID: 114135
// Name: useIsCompletelyCovered
// Dependencies: []

// Module 15123 (useIsCompletelyCovered)
function useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX) {
  highestFullyRenderedScreenIndex = index;
  const importDefault = highestFullyRenderedScreenIndex;
  const dependencyMap = translateX;
  const enabled = importDefault(dependencyMap[8]).useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  let closure_3 = enabled;
  const obj = importDefault(dependencyMap[8]);
  const fn = function c() {
    return arg2.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 10608377273080;
  fn.__initData = closure_15;
  const fn2 = function l(arg0, self) {
    if (arg0 !== self) {
      const value = self.get();
      if (arg0) {
        if (value >= tmp3) {
          const result = self.set(arg0 - 1);
        }
      } else if (value < tmp3) {
        const result1 = self.set(arg0);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 10137919010401;
  fn2.__initData = closure_16;
  const animatedReaction = highestFullyRenderedScreenIndex(dependencyMap[9]).useAnimatedReaction(fn, fn2);
  const obj2 = highestFullyRenderedScreenIndex(dependencyMap[9]);
  const unmountEffect = highestFullyRenderedScreenIndex(dependencyMap[10]).useUnmountEffect((arg0, self) => {
    if (self.get() >= arg0) {
      const result = self.set(arg0 - 1);
    }
  });
  const obj3 = highestFullyRenderedScreenIndex(dependencyMap[10]);
  const fn3 = function u() {
    let tmp = enabled;
    if (enabled) {
      tmp = arg1.get() > arg0;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 1648562234730;
  fn3.__initData = closure_17;
  return highestFullyRenderedScreenIndex(dependencyMap[9]).useDerivedValue(fn3);
}
function getKey(index) {
  return String(index.index);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ NativeModules: closure_5, StyleSheet: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
const MIDNIGHT_BORDER_WIDTH = arg1(dependencyMap[3]).MIDNIGHT_BORDER_WIDTH;
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: closure_10 } = arg1(dependencyMap[4]));
const ThemeTypes = arg1(dependencyMap[5]).ThemeTypes;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
let closure_14 = arg1(dependencyMap[7]).createStyles({ midnightContainerStyles: { marginTop: -MIDNIGHT_BORDER_WIDTH, marginLeft: -MIDNIGHT_BORDER_WIDTH } });
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
  const arg1 = transitionState;
  cleanup = cleanup.cleanup;
  const importDefault = cleanup;
  ({ guildId, channelId, showCreateThread, freeze, focusChatPressableComponent, parentFreezeValue, highestFullyRenderedScreenIndex } = cleanup);
  const tmp = importDefault(dependencyMap[11])();
  let obj = arg1(dependencyMap[12]);
  let obj1 = arg1(dependencyMap[13]);
  const orientation = obj1.useOrientation();
  const tmp2 = callback3();
  let obj2 = arg1(dependencyMap[14]);
  const items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = obj2.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX), parentFreezeValue);
  const effect = importAllResult.useEffect(() => {
    if (transitionState === transitionState(closure_2[15]).TransitionStates.YEETED) {
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
  obj2.children = callback2(importDefault(dependencyMap[18]), { guildId, channelId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index });
  obj1.children = callback2(closure_7, obj2);
  const items2 = [callback2(arg1(dependencyMap[17]).Freeze, obj1), focusChatPressableComponent];
  obj.children = items2;
  return tmp7(importDefault(dependencyMap[16]), obj);
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
  const arg1 = transitionState;
  const cleanup = transitionState.cleanup;
  const importDefault = cleanup;
  ({ isActive, index } = transitionState);
  const dependencyMap = index;
  ({ guildId, channelId, showCreateThread, freeze, parentFreezeValue, highestFullyRenderedScreenIndex } = transitionState);
  const tmp = importDefault(dependencyMap[11])();
  let obj = arg1(dependencyMap[12]);
  let obj1 = arg1(dependencyMap[13]);
  const orientation = obj1.useOrientation();
  let obj2 = arg1(dependencyMap[19]);
  const navigation = obj2.useNavigation();
  let closure_3 = navigation;
  const React = React.useRef(false);
  const items = [cleanup, navigation];
  const callback = React.useCallback((arg0) => {
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
  const tmp2 = callback3();
  obj.canDrag = transitionState !== arg1(dependencyMap[15]).TransitionStates.YEETED;
  obj.onVisibilityChange = callback;
  obj.onDragStart = arg1(dependencyMap[21]).dismissKeyboard;
  obj.startShown = false;
  const tmp6Result = importDefault(dependencyMap[20])(obj);
  ({ isDragging, translateX } = tmp6Result);
  ({ gesture, panelGestureContext, movePanel } = tmp6Result);
  const tmp6 = importDefault(dependencyMap[20]);
  const disallowGesture = React.useContext(importDefault(dependencyMap[22])).disallowGesture;
  let obj4 = arg1(dependencyMap[9]);
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
  let closure_8 = React.useRef(obj);
  const effect = React.useEffect(() => {
    closure_8.current = obj;
  });
  const items1 = [transitionState];
  const effect1 = React.useEffect(() => {
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
  const mainTabsChannelScreenStyles = arg1(dependencyMap[14]).useMainTabsChannelScreenStyles(isDragging, translateX, tmp6Result.maxWidth, tmp8, parentFreezeValue);
  obj1 = { gesture };
  obj2 = { value: panelGestureContext };
  const obj3 = {};
  const items2 = [mainTabsChannelScreenStyles, ];
  let prop;
  const obj7 = arg1(dependencyMap[14]);
  if (tmp === ThemeTypes.MIDNIGHT) {
    if (!obj.useMobileVisualRefreshConfig({ location: "MainTabsChannelScreenStack" }).chatInputFloating) {
      prop = tmp2.midnightContainerStyles;
    }
  }
  items2[1] = prop;
  obj3.style = items2;
  obj3.accessibilityElementsHidden = !isActive || undefined;
  obj3.importantForAccessibility = "no-hide-descendants";
  obj4 = { freeze, children: callback2(importDefault(dependencyMap[18]), { guildId, channelId, showCreateThread, isNavigationScreen: true, frame: null, screenIndex: index }) };
  obj3.children = callback2(arg1(dependencyMap[17]).Freeze, obj4);
  obj2.children = callback2(importDefault(dependencyMap[16]), obj3);
  obj1.children = callback2(arg1(dependencyMap[22]).MainTabsChannelScreenStackContext.Provider, obj2);
  return callback2(arg1(dependencyMap[23]).GestureDetector, obj1);
});
let closure_22 = { code: "function MainTabsChannelScreenStackTsx6(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
let closure_23 = { code: "function MainTabsChannelScreenStackTsx7(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}" };
const obj = { marginTop: -MIDNIGHT_BORDER_WIDTH, marginLeft: -MIDNIGHT_BORDER_WIDTH };
const obj2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function MainTabsChannelScreenStack(screens) {
  let focusChatPressableComponent;
  let shouldFreeze;
  screens = screens.screens;
  const arg1 = screens;
  const screenStackActive = screens.screenStackActive;
  const importDefault = screenStackActive;
  const translateX = screens.translateX;
  const dependencyMap = translateX;
  const isDragging = screens.isDragging;
  let callback = isDragging;
  const maxWidth = screens.maxWidth;
  const highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  let ThemeTypes;
  let callback2;
  let closure_13;
  const tmp2 = callback(maxWidth.useState(translateX.get() === maxWidth), 2);
  const tmp3 = tmp2[1];
  let obj = arg1(dependencyMap[9]);
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
  obj = { runOnJS: arg1(dependencyMap[9]).runOnJS, setIsHidden: tmp3 };
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
  const effect = importAllResult.useEffect(() => {
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
      tmp8 = first.type !== arg1(dependencyMap[25]).ChannelScreenType.DEFAULT;
    }
    shouldFreeze = tmp8;
  }
  let obj2 = arg1(dependencyMap[9]);
  const sharedValue = obj2.useSharedValue(0);
  ThemeTypes = sharedValue;
  const items2 = [shouldFreeze, sharedValue];
  const effect1 = importAllResult.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = store.set(store.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items2);
  const items3 = [screens.length, focusChatPressableComponent, isDragging, translateX, firstScreenWidth, firstScreenFrame, maxWidth, sharedValue, screenStackActive, highestFullyRenderedScreenIndex];
  let channelId;
  callback = importAllResult.useCallback((arg0, arg1, transitionState, cleanup) => {
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
      let tmp22Result = closure_12(closure_18, obj, arg0);
      const tmp7 = closure_12;
      const tmp8 = closure_18;
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
      tmp22Result = closure_12(closure_21, obj, arg0);
      const tmp22 = closure_12;
      const tmp23 = closure_21;
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
  callback2 = importAllResult.useRef(tmp16);
  closure_13 = importAllResult.useRef(null);
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
  const effect2 = importAllResult.useEffect(() => {
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
  let obj3 = arg1(dependencyMap[28]);
  obj3.freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    obj = { freeze: shouldFreeze };
    const obj1 = { color: false, fontSize: "gr", textAlign: null, style: focusChatPressableComponent.absoluteFill, accessibilityElementsHidden: !screenStackActive, importantForAccessibility: "no-hide-descendants" };
    obj2 = { gradient: tmp };
    obj3 = { items: screens, renderItem: callback, getItemKey: getKey };
    obj2.children = callback2(arg1(dependencyMap[15]).TransitionGroup, obj3);
    obj1.children = callback2(arg1(dependencyMap[29]).ThemeContextProvider, obj2);
    obj.children = callback2(firstScreenWidth, obj1);
    let tmp24Result = tmp24(arg1(dependencyMap[17]).Freeze, obj);
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
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default memoResult;

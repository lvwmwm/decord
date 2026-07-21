// Module ID: 4963
// Function ID: 42638
// Name: Background
// Dependencies: []

// Module 4963 (Background)
let Platform;
function Background(arg0) {
  const merged = Object.assign(arg0);
  return callback2(closure_6, {});
}
function GradientBackground(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { style: callback3(false).backgroundOverlay };
  obj["children"] = callback2(closure_6, obj);
  return callback2(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ StyleSheet: closure_5, View: closure_6, Platform } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ ACTION_SHEET_START_HEIGHT_RATIO: closure_7, ACTION_SHEET_MAX_WIDTH: closure_8, ACTION_SHEET_SPRING_CONFIG: closure_9, ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION: closure_10, ACTION_SHEET_GRADIENT_BORDER_WIDTH: closure_11, ACTION_SHEET_GRADIENT_BORDER_RADIUS: closure_12, ACTION_SHEET_BORDER_RADIUS: closure_13, ACTION_SHEET_INNER_BORDER_RADIUS: closure_14, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_15 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
let closure_18 = arg1(dependencyMap[5]).createStyles((arg0) => {
  let num = arg1;
  let flag = arg2;
  if (arg1 === undefined) {
    num = 0;
  }
  if (flag === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { overflow: "hidden", borderTopLeftRadius: closure_13, borderTopRightRadius: closure_13, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.background = obj;
  obj.wrapper = {};
  obj = { overflow: "hidden", marginTop: closure_11, marginHorizontal: closure_11, borderTopLeftRadius: closure_12, borderTopRightRadius: closure_12, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.wrapperWithBorder = obj;
  const obj1 = {};
  let tmp;
  if (arg0) {
    tmp = closure_13;
  }
  obj1.borderTopLeftRadius = tmp;
  let tmp2;
  if (arg0) {
    tmp2 = closure_13;
  }
  obj1.borderTopRightRadius = tmp2;
  let str;
  if (arg0) {
    str = "hidden";
  }
  obj1.overflow = str;
  let num2 = 0;
  if (!flag) {
    num2 = num + 4;
  }
  obj1.marginBottom = num2;
  obj1.flex = 1;
  obj.content = obj1;
  const obj2 = { height: "100%" };
  let str2;
  if (obj6.isIosFabric()) {
    str2 = "hidden";
  }
  obj2.overflow = str2;
  obj2.borderTopLeftRadius = closure_14;
  obj2.borderTopRightRadius = closure_14;
  obj.gradient = obj2;
  const obj6 = arg1(dependencyMap[7]);
  obj.handleIndicator = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_STRONG };
  const obj4 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj4["backgroundColor"] = importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
  obj.backgroundOverlay = obj4;
  obj.header = { marginBottom: 16 };
  obj.body = { flex: 1 };
  return obj;
});
let closure_19 = importAllResult.forwardRef((windowDimensions) => {
  let children;
  let hasEverExpanded;
  let keyboardShouldPersistTaps;
  let scrollViewStyle;
  let startExpanded;
  let startHeight;
  let wrapperStyle;
  ({ startHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const arg1 = onChange;
  const onExpand = windowDimensions.onExpand;
  const importDefault = onExpand;
  let maxDynamicContentSize = windowDimensions.maxDynamicContentSize;
  let obj = {};
  ({ wrapperStyle, scrollViewStyle, startExpanded, keyboardShouldPersistTaps, children } = windowDimensions);
  Object.setPrototypeOf(null);
  const merged = Object.assign(windowDimensions, obj);
  let callback;
  let React;
  let obj1 = arg1(dependencyMap[9]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const dependencyMap = isScreenReaderEnabled;
  if (null == startHeight) {
    startHeight = height * closure_7;
  }
  callback = startHeight;
  if (null == maxDynamicContentSize) {
    maxDynamicContentSize = height - arg1(dependencyMap[10]).NAV_BAR_HEIGHT_MULTILINE - importDefault(dependencyMap[8])().top;
  }
  if (!isScreenReaderEnabled) {
    if (!startExpanded) {
      let items = [startHeight];
    }
    const tmp10 = callback(tmp8(items), 2);
    React = tmp10[1];
    const items1 = [isScreenReaderEnabled];
    const effect = React.useEffect(() => {
      if (isScreenReaderEnabled) {
        callback([]);
      }
    }, items1);
    const items2 = [startHeight];
    const items3 = [onChange, onExpand];
    callback = React.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.layout.height < startHeight) {
        callback([]);
      }
    }, items2);
    const callback1 = React.useCallback((arg0, arg1, arg2) => {
      if (null != onChange) {
        onChange(arg0, arg1, arg2);
      }
      if (0 === arg0) {
        if (null != onExpand) {
          onExpand();
        }
      }
    }, items3);
    obj = {};
    const merged1 = Object.assign(merged);
    obj["enableDynamicSizing"] = true;
    obj["snapPoints"] = tmp10[0];
    obj["maxDynamicContentSize"] = maxDynamicContentSize;
    obj["ref"] = arg1;
    obj["onChange"] = callback1;
    obj = { bounces: false, keyboardShouldPersistTaps, style: scrollViewStyle };
    obj1 = { onLayout: callback, style: wrapperStyle, children };
    obj.children = callback2(closure_6, obj1);
    obj["children"] = callback2(arg1(dependencyMap[11]).BottomSheetScrollView, obj);
    return callback2(importDefault(dependencyMap[11]), obj);
  }
  items = [];
});
let closure_20 = importAllResult.forwardRef((windowDimensions) => {
  let children;
  let contentHeight;
  let extraContent;
  let hasEverExpanded;
  let maxHeight;
  let startHeight;
  let wrapperStyle;
  ({ startHeight, contentHeight, maxHeight, hasEverExpanded } = windowDimensions);
  const arg1 = hasEverExpanded;
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const importDefault = onChange;
  const onExpand = windowDimensions.onExpand;
  const dependencyMap = onExpand;
  const borderGradient = windowDimensions.borderGradient;
  let obj = {};
  ({ wrapperStyle, children, extraContent } = windowDimensions);
  Object.setPrototypeOf(null);
  const merged = Object.assign(windowDimensions, obj);
  let importAllResult;
  let diff;
  let diff1;
  let obj1 = arg1(dependencyMap[9]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  let closure_3 = isScreenReaderEnabled;
  if (null == startHeight) {
    startHeight = height * closure_7;
  }
  importAllResult = startHeight;
  diff = contentHeight;
  if (null != maxHeight) {
    diff = maxHeight;
  }
  if (null == diff) {
    diff = height - arg1(dependencyMap[10]).NAV_BAR_HEIGHT_MULTILINE - importDefault(dependencyMap[8])().top;
  }
  const items = [hasEverExpanded, isScreenReaderEnabled, diff, startHeight];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    let tmp = !isScreenReaderEnabled;
    if (tmp) {
      tmp = !hasEverExpanded;
    }
    if (tmp) {
      tmp = startHeight < diff;
    }
    if (tmp) {
      items.push(startHeight);
    }
    items.push(diff);
    return items;
  }, items);
  diff1 = memo.length - 1;
  const items1 = [onChange, onExpand, diff1];
  const items2 = [wrapperStyle, ];
  obj = { maxHeight: diff };
  items2[1] = obj;
  const callback = importAllResult.useCallback((arg0, arg1, arg2) => {
    if (null != onChange) {
      onChange(arg0, arg1, arg2);
    }
    if (arg0 === diff1) {
      if (null != onExpand) {
        onExpand();
      }
    }
  }, items1);
  const tmp11 = callback2(diff1, { style: items2, children });
  obj = {};
  const tmp12 = closure_17;
  const tmp3 = callback3(false);
  const merged1 = Object.assign(merged);
  obj["ref"] = arg1;
  obj["enableDynamicSizing"] = false;
  obj["contentHeight"] = contentHeight;
  obj["snapPoints"] = memo;
  obj["onChange"] = callback;
  let tmp15 = tmp11;
  if (null != borderGradient) {
    obj1 = { style: tmp3.gradient, start: arg1(dependencyMap[13]).VerticalGradient.START, end: arg1(dependencyMap[13]).VerticalGradient.END, colors: borderGradient, children: tmp11 };
    tmp15 = callback2(importDefault(dependencyMap[12]), obj1);
    const tmp19 = importDefault(dependencyMap[12]);
  }
  const items3 = [tmp15, extraContent];
  obj["children"] = items3;
  return tmp12(importDefault(dependencyMap[11]), obj);
});
let closure_21 = { code: "function BottomSheetNativeTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}" };
let closure_22 = { code: "function BottomSheetNativeTsx2(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}" };
let closure_23 = { code: "function BottomSheetNativeTsx3(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){runOnJS(onLeave)();}}" };
const obj2 = arg1(dependencyMap[5]);
const forwardRefResult = importAllResult.forwardRef((scrollable) => {
  let backgroundStyles;
  let bodyStyles;
  let borderGradient;
  let children;
  let containerHeight;
  let contentHeight;
  let contentStyles;
  let extraContent;
  let handleComponent;
  let handleDisabled;
  let header;
  let keyboardShouldPersistTaps;
  let maxHeight;
  let showGradient;
  let startExpanded;
  let startHeight;
  let flag = scrollable.scrollable;
  if (flag === undefined) {
    flag = false;
  }
  ({ startExpanded, startHeight, maxHeight, containerHeight } = scrollable);
  if (startExpanded === undefined) {
    startExpanded = false;
  }
  const backdropOpacity = scrollable.backdropOpacity;
  const arg1 = backdropOpacity;
  const backdropChildren = scrollable.backdropChildren;
  const importDefault = backdropChildren;
  ({ header, handleComponent, handleDisabled } = scrollable);
  if (handleDisabled === undefined) {
    handleDisabled = false;
  }
  const dismissAccessibilityLabel = scrollable.dismissAccessibilityLabel;
  const dependencyMap = dismissAccessibilityLabel;
  const footer = scrollable.footer;
  let callback = footer;
  const onExpand = scrollable.onExpand;
  const onDismiss = scrollable.onDismiss;
  ({ borderGradient, showGradient } = scrollable);
  let obj = {};
  ({ keyboardShouldPersistTaps, children, backgroundStyles, contentStyles, bodyStyles, extraContent, contentHeight } = scrollable);
  Object.setPrototypeOf(null);
  const merged = Object.assign(scrollable, obj);
  let transitionState;
  let close;
  let onLeave;
  let registerDismissHandler;
  let ref;
  let closure_11;
  let closure_12;
  let closure_13;
  let sharedValue;
  let derivedValue;
  const context = importAllResult.useContext(importDefault(dependencyMap[15]));
  transitionState = context.transitionState;
  close = context.close;
  onLeave = context.onLeave;
  registerDismissHandler = context.registerDismissHandler;
  const rect = importDefault(dependencyMap[8])();
  const tmp4 = callback3(handleDisabled, Math.max(rect.bottom, derivedValue), flag);
  ref = importAllResult.useRef(null);
  const tmp6 = callback(onExpand.useState(startExpanded), 2);
  closure_11 = tmp6[1];
  closure_12 = importAllResult.useRef(false);
  closure_13 = importAllResult.useRef(true);
  let obj1 = importAllResult;
  const items = [onDismiss, registerDismissHandler];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    registerDismissHandler(onDismiss);
  }, items);
  let obj2 = arg1(dependencyMap[17]);
  const bottomSheetImperativeHandle = obj2.useBottomSheetImperativeHandle(arg1, ref);
  const items1 = [transitionState, close];
  const effect = importAllResult.useEffect(() => {
    let current = "exiting" !== transitionState;
    if (!current) {
      current = closure_12.current;
    }
    if (!current) {
      closure_13.current = false;
      const current2 = ref.current;
      if (null != current2) {
        current2.forceClose();
      }
    }
    let current3 = "visible" === transitionState;
    if (current3) {
      current3 = closure_12.current;
    }
    if (current3) {
      close();
    }
  }, items1);
  let obj3 = arg1(dependencyMap[18]);
  const unmountEffect = obj3.useUnmountEffect(() => {
    if (ref.current) {
      if (null != onDismiss) {
        onDismiss();
      }
    }
    onLeave();
  });
  const items2 = [close];
  const items3 = [onExpand];
  callback = importAllResult.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    if (arg4 !== backdropOpacity(dismissAccessibilityLabel[11]).ANIMATION_SOURCE.KEYBOARD) {
      if (-1 === arg1) {
        if (!closure_12.current) {
          closure_12.current = true;
          close();
        }
      }
      if (arg1 > -1) {
        if (closure_12.current) {
          const current = ref.current;
          if (null != current) {
            current.forceClose();
          }
        }
      }
    }
  }, items2);
  const animatedIndex = merged.animatedIndex;
  const callback1 = importAllResult.useCallback(() => {
    callback(true);
    if (null != onExpand) {
      onExpand();
    }
  }, items3);
  let obj4 = arg1(dependencyMap[14]);
  sharedValue = obj4.useSharedValue(-1);
  if (null != animatedIndex) {
    sharedValue = animatedIndex;
  }
  let tmp9Result = tmp9(tmp10[14]);
  function he() {
    return sharedValue.get() <= -1;
  }
  obj = { animatedIndex: sharedValue };
  he.__closure = obj;
  he.__workletHash = 4341912681188;
  he.__initData = closure_21;
  derivedValue = tmp9Result.useDerivedValue(he);
  tmp9Result = tmp9(tmp10[14]);
  class Se {
    constructor() {
      return closure_15.get();
    }
  }
  Se.__closure = { animatedIsVisuallyClosed: derivedValue };
  Se.__workletHash = 6995719052506;
  Se.__initData = closure_22;
  function _e(arg0) {
    let tmp = arg0;
    if (arg0) {
      tmp = "exiting" === transitionState;
    }
    if (tmp) {
      backdropOpacity(dismissAccessibilityLabel[14]).runOnJS(onLeave)();
      const obj = backdropOpacity(dismissAccessibilityLabel[14]);
    }
  }
  obj = { transitionState, runOnJS: tmp9(tmp10[14]).runOnJS, onLeave };
  _e.__closure = obj;
  _e.__workletHash = 77590951197;
  _e.__initData = closure_23;
  const animatedReaction = tmp9Result.useAnimatedReaction(Se, _e);
  const items4 = [dismissAccessibilityLabel];
  let callback2 = obj1.useCallback(() => callback2(backdropOpacity(dismissAccessibilityLabel[19]).ActionSheetHeaderBar, {
    accessibilityLabel: dismissAccessibilityLabel,
    onPress() {
      const current = ref.current;
      if (null != current) {
        current.close();
      }
    }
  }), items4);
  const items5 = [backdropOpacity, backdropChildren];
  const items6 = [footer];
  const callback3 = obj1.useCallback((animatedIndex) => {
    let obj = { style: items };
    const items = [onDismiss.absoluteFill, animatedIndex.style];
    obj = { animatedIndex: animatedIndex.animatedIndex, opacity: backdropOpacity };
    const items1 = [callback2(backdropOpacity(dismissAccessibilityLabel[20]).BottomSheetBackdrop, obj), backdropChildren];
    obj.children = items1;
    return callback3(transitionState, obj);
  }, items5);
  const callback4 = obj1.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    if (null != footer) {
      let tmp6 = footer;
    } else {
      tmp6 = callback2(backdropOpacity(dismissAccessibilityLabel[21]).NavScrim, {});
    }
    obj["children"] = tmp6;
    return callback2(backdropOpacity(dismissAccessibilityLabel[11]).BottomSheetFooter, obj);
  }, items6);
  const tmp22 = importDefault(dependencyMap[22])({ ignoreKeyboard: true });
  const tmp7 = onExpand.useContext(arg1(dependencyMap[16]).AccessibilityPreferencesContext).reducedMotion.enabled ? ref : registerDismissHandler;
  const tmp25 = importDefault(dependencyMap[23])();
  const backgroundComponent = merged.backgroundComponent;
  if (null != backgroundComponent) {
    obj1 = { ref };
    const obj11 = arg1(dependencyMap[24]);
    const tmp27 = callback2;
    obj1.accessible = !arg1(dependencyMap[24]).isIOS() && undefined;
    obj1.accessibilityRole = "none";
    obj1.accessibilityLabel = "";
    obj1.startHeight = startHeight;
    obj1.contentHeight = contentHeight;
    obj1.maxHeight = maxHeight;
    obj1.containerHeight = containerHeight;
    obj1.startExpanded = startExpanded;
    obj1.hasEverExpanded = tmp6[0];
    obj1.windowDimensions = tmp22;
    const items7 = [tmp4.wrapper, null != borderGradient && tmp4.wrapperWithBorder];
    obj1.wrapperStyle = items7;
    obj1.onExpand = callback1;
    obj1.enablePanDownToClose = true;
    obj1.containerStyle = tmp23;
    const items8 = [tmp4.background, backgroundStyles];
    obj1.backgroundStyle = items8;
    obj1.topInset = rect.top;
    let str3 = "interactive";
    if (flag) {
      str3 = "extend";
    }
    obj1.keyboardBehavior = str3;
    obj1.keyboardBlurBehavior = "restore";
    obj1.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
    obj1.animationConfigs = tmp7;
    obj1.overrideReduceMotion = arg1(dependencyMap[14]).ReduceMotion.Never;
    obj1.handleIndicatorStyle = tmp4.handleIndicator;
    let tmp33 = null;
    if (!handleDisabled) {
      if (null != handleComponent) {
        callback2 = handleComponent;
      }
      tmp33 = callback2;
    }
    obj1.handleComponent = tmp33;
    obj1.backdropComponent = callback3;
    obj1.backgroundComponent = backgroundComponent;
    obj1.renderFooter = callback4;
    obj1.animatedIndex = sharedValue;
    obj1.onAnimate = callback;
    obj1.onClose = onLeave;
    obj1.borderGradient = borderGradient;
    obj1.extraContent = extraContent;
    obj2 = {};
    obj3 = {};
    const items9 = [tmp4.content, contentStyles];
    obj3.style = items9;
    let tmp39 = null != header;
    if (tmp39) {
      obj4 = { style: tmp4.header, children: header };
      tmp39 = callback2(transitionState, obj4);
    }
    const items10 = [tmp39, ];
    const obj5 = {};
    const items11 = [tmp4.body, bodyStyles];
    obj5.style = items11;
    obj5.children = children;
    items10[1] = callback2(transitionState, obj5);
    obj3.children = items10;
    obj2.children = closure_17(transitionState, obj3);
    obj1.children = callback2(arg1(dependencyMap[25]).LayerScope, obj2);
    const tmp27Result = tmp27(tmp24, obj1);
    let tmp46Result = tmp27Result;
    if (showGradient) {
      const obj6 = {};
      let tmp49 = null;
      if (null != tmp25) {
        tmp49 = tmp25;
      }
      obj6.gradient = tmp49;
      obj6.children = tmp27Result;
      tmp46Result = callback2(arg1(dependencyMap[26]).ThemeContextProvider, obj6);
      const tmp46 = callback2;
    }
    return tmp46Result;
  }
});
const result = arg1(dependencyMap[27]).fileFinishedImporting("design/components/Sheet/native/BottomSheet.native.tsx");

export const BottomSheet = forwardRefResult;

// Module ID: 11182
// Function ID: 87050
// Name: PortalKeyboardBottomSheetHeader
// Dependencies: []

// Module 11182 (PortalKeyboardBottomSheetHeader)
let Platform;
function PortalKeyboardBottomSheetHeader(arg0) {
  let handleCollapse;
  let style;
  ({ style, handleCollapse } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  obj = {};
  const items = [tmp.headerContainer, , ];
  let prop;
  if (obj.useIsScreenReaderEnabled()) {
    prop = tmp.headerContainerScreenReaderEnabled;
  }
  items[1] = prop;
  items[2] = style;
  obj.style = items;
  obj.children = callback2(arg1(dependencyMap[8]).ActionSheetDragHandle, { onPress: handleCollapse });
  return callback2(closure_5, obj);
}
function PortalKeyboardBackground(arg0) {
  let pointerEvents;
  let roundingStyle;
  let style;
  ({ pointerEvents, style, roundingStyle } = arg0);
  style = [, , ];
  style[0] = style;
  style[1] = callback3().background;
  style[2] = roundingStyle;
  return callback2(importDefault(dependencyMap[10]).View, { pointerEvents, style });
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ Platform, View: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let closure_9 = obj1.isIOS();
let obj2 = arg1(dependencyMap[6]);
let obj = { container: {} };
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, overflow: "hidden" };
obj.background = obj;
obj1 = { borderTopLeftRadius: importDefault(dependencyMap[7]).radii.none, borderTopRightRadius: importDefault(dependencyMap[7]).radii.none, width: "100%", height: arg1(dependencyMap[8]).ACTION_SHEET_DRAG_HANDLE_HEIGHT, marginBottom: -arg1(dependencyMap[8]).ACTION_SHEET_DRAG_HANDLE_HEIGHT };
obj.headerContainer = obj1;
obj2 = { marginBottom: -importDefault(dependencyMap[7]).space.PX_8 };
obj.headerContainerScreenReaderEnabled = obj2;
obj.roundingView = {};
let closure_10 = obj2.createStyles(obj);
let closure_11 = { code: "function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}" };
let closure_12 = { code: "function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}" };
let closure_13 = { code: "function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}" };
let closure_14 = { code: "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex,cornerRadiusInputStart,cornerRadiusInputEnd,cornerRadius}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp')};}" };
let closure_15 = { code: "function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
let closure_16 = { code: "function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
const tmp3 = arg1(dependencyMap[4]);
const forwardRefResult = importAllResult.forwardRef(function PortalKeyboardBottomSheet(animatedIndex) {
  let animatedPosition;
  let animationConfigs;
  let backdropComponent;
  let children;
  let disableHeaderRoundingAnimation;
  let forceMaxHeight;
  let headerStyle;
  let height;
  let left;
  let onAnimate;
  let rendersHandle;
  let right;
  let roundingViewStyle;
  let transitionState;
  let width;
  let width2;
  animatedIndex = animatedIndex.animatedIndex;
  const arg1 = animatedIndex;
  const chatInputRef = animatedIndex.chatInputRef;
  const importDefault = chatInputRef;
  let flag = animatedIndex.isAppsKeyboard;
  ({ animatedPosition, children } = animatedIndex);
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  const onClose = animatedIndex.onClose;
  let callback = onClose;
  ({ backdropComponent, headerStyle } = animatedIndex);
  ({ disableHeaderRoundingAnimation, onAnimate } = animatedIndex);
  ({ rendersHandle, animationConfigs, transitionState, roundingViewStyle } = animatedIndex);
  if (rendersHandle === undefined) {
    rendersHandle = true;
  }
  let closure_6 = rendersHandle;
  ({ width, forceMaxHeight } = animatedIndex);
  if (forceMaxHeight === undefined) {
    forceMaxHeight = false;
  }
  let flag2 = animatedIndex.enablePanDownToClose;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = animatedIndex.renderExpressionFooter;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let ref;
  let closure_9;
  let callback3;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  const tmp = callback3();
  ref = importAllResult.useRef(null);
  let obj = arg1(dependencyMap[11]);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "AutocompleteWrapper" });
  const chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  obj = { forceMaxHeight, enablePanDownToClose: flag2 };
  const tmp5 = transitionState === arg1(dependencyMap[13]).TransitionStates.YEETED;
  closure_9 = tmp5;
  let obj2 = arg1(dependencyMap[14]);
  const bottomSheetImperativeHandle = obj2.useBottomSheetImperativeHandle(arg1, ref);
  const items = [ref, tmp5];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (tmp5) {
      const current = ref.current;
      if (null != current) {
        current.forceClose();
      }
    }
  }, items);
  let obj3 = arg1(dependencyMap[15]);
  const items1 = [closure_6];
  const stateFromStores = obj3.useStateFromStores(items1, () => rendersHandle.isOpen());
  if (flag3) {
    flag3 = !tmp5;
  }
  let obj4 = arg1(dependencyMap[9]);
  const isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
  callback3 = isScreenReaderEnabled;
  const items2 = [chatInputRef, tmp5, onAnimate, onClose, flag];
  callback = importAllResult.useCallback((arg0, arg1, arg2) => {
    if (tmp5) {
      if (-1 !== arg1) {
        if (null != onClose) {
          onClose();
        }
      }
    }
    if (arg0 !== arg1) {
      if (-1 !== arg1) {
        if (null != onAnimate) {
          onAnimate(arg0, arg1, arg2);
        }
        if (0 === arg0) {
          if (arg2 !== animatedIndex(flag[16]).ANIMATION_SOURCE.KEYBOARD) {
            const result = animatedIndex(flag[17]).triggerHapticFeedback(animatedIndex(flag[17]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj = animatedIndex(flag[17]);
          }
          const tmp5 = animatedIndex;
        } else if (1 === arg0) {
          if (0 === arg1) {
            if (!obj2.isChannelFocused()) {
              if (flag) {
                const current = chatInputRef.current;
                if (null != current) {
                  current.closeCustomKeyboard();
                }
              }
            }
            const obj2 = animatedIndex(flag[18]);
          }
        }
      }
    }
  }, items2);
  let obj5 = arg1(dependencyMap[10]);
  class U {
    constructor() {
      return animatedIndex.get() > 0.975;
    }
  }
  U.__closure = { animatedIndex };
  U.__workletHash = 2001839633402;
  U.__initData = closure_11;
  const derivedValue = obj5.useDerivedValue(U);
  closure_11 = derivedValue;
  let obj6 = arg1(dependencyMap[10]);
  class W {
    constructor() {
      return U.get();
    }
  }
  W.__closure = { isFullyExpanded: derivedValue };
  W.__workletHash = 9531298805666;
  W.__initData = closure_12;
  class X {
    constructor(arg0, arg1) {
      tmp = animatedIndex;
      if (null != arg1) {
        if (!tmp) {
          tmp = closure_7;
        }
        if (!tmp) {
          tmp2 = animatedIndex;
          tmp3 = closure_2;
          num = 10;
          obj = animatedIndex(closure_2[10]);
          num2 = 19;
          tmp4 = obj.runOnJS(animatedIndex(closure_2[19]).dismissGlobalKeyboard)();
        }
      }
      return;
    }
  }
  obj = { forceMaxHeight, runOnJS: arg1(dependencyMap[10]).runOnJS, dismissGlobalKeyboard: arg1(dependencyMap[19]).dismissGlobalKeyboard };
  X.__closure = obj;
  X.__workletHash = 14649856286006;
  X.__initData = closure_13;
  const animatedReaction = obj6.useAnimatedReaction(W, X);
  importDefault(dependencyMap[20])(() => () => {
    if (null != callback) {
      callback();
    }
  });
  let callback1 = importAllResult.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["pressBehavior"] = "collapse";
    return forceMaxHeight(animatedIndex(flag[16]).BottomSheetBackdrop, obj);
  }, []);
  const items3 = [headerStyle, ref, rendersHandle, derivedValue, isScreenReaderEnabled];
  const callback2 = importAllResult.useCallback(() => {
    let tmp = null;
    if (false !== rendersHandle) {
      const obj = {
        style: headerStyle,
        handleCollapse() {
            const current = ref.current;
            if (null != current) {
              current.collapse();
            }
            if (closure_10) {
              const current2 = ref.current;
              if (null != current2) {
                current2.forceClose();
              }
            }
          },
        isFullyExpanded: derivedValue
      };
      tmp = forceMaxHeight(closure_17, obj);
    }
    return tmp;
  }, items3);
  let obj8 = arg1(dependencyMap[21]);
  const token = obj8.useToken(importDefault(dependencyMap[7]).modules.mobile.MOBILE_KEYBOARD_TOP_BORDER_RADIUS);
  closure_12 = token;
  let num = 0;
  if (chatInputFloating) {
    num = -1;
  }
  closure_13 = num;
  let num2 = 1;
  if (chatInputFloating) {
    num2 = 0;
  }
  closure_14 = num2;
  const tmp4 = importDefault(dependencyMap[12])(obj);
  function ee() {
    const obj = {};
    const items = [num, num2];
    const items1 = [0.229, token];
    obj.borderTopLeftRadius = animatedIndex(flag[10]).interpolate(animatedIndex.get(), items, items1, "clamp");
    const obj2 = animatedIndex(flag[10]);
    const items2 = [num, num2];
    const items3 = [0.229, token];
    obj.borderTopRightRadius = animatedIndex(flag[10]).interpolate(animatedIndex.get(), items2, items3, "clamp");
    return obj;
  }
  const obj1 = { interpolate: arg1(dependencyMap[10]).interpolate, animatedIndex, cornerRadiusInputStart: num, cornerRadiusInputEnd: num2, cornerRadius: token };
  ee.__closure = obj1;
  ee.__workletHash = 6979425892410;
  ee.__initData = closure_14;
  const animatedStyle = arg1(dependencyMap[10]).useAnimatedStyle(ee);
  let tmp18;
  if (chatInputFloating) {
    if (!disableHeaderRoundingAnimation) {
      tmp18 = animatedStyle;
    }
  }
  closure_15 = tmp18;
  const items4 = [tmp18];
  callback3 = importAllResult.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["roundingStyle"] = tmp18;
    return forceMaxHeight(closure_18, obj);
  }, items4);
  const obj10 = arg1(dependencyMap[10]);
  ({ left, right } = importDefault(dependencyMap[22])());
  const tmp20 = importDefault(dependencyMap[22])();
  ({ height, width: width2 } = importDefault(dependencyMap[23])({ ignoreKeyboard: true }));
  const callback4 = importAllResult.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["children"] = forceMaxHeight(animatedIndex(flag[24]).PortalHost, { name: "expression-footer" });
    return forceMaxHeight(animatedIndex(flag[16]).BottomSheetFooter, obj);
  }, []);
  const tmp23 = callback(headerStyle.useState(false), 2);
  closure_16 = tmp24;
  const tmp21 = importDefault(dependencyMap[23])({ ignoreKeyboard: true });
  function ne() {
    return Math.max(animatedIndex.get(), 0) > 0;
  }
  ne.__closure = { animatedIndex };
  ne.__workletHash = 8952872079740;
  ne.__initData = closure_15;
  function te(arg0, arg1) {
    if (arg0 !== arg1) {
      animatedIndex(flag[10]).runOnJS(tmp24)(arg0);
      const obj = animatedIndex(flag[10]);
    }
  }
  obj2 = { runOnJS: arg1(dependencyMap[10]).runOnJS, setAccessibilityViewIsModal: tmp24 };
  te.__closure = obj2;
  te.__workletHash = 16051387075966;
  te.__initData = closure_16;
  const animatedReaction1 = arg1(dependencyMap[10]).useAnimatedReaction(ne, te);
  let tmp26 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp26 = tmp5;
  }
  const obj12 = arg1(dependencyMap[10]);
  obj3 = {};
  let tmp29 = null;
  if (mobileVisualRefreshConfig.enabled) {
    tmp29 = tmp27;
  }
  obj3.gradient = tmp29;
  obj4 = {};
  let str;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  obj4.importantForAccessibility = str;
  const items5 = [tmp.container, { marginLeft: left, marginRight: right }, ];
  obj5 = {};
  if (null == width) {
    const _Number = Number;
    width = Number.MAX_SAFE_INTEGER;
  }
  obj5.width = Math.min(width, width2 - left - right);
  obj5.height = height;
  items5[2] = obj5;
  obj4.style = items5;
  obj4.pointerEvents = "box-none";
  obj6 = { ref, animatedIndex, animatedPosition, animationConfigs, onClose, onAnimate: callback, enableContentPanningGesture: !tmp26, enableHandlePanningGesture: !tmp26, handleComponent: callback2 };
  const tmp27 = importDefault(dependencyMap[25])();
  const tmp28 = forceMaxHeight;
  const tmp30 = ref;
  const tmp31 = forceMaxHeight;
  const tmp32 = importDefault(dependencyMap[16]);
  let tmp33;
  if (obj18.isAndroid()) {
    if (flag3) {
      tmp33 = callback4;
    }
  }
  obj6.renderFooter = tmp33;
  obj6.backgroundComponent = callback3;
  obj6.backgroundStyle = tmp.background;
  if (null != backdropComponent) {
    callback1 = backdropComponent;
  }
  obj6.backdropComponent = callback1;
  const items6 = [-10, 10];
  obj6.activeOffsetY = items6;
  let num3 = 0;
  if (rendersHandle) {
    num3 = arg1(dependencyMap[8]).ACTION_SHEET_DRAG_HANDLE_HEIGHT;
  }
  obj6.handleHeight = num3;
  const merged = Object.assign(tmp4);
  const obj7 = { nativeID: "portal-keyboard-sheet" };
  const items7 = [tmp.roundingView, , ];
  let tmp38 = !disableHeaderRoundingAnimation;
  if (tmp38) {
    tmp38 = animatedStyle;
  }
  items7[1] = tmp38;
  items7[2] = roundingViewStyle;
  obj7.style = items7;
  obj7.onAccessibilityEscape = function onAccessibilityEscape() {
    const current = ref.current;
    if (null != current) {
      current.collapse();
    }
  };
  obj7.accessibilityViewIsModal = tmp23[0];
  obj7.children = children;
  obj6["children"] = forceMaxHeight(arg1(dependencyMap[27]).AccessibilityViewAnimated, obj7);
  const items8 = [tmp31(tmp32, obj6), , ];
  let tmp39 = closure_9;
  if (closure_9) {
    tmp39 = flag3;
  }
  if (tmp39) {
    obj8 = { animatedSheetIndex: animatedIndex };
    tmp39 = forceMaxHeight(importDefault(dependencyMap[28]), obj8);
  }
  items8[1] = tmp39;
  items8[2] = forceMaxHeight(arg1(dependencyMap[29]).NavScrim, {});
  obj4.children = items8;
  obj3.children = tmp30(importDefault(dependencyMap[10]).View, obj4);
  return tmp28(arg1(dependencyMap[26]).ThemeContextProvider, obj3);
});
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/keyboard/native/PortalKeyboardBottomSheet.tsx");

export default forwardRefResult;

// Module ID: 11199
// Function ID: 87148
// Name: PortalKeyboardBottomSheetHeader
// Dependencies: [57, 31, 27, 9547, 33, 477, 4130, 689, 8372, 4528, 3991, 1324, 11200, 4476, 5445, 566, 5189, 4099, 10229, 1820, 4559, 3834, 1557, 1450, 4001, 3977, 3842, 4525, 9342, 5448, 2]

// Module 11199 (PortalKeyboardBottomSheetHeader)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "AccessibilityView";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "get ActivityIndicator";

let Platform;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
function PortalKeyboardBottomSheetHeader(arg0) {
  let handleCollapse;
  let style;
  ({ style, handleCollapse } = arg0);
  const tmp = callback2();
  let obj = require(4528) /* SCREEN_READER_ENABLED_GETTER */;
  obj = {};
  const items = [tmp.headerContainer, , ];
  let prop;
  if (obj.useIsScreenReaderEnabled()) {
    prop = tmp.headerContainerScreenReaderEnabled;
  }
  items[1] = prop;
  items[2] = style;
  obj.style = items;
  obj.children = callback(require(8372) /* TwinButtons */.ActionSheetDragHandle, { onPress: handleCollapse });
  return callback(closure_5, obj);
}
function PortalKeyboardBackground(arg0) {
  let pointerEvents;
  let roundingStyle;
  let style;
  ({ pointerEvents, style, roundingStyle } = arg0);
  style = [, , ];
  style[0] = style;
  style[1] = callback2().background;
  style[2] = roundingStyle;
  return callback(importDefault(3991).View, { pointerEvents, style });
}
({ Platform, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
set = set.isIOS();
let obj = { container: { position: "absolute", top: 0, left: 0 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, overflow: "hidden" };
obj.background = obj;
set = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.none, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.none, width: "100%", height: require("TwinButtons").ACTION_SHEET_DRAG_HANDLE_HEIGHT, marginBottom: -require("TwinButtons").ACTION_SHEET_DRAG_HANDLE_HEIGHT };
obj.headerContainer = set;
_createForOfIteratorHelperLoose = { marginBottom: -require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.headerContainerScreenReaderEnabled = _createForOfIteratorHelperLoose;
obj.roundingView = { overflow: "hidden", display: "flex" };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_11 = { code: "function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}" };
let closure_12 = { code: "function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}" };
let closure_13 = { code: "function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}" };
let closure_14 = { code: "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex,cornerRadiusInputStart,cornerRadiusInputEnd,cornerRadius}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp')};}" };
let closure_15 = { code: "function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
let closure_16 = { code: "function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
let result = set.fileFinishedImporting("modules/keyboard/native/PortalKeyboardBottomSheet.tsx");

export default importAllResult.forwardRef(function PortalKeyboardBottomSheet(animatedIndex) {
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
  const chatInputRef = animatedIndex.chatInputRef;
  let flag = animatedIndex.isAppsKeyboard;
  ({ animatedPosition, children } = animatedIndex);
  if (flag === undefined) {
    flag = false;
  }
  const onClose = animatedIndex.onClose;
  ({ backdropComponent, headerStyle } = animatedIndex);
  ({ disableHeaderRoundingAnimation, onAnimate } = animatedIndex);
  ({ rendersHandle, animationConfigs, transitionState, roundingViewStyle } = animatedIndex);
  if (rendersHandle === undefined) {
    rendersHandle = true;
  }
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
  let c9;
  let isScreenReaderEnabled;
  let derivedValue;
  let token;
  let num;
  let num2;
  let c15;
  let c16;
  let tmp = isScreenReaderEnabled();
  ref = headerStyle.useRef(null);
  let obj = animatedIndex(flag[11]);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "AutocompleteWrapper" });
  const chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  obj = { forceMaxHeight, enablePanDownToClose: flag2 };
  const tmp5 = transitionState === animatedIndex(flag[13]).TransitionStates.YEETED;
  c9 = tmp5;
  let obj2 = animatedIndex(flag[14]);
  const bottomSheetImperativeHandle = obj2.useBottomSheetImperativeHandle(arg1, ref);
  let items = [ref, tmp5];
  const layoutEffect = headerStyle.useLayoutEffect(() => {
    if (c9) {
      const current = ref.current;
      if (null != current) {
        current.forceClose();
      }
    }
  }, items);
  let obj3 = animatedIndex(flag[15]);
  let items1 = [rendersHandle];
  const stateFromStores = obj3.useStateFromStores(items1, () => rendersHandle.isOpen());
  if (flag3) {
    flag3 = !tmp5;
  }
  let obj4 = animatedIndex(flag[9]);
  isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
  let items2 = [chatInputRef, tmp5, onAnimate, onClose, flag];
  const callback = headerStyle.useCallback((arg0, arg1, arg2) => {
    if (c9) {
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
            obj2 = animatedIndex(flag[18]);
          }
        }
      }
    }
  }, items2);
  let obj5 = animatedIndex(flag[10]);
  class U {
    constructor() {
      return animatedIndex.get() > 0.975;
    }
  }
  U.__closure = { animatedIndex };
  U.__workletHash = 2001839633402;
  U.__initData = derivedValue;
  derivedValue = obj5.useDerivedValue(U);
  let obj6 = animatedIndex(flag[10]);
  class W {
    constructor() {
      return U.get();
    }
  }
  W.__closure = { isFullyExpanded: derivedValue };
  W.__workletHash = 9531298805666;
  W.__initData = token;
  class X {
    constructor(arg0, arg1) {
      tmp = animatedIndex;
      if (null != arg1) {
        if (!tmp) {
          tmp = c7;
        }
        if (!tmp) {
          tmp2 = animatedIndex;
          tmp3 = c2;
          num = 10;
          obj = animatedIndex(c2[10]);
          num2 = 19;
          tmp4 = obj.runOnJS(animatedIndex(c2[19]).dismissGlobalKeyboard)();
        }
      }
      return;
    }
  }
  obj = { forceMaxHeight, runOnJS: animatedIndex(flag[10]).runOnJS, dismissGlobalKeyboard: animatedIndex(flag[19]).dismissGlobalKeyboard };
  X.__closure = obj;
  X.__workletHash = 14649856286006;
  X.__initData = num;
  const animatedReaction = obj6.useAnimatedReaction(W, X);
  chatInputRef(flag[20])(() => () => {
    if (null != outer1_3) {
      outer1_3();
    }
  });
  let callback1 = headerStyle.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["pressBehavior"] = "collapse";
    return forceMaxHeight(animatedIndex(flag[16]).BottomSheetBackdrop, obj);
  }, []);
  let items3 = [headerStyle, ref, rendersHandle, derivedValue, isScreenReaderEnabled];
  const callback2 = headerStyle.useCallback(() => {
    let tmp = null;
    if (false !== rendersHandle) {
      const obj = {
        style: headerStyle,
        handleCollapse() {
            const current = outer1_8.current;
            if (null != current) {
              current.collapse();
            }
            if (outer1_10) {
              const current2 = outer1_8.current;
              if (null != current2) {
                current2.forceClose();
              }
            }
          },
        isFullyExpanded: derivedValue
      };
      tmp = forceMaxHeight(outer1_17, obj);
    }
    return tmp;
  }, items3);
  let obj8 = animatedIndex(flag[21]);
  token = obj8.useToken(chatInputRef(flag[7]).modules.mobile.MOBILE_KEYBOARD_TOP_BORDER_RADIUS);
  num = 0;
  if (chatInputFloating) {
    num = -1;
  }
  num2 = 1;
  if (chatInputFloating) {
    num2 = 0;
  }
  const tmp4 = chatInputRef(flag[12])(obj);
  function ee() {
    const obj = {};
    const items = [num, num2];
    const items1 = [0, token];
    obj.borderTopLeftRadius = animatedIndex(flag[10]).interpolate(animatedIndex.get(), items, items1, "clamp");
    const obj2 = animatedIndex(flag[10]);
    const items2 = [num, num2];
    const items3 = [0, token];
    obj.borderTopRightRadius = animatedIndex(flag[10]).interpolate(animatedIndex.get(), items2, items3, "clamp");
    return obj;
  }
  const obj1 = { interpolate: animatedIndex(flag[10]).interpolate, animatedIndex, cornerRadiusInputStart: num, cornerRadiusInputEnd: num2, cornerRadius: token };
  ee.__closure = obj1;
  ee.__workletHash = 6979425892410;
  ee.__initData = num2;
  const animatedStyle = animatedIndex(flag[10]).useAnimatedStyle(ee);
  let tmp18;
  if (chatInputFloating) {
    if (!disableHeaderRoundingAnimation) {
      tmp18 = animatedStyle;
    }
  }
  c15 = tmp18;
  const items4 = [tmp18];
  const callback3 = headerStyle.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["roundingStyle"] = c15;
    return forceMaxHeight(outer1_18, obj);
  }, items4);
  const obj10 = animatedIndex(flag[10]);
  ({ left, right } = chatInputRef(flag[22])());
  const tmp20 = chatInputRef(flag[22])();
  ({ height, width: width2 } = chatInputRef(flag[23])({ ignoreKeyboard: true }));
  const callback4 = headerStyle.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["children"] = forceMaxHeight(animatedIndex(flag[24]).PortalHost, { name: "expression-footer" });
    return forceMaxHeight(animatedIndex(flag[16]).BottomSheetFooter, obj);
  }, []);
  const tmp23 = onClose(headerStyle.useState(false), 2);
  c16 = tmp24;
  const tmp21 = chatInputRef(flag[23])({ ignoreKeyboard: true });
  function ne() {
    return Math.max(animatedIndex.get(), 0) > 0;
  }
  ne.__closure = { animatedIndex };
  ne.__workletHash = 8952872079740;
  ne.__initData = c15;
  function te(arg0, arg1) {
    if (arg0 !== arg1) {
      animatedIndex(flag[10]).runOnJS(c16)(arg0);
      const obj = animatedIndex(flag[10]);
    }
  }
  obj2 = { runOnJS: animatedIndex(flag[10]).runOnJS, setAccessibilityViewIsModal: tmp24 };
  te.__closure = obj2;
  te.__workletHash = 16051387075966;
  te.__initData = c16;
  const animatedReaction1 = animatedIndex(flag[10]).useAnimatedReaction(ne, te);
  let tmp26 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp26 = tmp5;
  }
  const obj12 = animatedIndex(flag[10]);
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
  tmp27 = chatInputRef(flag[25])();
  const tmp28 = forceMaxHeight;
  const tmp30 = ref;
  const tmp31 = forceMaxHeight;
  const tmp32 = chatInputRef(flag[16]);
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
    num3 = animatedIndex(flag[8]).ACTION_SHEET_DRAG_HANDLE_HEIGHT;
  }
  obj6.handleHeight = num3;
  let merged = Object.assign(tmp4);
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
  obj6["children"] = forceMaxHeight(animatedIndex(flag[27]).AccessibilityViewAnimated, obj7);
  const items8 = [tmp31(tmp32, obj6), , ];
  let tmp39 = c9;
  if (c9) {
    tmp39 = flag3;
  }
  if (tmp39) {
    obj8 = { animatedSheetIndex: animatedIndex };
    tmp39 = forceMaxHeight(chatInputRef(flag[28]), obj8);
  }
  items8[1] = tmp39;
  items8[2] = forceMaxHeight(animatedIndex(flag[29]).NavScrim, {});
  obj4.children = items8;
  obj3.children = tmp30(chatInputRef(flag[10]).View, obj4);
  return tmp28(animatedIndex(flag[26]).ThemeContextProvider, obj3);
});

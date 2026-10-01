// Module ID: 11561
// Function ID: 11562
// Name: PortalKeyboardBottomSheet
// Dependencies: [32, 19, 17, 8966, 21, 1364, 4836, 576, 8370, 5266, 4566, 11562, 4540, 6574, 11563, 504, 6045, 4801, 9549, 1876, 5298, 4531, 1613, 1479, 4708, 4688, 5263, 9738, 6461, 2]

// Module 11561 (PortalKeyboardBottomSheet)
import nativeDefault from "native" /* 576 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1876 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5266 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import native from "native" /* 8370 */;
import isChannelFocused from "isChannelFocused" /* 9549 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import NativeMenuStore from "NativeMenuStore" /* 8966 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let Platform;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
function PortalKeyboardBottomSheetHeader(arg0) {
  let handleCollapse;
  let style;
  ({ style, handleCollapse } = arg0);
  const tmp = closure_10();
  const items = [tmp.headerContainer, , ];
  let prop;
  const obj = useIsScreenReaderEnabled;
  const tmp5 = hasOwnProperty;
  if (obj.useIsScreenReaderEnabled()) {
    prop = tmp.headerContainerScreenReaderEnabled;
  }
  items[1] = prop;
  items[2] = style;
  const obj2 = { style: items, children: metroImportDefault(native.ActionSheetDragHandle, { onPress: handleCollapse }) };
  return metroImportDefault(tmp5, obj2);
}
function PortalKeyboardBackground(arg0) {
  let items;
  let pointerEvents;
  let roundingStyle;
  let style;
  ({ pointerEvents, style, roundingStyle } = arg0);
  const obj = { pointerEvents, style: items };
  items = [style, closure_10().background, roundingStyle];
  closure_10();
  return metroImportDefault(ReanimatedRexportDefault.View, obj);
}
({ Platform, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = PlatformUtils.isIOS();
let createStyles = createStyles_mod;
let obj = { container: { position: "absolute", top: 0, left: 0 }, background: obj2, headerContainer: size, headerContainerScreenReaderEnabled: obj3, roundingView: { overflow: "hidden", display: "flex" } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none, width: "100%", height: native.ACTION_SHEET_DRAG_HANDLE_HEIGHT, marginBottom: -native.ACTION_SHEET_DRAG_HANDLE_HEIGHT };
obj3 = { marginBottom: -nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let closure_13 = { code: "function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}" };
let __initData = { code: "function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}" };
const __initData2 = { code: "function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}" };
const __initData3 = { code: "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex,cornerRadiusInputStart,cornerRadiusInputEnd,cornerRadius}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp')};}" };
const __initData4 = { code: "function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
const __initData5 = { code: "function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
const forwardRefResult = react.forwardRef(function PortalKeyboardBottomSheet(animatedIndex, ref) {
  let AccessibilityViewAnimated;
  let View;
  let animatedPosition;
  let animationConfigs;
  let backdropComponent;
  let children;
  let closure_14;
  let disableHeaderRoundingAnimation;
  let forceMaxHeight;
  let headerStyle;
  let height;
  let items5;
  let items7;
  let left;
  let num;
  let obj11;
  let obj9;
  let onAnimate;
  let rendersHandle;
  let right;
  let roundingViewStyle;
  let tmp33;
  let tmp35;
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
  let isScreenReaderEnabled;
  let derivedValue;
  let token;
  let animatedStyle;
  __initData = undefined;
  let tmp = isScreenReaderEnabled();
  let obj = headerStyle;
  ref = headerStyle.useRef(null);
  let tmp3 = chatInputRef;
  const tmp4 = flag;
  const tmp5 = chatInputRef(flag[11])({ forceMaxHeight, enablePanDownToClose: flag2 });
  let tmp7 = transitionState === animatedIndex(flag[12]).TransitionStates.YEETED;
  closure_9 = tmp7;
  let obj2 = animatedIndex(flag[13]);
  const bottomSheetImperativeHandle = obj2.useBottomSheetImperativeHandle(ref, ref);
  let items = [ref, tmp7];
  const layoutEffect = headerStyle.useLayoutEffect(() => {
    const tmp = closure_9;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current.forceClose();
      }
    }
  }, items);
  let obj3 = { animatedIndex, bottomSheetRef: ref, containerHeight: tmp5.containerHeight, forceMaxHeight, isYeeted: tmp7, snapPoints: tmp5.snapPoints };
  chatInputRef(flag[14])(obj3);
  let items1 = [rendersHandle];
  const obj4 = animatedIndex(flag[15]);
  const stateFromStores = obj4.useStateFromStores(items1, () => rendersHandle.isOpen());
  if (flag3) {
    flag3 = !tmp7;
  }
  const tmp6Result = animatedIndex(tmp4[9]);
  isScreenReaderEnabled = tmp6Result.useIsScreenReaderEnabled();
  const items2 = [chatInputRef, tmp7, onAnimate, onClose, flag];
  const callback = obj.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    const tmp = closure_9;
    if (tmp) {
      if (-1 !== arg1) {
        if (onClose != null) {
          tmp18();
        }
      }
    }
    const tmp2 = arg0 !== arg1 && -1 !== arg1;
    if (tmp2) {
      if (onAnimate != null) {
        tmp4(arg0, arg1, arg4);
      }
      if (0 === arg0) {
        if (arg4 !== BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
          const obj2 = HapticUtils;
          const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        }
      } else {
        let tmp7 = 1 === arg0 && 0 === arg1;
        if (tmp7) {
          const obj = isChannelFocused;
          tmp7 = !obj.isChannelFocused();
        }
        if (tmp7) {
          tmp7 = flag;
        }
        if (tmp7) {
          const current = chatInputRef.current;
          if (current != null) {
            current.closeCustomKeyboard();
          }
        }
      }
    }
  }, items2);
  const tmp6Result7 = animatedIndex(tmp4[10]);
  class J {
    constructor() {
      return animatedIndex.get() > 0.975;
    }
  }
  J.__closure = { animatedIndex };
  J.__workletHash = 2001839633402;
  J.__initData = animatedStyle;
  derivedValue = tmp6Result7.useDerivedValue(J);
  const fn = function j() {
    return derivedValue.get();
  };
  fn.__closure = { isFullyExpanded: derivedValue };
  fn.__workletHash = 9531298805666;
  fn.__initData = __initData;
  const tmp6Result8 = animatedIndex(tmp4[10]);
  class Y {
    constructor(arg0, arg1) {
      if (null != arg1) {
        const tmp = arg0 || forceMaxHeight;
        if (!tmp) {
          const obj = ReanimatedRexport;
          obj.runOnJS(KeyboardManagerUtils.dismissGlobalKeyboard)();
        }
      }
    }
  }
  Y.__closure = { forceMaxHeight, runOnJS: animatedIndex(tmp4[10]).runOnJS, dismissGlobalKeyboard: animatedIndex(tmp4[19]).dismissGlobalKeyboard };
  Y.__workletHash = 14649856286006;
  Y.__initData = __initData2;
  ({ forceMaxHeight, runOnJS: animatedIndex(tmp4[10]).runOnJS, dismissGlobalKeyboard: animatedIndex(tmp4[19]).dismissGlobalKeyboard });
  const animatedReaction = tmp6Result8.useAnimatedReaction(fn, Y);
  tmp3(tmp4[20])(() => () => {
    if (onClose != null) {
      tmp();
    }
  });
  const items3 = [headerStyle, ref, rendersHandle, derivedValue, isScreenReaderEnabled];
  const callback1 = obj.useCallback((arg0) => {
    const obj = { pressBehavior: "collapse" };
    const BottomSheetBackdrop = animatedIndex(flag[16]).BottomSheetBackdrop;
    const merged = Object.assign(arg0);
    return forceMaxHeight(BottomSheetBackdrop, obj);
  }, []);
  const callback2 = obj.useCallback(() => {
    let tmp = null;
    if (false !== rendersHandle) {
      let tmp3 = PortalKeyboardBottomSheetHeader;
      const obj = {
        style: headerStyle,
        handleCollapse() {
            const current = ref.current;
            const tmp = ref;
            if (current != null) {
              current.collapse();
            }
            const tmp3 = isScreenReaderEnabled;
            if (tmp3) {
              const current2 = tmp.current;
              if (current2 != null) {
                current2.forceClose();
              }
            }
          },
        isFullyExpanded: derivedValue
      };
      tmp = metroImportDefault(PortalKeyboardBottomSheetHeader, obj);
    }
    return tmp;
  }, items3);
  const tmp6Result9 = animatedIndex(tmp4[21]);
  token = tmp6Result9.useToken(tmp3(tmp4[7]).modules.mobile.MOBILE_KEYBOARD_TOP_BORDER_RADIUS);
  const tmp6Result10 = animatedIndex(tmp4[10]);
  class W {
    constructor() {
      let items;
      let items1;
      let obj2;
      let obj3;
      const obj = { borderTopLeftRadius: obj2.interpolate(animatedIndex.get(), [-1, 0], items, "clamp"), borderTopRightRadius: obj3.interpolate(animatedIndex.get(), [-1, 0], items1, "clamp") };
      items = [0, token];
      items1 = [0, token];
      obj2 = ReanimatedRexport;
      obj3 = ReanimatedRexport;
      return obj;
    }
  }
  W.__closure = { interpolate: animatedIndex(tmp4[10]).interpolate, animatedIndex, cornerRadiusInputStart: -1, cornerRadiusInputEnd: 0, cornerRadius: token };
  W.__workletHash = 6979425892410;
  W.__initData = __initData3;
  ({ interpolate: animatedIndex(tmp4[10]).interpolate, animatedIndex, cornerRadiusInputStart: -1, cornerRadiusInputEnd: 0, cornerRadius: token });
  animatedStyle = tmp6Result10.useAnimatedStyle(W);
  let tmp21;
  if (!disableHeaderRoundingAnimation) {
    tmp21 = animatedStyle;
  }
  animatedStyle = tmp21;
  const items4 = [tmp21];
  const callback3 = obj.useCallback((arg0) => {
    const obj = { roundingStyle: animatedStyle };
    const merged = Object.assign(arg0);
    return metroImportDefault(PortalKeyboardBackground, obj);
  }, items4);
  ({ left, right } = tmp3(tmp4[22])());
  tmp3(tmp4[22])();
  ({ height, width: width2 } = tmp3(tmp4[23])({ ignoreKeyboard: true }));
  tmp3(tmp4[23])({ ignoreKeyboard: true });
  const callback4 = obj.useCallback((arg0) => {
    const obj = { children: forceMaxHeight(animatedIndex(flag[24]).PortalHost, { name: "expression-footer" }) };
    const BottomSheetFooter = animatedIndex(flag[16]).BottomSheetFooter;
    const merged = Object.assign(arg0);
    return forceMaxHeight(BottomSheetFooter, obj);
  }, []);
  const tmp26 = onClose(obj.useState(false), 2);
  __initData = tmp28;
  const first = tmp26[0];
  const fn2 = function $() {
    return Math.max(animatedIndex.get(), 0) > 0;
  };
  fn2.__closure = { animatedIndex };
  fn2.__workletHash = 8952872079740;
  fn2.__initData = __initData4;
  const tmp6Result11 = animatedIndex(tmp4[10]);
  class Z {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_14)(arg0);
      }
    }
  }
  Z.__closure = { runOnJS: animatedIndex(tmp4[10]).runOnJS, setAccessibilityViewIsModal: tmp26[1] };
  Z.__workletHash = 16051387075966;
  Z.__initData = __initData5;
  ({ runOnJS: animatedIndex(tmp4[10]).runOnJS, setAccessibilityViewIsModal: tmp26[1] });
  const animatedReaction1 = tmp6Result11.useAnimatedReaction(fn2, Z);
  const obj8 = { gradient: tmp3(tmp4[25])(), children: tmp33(View, obj9) };
  const ThemeContextProvider = tmp6(tmp4[12]).ThemeContextProvider;
  let str;
  View = tmp3(tmp4[10]).View;
  tmp33 = ref;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  obj9 = { importantForAccessibility: str, style: items5, pointerEvents: "box-none", children: items7 };
  items5 = [tmp.container, { marginLeft: left, marginRight: right }, ];
  const _Math = Math;
  if (width == null) {
    const _Number = Number;
    width = Number.MAX_SAFE_INTEGER;
  }
  size = { width: min(width, width2 - left - right), height };
  items5[2] = size;
  const obj10 = { ref, animatedIndex, animatedPosition, animationConfigs, onClose, onAnimate: callback, enableContentPanningGesture: !(isScreenReaderEnabled || tmp7), enableHandlePanningGesture: !(isScreenReaderEnabled || tmp7), handleComponent: callback2, renderFooter: tmp35, backgroundComponent: callback3, backgroundStyle: tmp.background, backdropComponent, activeOffsetY: [-10, 10], handleHeight: num, children: forceMaxHeight(AccessibilityViewAnimated, obj11) };
  tmp35 = undefined;
  const tmp3Result = tmp3(tmp4[16]);
  const tmp6Result12 = animatedIndex(tmp4[5]);
  if (tmp6Result12.isAndroid()) {
    if (flag3) {
      tmp35 = callback4;
    }
  }
  if (backdropComponent == null) {
    backdropComponent = callback1;
  }
  num = 0;
  if (rendersHandle) {
    num = tmp6(tmp4[8]).ACTION_SHEET_DRAG_HANDLE_HEIGHT;
  }
  let merged = Object.assign(tmp5);
  const items6 = [tmp.roundingView, , ];
  let tmp37 = !disableHeaderRoundingAnimation;
  AccessibilityViewAnimated = tmp6(tmp4[26]).AccessibilityViewAnimated;
  if (!disableHeaderRoundingAnimation) {
    tmp37 = animatedStyle;
  }
  obj11 = {
    nativeID: "portal-keyboard-sheet",
    style: items6,
    onAccessibilityEscape() {
      const current = ref.current;
      if (current != null) {
        current.collapse();
      }
    },
    accessibilityViewIsModal: first,
    children
  };
  items6[1] = tmp37;
  items6[2] = roundingViewStyle;
  items7 = [forceMaxHeight(tmp3Result, obj10), , ];
  let tmp32Result = closure_9 && flag3;
  if (tmp32Result) {
    const obj12 = { animatedSheetIndex: animatedIndex };
    tmp32Result = tmp32(tmp3(tmp4[27]), obj12);
  }
  items7[1] = tmp32Result;
  items7[2] = forceMaxHeight(animatedIndex(tmp4[28]).NavScrim, {});
  return forceMaxHeight(ThemeContextProvider, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardBottomSheet.tsx");

export default forwardRefResult;

// Module ID: 12596
// Function ID: 12597
// Name: PortalKeyboardBottomSheet
// Dependencies: [32, 19, 17, 10340, 21, 1377, 5170, 575, 9090, 5420, 1652, 12597, 5229, 5750, 12598, 504, 5422, 5406, 6953, 1705, 2017, 5751, 5754, 1627, 1493, 5360, 5340, 6176, 10104, 5764, 2]
// Exports: default

// Module 12596 (PortalKeyboardBottomSheet)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import HapticUtils from "HapticUtils" /* 5406 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5420 */;
import BottomSheetModal from "BottomSheetModal" /* 5422 */;
import isChannelFocused from "isChannelFocused" /* 6953 */;
import native from "native" /* 9090 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import NativeMenuStore from "NativeMenuStore" /* 10340 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

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
  return metroImportDefault(_modDef1652.View, obj);
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
let closure_13 = { code: "(function PortalKeyboardBottomSheetTsx1(){let[animatedIndex]=this.__closure;return animatedIndex.get()>0.975;})" };
let closure_14 = { code: "(function PortalKeyboardBottomSheetTsx2(){let[isFullyExpanded]=this.__closure;return isFullyExpanded.get();})" };
let closure_15 = { code: "(function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){let[forceMaxHeight,scheduleOnRN,dismissGlobalKeyboard]=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){scheduleOnRN(dismissGlobalKeyboard);}})" };
let closure_16 = { code: "(function PortalKeyboardBottomSheetTsx4(){let[interpolate,animatedIndex,cornerRadiusInputStart,cornerRadiusInputEnd,cornerRadius]=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp')};})" };
let closure_17 = { code: "(function PortalKeyboardBottomSheetTsx5(){let[animatedIndex]=this.__closure;return Math.max(animatedIndex.get(),0)>0;})" };
let closure_18 = { code: "(function PortalKeyboardBottomSheetTsx6(result,previous){let[scheduleOnRN,setAccessibilityViewIsModal]=this.__closure;if(result===previous)return;scheduleOnRN(setAccessibilityViewIsModal,result);})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardBottomSheet.tsx");

export default function PortalKeyboardBottomSheet(isAppsKeyboard) {
  let AccessibilityViewAnimated;
  let View;
  let animatedIndex;
  let animatedPosition;
  let animationConfigs;
  let backdropComponent;
  let chatInputRef;
  let children;
  let disableHeaderRoundingAnimation;
  let forceMaxHeight;
  let headerStyle;
  let height;
  let items17;
  let items19;
  let left;
  let num;
  let obj6;
  let obj8;
  let onAnimate;
  let rendersHandle;
  let right;
  let roundingViewStyle;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp43;
  let tmp44;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp55;
  let tmp57;
  let transitionState;
  let width;
  let width2;
  ({ animatedIndex, chatInputRef } = isAppsKeyboard);
  let flag = isAppsKeyboard.isAppsKeyboard;
  ({ animatedPosition, children } = isAppsKeyboard);
  if (flag === undefined) {
    flag = false;
  }
  const onClose = isAppsKeyboard.onClose;
  ({ backdropComponent, headerStyle } = isAppsKeyboard);
  ({ disableHeaderRoundingAnimation, onAnimate } = isAppsKeyboard);
  ({ rendersHandle, animationConfigs, transitionState, roundingViewStyle } = isAppsKeyboard);
  if (rendersHandle === undefined) {
    rendersHandle = true;
  }
  ({ width, forceMaxHeight } = isAppsKeyboard);
  if (forceMaxHeight === undefined) {
    forceMaxHeight = false;
  }
  let flag2 = isAppsKeyboard.enablePanDownToClose;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = isAppsKeyboard.renderExpressionFooter;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let isScreenReaderEnabled;
  let derivedValue;
  let animatedStyle;
  const ref = isAppsKeyboard.ref;
  let tmp = animatedStyle();
  let obj = onAnimate;
  const ref1 = onAnimate.useRef(null);
  let tmp3 = flag;
  const tmp4 = onClose;
  const tmp5 = flag(onClose[11])({ forceMaxHeight, enablePanDownToClose: flag2 });
  let tmp7 = transitionState === chatInputRef(onClose[12]).TransitionStates.YEETED;
  let closure_7 = tmp7;
  let obj2 = chatInputRef(onClose[13]);
  const bottomSheetImperativeHandle = obj2.useBottomSheetImperativeHandle(ref, ref1);
  let items = [ref1, tmp7];
  const layoutEffect = onAnimate.useLayoutEffect(() => {
    const tmp = closure_7;
    if (tmp) {
      const current = ref1.current;
      if (current != null) {
        current.forceClose();
      }
    }
  }, items);
  const obj3 = { animatedIndex, bottomSheetRef: ref1, containerHeight: tmp5.containerHeight, forceMaxHeight, isYeeted: tmp7, snapPoints: tmp5.snapPoints };
  flag(onClose[14])(obj3);
  let items1 = [ref1];
  const obj4 = chatInputRef(onClose[15]);
  const stateFromStores = obj4.useStateFromStores(items1, () => ref1.isOpen());
  if (flag3) {
    flag3 = !tmp7;
  }
  const tmp6Result = chatInputRef(tmp4[9]);
  isScreenReaderEnabled = tmp6Result.useIsScreenReaderEnabled();
  let items2 = [chatInputRef, tmp7, onAnimate, onClose, flag];
  const callback = obj.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    const tmp = closure_7;
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
  let items3 = [closure_13, animatedIndex];
  let c0;
  [tmp14, tmp15] = items3;
  const tmp6Result7 = chatInputRef(tmp4[10]);
  class PortalKeyboardBottomSheetTsx1 {
    constructor() {
      return _undefined.get() > 0.975;
    }
  }
  const items4 = [tmp15];
  PortalKeyboardBottomSheetTsx1.__closure = items4;
  PortalKeyboardBottomSheetTsx1.__workletHash = 856294233955;
  PortalKeyboardBottomSheetTsx1.__initData = tmp14;
  derivedValue = tmp6Result7.useDerivedValue(PortalKeyboardBottomSheetTsx1);
  const items5 = [closure_14, derivedValue];
  c0 = undefined;
  [tmp18, tmp19] = items5;
  const tmp6Result8 = chatInputRef(tmp4[10]);
  class PortalKeyboardBottomSheetTsx2 {
    constructor() {
      return _undefined.get();
    }
  }
  const items6 = [tmp19];
  PortalKeyboardBottomSheetTsx2.__closure = items6;
  PortalKeyboardBottomSheetTsx2.__workletHash = 6167248889275;
  PortalKeyboardBottomSheetTsx2.__initData = tmp18;
  const items7 = [closure_15, forceMaxHeight, , ];
  const useAnimatedReaction = tmp6Result8.useAnimatedReaction;
  items7[2] = chatInputRef(tmp4[19]).scheduleOnRN;
  items7[3] = chatInputRef(tmp4[20]).dismissGlobalKeyboard;
  c0 = undefined;
  let c1;
  let c2;
  [tmp20, tmp21, tmp22, tmp23] = items7;
  class PortalKeyboardBottomSheetTsx3 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        const tmp = arg0 || c0;
        if (!tmp) {
          _undefined(c2);
        }
      }
    }
  }
  const items8 = [tmp21, tmp22, tmp23];
  PortalKeyboardBottomSheetTsx3.__closure = items8;
  PortalKeyboardBottomSheetTsx3.__workletHash = 2281542026606;
  PortalKeyboardBottomSheetTsx3.__initData = tmp20;
  const animatedReaction = useAnimatedReaction(PortalKeyboardBottomSheetTsx2, PortalKeyboardBottomSheetTsx3);
  tmp3(tmp4[21])(() => () => {
    if (onClose != null) {
      tmp();
    }
  });
  const items9 = [headerStyle, ref1, rendersHandle, derivedValue, isScreenReaderEnabled];
  const callback1 = obj.useCallback((arg0) => {
    const obj = { pressBehavior: "collapse" };
    const BottomSheetBackdrop = chatInputRef(onClose[16]).BottomSheetBackdrop;
    const merged = Object.assign(arg0);
    return closure_7(BottomSheetBackdrop, obj);
  }, []);
  const callback2 = obj.useCallback(() => {
    let ref;
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
  }, items9);
  const tmp6Result9 = chatInputRef(tmp4[22]);
  const token = tmp6Result9.useToken(tmp3(tmp4[7]).modules.mobile.MOBILE_KEYBOARD_TOP_BORDER_RADIUS);
  const items10 = [closure_16, , , , , ];
  const useAnimatedStyle = chatInputRef(tmp4[10]).useAnimatedStyle;
  chatInputRef(tmp4[10]);
  items10[1] = chatInputRef(tmp4[10]).interpolate;
  items10[2] = animatedIndex;
  items10[3] = -1;
  items10[4] = 0;
  items10[5] = token;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items10;
  class PortalKeyboardBottomSheetTsx4 {
    constructor() {
      let items;
      let items1;
      let items2;
      let items3;
      const obj = { borderTopLeftRadius: _undefined(_undefined2.get(), items, items1, "clamp"), borderTopRightRadius: _undefined(_undefined2.get(), items2, items3, "clamp") };
      items = [c2, c3];
      items1 = [0, c4];
      items2 = [c2, c3];
      items3 = [0, c4];
      return obj;
    }
  }
  const items11 = [tmp31, tmp32, tmp33, tmp34, tmp35];
  PortalKeyboardBottomSheetTsx4.__closure = items11;
  PortalKeyboardBottomSheetTsx4.__workletHash = 10458527292035;
  PortalKeyboardBottomSheetTsx4.__initData = tmp30;
  animatedStyle = useAnimatedStyle(PortalKeyboardBottomSheetTsx4);
  let tmp37;
  if (!disableHeaderRoundingAnimation) {
    tmp37 = animatedStyle;
  }
  animatedStyle = tmp37;
  const items12 = [tmp37];
  const callback3 = obj.useCallback((arg0) => {
    const obj = { roundingStyle: animatedStyle };
    const merged = Object.assign(arg0);
    return metroImportDefault(PortalKeyboardBackground, obj);
  }, items12);
  ({ left, right } = tmp3(tmp4[23])());
  tmp3(tmp4[23])();
  ({ height, width: width2 } = tmp3(tmp4[24])({ ignoreKeyboard: true }));
  tmp3(tmp4[24])({ ignoreKeyboard: true });
  const callback4 = obj.useCallback((arg0) => {
    const obj = { children: closure_7(chatInputRef(onClose[25]).PortalHost, { name: "expression-footer" }) };
    const BottomSheetFooter = chatInputRef(onClose[16]).BottomSheetFooter;
    const merged = Object.assign(arg0);
    return closure_7(BottomSheetFooter, obj);
  }, []);
  [tmp43, tmp44] = headerStyle(obj.useState(false), 2);
  headerStyle(obj.useState(false), 2);
  const items13 = [closure_17, animatedIndex];
  c0 = undefined;
  [tmp46, tmp47] = items13;
  const tmp6Result11 = chatInputRef(tmp4[10]);
  class PortalKeyboardBottomSheetTsx5 {
    constructor() {
      return Math.max(_undefined.get(), 0) > 0;
    }
  }
  const items14 = [tmp47];
  PortalKeyboardBottomSheetTsx5.__closure = items14;
  PortalKeyboardBottomSheetTsx5.__workletHash = 10562013634405;
  PortalKeyboardBottomSheetTsx5.__initData = tmp46;
  const items15 = [closure_18, , ];
  const useAnimatedReaction2 = tmp6Result11.useAnimatedReaction;
  items15[1] = chatInputRef(tmp4[19]).scheduleOnRN;
  items15[2] = tmp44;
  c0 = undefined;
  c1 = undefined;
  [tmp48, tmp49, tmp50] = items15;
  class PortalKeyboardBottomSheetTsx6 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items16 = [tmp49, tmp50];
  PortalKeyboardBottomSheetTsx6.__closure = items16;
  PortalKeyboardBottomSheetTsx6.__workletHash = 8913266183594;
  PortalKeyboardBottomSheetTsx6.__initData = tmp48;
  const animatedReaction2 = useAnimatedReaction2(PortalKeyboardBottomSheetTsx5, PortalKeyboardBottomSheetTsx6);
  const obj5 = { gradient: tmp3(tmp4[26])(), children: tmp55(View, obj6) };
  const ThemeContextProvider = tmp6(tmp4[12]).ThemeContextProvider;
  let str;
  View = tmp3(tmp4[10]).View;
  tmp55 = isScreenReaderEnabled;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  obj6 = { importantForAccessibility: str, style: items17, pointerEvents: "box-none", children: items19 };
  items17 = [tmp.container, { marginLeft: left, marginRight: right }, ];
  const _Math = Math;
  if (width == null) {
    const _Number = Number;
    width = Number.MAX_SAFE_INTEGER;
  }
  size = { width: min(width, width2 - left - right), height };
  items17[2] = size;
  const obj7 = { ref: ref1, animatedIndex, animatedPosition, animationConfigs, onClose, onAnimate: callback, enableContentPanningGesture: !(isScreenReaderEnabled || tmp7), enableHandlePanningGesture: !(isScreenReaderEnabled || tmp7), handleComponent: callback2, renderFooter: tmp57, backgroundComponent: callback3, backgroundStyle: tmp.background, backdropComponent, activeOffsetY: [-10, 10], handleHeight: num, children: closure_7(AccessibilityViewAnimated, obj8) };
  tmp57 = undefined;
  const tmp3Result = tmp3(tmp4[16]);
  const tmp6Result12 = chatInputRef(tmp4[5]);
  if (tmp6Result12.isAndroid()) {
    if (flag3) {
      tmp57 = callback4;
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
  const items18 = [tmp.roundingView, , ];
  let tmp59 = !disableHeaderRoundingAnimation;
  AccessibilityViewAnimated = tmp6(tmp4[27]).AccessibilityViewAnimated;
  if (!disableHeaderRoundingAnimation) {
    tmp59 = animatedStyle;
  }
  obj8 = {
    nativeID: "portal-keyboard-sheet",
    style: items18,
    onAccessibilityEscape: function handleClose() {
      const current = ref1.current;
      if (current != null) {
        current.collapse();
      }
    },
    accessibilityViewIsModal: tmp43,
    children
  };
  items18[1] = tmp59;
  items18[2] = roundingViewStyle;
  items19 = [closure_7(tmp3Result, obj7), , ];
  let tmp54Result = derivedValue && flag3;
  if (tmp54Result) {
    const obj9 = { animatedSheetIndex: animatedIndex };
    tmp54Result = tmp54(tmp3(tmp4[28]), obj9);
  }
  items19[1] = tmp54Result;
  items19[2] = closure_7(chatInputRef(tmp4[29]).NavScrim, {});
  return closure_7(ThemeContextProvider, obj5);
};

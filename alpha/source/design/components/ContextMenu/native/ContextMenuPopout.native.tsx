// Module ID: 16106
// Function ID: 16107
// Name: ContextMenuPopout
// Dependencies: [32, 19, 17, 21, 5141, 575, 10055, 1652, 5207, 5743, 1493, 1377, 5771, 1705, 10054, 5428, 6157, 5761, 16104, 5398, 5734, 1113, 2]
// Exports: ContextMenuPopout

// Module 16106 (ContextMenuPopout)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5207 */;
import spring_spring from "spring/spring" /* 5771 */;
import ContextMenuState from "ContextMenuState" /* 10054 */;
import ContextMenuConstants from "ContextMenuConstants" /* 10055 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj6;
function ContextMenuDivider() {
  const obj = { style: closure_9().divider };
  return metroRequire(hasOwnProperty, obj);
}
function ContextMenuBackdrop(arg0) {
  let onPress;
  let stringResult;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let visible;
  ({ onPress, visible } = arg0);
  const items = [closure_16, , , ];
  const tmp = closure_15();
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = spring_spring.withSpring;
  items[2] = visible;
  items[3] = ContextMenuConstants.CONTEXT_MENU_SPRING;
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class ContextMenuPopoutNativeTsx5 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2) };
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  ContextMenuPopoutNativeTsx5.__closure = items1;
  ContextMenuPopoutNativeTsx5.__workletHash = 16904658975809;
  ContextMenuPopoutNativeTsx5.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(ContextMenuPopoutNativeTsx5);
  let obj = { blur: "none", style: animatedStyle, accessibleDismissStyle: tmp.accessibleDismiss, onDismiss: onPress, accessibilityLabel: stringResult };
  const Backdrop = tmp2(5734).Backdrop;
  const tmp2Result = PlatformUtils;
  const isAndroidResult = tmp2Result.isAndroid();
  const intl = tmp2(1113).intl;
  const string = intl.string;
  const t = tmp2(1113).t;
  const tmp10 = metroRequire;
  if (isAndroidResult) {
    stringResult = string(t.hPBScv);
  } else {
    stringResult = string(t.xs0juG);
  }
  return tmp10(Backdrop, obj);
}
({ View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, titleContainer: obj3, divider: obj4 };
obj2 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, minWidth: ContextMenuConstants.CONTEXT_MENU_MIN_WIDTH };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj3 = { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING };
obj4 = { borderBottomWidth: ContextMenuConstants.CONTEXT_MENU_DIVIDER_HEIGHT, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles(obj);
let closure_10 = { code: "(function ContextMenuPopoutNativeTsx1(finished){let[transitionState,TransitionStates,scheduleOnRN,cleanUp,onClose]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);scheduleOnRN(onClose);}})" };
let closure_11 = { code: "(function ContextMenuPopoutNativeTsx2(){let[maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,_worklet_13810141093226_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp,onClose]=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function ContextMenuPopoutNativeTsx1Factory([_worklet_13810141093226_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp,onClose]){const ContextMenuPopoutNativeTsx1=function(finished){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);scheduleOnRN(onClose);}};ContextMenuPopoutNativeTsx1.__closure=[transitionState,TransitionStates,scheduleOnRN,cleanUp,onClose];ContextMenuPopoutNativeTsx1.__workletHash=13810141093226;ContextMenuPopoutNativeTsx1.__initData=_worklet_13810141093226_init_data;return ContextMenuPopoutNativeTsx1;}([_worklet_13810141093226_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp,onClose])),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};})" };
let closure_12 = { code: "(function update_ContextMenuPopoutNativeTsx3(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})" };
let closure_13 = { code: "(function ContextMenuPopoutNativeTsx4(){let[state,scheduleOnRN,requestClose]=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;scheduleOnRN(requestClose,isDismiss);})" };
createStyles = createStyles_mod;
let obj5 = { accessibleDismiss: obj6 };
obj6 = { height: "auto" };
const createStyles2 = createStyles.createStyles;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_15 = createStyles2(obj5);
let closure_16 = { code: "(function ContextMenuPopoutNativeTsx5(){let[withSpring,visible,CONTEXT_MENU_SPRING]=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};})" };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuPopout.native.tsx");

export function ContextMenuPopout(cleanUp) {
  let ScrollView;
  let bottom;
  let height;
  let items;
  let items10;
  let items11;
  let items9;
  let keyboardShouldPersistTaps;
  let menu;
  let obj5;
  let obj8;
  let positionX;
  let positionY;
  let state;
  let title;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmpResult;
  let top;
  let transitionState;
  let x;
  ({ menu, transitionState } = cleanUp);
  state = undefined;
  let sharedValue;
  let diff2;
  let first;
  let closure_6;
  let callback1;
  ({ x, positionX, positionY, height, items, state } = menu);
  const requestClose = menu.requestClose;
  ({ title, keyboardShouldPersistTaps } = menu);
  let str = "handled";
  cleanUp = cleanUp.cleanUp;
  const onClose = menu.onClose;
  if (undefined !== keyboardShouldPersistTaps) {
    str = keyboardShouldPersistTaps;
  }
  const y = menu.y;
  let tmp = transitionState;
  let tmp2 = requestClose;
  const dividerIndexes = menu.dividerIndexes;
  let tmp3 = transitionState(requestClose[7]);
  const useSharedValue = tmp3.useSharedValue;
  let num = 0;
  if (transitionState === transitionState(requestClose[8]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let obj = diff2;
  let items1 = [transitionState, sharedValue];
  const effect = diff2.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items1);
  const tmp6 = closure_9();
  let tmp7 = state;
  ({ top, bottom } = state(tmp2[9])({ includeKeyboardHeight: true }).insets);
  let obj2 = { ignoreKeyboard: tmpResult.isAndroid() };
  const tmp8 = state(tmp2[10]);
  tmpResult = tmp(tmp2[11]);
  size = tmp8(obj2);
  const tmp9 = "below" === positionY;
  let diff = size.height - y;
  const width = size.width;
  if (tmp9) {
    const diff1 = diff - bottom;
    diff2 = diff1 - tmp(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET;
  } else {
    const diff3 = diff - top;
    diff2 = diff3 - tmp(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET;
  }
  const tmp14 = sharedValue(obj.useState(height >= diff2), 2);
  first = tmp14[0];
  closure_6 = tmp14[1];
  let str2 = "bottom";
  if (tmp9) {
    str2 = "top";
  }
  let obj3 = { [str2]: y, [positionX]: x, maxHeight: diff2, maxWidth: width - tmp(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET - x };
  let items2 = [closure_11, diff2, height, , , , , , , , , , , , , , ];
  const useAnimatedStyle = tmp(tmp2[7]).useAnimatedStyle;
  tmp(tmp2[7]);
  items2[3] = tmp(tmp2[6]).CONTEXT_MENU_MIN_WIDTH;
  items2[4] = positionY;
  items2[5] = positionX;
  items2[6] = tmp(tmp2[6]).CONTEXT_MENU_MIN_SCALE;
  items2[7] = tmp(tmp2[12]).withSpring;
  items2[8] = tmp(tmp2[7]).interpolate;
  items2[9] = sharedValue;
  items2[10] = tmp(tmp2[6]).CONTEXT_MENU_SPRING;
  items2[11] = closure_10;
  items2[12] = transitionState;
  items2[13] = tmp(tmp2[8]).TransitionStates;
  items2[14] = tmp(tmp2[13]).scheduleOnRN;
  items2[15] = cleanUp;
  items2[16] = onClose;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items2;
  class ContextMenuPopoutNativeTsx2 {
    constructor() {
      let items2;
      let items3;
      let items4;
      let items5;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp7;
      let tmp8;
      let tmp9;
      const result = Math.min(c0, c1) / 2;
      const result1 = c2 / 2;
      let num = 1;
      if ("below" === c3) {
        num = -1;
      }
      let num2 = 1;
      if ("left" === c4) {
        num2 = -1;
      }
      const items = [c10, c11, c12, c13, c14, c15];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      const tmp5 = _undefined3(_undefined4.get(), [0, 1], [0, 1]);
      const obj2 = { opacity: _undefined(tmp5, c9, "respect-motion-settings", ContextMenuPopoutNativeTsx1), transform: items3 };
      class ContextMenuPopoutNativeTsx1 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
            tmp7 = closure_4;
            tmp8 = closure_2(closure_4);
          }
          return;
        }
      }
      const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12];
      ContextMenuPopoutNativeTsx1.__closure = items1;
      ContextMenuPopoutNativeTsx1.__workletHash = 13810141093226;
      ContextMenuPopoutNativeTsx1.__initData = tmp7;
      const obj3 = { translateX: _undefined(_undefined3(_undefined4.get(), [0, 1], items2), c9) };
      items2 = [num2 * result1 + c5 * -num2 * result1, 0];
      items3 = [obj3, , ];
      const obj4 = { translateY: _undefined(_undefined3(_undefined4.get(), [0, 1], items4), c9) };
      items4 = [num * result + c5 * -num * result, 0];
      items3[1] = obj4;
      const obj5 = { scale: _undefined(_undefined3(_undefined4.get(), [0, 1], items5), c9) };
      items5 = [c5, 1];
      items3[2] = obj5;
      return obj2;
    }
  }
  let items3 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
  ContextMenuPopoutNativeTsx2.__closure = items3;
  ContextMenuPopoutNativeTsx2.__workletHash = 221976609707;
  ContextMenuPopoutNativeTsx2.__initData = tmp17;
  let items4 = [state, requestClose, first];
  const animatedStyle = useAnimatedStyle(ContextMenuPopoutNativeTsx2);
  let items5 = [diff2];
  const memo = obj.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp8;
    let tmp9;
    const items = [closure_12, , ];
    items[1] = ContextMenuState.updateContextMenuState;
    items[2] = state;
    [tmp4, tmp5, tmp6] = items;
    function update(absoluteX) {
      _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
    }
    const items1 = [tmp5, tmp6];
    update.__closure = items1;
    update.__workletHash = 16389563863227;
    update.__initData = tmp4;
    const Gesture = tmp(5428).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(!first);
    const onStartResult = enabledResult.onStart(update);
    const items2 = [closure_13, state, , ];
    const onEnd = onStartResult.onUpdate(update).onEnd;
    onStartResult.onUpdate(update);
    items2[2] = _mod1705.scheduleOnRN;
    items2[3] = requestClose;
    let c0;
    let c1;
    let c2;
    [tmp8, tmp9, tmp10, tmp11] = items2;
    class ContextMenuPopoutNativeTsx4 {
      constructor() {
        const activeIndex = _undefined.activeIndex;
        _undefined2(c2, -1 === activeIndex.get());
      }
    }
    const items3 = [tmp9, tmp10, tmp11];
    ContextMenuPopoutNativeTsx4.__closure = items3;
    ContextMenuPopoutNativeTsx4.__workletHash = 3496590121856;
    ContextMenuPopoutNativeTsx4.__initData = tmp8;
    return onEnd(ContextMenuPopoutNativeTsx4);
  }, items4);
  const items6 = [requestClose];
  const callback = obj.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.height);
    closure_6(rounded >= Math.round(diff2));
  }, items5);
  callback1 = obj.useCallback(() => {
    requestClose(true);
  }, items6);
  const items7 = [requestClose];
  const callback2 = obj.useCallback(() => {
    requestClose(false);
  }, items7);
  tmp7(tmp2[16])(() => {
    callback1();
    return true;
  });
  const items8 = [closure_6(ContextMenuBackdrop, { onPress: callback1, visible: sharedValue }), ];
  let obj4 = { gesture: memo, children: closure_8(ScrollView, obj5) };
  const GestureDetector = tmp(tmp2[15]).GestureDetector;
  obj5 = { onLayout: callback, bounces: false, style: items9, keyboardShouldPersistTaps: str, accessibilityRole: "list", children: items11 };
  items9 = [tmp6.container, obj3, animatedStyle];
  let tmp40Result = null;
  ScrollView = tmp7(tmp2[7]).ScrollView;
  if (null != title) {
    const obj6 = { children: items10 };
    const obj7 = { style: tmp6.titleContainer, children: closure_6(tmp(tmp2[17]).Text, obj8) };
    obj8 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    items10 = [closure_6(first, obj7), closure_6(ContextMenuDivider, {})];
    tmp40Result = tmp40(tmp41, obj6);
  }
  const obj9 = { children: items8 };
  items11 = [
    tmp40Result,
    items.map((item, index) => {
      let IconComponent;
      let accessibilityRole;
      let iconSource;
      let label;
      let tmp3;
      let trailingIndicator;
      let variant;
      ({ label, action: items } = item);
      let tmp2 = closure_1_6;
      ({ iconSource, IconComponent, trailingIndicator, variant, accessibilityRole } = item);
      const diff = items.length - 1;
      let obj = {
        index,
        label,
        start: tmp3,
        end: index === diff,
        lastInSection: dividerIndexes.includes(index + 1),
        iconSource,
        IconComponent,
        trailingIndicator,
        state,
        onPress(arg0) {
          const obj = transitionState(requestClose[11]);
          let isAndroidResult = obj.isAndroid();
          const tmp = transitionState;
          const tmp2 = requestClose;
          if (isAndroidResult) {
            const tmpResult = tmp(tmp2[19]);
            isAndroidResult = tmpResult.getIsScreenReaderEnabled();
          }
          if (isAndroidResult) {
            items();
          }
          if (callback2 != null) {
            tmp6(arg0);
          }
        },
        variant,
        accessibilityRole
      };
      tmp3 = 0 === index;
      const ContextMenuItem = items(state[18]).ContextMenuItem;
      if (tmp3) {
        tmp3 = null == title;
      }
      const tmp2Result = tmp2(ContextMenuItem, obj, "" + label + "-" + index);
      let tmp7 = tmp2Result;
      if (dividerIndexes.includes(index)) {
        const _HermesInternal = HermesInternal;
        const obj2 = { children: items };
        items = [tmp2(closure_1_14, {}, "divider-" + index), tmp2Result];
        tmp7 = closure_1_8(callback1, obj2);
      }
      return tmp7;
    })
  ];
  items8[1] = closure_6(GestureDetector, obj4);
  return closure_8(callback1, obj9);
}

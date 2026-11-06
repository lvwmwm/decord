// Module ID: 16114
// Function ID: 16115
// Name: ContextMenuPopout
// Dependencies: [32, 19, 17, 21, 5170, 575, 10014, 5229, 5765, 1493, 1377, 7043, 7042, 5400, 1652, 5791, 1705, 10013, 5450, 6180, 5781, 16112, 5420, 5756, 1113, 2]
// Exports: ContextMenuPopout

// Module 16114 (ContextMenuPopout)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5229 */;
import spring_spring from "spring/spring" /* 5791 */;
import ContextMenuState from "ContextMenuState" /* 10013 */;
import ContextMenuConstants from "ContextMenuConstants" /* 10014 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let obj1;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj6;
let tmp10;
let tmp11;
let tmp12;
let tmp6;
let tmp7;
function ContextMenuDivider() {
  const obj = { style: closure_10().divider };
  return metroImportDefault(hasOwnProperty, obj);
}
function ContextMenuBackdrop(hasEntered) {
  let Backdrop;
  let obj2;
  let stringResult;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  hasEntered = hasEntered.hasEntered;
  const onPress = hasEntered.onPress;
  const items = [closure_20, hasEntered, , ];
  const tmp = closure_18();
  const useCallback = react.useCallback;
  items[2] = spring_spring.withSpring;
  items[3] = ContextMenuConstants.CONTEXT_MENU_SPRING;
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class ContextMenuPopoutNativeTsx8 {
    constructor() {
      obj = { initialValues: closure_0.get() ? { opacity: 1 } : {}, animations: null };
      obj1 = { opacity: closure_1(0, closure_2) };
      obj.animations = obj1;
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  ContextMenuPopoutNativeTsx8.__closure = items1;
  ContextMenuPopoutNativeTsx8.__workletHash = 12904450080034;
  ContextMenuPopoutNativeTsx8.__initData = tmp5;
  const items2 = [hasEntered];
  const callback = useCallback(ContextMenuPopoutNativeTsx8, items2);
  let obj = { style: StyleSheet.absoluteFill, pointerEvents: "box-none", entering: backdropEnteringAnimation, exiting: callback, children: metroImportDefault(Backdrop, obj2) };
  const View = _modDef1652.View;
  obj2 = { blur: "none", accessibleDismissStyle: tmp.accessibleDismiss, onDismiss: onPress, accessibilityLabel: stringResult };
  Backdrop = tmp3(5756).Backdrop;
  const tmp3Result = PlatformUtils;
  const isAndroidResult = tmp3Result.isAndroid();
  const intl = tmp3(1113).intl;
  const string = intl.string;
  const t = tmp3(1113).t;
  if (isAndroidResult) {
    stringResult = string(t.hPBScv);
  } else {
    stringResult = string(t.xs0juG);
  }
  return metroImportDefault(View, obj);
}
({ View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, titleContainer: obj3, divider: obj4 };
obj2 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, minWidth: ContextMenuConstants.CONTEXT_MENU_MIN_WIDTH };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj3 = { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING };
obj4 = { borderBottomWidth: ContextMenuConstants.CONTEXT_MENU_DIVIDER_HEIGHT, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
let items = [{ code: "(function getCollapsedOffset_ContextMenuPopoutNativeTsx1(width,height,positionX,positionY){let[CONTEXT_MENU_MIN_SCALE]=this.__closure;const scaleOffset=1-CONTEXT_MENU_MIN_SCALE;return{translateX:(positionX==='left'?-1:1)*(width/2)*scaleOffset,translateY:(positionY==='below'?-1:1)*(height/2)*scaleOffset};})" }, ContextMenuConstants.CONTEXT_MENU_MIN_SCALE];
[tmp6, tmp7] = items;
function getCollapsedOffset(arg0, arg1, arg2, arg3) {
  let result1;
  let num = 1;
  const diff = 1 - c0;
  let num2 = 1;
  const result = arg0 / 2;
  if ("left" === arg2) {
    num2 = -1;
  }
  const obj = { translateX: result * num2 * diff, translateY: result1 * num * diff };
  result1 = arg1 / 2;
  if ("below" === arg3) {
    num = -1;
  }
  return obj;
}
let items1 = [tmp7];
getCollapsedOffset.__closure = items1;
getCollapsedOffset.__workletHash = 16275195086554;
getCollapsedOffset.__initData = tmp6;
let closure_12 = { code: "(function ContextMenuPopoutNativeTsx2(values){let[keyboardDuration,KEYBOARD_EASING,withTiming]=this.__closure;const config={duration:keyboardDuration,easing:KEYBOARD_EASING};return{initialValues:{originY:values.currentOriginY,height:values.currentHeight},animations:{originY:withTiming(values.targetOriginY,config),height:withTiming(values.targetHeight,config)}};})" };
let closure_13 = { code: "(function ContextMenuPopoutNativeTsx3(values){let[getCollapsedOffset,positionX,positionY,CONTEXT_MENU_MIN_SCALE,withSpring,CONTEXT_MENU_SPRING,hasEnteredSV,scheduleOnRN,setHasEntered]=this.__closure;const{translateX:translateX,translateY:translateY}=getCollapsedOffset(values.targetWidth,values.targetHeight,positionX,positionY);return{initialValues:{opacity:0,transform:[{translateX:translateX},{translateY:translateY},{scale:CONTEXT_MENU_MIN_SCALE}]},animations:{opacity:withSpring(1,CONTEXT_MENU_SPRING),transform:[{translateX:withSpring(0,CONTEXT_MENU_SPRING)},{translateY:withSpring(0,CONTEXT_MENU_SPRING)},{scale:withSpring(1,CONTEXT_MENU_SPRING)}]},callback:function(finished){if(finished){hasEnteredSV.set(true);scheduleOnRN(setHasEntered,true);}}};})" };
let closure_14 = { code: "(function ContextMenuPopoutNativeTsx4(values){let[getCollapsedOffset,positionX,positionY,hasEnteredSV,withSpring,CONTEXT_MENU_SPRING,CONTEXT_MENU_MIN_SCALE,scheduleOnRN,onClose]=this.__closure;const{translateX:translateX,translateY:translateY}=getCollapsedOffset(values.currentWidth,values.currentHeight,positionX,positionY);return{initialValues:hasEnteredSV.get()?{opacity:1,transform:[{translateX:0},{translateY:0},{scale:1}]}:{},animations:{opacity:withSpring(0,CONTEXT_MENU_SPRING),transform:[{translateX:withSpring(translateX,CONTEXT_MENU_SPRING)},{translateY:withSpring(translateY,CONTEXT_MENU_SPRING)},{scale:withSpring(CONTEXT_MENU_MIN_SCALE,CONTEXT_MENU_SPRING)}]},callback:function(finished){if(finished){scheduleOnRN(onClose);}}};})" };
let closure_15 = { code: "(function update_ContextMenuPopoutNativeTsx5(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})" };
let closure_16 = { code: "(function ContextMenuPopoutNativeTsx6(){let[state,scheduleOnRN,requestClose]=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;scheduleOnRN(requestClose,isDismiss);})" };
createStyles = createStyles_mod;
let obj5 = { accessibleDismiss: obj6 };
obj6 = { height: "auto" };
const createStyles2 = createStyles.createStyles;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_18 = createStyles2(obj5);
let items2 = [{ code: "(function backdropEnteringAnimation_ContextMenuPopoutNativeTsx7(){let[withSpring,CONTEXT_MENU_SPRING]=this.__closure;return{initialValues:{opacity:0},animations:{opacity:withSpring(1,CONTEXT_MENU_SPRING)}};})" }, spring_spring.withSpring, ContextMenuConstants.CONTEXT_MENU_SPRING];
let c0;
let c1;
[tmp10, tmp11, tmp12] = items2;
function backdropEnteringAnimation() {
  const obj = { initialValues: { opacity: 0 }, animations: { opacity: _undefined(1, c1) } };
  ({ opacity: _undefined(1, c1) });
  return obj;
}
let items3 = [tmp11, tmp12];
backdropEnteringAnimation.__closure = items3;
backdropEnteringAnimation.__workletHash = 10859389175128;
backdropEnteringAnimation.__initData = tmp10;
let closure_20 = { code: "(function ContextMenuPopoutNativeTsx8(){let[hasEntered,withSpring,CONTEXT_MENU_SPRING]=this.__closure;return{initialValues:hasEntered.get()?{opacity:1}:{},animations:{opacity:withSpring(0,CONTEXT_MENU_SPRING)}};})" };
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuPopout.native.tsx");

export function ContextMenuPopout(cleanUp) {
  let ScrollView;
  let bottom;
  let height2;
  let items;
  let items17;
  let items18;
  let items19;
  let menu;
  let obj10;
  let obj3;
  let obj7;
  let onClose;
  let positionX;
  let positionY;
  let title;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp23;
  let tmp24;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp58;
  let tmp9;
  let top;
  let transitionState;
  let width;
  let x;
  ({ menu, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  items = undefined;
  title = undefined;
  let dividerIndexes;
  let diff2;
  let first;
  let closure_9;
  let callback4;
  let callback5;
  ({ x, positionX, positionY, items } = menu);
  let state = menu.state;
  const requestClose = menu.requestClose;
  ({ onClose, title } = menu);
  const keyboardShouldPersistTaps = menu.keyboardShouldPersistTaps;
  let str = "handled";
  const height = menu.height;
  if (undefined !== keyboardShouldPersistTaps) {
    str = keyboardShouldPersistTaps;
  }
  dividerIndexes = menu.dividerIndexes;
  const y = menu.y;
  let obj = requestClose;
  let items1 = [transitionState, cleanUp];
  const effect = requestClose.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      const _requestAnimationFrame = requestAnimationFrame;
      let closure_0 = requestAnimationFrame(cleanUp);
      return () => cancelAnimationFrame(closure_0);
    }
  }, items1);
  let tmp2 = callback4();
  let tmp3 = cleanUp;
  const tmp4 = items;
  ({ top, bottom } = cleanUp(items[8])({ includeKeyboardHeight: true }).insets);
  let obj2 = { ignoreKeyboard: obj3.isAndroid() };
  const tmp6 = transitionState;
  const tmp5 = cleanUp(items[9]);
  obj3 = transitionState(items[10]);
  ({ width, height: height2 } = tmp5(obj2));
  tmp5(obj2);
  let obj4 = transitionState(items[11]);
  const keyboardDuration = obj4.getKeyboardDuration();
  let items2 = [closure_12, keyboardDuration, , ];
  const useCallback = requestClose.useCallback;
  items2[2] = transitionState(items[12]).KEYBOARD_EASING;
  items2[3] = transitionState(items[13]).withTiming;
  let c0;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  class ContextMenuPopoutNativeTsx2 {
    constructor(originY) {
      const obj = { duration, easing };
      const obj2 = { initialValues: { originY: originY.currentOriginY, height: originY.currentHeight }, animations: { originY: _undefined(originY.targetOriginY, obj), height: _undefined(originY.targetHeight, obj) } };
      ({ originY: _undefined(originY.targetOriginY, obj), height: _undefined(originY.targetHeight, obj) });
      return obj2;
    }
  }
  let items3 = [tmp10, tmp11, tmp12];
  ContextMenuPopoutNativeTsx2.__closure = items3;
  ContextMenuPopoutNativeTsx2.__workletHash = 2882646665374;
  ContextMenuPopoutNativeTsx2.__initData = tmp9;
  const items4 = [keyboardDuration];
  let diff = height2 - y;
  const callback = useCallback(ContextMenuPopoutNativeTsx2, items4);
  if ("below" === positionY) {
    const diff1 = diff - bottom;
    diff2 = diff1 - tmp6(tmp4[6]).CONTEXT_MENU_EDGE_OFFSET;
  } else {
    const diff3 = diff - top;
    diff2 = diff3 - tmp6(tmp4[6]).CONTEXT_MENU_EDGE_OFFSET;
  }
  const tmp20 = state(obj.useState(height >= diff2), 2);
  first = tmp20[0];
  closure_9 = tmp20[1];
  let str2 = "bottom";
  if ("below" === positionY) {
    str2 = "top";
  }
  let obj5 = { [str2]: y, [positionX]: x, maxHeight: diff2, maxWidth: width - tmp6(tmp4[6]).CONTEXT_MENU_EDGE_OFFSET - x };
  [tmp23, tmp24] = state(obj.useState(false), 2);
  state(obj.useState(false), 2);
  const tmp6Result = tmp6(tmp4[14]);
  const sharedValue = tmp6Result.useSharedValue(false);
  const items5 = [closure_13, callback5, positionX, positionY, , , , , , ];
  const useCallback2 = obj.useCallback;
  items5[4] = tmp6(tmp4[6]).CONTEXT_MENU_MIN_SCALE;
  items5[5] = tmp6(tmp4[15]).withSpring;
  items5[6] = tmp6(tmp4[6]).CONTEXT_MENU_SPRING;
  items5[7] = sharedValue;
  items5[8] = tmp6(tmp4[16]).scheduleOnRN;
  items5[9] = tmp24;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items5;
  const tmp26 = callback5;
  class ContextMenuPopoutNativeTsx3 {
    constructor(targetWidth) {
      let items1;
      let obj2;
      let obj5;
      let tmp = _undefined(targetWidth.targetWidth, targetWidth.targetHeight, c1, c2);
      const obj = {
        initialValues: obj2,
        animations: obj5,
        callback(arg0) {
          const tmp = arg0;
          if (tmp) {
            const result = closure_1_6.set(true);
            closure_1_7(closure_1_8, true);
          }
        }
      };
      obj2 = { opacity: 0, transform: items };
      items = [, , ];
      const obj3 = { translateX: tmp.translateX };
      items[0] = obj3;
      items[1] = { translateY: tmp.translateY };
      const obj4 = { scale };
      items[2] = obj4;
      obj5 = { opacity: _undefined2(1, c5), transform: items1 };
      items1 = [{ translateX: _undefined2(0, c5) }, , ];
      ({ translateX: _undefined2(0, c5) });
      items1[1] = { translateY: _undefined2(0, c5) };
      ({ translateY: _undefined2(0, c5) });
      items1[2] = { scale: _undefined2(1, c5) };
      ({ scale: _undefined2(1, c5) });
      return obj;
    }
  }
  const items6 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36];
  ContextMenuPopoutNativeTsx3.__closure = items6;
  ContextMenuPopoutNativeTsx3.__workletHash = 10061191148247;
  ContextMenuPopoutNativeTsx3.__initData = tmp27;
  const items7 = [positionX, positionY, sharedValue];
  const items8 = [closure_14, tmp26, positionX, positionY, sharedValue, , , , , ];
  const callback2 = useCallback2(ContextMenuPopoutNativeTsx3, items7);
  const useCallback3 = obj.useCallback;
  items8[5] = tmp6(tmp4[15]).withSpring;
  items8[6] = tmp6(tmp4[6]).CONTEXT_MENU_SPRING;
  items8[7] = tmp6(tmp4[6]).CONTEXT_MENU_MIN_SCALE;
  items8[8] = tmp6(tmp4[16]).scheduleOnRN;
  items8[9] = onClose;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47] = items8;
  class ContextMenuPopoutNativeTsx4 {
    constructor(currentWidth) {
      let items1;
      let obj;
      let obj4;
      let translateX;
      let translateY;
      let tmp = _undefined(currentWidth.currentWidth, currentWidth.currentHeight, c1, c2);
      ({ translateX, translateY } = tmp);
      if (_undefined2.get()) {
        const obj2 = { opacity: 1, transform: items };
        items = [{ translateX: 0 }, { translateY: 0 }, { scale: 1 }];
        obj = obj2;
      } else {
        obj = {};
      }
      const obj3 = {
        initialValues: obj,
        animations: obj4,
        callback(arg0) {
          const tmp = arg0;
          if (tmp) {
            closure_1_7(closure_1_8);
          }
        }
      };
      obj4 = { opacity: _undefined3(0, c5), transform: items1 };
      items1 = [{ translateX: _undefined3(translateX, c5) }, , ];
      ({ translateX: _undefined3(translateX, c5) });
      items1[1] = { translateY: _undefined3(translateY, c5) };
      ({ translateY: _undefined3(translateY, c5) });
      items1[2] = { scale: _undefined3(c6, c5) };
      ({ scale: _undefined3(c6, c5) });
      return obj3;
    }
  }
  const items9 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47];
  ContextMenuPopoutNativeTsx4.__closure = items9;
  ContextMenuPopoutNativeTsx4.__workletHash = 15142320178352;
  ContextMenuPopoutNativeTsx4.__initData = tmp38;
  const items10 = [positionX, positionY, onClose, sharedValue];
  const items11 = [state, requestClose, first];
  const callback3 = useCallback3(ContextMenuPopoutNativeTsx4, items10);
  const items12 = [diff2];
  const memo = obj.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp8;
    let tmp9;
    items = [closure_15, , ];
    items[1] = ContextMenuState.updateContextMenuState;
    items[2] = state;
    [tmp4, tmp5, tmp6] = items;
    function update(absoluteX) {
      _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
    }
    const items1 = [tmp5, tmp6];
    update.__closure = items1;
    update.__workletHash = 13202368878205;
    update.__initData = tmp4;
    const Gesture = tmp(5450).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(!first);
    const onStartResult = enabledResult.onStart(update);
    const items2 = [closure_16, state, , ];
    const onEnd = onStartResult.onUpdate(update).onEnd;
    onStartResult.onUpdate(update);
    items2[2] = _mod1705.scheduleOnRN;
    items2[3] = requestClose;
    let c0;
    let c1;
    let c2;
    [tmp8, tmp9, tmp10, tmp11] = items2;
    class ContextMenuPopoutNativeTsx6 {
      constructor() {
        const activeIndex = _undefined.activeIndex;
        _undefined2(c2, -1 === activeIndex.get());
      }
    }
    const items3 = [tmp9, tmp10, tmp11];
    ContextMenuPopoutNativeTsx6.__closure = items3;
    ContextMenuPopoutNativeTsx6.__workletHash = 8158591233922;
    ContextMenuPopoutNativeTsx6.__initData = tmp8;
    return onEnd(ContextMenuPopoutNativeTsx6);
  }, items11);
  const items13 = [requestClose];
  const callback1 = obj.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.height);
    closure_9(rounded >= Math.round(diff2));
  }, items12);
  callback4 = obj.useCallback(() => {
    requestClose(true);
  }, items13);
  const items14 = [requestClose];
  callback5 = obj.useCallback(() => {
    requestClose(false);
  }, items14);
  const items15 = [items, title, state, callback5, dividerIndexes];
  const memo1 = obj.useMemo(() => {
    let closure_0 = items;
    let closure_1 = title;
    let closure_3 = callback5;
    let closure_4 = dividerIndexes;
    return items.map((item, index) => {
      let IconComponent;
      let accessibilityRole;
      let iconSource;
      let label;
      let tmp3;
      let trailingIndicator;
      let variant;
      ({ label, action: closure_0 } = item);
      let tmp2 = closure_1_7;
      ({ iconSource, IconComponent, trailingIndicator, variant, accessibilityRole } = item);
      const diff = closure_0.length - 1;
      let obj = {
        index,
        label,
        start: tmp3,
        end: index === diff,
        lastInSection: closure_4.includes(index + 1),
        iconSource,
        IconComponent,
        trailingIndicator,
        state,
        onPress(arg0) {
          const obj = transitionState(state[10]);
          let isAndroidResult = obj.isAndroid();
          const tmp = transitionState;
          const tmp2 = state;
          if (isAndroidResult) {
            const tmpResult = tmp(tmp2[22]);
            isAndroidResult = tmpResult.getIsScreenReaderEnabled();
          }
          if (isAndroidResult) {
            closure_0();
          }
          if (closure_3 != null) {
            tmp6(arg0);
          }
        },
        variant,
        accessibilityRole
      };
      tmp3 = 0 === index;
      const ContextMenuItem = closure_0(state[21]).ContextMenuItem;
      if (tmp3) {
        tmp3 = null == closure_1;
      }
      const tmp2Result = tmp2(ContextMenuItem, obj, "" + label + "-" + index);
      let tmp7 = tmp2Result;
      if (closure_4.includes(index)) {
        const _HermesInternal = HermesInternal;
        const obj2 = { children: items };
        items = [tmp2(closure_1_17, {}, "divider-" + index), tmp2Result];
        tmp7 = closure_1_9(closure_1_8, obj2);
      }
      return tmp7;
    });
  }, items15);
  tmp3(tmp4[19])(() => {
    callback4();
    return true;
  });
  const items16 = [diff2(ContextMenuBackdrop, { onPress: callback4, hasEntered: sharedValue }), ];
  const obj6 = { gesture: memo, children: closure_9(ScrollView, obj7) };
  const GestureDetector = tmp6(tmp4[18]).GestureDetector;
  obj7 = { onLayout: callback1, bounces: false, style: items17, entering: callback2, exiting: callback3, layout: tmp58, keyboardShouldPersistTaps: str, accessibilityRole: "list", children: items19 };
  items17 = [tmp2.container, obj5];
  tmp58 = undefined;
  ScrollView = tmp3(tmp4[14]).ScrollView;
  if (tmp23) {
    const tmp6Result2 = tmp6(tmp4[10]);
    if (!tmp6Result2.isAndroid()) {
      tmp58 = callback;
    }
  }
  let tmp55Result = null;
  if (null != title) {
    const obj8 = { children: items18 };
    const obj9 = { style: tmp2.titleContainer, children: diff2(tmp6(tmp4[20]).Text, obj10) };
    obj10 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    items18 = [diff2(title, obj9), diff2(ContextMenuDivider, {})];
    tmp55Result = tmp55(tmp56, obj8);
  }
  items19 = [tmp55Result, memo1];
  const obj11 = { children: items16 };
  items16[1] = diff2(GestureDetector, obj6);
  return closure_9(first, obj11);
}

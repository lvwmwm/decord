// Module ID: 15283
// Function ID: 15284
// Name: ActionSheetBackdropToast
// Dependencies: [19, 17, 5389, 21, 1377, 5140, 575, 1627, 1493, 1652, 5370, 5714, 5751, 2]
// Exports: ActionSheetBackdropToast

// Module 15283 (ActionSheetBackdropToast)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5370 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5389 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let set, set2;

let StyleSheet;
let closure_4;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
let closure_5 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const jsx = Fragment.jsx;
let closure_7 = PlatformUtils.isIOS();
let createStyles = createStyles_mod;
let obj = { container: obj2, toast: obj3 };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { position: "absolute", bottom: 16, backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingTop: 6, paddingBottom: 8, paddingHorizontal: 16 };
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function ActionSheetBackdropToastTsx1(){let[isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity]=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};})" };
let result = size.fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export function ActionSheetBackdropToast(arg0) {
  let isExpanded;
  let text;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp9;
  let sharedValue;
  let sharedValue1;
  ({ text, isExpanded } = arg0);
  let tmp = closure_8();
  const tmp2 = sharedValue1;
  const top = sharedValue1(1627)().top;
  const height = sharedValue1(1493)().height;
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(0);
  let obj2 = sharedValue(1652);
  sharedValue1 = obj2.useSharedValue(0);
  const items = [sharedValue, sharedValue1];
  const effect = react.useEffect(() => {
    let Easing;
    let Easing2;
    set = sharedValue.set;
    const tmp = _mod1652;
    let withDelay = tmp.withDelay;
    let obj = { duration: 200, easing: Easing.in(_mod1652.Easing.ease) };
    let withTiming = timing_timing.withTiming;
    timing_timing;
    Easing = _mod1652.Easing;
    let result = set(withDelay(100, withTiming(1, obj)));
    set2 = sharedValue1.set;
    let obj2 = { duration: 300, easing: Easing2.in(_mod1652.Easing.linear) };
    const withTiming2 = timing_timing.withTiming;
    timing_timing;
    Easing2 = _mod1652.Easing;
    set2(withTiming2(1, obj2));
    return () => {
      let Easing;
      const withDelay = sharedValue(dependencyMap[9]).withDelay;
      sharedValue(dependencyMap[9]);
      const obj = sharedValue(dependencyMap[10]);
      const result = set(withDelay(200, obj.withTiming(0)));
      const obj2 = { duration: 200, easing: Easing.out(sharedValue(dependencyMap[9]).Easing.exp) };
      const withTiming = sharedValue(dependencyMap[10]).withTiming;
      sharedValue(dependencyMap[10]);
      Easing = sharedValue(dependencyMap[9]).Easing;
      set2.set(withTiming(0, obj2));
    };
  }, items);
  const items1 = [closure_9, closure_7, isExpanded, , , , , , , , ];
  const useAnimatedStyle = sharedValue(1652).useAnimatedStyle;
  const tmp8 = sharedValue(1652);
  items1[3] = height - sharedValue(5714).NAV_BAR_HEIGHT_MULTILINE - top;
  items1[4] = 24;
  items1[5] = height * closure_5;
  items1[6] = closure_5;
  items1[7] = 46;
  items1[8] = sharedValue;
  items1[9] = 15;
  items1[10] = sharedValue1;
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
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items1;
  class ActionSheetBackdropToastTsx1 {
    constructor() {
      let sum1;
      if (c0) {
        let sum;
        if (c1) {
          sum = c2 + c3;
        } else {
          sum = c4 + c3;
        }
        sum1 = sum;
      } else if (c1) {
        sum1 = c2 + c3;
      } else {
        sum1 = c5 * c2 + c6;
      }
      const obj = { bottom: sum1 + (1 - _undefined.get()) * c8, opacity: _undefined2.get() };
      return obj;
    }
  }
  const items2 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  ActionSheetBackdropToastTsx1.__closure = items2;
  ActionSheetBackdropToastTsx1.__workletHash = 8014413461314;
  ActionSheetBackdropToastTsx1.__initData = tmp9;
  const animatedStyle = useAnimatedStyle(ActionSheetBackdropToastTsx1);
  const items3 = [tmp.toast, animatedStyle];
  const View = tmp2(1652).View;
  return <closure_4 style={tmp.container} pointerEvents="none">{null}</closure_4>;
}

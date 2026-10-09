// Module ID: 13354
// Function ID: 13355
// Name: ActionSheetBackdropToast
// Dependencies: [19, 17, 6837, 21, 1382, 5091, 587, 558, 576, 1631, 1497, 6263, 4811, 5092, 5087, 2]

// Module 13354 (ActionSheetBackdropToast)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6837 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, set, set2;

let StyleSheet;
let closure_4;
let obj2;
let obj3;
let tmp5;
const ReanimatedRexportDefault = tmp5(4811);
({ View: closure_4, StyleSheet } = react_native);
const ACTION_SHEET_START_HEIGHT_RATIO = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const jsx = Fragment.jsx;
let c7 = 24;
let c8 = 200;
const isInIOS = PlatformUtils.isIOS();
let createStyles = createStyles_mod;
let obj = { container: obj2, toast: obj3 };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { position: "absolute", bottom: 16, backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingTop: 6, paddingBottom: 8, paddingHorizontal: 16 };
let closure_10 = createStyles(obj);
const __initData = { code: "function ActionSheetBackdropToastTsx1(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}" };
const __initData2 = { code: "function ActionSheetBackdropToastTsx2(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}" };
tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetBackdropToast(arg0) {
  let duration;
  let isExpanded;
  let text;
  let tmp = isExpanded;
  let obj = isExpanded(576);
  const cResult = obj.c(15);
  ({ text, isExpanded } = arg0);
  const tmp4 = closure_10();
  const top = useSafeAreaInsetsDefault().top;
  const height = useWindowDimensionsDefault().height;
  let result = height * closure_5;
  importDefault = result;
  const diff = height - isExpanded(6263).NAV_BAR_HEIGHT_MULTILINE - top;
  dependencyMap = diff;
  let obj2 = isExpanded(4811);
  const sharedValue = obj2.useSharedValue(0);
  const obj3 = isExpanded(4811);
  const sharedValue1 = obj3.useSharedValue(0);
  const tmp6 = closure_5;
  if (cResult[0] === sharedValue1) {
    let tmp11;
    let tmp12;
    if (cResult[1] === sharedValue) {
      tmp11 = cResult[2];
      tmp12 = cResult[3];
    }
    const effect = sharedValue.useEffect(tmp11, tmp12);
    const tmpResult = tmp(4811);
    class R {
      constructor() {
        let sum1;
        if (isInIOS) {
          let sum;
          if (isExpanded) {
            sum = dependencyMap + c7;
          } else {
            sum = importDefault + c7;
          }
          sum1 = sum;
        } else if (isExpanded) {
          sum1 = dependencyMap + c7;
        } else {
          sum1 = ACTION_SHEET_START_HEIGHT_RATIO * dependencyMap + 46;
        }
        const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
        return obj;
      }
    }
    const obj4 = { isInIOS, isExpanded, maxDynamicContentSize: diff, TOAST_BOTTOM_MARGIN, nonExpandedHeight: result, ACTION_SHEET_START_HEIGHT_RATIO: tmp6, TOAST_BOTTOM_GAP: 46, positionDelta: sharedValue, TOAST_ANIMATION_Y_DELTA: 15, opacity: sharedValue1 };
    R.__closure = obj4;
    R.__workletHash = 9630436597435;
    R.__initData = __initData;
    const animatedStyle = tmpResult.useAnimatedStyle(R);
    if (cResult[4] === tmp4.toast) {
      let tmp19;
      let tmp20;
      if (cResult[5] === animatedStyle) {
        tmp19 = cResult[6];
      }
      if (cResult[7] !== text) {
        const tmp22 = jsx(tmp(5087).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: text });
        class R {
          constructor() {
            let sum1;
            if (isInIOS) {
              let sum;
              if (isExpanded) {
                sum = dependencyMap + c7;
              } else {
                sum = importDefault + c7;
              }
              sum1 = sum;
            } else if (isExpanded) {
              sum1 = dependencyMap + c7;
            } else {
              sum1 = ACTION_SHEET_START_HEIGHT_RATIO * dependencyMap + 46;
            }
            const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
            return obj;
          }
        }
        cResult[7] = text;
        cResult[8] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[8];
      }
      if (cResult[9] === tmp19) {
        let tmp23;
        if (cResult[10] === tmp20) {
          tmp23 = cResult[11];
        }
        if (cResult[12] === tmp4.container) {
          let tmp27;
          if (cResult[13] === tmp23) {
            tmp27 = cResult[14];
          }
          return tmp27;
        }
        class R {
          constructor() {
            let sum1;
            if (isInIOS) {
              let sum;
              if (isExpanded) {
                sum = dependencyMap + c7;
              } else {
                sum = importDefault + c7;
              }
              sum1 = sum;
            } else if (isExpanded) {
              sum1 = dependencyMap + c7;
            } else {
              sum1 = ACTION_SHEET_START_HEIGHT_RATIO * dependencyMap + 46;
            }
            const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
            return obj;
          }
        }
        tmp30[0] = tmp4.container;
        tmp30[2] = tmp23;
        const tmp31 = <sharedValue1 {...tmp30} />;
        cResult[12] = tmp4.container;
        cResult[13] = tmp23;
        cResult[14] = tmp31;
        tmp27 = tmp31;
      }
      class R {
        constructor() {
          let sum1;
          if (isInIOS) {
            let sum;
            if (isExpanded) {
              sum = dependencyMap + c7;
            } else {
              sum = importDefault + c7;
            }
            sum1 = sum;
          } else if (isExpanded) {
            sum1 = dependencyMap + c7;
          } else {
            sum1 = ACTION_SHEET_START_HEIGHT_RATIO * dependencyMap + 46;
          }
          const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
          return obj;
        }
      }
      tmp25[0] = tmp19;
      tmp25[1] = tmp20;
      const tmp26 = jsx(ReanimatedRexportDefault.View, tmp25);
      cResult[9] = tmp19;
      cResult[10] = tmp20;
      cResult[11] = tmp26;
      tmp23 = tmp26;
    }
    const items = [tmp4.toast, animatedStyle];
    cResult[4] = tmp4.toast;
    cResult[5] = animatedStyle;
    cResult[6] = items;
    tmp19 = items;
  }
  const fn = function o() {
    let Easing;
    let Easing2;
    set = sharedValue.set;
    const tmp = ReanimatedRexport;
    let withDelay = tmp.withDelay;
    let obj = { duration, easing: Easing.in(ReanimatedRexport.Easing.ease) };
    let withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    result = set(withDelay(100, withTiming(1, obj)));
    set2 = sharedValue1.set;
    let obj2 = { duration: 300, easing: Easing2.in(ReanimatedRexport.Easing.linear) };
    const withTiming2 = timing.withTiming;
    timing;
    Easing2 = ReanimatedRexport.Easing;
    set2(withTiming2(1, obj2));
    return () => {
      let Easing;
      const withDelay = isExpanded(dependencyMap[12]).withDelay;
      isExpanded(dependencyMap[12]);
      const obj = isExpanded(dependencyMap[13]);
      result = set(withDelay(duration, obj.withTiming(0)));
      const obj2 = { duration, easing: Easing.out(isExpanded(dependencyMap[12]).Easing.exp) };
      const withTiming = isExpanded(dependencyMap[13]).withTiming;
      isExpanded(dependencyMap[13]);
      Easing = isExpanded(dependencyMap[12]).Easing;
      set2.set(withTiming(0, obj2));
    };
  };
  const items1 = [sharedValue, sharedValue1];
  cResult[0] = sharedValue1;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp12 = items1;
  tmp11 = fn;
}) : (function ActionSheetBackdropToast(isExpanded) {
  let c1;
  let c2;
  let duration;
  isExpanded = isExpanded.isExpanded;
  const text = isExpanded.text;
  let tmp = closure_10();
  const top = useSafeAreaInsetsDefault().top;
  const height = useWindowDimensionsDefault().height;
  let result = height * ACTION_SHEET_START_HEIGHT_RATIO;
  importDefault = result;
  const diff = height - isExpanded(6263).NAV_BAR_HEIGHT_MULTILINE - top;
  dependencyMap = diff;
  let obj = isExpanded(4811);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = isExpanded(4811);
  const sharedValue1 = obj2.useSharedValue(0);
  const items = [sharedValue, sharedValue1];
  const effect = sharedValue.useEffect(() => {
    let Easing;
    let Easing2;
    set = sharedValue.set;
    const tmp = ReanimatedRexport;
    let withDelay = tmp.withDelay;
    let obj = { duration, easing: Easing.in(ReanimatedRexport.Easing.ease) };
    let withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    let result = set(withDelay(100, withTiming(1, obj)));
    set2 = sharedValue1.set;
    let obj2 = { duration: 300, easing: Easing2.in(ReanimatedRexport.Easing.linear) };
    const withTiming2 = timing.withTiming;
    timing;
    Easing2 = ReanimatedRexport.Easing;
    set2(withTiming2(1, obj2));
    return () => {
      let Easing;
      const withDelay = isExpanded(c2[12]).withDelay;
      isExpanded(c2[12]);
      const obj = isExpanded(c2[13]);
      const result = set(withDelay(duration, obj.withTiming(0)));
      const obj2 = { duration, easing: Easing.out(isExpanded(c2[12]).Easing.exp) };
      const withTiming = isExpanded(c2[13]).withTiming;
      isExpanded(c2[13]);
      Easing = isExpanded(c2[12]).Easing;
      set2.set(withTiming(0, obj2));
    };
  }, items);
  const obj3 = isExpanded(4811);
  class M {
    constructor() {
      let sum1;
      if (isInIOS) {
        let sum;
        if (isExpanded) {
          sum = c2 + c7;
        } else {
          sum = c1 + c7;
        }
        sum1 = sum;
      } else if (isExpanded) {
        sum1 = c2 + c7;
      } else {
        sum1 = ACTION_SHEET_START_HEIGHT_RATIO * c2 + 46;
      }
      const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
      return obj;
    }
  }
  const obj4 = { isInIOS, isExpanded, maxDynamicContentSize: diff, TOAST_BOTTOM_MARGIN, nonExpandedHeight: result, ACTION_SHEET_START_HEIGHT_RATIO, TOAST_BOTTOM_GAP: 46, positionDelta: sharedValue, TOAST_ANIMATION_Y_DELTA: 15, opacity: sharedValue1 };
  M.__closure = obj4;
  M.__workletHash = 16641609709624;
  M.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(M);
  const items1 = [tmp.toast, animatedStyle];
  const View = ReanimatedRexportDefault.View;
  return <sharedValue1 style={tmp.container} pointerEvents="none">{null}</sharedValue1>;
});
let result = size.fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export const ActionSheetBackdropToast = tmp5;

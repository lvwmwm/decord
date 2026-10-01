// Module ID: 12702
// Function ID: 12703
// Name: ActionSheetBackdropToast
// Dependencies: [19, 17, 6572, 21, 1364, 4836, 576, 1613, 1479, 5994, 4566, 4837, 4832, 2]
// Exports: ActionSheetBackdropToast

// Module 12702 (ActionSheetBackdropToast)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let dependencyMap, importDefault, set, set2;

let StyleSheet;
let closure_4;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
const ACTION_SHEET_START_HEIGHT_RATIO = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const jsx = Fragment.jsx;
const isInIOS = PlatformUtils.isIOS();
let createStyles = createStyles_mod;
let obj = { container: obj2, toast: obj3 };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { position: "absolute", bottom: 16, backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingTop: 6, paddingBottom: 8, paddingHorizontal: 16 };
let closure_8 = createStyles(obj);
const __initData = { code: "function ActionSheetBackdropToastTsx1(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}" };
let result = size.fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export const ActionSheetBackdropToast = function ActionSheetBackdropToast(isExpanded) {
  let c1;
  let c2;
  isExpanded = isExpanded.isExpanded;
  const text = isExpanded.text;
  let tmp = closure_8();
  const top = useSafeAreaInsetsDefault().top;
  const height = useWindowDimensionsDefault().height;
  let result = height * ACTION_SHEET_START_HEIGHT_RATIO;
  importDefault = result;
  const diff = height - isExpanded(5994).NAV_BAR_HEIGHT_MULTILINE - top;
  dependencyMap = diff;
  let obj = isExpanded(4566);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = isExpanded(4566);
  const sharedValue1 = obj2.useSharedValue(0);
  const items = [sharedValue, sharedValue1];
  const effect = sharedValue.useEffect(() => {
    let Easing;
    let Easing2;
    set = sharedValue.set;
    const tmp = ReanimatedRexport;
    let withDelay = tmp.withDelay;
    let obj = { duration: 200, easing: Easing.in(ReanimatedRexport.Easing.ease) };
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
      const withDelay = isExpanded(c2[10]).withDelay;
      isExpanded(c2[10]);
      const obj = isExpanded(c2[11]);
      const result = set(withDelay(200, obj.withTiming(0)));
      const obj2 = { duration: 200, easing: Easing.out(isExpanded(c2[10]).Easing.exp) };
      const withTiming = isExpanded(c2[11]).withTiming;
      isExpanded(c2[11]);
      Easing = isExpanded(c2[10]).Easing;
      set2.set(withTiming(0, obj2));
    };
  }, items);
  const fn = function x() {
    let sum1;
    if (isInIOS) {
      let sum;
      if (isExpanded) {
        sum = c2 + 24;
      } else {
        sum = c1 + 24;
      }
      sum1 = sum;
    } else if (isExpanded) {
      sum1 = c2 + 24;
    } else {
      sum1 = ACTION_SHEET_START_HEIGHT_RATIO * c2 + 46;
    }
    const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
    return obj;
  };
  const obj4 = { isInIOS, isExpanded, maxDynamicContentSize: diff, TOAST_BOTTOM_MARGIN: 24, nonExpandedHeight: result, ACTION_SHEET_START_HEIGHT_RATIO, TOAST_BOTTOM_GAP: 46, positionDelta: sharedValue, TOAST_ANIMATION_Y_DELTA: 15, opacity: sharedValue1 };
  fn.__closure = obj4;
  fn.__workletHash = 9630436597435;
  fn.__initData = __initData;
  const items1 = [tmp.container];
  const obj3 = isExpanded(4566);
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const items2 = [tmp.toast, animatedStyle];
  const View = ReanimatedRexportDefault.View;
  return <sharedValue1 style={items1} pointerEvents="none">{null}</sharedValue1>;
};

// Module ID: 12184
// Function ID: 95427
// Name: ActionSheetBackdropToast
// Dependencies: [31, 27, 5188, 33, 477, 4130, 689, 1557, 1450, 5084, 3991, 4131, 4126, 2]
// Exports: ActionSheetBackdropToast

// Module 12184 (ActionSheetBackdropToast)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_5 } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { jsx } from "jsxProd";
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "ACTION_SHEET_START_HEIGHT_RATIO";

const require = arg1;
const View = get_ActivityIndicator.View;
set = set.isIOS();
set = {};
set = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
set["flex"] = 1;
set["alignItems"] = "center";
set["justifyContent"] = "center";
set.container = set;
_createForOfIteratorHelperLoose = { position: "absolute", bottom: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, paddingTop: 6, paddingBottom: 8, paddingHorizontal: 16 };
set.toast = _createForOfIteratorHelperLoose;
set = _createForOfIteratorHelperLoose.createStyles(set);
let closure_9 = { code: "function ActionSheetBackdropToastTsx1(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}" };
let result = set.fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export const ActionSheetBackdropToast = function ActionSheetBackdropToast(isExpanded) {
  isExpanded = isExpanded.isExpanded;
  const tmp = set();
  const height = importDefault(1450)().height;
  let result = height * closure_5;
  importDefault = result;
  const diff = height - isExpanded(5084).NAV_BAR_HEIGHT_MULTILINE - importDefault(1557)().top;
  const dependencyMap = diff;
  let obj = isExpanded(3991);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = isExpanded(3991);
  const sharedValue1 = obj1.useSharedValue(0);
  const items = [sharedValue, sharedValue1];
  const effect = sharedValue.useEffect(() => {
    let obj = isExpanded(diff[10]);
    obj = { duration: 200 };
    let Easing = isExpanded(diff[10]).Easing;
    obj.easing = Easing.in(isExpanded(diff[10]).Easing.ease);
    let result = sharedValue.set(obj.withDelay(100, isExpanded(diff[11]).withTiming(1, obj)));
    let obj2 = isExpanded(diff[11]);
    obj = { duration: 300 };
    const Easing2 = isExpanded(diff[10]).Easing;
    obj.easing = Easing2.in(isExpanded(diff[10]).Easing.linear);
    let result1 = sharedValue1.set(isExpanded(diff[11]).withTiming(1, obj));
    return () => {
      let obj = isExpanded(diff[10]);
      const result = outer1_3.set(obj.withDelay(200, isExpanded(diff[11]).withTiming(0)));
      const obj2 = isExpanded(diff[11]);
      obj = { duration: 200 };
      const Easing = isExpanded(diff[10]).Easing;
      obj.easing = Easing.out(isExpanded(diff[10]).Easing.exp);
      const result1 = outer1_4.set(isExpanded(diff[11]).withTiming(0, obj));
    };
  }, items);
  let obj2 = isExpanded(3991);
  const fn = function x() {
    const obj = {};
    if (outer1_7) {
      if (tmp) {
        let sum = closure_2 + 24;
      } else {
        sum = closure_1 + 24;
      }
    } else {
      if (tmp) {
        let sum1 = closure_2 + 24;
      } else {
        sum1 = outer1_5 * closure_2 + 46;
      }
      obj.bottom = sum1 + 15 * (1 - sharedValue.get());
      obj.opacity = sharedValue1.get();
      return obj;
    }
  };
  obj = { isInIOS: set, isExpanded, maxDynamicContentSize: diff, TOAST_BOTTOM_MARGIN: 24, nonExpandedHeight: result, ACTION_SHEET_START_HEIGHT_RATIO: closure_5, TOAST_BOTTOM_GAP: 46, positionDelta: sharedValue, TOAST_ANIMATION_Y_DELTA: 15, opacity: sharedValue1 };
  fn.__closure = obj;
  fn.__workletHash = 9630436597435;
  fn.__initData = closure_9;
  obj = { style: items1, pointerEvents: "none" };
  items1 = [tmp.container];
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj1 = { style: items2 };
  items2 = [tmp.toast, animatedStyle];
  obj2 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: isExpanded.text };
  obj1.children = jsx(isExpanded(4126).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: isExpanded.text });
  obj.children = jsx(importDefault(3991).View, { style: items2 });
  return <sharedValue1 style={items1} pointerEvents="none" />;
};

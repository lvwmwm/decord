// Module ID: 12043
// Function ID: 93036
// Name: ActionSheetBackdropToast
// Dependencies: []
// Exports: ActionSheetBackdropToast

// Module 12043 (ActionSheetBackdropToast)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = arg1(dependencyMap[2]).ACTION_SHEET_START_HEIGHT_RATIO;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
let closure_7 = obj.isIOS();
let obj1 = arg1(dependencyMap[5]);
obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["flex"] = 1;
obj["alignItems"] = "center";
obj["justifyContent"] = "center";
obj.container = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj.toast = obj1;
let closure_8 = obj1.createStyles(obj);
let closure_9 = { code: "function ActionSheetBackdropToastTsx1(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}" };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export const ActionSheetBackdropToast = function ActionSheetBackdropToast(children) {
  const isExpanded = children.isExpanded;
  const arg1 = isExpanded;
  const tmp = callback();
  const height = importDefault(dependencyMap[8])().height;
  const result = height * closure_5;
  const importDefault = result;
  const diff = height - arg1(dependencyMap[9]).NAV_BAR_HEIGHT_MULTILINE - importDefault(dependencyMap[7])().top;
  const dependencyMap = diff;
  let obj = arg1(dependencyMap[10]);
  const sharedValue = obj.useSharedValue(0);
  const React = sharedValue;
  let obj1 = arg1(dependencyMap[10]);
  const sharedValue1 = obj1.useSharedValue(0);
  const View = sharedValue1;
  const items = [sharedValue, sharedValue1];
  const effect = React.useEffect(() => {
    let obj = isExpanded(diff[10]);
    obj = { duration: 200 };
    const Easing = isExpanded(diff[10]).Easing;
    obj.easing = Easing.in(isExpanded(diff[10]).Easing.ease);
    const result = sharedValue.set(obj.withDelay(100, isExpanded(diff[11]).withTiming(1, obj)));
    const obj2 = isExpanded(diff[11]);
    obj = { duration: 300 };
    const Easing2 = isExpanded(diff[10]).Easing;
    obj.easing = Easing2.in(isExpanded(diff[10]).Easing.linear);
    const result1 = sharedValue1.set(isExpanded(diff[11]).withTiming(1, obj));
    return () => {
      let obj = callback(closure_2[10]);
      const result = closure_3.set(obj.withDelay(200, callback(closure_2[11]).withTiming(0)));
      const obj2 = callback(closure_2[11]);
      obj = { duration: 200 };
      const Easing = callback(closure_2[10]).Easing;
      obj.easing = Easing.out(callback(closure_2[10]).Easing.exp);
      const result1 = closure_4.set(callback(closure_2[11]).withTiming(0, obj));
    };
  }, items);
  const fn = function x() {
    const obj = {};
    if (closure_7) {
      if (tmp) {
        let sum = diff + 24;
      } else {
        sum = result + 24;
      }
    } else {
      if (tmp) {
        let sum1 = diff + 24;
      } else {
        sum1 = closure_5 * diff + 46;
      }
      obj.bottom = sum1 + 15 * (1 - sharedValue.get());
      obj.opacity = sharedValue1.get();
      return obj;
    }
  };
  obj = { isInIOS: closure_7, isExpanded, maxDynamicContentSize: diff, TOAST_BOTTOM_MARGIN: 24, nonExpandedHeight: result, ACTION_SHEET_START_HEIGHT_RATIO: closure_5, TOAST_BOTTOM_GAP: 46, positionDelta: sharedValue, TOAST_ANIMATION_Y_DELTA: 15, opacity: sharedValue1 };
  fn.__closure = obj;
  fn.__workletHash = 9630436597435;
  fn.__initData = closure_9;
  obj = { style: items1, pointerEvents: "none" };
  const items1 = [tmp.container];
  const animatedStyle = arg1(dependencyMap[10]).useAnimatedStyle(fn);
  obj1 = { style: items2 };
  const items2 = [tmp.toast, animatedStyle];
  obj1.children = jsx(arg1(dependencyMap[12]).Text, { children: children.text });
  obj.children = jsx(importDefault(dependencyMap[10]).View, obj1);
  return <View {...obj} />;
};

// Module ID: 16513
// Function ID: 128623
// Name: StepNode
// Dependencies: [31, 27, 4122, 33, 4130, 689, 3991, 4131, 4126, 566, 2]
// Exports: default

// Module 16513 (StepNode)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function StepNode(isCurrent) {
  let isDone;
  let label;
  let useReducedMotion;
  isCurrent = isCurrent.isCurrent;
  let sharedValue;
  let num2;
  ({ label, isDone, useReducedMotion } = isCurrent);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = isCurrent(num2[6]);
  let num = 0;
  if (isCurrent) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  num2 = 180;
  if (useReducedMotion) {
    num2 = 0;
  }
  let obj1 = isCurrent(num2[6]);
  const fn = function p() {
    let obj = isCurrent(num2[6]);
    let obj1 = isCurrent(num2[7]);
    obj = { duration: num2 };
    const Easing = isCurrent(num2[6]).Easing;
    obj.easing = Easing.out(isCurrent(num2[6]).Easing.ease);
    const interpolateResult = obj.interpolate(sharedValue.get(), [0, 1], [0.4, 1]);
    const withTimingResult = obj1.withTiming(obj.interpolate(sharedValue.get(), [0, 1], [0.4, 1]), obj);
    const items = [-2, 6];
    obj = {};
    const obj4 = isCurrent(num2[6]);
    const interpolateResult1 = isCurrent(num2[6]).interpolate(sharedValue.get(), [0, 1], items);
    obj1 = { duration: num2 };
    const Easing2 = isCurrent(num2[6]).Easing;
    obj1.easing = Easing2.out(isCurrent(num2[6]).Easing.ease);
    obj.marginHorizontal = isCurrent(num2[7]).withTiming(interpolateResult1, obj1);
    const items1 = [{ scale: withTimingResult }];
    obj.transform = items1;
    return obj;
  };
  obj = { interpolate: isCurrent(num2[6]).interpolate, state: sharedValue, withTiming: isCurrent(num2[7]).withTiming, duration: num2, Easing: isCurrent(num2[6]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 4051275727555;
  fn.__initData = closure_8;
  let items = [sharedValue, isCurrent];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    let num = 0;
    if (isCurrent) {
      num = 1;
    }
    const result = sharedValue.set(num);
  }, items);
  if (!isDone) {
    if (!isCurrent) {
      let filledNode = tmp.emptyNode;
    }
    obj = {};
    let items1 = [tmp.node, animatedStyle, filledNode];
    obj.style = items1;
    if (isCurrent) {
      obj1 = { variant: "heading-deprecated-12/extrabold", color: "interactive-text-active", children: label };
      isCurrent = jsx(isCurrent(num2[8]).Text, { variant: "heading-deprecated-12/extrabold", color: "interactive-text-active", children: label });
    }
    obj.children = isCurrent;
    return jsx(sharedValue(num2[6]).View, {});
  }
  filledNode = tmp.filledNode;
}
_createForOfIteratorHelperLoose = { container: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, node: { width: 20, height: 20, borderRadius: 10, marginHorizontal: -2 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.filledNode = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.emptyNode = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_8 = { code: "function StepsIndicatorTsx1(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/native/components/StepsIndicator.tsx");

export default function StepsIndicator(current) {
  current = current.current;
  const total = current.total;
  let obj = current(stateFromStores[9]);
  let items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  const items1 = [current, total, stateFromStores];
  obj = {
    style: items2,
    children: React.useMemo(() => {
      const items = [];
      let num = 0;
      if (0 < total) {
        do {
          let sum = num + 1;
          let tmp2 = outer1_6;
          let tmp3 = outer1_9;
          let obj = {};
          let tmp4 = stateFromStores;
          obj.useReducedMotion = stateFromStores;
          let tmp5 = current;
          obj.isCurrent = sum === current;
          obj.isDone = sum < current;
          obj.label = sum;
          let arr = items.push(outer1_6(outer1_9, obj, num));
          num = num + 1;
          let tmp7 = total;
        } while (num < total);
      }
      return items;
    }, items1)
  };
  items2 = [_createForOfIteratorHelperLoose().container, current.style];
  return <View style={items2}>{React.useMemo(() => {
    const items = [];
    let num = 0;
    if (0 < total) {
      do {
        let sum = num + 1;
        let tmp2 = outer1_6;
        let tmp3 = outer1_9;
        let obj = {};
        let tmp4 = stateFromStores;
        obj.useReducedMotion = stateFromStores;
        let tmp5 = current;
        obj.isCurrent = sum === current;
        obj.isDone = sum < current;
        obj.label = sum;
        let arr = items.push(outer1_6(outer1_9, obj, num));
        num = num + 1;
        let tmp7 = total;
      } while (num < total);
    }
    return items;
  }, items1)}</View>;
};

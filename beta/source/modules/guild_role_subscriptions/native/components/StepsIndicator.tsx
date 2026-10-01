// Module ID: 17599
// Function ID: 17600
// Name: StepsIndicator
// Dependencies: [19, 17, 4825, 21, 4836, 576, 4566, 4837, 4832, 504, 2]
// Exports: default

// Module 17599 (StepsIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let obj2;
let obj3;
function StepNode(isCurrent) {
  let isDone;
  let label;
  let useReducedMotion;
  isCurrent = isCurrent.isCurrent;
  let sharedValue;
  let num2;
  ({ label, isDone, useReducedMotion } = isCurrent);
  const tmp = closure_7();
  const tmp2 = isCurrent;
  let num = 0;
  const useSharedValue = isCurrent(num2[6]).useSharedValue;
  isCurrent(num2[6]);
  if (isCurrent) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  num2 = 180;
  if (useReducedMotion) {
    num2 = 0;
  }
  const fn = function p() {
    let Easing;
    let Easing2;
    let interpolateResult1;
    let items;
    let obj5;
    let withTiming2;
    const obj = ReanimatedRexport;
    const interpolateResult = obj.interpolate(sharedValue.get(), [0, 1], [0.4, 1]);
    const obj2 = { duration: num2, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    const withTimingResult = withTiming(interpolateResult, obj2);
    const obj4 = { marginHorizontal: withTiming2(interpolateResult1, obj5), transform: items };
    const obj3 = ReanimatedRexport;
    interpolateResult1 = obj3.interpolate(sharedValue.get(), [0, 1], [-2, 6]);
    obj5 = { duration: num2, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
    withTiming2 = timing.withTiming;
    timing;
    Easing2 = ReanimatedRexport.Easing;
    items = [{ scale: withTimingResult }];
    return obj4;
  };
  const tmp2Result = tmp2(num2[6]);
  let obj = { interpolate: tmp2(tmp3[6]).interpolate, state: sharedValue, withTiming: tmp2(tmp3[7]).withTiming, duration: num2, Easing: tmp2(tmp3[6]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 4051275727555;
  fn.__initData = __initData;
  let items = [sharedValue, isCurrent];
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    if (isCurrent) {
      num = 1;
    }
    const result = set(num);
  }, items);
  if (!isDone) {
    let filledNode;
    if (!isCurrent) {
      filledNode = tmp.emptyNode;
    }
    const items1 = [tmp.node, animatedStyle, filledNode];
    View = sharedValue(tmp3[6]).View;
    if (isCurrent) {
      let obj3 = { variant: "heading-deprecated-12/extrabold", color: "interactive-text-active", children: label };
      isCurrent = tmp8(tmp2(tmp3[8]).Text, obj3);
    }
    return <View style={items1}>{isCurrent}</View>;
  }
  filledNode = tmp.filledNode;
}
let View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, node: { width: 20, height: 20, borderRadius: 10, marginHorizontal: -2 }, filledNode: obj2, emptyNode: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_7 = createStyles(obj);
const __initData = { code: "function StepsIndicatorTsx1(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}" };
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/StepsIndicator.tsx");

export default function StepsIndicator(current) {
  let useReducedMotion;
  current = current.current;
  const total = current.total;
  let stateFromStores;
  const style = current.style;
  const tmp = closure_7();
  let items = [AccessibilityStore];
  const obj = current(stateFromStores[9]);
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [current, total, stateFromStores];
  const items2 = [tmp.container, style];
  return <View style={items2}>{react.useMemo(() => {
    let sum;
    const items = [];
    let num = 0;
    if (0 < total) {
      do {
        sum = num + 1;
        let arr = items.push(<StepNode key={num} useReducedMotion={stateFromStores} isCurrent={sum === current} isDone={sum < current} label={sum} />);
        num = sum;
      } while (sum < total);
    }
    return items;
  }, items1)}</View>;
};

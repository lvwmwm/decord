// Module ID: 20612
// Function ID: 20613
// Name: StepsIndicator
// Dependencies: [19, 17, 5244, 21, 5243, 575, 1652, 5485, 5866, 504, 2]
// Exports: default

// Module 20612 (StepsIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let set;

let obj2;
let obj3;
let tmp2;
const timing_timing = tmp2(5485);
const Text_Text = tmp2(5866);
function StepNode(isCurrent) {
  let isDone;
  let label;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  isCurrent = isCurrent.isCurrent;
  let sharedValue;
  ({ label, isDone, useReducedMotion } = isCurrent);
  let tmp = closure_7();
  let tmp2 = require;
  let tmp3 = dependencyMap;
  let num = 0;
  const useSharedValue = _mod1652.useSharedValue;
  _mod1652;
  if (isCurrent) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let num2 = 180;
  if (useReducedMotion) {
    num2 = 0;
  }
  let items = [closure_8, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = _mod1652.interpolate;
  items[2] = sharedValue;
  items[3] = timing_timing.withTiming;
  items[4] = num2;
  items[5] = _mod1652.Easing;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class StepsIndicatorTsx1 {
    constructor() {
      let items;
      let obj3;
      let tmp3;
      const obj = { duration, easing: _undefined4.out(_undefined4.ease) };
      const tmp = _undefined(_undefined2.get(), [0, 1], [0.4, 1]);
      const obj2 = { marginHorizontal: _undefined3(tmp3, obj3), transform: items };
      obj3 = { duration, easing: _undefined4.out(_undefined4.ease) };
      const tmp2 = _undefined3(tmp, obj);
      items = [{ scale: tmp2 }];
      tmp3 = _undefined(_undefined2.get(), [0, 1], [-2, 6]);
      return obj2;
    }
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12];
  StepsIndicatorTsx1.__closure = items1;
  StepsIndicatorTsx1.__workletHash = 3353878627962;
  StepsIndicatorTsx1.__initData = tmp7;
  const items2 = [sharedValue, isCurrent];
  const animatedStyle = useAnimatedStyle(StepsIndicatorTsx1);
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    if (isCurrent) {
      num = 1;
    }
    const result = set(num);
  }, items2);
  if (!isDone) {
    let filledNode;
    if (!isCurrent) {
      filledNode = tmp.emptyNode;
    }
    const items3 = [tmp.node, animatedStyle, filledNode];
    View = _modDef1652.View;
    if (isCurrent) {
      let obj2 = { variant: "body-xs/semibold", color: "interactive-text-active", children: label };
      isCurrent = tmp15(Text_Text.Text, obj2);
    }
    return <View style={items3}>{isCurrent}</View>;
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
let closure_8 = { code: "(function StepsIndicatorTsx1(){let[interpolate,state,withTiming,duration,Easing]=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};})" };
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

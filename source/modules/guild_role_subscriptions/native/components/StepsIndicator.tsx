// Module ID: 16341
// Function ID: 126083
// Name: StepNode
// Dependencies: []
// Exports: default

// Module 16341 (StepNode)
function StepNode(isCurrent) {
  let isDone;
  let label;
  let useReducedMotion;
  isCurrent = isCurrent.isCurrent;
  const arg1 = isCurrent;
  let importDefault;
  let dependencyMap;
  ({ label, isDone, useReducedMotion } = isCurrent);
  const tmp = callback();
  let obj = arg1(dependencyMap[6]);
  let num = 0;
  if (isCurrent) {
    num = 1;
  }
  const sharedValue = obj.useSharedValue(num);
  importDefault = sharedValue;
  let num2 = 180;
  if (useReducedMotion) {
    num2 = 0;
  }
  dependencyMap = num2;
  let obj1 = arg1(dependencyMap[6]);
  const fn = function p() {
    let obj = isCurrent(num2[6]);
    let obj1 = isCurrent(num2[7]);
    obj = { duration: num2 };
    const Easing = isCurrent(num2[6]).Easing;
    obj.easing = Easing.out(isCurrent(num2[6]).Easing.ease);
    const interpolateResult = obj.interpolate(sharedValue.get(), ["replace", "then"], [0.3, 1]);
    const withTimingResult = obj1.withTiming(obj.interpolate(sharedValue.get(), ["replace", "then"], [0.3, 1]), obj);
    const items = [-2, 6];
    obj = {};
    const obj4 = isCurrent(num2[6]);
    const interpolateResult1 = isCurrent(num2[6]).interpolate(sharedValue.get(), ["replace", "then"], items);
    obj1 = { duration: num2 };
    const Easing2 = isCurrent(num2[6]).Easing;
    obj1.easing = Easing2.out(isCurrent(num2[6]).Easing.ease);
    obj.marginHorizontal = isCurrent(num2[7]).withTiming(interpolateResult1, obj1);
    const items1 = [{ scale: withTimingResult }];
    obj.transform = items1;
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[6]).interpolate, state: sharedValue, withTiming: arg1(dependencyMap[7]).withTiming, duration: num2, Easing: arg1(dependencyMap[6]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 4051275727555;
  fn.__initData = closure_8;
  const items = [sharedValue, isCurrent];
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
    const items1 = [tmp.node, animatedStyle, filledNode];
    obj.style = items1;
    if (isCurrent) {
      obj1 = { hasMaxConnections: null, isBoostOnlySubscription: null, children: label };
      isCurrent = jsx(arg1(dependencyMap[8]).Text, obj1);
    }
    obj.children = isCurrent;
    return jsx(importDefault(dependencyMap[6]).View, obj);
  }
  filledNode = tmp.filledNode;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = { container: {}, node: {} };
obj = { EMPTY_SOUND_LIST: "number", alignContent: "number", containerSizeStyle: "mY3Y38", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
obj.filledNode = obj;
obj.emptyNode = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL };
let closure_7 = obj.createStyles(obj);
let closure_8 = { code: "function StepsIndicatorTsx1(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}" };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/StepsIndicator.tsx");

export default function StepsIndicator(current) {
  current = current.current;
  const arg1 = current;
  const total = current.total;
  const importDefault = total;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const dependencyMap = stateFromStores;
  const items1 = [current, total, stateFromStores];
  obj = {
    style: items2,
    children: React.useMemo(() => {
      const items = [];
      let num = 0;
      if (0 < total) {
        do {
          let sum = num + 1;
          let tmp2 = closure_6;
          let tmp3 = closure_9;
          let obj = {};
          let tmp4 = closure_2;
          obj.useReducedMotion = closure_2;
          let tmp5 = closure_0;
          obj.isCurrent = sum === closure_0;
          obj.isDone = sum < closure_0;
          obj.label = sum;
          let arr = items.push(closure_6(closure_9, obj, num));
          num = num + 1;
          let tmp7 = closure_1;
        } while (num < closure_1);
      }
      return items;
    }, items1)
  };
  const items2 = [callback().container, current.style];
  return <View {...obj} />;
};

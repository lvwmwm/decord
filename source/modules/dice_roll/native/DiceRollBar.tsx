// Module ID: 11417
// Function ID: 88784
// Name: DiceRollBar
// Dependencies: []
// Exports: default

// Module 11417 (DiceRollBar)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const useDiceRollState = arg1(dependencyMap[3]).useDiceRollState;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { animatedContainer: { overflow: "hidden" } };
obj = { borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function DiceRollBarTsx1(){const{useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};}" };
let closure_11 = { code: "function DiceRollBarTsx2(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/dice_roll/native/DiceRollBar.tsx");

export default function DiceRollBar(channelId) {
  let View;
  let closure_5;
  const tmp = callback3();
  const tmp2 = useDiceRollState(channelId.channelId);
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => tmp9.useReducedMotion);
  const arg1 = stateFromStores;
  let obj1 = arg1(dependencyMap[8]);
  const sharedValue = obj1.useSharedValue(0);
  const importDefault = sharedValue;
  let obj2 = arg1(dependencyMap[8]);
  const sharedValue1 = obj2.useSharedValue(0);
  const dependencyMap = sharedValue1;
  let obj3 = arg1(dependencyMap[8]);
  const sharedValue2 = obj3.useSharedValue(0);
  const React = sharedValue2;
  View = tmp7;
  let rolling;
  if (null != tmp2) {
    rolling = tmp2.rolling;
  }
  closure_5 = tmp9;
  const items1 = [null != tmp2 && !tmp2.dismissing, sharedValue, sharedValue1];
  const effect = React.useEffect(() => {
    let num = 0;
    if (tmp7) {
      num = 56;
    }
    const result = sharedValue.set(num);
    let num2 = 0;
    if (tmp7) {
      num2 = 1;
    }
    const result1 = sharedValue1.set(num2);
  }, items1);
  const items2 = [null != rolling && rolling, stateFromStores, sharedValue2];
  const effect1 = React.useEffect(() => {
    if (tmp9) {
      if (!stateFromStores) {
        let obj = stateFromStores(sharedValue1[8]);
        obj = { duration: 800, easing: stateFromStores(sharedValue1[8]).Easing.linear };
        const result = sharedValue2.set(obj.withRepeat(stateFromStores(sharedValue1[9]).withTiming(360, obj), -1, false));
        const obj2 = stateFromStores(sharedValue1[9]);
      }
    }
    const result1 = sharedValue2.set(0);
  }, items2);
  let obj4 = arg1(dependencyMap[8]);
  const fn = function p() {
    let obj = {};
    if (stateFromStores) {
      obj.height = sharedValue.get();
      obj.opacity = sharedValue1.get();
      let tmp7 = obj;
    } else {
      obj = { duration: 300 };
      let value = sharedValue.get();
      obj.easing = stateFromStores(sharedValue1[10]).DECELERATED_EASING;
      obj.height = stateFromStores(sharedValue1[9]).withTiming(value, obj);
      const obj2 = stateFromStores(sharedValue1[9]);
      obj = { duration: 300 };
      value = sharedValue1.get();
      obj.easing = stateFromStores(sharedValue1[10]).DECELERATED_EASING;
      obj.opacity = stateFromStores(sharedValue1[9]).withTiming(value, obj);
      tmp7 = obj;
      const obj4 = stateFromStores(sharedValue1[9]);
    }
    return tmp7;
  };
  obj = { useReducedMotion: stateFromStores, height: sharedValue, opacity: sharedValue1, withTiming: arg1(dependencyMap[9]).withTiming, ANIMATION_DURATION_MS: 300, DECELERATED_EASING: arg1(dependencyMap[10]).DECELERATED_EASING };
  fn.__closure = obj;
  fn.__workletHash = 2405066513233;
  fn.__initData = closure_10;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  arg1(dependencyMap[8]);
  const fn2 = function y() {
    let obj = {};
    obj = { rotate: "" + sharedValue2.get() + "deg" };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { rotation: sharedValue2 };
  fn2.__workletHash = 12265072947874;
  fn2.__initData = closure_11;
  if (null == tmp2) {
    return null;
  } else {
    const barText = arg1(dependencyMap[11]).getBarText(tmp9, tmp2.results);
    obj = {};
    const items3 = [animatedStyle, tmp.animatedContainer];
    obj.style = items3;
    obj1 = { style: tmp.container };
    obj2 = { style: tmp14 };
    obj3 = { size: "md" };
    obj2.children = callback(arg1(dependencyMap[12]).DiceIcon, obj3);
    const items4 = [callback(importDefault(dependencyMap[8]).View, obj2), ];
    obj4 = { children: barText };
    items4[1] = callback(arg1(dependencyMap[13]).Text, obj4);
    obj1.children = items4;
    obj.children = callback2(View, obj1);
    return callback(importDefault(dependencyMap[8]).View, obj);
  }
};

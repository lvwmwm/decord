// Module ID: 13815
// Function ID: 104479
// Name: result
// Dependencies: []
// Exports: default

// Module 13815 (result)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const result = (arg1(dependencyMap[3]).SMALL_BUTTON_HEIGHT - 4) / 2;
let closure_8 = 2 * Math.PI * result;
const Easing = arg1(dependencyMap[4]).Easing;
let closure_9 = Easing.bezier(0.15, 0.21, 0.58, 1);
const Easing2 = arg1(dependencyMap[4]).Easing;
let closure_10 = Easing2.bezier(0.61, 0, 0.58, 1);
const Easing3 = arg1(dependencyMap[4]).Easing;
let closure_11 = Easing3.bezier(0.42, 0, 0.58, 1);
const tmp2 = arg1(dependencyMap[2]);
let closure_12 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[5]).Circle);
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.round, width: arg1(dependencyMap[3]).SMALL_BUTTON_HEIGHT, height: arg1(dependencyMap[3]).SMALL_BUTTON_HEIGHT };
obj.progress = obj;
const items = [{ rotate: "-90deg" }];
obj.ring = { position: "absolute", transform: items };
obj1 = { color: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGHEST };
obj.trackPath = obj1;
const obj2 = { color: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
const importDefaultResult = importDefault(dependencyMap[4]);
let num;
if (obj7.isAndroid()) {
  num = 14;
}
obj2.lineHeight = num;
obj.countdownText = obj2;
obj.checkmarkLayer = {};
const obj3 = { "Bool(false)": -1056589064039671700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 13336028915440285000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006365987372995, borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.checkmarkBackground = obj3;
obj.checkmarkIcon = { bhk: false, bic: "internal" };
let closure_13 = obj1.createStyles(obj);
let closure_14 = { code: "function BountiesModalTimerTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};}" };
let closure_15 = { code: "function BountiesModalTimerTsx2(){const{checkmarkBackgroundScale}=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};}" };
let closure_16 = { code: "function BountiesModalTimerTsx3(){const{checkmarkScale}=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};}" };
const obj7 = arg1(dependencyMap[8]);
const result1 = arg1(dependencyMap[12]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalTimer.tsx");

export default function BountiesModalTimer(arg0) {
  let isCompleted;
  let remainingSeconds;
  let totalSeconds;
  ({ isCompleted, totalSeconds, remainingSeconds } = arg0);
  let arg1;
  let importDefault;
  let dependencyMap;
  let React;
  let View;
  let callback;
  const tmp = callback3();
  let tmp2 = isCompleted;
  if (!isCompleted) {
    tmp2 = remainingSeconds <= 0;
  }
  arg1 = tmp2;
  importDefault = 0;
  const bound = Math.max(1, Math.ceil(remainingSeconds));
  if (isCompleted) {
    importDefault = 1;
    let num2 = 1;
  } else {
    num2 = 0;
    if (totalSeconds > 0) {
      const diff = 1 - remainingSeconds / totalSeconds;
      importDefault = diff;
      num2 = diff;
    }
  }
  let obj = arg1(dependencyMap[4]);
  const sharedValue = obj.useSharedValue(num2);
  dependencyMap = sharedValue;
  let obj1 = arg1(dependencyMap[4]);
  const sharedValue1 = obj1.useSharedValue(0);
  React = sharedValue1;
  let obj2 = arg1(dependencyMap[4]);
  const sharedValue2 = obj2.useSharedValue(0);
  View = sharedValue2;
  const items = [sharedValue, num2];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(tmp2(sharedValue[9]).withTiming(diff, { duration: 500 }, "animate-always"));
  }, items);
  callback = React.useRef(false);
  const items1 = [tmp2, sharedValue1, sharedValue2];
  const effect1 = React.useEffect(() => {
    ref.current = true;
    let set = sharedValue1.set;
    if (tmp2) {
      if (!ref.current) {
        const result = set(1);
        set = sharedValue2;
        const result1 = sharedValue2.set(1);
      } else {
        let obj = tmp2(sharedValue[4]);
        let obj1 = tmp2(sharedValue[9]);
        obj = { duration: 267, easing: closure_9 };
        const withTimingResult = obj1.withTiming(1.65, obj);
        obj = { duration: 233, easing: closure_10 };
        const result2 = set(obj.withSequence(withTimingResult, tmp2(sharedValue[9]).withTiming(1, obj)));
        const obj4 = tmp2(sharedValue[9]);
        const obj6 = tmp2(sharedValue[4]);
        const obj7 = tmp2(sharedValue[4]);
        obj1 = { duration: 167, easing: closure_11 };
        const obj8 = tmp2(sharedValue[9]);
        const withTimingResult1 = tmp2(sharedValue[9]).withTiming(1.25, obj1);
        const obj2 = { duration: 333, easing: closure_11 };
        const result3 = sharedValue2.set(obj6.withDelay(167, obj7.withSequence(withTimingResult1, tmp2(sharedValue[9]).withTiming(1, obj2))));
        const obj10 = tmp2(sharedValue[9]);
      }
    } else {
      const result4 = set(0);
      const result5 = sharedValue2.set(0);
    }
  }, items1);
  let obj3 = arg1(dependencyMap[4]);
  class U {
    constructor() {
      obj = { strokeDashoffset: closure_8 - closure_8 * closure_2.get() };
      return obj;
    }
  }
  obj = { PROGRESS_CIRCUMFERENCE: closure_8, animatedProgress: sharedValue };
  U.__closure = obj;
  U.__workletHash = 12964700773124;
  U.__initData = closure_14;
  const animatedProps = obj3.useAnimatedProps(U);
  let obj5 = arg1(dependencyMap[4]);
  const fn = function x() {
    let obj = {};
    obj = { scale: sharedValue1.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { checkmarkBackgroundScale: sharedValue1 };
  fn.__workletHash = 10834015407160;
  fn.__initData = closure_15;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  let obj6 = arg1(dependencyMap[4]);
  class G {
    constructor() {
      obj = {};
      obj = { scale: closure_4.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  G.__closure = { checkmarkScale: sharedValue2 };
  G.__workletHash = 7510845920441;
  G.__initData = closure_16;
  obj = { style: tmp.progress };
  const animatedStyle1 = obj6.useAnimatedStyle(G);
  obj1 = { height: arg1(dependencyMap[3]).SMALL_BUTTON_HEIGHT, width: arg1(dependencyMap[3]).SMALL_BUTTON_HEIGHT, style: tmp.ring };
  obj2 = { cx: arg1(dependencyMap[3]).SMALL_BUTTON_HEIGHT / 2, cy: arg1(dependencyMap[3]).SMALL_BUTTON_HEIGHT / 2, r: result, fill: "none", stroke: tmp.trackPath.color, strokeWidth: 4 };
  const items2 = [callback(arg1(dependencyMap[5]).Circle, obj2), ];
  obj3 = { -2064463865: "/assets/images/user_settings", 1532209761: 224, 184875652: 104, 1416126723: null, 259157590: "a2009aeba6d9e049dbc8c9ac25b7dc92", -1550620699: "crunchyroll_link_success", cx: arg1(dependencyMap[3]).SMALL_BUTTON_HEIGHT / 2, cy: arg1(dependencyMap[3]).SMALL_BUTTON_HEIGHT / 2, r: result, strokeDasharray: closure_8, strokeLinecap: "round", animatedProps };
  items2[1] = callback(closure_12, obj3);
  obj1.children = items2;
  const items3 = [callback2(importDefault(dependencyMap[5]), obj1), , , ];
  let tmp16 = !tmp2;
  if (tmp16) {
    const obj4 = { messageId: 0, flash: null, offset: 0, style: tmp.countdownText, children: bound };
    tmp16 = callback(arg1(dependencyMap[10]).Text, obj4);
  }
  items3[1] = tmp16;
  obj5 = { style: items4 };
  const items4 = [tmp.checkmarkLayer, animatedStyle];
  obj6 = { style: tmp.checkmarkBackground };
  obj5.children = callback(View, obj6);
  items3[2] = callback(importDefault(dependencyMap[4]).View, obj5);
  const obj7 = { style: items5 };
  const items5 = [tmp.checkmarkLayer, animatedStyle1];
  const obj8 = { size: "custom", color: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, style: tmp.checkmarkIcon };
  obj7.children = callback(arg1(dependencyMap[11]).CheckmarkSmallBoldIcon, obj8);
  items3[3] = callback(importDefault(dependencyMap[4]).View, obj7);
  obj.children = items3;
  return callback2(View, obj);
};

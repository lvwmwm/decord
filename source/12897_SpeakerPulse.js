// Module ID: 12897
// Function ID: 98424
// Name: SpeakerPulse
// Dependencies: []
// Exports: default

// Module 12897 (SpeakerPulse)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.WHITE };
obj.pulse = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.border = { backgroundColor: importDefault(dependencyMap[5]).colors.STATUS_SPEAKING };
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function SpeakerPulseTsx1(){const{animatedInnerOpacity}=this.__closure;return{opacity:animatedInnerOpacity.get()};}" };
let closure_11 = { code: "function SpeakerPulseTsx2(){const{animatedOuterOpacity}=this.__closure;return{opacity:animatedOuterOpacity.get()};}" };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.STATUS_SPEAKING };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/stage_channels/native/components/SpeakerPulse.tsx");

export default function SpeakerPulse(style) {
  style = style.style;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => !useReducedMotion.useReducedMotion, []);
  const arg1 = stateFromStores;
  const sharedValue = arg1(dependencyMap[7]).useSharedValue(0.16);
  const importDefault = sharedValue;
  const obj2 = arg1(dependencyMap[7]);
  const sharedValue1 = arg1(dependencyMap[7]).useSharedValue(0.16);
  const dependencyMap = sharedValue1;
  const items1 = [stateFromStores, sharedValue, sharedValue1];
  const effect = React.useEffect(() => {
    let obj = sharedValue;
    if (stateFromStores) {
      const result = set(0);
      const result1 = sharedValue1.set(0);
      let obj1 = stateFromStores(sharedValue1[7]);
      let obj2 = stateFromStores(sharedValue1[7]);
      const obj4 = stateFromStores(sharedValue1[7]);
      obj = { duration: 250 };
      const obj5 = stateFromStores(sharedValue1[8]);
      const withDelayResult = obj4.withDelay(100, stateFromStores(sharedValue1[8]).withTiming(0.16, obj));
      const obj7 = stateFromStores(sharedValue1[7]);
      obj = { duration: 500 };
      const obj8 = stateFromStores(sharedValue1[8]);
      const withRepeatResult = obj1.withRepeat(obj2.withSequence(withDelayResult, obj7.withDelay(250, stateFromStores(sharedValue1[8]).withTiming(0, obj))), -1, false);
      const obj10 = stateFromStores(sharedValue1[7]);
      const obj11 = stateFromStores(sharedValue1[7]);
      const obj12 = stateFromStores(sharedValue1[7]);
      obj1 = { duration: 250 };
      const obj13 = stateFromStores(sharedValue1[8]);
      const withDelayResult1 = obj12.withDelay(350, stateFromStores(sharedValue1[8]).withTiming(0.16, obj1));
      obj2 = { duration: 500 };
      const obj15 = stateFromStores(sharedValue1[8]);
      const result2 = obj.set(withRepeatResult);
      const result3 = sharedValue1.set(obj10.withRepeat(obj11.withSequence(withDelayResult1, stateFromStores(sharedValue1[8]).withTiming(0, obj2)), -1, false));
      const withRepeatResult1 = obj10.withRepeat(obj11.withSequence(withDelayResult1, stateFromStores(sharedValue1[8]).withTiming(0, obj2)), -1, false);
    } else {
      const result4 = set(0.16);
      const result5 = sharedValue1.set(0.16);
    }
  }, items1);
  const obj3 = arg1(dependencyMap[7]);
  class T {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  T.__closure = { animatedInnerOpacity: sharedValue };
  T.__workletHash = 202297893401;
  T.__initData = closure_10;
  const animatedStyle = arg1(dependencyMap[7]).useAnimatedStyle(T);
  const obj4 = arg1(dependencyMap[7]);
  const fn = function k() {
    return { opacity: sharedValue1.get() };
  };
  fn.__closure = { animatedOuterOpacity: sharedValue1 };
  fn.__workletHash = 13537504931930;
  fn.__initData = closure_11;
  obj = {};
  const items2 = [tmp.border, style];
  const animatedStyle1 = arg1(dependencyMap[7]).useAnimatedStyle(fn);
  const items3 = [callback(View, { style: items2 }), , ];
  const items4 = [tmp.pulse, style, animatedStyle, ];
  const items5 = [{ scale: 1.5 }];
  items4[3] = { transform: items5 };
  items3[1] = callback(importDefault(dependencyMap[7]).View, { style: items4 });
  const items6 = [tmp.pulse, style, animatedStyle1, ];
  const items7 = [{ scale: 2 }];
  items6[3] = { transform: items7 };
  items3[2] = callback(importDefault(dependencyMap[7]).View, { style: items6 });
  obj.children = items3;
  return callback2(closure_7, obj);
};

// Module ID: 4554
// Function ID: 39897
// Name: EllipsisCircle
// Dependencies: []
// Exports: Ellipsis

// Module 4554 (EllipsisCircle)
function EllipsisCircle(offset) {
  let size;
  let variant;
  offset = offset.offset;
  const arg1 = offset;
  ({ variant, size } = offset);
  const obj = arg1(dependencyMap[6]);
  const tmp = callback3(size, offset, arg1(dependencyMap[6]).useForegroundColor(variant));
  const sharedValue = arg1(dependencyMap[2]).useSharedValue(0.4);
  const importDefault = sharedValue;
  const obj2 = arg1(dependencyMap[2]);
  const sharedValue1 = arg1(dependencyMap[2]).useSharedValue(0.75);
  const dependencyMap = sharedValue1;
  const obj3 = arg1(dependencyMap[2]);
  const mountLayoutEffect = arg1(dependencyMap[7]).useMountLayoutEffect(() => {
    const result = sharedValue.set(callback(offset, 1));
    const result1 = sharedValue1.set(callback(offset, 1));
    return () => {
      callback(closure_2[2]).cancelAnimation(closure_1);
      const obj = callback(closure_2[2]);
      callback(closure_2[2]).cancelAnimation(closure_2);
    };
  });
  const obj4 = arg1(dependencyMap[7]);
  const fn = function w() {
    let obj = { opacity: sharedValue.get() };
    obj = { scale: sharedValue1.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { opacity: sharedValue, scale: sharedValue1 };
  fn.__workletHash = 13371762734705;
  fn.__initData = closure_9;
  const animatedStyle = arg1(dependencyMap[2]).useAnimatedStyle(fn);
  const style = [tmp.circle, animatedStyle];
  return callback(importDefault(dependencyMap[2]).View, { style });
}
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const obj = { duration: 500 };
const Easing = arg1(dependencyMap[2]).Easing;
obj.easing = Easing.inOut(arg1(dependencyMap[2]).Easing.quad);
const tmp3 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[3]).createStyles((arg0, arg1, backgroundColor) => {
  if ("lg" === arg0) {
    let num2 = 8;
    let num = 4;
  } else {
    if ("md" !== arg0) {
      if ("sm" !== arg0) {
        num = 4;
        if ("xs" === arg0) {
          num2 = 5;
          num = 3;
        }
      }
    }
    num2 = 6;
    num = 4;
  }
  let obj = {};
  obj = { width: num2, height: num2, borderRadius: importDefault(dependencyMap[4]).radii.round };
  let num3 = 0;
  if (2 !== arg1) {
    num3 = num;
  }
  obj.marginEnd = num3;
  obj.backgroundColor = backgroundColor;
  obj.circle = obj;
  return obj;
});
let closure_7 = { code: "function withEllipsisAnimation_ButtonEllipsisNativeTsx1(offset,value){const{ELLIPSIS_APPEAR_DURATION,withDelay,withRepeat,withTiming,ELLIPSIS_APPEAR_TIMING}=this.__closure;const animationTimeMs=ELLIPSIS_APPEAR_DURATION;const animationStaggerTimeMs=animationTimeMs/3;return withDelay(offset*animationStaggerTimeMs,withRepeat(withTiming(value,ELLIPSIS_APPEAR_TIMING,'animate-always'),-1,true));}" };
let closure_8 = () => {
  function withEllipsisAnimation(arg0, value) {
    const result = 166.66666666666666 * arg0;
    const obj = callback(closure_2[2]);
    const obj2 = callback(closure_2[2]);
    return obj.withDelay(result, obj2.withRepeat(callback(closure_2[5]).withTiming(value, closure_5, "animate-always"), -1, true));
  }
  const obj = { ELLIPSIS_APPEAR_DURATION: 500, withDelay: arg1(dependencyMap[2]).withDelay, withRepeat: arg1(dependencyMap[2]).withRepeat, withTiming: arg1(dependencyMap[5]).withTiming, ELLIPSIS_APPEAR_TIMING: obj };
  withEllipsisAnimation.__closure = obj;
  withEllipsisAnimation.__workletHash = 2181731162311;
  withEllipsisAnimation.__initData = closure_7;
  return withEllipsisAnimation;
}();
let closure_9 = { code: "function ButtonEllipsisNativeTsx2(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Button/native/ButtonEllipsis.native.tsx");

export const Ellipsis = function Ellipsis(arg0) {
  let obj = { style: { flexDirection: "row" } };
  obj = { offset: 0 };
  const merged = Object.assign(arg0);
  const items = [callback(EllipsisCircle, obj), , ];
  obj = { offset: 1 };
  const merged1 = Object.assign(arg0);
  items[1] = callback(EllipsisCircle, obj);
  const merged2 = Object.assign(arg0);
  items[2] = callback(EllipsisCircle, { offset: 2 });
  obj.children = items;
  return callback2(importDefault(dependencyMap[2]).View, obj);
};

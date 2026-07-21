// Module ID: 7178
// Function ID: 57811
// Dependencies: []

// Module 7178
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ Image: closure_4, View: closure_5 } = tmp2);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = Object.freeze({});
let obj1 = arg1(dependencyMap[3]);
let obj = { container: { overflow: "hidden" } };
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj.shineContainer = obj;
const items = [{ rotate: "30deg" }];
obj.shine = { transform: items };
obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_NORMAL, flex: 1 };
obj.shineInner = obj1;
let closure_9 = obj1.createStyles(obj);
let closure_10 = { code: "function ShineAnimationTsx1(){const{interpolate,progress}=this.__closure;const widthPercent=interpolate(progress.get(),[0,1],[20,160]);return{width:widthPercent+\"%\"};}" };
let closure_11 = { code: "function ShineAnimationTsx2(){const{ShineAnimationConfig,interpolateColor,progress,flashStartColor,flashEndColor}=this.__closure;const startTime=ShineAnimationConfig.FLASH_TIME_PERCENT;const duration=ShineAnimationConfig.FLASH_DURATION_PERCENT;return{backgroundColor:interpolateColor(progress.get(),[0,startTime,startTime,startTime+duration,1],[flashStartColor,flashStartColor,flashEndColor,flashEndColor,flashStartColor])};}" };
const tmp3 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function ShineAnimation(arg0) {
  let source;
  let style;
  ({ source, style } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const sharedValue = obj.useSharedValue(0);
  const arg1 = sharedValue;
  const items = [sharedValue];
  const effect = importAllResult.useEffect(() => {
    const obj = sharedValue(hexResult1[5]);
    const obj2 = sharedValue(hexResult1[5]);
    const result = sharedValue.set(obj.withDelay(400, obj2.withRepeat(sharedValue(hexResult1[6]).withTiming(1, { duration: 1000 }), -1, false)));
  }, items);
  let obj1 = arg1(dependencyMap[5]);
  class A {
    constructor() {
      obj = {};
      obj2 = closure_0(alpha[5]);
      obj.width = "" + obj2.interpolate(closure_0.get(), ["Text", "lc"], [-1631213746, -1765345429]) + "%";
      return obj;
    }
  }
  obj = { interpolate: arg1(dependencyMap[5]).interpolate, progress: sharedValue };
  A.__closure = obj;
  A.__workletHash = 4072719467417;
  A.__initData = closure_10;
  const animatedStyle = obj1.useAnimatedStyle(A);
  const tmp5 = importDefault(dependencyMap[7]);
  const tmp5Result = importDefault(dependencyMap[7])(importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_360);
  const hexResult = importDefault(dependencyMap[7])(importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_360).alpha(0.2).hex();
  const importDefault = hexResult;
  const alphaResult = importDefault(dependencyMap[7])(importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_360).alpha(0.2);
  const tmp7 = importDefault(dependencyMap[7]);
  const tmp7Result = importDefault(dependencyMap[7])(importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_360);
  const hexResult1 = importDefault(dependencyMap[7])(importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_360).alpha(1).hex();
  const dependencyMap = hexResult1;
  const alphaResult1 = importDefault(dependencyMap[7])(importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_360).alpha(1);
  class E {
    constructor() {
      FLASH_TIME_PERCENT = closure_8.FLASH_TIME_PERCENT;
      obj = {};
      obj2 = closure_0(alpha[5]);
      items = [0.229];
      items[1] = FLASH_TIME_PERCENT;
      items[2] = FLASH_TIME_PERCENT;
      items[3] = FLASH_TIME_PERCENT + closure_8.FLASH_DURATION_PERCENT;
      items[4] = 1;
      items1 = [, , , , ];
      items1[0] = closure_1;
      items1[1] = closure_1;
      items1[2] = alpha;
      items1[3] = alpha;
      items1[4] = closure_1;
      obj.backgroundColor = obj2.interpolateColor(closure_0.get(), items, items1);
      return obj;
    }
  }
  obj = { ShineAnimationConfig: closure_8, interpolateColor: arg1(dependencyMap[5]).interpolateColor, progress: sharedValue, flashStartColor: hexResult, flashEndColor: hexResult1 };
  E.__closure = obj;
  E.__workletHash = 9845866779228;
  E.__initData = closure_11;
  const animatedStyle1 = arg1(dependencyMap[5]).useAnimatedStyle(E);
  obj1 = { style: items1 };
  const items1 = [tmp.container, style, animatedStyle1];
  const obj2 = { style: tmp.shineContainer };
  const items2 = [callback(importDefault(dependencyMap[5]).View, { style: animatedStyle }), ];
  const obj8 = arg1(dependencyMap[5]);
  items2[1] = callback(closure_5, { style: tmp.shine, children: callback(closure_5, obj4) });
  obj2.children = items2;
  const items3 = [callback2(closure_5, obj2), callback(closure_4, { source })];
  obj1.children = items3;
  return callback2(importDefault(dependencyMap[5]).View, obj1);
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("components_native/premium/ShineAnimation.tsx");

export default memoResult;

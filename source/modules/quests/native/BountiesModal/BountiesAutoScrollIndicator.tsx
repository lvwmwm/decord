// Module ID: 13838
// Function ID: 104596
// Name: BouncingArrow
// Dependencies: []
// Exports: default

// Module 13838 (BouncingArrow)
function BouncingArrow(children) {
  const sharedValue = arg1(dependencyMap[3]).useSharedValue(0);
  const arg1 = sharedValue;
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    let obj = sharedValue(closure_2[3]);
    const obj2 = sharedValue(closure_2[3]);
    obj = { duration: 500 };
    const Easing = sharedValue(closure_2[3]).Easing;
    obj.easing = Easing.inOut(sharedValue(closure_2[3]).Easing.quad);
    const obj3 = sharedValue(closure_2[4]);
    const withTimingResult = sharedValue(closure_2[4]).withTiming(-6, obj);
    obj = { duration: 500 };
    const Easing2 = sharedValue(closure_2[3]).Easing;
    obj.easing = Easing2.inOut(sharedValue(closure_2[3]).Easing.quad);
    const result = sharedValue.set(obj.withRepeat(obj2.withSequence(withTimingResult, sharedValue(closure_2[4]).withTiming(0, obj)), -1));
    return () => callback(closure_2[3]).cancelAnimation(callback);
  }, items);
  const obj = arg1(dependencyMap[3]);
  const fn = function l() {
    let obj = {};
    obj = { translateY: sharedValue.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { translateY: sharedValue };
  fn.__workletHash = 10126349088819;
  fn.__initData = closure_7;
  const style = arg1(dependencyMap[3]).useAnimatedStyle(fn);
  return callback(importDefault(dependencyMap[3]).View, { style, children: children.children });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = { code: "function BountiesAutoScrollIndicatorTsx1(){const{translateY}=this.__closure;return{transform:[{translateY:translateY.get()}]};}" };
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { alignItems: "center", gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.root = obj;
obj.ringContainer = { <string:3426444977>: 104, <string:2874585443>: "temp_banned", <string:1648074851>: "message", <string:1666079313>: "state" };
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesAutoScrollIndicator.tsx");

export default function BountiesAutoScrollIndicator(showProgressRing) {
  let flag = showProgressRing.showProgressRing;
  if (flag === undefined) {
    flag = true;
  }
  let arg1;
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  const token = obj.useToken(importDefault(dependencyMap[6]).colors.WHITE);
  obj = { size: "md", color: importDefault(dependencyMap[6]).colors.WHITE };
  const tmp3 = callback(arg1(dependencyMap[8]).ArrowSmallUpIcon, obj);
  arg1 = tmp3;
  obj = { style: tmp.root };
  const obj1 = { cachedAt: null, edpbxy: "Array" };
  const intl = arg1(dependencyMap[10]).intl;
  obj1.children = intl.string(arg1(dependencyMap[10]).t.eafsh4);
  const items = [callback(arg1(dependencyMap[9]).Text, obj1), ];
  const obj2 = { style: tmp.ringContainer };
  if (flag) {
    const obj3 = {
      "Bool(false)": "isArray",
      "Bool(false)": "constructor",
      "Bool(false)": "toString",
      "Bool(false)": "isArray",
      "Bool(false)": "isArray",
      "Bool(false)": "isArray",
      "Bool(false)": "toString",
      "Bool(false)": "isArray",
      fill: 100 * showProgressRing.progress,
      tintColor: token,
      children() {
          return tmp3;
        }
    };
    let tmp7Result = tmp7(arg1(dependencyMap[11]).AnimatedCircularProgress, obj3);
  } else {
    const obj4 = { children: tmp3 };
    tmp7Result = tmp7(BouncingArrow, obj4);
  }
  obj2.children = tmp7Result;
  items[1] = callback(View, obj2);
  obj.children = items;
  return closure_6(View, obj);
};

// Module ID: 14059
// Function ID: 107381
// Name: BouncingArrow
// Dependencies: [31, 27, 33, 4026, 4166, 4165, 689, 3869, 14060, 4161, 1212, 14062, 2]
// Exports: default

// Module 14059 (BouncingArrow)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function BouncingArrow(children) {
  sharedValue = sharedValue(4026).useSharedValue(0);
  let items = [sharedValue];
  const effect = React.useEffect(() => {
    let obj = sharedValue(outer1_2[3]);
    const obj2 = sharedValue(outer1_2[3]);
    obj = { duration: 500 };
    const Easing = sharedValue(outer1_2[3]).Easing;
    obj.easing = Easing.inOut(sharedValue(outer1_2[3]).Easing.quad);
    const obj3 = sharedValue(outer1_2[4]);
    const withTimingResult = sharedValue(outer1_2[4]).withTiming(-6, obj);
    obj = { duration: 500 };
    const Easing2 = sharedValue(outer1_2[3]).Easing;
    obj.easing = Easing2.inOut(sharedValue(outer1_2[3]).Easing.quad);
    const result = sharedValue.set(obj.withRepeat(obj2.withSequence(withTimingResult, sharedValue(outer1_2[4]).withTiming(0, obj)), -1));
    return () => sharedValue(outer2_2[3]).cancelAnimation(outer1_0);
  }, items);
  let obj = sharedValue(4026);
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
  const style = sharedValue(4026).useAnimatedStyle(fn);
  return callback(importDefault(4026).View, { style, children: children.children });
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = { code: "function BountiesAutoScrollIndicatorTsx1(){const{translateY}=this.__closure;return{transform:[{translateY:translateY.get()}]};}" };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.root = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.ringContainer = { alignItems: "center", justifyContent: "center", width: 40, height: 40 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("jsxProd").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesAutoScrollIndicator.tsx");

export default function BountiesAutoScrollIndicator(showProgressRing) {
  let flag = showProgressRing.showProgressRing;
  if (flag === undefined) {
    flag = true;
  }
  let _require;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = _require(3869);
  const token = obj.useToken(importDefault(689).colors.WHITE);
  obj = { size: "md", color: importDefault(689).colors.WHITE };
  const tmp3 = callback(_require(14060).ArrowSmallUpIcon, obj);
  _require = tmp3;
  obj = { style: tmp.root };
  const obj1 = { variant: "text-md/semibold", color: "text-default" };
  const intl = _require(1212).intl;
  obj1.children = intl.string(_require(1212).t.eafsh4);
  const items = [callback(_require(4161).Text, obj1), ];
  const obj2 = { style: tmp.ringContainer };
  if (flag) {
    const obj3 = {
      size: 40,
      width: 3,
      fill: 100 * showProgressRing.progress,
      duration: 0,
      rotation: 0,
      lineCap: "round",
      tintColor: token,
      backgroundColor: "rgba(255, 255, 255, 0.35)",
      children() {
          return c0;
        }
    };
    let tmp7Result = tmp7(_require(14062).AnimatedCircularProgress, obj3);
  } else {
    const obj4 = { children: tmp3 };
    tmp7Result = tmp7(BouncingArrow, obj4);
  }
  obj2.children = tmp7Result;
  items[1] = callback(View, obj2);
  obj.children = items;
  return closure_6(View, obj);
};

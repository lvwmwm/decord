// Module ID: 13952
// Function ID: 106752
// Name: BouncingArrow
// Dependencies: [31, 27, 33, 3991, 4131, 4130, 689, 3834, 13953, 4126, 1212, 13955, 2]
// Exports: default

// Module 13952 (BouncingArrow)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function BouncingArrow(children) {
  sharedValue = sharedValue(3991).useSharedValue(0);
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
  let obj = sharedValue(3991);
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
  const style = sharedValue(3991).useAnimatedStyle(fn);
  return callback(importDefault(3991).View, { style, children: children.children });
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
  let obj = _require(3834);
  const token = obj.useToken(importDefault(689).colors.WHITE);
  obj = { size: "md", color: importDefault(689).colors.WHITE };
  const tmp3 = callback(_require(13953).ArrowSmallUpIcon, obj);
  _require = tmp3;
  obj = { style: tmp.root };
  const obj1 = { variant: "text-md/semibold", color: "text-default" };
  const intl = _require(1212).intl;
  obj1.children = intl.string(_require(1212).t.eafsh4);
  const items = [callback(_require(4126).Text, obj1), ];
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
    let tmp7Result = tmp7(_require(13955).AnimatedCircularProgress, obj3);
  } else {
    const obj4 = { children: tmp3 };
    tmp7Result = tmp7(BouncingArrow, obj4);
  }
  obj2.children = tmp7Result;
  items[1] = callback(View, obj2);
  obj.children = items;
  return closure_6(View, obj);
};

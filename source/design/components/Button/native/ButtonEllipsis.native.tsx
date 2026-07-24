// Module ID: 4558
// Function ID: 39938
// Name: EllipsisCircle
// Dependencies: [31, 33, 3991, 4130, 689, 4131, 4548, 4559, 2]
// Exports: Ellipsis

// Module 4558 (EllipsisCircle)
import "result";
import jsxProd from "jsxProd";
import { Easing } from "module_3991";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
function EllipsisCircle(offset) {
  let size;
  let variant;
  offset = offset.offset;
  ({ variant, size } = offset);
  let obj = offset(sharedValue1[6]);
  const tmp = callback3(size, offset, offset(sharedValue1[6]).useForegroundColor(variant));
  const sharedValue = offset(sharedValue1[2]).useSharedValue(0.4);
  const obj2 = offset(sharedValue1[2]);
  sharedValue1 = offset(sharedValue1[2]).useSharedValue(0.75);
  const obj3 = offset(sharedValue1[2]);
  const mountLayoutEffect = offset(sharedValue1[7]).useMountLayoutEffect(() => {
    const result = sharedValue.set(outer1_8(offset, 1));
    const result1 = sharedValue1.set(outer1_8(offset, 1));
    return () => {
      offset(sharedValue1[2]).cancelAnimation(outer1_1);
      const obj = offset(sharedValue1[2]);
      offset(sharedValue1[2]).cancelAnimation(outer1_2);
    };
  });
  const obj4 = offset(sharedValue1[7]);
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
  const animatedStyle = offset(sharedValue1[2]).useAnimatedStyle(fn);
  const style = [tmp.circle, animatedStyle];
  return callback(sharedValue(sharedValue1[2]).View, { style });
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let obj = { duration: 500 };
obj.easing = Easing.inOut(require("module_3991").Easing.quad);
let closure_6 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, backgroundColor) => {
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
  obj = { width: num2, height: num2, borderRadius: importDefault(689).radii.round };
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
let closure_8 = (() => {
  function withEllipsisAnimation(arg0, value) {
    const result = 166.66666666666666 * arg0;
    const obj = outer1_0(outer1_2[2]);
    const obj2 = outer1_0(outer1_2[2]);
    return obj.withDelay(result, obj2.withRepeat(outer1_0(outer1_2[5]).withTiming(value, outer1_5, "animate-always"), -1, true));
  }
  obj = { ELLIPSIS_APPEAR_DURATION: 500, withDelay: require(3991).withDelay, withRepeat: require(3991).withRepeat, withTiming: require(4131) /* withTiming */.withTiming, ELLIPSIS_APPEAR_TIMING: obj };
  withEllipsisAnimation.__closure = obj;
  withEllipsisAnimation.__workletHash = 2181731162311;
  withEllipsisAnimation.__initData = closure_7;
  return withEllipsisAnimation;
})();
let closure_9 = { code: "function ButtonEllipsisNativeTsx2(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let result = require("module_3991").fileFinishedImporting("design/components/Button/native/ButtonEllipsis.native.tsx");

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
  return callback2(importDefault(3991).View, obj);
};

// Module ID: 5647
// Function ID: 5648
// Name: ButtonEllipsis
// Dependencies: [19, 17, 21, 5095, 5014, 575, 5254, 5641, 5593, 2]
// Exports: Ellipsis

// Module 5647 (ButtonEllipsis)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let Easing;
let closure_4;
let hasOwnProperty;
function EllipsisCircle(offset) {
  let items;
  let variant;
  offset = offset.offset;
  let sharedValue1;
  ({ variant, size } = offset);
  let obj = offset(sharedValue1[7]);
  const tmp = closure_7(size, offset, obj.useForegroundColor(variant));
  let obj2 = offset(sharedValue1[3]);
  const sharedValue = obj2.useSharedValue(0.4);
  const obj3 = offset(sharedValue1[3]);
  sharedValue1 = obj3.useSharedValue(0.75);
  const obj4 = offset(sharedValue1[8]);
  const mountLayoutEffect = obj4.useMountLayoutEffect(() => {
    if (typeof withEllipsisAnimation === "function") {
      const withDelay = ReanimatedRexport.withDelay;
      const result = 166.66666666666666 * tmp4;
      ReanimatedRexport;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      let obj = timing;
      tmp2(withDelay(result, withRepeat(obj.withTiming(1, obj, "animate-always"), -1, true)));
      const tmp10 = obj;
      if (typeof tmp3 === "function") {
        const withDelay2 = ReanimatedRexport.withDelay;
        const result1 = 166.66666666666666 * tmp4;
        ReanimatedRexport;
        const withRepeat2 = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const tmp5Result4 = timing;
        tmp13(withDelay2(result1, withRepeat2(tmp5Result4.withTiming(1, tmp10, "animate-always"), -1, true)));
        return () => {
          const obj = offset(sharedValue1[3]);
          obj.cancelAnimation(sharedValue);
          const obj2 = offset(sharedValue1[3]);
          obj2.cancelAnimation(closure_1_2);
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  const fn = function w() {
    let items;
    const obj = { opacity: sharedValue.get(), transform: items };
    items = [{ scale: sharedValue1.get() }];
    ({ scale: sharedValue1.get() });
    return obj;
  };
  fn.__closure = { opacity: sharedValue, scale: sharedValue1 };
  fn.__workletHash = 13371762734705;
  fn.__initData = __initData;
  const obj5 = offset(sharedValue1[3]);
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const obj6 = { style: items };
  items = [tmp.circle, animatedStyle];
  return closure_4(sharedValue(sharedValue1[3]).View, obj6);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const ELLIPSIS_APPEAR_TIMING = { duration: 500, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
Easing = ReanimatedRexport.Easing;
let closure_7 = createStyles.createStyles((arg0, arg1, backgroundColor) => {
  let num;
  let num2;
  let num3;
  if ("lg" === arg0) {
    num = 4;
    num2 = 8;
  } else {
    if ("md" !== arg0) {
      if ("sm" !== arg0) {
        num = 4;
        if ("xs" === arg0) {
          num = 3;
          num2 = 5;
        }
      }
    }
    num = 4;
    num2 = 6;
  }
  const circle = { width: num2, height: num2, borderRadius: nativeDefault.radii.round, marginEnd: num3, backgroundColor };
  num3 = 0;
  if (2 !== arg1) {
    num3 = num;
  }
  return { circle };
});
function withEllipsisAnimation(arg0, value) {
  const withDelay = ReanimatedRexport.withDelay;
  const result = 166.66666666666666 * arg0;
  ReanimatedRexport;
  const withRepeat = ReanimatedRexport.withRepeat;
  ReanimatedRexport;
  const obj = timing;
  return withDelay(result, withRepeat(obj.withTiming(value, obj, "animate-always"), -1, true));
}
let obj2 = { ELLIPSIS_APPEAR_DURATION: 500, withDelay: ReanimatedRexport.withDelay, withRepeat: ReanimatedRexport.withRepeat, withTiming: timing.withTiming, ELLIPSIS_APPEAR_TIMING };
withEllipsisAnimation.__closure = obj2;
withEllipsisAnimation.__workletHash = 2181731162311;
withEllipsisAnimation.__initData = { code: "function withEllipsisAnimation_ButtonEllipsisNativeTsx1(offset,value){const{ELLIPSIS_APPEAR_DURATION,withDelay,withRepeat,withTiming,ELLIPSIS_APPEAR_TIMING}=this.__closure;const animationTimeMs=ELLIPSIS_APPEAR_DURATION;const animationStaggerTimeMs=animationTimeMs/3;return withDelay(offset*animationStaggerTimeMs,withRepeat(withTiming(value,ELLIPSIS_APPEAR_TIMING,'animate-always'),-1,true));}" };
const __initData = { code: "function ButtonEllipsisNativeTsx2(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let result = size.fileFinishedImporting("design/components/Button/native/ButtonEllipsis.native.tsx");

export function Ellipsis(arg0) {
  let items;
  const obj = { style: { flexDirection: "row" }, children: items };
  const obj2 = { offset: 0 };
  const merged = Object.assign(arg0);
  items = [React3(EllipsisCircle, obj2), , ];
  const obj3 = { offset: 1 };
  const merged1 = Object.assign(arg0);
  items[1] = React3(EllipsisCircle, obj3);
  const obj4 = { offset: 2 };
  const merged2 = Object.assign(arg0);
  items[2] = React3(EllipsisCircle, obj4);
  return hasOwnProperty(View, obj);
}

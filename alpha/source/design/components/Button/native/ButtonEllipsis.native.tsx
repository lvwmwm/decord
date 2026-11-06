// Module ID: 5801
// Function ID: 5802
// Name: ButtonEllipsis
// Dependencies: [19, 17, 21, 1652, 5170, 575, 5400, 5795, 5751, 2]
// Exports: Ellipsis

// Module 5801 (ButtonEllipsis)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5400 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let Easing;
let closure_4;
let hasOwnProperty;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
function EllipsisCircle(offset) {
  let items2;
  let tmp6;
  let tmp7;
  let tmp8;
  let variant;
  offset = offset.offset;
  let sharedValue1;
  ({ variant, size } = offset);
  let obj = offset(sharedValue1[7]);
  const tmp2 = closure_6(size, offset, obj.useForegroundColor(variant));
  let obj2 = offset(sharedValue1[3]);
  const sharedValue = obj2.useSharedValue(0.4);
  const obj3 = offset(sharedValue1[3]);
  const tmp = sharedValue1;
  sharedValue1 = obj3.useSharedValue(0.75);
  const obj4 = offset(sharedValue1[8]);
  const mountLayoutEffect = obj4.useMountLayoutEffect(() => {
    if (typeof withEllipsisAnimation === "function") {
      const result = tmp4 * (require / 3);
      tmp2(importDefault(result, dependencyMap(View(1, React3, "animate-always"), -1, true)));
      if (typeof tmp3 === "function") {
        const result1 = tmp4 * (require / 3);
        tmp13(importDefault(result1, dependencyMap(View(1, React3, "animate-always"), -1, true)));
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
  let items = [closure_8, sharedValue, sharedValue1];
  let c0;
  let c1;
  [tmp6, tmp7, tmp8] = items;
  const obj5 = offset(sharedValue1[3]);
  class ButtonEllipsisNativeTsx2 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get(), transform: items };
      items = [{ scale: _undefined2.get() }];
      ({ scale: _undefined2.get() });
      return obj;
    }
  }
  const items1 = [tmp7, tmp8];
  ButtonEllipsisNativeTsx2.__closure = items1;
  ButtonEllipsisNativeTsx2.__workletHash = 14645917185224;
  ButtonEllipsisNativeTsx2.__initData = tmp6;
  const animatedStyle = obj5.useAnimatedStyle(ButtonEllipsisNativeTsx2);
  const obj6 = { style: items2 };
  items2 = [tmp2.circle, animatedStyle];
  return closure_4(sharedValue(tmp[3]).View, obj6);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { duration: 500, easing: Easing.inOut(_mod1652.Easing.quad) };
Easing = _mod1652.Easing;
let closure_6 = createStyles.createStyles((arg0, arg1, backgroundColor) => {
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
let items = [{ code: "(function withEllipsisAnimation_ButtonEllipsisNativeTsx1(offset,value){let[ELLIPSIS_APPEAR_DURATION,withDelay,withRepeat,withTiming,ELLIPSIS_APPEAR_TIMING]=this.__closure;const animationTimeMs=ELLIPSIS_APPEAR_DURATION;const animationStaggerTimeMs=animationTimeMs/3;return withDelay(offset*animationStaggerTimeMs,withRepeat(withTiming(value,ELLIPSIS_APPEAR_TIMING,'animate-always'),-1,true));})" }, 500, _mod1652.withDelay, _mod1652.withRepeat, timing_timing.withTiming, obj];
let c0;
let c1;
let c2;
let c3;
let c4;
[tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
function withEllipsisAnimation(arg0, arg1) {
  const result = arg0 * (c0 / 3);
  return _undefined(result, _undefined2(_undefined3(arg1, c4, "animate-always"), -1, true));
}
let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
withEllipsisAnimation.__closure = items1;
withEllipsisAnimation.__workletHash = 1565500961406;
withEllipsisAnimation.__initData = tmp4;
let closure_8 = { code: "(function ButtonEllipsisNativeTsx2(){let[opacity,scale]=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};})" };
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

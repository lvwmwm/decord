// Module ID: 8281
// Function ID: 8282
// Name: Nameplate
// Dependencies: [19, 4825, 21, 4836, 504, 4767, 4566, 4837, 1971, 8282, 5293, 1364, 8271, 5899, 2]
// Exports: default

// Module 8281 (Nameplate)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroRequire;
function NameplateInner(isFocused) {
  let isPressed;
  let items2;
  let items3;
  let nameplate;
  let point;
  let useReducedMotion;
  ({ nameplate, isPressed } = isFocused);
  if (isPressed === undefined) {
    isPressed = false;
  }
  let flag = isFocused.isFocused;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFocused.isMuted;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = isFocused.fullOpacity;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = isFocused.isSquarePreview;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = isFocused.invertPressOpacity;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = isFocused.fadeIn;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = isFocused.animate;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let sharedValue;
  let tmp = flag6;
  const style = isFocused.style;
  let obj = flag6(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = closure_7(flag3, isPressed, flag, flag2, flag5);
  const tmp5 = sharedValue;
  let num = 1;
  const tmp6 = sharedValue(4767)();
  const useSharedValue = flag6(4566).useSharedValue;
  flag6(4566);
  if (flag6) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  const items1 = [sharedValue, flag6];
  const effect = react.useEffect(() => {
    let Easing;
    const tmp = flag6;
    if (tmp) {
      set = sharedValue.set;
      const obj = { duration: 100, easing: Easing.in(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withTiming(1, obj));
    }
  }, items1);
  const tmpResult = tmp(4566);
  class A {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  A.__closure = { opacity: sharedValue };
  A.__workletHash = 15588901070870;
  A.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(A);
  const tmpResult4 = tmp(1971);
  const backgroundGradientColors = tmpResult4.getBackgroundGradientColors(nameplate.palette, tmp6);
  const tmpResult5 = tmp(8282);
  const nameplateAssets = tmpResult5.getNameplateAssets(nameplate);
  let str = nameplateAssets.staticImageUrl;
  let tmp13 = true === flag7;
  const animatedImageUrl = nameplateAssets.animatedImageUrl;
  if (tmp13) {
    tmp13 = !stateFromStores;
  }
  if (!tmp13) {
    tmp13 = "always" === flag7;
  }
  if (tmp13) {
    str = animatedImageUrl;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = { style: items2, children: null };
  items2 = [tmp4.container, style, animatedStyle];
  let tmp16Result = null;
  const View = tmp5(4566).View;
  const tmp14 = closure_6;
  if (null != backgroundGradientColors) {
    let num2 = 0;
    const obj3 = { style: tmp4.gradient, start: point, end: { x: 1, y: 0 }, colors: items3 };
    const tmp16 = closure_5;
    const tmp5Result = tmp5(5293);
    if (flag4) {
      num2 = -2;
    }
    point = { x: num2, y: 0 };
    items3 = [, ];
    ({ left: arr4[0], right: arr4[1] } = backgroundGradientColors);
    tmp16Result = tmp16(tmp5Result, obj3);
  }
  const items4 = [tmp16Result, ];
  const tmpResult6 = tmp(1364);
  if (tmpResult6.isAndroid()) {
    let tmp18;
    if (tmp13) {
      const obj4 = { url: str, style: tmp4.img, autoplay: true };
      tmp18 = closure_5(tmp(8271).APNGPlayer, obj4);
    }
    items4[1] = tmp18;
    obj2.children = items4;
    return tmp14(View, obj2);
  }
  const obj5 = { source: { uri: str }, style: tmp4.img, accessibilityRole: "image" };
  tmp18 = closure_5(tmp5(5899), obj5);
}
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4) => {
  let num;
  let num2;
  const obj = { container: { position: "absolute", overflow: "hidden", top: 0, bottom: 0, left: 0, right: 0 }, gradient: { position: "absolute", width: "100%", height: "100%", opacity: num2 }, img: { position: "absolute", height: "100%", right: 0, aspectRatio: 5.333333333333333, opacity: num } };
  num = 1;
  num2 = 1;
  if (!arg0) {
    let num3;
    if (!arg3) {
      let num4;
      if (arg1) {
        let num5 = 0.6;
        if (arg4) {
          num5 = 0.3;
        }
        num4 = num5;
      } else {
        num4 = 0.4;
        if (arg2) {
          num4 = 0.8;
        }
      }
      num3 = num4;
    } else {
      num3 = 0;
    }
    num2 = num3;
  }
  if (!arg0) {
    let num6;
    if (!arg3) {
      let num7;
      if (arg1) {
        let num8 = 0.5;
        if (arg4) {
          num8 = 0.4;
        }
        num7 = num8;
      } else {
        num7 = 0.6;
        if (arg2) {
          num7 = 0.8;
        }
      }
      num6 = num7;
    } else {
      num6 = 0.1;
    }
    num = num6;
  }
  return obj;
});
const __initData = { code: "function NameplateTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = size.fileFinishedImporting("modules/collectibles/nameplates/native/Nameplate.tsx");

export default function Nameplate(nameplate) {
  nameplate = nameplate.nameplate;
  let tmp = null;
  const merged = Object.assign(nameplate, Object.assign({ nameplate: 0 }));
  if (null != nameplate) {
    const obj = { nameplate, "aria-hidden": true };
    const merged1 = Object.assign(merged);
    tmp = hasOwnProperty(NameplateInner, obj);
  }
  return tmp;
};

// Module ID: 9598
// Function ID: 9599
// Name: Nameplate
// Dependencies: [19, 5141, 21, 5140, 504, 5369, 1652, 5370, 2108, 9599, 5715, 1377, 9588, 5842, 2]
// Exports: default

// Module 9598 (Nameplate)
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5370 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroRequire;
function NameplateInner(isFocused) {
  let isPressed;
  let items4;
  let items5;
  let nameplate;
  let point;
  let tmp10;
  let tmp11;
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
  const tmp6 = sharedValue(5369)();
  const useSharedValue = flag6(1652).useSharedValue;
  flag6(1652);
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
      const obj = { duration: 100, easing: Easing.in(_mod1652.Easing.ease) };
      const withTiming = timing_timing.withTiming;
      timing_timing;
      Easing = _mod1652.Easing;
      const result = set(withTiming(1, obj));
    }
  }, items1);
  const items2 = [closure_8, sharedValue];
  let c0;
  [tmp10, tmp11] = items2;
  const tmpResult = tmp(1652);
  class NameplateTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp11];
  NameplateTsx1.__closure = items3;
  NameplateTsx1.__workletHash = 2118555458479;
  NameplateTsx1.__initData = tmp10;
  const animatedStyle = tmpResult.useAnimatedStyle(NameplateTsx1);
  const tmpResult4 = tmp(2108);
  const backgroundGradientColors = tmpResult4.getBackgroundGradientColors(nameplate.palette, tmp6);
  const tmpResult5 = tmp(9599);
  const nameplateAssets = tmpResult5.getNameplateAssets(nameplate);
  let str = nameplateAssets.staticImageUrl;
  let tmp15 = true === flag7;
  const animatedImageUrl = nameplateAssets.animatedImageUrl;
  if (tmp15) {
    tmp15 = !stateFromStores;
  }
  if (!tmp15) {
    tmp15 = "always" === flag7;
  }
  if (tmp15) {
    str = animatedImageUrl;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = { style: items4, children: null };
  items4 = [tmp4.container, style, animatedStyle];
  let tmp18Result = null;
  const View = tmp5(1652).View;
  const tmp16 = closure_6;
  if (null != backgroundGradientColors) {
    let num2 = 0;
    const obj3 = { style: tmp4.gradient, start: point, end: { x: 1, y: 0 }, colors: items5 };
    const tmp18 = closure_5;
    const tmp5Result = tmp5(5715);
    if (flag4) {
      num2 = -2;
    }
    point = { x: num2, y: 0 };
    items5 = [, ];
    ({ left: arr6[0], right: arr6[1] } = backgroundGradientColors);
    tmp18Result = tmp18(tmp5Result, obj3);
  }
  const items6 = [tmp18Result, ];
  const tmpResult6 = tmp(1377);
  if (tmpResult6.isAndroid()) {
    let tmp20;
    if (tmp15) {
      const obj4 = { url: str, style: tmp4.img, autoplay: true };
      tmp20 = closure_5(tmp(9588).APNGPlayer, obj4);
    }
    items6[1] = tmp20;
    obj2.children = items6;
    return tmp16(View, obj2);
  }
  const obj5 = { source: { uri: str }, style: tmp4.img, accessibilityRole: "image" };
  tmp20 = closure_5(tmp5(5842), obj5);
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
let closure_8 = { code: "(function NameplateTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
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

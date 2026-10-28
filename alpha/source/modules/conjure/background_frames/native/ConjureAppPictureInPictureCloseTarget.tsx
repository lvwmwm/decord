// Module ID: 18737
// Function ID: 18738
// Name: ConjureAppPictureInPictureCloseTarget
// Dependencies: [19, 21, 5004, 18736, 587, 558, 576, 5085, 5242, 5283, 11578, 2]

// Module 18737 (ConjureAppPictureInPictureCloseTarget)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 5242 */;
import spring from "spring" /* 5283 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 18736 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let rect;
let size;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let c5 = 1.3;
const SPRING = { mass: 0.4, damping: 18, stiffness: 300 };
const FADE = { duration: 150 };
let createStyles = createStyles_mod;
let obj = { target: size, fill: rect };
size = { position: "absolute", top: 0, left: 0, width: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE, height: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE, borderRadius: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.STATUS_DANGER };
let closure_8 = createStyles(obj);
const __initData = { code: "function ConjureAppPictureInPictureCloseTargetTsx1(){const{withTiming,shown,FADE,x,CLOSE_TARGET_SIZE,withSpring,y,SPRING,hovered,HOVERED_SCALE}=this.__closure;return{opacity:withTiming(shown.get()?1:0,FADE),transform:[{translateX:x-CLOSE_TARGET_SIZE/2},{translateY:withSpring(y-CLOSE_TARGET_SIZE/2+(shown.get()?0:CLOSE_TARGET_SIZE),SPRING)},{scale:withSpring(hovered.get()?HOVERED_SCALE:1,SPRING)}]};}" };
const __initData2 = { code: "function ConjureAppPictureInPictureCloseTargetTsx2(){const{withTiming,hovered,FADE}=this.__closure;return{opacity:withTiming(hovered.get()?1:0,FADE)};}" };
const __initData3 = { code: "function ConjureAppPictureInPictureCloseTargetTsx3(){const{withTiming,shown,FADE,x,CLOSE_TARGET_SIZE,withSpring,y,SPRING,hovered,HOVERED_SCALE}=this.__closure;return{opacity:withTiming(shown.get()?1:0,FADE),transform:[{translateX:x-CLOSE_TARGET_SIZE/2},{translateY:withSpring(y-CLOSE_TARGET_SIZE/2+(shown.get()?0:CLOSE_TARGET_SIZE),SPRING)},{scale:withSpring(hovered.get()?HOVERED_SCALE:1,SPRING)}]};}" };
const __initData4 = { code: "function ConjureAppPictureInPictureCloseTargetTsx4(){const{withTiming,hovered,FADE}=this.__closure;return{opacity:withTiming(hovered.get()?1:0,FADE)};}" };
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppPictureInPictureCloseTarget(hovered) {
  let center;
  let closure_2;
  let items;
  let shown;
  const tmp = shown;
  let obj = shown(576);
  const cResult = obj.c(13);
  ({ center, shown } = hovered);
  hovered = hovered.hovered;
  const tmp4 = closure_8();
  const x = center.x;
  dependencyMap = x;
  const y = center.y;
  let closure_3 = y;
  let obj2 = shown(5085);
  class T {
    constructor() {
      let items;
      const withTiming = timing.withTiming;
      let num = 0;
      timing;
      const obj = shown;
      if (shown.get()) {
        num = 1;
      }
      const obj2 = { opacity: withTiming(num, FADE), transform: items };
      items = [{ translateX: closure_2 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2 }, , ];
      ({ translateX: closure_2 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2 });
      const withSpring = spring.withSpring;
      spring;
      const diff = closure_3 - tmp(18736).CLOSE_TARGET_SIZE / 2;
      let num2 = 0;
      if (!obj.get()) {
        num2 = tmp(18736).CLOSE_TARGET_SIZE;
      }
      items[1] = { translateY: withSpring(diff + num2, SPRING) };
      ({ translateY: withSpring(diff + num2, SPRING) });
      const withSpring2 = spring.withSpring;
      let num3 = 1;
      spring;
      if (hovered.get()) {
        num3 = c5;
      }
      items[2] = { scale: withSpring2(num3, SPRING) };
      ({ scale: withSpring2(num3, SPRING) });
      return obj2;
    }
  }
  const point = { withTiming: shown(5242).withTiming, shown, FADE, x, CLOSE_TARGET_SIZE: shown(18736).CLOSE_TARGET_SIZE, withSpring: shown(5283).withSpring, y, SPRING, hovered, HOVERED_SCALE };
  T.__closure = point;
  T.__workletHash = 15134050536622;
  T.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(T);
  const obj4 = shown(5085);
  const fn = function h() {
    const withTiming = timing.withTiming;
    let num = 0;
    timing;
    if (hovered.get()) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, FADE) };
    return obj;
  };
  const obj3 = { withTiming: shown(5242).withTiming, hovered, FADE };
  fn.__closure = obj3;
  fn.__workletHash = 1295924731740;
  fn.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  if (cResult[0] === tmp4.target) {
    let tmp7;
    let tmp9;
    if (cResult[1] === animatedStyle) {
      tmp7 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { size: "md", color: hovered(587).colors.ICON_STRONG };
      const DoorExitIcon = tmp(11578).DoorExitIcon;
      const tmp12 = closure_3(DoorExitIcon, obj5);
      let num = 3;
      cResult[3] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === animatedStyle1) {
      let tmp13;
      let tmp14;
      let tmp18;
      if (cResult[5] === tmp4.fill) {
        tmp13 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { size: "md", color: hovered(587).colors.WHITE };
        const DoorExitIcon2 = tmp(11578).DoorExitIcon;
        const tmp17 = closure_3(DoorExitIcon2, obj6);
        cResult[7] = tmp17;
        tmp14 = tmp17;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== tmp13) {
        const obj7 = { style: tmp13, children: tmp14 };
        const tmp21 = closure_3(hovered(5085).View, obj7);
        cResult[8] = tmp13;
        cResult[9] = tmp21;
        tmp18 = tmp21;
      } else {
        tmp18 = cResult[9];
      }
      if (cResult[10] === tmp7) {
        let tmp22;
        if (cResult[11] === tmp18) {
          tmp22 = cResult[12];
        }
        return tmp22;
      }
      const obj8 = { style: tmp7, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", children: items };
      items = [tmp9, tmp18];
      const tmp25 = closure_4(hovered(5085).View, obj8);
      cResult[10] = tmp7;
      cResult[11] = tmp18;
      class T {
        constructor() {
          let items;
          const withTiming = timing.withTiming;
          let num = 0;
          timing;
          const obj = shown;
          if (shown.get()) {
            num = 1;
          }
          const obj2 = { opacity: withTiming(num, FADE), transform: items };
          items = [{ translateX: closure_2 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2 }, , ];
          ({ translateX: closure_2 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2 });
          const withSpring = spring.withSpring;
          spring;
          const diff = closure_3 - tmp(18736).CLOSE_TARGET_SIZE / 2;
          let num2 = 0;
          if (!obj.get()) {
            num2 = tmp(18736).CLOSE_TARGET_SIZE;
          }
          items[1] = { translateY: withSpring(diff + num2, SPRING) };
          ({ translateY: withSpring(diff + num2, SPRING) });
          const withSpring2 = spring.withSpring;
          let num3 = 1;
          spring;
          if (hovered.get()) {
            num3 = c5;
          }
          items[2] = { scale: withSpring2(num3, SPRING) };
          ({ scale: withSpring2(num3, SPRING) });
          return obj2;
        }
      }
      cResult[12] = tmp25;
      tmp22 = tmp25;
    }
    const items1 = [tmp4.fill, animatedStyle1];
    let num2 = 4;
    cResult[4] = animatedStyle1;
    let num3 = 5;
    cResult[5] = tmp4.fill;
    cResult[6] = items1;
    tmp13 = items1;
  }
  const items2 = [tmp4.target, animatedStyle];
  cResult[0] = tmp4.target;
  cResult[1] = animatedStyle;
  cResult[2] = items2;
  tmp7 = items2;
}) : (function ConjureAppPictureInPictureCloseTarget(hovered) {
  let DoorExitIcon2;
  let center;
  let closure_2;
  let items;
  let items1;
  let items2;
  let obj7;
  let shown;
  ({ center, shown } = hovered);
  hovered = hovered.hovered;
  const tmp = closure_8();
  const x = center.x;
  dependencyMap = x;
  const y = center.y;
  let closure_3 = y;
  let obj = shown(5085);
  const fn = function u() {
    let items;
    const withTiming = timing.withTiming;
    let num = 0;
    timing;
    const obj = shown;
    if (shown.get()) {
      num = 1;
    }
    const obj2 = { opacity: withTiming(num, FADE), transform: items };
    items = [{ translateX: closure_2 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2 }, , ];
    ({ translateX: closure_2 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2 });
    const withSpring = spring.withSpring;
    spring;
    const diff = closure_3 - tmp(18736).CLOSE_TARGET_SIZE / 2;
    let num2 = 0;
    if (!obj.get()) {
      num2 = tmp(18736).CLOSE_TARGET_SIZE;
    }
    items[1] = { translateY: withSpring(diff + num2, SPRING) };
    ({ translateY: withSpring(diff + num2, SPRING) });
    const withSpring2 = spring.withSpring;
    let num3 = 1;
    spring;
    if (hovered.get()) {
      num3 = c5;
    }
    items[2] = { scale: withSpring2(num3, SPRING) };
    ({ scale: withSpring2(num3, SPRING) });
    return obj2;
  };
  const point = { withTiming: shown(5242).withTiming, shown, FADE, x, CLOSE_TARGET_SIZE: shown(18736).CLOSE_TARGET_SIZE, withSpring: shown(5283).withSpring, y, SPRING, hovered, HOVERED_SCALE };
  fn.__closure = point;
  fn.__workletHash = 15877568301676;
  fn.__initData = __initData3;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = shown(5085);
  class A {
    constructor() {
      const withTiming = timing.withTiming;
      let num = 0;
      timing;
      if (hovered.get()) {
        num = 1;
      }
      const obj = { opacity: withTiming(num, FADE) };
      return obj;
    }
  }
  let obj2 = { withTiming: shown(5242).withTiming, hovered, FADE };
  A.__closure = obj2;
  A.__workletHash = 2190356029722;
  A.__initData = __initData4;
  const animatedStyle1 = obj3.useAnimatedStyle(A);
  const obj4 = { style: items, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", children: items1 };
  items = [tmp.target, animatedStyle];
  const View = hovered(5085).View;
  const obj5 = { size: "md", color: hovered(587).colors.ICON_STRONG };
  const DoorExitIcon = shown(11578).DoorExitIcon;
  items1 = [closure_3(DoorExitIcon, obj5), ];
  const obj6 = { style: items2, children: closure_3(DoorExitIcon2, obj7) };
  items2 = [tmp.fill, animatedStyle1];
  const View2 = hovered(5085).View;
  obj7 = { size: "md", color: hovered(587).colors.WHITE };
  DoorExitIcon2 = shown(11578).DoorExitIcon;
  items1[1] = closure_3(View2, obj6);
  return closure_4(View, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPictureCloseTarget.tsx");

export default tmp6;

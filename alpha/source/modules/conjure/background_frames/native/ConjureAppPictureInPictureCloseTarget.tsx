// Module ID: 19114
// Function ID: 19115
// Name: ConjureAppPictureInPictureCloseTarget
// Dependencies: [19, 21, 5014, 19113, 575, 5095, 5254, 5637, 11883, 2]
// Exports: default

// Module 19114 (ConjureAppPictureInPictureCloseTarget)
import nativeDefault from "native" /* 575 */;
import timing from "timing" /* 5254 */;
import spring from "spring" /* 5637 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19113 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let rect;
let size;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const SPRING = { mass: 0.4, damping: 18, stiffness: 300 };
const FADE = { duration: 150 };
let createStyles = createStyles_mod;
let obj = { target: size, fill: rect };
size = { position: "absolute", top: 0, left: 0, width: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE, height: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE, borderRadius: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.STATUS_DANGER };
let closure_7 = createStyles(obj);
const __initData = { code: "function ConjureAppPictureInPictureCloseTargetTsx1(){const{withTiming,shown,FADE,x,CLOSE_TARGET_SIZE,withSpring,y,SPRING,hovered,HOVERED_SCALE}=this.__closure;return{opacity:withTiming(shown.get()?1:0,FADE),transform:[{translateX:x-CLOSE_TARGET_SIZE/2},{translateY:withSpring(y-CLOSE_TARGET_SIZE/2+(shown.get()?0:CLOSE_TARGET_SIZE),SPRING)},{scale:withSpring(hovered.get()?HOVERED_SCALE:1,SPRING)}]};}" };
const __initData2 = { code: "function ConjureAppPictureInPictureCloseTargetTsx2(){const{withTiming,hovered,FADE}=this.__closure;return{opacity:withTiming(hovered.get()?1:0,FADE)};}" };
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPictureCloseTarget.tsx");

export default function ConjureAppPictureInPictureCloseTarget(hovered) {
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
  const tmp = closure_7();
  const x = center.x;
  dependencyMap = x;
  const y = center.y;
  let closure_3 = y;
  let obj = shown(5095);
  const fn = function h() {
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
    const diff = closure_3 - tmp(19113).CLOSE_TARGET_SIZE / 2;
    let num2 = 0;
    if (!obj.get()) {
      num2 = tmp(19113).CLOSE_TARGET_SIZE;
    }
    items[1] = { translateY: withSpring(diff + num2, SPRING) };
    ({ translateY: withSpring(diff + num2, SPRING) });
    const withSpring2 = spring.withSpring;
    let num3 = 1;
    spring;
    if (hovered.get()) {
      num3 = 1.3;
    }
    items[2] = { scale: withSpring2(num3, SPRING) };
    ({ scale: withSpring2(num3, SPRING) });
    return obj2;
  };
  const point = { withTiming: shown(5254).withTiming, shown, FADE, x, CLOSE_TARGET_SIZE: shown(19113).CLOSE_TARGET_SIZE, withSpring: shown(5637).withSpring, y, SPRING, hovered, HOVERED_SCALE: 1.3 };
  fn.__closure = point;
  fn.__workletHash = 15134050536622;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = shown(5095);
  const fn2 = function u() {
    const withTiming = timing.withTiming;
    let num = 0;
    timing;
    if (hovered.get()) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, FADE) };
    return obj;
  };
  let obj2 = { withTiming: shown(5254).withTiming, hovered, FADE };
  fn2.__closure = obj2;
  fn2.__workletHash = 1295924731740;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  const obj4 = { style: items, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", children: items1 };
  items = [tmp.target, animatedStyle];
  const View = hovered(5095).View;
  const obj5 = { size: "md", color: hovered(575).colors.ICON_STRONG };
  const DoorExitIcon = shown(11883).DoorExitIcon;
  items1 = [closure_3(DoorExitIcon, obj5), ];
  const obj6 = { style: items2, children: closure_3(DoorExitIcon2, obj7) };
  items2 = [tmp.fill, animatedStyle1];
  const View2 = hovered(5095).View;
  obj7 = { size: "md", color: hovered(575).colors.WHITE };
  DoorExitIcon2 = shown(11883).DoorExitIcon;
  items1[1] = closure_3(View2, obj6);
  return closure_4(View, obj4);
};

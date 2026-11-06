// Module ID: 19422
// Function ID: 19423
// Name: ConjureAppPictureInPictureCloseTarget
// Dependencies: [19, 21, 5170, 19419, 575, 1652, 5400, 5791, 12055, 2]
// Exports: default

// Module 19422 (ConjureAppPictureInPictureCloseTarget)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5400 */;
import spring_spring from "spring/spring" /* 5791 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19419 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let diff, num, num2, num3, obj1, obj6, obj7, obj8, tmp3;

let c3;
let closure_4;
let rect;
let size;
let tmp2;
const DoorExitIcon3 = tmp2(12055);
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = { mass: 0.4, damping: 18, stiffness: 300 };
let closure_6 = { duration: 150 };
let createStyles = createStyles_mod;
let obj = { target: size, fill: rect };
size = { position: "absolute", top: 0, left: 0, width: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE, height: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE, borderRadius: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.STATUS_DANGER };
let closure_7 = createStyles(obj);
let closure_8 = { code: "(function ConjureAppPictureInPictureCloseTargetTsx1(){let[withTiming,shown,FADE,x,CLOSE_TARGET_SIZE,withSpring,y,SPRING,hovered,HOVERED_SCALE]=this.__closure;return{opacity:withTiming(shown.get()?1:0,FADE),transform:[{translateX:x-CLOSE_TARGET_SIZE/2},{translateY:withSpring(y-CLOSE_TARGET_SIZE/2+(shown.get()?0:CLOSE_TARGET_SIZE),SPRING)},{scale:withSpring(hovered.get()?HOVERED_SCALE:1,SPRING)}]};})" };
let closure_9 = { code: "(function ConjureAppPictureInPictureCloseTargetTsx2(){let[withTiming,hovered,FADE]=this.__closure;return{opacity:withTiming(hovered.get()?1:0,FADE)};})" };
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPictureCloseTarget.tsx");

export default function ConjureAppPictureInPictureCloseTarget(shown) {
  let DoorExitIcon2;
  let center;
  let hovered;
  let items4;
  let items5;
  let items6;
  let obj4;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let x;
  let y;
  ({ center, hovered } = shown);
  shown = shown.shown;
  let tmp = closure_7();
  let tmp2 = require;
  ({ x, y } = center);
  let items = [closure_8, , , , , , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = timing_timing.withTiming;
  items[2] = shown;
  items[3] = closure_6;
  items[4] = x;
  const tmp5 = closure_6;
  items[5] = conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE;
  items[6] = spring_spring.withSpring;
  items[7] = y;
  items[8] = closure_5;
  items[9] = hovered;
  items[10] = 1.3;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  class ConjureAppPictureInPictureCloseTargetTsx1 {
    constructor() {
      obj = closure_1;
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 1;
      }
      obj1 = { opacity: tmp(num, closure_2), transform: null };
      obj6 = { translateX: closure_3 - closure_4 / 2 };
      items = [, , ];
      items[0] = obj6;
      tmp3 = closure_5;
      tmp2 = closure_4;
      diff = closure_6 - closure_4 / 2;
      num2 = 0;
      if (!obj.get()) {
        num2 = tmp2;
      }
      obj7 = { translateY: tmp3(diff + num2, closure_7) };
      tmp5 = closure_7;
      items[1] = obj7;
      num3 = 1;
      if (closure_8.get()) {
        num3 = closure_9;
      }
      obj8 = { scale: tmp3(num3, tmp5) };
      items[2] = obj8;
      obj1.transform = items;
      return obj1;
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  ConjureAppPictureInPictureCloseTargetTsx1.__closure = items1;
  ConjureAppPictureInPictureCloseTargetTsx1.__workletHash = 2190508399799;
  ConjureAppPictureInPictureCloseTargetTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(ConjureAppPictureInPictureCloseTargetTsx1);
  const items2 = [closure_9, , , ];
  const useAnimatedStyle2 = _mod1652.useAnimatedStyle;
  _mod1652;
  items2[1] = timing_timing.withTiming;
  items2[2] = hovered;
  items2[3] = tmp5;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp19, tmp20, tmp21, tmp22] = items2;
  class ConjureAppPictureInPictureCloseTargetTsx2 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items3 = [tmp20, tmp21, tmp22];
  ConjureAppPictureInPictureCloseTargetTsx2.__closure = items3;
  ConjureAppPictureInPictureCloseTargetTsx2.__workletHash = 5767236237381;
  ConjureAppPictureInPictureCloseTargetTsx2.__initData = tmp19;
  const animatedStyle2 = useAnimatedStyle2(ConjureAppPictureInPictureCloseTargetTsx2);
  let obj = { style: items4, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", children: items5 };
  items4 = [tmp.target, animatedStyle];
  const View = _modDef1652.View;
  let obj2 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
  const DoorExitIcon = DoorExitIcon3.DoorExitIcon;
  items5 = [_false(DoorExitIcon, obj2), ];
  let obj3 = { style: items6, children: _false(DoorExitIcon2, obj4) };
  items6 = [tmp.fill, animatedStyle2];
  const View2 = _modDef1652.View;
  obj4 = { size: "md", color: nativeDefault.colors.WHITE };
  DoorExitIcon2 = DoorExitIcon3.DoorExitIcon;
  items5[1] = _false(View2, obj3);
  return React3(View, obj);
};

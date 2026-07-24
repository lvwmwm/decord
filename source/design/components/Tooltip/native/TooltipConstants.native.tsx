// Module ID: 8613
// Function ID: 68315
// Name: tooltipEnterExitAnimation
// Dependencies: [4542, 2]
// Exports: tooltipEnterExitAnimation

// Module 8613 (tooltipEnterExitAnimation)
let closure_2 = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
let closure_3 = { code: "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translateY,TOOLTIP_SPRING}=this.__closure;return{transform:[{translateY:withSpring(visible===1?0:translateY,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}" };
const result = require("set").fileFinishedImporting("design/components/Tooltip/native/TooltipConstants.native.tsx");

export const tooltipEnterExitAnimation = function tooltipEnterExitAnimation(position) {
  let num = -8;
  if ("top" === position) {
    num = 8;
  }
  const fn = function o(value, fn) {
    let obj = {};
    obj = {};
    const num = 0;
    obj.translateY = num(outer1_1[0]).withSpring(num, outer1_2, "respect-motion-settings", fn);
    const items = [obj];
    obj.transform = items;
    const obj3 = num(outer1_1[0]);
    obj.opacity = num(outer1_1[0]).withSpring(value, outer1_2, "respect-motion-settings", fn);
    return obj;
  };
  let obj = { withSpring: num(4542).withSpring, translateY: num, TOOLTIP_SPRING: closure_2 };
  fn.__closure = obj;
  fn.__workletHash = 7727487832145;
  fn.__initData = closure_3;
  return fn;
};

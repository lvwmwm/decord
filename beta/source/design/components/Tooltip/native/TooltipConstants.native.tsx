// Module ID: 10457
// Function ID: 10458
// Name: TooltipConstants
// Dependencies: [5187, 2]
// Exports: tooltipEnterExitAnimation

// Module 10457 (TooltipConstants)
import spring from "spring" /* 5187 */;
import size from "module_2" /* 2 */;

const TOOLTIP_SPRING = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
const __initData = { code: "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translateY,TOOLTIP_SPRING}=this.__closure;return{transform:[{translateY:withSpring(visible===1?0:translateY,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}" };
const result = size.fileFinishedImporting("design/components/Tooltip/native/TooltipConstants.native.tsx");

export const tooltipEnterExitAnimation = function tooltipEnterExitAnimation(position) {
  let num = -8;
  if ("top" === position) {
    num = 8;
  }
  const fn = function o(value, fn2) {
    num = 0;
    const obj2 = { transform: null, opacity: null };
    const items = [{ translateY: spring.withSpring(num, closure_2, "respect-motion-settings", fn2) }];
    obj2.transform = items;
    const obj3 = { translateY: spring.withSpring(num, closure_2, "respect-motion-settings", fn2) };
    obj2.opacity = spring.withSpring(value, closure_2, "respect-motion-settings", fn2);
    return obj2;
  };
  fn.__closure = { withSpring: num(5187).withSpring, translateY: num, TOOLTIP_SPRING };
  fn.__workletHash = 7727487832145;
  fn.__initData = __initData;
  return fn;
};

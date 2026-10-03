// Module ID: 9887
// Function ID: 9888
// Name: TooltipConstants
// Dependencies: [5597, 2]
// Exports: tooltipEnterExitAnimation

// Module 9887 (TooltipConstants)
import spring from "spring" /* 5597 */;
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
    let items;
    let tmpResult;
    const withSpring = spring.withSpring;
    spring;
    const obj = { transform: items, opacity: tmpResult.withSpring(value, TOOLTIP_SPRING, "respect-motion-settings", fn2) };
    items = [{ translateY: withSpring(num, TOOLTIP_SPRING, "respect-motion-settings", fn2) }];
    ({ translateY: withSpring(0, TOOLTIP_SPRING, "respect-motion-settings", fn2) });
    tmpResult = spring;
    return obj;
  };
  let obj = { withSpring: num(5597).withSpring, translateY: num, TOOLTIP_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 7727487832145;
  fn.__initData = __initData;
  return fn;
};

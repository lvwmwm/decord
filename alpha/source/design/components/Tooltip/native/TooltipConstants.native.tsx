// Module ID: 9380
// Function ID: 9381
// Name: TooltipConstants
// Dependencies: [5374, 2]
// Exports: tooltipEnterExitAnimation

// Module 9380 (TooltipConstants)
import spring from "spring" /* 5374 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const TOOLTIP_SPRING = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
const __initData = { code: "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translate,TOOLTIP_SPRING,isHorizontal}=this.__closure;const offset=withSpring(visible===1?0:translate,TOOLTIP_SPRING,'respect-motion-settings',cleanUp);return{transform:isHorizontal?[{translateX:offset}]:[{translateY:offset}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}" };
const result = size.fileFinishedImporting("design/components/Tooltip/native/TooltipConstants.native.tsx");

export const tooltipEnterExitAnimation = function tooltipEnterExitAnimation(position) {
  let closure_0;
  let num;
  let tmp = "left" === position;
  _require = tmp2;
  if ("top" === position) {
    num = 8;
  } else {
    num = -8;
  }
  const fn = function o(value, fn2) {
    let items1;
    let tmpResult;
    const withSpring = spring.withSpring;
    spring;
    const withSpringResult = withSpring(0, TOOLTIP_SPRING, "respect-motion-settings", fn2);
    const tmp4 = TOOLTIP_SPRING;
    const tmp6 = closure_0;
    if (tmp6) {
      const items = [{ translateX: withSpringResult }];
      items1 = items;
      const obj2 = { translateX: withSpringResult };
    } else {
      items1 = [{ translateY: withSpringResult }];
      const obj = { translateY: withSpringResult };
    }
    const obj3 = { transform: items1, opacity: tmpResult.withSpring(value, tmp4, "respect-motion-settings", fn2) };
    tmpResult = spring;
    return obj3;
  };
  let obj = { withSpring: require("spring").withSpring, translate: num, TOOLTIP_SPRING, isHorizontal: tmp2 };
  fn.__closure = obj;
  fn.__workletHash = 12524569976242;
  fn.__initData = __initData;
  return fn;
};

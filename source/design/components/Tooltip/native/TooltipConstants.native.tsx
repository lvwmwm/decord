// Module ID: 8560
// Function ID: 68033
// Name: tooltipEnterExitAnimation
// Dependencies: []
// Exports: tooltipEnterExitAnimation

// Module 8560 (tooltipEnterExitAnimation)
let closure_2 = {};
let closure_3 = { code: "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translateY,TOOLTIP_SPRING}=this.__closure;return{transform:[{translateY:withSpring(visible===1?0:translateY,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}" };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("design/components/Tooltip/native/TooltipConstants.native.tsx");

export const tooltipEnterExitAnimation = function tooltipEnterExitAnimation(position) {
  let num = -8;
  if ("top" === position) {
    num = 8;
  }
  const require = num;
  const fn = function o(targetHeight, fn) {
    let obj = {};
    obj = {};
    const num = 0;
    obj.translateY = num(closure_1[0]).withSpring(num, closure_2, "respect-motion-settings", fn);
    const items = [obj];
    obj.transform = items;
    const obj3 = num(closure_1[0]);
    obj.opacity = num(closure_1[0]).withSpring(targetHeight, closure_2, "respect-motion-settings", fn);
    return obj;
  };
  const obj = { withSpring: require(dependencyMap[0]).withSpring, translateY: num, TOOLTIP_SPRING: closure_2 };
  fn.__closure = obj;
  fn.__workletHash = 7727487832145;
  fn.__initData = closure_3;
  return fn;
};

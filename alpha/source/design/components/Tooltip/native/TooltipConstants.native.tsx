// Module ID: 10097
// Function ID: 10098
// Name: TooltipConstants
// Dependencies: [5791, 2]
// Exports: tooltipEnterExitAnimation

// Module 10097 (TooltipConstants)
import spring_spring from "spring/spring" /* 5791 */;
import size from "module_2" /* 2 */;

let obj, obj1, obj4, tmpResult;

let closure_2 = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5 };
let closure_3 = { code: "(function TooltipConstantsNativeTsx1(visible,cleanUp){let[withSpring,translate,TOOLTIP_SPRING,isHorizontal]=this.__closure;const offset=withSpring(visible===1?0:translate,TOOLTIP_SPRING,'respect-motion-settings',cleanUp);return{transform:isHorizontal?[{translateX:offset}]:[{translateY:offset}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};})" };
const result = size.fileFinishedImporting("design/components/Tooltip/native/TooltipConstants.native.tsx");

export function tooltipEnterExitAnimation(position) {
  let num;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  if ("top" === position) {
    num = 8;
  } else {
    num = -8;
  }
  let items = [closure_3, spring_spring.withSpring, num, closure_2, ];
  const tmp = "left" === position || "right" === position;
  items[4] = tmp;
  [tmp2, tmp3, tmp4, tmp5, tmp6] = items;
  class TooltipConstantsNativeTsx1 {
    constructor(arg0, arg1) {
      tmp = closure_0;
      num = 0;
      if (1 !== position) {
        num = closure_1;
      }
      tmp2 = closure_2;
      tmpResult = tmp(num, closure_2, "respect-motion-settings", arg1);
      tmp4 = closure_3;
      if (tmp4) {
        obj1 = { translateX: null };
        obj1.translateX = tmpResult;
        items = [];
        items[0] = obj1;
        items1 = items;
      } else {
        obj = { translateY: null };
        obj.translateY = tmpResult;
        items1 = [];
        items1[0] = obj;
      }
      obj4 = { transform: items1, opacity: tmp(position, tmp2, "respect-motion-settings", arg1) };
      return obj4;
    }
  }
  let items1 = [tmp3, tmp4, tmp5, tmp6];
  TooltipConstantsNativeTsx1.__closure = items1;
  TooltipConstantsNativeTsx1.__workletHash = 7220982044523;
  TooltipConstantsNativeTsx1.__initData = tmp2;
  return TooltipConstantsNativeTsx1;
}

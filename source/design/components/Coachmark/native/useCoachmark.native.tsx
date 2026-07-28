// Module ID: 8406
// Function ID: 67049
// Name: useCoachmark
// Dependencies: [31, 33, 491, 8407, 5486, 8414, 2]
// Exports: useCoachmark

// Module 8406 (useCoachmark)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("v1").fileFinishedImporting("design/components/Coachmark/native/useCoachmark.native.tsx");

export const useCoachmark = function useCoachmark(targetRef, memo) {
  let obj = require(491) /* v1 */;
  const ref = React.useRef(require(491) /* v1 */.v4());
  const tmp2 = (function useAddCoachmark(memo) {
    let closure_0 = memo;
    const context = outer1_2.useContext(outer1_0(outer1_1[4]).LayerContext);
    const items = [context, memo];
    return outer1_2.useCallback((arg0, arg1, arg2) => {
      const obj = {};
      const merged = Object.assign(closure_0);
      obj["targetMeasurements"] = arg1;
      obj["surfaceMeasurements"] = arg2;
      context.add(arg0, outer2_3(outer2_0(outer2_1[5]).AnimatedCoachmark, obj));
    }, items);
  })(memo);
  return require(8407) /* useTooltipHelper */.useTooltipHelper(ref, targetRef, tmp2);
};

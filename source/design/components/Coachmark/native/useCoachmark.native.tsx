// Module ID: 8608
// Function ID: 68284
// Name: useCoachmark
// Dependencies: [31, 33, 491, 8609, 5451, 8616, 2]
// Exports: useCoachmark

// Module 8608 (useCoachmark)
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
  return require(8609) /* useTooltipHelper */.useTooltipHelper(ref, targetRef, tmp2);
};

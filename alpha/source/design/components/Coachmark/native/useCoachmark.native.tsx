// Module ID: 11398
// Function ID: 11399
// Name: useCoachmark
// Dependencies: [19, 21, 1255, 11399, 7404, 11405, 2]
// Exports: useCoachmark

// Module 11398 (useCoachmark)
import AnimatedCoachmark from "AnimatedCoachmark" /* 11405 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Coachmark/native/useCoachmark.native.tsx");

export const useCoachmark = function useCoachmark(targetRef, memo) {
  _require = memo;
  let context;
  let obj = require("v1");
  context = noop.useContext(require("LayerContext").LayerContext);
  const items = [context, memo];
  const callback = noop.useCallback((arg0, targetMeasurements, surfaceMeasurements) => {
    const obj = {};
    const merged = Object.assign(closure_0);
    obj.targetMeasurements = targetMeasurements;
    obj.surfaceMeasurements = surfaceMeasurements;
    context.add(arg0, jsx(AnimatedCoachmark.AnimatedCoachmark, {}));
  }, items);
  const ref = noop.useRef(require("v1").v4());
  return require("useTooltip").useTooltipHelper(ref, targetRef, callback);
};

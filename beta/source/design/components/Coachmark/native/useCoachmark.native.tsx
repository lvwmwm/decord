// Module ID: 10589
// Function ID: 10590
// Name: useCoachmark
// Dependencies: [19, 21, 1255, 10590, 6578, 10596, 2]
// Exports: useCoachmark

// Module 10589 (useCoachmark)
import Fragment from "Fragment" /* 21 */;
import AnimatedCoachmark2 from "AnimatedCoachmark" /* 10596 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Coachmark/native/useCoachmark.native.tsx");

export const useCoachmark = function useCoachmark(targetRef, memo) {
  let context;
  const useRef = react.useRef;
  const obj = require("v1");
  _require = memo;
  context = undefined;
  const ref = useRef(obj.v4());
  context = react.useContext(require("LayerContext").LayerContext);
  const items = [context, memo];
  const callback = react.useCallback((arg0, targetMeasurements, surfaceMeasurements) => {
    const AnimatedCoachmark = AnimatedCoachmark2.AnimatedCoachmark;
    const merged = Object.assign(memo);
    context.add(arg0, <AnimatedCoachmark targetMeasurements={arg1} surfaceMeasurements={arg2} />);
  }, items);
  const obj2 = require("useTooltip");
  return obj2.useTooltipHelper(ref, targetRef, callback);
};

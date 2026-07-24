// Module ID: 8609
// Function ID: 68288
// Name: useTooltipHelper
// Dependencies: [57, 5, 31, 33, 3, 491, 5451, 8610, 1450, 8615, 2]
// Exports: useTooltip

// Module 8609 (useTooltipHelper)
import _slicedToArray from "_slicedToArray";
import v1 from "v1";
import result from "result";
import { jsx } from "jsxProd";
import importDefaultResult from "jsxProd";

const require = arg1;
function useTooltipHelper(ref, ref, arg2) {
  const _require = ref;
  const importDefault = ref;
  const dependencyMap = arg2;
  const tmp = importDefault(1450)();
  let _slicedToArray = tmp;
  let v1 = context.useRef(tmp);
  context = context.useContext(_require(5451).LayerContext);
  let closure_6 = context.useRef(null);
  const items = [context, ref];
  const effect = context.useEffect(() => {
    current = current.current;
    return () => {
      if (null != current) {
        outer1_5.remove(current);
      }
      current.current = null;
    };
  }, items);
  const items1 = [context.surfaceRef, ref, ref, arg2];
  const callback = context.useCallback((arg0) => {
    function _measureHelper() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      return obj(...arguments);
    }
    ref3.current = arg0(table[5]).v4();
    return (function measureHelper(current) {
      return _measureHelper(...arguments);
    })(ref3.current);
  }, items1);
  const items2 = [context, tmp, callback, ref];
  const effect1 = context.useEffect(() => {
    if (ref2.current !== _slicedToArray) {
      if (null != ref.current) {
        context.remove(ref.current);
      }
      ref2.current = _slicedToArray;
    }
    callback(ref2.current !== _slicedToArray);
  }, items2);
  return callback;
}
importDefaultResult = new importDefaultResult("useTooltip.native");
const result = require("result").fileFinishedImporting("design/components/Tooltip/native/useTooltip.native.tsx");

export const useTooltip = function useTooltip(ref, memo) {
  let obj = require(491) /* v1 */;
  return useTooltipHelper(React.useRef(require(491) /* v1 */.v4()), ref, (function useAddTooltip(memo) {
    let closure_0 = memo;
    const context = outer1_5.useContext(outer1_0(outer1_2[6]).LayerContext);
    if (null == context) {
      outer1_7.warn("Tooltip called with no layer context. It will not show without a LayerScope.");
    }
    const items = [context, memo];
    return outer1_5.useCallback((arg0, arg1, arg2) => {
      const obj = {};
      const merged = Object.assign(closure_0);
      obj["targetMeasurements"] = arg1;
      obj["surfaceMeasurements"] = arg2;
      context.add(arg0, outer2_6(outer2_0(outer2_2[7]).AnimatedTooltip, obj));
    }, items);
  })(memo));
};
export { useTooltipHelper };

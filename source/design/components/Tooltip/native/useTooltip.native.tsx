// Module ID: 8556
// Function ID: 67995
// Name: useTooltipHelper
// Dependencies: []
// Exports: useTooltip

// Module 8556 (useTooltipHelper)
function useTooltipHelper(ref, ref, arg2) {
  const importDefault = ref;
  const dependencyMap = arg2;
  const tmp = importDefault(dependencyMap[8])();
  let closure_3 = tmp;
  let closure_4 = React.useRef(tmp);
  const context = React.useContext(ref(dependencyMap[6]).LayerContext);
  const React = context;
  let closure_6 = React.useRef(null);
  const items = [context, ref];
  const effect = React.useEffect(() => {
    const arg0 = arg0.current;
    return () => {
      if (null != current) {
        closure_5.remove(current);
      }
      current.current = null;
    };
  }, items);
  const items1 = [context.surfaceRef, ref, ref, arg2];
  const callback = React.useCallback((arg0) => {
    function _measureHelper() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _measureHelper = obj;
      return obj(...arguments);
    }
    ref2.current = arg0(arg2[5]).v4();
    return function measureHelper(current) {
      return _measureHelper(...arguments);
    }(ref2.current);
  }, items1);
  const items2 = [context, tmp, callback, ref];
  const effect1 = React.useEffect(() => {
    if (ref.current !== tmp) {
      if (null != arg0.current) {
        context.remove(arg0.current);
      }
      ref.current = tmp;
    }
    callback(ref.current !== tmp);
  }, items2);
  return callback;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("useTooltip.native");
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/components/Tooltip/native/useTooltip.native.tsx");

export const useTooltip = function useTooltip(ref, memo) {
  const obj = memo(dependencyMap[5]);
  return useTooltipHelper(React.useRef(memo(dependencyMap[5]).v4()), ref, function useAddTooltip(memo) {
    const context = React.useContext(memo(closure_2[6]).LayerContext);
    if (null == context) {
      closure_7.warn("Tooltip called with no layer context. It will not show without a LayerScope.");
    }
    const items = [context, memo];
    return React.useCallback((arg0, arg1, arg2) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["targetMeasurements"] = arg1;
      obj["surfaceMeasurements"] = arg2;
      context.add(arg0, callback(arg0(closure_2[7]).AnimatedTooltip, obj));
    }, items);
  }(memo));
};
export { useTooltipHelper };

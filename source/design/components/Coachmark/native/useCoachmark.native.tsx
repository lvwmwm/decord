// Module ID: 8555
// Function ID: 67991
// Name: useCoachmark
// Dependencies: []
// Exports: useCoachmark

// Module 8555 (useCoachmark)
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/components/Coachmark/native/useCoachmark.native.tsx");

export const useCoachmark = function useCoachmark(targetRef, memo) {
  const obj = memo(dependencyMap[2]);
  const ref = React.useRef(memo(dependencyMap[2]).v4());
  const tmp2 = function useAddCoachmark(memo) {
    const context = React.useContext(memo(context[4]).LayerContext);
    const items = [context, memo];
    return React.useCallback((arg0, arg1, arg2) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["targetMeasurements"] = arg1;
      obj["surfaceMeasurements"] = arg2;
      context.add(arg0, callback(arg0(context[5]).AnimatedCoachmark, obj));
    }, items);
  }(memo);
  return memo(dependencyMap[3]).useTooltipHelper(ref, targetRef, tmp2);
};

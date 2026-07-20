// Module ID: 8732
// Function ID: 69072
// Name: DynamicBadgeTooltip
// Dependencies: []
// Exports: DynamicBadgeTooltip

// Module 8732 (DynamicBadgeTooltip)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = {};
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/collectibles/native/DynamicBadgeTooltip.tsx");

export const DynamicBadgeTooltip = function DynamicBadgeTooltip(tooltipPosition) {
  let accessibilityLabel;
  let children;
  let str = tooltipPosition.tooltipPosition;
  ({ children, accessibilityLabel } = tooltipPosition);
  if (str === undefined) {
    str = "bottom";
  }
  const arg1 = str;
  let dependencyMap;
  let callback;
  let React;
  let jsx;
  const ref = React.useRef(null);
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = first;
  callback = tmp2[1];
  const intl = arg1(dependencyMap[3]).intl;
  const stringResult = intl.string(arg1(dependencyMap[3]).t.dCou7i);
  React = stringResult;
  callback = React.useCallback(() => {
    callback(false);
  }, []);
  jsx = callback;
  const items = [str, stringResult, first, callback];
  const memo = React.useMemo(() => ({ position: str, label: stringResult, visible: first, onPress: callback }), items);
  let obj = arg1(dependencyMap[4]);
  const tooltip = obj.useTooltip(ref, memo);
  const items1 = [first];
  const effect = React.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => callback(false), 2500);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const callback1 = React.useCallback(() => {
    callback((arg0) => !arg0);
  }, []);
  obj = { ref, onPress: callback1, hitSlop: closure_5, accessibilityRole: "button", accessibilityLabel, accessibilityHint: stringResult, children };
  return jsx(arg1(dependencyMap[5]).PressableOpacity, obj);
};

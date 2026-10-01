// Module ID: 12705
// Function ID: 12706
// Name: DynamicBadgeTooltip
// Dependencies: [32, 19, 21, 1115, 10590, 5435, 2]
// Exports: DynamicBadgeTooltip

// Module 12705 (DynamicBadgeTooltip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import Pressables from "Pressables" /* 5435 */;
import useTooltip from "useTooltip" /* 10590 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const hitSlop = { top: 14, bottom: 14, left: 14, right: 14 };
const result = size.fileFinishedImporting("modules/collectibles/native/DynamicBadgeTooltip.tsx");

export const DynamicBadgeTooltip = function DynamicBadgeTooltip(tooltipPosition) {
  let accessibilityLabel;
  let children;
  let closure_2;
  let first;
  let str = tooltipPosition.tooltipPosition;
  ({ children, accessibilityLabel } = tooltipPosition);
  if (str === undefined) {
    str = "bottom";
  }
  first = undefined;
  closure_2 = undefined;
  const ref = react.useRef(null);
  [first, closure_2] = react.useState(false);
  const intl = intl2.intl;
  const stringResult = intl.string(intl2.t.dCou7i);
  let c3 = stringResult;
  const callback = react.useCallback(() => {
    closure_2(false);
  }, []);
  const items = [str, stringResult, first, callback];
  const memo = react.useMemo(() => ({ position: str, label, visible, onPress }), items);
  const obj = useTooltip;
  const tooltip = obj.useTooltip(ref, memo);
  const items1 = [first];
  const effect = react.useEffect(() => {
    let closure_0;
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(false), 2500);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const callback1 = react.useCallback(() => {
    closure_2((arg0) => !arg0);
  }, []);
  return jsx(Pressables.PressableOpacity, { ref, onPress: callback1, hitSlop, accessibilityRole: "button", accessibilityLabel, accessibilityHint: stringResult, children });
};

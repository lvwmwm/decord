// Module ID: 14987
// Function ID: 14988
// Name: DynamicBadgeTooltip
// Dependencies: [32, 19, 21, 1114, 9934, 6974, 2]
// Exports: DynamicBadgeTooltip

// Module 14987 (DynamicBadgeTooltip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import Pressables from "Pressables" /* 6974 */;
import useTooltip from "useTooltip" /* 9934 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const hitSlop = { top: 14, bottom: 14, left: 14, right: 14 };
const result = size.fileFinishedImporting("modules/collectibles/native/DynamicBadgeTooltip.tsx");

export function DynamicBadgeTooltip(tooltipPosition) {
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
}

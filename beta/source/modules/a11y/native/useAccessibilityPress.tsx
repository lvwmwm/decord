// Module ID: 9040
// Function ID: 9041
// Name: useAccessibilityPress
// Dependencies: [19, 2]
// Exports: default

// Module 9040 (useAccessibilityPress)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default function useAccessibilityPress(set, label) {
  const current = set;
  closure_2 = noop.useRef(set);
  let items = [set];
  const effect = noop.useEffect(() => {
    closure_2.current = current;
  }, items);
  const items1 = [label];
  return noop.useMemo(() => {
    const obj = {
      onAccessibilityAction(nativeEvent) {
        if ("activate" === nativeEvent.nativeEvent.actionName) {
          ref.current();
        }
      },
      accessibilityActions: null
    };
    const items = [{ name: "activate", label }];
    obj.accessibilityActions = items;
    return obj;
  }, items1);
};

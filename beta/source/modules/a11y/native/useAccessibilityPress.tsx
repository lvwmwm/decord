// Module ID: 9040
// Function ID: 9041
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 9040 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default function useAccessibilityPress(set, arg1) {
  let closure_0 = set;
  let closure_1 = arg1;
  let closure_2 = react.useRef(set);
  let items = [set];
  const effect = react.useEffect(() => {
    closure_2.current = current;
  }, items);
  const items1 = [arg1];
  return react.useMemo(() => {
    let items;
    let ref;
    const obj = {
      onAccessibilityAction(nativeEvent) {
        if ("activate" === nativeEvent.nativeEvent.actionName) {
          ref.current();
        }
      },
      accessibilityActions: items
    };
    items = [];
    const obj2 = { name: "activate", label };
    items[0] = obj2;
    return obj;
  }, items1);
};

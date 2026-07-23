// Module ID: 8429
// Function ID: 67166
// Name: useAccessibilityPress
// Dependencies: [31, 2]
// Exports: default

// Module 8429 (useAccessibilityPress)
import result from "result";

const result = require("set").fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default function useAccessibilityPress(arg0, arg1) {
  const React = arg0;
  let closure_1 = arg1;
  let closure_2 = React.useRef(arg0);
  let items = [arg0];
  const effect = React.useEffect(() => {
    closure_2.current = result;
  }, items);
  const items1 = [arg1];
  return React.useMemo(() => {
    let obj = {
      onAccessibilityAction(nativeEvent) {
        if ("activate" === nativeEvent.nativeEvent.actionName) {
          outer1_2.current();
        }
      },
      accessibilityActions: items
    };
    obj = { name: "activate", label: closure_1 };
    items = [obj];
    return obj;
  }, items1);
};

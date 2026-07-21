// Module ID: 8422
// Function ID: 67106
// Name: useAccessibilityPress
// Dependencies: []
// Exports: default

// Module 8422 (useAccessibilityPress)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default function useAccessibilityPress(arg0, arg1) {
  const React = arg0;
  let closure_2 = React.useRef(arg0);
  const items = [arg0];
  const effect = React.useEffect(() => {
    closure_2.current = arg0;
  }, items);
  const items1 = [arg1];
  return React.useMemo(() => {
    let obj = {
      onAccessibilityAction(nativeEvent) {
        if ("activate" === nativeEvent.nativeEvent.actionName) {
          ref.current();
        }
      },
      accessibilityActions: items
    };
    obj = { name: "activate", label: arg1 };
    const items = [obj];
    return obj;
  }, items1);
};

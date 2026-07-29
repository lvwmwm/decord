// Module ID: 1562
// Function ID: 1563
// Name: useBackButton
// Dependencies: [19, 17]
// Exports: default

// Module 1562 (useBackButton)
import noop from "noop";

require("get ActivityIndicator").BackHandler;

export default function useBackButton(arg0) {
  const React = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let noop = outer1_1.addEventListener("hardwareBackPress", () => {
      const current = ref.current;
      let tmp = null != current;
      if (tmp) {
        let flag = current.canGoBack();
        if (flag) {
          current.goBack();
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    });
    return () => ref.remove();
  }, items);
};

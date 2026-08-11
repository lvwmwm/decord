// Module ID: 1605
// Function ID: 1606
// Name: useBackButton
// Dependencies: [19, 17]
// Exports: useBackButton

// Module 1605 (useBackButton)
import noop from "noop";

require("get ActivityIndicator").BackHandler;

export const useBackButton = function useBackButton(ref) {
  const React = ref;
  const items = [ref];
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

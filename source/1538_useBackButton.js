// Module ID: 1538
// Function ID: 17531
// Name: useBackButton
// Dependencies: [31, 27]
// Exports: default

// Module 1538 (useBackButton)
import result from "result";

require("get ActivityIndicator").BackHandler;

export default function useBackButton(arg0) {
  const React = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let result = outer1_1.addEventListener("hardwareBackPress", () => {
      const current = ref.current;
      let tmp = null != current;
      if (tmp) {
        const tmp2 = !current.canGoBack();
        let flag = !tmp2;
        if (!tmp2) {
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

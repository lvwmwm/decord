// Module ID: 1597
// Function ID: 1598
// Name: react
// Dependencies: [19, 17]
// Exports: useBackButton

// Module 1597 (react)
import react_native from "react-native" /* 17 */;
import react_mod from "react" /* 19 */;

let react = react_mod;
const BackHandler = react_native.BackHandler;

export const useBackButton = function useBackButton(ref) {
  react = ref;
  const items = [ref];
  const effect = react.useEffect(() => {
    ref = BackHandler.addEventListener("hardwareBackPress", () => {
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

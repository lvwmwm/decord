// Module ID: 16481
// Function ID: 16482
// Name: useHasFinishedPresenting
// Dependencies: [32, 19, 1497, 2]
// Exports: default

// Module 16481 (useHasFinishedPresenting)
import useNavigation from "useNavigation" /* 1497 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/useHasFinishedPresenting.tsx");

export default function useHasFinishedPresenting() {
  let closure_2;
  let first;
  const obj = useNavigation;
  navigation = obj.useNavigation();
  [first, closure_2] = react.useState(false);
  const items = [navigation, first];
  const effect = react.useEffect(() => {
    let closure_1;
    let timeout;
    const tmp = timeout;
    if (!tmp) {
      const parent = navigation.getParent();
      let addListenerResult;
      if (parent != null) {
        addListenerResult = parent.addListener("transitionEnd", (data) => {
          if (!data.data.closing) {
            closure_1_2(true);
          }
        });
      }
      navigation = addListenerResult;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_2(true), 500);
      return () => {
        if (navigation != null) {
          tmp();
        }
        clearTimeout(closure_1);
      };
    }
  }, items);
  return first;
};

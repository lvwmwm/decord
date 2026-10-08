// Module ID: 1544
// Function ID: 1545
// Dependencies: [19, 1545]
// Exports: useIsFocused

// Module 1544
import _mod1545 from "module_1545" /* 1545 */;
import react from "react" /* 19 */;

let navigation;

let context = react.createContext(undefined);
const context1 = react.createContext(undefined);

export const FocusedRouteKeyContext = context;
export const IsFocusedContext = context1;
export const useIsFocused = function useIsFocused() {
  let context = react.useContext(context1);
  const obj = _mod1545;
  navigation = obj.useNavigation();
  let closure_1 = tmp3;
  const items = [tmp3, navigation];
  if (context == null) {
    context = react.useSyncExternalStore(react.useCallback((arg0) => {
      const tmp = closure_1;
      if (tmp) {
        return () => {

        };
      } else {
        let closure_0 = navigation.addListener("focus", arg0);
        closure_1 = navigation.addListener("blur", arg0);
        return () => {
          closure_0();
          closure_1();
        };
      }
    }, items), navigation.isFocused, navigation.isFocused);
  }
  return context;
};

// Module ID: 1540
// Function ID: 1541
// Dependencies: [19, 1541]
// Exports: useIsFocused

// Module 1540
import _mod1541 from "module_1541" /* 1541 */;
import react from "react" /* 19 */;

let navigation;

let context = react.createContext(undefined);
const context1 = react.createContext(undefined);

export const FocusedRouteKeyContext = context;
export const IsFocusedContext = context1;
export function useIsFocused() {
  let context = react.useContext(context1);
  const obj = _mod1541;
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
}

// Module ID: 1522
// Function ID: 1523
// Name: context1
// Dependencies: [19, 1523]
// Exports: useIsFocused

// Module 1522 (context1)
import importAllResult from "noop";

const require = arg1;
let context = importAllResult.createContext(undefined);
const context1 = importAllResult.createContext(undefined);

export const FocusedRouteKeyContext = context;
export const IsFocusedContext = context1;
export const useIsFocused = function useIsFocused() {
  let context = importAllResult.useContext(context1);
  navigation = navigation(1523).useNavigation();
  const dependencyMap = tmp3;
  const items = [undefined !== context, navigation];
  if (context == null) {
    context = importAllResult.useSyncExternalStore(importAllResult.useCallback((arg0) => {
      if (closure_1) {
        return () => {

        };
      } else {
        navigation = navigation.addListener("focus", arg0);
        closure_1 = navigation.addListener("blur", arg0);
        return () => {
          callback();
          callback2();
        };
      }
    }, items), navigation.isFocused, navigation.isFocused);
  }
  return context;
};

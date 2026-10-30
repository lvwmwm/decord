// Module ID: 1582
// Function ID: 1583
// Name: react
// Dependencies: [19, 1528]
// Exports: useFocusedListenersChildrenAdapter

// Module 1582 (react)
import react2 from "react" /* 1528 */;
import react from "react" /* 19 */;


export function useFocusedListenersChildrenAdapter(navigation) {
  navigation = navigation.navigation;
  const focusedListeners = navigation.focusedListeners;
  const addListener = react.useContext(react2.NavigationBuilderContext).addListener;
  const items = [focusedListeners, navigation];
  const callback = react.useCallback((fn) => {
    if (navigation.isFocused()) {
      for (const item10012 of focusedListeners) {
        let item10012Result = item10012(fn);
        let handled = item10012Result.handled;
        let tmp4 = handled;
        if (tmp4) {
          let obj2 = { handled, result: tmp5 };
          obj.return();
          return obj2;
        }
      }
      const obj3 = { handled: true, result: fn(navigation) };
      return obj3;
    } else {
      return { handled: false, result: null };
    }
  }, items);
  const items1 = [addListener, callback];
  const effect = react.useEffect(() => {
    let tmpResult;
    if (addListener != null) {
      tmpResult = tmp("focus", callback);
    }
    return tmpResult;
  }, items1);
}

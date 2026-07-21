// Module ID: 1519
// Function ID: 17435
// Name: useFocusedListenersChildrenAdapter
// Dependencies: []
// Exports: default

// Module 1519 (useFocusedListenersChildrenAdapter)
let closure_2 = importAll(dependencyMap[0]);

export default function useFocusedListenersChildrenAdapter(navigation) {
  navigation = navigation.navigation;
  const importDefault = navigation;
  const focusedListeners = navigation.focusedListeners;
  const dependencyMap = focusedListeners;
  const addListener = React.useContext(importDefault(dependencyMap[1])).addListener;
  const React = addListener;
  const items = [focusedListeners, navigation];
  const callback = React.useCallback((arg0) => {
    if (navigation.isFocused()) {
      for (const item10011 of closure_1) {
        let tmp3 = arg0;
        let item10011Result = item10011(arg0);
        let handled = item10011Result.handled;
        let tmp5 = handled;
        if (handled) {
          let obj = { handled, result: tmp6 };
          obj.return();
          return obj;
        } else {
          // continue
        }
      }
      obj = { handled: true, result: arg0(navigation) };
      return obj;
    } else {
      return { iconPosition: null, grow: null };
    }
  }, items);
  const items1 = [addListener, callback];
  const effect = React.useEffect(() => {
    let tmp;
    if (null != addListener) {
      tmp = addListener("focus", callback);
    }
    return tmp;
  }, items1);
};

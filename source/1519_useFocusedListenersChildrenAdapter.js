// Module ID: 1519
// Function ID: 17436
// Name: useFocusedListenersChildrenAdapter
// Dependencies: [31, 1478]
// Exports: default

// Module 1519 (useFocusedListenersChildrenAdapter)
import result from "result";


export default function useFocusedListenersChildrenAdapter(navigation) {
  navigation = navigation.navigation;
  const focusedListeners = navigation.focusedListeners;
  addListener = addListener.useContext(navigation(focusedListeners[1])).addListener;
  const items = [focusedListeners, navigation];
  const callback = addListener.useCallback((arg0) => {
    if (navigation.isFocused()) {
      for (const item10011 of focusedListeners) {
        let tmp3 = arg0;
        let item10011Result = item10011(arg0);
        let handled = item10011Result.handled;
        let tmp5 = handled;
        if (handled) {
          let obj = { handled, result: tmp6 };
          obj.return();
          return obj;
        }
      }
      obj = { handled: true, result: arg0(navigation) };
      return obj;
    } else {
      return { handled: false, result: null };
    }
  }, items);
  const items1 = [addListener, callback];
  const effect = addListener.useEffect(() => {
    let tmp;
    if (null != addListener) {
      tmp = addListener("focus", callback);
    }
    return tmp;
  }, items1);
};

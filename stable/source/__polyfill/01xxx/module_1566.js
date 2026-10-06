// Module ID: 1566
// Function ID: 1567
// Dependencies: [32, 19, 1500, 1526]
// Exports: useRegisterNavigator

// Module 1566
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;


export const useRegisterNavigator = function useRegisterNavigator() {
  let context;
  let obj = react;
  const first = _slicedToArray(react.useState(() => {
    const obj = first(context[2]);
    return obj.nanoid();
  }), 1)[0];
  context = react.useContext(first(context[3]).SingleNavigatorContext);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?\n\nThis can also happen if there are multiple copies of '@react-navigation' packages installed.");
    throw error;
  } else {
    const items = [context, first];
    const effect = obj.useEffect(() => {
      const unregister = context.unregister;
      context.register(unregister);
      return () => unregister(first);
    }, items);
    return first;
  }
};

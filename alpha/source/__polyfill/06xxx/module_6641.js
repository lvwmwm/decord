// Module ID: 6641
// Function ID: 6642
// Dependencies: [19, 6614]
// Exports: useGestureHandlerRef

// Module 6641
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 6614 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useGestureHandlerRef = function useGestureHandlerRef() {
  const context = noop.useContext(GestureHandlerRefContext.GestureHandlerRefContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

// Module ID: 6621
// Function ID: 6622
// Dependencies: [19, 6594]
// Exports: useGestureHandlerRef

// Module 6621
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 6594 */;
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

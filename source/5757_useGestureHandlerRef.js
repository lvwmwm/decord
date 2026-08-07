// Module ID: 5757
// Function ID: 5758
// Name: useGestureHandlerRef
// Dependencies: [19, 5730]
// Exports: useGestureHandlerRef

// Module 5757 (useGestureHandlerRef)
import noop from "noop";

const require = arg1;

export const useGestureHandlerRef = function useGestureHandlerRef() {
  const context = React.useContext(require(5730) /* GestureHandlerRefContext */.GestureHandlerRefContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

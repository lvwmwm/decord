// Module ID: 5857
// Function ID: 5858
// Name: useGestureHandlerRef
// Dependencies: [19, 5830]
// Exports: useGestureHandlerRef

// Module 5857 (useGestureHandlerRef)
import noop from "noop";

const require = arg1;

export const useGestureHandlerRef = function useGestureHandlerRef() {
  const context = React.useContext(require(5830) /* GestureHandlerRefContext */.GestureHandlerRefContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

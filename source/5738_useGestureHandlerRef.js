// Module ID: 5738
// Function ID: 5739
// Name: useGestureHandlerRef
// Dependencies: [19, 5711]
// Exports: useGestureHandlerRef

// Module 5738 (useGestureHandlerRef)
import noop from "noop";

const require = arg1;

export const useGestureHandlerRef = function useGestureHandlerRef() {
  const context = React.useContext(require(5711) /* GestureHandlerRefContext */.GestureHandlerRefContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

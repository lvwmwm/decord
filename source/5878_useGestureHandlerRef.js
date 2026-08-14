// Module ID: 5878
// Function ID: 5879
// Name: useGestureHandlerRef
// Dependencies: [19, 5851]
// Exports: useGestureHandlerRef

// Module 5878 (useGestureHandlerRef)
import noop from "noop";

const require = arg1;

export const useGestureHandlerRef = function useGestureHandlerRef() {
  const context = React.useContext(require(5851) /* GestureHandlerRefContext */.GestureHandlerRefContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

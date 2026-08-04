// Module ID: 5726
// Function ID: 5727
// Name: useGestureHandlerRef
// Dependencies: [19, 5672]
// Exports: default

// Module 5726 (useGestureHandlerRef)
import noop from "noop";


export default function useGestureHandlerRef() {
  const context = React.useContext(importDefault(5672));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

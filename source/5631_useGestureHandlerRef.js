// Module ID: 5631
// Function ID: 5632
// Name: useGestureHandlerRef
// Dependencies: [19, 5577]
// Exports: default

// Module 5631 (useGestureHandlerRef)
import noop from "noop";


export default function useGestureHandlerRef() {
  const context = React.useContext(importDefault(5577));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

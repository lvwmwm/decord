// Module ID: 5711
// Function ID: 5712
// Name: useGestureHandlerRef
// Dependencies: [19, 5657]
// Exports: default

// Module 5711 (useGestureHandlerRef)
import noop from "noop";


export default function useGestureHandlerRef() {
  const context = React.useContext(importDefault(5657));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

// Module ID: 5613
// Function ID: 47526
// Name: useGestureHandlerRef
// Dependencies: [31, 5559]
// Exports: default

// Module 5613 (useGestureHandlerRef)
import result from "result";


export default function useGestureHandlerRef() {
  const context = React.useContext(importDefault(5559));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

// Module ID: 5578
// Function ID: 47393
// Name: useGestureHandlerRef
// Dependencies: [31, 5524]
// Exports: default

// Module 5578 (useGestureHandlerRef)
import result from "result";


export default function useGestureHandlerRef() {
  const context = React.useContext(importDefault(5524));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

// Module ID: 5580
// Function ID: 47396
// Name: useGestureHandlerRef
// Dependencies: [31, 5526]
// Exports: default

// Module 5580 (useGestureHandlerRef)
import result from "result";


export default function useGestureHandlerRef() {
  const context = React.useContext(importDefault(5526));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

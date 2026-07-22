// Module ID: 5577
// Function ID: 47373
// Name: useGestureHandlerRef
// Dependencies: []
// Exports: default

// Module 5577 (useGestureHandlerRef)
let closure_2 = importAll(dependencyMap[0]);

export default function useGestureHandlerRef() {
  const context = React.useContext(importDefault(dependencyMap[1]));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

// Module ID: 6942
// Function ID: 6943
// Name: react
// Dependencies: [19, 6915]
// Exports: useGestureHandlerRef

// Module 6942 (react)
import react2 from "react" /* 6915 */;
import react from "react" /* 19 */;


export const useGestureHandlerRef = function useGestureHandlerRef() {
  const context = react.useContext(react2.GestureHandlerRefContext);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};

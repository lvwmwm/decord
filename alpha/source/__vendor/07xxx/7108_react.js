// Module ID: 7108
// Function ID: 7109
// Name: react
// Dependencies: [19, 7081]
// Exports: useGestureHandlerRef

// Module 7108 (react)
import react2 from "react" /* 7081 */;
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

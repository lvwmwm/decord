// Module ID: 1586
// Function ID: 1587
// Name: react
// Dependencies: [19, 1561]
// Exports: usePreventRemoveContext

// Module 1586 (react)
import react2 from "react" /* 1561 */;
import react from "react" /* 19 */;


export const usePreventRemoveContext = function usePreventRemoveContext() {
  const context = react.useContext(react2.PreventRemoveContext);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};

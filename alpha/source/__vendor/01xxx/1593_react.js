// Module ID: 1593
// Function ID: 1594
// Name: react
// Dependencies: [19, 1568]
// Exports: usePreventRemoveContext

// Module 1593 (react)
import react2 from "react" /* 1568 */;
import react from "react" /* 19 */;


export function usePreventRemoveContext() {
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
}

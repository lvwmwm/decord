// Module ID: 1595
// Function ID: 1596
// Name: react
// Dependencies: [19, 1570]
// Exports: usePreventRemoveContext

// Module 1595 (react)
import react2 from "react" /* 1570 */;
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

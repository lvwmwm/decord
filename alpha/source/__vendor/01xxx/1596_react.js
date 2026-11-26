// Module ID: 1596
// Function ID: 1597
// Name: react
// Dependencies: [19, 1571]
// Exports: usePreventRemoveContext

// Module 1596 (react)
import react2 from "react" /* 1571 */;
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

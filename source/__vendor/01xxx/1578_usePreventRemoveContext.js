// Module ID: 1578
// Function ID: 1579
// Name: usePreventRemoveContext
// Dependencies: [19, 1553]
// Exports: usePreventRemoveContext

// Module 1578 (usePreventRemoveContext)
import PreventRemoveContext from "PreventRemoveContext" /* 1553 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const usePreventRemoveContext = function usePreventRemoveContext() {
  const context = React.useContext(PreventRemoveContext.PreventRemoveContext);
  if (null == context) {
    const _Error = Error;
    error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};

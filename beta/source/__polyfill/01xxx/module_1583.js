// Module ID: 1583
// Function ID: 1584
// Dependencies: [19, 1558]
// Exports: usePreventRemoveContext

// Module 1583
import PreventRemoveContext from "PreventRemoveContext" /* 1558 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const usePreventRemoveContext = function usePreventRemoveContext() {
  const context = noop.useContext(PreventRemoveContext.PreventRemoveContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};

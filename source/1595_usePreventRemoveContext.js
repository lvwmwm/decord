// Module ID: 1595
// Function ID: 1596
// Name: usePreventRemoveContext
// Dependencies: [19, 1570]
// Exports: usePreventRemoveContext

// Module 1595 (usePreventRemoveContext)
import noop from "noop";

const require = arg1;

export const usePreventRemoveContext = function usePreventRemoveContext() {
  const context = React.useContext(require(1570) /* PreventRemoveContext */.PreventRemoveContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};

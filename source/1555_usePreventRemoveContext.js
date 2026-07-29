// Module ID: 1555
// Function ID: 1556
// Name: usePreventRemoveContext
// Dependencies: [19, 1527]
// Exports: default

// Module 1555 (usePreventRemoveContext)
import noop from "noop";


export default function usePreventRemoveContext() {
  const context = React.useContext(importDefault(1527));
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};

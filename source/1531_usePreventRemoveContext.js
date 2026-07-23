// Module ID: 1531
// Function ID: 17508
// Name: usePreventRemoveContext
// Dependencies: [31, 1503]
// Exports: default

// Module 1531 (usePreventRemoveContext)
import result from "result";


export default function usePreventRemoveContext() {
  const context = React.useContext(importDefault(1503));
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};

// Module ID: 1531
// Function ID: 17502
// Name: usePreventRemoveContext
// Dependencies: []
// Exports: default

// Module 1531 (usePreventRemoveContext)
let closure_2 = importAll(dependencyMap[0]);

export default function usePreventRemoveContext() {
  const context = React.useContext(importDefault(dependencyMap[1]));
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};

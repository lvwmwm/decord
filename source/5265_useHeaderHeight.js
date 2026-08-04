// Module ID: 5265
// Function ID: 5266
// Name: useHeaderHeight
// Dependencies: [19, 5264]
// Exports: default

// Module 5265 (useHeaderHeight)
import noop from "noop";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5264));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

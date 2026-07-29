// Module ID: 5170
// Function ID: 5171
// Name: useHeaderHeight
// Dependencies: [19, 5169]
// Exports: default

// Module 5170 (useHeaderHeight)
import noop from "noop";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5169));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

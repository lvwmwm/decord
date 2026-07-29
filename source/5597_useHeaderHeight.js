// Module ID: 5597
// Function ID: 5598
// Name: useHeaderHeight
// Dependencies: [19, 5596]
// Exports: default

// Module 5597 (useHeaderHeight)
import noop from "noop";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5596));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

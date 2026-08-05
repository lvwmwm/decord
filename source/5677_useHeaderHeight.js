// Module ID: 5677
// Function ID: 5678
// Name: useHeaderHeight
// Dependencies: [19, 5676]
// Exports: default

// Module 5677 (useHeaderHeight)
import noop from "noop";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5676));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

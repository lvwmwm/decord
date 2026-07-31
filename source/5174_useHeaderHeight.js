// Module ID: 5174
// Function ID: 5175
// Name: useHeaderHeight
// Dependencies: [19, 5173]
// Exports: default

// Module 5174 (useHeaderHeight)
import noop from "noop";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5173));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

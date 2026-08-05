// Module ID: 5250
// Function ID: 5251
// Name: useHeaderHeight
// Dependencies: [19, 5249]
// Exports: default

// Module 5250 (useHeaderHeight)
import noop from "noop";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5249));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

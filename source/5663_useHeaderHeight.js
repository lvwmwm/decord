// Module ID: 5663
// Function ID: 5664
// Name: useHeaderHeight
// Dependencies: [19, 5662]
// Exports: default

// Module 5663 (useHeaderHeight)
import noop from "noop";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5662));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

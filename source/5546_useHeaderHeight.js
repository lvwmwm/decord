// Module ID: 5546
// Function ID: 47127
// Name: useHeaderHeight
// Dependencies: [31, 5545]
// Exports: default

// Module 5546 (useHeaderHeight)
import result from "result";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5545));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

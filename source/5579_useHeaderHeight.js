// Module ID: 5579
// Function ID: 47257
// Name: useHeaderHeight
// Dependencies: [31, 5578]
// Exports: default

// Module 5579 (useHeaderHeight)
import result from "result";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5578));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

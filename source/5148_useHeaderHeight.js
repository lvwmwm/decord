// Module ID: 5148
// Function ID: 44514
// Name: useHeaderHeight
// Dependencies: [31, 5147]
// Exports: default

// Module 5148 (useHeaderHeight)
import result from "result";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5147));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

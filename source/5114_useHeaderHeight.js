// Module ID: 5114
// Function ID: 44385
// Name: useHeaderHeight
// Dependencies: [31, 5113]
// Exports: default

// Module 5114 (useHeaderHeight)
import result from "result";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5113));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

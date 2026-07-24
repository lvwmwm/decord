// Module ID: 5544
// Function ID: 47124
// Name: useHeaderHeight
// Dependencies: [31, 5543]
// Exports: default

// Module 5544 (useHeaderHeight)
import result from "result";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5543));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

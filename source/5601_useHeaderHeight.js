// Module ID: 5601
// Function ID: 5602
// Name: useHeaderHeight
// Dependencies: [19, 5600]
// Exports: default

// Module 5601 (useHeaderHeight)
import noop from "noop";


export default function useHeaderHeight() {
  const context = React.useContext(importDefault(5600));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

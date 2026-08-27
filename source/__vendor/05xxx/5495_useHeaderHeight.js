// Module ID: 5495
// Function ID: 5496
// Name: useHeaderHeight
// Dependencies: [19, 5494]
// Exports: useHeaderHeight

// Module 5495 (useHeaderHeight)
import HeaderHeightContext from "HeaderHeightContext" /* 5494 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useHeaderHeight = function useHeaderHeight() {
  const context = React.useContext(HeaderHeightContext.HeaderHeightContext);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

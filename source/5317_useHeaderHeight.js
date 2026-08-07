// Module ID: 5317
// Function ID: 5318
// Name: useHeaderHeight
// Dependencies: [19, 5316]
// Exports: useHeaderHeight

// Module 5317 (useHeaderHeight)
import noop from "noop";

const require = arg1;

export const useHeaderHeight = function useHeaderHeight() {
  const context = React.useContext(require(5316) /* HeaderHeightContext */.HeaderHeightContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

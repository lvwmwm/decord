// Module ID: 5301
// Function ID: 5302
// Name: useHeaderHeight
// Dependencies: [19, 5300]
// Exports: useHeaderHeight

// Module 5301 (useHeaderHeight)
import noop from "noop";

const require = arg1;

export const useHeaderHeight = function useHeaderHeight() {
  const context = React.useContext(require(5300) /* HeaderHeightContext */.HeaderHeightContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

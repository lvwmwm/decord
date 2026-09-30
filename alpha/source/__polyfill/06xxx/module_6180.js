// Module ID: 6180
// Function ID: 6181
// Dependencies: [19, 6179]
// Exports: useHeaderHeight

// Module 6180
import HeaderHeightContext from "HeaderHeightContext" /* 6179 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useHeaderHeight = function useHeaderHeight() {
  const context = noop.useContext(HeaderHeightContext.HeaderHeightContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

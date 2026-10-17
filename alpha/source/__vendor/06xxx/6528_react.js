// Module ID: 6528
// Function ID: 6529
// Name: react
// Dependencies: [19, 6527]
// Exports: useHeaderHeight

// Module 6528 (react)
import react2 from "react" /* 6527 */;
import react from "react" /* 19 */;


export const useHeaderHeight = function useHeaderHeight() {
  const context = react.useContext(react2.HeaderHeightContext);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};

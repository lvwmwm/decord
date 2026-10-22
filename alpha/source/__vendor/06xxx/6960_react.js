// Module ID: 6960
// Function ID: 6961
// Name: react
// Dependencies: [19, 6959]
// Exports: useHeaderHeight

// Module 6960 (react)
import react2 from "react" /* 6959 */;
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

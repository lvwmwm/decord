// Module ID: 5983
// Function ID: 5984
// Name: react
// Dependencies: [19, 5982]
// Exports: useHeaderHeight

// Module 5983 (react)
import react2 from "react" /* 5982 */;
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

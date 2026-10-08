// Module ID: 6253
// Function ID: 6254
// Name: react
// Dependencies: [19, 6252]
// Exports: useHeaderHeight

// Module 6253 (react)
import react2 from "react" /* 6252 */;
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

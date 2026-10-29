// Module ID: 7034
// Function ID: 7035
// Name: react
// Dependencies: [19, 7033]
// Exports: useHeaderHeight

// Module 7034 (react)
import react2 from "react" /* 7033 */;
import react from "react" /* 19 */;


export function useHeaderHeight() {
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
}

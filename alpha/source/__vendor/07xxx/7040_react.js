// Module ID: 7040
// Function ID: 7041
// Name: react
// Dependencies: [19, 7039]
// Exports: useHeaderHeight

// Module 7040 (react)
import react2 from "react" /* 7039 */;
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

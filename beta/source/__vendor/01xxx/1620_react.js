// Module ID: 1620
// Function ID: 1621
// Name: react
// Dependencies: [19, 1611]
// Exports: useLocale

// Module 1620 (react)
import react2 from "react" /* 1611 */;
import react from "react" /* 19 */;


export function useLocale() {
  const context = react.useContext(react2.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    return { direction: context };
  }
}

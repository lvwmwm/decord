// Module ID: 1621
// Function ID: 1622
// Name: react
// Dependencies: [19, 1612]
// Exports: useLocale

// Module 1621 (react)
import react2 from "react" /* 1612 */;
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

// Module ID: 1605
// Function ID: 1606
// Name: react
// Dependencies: [19, 1596]
// Exports: useLocale

// Module 1605 (react)
import react2 from "react" /* 1596 */;
import react from "react" /* 19 */;


export const useLocale = function useLocale() {
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
};

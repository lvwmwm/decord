// Module ID: 1625
// Function ID: 1626
// Name: react
// Dependencies: [19, 1616]
// Exports: useLocale

// Module 1625 (react)
import react2 from "react" /* 1616 */;
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

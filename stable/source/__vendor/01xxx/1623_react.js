// Module ID: 1623
// Function ID: 1624
// Name: react
// Dependencies: [19, 1614]
// Exports: useLocale

// Module 1623 (react)
import react2 from "react" /* 1614 */;
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

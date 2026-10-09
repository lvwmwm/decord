// Module ID: 1575
// Function ID: 1576
// Name: react
// Dependencies: [19, 1540]
// Exports: useTheme

// Module 1575 (react)
import react2 from "react" /* 1540 */;
import react from "react" /* 19 */;


export const useTheme = function useTheme() {
  const context = react.useContext(react2.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
};

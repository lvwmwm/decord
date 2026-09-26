// Module ID: 1557
// Function ID: 1558
// Dependencies: [19, 1522]
// Exports: useTheme

// Module 1557
import _mod1522 from "module_1522" /* 1522 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useTheme = function useTheme() {
  const context = noop.useContext(_mod1522.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
};

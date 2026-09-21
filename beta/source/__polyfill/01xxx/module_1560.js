// Module ID: 1560
// Function ID: 1561
// Dependencies: [19, 1525]
// Exports: useTheme

// Module 1560
import _mod1525 from "module_1525" /* 1525 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useTheme = function useTheme() {
  const context = noop.useContext(_mod1525.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
};

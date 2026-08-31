// Module ID: 1571
// Function ID: 1572
// Name: useTheme
// Dependencies: [19, 1536]
// Exports: useTheme

// Module 1571 (useTheme)
import context2 from "context" /* 1536 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useTheme = function useTheme() {
  const context = React.useContext(context2.ThemeContext);
  if (null == context) {
    const _Error = Error;
    error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
};

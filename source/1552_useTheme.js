// Module ID: 1552
// Function ID: 1553
// Name: useTheme
// Dependencies: [19, 1517]
// Exports: useTheme

// Module 1552 (useTheme)
import noop from "noop";

const require = arg1;

export const useTheme = function useTheme() {
  const context = React.useContext(require(1517) /* context */.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
};

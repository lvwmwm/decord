// Module ID: 1619
// Function ID: 1620
// Name: useLocale
// Dependencies: [19, 1610]
// Exports: useLocale

// Module 1619 (useLocale)
import noop from "noop";

const require = arg1;

export const useLocale = function useLocale() {
  const context = React.useContext(require(1610) /* context */.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: null };
    obj[0] = context;
    return obj;
  }
};

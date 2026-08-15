// Module ID: 1620
// Function ID: 1621
// Name: useLocale
// Dependencies: [19, 1611]
// Exports: useLocale

// Module 1620 (useLocale)
import noop from "noop";

const require = arg1;

export const useLocale = function useLocale() {
  const context = React.useContext(require(1611) /* context */.LocaleDirContext);
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

// Module ID: 1600
// Function ID: 1601
// Name: useLocale
// Dependencies: [19, 1591]
// Exports: useLocale

// Module 1600 (useLocale)
import noop from "noop";

const require = arg1;

export const useLocale = function useLocale() {
  const context = React.useContext(require(1591) /* context */.LocaleDirContext);
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

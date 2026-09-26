// Module ID: 1605
// Function ID: 1606
// Dependencies: [19, 1596]
// Exports: useLocale

// Module 1605
import _mod1596 from "module_1596" /* 1596 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useLocale = function useLocale() {
  const context = noop.useContext(_mod1596.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: context };
    return obj;
  }
};

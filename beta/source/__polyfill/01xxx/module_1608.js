// Module ID: 1608
// Function ID: 1609
// Dependencies: [19, 1599]
// Exports: useLocale

// Module 1608
import _mod1599 from "module_1599" /* 1599 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useLocale = function useLocale() {
  const context = noop.useContext(_mod1599.LocaleDirContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: context };
    return obj;
  }
};

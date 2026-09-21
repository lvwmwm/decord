// Module ID: 7227
// Function ID: 7228
// Name: useCustomKeyboardHeight
// Dependencies: [1485, 1486, 558, 568, 2]
// Exports: getCustomKeyboardHeight

// Module 7227 (useCustomKeyboardHeight)
import c from "c" /* 568 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1485 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1486 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function t(arg0) {
      return arg0.byAppEntry[appEntryKey].customKeyboardHeight;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  return KeyboardUIStoreDefault(tmp4);
}) : (() => {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
});
export const getCustomKeyboardHeight = function getCustomKeyboardHeight(appEntryKey) {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};

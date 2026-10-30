// Module ID: 1640
// Function ID: 1641
// Name: KeyboardChatScrollView
// Dependencies: [1641, 1649, 1844, 1845, 1846, 1843, 1849, 1855, 1856, 1885]

// Module 1640 (KeyboardChatScrollView)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1641 */;
import KeyboardProvider from "KeyboardProvider" /* 1649 */;
import KeyboardController from "KeyboardController" /* 1843 */;
import _mod1844 from "module_1844" /* 1844 */;
import _mod1845 from "module_1845" /* 1845 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1846 */;
import _mod1849 from "module_1849" /* 1849 */;
import KeyboardState from "KeyboardState" /* 1855 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1856 */;
import OverKeyboardView from "OverKeyboardView" /* 1885 */;

for (const key10013 in KeyboardControllerNative) {
  exports[key10013] = KeyboardControllerNative[key10013];
  continue;
}
for (const key10017 in KeyboardProvider) {
  exports[key10017] = KeyboardProvider[key10017];
  continue;
}
for (const key10021 in _mod1844) {
  exports[key10021] = _mod1844[key10021];
  continue;
}
for (const key10025 in _mod1845) {
  exports[key10025] = _mod1845[key10025];
  continue;
}
for (const key10029 in AndroidSoftInputModes) {
  exports[key10029] = AndroidSoftInputModes[key10029];
  continue;
}
for (const key10033 in KeyboardController) {
  exports[key10033] = KeyboardController[key10033];
  continue;
}
for (const key10037 in _mod1849) {
  exports[key10037] = _mod1849[key10037];
  continue;
}
for (const key10041 in KeyboardState) {
  exports[key10041] = KeyboardState[key10041];
  continue;
}
const KeyboardAvoidingView_export = KeyboardAvoidingView.KeyboardAvoidingView;
const OverKeyboardView_export = OverKeyboardView.OverKeyboardView;

export const KeyboardChatScrollView = KeyboardAvoidingView.KeyboardChatScrollView;
export { KeyboardAvoidingView_export as KeyboardAvoidingView };
export const KeyboardStickyView = KeyboardAvoidingView.KeyboardStickyView;
export const KeyboardAwareScrollView = KeyboardAvoidingView.KeyboardAwareScrollView;
export const KeyboardToolbar = KeyboardAvoidingView.KeyboardToolbar;
export const DefaultKeyboardToolbarTheme = KeyboardAvoidingView.DefaultKeyboardToolbarTheme;
export { OverKeyboardView_export as OverKeyboardView };
export const KeyboardExtender = OverKeyboardView.KeyboardExtender;

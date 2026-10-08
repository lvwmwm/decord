// Module ID: 1644
// Function ID: 1645
// Name: KeyboardChatScrollView
// Dependencies: [1645, 1653, 1848, 1849, 1850, 1847, 1853, 1859, 1860, 1889]

// Module 1644 (KeyboardChatScrollView)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1645 */;
import KeyboardProvider from "KeyboardProvider" /* 1653 */;
import KeyboardController from "KeyboardController" /* 1847 */;
import _mod1848 from "module_1848" /* 1848 */;
import _mod1849 from "module_1849" /* 1849 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1850 */;
import _mod1853 from "module_1853" /* 1853 */;
import KeyboardState from "KeyboardState" /* 1859 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1860 */;
import OverKeyboardView from "OverKeyboardView" /* 1889 */;

for (const key10013 in KeyboardControllerNative) {
  exports[key10013] = KeyboardControllerNative[key10013];
  continue;
}
for (const key10017 in KeyboardProvider) {
  exports[key10017] = KeyboardProvider[key10017];
  continue;
}
for (const key10021 in _mod1848) {
  exports[key10021] = _mod1848[key10021];
  continue;
}
for (const key10025 in _mod1849) {
  exports[key10025] = _mod1849[key10025];
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
for (const key10037 in _mod1853) {
  exports[key10037] = _mod1853[key10037];
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

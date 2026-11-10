// Module ID: 1639
// Function ID: 1640
// Name: KeyboardChatScrollView
// Dependencies: [1640, 1648, 1843, 1844, 1845, 1842, 1848, 1854, 1855, 1884]

// Module 1639 (KeyboardChatScrollView)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1640 */;
import KeyboardProvider from "KeyboardProvider" /* 1648 */;
import KeyboardController from "KeyboardController" /* 1842 */;
import _mod1843 from "module_1843" /* 1843 */;
import _mod1844 from "module_1844" /* 1844 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1845 */;
import _mod1848 from "module_1848" /* 1848 */;
import KeyboardState from "KeyboardState" /* 1854 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1855 */;
import OverKeyboardView from "OverKeyboardView" /* 1884 */;

for (const key10013 in KeyboardControllerNative) {
  exports[key10013] = KeyboardControllerNative[key10013];
  continue;
}
for (const key10017 in KeyboardProvider) {
  exports[key10017] = KeyboardProvider[key10017];
  continue;
}
for (const key10021 in _mod1843) {
  exports[key10021] = _mod1843[key10021];
  continue;
}
for (const key10025 in _mod1844) {
  exports[key10025] = _mod1844[key10025];
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
for (const key10037 in _mod1848) {
  exports[key10037] = _mod1848[key10037];
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

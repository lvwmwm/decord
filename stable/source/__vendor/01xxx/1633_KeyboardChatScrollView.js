// Module ID: 1633
// Function ID: 1634
// Name: KeyboardChatScrollView
// Dependencies: [1634, 1642, 1837, 1838, 1839, 1836, 1842, 1848, 1849, 1878]

// Module 1633 (KeyboardChatScrollView)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1634 */;
import KeyboardProvider from "KeyboardProvider" /* 1642 */;
import KeyboardController from "KeyboardController" /* 1836 */;
import _mod1837 from "module_1837" /* 1837 */;
import _mod1838 from "module_1838" /* 1838 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1839 */;
import _mod1842 from "module_1842" /* 1842 */;
import KeyboardState from "KeyboardState" /* 1848 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1849 */;
import OverKeyboardView from "OverKeyboardView" /* 1878 */;

for (const key10013 in KeyboardControllerNative) {
  exports[key10013] = KeyboardControllerNative[key10013];
  continue;
}
for (const key10017 in KeyboardProvider) {
  exports[key10017] = KeyboardProvider[key10017];
  continue;
}
for (const key10021 in _mod1837) {
  exports[key10021] = _mod1837[key10021];
  continue;
}
for (const key10025 in _mod1838) {
  exports[key10025] = _mod1838[key10025];
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
for (const key10037 in _mod1842) {
  exports[key10037] = _mod1842[key10037];
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

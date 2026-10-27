// Module ID: 1647
// Function ID: 1648
// Name: KeyboardChatScrollView
// Dependencies: [1648, 1656, 1851, 1852, 1853, 1850, 1856, 1862, 1863, 1892]

// Module 1647 (KeyboardChatScrollView)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1648 */;
import KeyboardProvider from "KeyboardProvider" /* 1656 */;
import KeyboardController from "KeyboardController" /* 1850 */;
import _mod1851 from "module_1851" /* 1851 */;
import _mod1852 from "module_1852" /* 1852 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1853 */;
import _mod1856 from "module_1856" /* 1856 */;
import KeyboardState from "KeyboardState" /* 1862 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1863 */;
import OverKeyboardView from "OverKeyboardView" /* 1892 */;

for (const key10013 in KeyboardControllerNative) {
  exports[key10013] = KeyboardControllerNative[key10013];
  continue;
}
for (const key10017 in KeyboardProvider) {
  exports[key10017] = KeyboardProvider[key10017];
  continue;
}
for (const key10021 in _mod1851) {
  exports[key10021] = _mod1851[key10021];
  continue;
}
for (const key10025 in _mod1852) {
  exports[key10025] = _mod1852[key10025];
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
for (const key10037 in _mod1856) {
  exports[key10037] = _mod1856[key10037];
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

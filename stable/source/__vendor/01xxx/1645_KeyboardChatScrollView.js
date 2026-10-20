// Module ID: 1645
// Function ID: 1646
// Name: KeyboardChatScrollView
// Dependencies: [1646, 1654, 1849, 1850, 1851, 1848, 1854, 1860, 1861, 1890]

// Module 1645 (KeyboardChatScrollView)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1646 */;
import KeyboardProvider from "KeyboardProvider" /* 1654 */;
import KeyboardController from "KeyboardController" /* 1848 */;
import _mod1849 from "module_1849" /* 1849 */;
import _mod1850 from "module_1850" /* 1850 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1851 */;
import _mod1854 from "module_1854" /* 1854 */;
import KeyboardState from "KeyboardState" /* 1860 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1861 */;
import OverKeyboardView from "OverKeyboardView" /* 1890 */;

for (const key10013 in KeyboardControllerNative) {
  exports[key10013] = KeyboardControllerNative[key10013];
  continue;
}
for (const key10017 in KeyboardProvider) {
  exports[key10017] = KeyboardProvider[key10017];
  continue;
}
for (const key10021 in _mod1849) {
  exports[key10021] = _mod1849[key10021];
  continue;
}
for (const key10025 in _mod1850) {
  exports[key10025] = _mod1850[key10025];
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
for (const key10037 in _mod1854) {
  exports[key10037] = _mod1854[key10037];
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

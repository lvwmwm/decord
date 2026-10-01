// Module ID: 1627
// Function ID: 1628
// Name: KeyboardChatScrollView
// Dependencies: [1628, 1636, 1831, 1832, 1833, 1830, 1836, 1842, 1843, 1872]

// Module 1627 (KeyboardChatScrollView)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1628 */;
import KeyboardProvider from "KeyboardProvider" /* 1636 */;
import KeyboardController from "KeyboardController" /* 1830 */;
import _mod1831 from "module_1831" /* 1831 */;
import _mod1832 from "module_1832" /* 1832 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1833 */;
import _mod1836 from "module_1836" /* 1836 */;
import KeyboardState from "KeyboardState" /* 1842 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1843 */;
import OverKeyboardView from "OverKeyboardView" /* 1872 */;

for (const key10013 in KeyboardControllerNative) {
  exports[key10013] = KeyboardControllerNative[key10013];
  continue;
}
for (const key10017 in KeyboardProvider) {
  exports[key10017] = KeyboardProvider[key10017];
  continue;
}
for (const key10021 in _mod1831) {
  exports[key10021] = _mod1831[key10021];
  continue;
}
for (const key10025 in _mod1832) {
  exports[key10025] = _mod1832[key10025];
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
for (const key10037 in _mod1836) {
  exports[key10037] = _mod1836[key10037];
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

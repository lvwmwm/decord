// Module ID: 1644
// Function ID: 1645
// Name: KeyboardChatScrollView
// Dependencies: [1645, 1653, 1975, 1976, 1977, 1974, 1980, 1986, 1987, 2016]

// Module 1644 (KeyboardChatScrollView)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1645 */;
import animated from "animated" /* 1653 */;
import KeyboardController from "KeyboardController" /* 1974 */;
import _mod1975 from "module_1975" /* 1975 */;
import _mod1976 from "module_1976" /* 1976 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1977 */;
import _mod1980 from "module_1980" /* 1980 */;
import compat from "compat" /* 1986 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1987 */;
import OverKeyboardView from "OverKeyboardView" /* 2016 */;

for (const key10013 in KeyboardControllerNative) {
  exports[key10013] = KeyboardControllerNative[key10013];
  continue;
}
for (const key10017 in animated) {
  exports[key10017] = animated[key10017];
  continue;
}
for (const key10021 in _mod1975) {
  exports[key10021] = _mod1975[key10021];
  continue;
}
for (const key10025 in _mod1976) {
  exports[key10025] = _mod1976[key10025];
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
for (const key10037 in _mod1980) {
  exports[key10037] = _mod1980[key10037];
  continue;
}
for (const key10041 in compat) {
  exports[key10041] = compat[key10041];
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

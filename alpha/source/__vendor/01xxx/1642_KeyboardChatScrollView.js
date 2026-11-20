// Module ID: 1642
// Function ID: 1643
// Name: KeyboardChatScrollView
// Dependencies: [1643, 1651, 1973, 1974, 1975, 1972, 1978, 1984, 1985, 2014]

// Module 1642 (KeyboardChatScrollView)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1643 */;
import animated from "animated" /* 1651 */;
import KeyboardController from "KeyboardController" /* 1972 */;
import _mod1973 from "module_1973" /* 1973 */;
import _mod1974 from "module_1974" /* 1974 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1975 */;
import _mod1978 from "module_1978" /* 1978 */;
import compat from "compat" /* 1984 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1985 */;
import OverKeyboardView from "OverKeyboardView" /* 2014 */;

for (const key10013 in KeyboardControllerNative) {
  exports[key10013] = KeyboardControllerNative[key10013];
  continue;
}
for (const key10017 in animated) {
  exports[key10017] = animated[key10017];
  continue;
}
for (const key10021 in _mod1973) {
  exports[key10021] = _mod1973[key10021];
  continue;
}
for (const key10025 in _mod1974) {
  exports[key10025] = _mod1974[key10025];
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
for (const key10037 in _mod1978) {
  exports[key10037] = _mod1978[key10037];
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

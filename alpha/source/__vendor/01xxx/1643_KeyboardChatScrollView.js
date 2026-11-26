// Module ID: 1643
// Function ID: 1644
// Name: KeyboardChatScrollView
// Dependencies: [1644, 1652, 1974, 1975, 1976, 1973, 1979, 1985, 1986, 2015]

// Module 1643 (KeyboardChatScrollView)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1644 */;
import animated from "animated" /* 1652 */;
import KeyboardController from "KeyboardController" /* 1973 */;
import _mod1974 from "module_1974" /* 1974 */;
import _mod1975 from "module_1975" /* 1975 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1976 */;
import _mod1979 from "module_1979" /* 1979 */;
import compat from "compat" /* 1985 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1986 */;
import OverKeyboardView from "OverKeyboardView" /* 2015 */;

for (const key10013 in KeyboardControllerNative) {
  exports[key10013] = KeyboardControllerNative[key10013];
  continue;
}
for (const key10017 in animated) {
  exports[key10017] = animated[key10017];
  continue;
}
for (const key10021 in _mod1974) {
  exports[key10021] = _mod1974[key10021];
  continue;
}
for (const key10025 in _mod1975) {
  exports[key10025] = _mod1975[key10025];
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
for (const key10037 in _mod1979) {
  exports[key10037] = _mod1979[key10037];
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

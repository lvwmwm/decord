// Module ID: 1641
// Function ID: 1642
// Name: KeyboardChatScrollView
// Dependencies: [1642, 1650, 1972, 1973, 1974, 1971, 1977, 1983, 1984, 2013]

// Module 1641 (KeyboardChatScrollView)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1642 */;
import animated from "animated" /* 1650 */;
import KeyboardController from "KeyboardController" /* 1971 */;
import _mod1972 from "module_1972" /* 1972 */;
import _mod1973 from "module_1973" /* 1973 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1974 */;
import _mod1977 from "module_1977" /* 1977 */;
import compat from "compat" /* 1983 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1984 */;
import OverKeyboardView from "OverKeyboardView" /* 2013 */;

for (const key10013 in KeyboardControllerNative) {
  exports[key10013] = KeyboardControllerNative[key10013];
  continue;
}
for (const key10017 in animated) {
  exports[key10017] = animated[key10017];
  continue;
}
for (const key10021 in _mod1972) {
  exports[key10021] = _mod1972[key10021];
  continue;
}
for (const key10025 in _mod1973) {
  exports[key10025] = _mod1973[key10025];
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
for (const key10037 in _mod1977) {
  exports[key10037] = _mod1977[key10037];
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

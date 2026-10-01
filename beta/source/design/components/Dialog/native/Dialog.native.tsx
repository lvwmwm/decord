// Module ID: 5262
// Function ID: 5263
// Name: Dialog
// Dependencies: [19, 17, 21, 5263, 2]
// Exports: Dialog

// Module 5262 (Dialog)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import AccessibilityView2 from "AccessibilityView" /* 5263 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Dialog/native/Dialog.native.tsx");

export const Dialog = function Dialog(dialogKey) {
  let items;
  let onDismiss;
  let zIndex;
  dialogKey = dialogKey.dialogKey;
  ({ onDismiss, zIndex } = dialogKey);
  const merged = Object.assign(dialogKey, Object.assign({ dialogKey: 0, onDismiss: 0, zIndex: 0 }));
  const id = react.useId();
  const obj = { style: items, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss, nativeID: dialogKey };
  items = [StyleSheet.absoluteFill, { zIndex }];
  const AccessibilityView = AccessibilityView2.AccessibilityView;
  const tmp3 = jsx;
  if (dialogKey == null) {
    dialogKey = id;
  }
  const merged1 = Object.assign(merged);
  return tmp3(AccessibilityView, obj);
};

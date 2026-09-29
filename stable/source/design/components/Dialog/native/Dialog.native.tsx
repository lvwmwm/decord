// Module ID: 5199
// Function ID: 5200
// Name: Dialog
// Dependencies: [19, 17, 21, 5200, 2]
// Exports: Dialog

// Module 5199 (Dialog)
import AccessibilityView from "AccessibilityView" /* 5200 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Dialog/native/Dialog.native.tsx");

export const Dialog = function Dialog(dialogKey) {
  dialogKey = dialogKey.dialogKey;
  ({ onDismiss, zIndex } = dialogKey);
  const merged = Object.assign(dialogKey, Object.assign({ dialogKey: 0, onDismiss: 0, zIndex: 0 }));
  const id = noop.useId();
  const obj = { style: null, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss, nativeID: null };
  const items = [StyleSheet.absoluteFill, { zIndex }];
  obj.style = items;
  if (dialogKey == null) {
    dialogKey = id;
  }
  obj.nativeID = dialogKey;
  const merged1 = Object.assign(merged);
  return jsx(AccessibilityView.AccessibilityView, { style: null, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss, nativeID: null });
};

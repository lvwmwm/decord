// Module ID: 4582
// Function ID: 4583
// Name: Dialog
// Dependencies: [19, 17, 21, 4583, 2]
// Exports: Dialog

// Module 4582 (Dialog)
import noop from "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Dialog/native/Dialog.native.tsx");

export const Dialog = function Dialog(dialogKey) {
  let onDismiss;
  let zIndex;
  dialogKey = dialogKey.dialogKey;
  ({ onDismiss, zIndex } = dialogKey);
  const merged = Object.assign(dialogKey, Object.create(null));
  const id = noop.useId();
  const obj = { style: items, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss, nativeID: null };
  items = [StyleSheet.absoluteFill, { zIndex }];
  if (dialogKey == null) {
    dialogKey = id;
  }
  obj[3] = dialogKey;
  const merged1 = Object.assign(merged);
  return jsx(require(4583) /* AccessibilityView */.AccessibilityView, { style: items, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss, nativeID: null });
};

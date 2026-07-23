// Module ID: 4524
// Function ID: 39764
// Name: Dialog
// Dependencies: [31, 27, 33, 4525, 2]
// Exports: Dialog

// Module 4524 (Dialog)
import result from "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Dialog/native/Dialog.native.tsx");

export const Dialog = function Dialog(dialogKey) {
  let onDismiss;
  let zIndex;
  dialogKey = dialogKey.dialogKey;
  let obj = { dialogKey: 0, onDismiss: 0, zIndex: 0 };
  ({ onDismiss, zIndex } = dialogKey);
  Object.setPrototypeOf(null);
  const merged = Object.assign(dialogKey, obj);
  let id = result.useId();
  obj = { style: items, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss };
  items = [StyleSheet.absoluteFill, { zIndex }];
  if (null != dialogKey) {
    id = dialogKey;
  }
  obj.nativeID = id;
  const merged1 = Object.assign(merged);
  return jsx(require(4525) /* AccessibilityView */.AccessibilityView, { style: items, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss });
};

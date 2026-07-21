// Module ID: 4520
// Function ID: 39716
// Name: Dialog
// Dependencies: []
// Exports: Dialog

// Module 4520 (Dialog)
let closure_2 = importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/Dialog/native/Dialog.native.tsx");

export const Dialog = function Dialog(dialogKey) {
  let onDismiss;
  let zIndex;
  dialogKey = dialogKey.dialogKey;
  let obj = { fileFinishedImporting: "spring", error: "linear", no: "easeInEaseOut" };
  ({ onDismiss, zIndex } = dialogKey);
  Object.setPrototypeOf(null);
  const merged = Object.assign(dialogKey, obj);
  let id = closure_2.useId();
  obj = { style: items, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss };
  const items = [StyleSheet.absoluteFill, { zIndex }];
  if (null != dialogKey) {
    id = dialogKey;
  }
  obj.nativeID = id;
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[3]).AccessibilityView, obj);
};

// Module ID: 4525
// Function ID: 39767
// Name: AccessibilityView
// Dependencies: [31, 27, 33, 4526, 3991, 2]

// Module 4525 (AccessibilityView)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "result";
import importDefaultResult from "module_3991";

const forwardRefResult = require("result").forwardRef((accessibilityViewIsModal, ref) => {
  let nativeID;
  let onAccessibilityEscape;
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ nativeID, onAccessibilityEscape } = accessibilityViewIsModal);
  let obj = { accessibilityViewIsModal: 0, nativeID: 0, collapsable: 0, onAccessibilityEscape: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(accessibilityViewIsModal, obj);
  if (flag) {
    if (null == onAccessibilityEscape) {
      const _Error = Error;
      const error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  obj = { accessibilityViewIsModal: flag, nativeID };
  importDefault(4526)(obj);
  obj = { ref, nativeID };
  let collapsable = null == nativeID;
  if (collapsable) {
    collapsable = accessibilityViewIsModal.collapsable;
  }
  obj.collapsable = collapsable;
  obj.onAccessibilityEscape = onAccessibilityEscape;
  obj.accessibilityViewIsModal = flag;
  const merged1 = Object.assign(merged);
  return <View ref={arg1} nativeID={nativeID} />;
});
const animatedComponent = require("module_3991").createAnimatedComponent(forwardRefResult);
const result = require("jsxProd").fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export const AccessibilityView = forwardRefResult;
export const AccessibilityViewAnimated = animatedComponent;

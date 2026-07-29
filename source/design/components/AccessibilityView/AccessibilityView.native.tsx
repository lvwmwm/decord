// Module ID: 4583
// Function ID: 4584
// Name: AccessibilityView
// Dependencies: [19, 17, 21, 4584, 4050, 2]

// Module 4583 (AccessibilityView)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";
import importDefaultResult from "module_4050";

const forwardRefResult = require("noop").forwardRef((accessibilityViewIsModal, ref) => {
  let nativeID;
  let onAccessibilityEscape;
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ nativeID, onAccessibilityEscape } = accessibilityViewIsModal);
  const merged = Object.assign(accessibilityViewIsModal, Object.create(null));
  if (flag) {
    if (null == onAccessibilityEscape) {
      const _Error = Error;
      const error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  importDefault(4584)({ accessibilityViewIsModal: flag, nativeID });
  const obj = { ref, nativeID, collapsable: null, onAccessibilityEscape: null, accessibilityViewIsModal: null };
  let collapsable = null == nativeID;
  if (collapsable) {
    collapsable = accessibilityViewIsModal.collapsable;
  }
  obj[2] = collapsable;
  obj[3] = onAccessibilityEscape;
  obj[4] = flag;
  const merged1 = Object.assign(merged);
  return <View ref={arg1} nativeID={nativeID} collapsable={null} onAccessibilityEscape={null} accessibilityViewIsModal={null} />;
});
const animatedComponent = require("module_4050").createAnimatedComponent(forwardRefResult);
const result = require("jsxProd").fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export const AccessibilityView = forwardRefResult;
export const AccessibilityViewAnimated = animatedComponent;

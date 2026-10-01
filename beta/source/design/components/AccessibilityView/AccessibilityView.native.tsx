// Module ID: 5263
// Function ID: 5264
// Name: AccessibilityView
// Dependencies: [19, 17, 21, 5264, 4566, 2]

// Module 5263 (AccessibilityView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useAccessibilityViewIsModalToggleDefault from "useAccessibilityViewIsModalToggle" /* 5264 */;
import react from "react" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef(function(accessibilityViewIsModal, ref) {
  let nativeID;
  let onAccessibilityEscape;
  let tmp5;
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ nativeID, onAccessibilityEscape } = accessibilityViewIsModal);
  const collapsable = accessibilityViewIsModal.collapsable;
  const merged = Object.assign(accessibilityViewIsModal, Object.assign({ accessibilityViewIsModal: 0, nativeID: 0, collapsable: 0, onAccessibilityEscape: 0 }));
  if (flag) {
    if (null == onAccessibilityEscape) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  useAccessibilityViewIsModalToggleDefault({ accessibilityViewIsModal: flag, nativeID });
  const obj = { ref, nativeID, collapsable: tmp5, onAccessibilityEscape, accessibilityViewIsModal: flag };
  tmp5 = null == nativeID;
  const tmp3 = jsx;
  const tmp4 = View;
  if (tmp5) {
    tmp5 = collapsable;
  }
  const merged1 = Object.assign(merged);
  return tmp3(tmp4, obj);
});
const animatedComponent = ReanimatedRexport.createAnimatedComponent(forwardRefResult);
const result = size.fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export const AccessibilityView = forwardRefResult;
export const AccessibilityViewAnimated = animatedComponent;

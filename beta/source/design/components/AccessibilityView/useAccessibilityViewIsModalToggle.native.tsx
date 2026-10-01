// Module ID: 5264
// Function ID: 5265
// Name: useAccessibilityViewIsModalToggle
// Dependencies: [19, 5265, 2]
// Exports: default

// Module 5264 (useAccessibilityViewIsModalToggle)
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5265 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let result = size.fileFinishedImporting("design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx");

export default function useAccessibilityViewIsModalToggle(accessibilityViewIsModal) {
  let ref;
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  const nativeID = accessibilityViewIsModal.nativeID;
  react = undefined;
  react = react.useRef(undefined);
  let items = [flag, nativeID];
  const callback = react.useCallback(function() {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = flag;
    }
    if (tmp) {
      if (null == nativeID) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Must have a unique nativeID when accessibilityViewIsModal is enabled.");
        throw error;
      } else if (ref.current !== nativeID) {
        ref.current = nativeID;
        const items = [nativeID];
        const obj2 = AccessibilityFocusLockManagerDefault;
        const result = obj2.enableAccessibilityFocusLock(items);
      }
    } else {
      const current = ref.current;
      if (null != current) {
        ref.current = undefined;
        const items1 = [current];
        const obj = AccessibilityFocusLockManagerDefault;
        const result1 = obj.disableAccessibilityFocusLock(items1);
      }
    }
  }, items);
  let items1 = [callback];
  const effect = react.useEffect(() => {
    callback();
    return () => {
      callback(false);
    };
  }, items1);
};

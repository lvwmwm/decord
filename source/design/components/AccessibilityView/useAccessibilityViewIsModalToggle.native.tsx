// Module ID: 4522
// Function ID: 39720
// Name: useAccessibilityViewIsModalToggle
// Dependencies: []
// Exports: default

// Module 4522 (useAccessibilityViewIsModalToggle)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx");

export default function useAccessibilityViewIsModalToggle(accessibilityViewIsModal) {
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  const nativeID = accessibilityViewIsModal.nativeID;
  const dependencyMap = nativeID;
  let React;
  let callback;
  React = React.useRef(undefined);
  const items = [flag, nativeID];
  callback = React.useCallback(() => {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = flag;
    }
    if (tmp) {
      if (null == nativeID) {
        const _Error = Error;
        const error = new Error("Must have a unique nativeID when accessibilityViewIsModal is enabled.");
        throw error;
      } else if (ref.current !== nativeID) {
        ref.current = nativeID;
        const items = [nativeID];
        const result = flag(nativeID[1]).enableAccessibilityFocusLock(items);
        const obj = flag(nativeID[1]);
      }
    } else {
      const current = ref.current;
      if (null != current) {
        ref.current = undefined;
        const items1 = [current];
        const result1 = flag(nativeID[1]).disableAccessibilityFocusLock(items1);
        const obj2 = flag(nativeID[1]);
      }
    }
  }, items);
  const items1 = [callback];
  const effect = React.useEffect(() => {
    callback();
    return () => {
      callback(false);
    };
  }, items1);
};

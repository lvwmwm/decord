// Module ID: 4521
// Function ID: 39718
// Name: AccessibilityView
// Dependencies: []

// Module 4521 (AccessibilityView)
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((accessibilityViewIsModal, ref) => {
  let nativeID;
  let onAccessibilityEscape;
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ nativeID, onAccessibilityEscape } = accessibilityViewIsModal);
  let obj = { -1346350803: null, 1383004514: 4, -1658610399: 4, -1789826719: "rgba(0, 0, 0, 0.75)" };
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
  importDefault(dependencyMap[3])(obj);
  obj = { ref, nativeID };
  let collapsable = null == nativeID;
  if (collapsable) {
    collapsable = accessibilityViewIsModal.collapsable;
  }
  obj.collapsable = collapsable;
  obj.onAccessibilityEscape = onAccessibilityEscape;
  obj.accessibilityViewIsModal = flag;
  const merged1 = Object.assign(merged);
  return <View {...obj} />;
});
const importAllResult = importAll(dependencyMap[0]);
const animatedComponent = importDefault(dependencyMap[4]).createAnimatedComponent(forwardRefResult);
const importDefaultResult = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export const AccessibilityView = forwardRefResult;
export const AccessibilityViewAnimated = animatedComponent;

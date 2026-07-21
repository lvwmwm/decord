// Module ID: 12907
// Function ID: 98475
// Name: AccessibilityFocusView
// Dependencies: []
// Exports: default

// Module 12907 (AccessibilityFocusView)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;
if (obj.isAndroid()) {
  let importDefaultResult = importDefault(dependencyMap[4]);
} else {
  importDefaultResult = arg1(dependencyMap[1]).requireNativeComponent("AccessibilityFocusView");
}
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default function AccessibilityFocusView(arg0) {
  let onAccessibilityBlur;
  let onAccessibilityFocus;
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  let obj = Object.create(null);
  obj.onAccessibilityFocus = 0;
  obj.onAccessibilityBlur = 0;
  obj = {};
  const merged = Object.assign(Object.assign(arg0, obj));
  obj["onAccessibilityFocus"] = onAccessibilityFocus;
  obj["onAccessibilityBlur"] = onAccessibilityBlur;
  return <importDefaultResult {...obj} />;
};

// Module ID: 8379
// Function ID: 66717
// Name: ActionSheetHeaderPressableText
// Dependencies: []
// Exports: ActionSheetHeaderPressableText

// Module 8379 (ActionSheetHeaderPressableText)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[1]);
let closure_4 = _module.createStyles(() => ({ container: { marginTop: 3 } }));
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export const ActionSheetHeaderPressableText = function ActionSheetHeaderPressableText(onPress) {
  let accessibilityLabel;
  let label;
  ({ label, accessibilityLabel } = onPress);
  let str = "text-md/semibold";
  if (importDefault(dependencyMap[2])("ActionSheetHeaderPressableText")) {
    str = "text-md/medium";
  }
  let obj = { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress };
  let tmp3 = label;
  if (null != accessibilityLabel) {
    tmp3 = accessibilityLabel;
  }
  obj.accessibilityLabel = tmp3;
  obj = { variant: str, color: "text-brand", children: label };
  obj.children = jsx(require(dependencyMap[4]).Text, obj);
  return jsx(require(dependencyMap[3]).PressableOpacity, obj);
};

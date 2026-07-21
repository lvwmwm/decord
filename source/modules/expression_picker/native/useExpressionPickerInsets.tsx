// Module ID: 9564
// Function ID: 74493
// Name: useExpressionPickerInsets
// Dependencies: []
// Exports: default

// Module 9564 (useExpressionPickerInsets)
let closure_2 = importAll(dependencyMap[0]);
const EXPRESSION_FOOTER_HEIGHT = arg1(dependencyMap[1]).EXPRESSION_FOOTER_HEIGHT;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default function useExpressionPickerInsets(hasCategories) {
  const bottom = importDefault(dependencyMap[2])().bottom;
  const importDefault = bottom;
  const obj = {};
  const items = [bottom];
  obj.safeAreaStyle = React.useMemo(() => ({ paddingBottom: bottom }), items);
  let num = 0;
  if (hasCategories.hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = importDefault(dependencyMap[3])({ MOBILE_BOTTOM_SHEET: true, margin: true }).insets.bottom + num;
  obj.safeAreaBottomKeyboardAware = sum + importDefault(dependencyMap[4]).space.PX_16;
  return obj;
};

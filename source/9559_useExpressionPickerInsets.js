// Module ID: 9559
// Function ID: 74476
// Name: useExpressionPickerInsets
// Dependencies: []
// Exports: default

// Module 9559 (useExpressionPickerInsets)
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
  const sum = importDefault(dependencyMap[3])({ "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986 }).insets.bottom + num;
  obj.safeAreaBottomKeyboardAware = sum + importDefault(dependencyMap[4]).space.PX_16;
  return obj;
};

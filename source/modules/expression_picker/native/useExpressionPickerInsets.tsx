// Module ID: 9565
// Function ID: 74517
// Name: useExpressionPickerInsets
// Dependencies: []
// Exports: default

// Module 9565 (useExpressionPickerInsets)
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
  const sum = importDefault(dependencyMap[3])({ -1436505503: "<string:1040334421>", 676513843: "<string:1040334338>" }).insets.bottom + num;
  obj.safeAreaBottomKeyboardAware = sum + importDefault(dependencyMap[4]).space.PX_16;
  return obj;
};

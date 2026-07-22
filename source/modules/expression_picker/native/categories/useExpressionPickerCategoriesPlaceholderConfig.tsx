// Module ID: 9412
// Function ID: 73282
// Name: useExpressionPickerCategoriesPlaceholderConfig
// Dependencies: []
// Exports: default

// Module 9412 (useExpressionPickerCategoriesPlaceholderConfig)
let closure_2 = importAll(dependencyMap[0]);
const CATEGORY_ICON_SIZE = arg1(dependencyMap[1]).CATEGORY_ICON_SIZE;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { color: importDefault(dependencyMap[3]).colors.BACKGROUND_MOD_STRONG, opacity: 0.5 };
obj.placeholder = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx");

export default function useExpressionPickerCategoriesPlaceholderConfig() {
  const tmp = callback();
  const arg1 = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    let obj = {};
    obj = { type: tmp(closure_1[4]).FastestListPropsPlaceholderType.SHAPE, colorHex: tmp.placeholder.color, opacity: tmp.placeholder.opacity, shape: "circle", width: closure_3, height: closure_3 };
    obj.sectionItem = obj;
    return obj;
  }, items);
};

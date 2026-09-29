// Module ID: 9986
// Function ID: 9987
// Name: useExpressionPickerCategoriesPlaceholderConfig
// Dependencies: [19, 1074, 4836, 576, 6649, 2]
// Exports: default

// Module 9986 (useExpressionPickerCategoriesPlaceholderConfig)
import nativeDefault from "native" /* 576 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 6649 */;
import noop from "module_19" /* 19 */;

require = fn;
const CATEGORY_ICON_SIZE = fn(1074).CATEGORY_ICON_SIZE;
const createStyles = fn(4836);
const obj2 = { placeholder: { color: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.5 } };
let closure_4 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx");

export default function useExpressionPickerCategoriesPlaceholderConfig() {
  const tmp = closure_4();
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => {
    const obj = { sectionItem: null };
    const size = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_0.placeholder.color, opacity: closure_0.placeholder.opacity, shape: "circle", width: CATEGORY_ICON_SIZE, height: CATEGORY_ICON_SIZE };
    obj.sectionItem = size;
    return obj;
  }, items);
};

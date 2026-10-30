// Module ID: 10066
// Function ID: 10067
// Name: useExpressionPickerCategoriesPlaceholderConfig
// Dependencies: [19, 1072, 5009, 575, 7224, 2]
// Exports: default

// Module 10066 (useExpressionPickerCategoriesPlaceholderConfig)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 7224 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const CATEGORY_ICON_SIZE = Constants.CATEGORY_ICON_SIZE;
let obj = { placeholder: { color: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.5 } };
({ color: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.5 });
let closure_4 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx");

export default function useExpressionPickerCategoriesPlaceholderConfig() {
  const tmp = closure_4();
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => {
    const obj = { sectionItem: size };
    size = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_0.placeholder.color, opacity: closure_0.placeholder.opacity, shape: "circle", width: CATEGORY_ICON_SIZE, height: CATEGORY_ICON_SIZE };
    return obj;
  }, items);
};

// Module ID: 8665
// Function ID: 8666
// Name: useExpressionPickerCategoriesPlaceholderConfig
// Dependencies: [19, 676, 4255, 712, 8316, 2]
// Exports: default

// Module 8665 (useExpressionPickerCategoriesPlaceholderConfig)
import noop from "noop";
import { CATEGORY_ICON_SIZE } from "ME";
import createCacheKey from "createCacheKey";

let require = arg1;
createCacheKey = { placeholder: null };
createCacheKey = { color: require("Themes").colors.BACKGROUND_MOD_STRONG, opacity: 0.5 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx");

export default function useExpressionPickerCategoriesPlaceholderConfig() {
  const tmp = createCacheKey();
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    let obj = { sectionItem: null };
    obj = { type: tmp(outer1_1[4]).FastestListPropsPlaceholderType.SHAPE, colorHex: tmp.placeholder.color, opacity: tmp.placeholder.opacity, shape: "circle", width: outer1_3, height: outer1_3 };
    obj[0] = obj;
    return obj;
  }, items);
};

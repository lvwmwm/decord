// Module ID: 10573
// Function ID: 10574
// Name: useExpressionPickerCategoriesPlaceholderConfig
// Dependencies: [19, 1078, 4790, 580, 558, 568, 7341, 2]

// Module 10573 (useExpressionPickerCategoriesPlaceholderConfig)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 7341 */;
import noop from "module_19" /* 19 */;

require = fn;
const CATEGORY_ICON_SIZE = fn(1078).CATEGORY_ICON_SIZE;
const createStyles = fn(4790);
let obj2 = { placeholder: { color: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.5 } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { color: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.5 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_4();
  if (cResult[0] === tmp4.placeholder.color) {
    if (cResult[1] === tmp4.placeholder.opacity) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { sectionItem: null };
  const size = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: tmp4.placeholder.color, opacity: tmp4.placeholder.opacity, shape: "circle", width: CATEGORY_ICON_SIZE, height: CATEGORY_ICON_SIZE };
  obj2.sectionItem = size;
  cResult[0] = tmp4.placeholder.color;
  cResult[1] = tmp4.placeholder.opacity;
  cResult[2] = obj2;
  tmp5 = obj2;
}) : (() => {
  const tmp = closure_4();
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => {
    const obj = { sectionItem: null };
    const size = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_0.placeholder.color, opacity: closure_0.placeholder.opacity, shape: "circle", width: CATEGORY_ICON_SIZE, height: CATEGORY_ICON_SIZE };
    obj.sectionItem = size;
    return obj;
  }, items);
});

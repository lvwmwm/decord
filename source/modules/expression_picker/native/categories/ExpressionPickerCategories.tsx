// Module ID: 8695
// Function ID: 8696
// Name: ExpressionPickerCategories
// Dependencies: [19, 17, 21, 4285, 712, 1348, 4155, 8696, 2]
// Exports: default

// Module 8695 (ExpressionPickerCategories)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, containerRefresh: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, paddingHorizontal: require("Themes").space.PX_8, flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
const result = require("jsxProd").fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default function ExpressionPickerCategories(arg0) {
  let children;
  let portalHostName;
  let style;
  ({ children, portalHostName, style } = arg0);
  const tmp = createCacheKey();
  const tmp4 = importDefault(1348)("ExpressionPickerCategories");
  let obj = { hostName: portalHostName, children: null };
  const items = [tmp.container, , ];
  let containerRefresh = null;
  if (tmp4) {
    containerRefresh = tmp.containerRefresh;
  }
  obj = { style: items, children: null };
  items[1] = containerRefresh;
  items[2] = style;
  let tmp5Result = null;
  if (!tmp4) {
    tmp5Result = tmp5(importDefault(8696), {});
  }
  const items1 = [tmp5Result, children];
  obj[1] = items1;
  obj[1] = closure_5(View, obj);
  return closure_4(require(4155) /* Portal */.Portal, obj);
};

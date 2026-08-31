// Module ID: 16215
// Function ID: 16216
// Name: FileOrLinkGridPlaceholderItem
// Dependencies: [19, 21, 16195, 4903, 4187, 16216, 2]
// Exports: default

// Module 16215 (FileOrLinkGridPlaceholderItem)
import _modDef4187 from "module_4187" /* 4187 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let width;
  importDefault = undefined;
  let obj = width(16195);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  width = imageStyle.width;
  const sum = imageStyle.height + 108 * width(4903).useFontScale();
  importDefault = sum;
  const items = [width, sum];
  const memo = React.useMemo(() => ({ width, height: c1 }), items);
  obj = { style: items1, pointerEvents: "none", children: jsx(width(16216).SearchListCardContainer, { containerStyle: memo }) };
  items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  return jsx(_modDef4187.View, { style: items1, pointerEvents: "none", children: jsx(width(16216).SearchListCardContainer, { containerStyle: memo }) });
};

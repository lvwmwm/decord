// Module ID: 16589
// Function ID: 16590
// Name: FileOrLinkGridPlaceholderItem
// Dependencies: [19, 21, 16569, 4943, 4218, 16590, 2]
// Exports: default

// Module 16589 (FileOrLinkGridPlaceholderItem)
import _modDef4218 from "module_4218" /* 4218 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let width;
  importDefault = undefined;
  let obj = width(16569);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  width = imageStyle.width;
  const sum = imageStyle.height + 108 * width(4943).useFontScale();
  importDefault = sum;
  const items = [width, sum];
  const memo = React.useMemo(() => ({ width, height: c1 }), items);
  obj = { style: items1, pointerEvents: "none", children: jsx(width(16590).SearchListCardContainer, { containerStyle: memo }) };
  items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  return jsx(_modDef4218.View, { style: items1, pointerEvents: "none", children: jsx(width(16590).SearchListCardContainer, { containerStyle: memo }) });
};

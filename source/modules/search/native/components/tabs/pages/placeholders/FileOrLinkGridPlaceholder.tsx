// Module ID: 15987
// Function ID: 15988
// Name: FileOrLinkGridPlaceholderItem
// Dependencies: [19, 21, 15967, 4756, 4119, 15988, 2]
// Exports: default

// Module 15987 (FileOrLinkGridPlaceholderItem)
import _modDef4119 from "module_4119" /* 4119 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let width;
  importDefault = undefined;
  let obj = width(15967);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  width = imageStyle.width;
  const sum = imageStyle.height + 108 * width(4756).useFontScale();
  importDefault = sum;
  const items = [width, sum];
  const memo = React.useMemo(() => ({ width, height: c1 }), items);
  obj = { style: items1, pointerEvents: "none", children: jsx(width(15988).SearchListCardContainer, { containerStyle: memo }) };
  items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  return jsx(_modDef4119.View, { style: items1, pointerEvents: "none", children: jsx(width(15988).SearchListCardContainer, { containerStyle: memo }) });
};

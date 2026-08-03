// Module ID: 15593
// Function ID: 15594
// Name: FileOrLinkGridPlaceholderItem
// Dependencies: [19, 21, 15573, 4672, 4116, 15594, 2]
// Exports: default

// Module 15593 (FileOrLinkGridPlaceholderItem)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFullscreenPlaceholderCount").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let width;
  let importDefault;
  let obj = width(15573);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  width = imageStyle.width;
  const sum = imageStyle.height + 108 * width(4672).useFontScale();
  importDefault = sum;
  const items = [width, sum];
  const memo = React.useMemo(() => ({ width, height: c1 }), items);
  obj = { style: items1, pointerEvents: "none", children: null };
  items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  obj[2] = jsx(width(15594).SearchListCardContainer, { containerStyle: memo });
  return jsx(importDefault(4116).View, { style: items1, pointerEvents: "none", children: null });
};

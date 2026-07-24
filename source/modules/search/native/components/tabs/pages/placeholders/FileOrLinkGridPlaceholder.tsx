// Module ID: 15407
// Function ID: 117578
// Name: FileOrLinkGridPlaceholderItem
// Dependencies: [31, 33, 15387, 4549, 3991, 15408, 2]
// Exports: default

// Module 15407 (FileOrLinkGridPlaceholderItem)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFullscreenPlaceholderCount").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let obj = width(15387);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  width = imageStyle.width;
  const sum = imageStyle.height + 108 * width(4549).useFontScale();
  const importDefault = sum;
  const items = [width, sum];
  const memo = React.useMemo(() => ({ width, height: closure_1 }), items);
  obj = { style: items1, pointerEvents: "none" };
  items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  obj.children = jsx(width(15408).SearchListCardContainer, { containerStyle: memo });
  return jsx(importDefault(3991).View, { style: items1, pointerEvents: "none" });
};

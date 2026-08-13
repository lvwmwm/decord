// Module ID: 15822
// Function ID: 15823
// Name: FileOrLinkGridPlaceholderItem
// Dependencies: [19, 21, 15802, 4761, 4083, 15823, 2]
// Exports: default

// Module 15822 (FileOrLinkGridPlaceholderItem)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFullscreenPlaceholderCount").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let width;
  let importDefault;
  let obj = width(15802);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  width = imageStyle.width;
  const sum = imageStyle.height + 108 * width(4761).useFontScale();
  importDefault = sum;
  const items = [width, sum];
  const memo = React.useMemo(() => ({ width, height: c1 }), items);
  obj = { style: items1, pointerEvents: "none", children: null };
  items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  obj[2] = jsx(width(15823).SearchListCardContainer, { containerStyle: memo });
  return jsx(importDefault(4083).View, { style: items1, pointerEvents: "none", children: null });
};

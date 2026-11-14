// Module ID: 19496
// Function ID: 19497
// Name: FileOrLinkGridPlaceholder
// Dependencies: [19, 21, 19472, 5944, 1655, 19497, 2]
// Exports: default

// Module 19496 (FileOrLinkGridPlaceholder)
import Fragment from "Fragment" /* 21 */;
import _modDef1655 from "module_1655" /* 1655 */;
import useFontScale from "useFontScale" /* 5944 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 19472 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  const containerStyle = imageStyle.containerStyle;
  const obj = usePlaceholderStyles;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  const width = imageStyle.width;
  const obj2 = useFontScale;
  const sum = imageStyle.height + 108 * obj2.useFontScale();
  let c1 = sum;
  const items = [width, sum];
  const memo = react.useMemo(() => {
    size = { width, height };
    return size;
  }, items);
  const items1 = [containerStyle, placeholderAnimatedStyle];
  const View = _modDef1655.View;
  return <View style={items1} pointerEvents="none">{null}</View>;
};

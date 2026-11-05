// Module ID: 19041
// Function ID: 19042
// Name: FileOrLinkGridPlaceholder
// Dependencies: [19, 21, 19017, 5778, 1652, 19042, 2]
// Exports: default

// Module 19041 (FileOrLinkGridPlaceholder)
import Fragment from "Fragment" /* 21 */;
import _modDef1652 from "module_1652" /* 1652 */;
import useFontScale from "useFontScale" /* 5778 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 19017 */;
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
  const View = _modDef1652.View;
  return <View style={items1} pointerEvents="none">{null}</View>;
};

// Module ID: 16487
// Function ID: 16488
// Name: FileOrLinkGridPlaceholder
// Dependencies: [19, 21, 16462, 5288, 4566, 16488, 2]
// Exports: default

// Module 16487 (FileOrLinkGridPlaceholder)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import useFontScale from "useFontScale" /* 5288 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16462 */;
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
  const View = ReanimatedRexportDefault.View;
  return <View style={items1} pointerEvents="none">{null}</View>;
};

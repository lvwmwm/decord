// Module ID: 16710
// Function ID: 16711
// Name: FileOrLinkGridPlaceholder
// Dependencies: [19, 21, 16686, 5484, 4596, 16711, 2]
// Exports: default

// Module 16710 (FileOrLinkGridPlaceholder)
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4596 */;
import useFontScale from "useFontScale" /* 5484 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16686 */;
import SearchListCard from "SearchListCard" /* 16711 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  const placeholderAnimatedStyle = usePlaceholderStyles.usePlaceholderAnimatedStyle(true);
  const width = imageStyle.width;
  const sum = imageStyle.height + 108 * useFontScale.useFontScale();
  c1 = sum;
  const items = [width, sum];
  const memo = noop.useMemo(() => {
    const size = { width, height };
    return size;
  }, items);
  const obj3 = { style: null, pointerEvents: "none", children: jsx(SearchListCard.SearchListCardContainer, { containerStyle: memo }) };
  const items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  obj3.style = items1;
  return jsx(ReanimatedRexportDefault.View, { style: null, pointerEvents: "none", children: jsx(SearchListCard.SearchListCardContainer, { containerStyle: memo }) });
};

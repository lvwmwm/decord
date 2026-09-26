// Module ID: 17145
// Function ID: 17146
// Name: FileOrLinkGridPlaceholder
// Dependencies: [19, 21, 17120, 5225, 4524, 17146, 2]
// Exports: default

// Module 17145 (FileOrLinkGridPlaceholder)
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4524 */;
import useFontScale from "useFontScale" /* 5225 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 17120 */;
import SearchListCard from "SearchListCard" /* 17146 */;
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

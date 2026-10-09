// Module ID: 17290
// Function ID: 17291
// Name: FileOrLinkGridPlaceholder
// Dependencies: [19, 21, 558, 576, 17266, 5383, 17291, 4811, 2]

// Module 17290 (FileOrLinkGridPlaceholder)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4811 */;
import useFontScale from "useFontScale" /* 5383 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 17266 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let tmp;
const SearchListCard = tmp(17291);
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function FileOrLinkGridPlaceholderItem(arg0) {
  let containerStyle;
  let imageStyle;
  const obj = react2;
  const cResult = obj.c(11);
  ({ imageStyle, containerStyle } = arg0);
  const obj2 = usePlaceholderStyles;
  const placeholderAnimatedStyle = obj2.usePlaceholderAnimatedStyle(true);
  const width = imageStyle.width;
  const obj3 = useFontScale;
  const sum = imageStyle.height + 108 * obj3.useFontScale();
  if (cResult[0] === sum) {
    let tmp6;
    if (cResult[1] === width) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === placeholderAnimatedStyle) {
      let tmp7;
      let tmp8;
      if (cResult[4] === containerStyle) {
        tmp7 = cResult[5];
      }
      if (cResult[6] !== tmp6) {
        const tmp10 = jsx(SearchListCard.SearchListCardContainer, { containerStyle: tmp6 });
        cResult[6] = tmp6;
        cResult[7] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[7];
      }
      if (cResult[8] === tmp7) {
        let tmp11;
        if (cResult[9] === tmp8) {
          tmp11 = cResult[10];
        }
        return tmp11;
      }
      const tmp14 = jsx(ReanimatedRexportDefault.View, { style: tmp7, pointerEvents: "none", children: tmp8 });
      cResult[8] = tmp7;
      cResult[9] = tmp8;
      cResult[10] = tmp14;
      tmp11 = tmp14;
    }
    const items = [containerStyle, placeholderAnimatedStyle];
    cResult[3] = placeholderAnimatedStyle;
    cResult[4] = containerStyle;
    cResult[5] = items;
    tmp7 = items;
  }
  size = { width, height: sum };
  cResult[0] = sum;
  cResult[1] = width;
  cResult[2] = size;
  tmp6 = size;
}) : (function FileOrLinkGridPlaceholderItem(imageStyle) {
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
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default tmp2;

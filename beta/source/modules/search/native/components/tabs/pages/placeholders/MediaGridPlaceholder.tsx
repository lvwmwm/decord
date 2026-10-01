// Module ID: 16463
// Function ID: 16464
// Name: MediaGridPlaceholder
// Dependencies: [19, 17, 7303, 21, 4836, 576, 16462, 4566, 16464, 12, 4832, 1115, 11821, 16465, 2]
// Exports: RecentsMediaGridPlaceholder, default

// Module 16463 (MediaGridPlaceholder)
import _mod12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11821 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16462 */;
import GridItemPlaceholderDefault from "GridItemPlaceholder" /* 16464 */;
import react from "react" /* 19 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_LIST_SECTION_TOP_PADDING;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let View = react_native.View;
({ MEDIA_NUM_COLUMNS: hasOwnProperty, MEDIA_ITEM_GAP_WIDTH: metroRequire, SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING } = SearchConstants);
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: { zIndex: 1, position: "absolute", width: "100%" }, recentsContainer: { position: "relative", paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, row: { flexDirection: "row" }, section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingBottom: 8 }, sectionItem: obj2, sectionText: { opacity: 0 } };
obj2 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx");

export default function MediaGridPlaceholderItem(arg0) {
  let containerStyle;
  let items;
  ({ size, containerStyle } = arg0);
  const obj = usePlaceholderStyles;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  const obj2 = { style: items, pointerEvents: "none", children: metroImportDefault(GridItemPlaceholderDefault, { height: size, width: size, style: containerStyle }) };
  items = [containerStyle, placeholderAnimatedStyle];
  View = ReanimatedRexportDefault.View;
  return metroImportDefault(View, obj2);
};
export const RecentsMediaGridPlaceholder = function RecentsMediaGridPlaceholder(visible) {
  let Text;
  let Text2;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let numRows;
  let obj5;
  let obj7;
  let row;
  ({ size: require, numRows } = visible);
  let memo;
  visible = visible.visible;
  let tmp = closure_9();
  dependencyMap = tmp;
  const items = [numRows];
  memo = memo.useMemo(() => {
    const obj = _mod12;
    return obj.range(0, numRows * hasOwnProperty);
  }, items);
  const items1 = [memo];
  const memo1 = memo.useMemo(() => {
    const obj = _mod12;
    return obj.chunk(memo, hasOwnProperty);
  }, items1);
  let obj = usePlaceholderStyles;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(visible);
  let obj2 = { style: items2, pointerEvents: "none", children: items4 };
  items2 = [, , ];
  ({ container: arr4[0], recentsContainer: arr4[1] } = tmp);
  items2[2] = placeholderAnimatedStyle;
  const obj3 = { style: tmp.section, children: items3 };
  const obj4 = { style: tmp.sectionItem, children: closure_7(Text, obj5) };
  View = numRows(4566).View;
  obj5 = { style: tmp.sectionText, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: intl.string(intl3.t.LBYpDH) };
  Text = Text_Text.Text;
  intl = intl3.intl;
  items3 = [closure_7(memo1, obj4), ];
  const obj6 = { style: tmp.sectionItem, children: closure_7(Text2, obj7) };
  obj7 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.sectionText, children: intl2.string(intl3.t.LFTAUp) };
  Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items3[1] = closure_7(memo1, obj6);
  items4 = [
    closure_8(memo1, obj3),
    memo1.map((arr, index) => {
      require = index;
      let obj = {
        style: row.row,
        children: arr.map((item, index) => {
          let obj;
          let obj2;
          size = { height: width, width, style: obj2.getMediaGridItemStyles(obj) };
          obj = { itemIndex: index * hasOwnProperty + index, numItems: memo.length, numColumns: hasOwnProperty, spacing: metroRequire };
          const tmp = GridItemPlaceholderDefault;
          obj2 = SearchPlatformUtils;
          return metroImportDefault(tmp, size, index);
        })
      };
      let tmp = closure_1_8;
      const Fragment = memo.Fragment;
      const children = [closure_1_7(memo1, obj), ];
      let tmp2Result = index < memo1.length - 1;
      const tmp2 = closure_1_7;
      if (tmp2Result) {
        tmp2Result = tmp2(require("Separators").MediaVerticalSeparator, {});
      }
      children[1] = tmp2Result;
      return tmp(Fragment, { children }, index);
    })
  ];
  return closure_8(View, obj2);
};

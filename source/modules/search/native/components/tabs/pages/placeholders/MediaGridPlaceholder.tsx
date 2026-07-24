// Module ID: 15388
// Function ID: 117448
// Name: SEARCH_LIST_SECTION_TOP_PADDING
// Dependencies: [31, 27, 9141, 33, 4130, 689, 15387, 3991, 15389, 22, 4126, 1212, 11426, 15390, 2]
// Exports: RecentsMediaGridPlaceholder, default

// Module 15388 (SEARCH_LIST_SECTION_TOP_PADDING)
import result from "result";
import { View } from "get ActivityIndicator";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_LIST_SECTION_TOP_PADDING;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ MEDIA_NUM_COLUMNS: closure_5, MEDIA_ITEM_GAP_WIDTH: closure_6 } = SearchAutocompleteSelectAnalyticsActions);
({ SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING } = SearchAutocompleteSelectAnalyticsActions);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { zIndex: 1, position: "absolute", width: "100%" }, recentsContainer: { position: "relative", paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, row: { flexDirection: "row" }, section: _createForOfIteratorHelperLoose };
_createForOfIteratorHelperLoose = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingBottom: 8, sectionItem: { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE }, sectionText: { opacity: 0 } };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx");

export default function MediaGridPlaceholderItem(arg0) {
  let containerStyle;
  let size;
  ({ size, containerStyle } = arg0);
  let obj = require(15387) /* useFullscreenPlaceholderCount */;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  obj = { style: items, pointerEvents: "none" };
  items = [containerStyle, placeholderAnimatedStyle];
  obj.children = callback(importDefault(15389), { height: size, width: size, style: containerStyle });
  return callback(importDefault(3991).View, obj);
};
export const RecentsMediaGridPlaceholder = function RecentsMediaGridPlaceholder(visible) {
  let numRows;
  let require;
  ({ size: require, numRows } = visible);
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let items = [numRows];
  memo = memo.useMemo(() => outer1_0(tmp[9]).range(0, numRows * outer1_5), items);
  const items1 = [memo];
  const memo1 = memo.useMemo(() => outer1_0(tmp[9]).chunk(memo, outer1_5), items1);
  let obj = require(15387) /* useFullscreenPlaceholderCount */;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(visible.visible);
  obj = { style: items2, pointerEvents: "none" };
  items2 = [, , ];
  ({ container: arr4[0], recentsContainer: arr4[1] } = tmp);
  items2[2] = placeholderAnimatedStyle;
  obj = { style: tmp.section };
  const obj1 = { style: tmp.sectionItem };
  const obj2 = { style: tmp.sectionText, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t.LBYpDH);
  obj1.children = callback(require(4126) /* Text */.Text, obj2);
  const items3 = [callback(memo1, obj1), ];
  const obj3 = { style: tmp.sectionItem };
  const obj4 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.sectionText };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl2.string(require(1212) /* getSystemLocale */.t.LFTAUp);
  obj3.children = callback(require(4126) /* Text */.Text, obj4);
  items3[1] = callback(memo1, obj3);
  obj.children = items3;
  const items4 = [
    callback2(memo1, obj),
    memo1.map((arr) => {
      let closure_0 = arg1;
      let obj = {};
      obj = {
        style: tmp.row,
        children: arr.map((arg0, arg1) => {
          let obj = { height: closure_0, width: closure_0 };
          const tmp = numRows(15389);
          obj = { itemIndex: closure_0 * outer2_5 + arg1, numItems: outer1_3.length, numColumns: outer2_5, spacing: outer2_6 };
          obj.style = outer2_0(11426).getMediaGridItemStyles(obj);
          return outer2_7(tmp, obj, arg1);
        })
      };
      const items = [outer1_7(memo1, obj), ];
      let tmp2 = arg1 < memo1.length - 1;
      if (tmp2) {
        tmp2 = outer1_7(outer1_0(tmp[13]).MediaVerticalSeparator, {});
      }
      items[1] = tmp2;
      obj.children = items;
      return outer1_8(memo.Fragment, obj, arg1);
    })
  ];
  obj.children = items4;
  return callback2(numRows(3991).View, obj);
};

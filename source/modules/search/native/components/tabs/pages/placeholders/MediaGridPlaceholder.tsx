// Module ID: 15207
// Function ID: 114855
// Name: MediaGridPlaceholderItem
// Dependencies: []
// Exports: RecentsMediaGridPlaceholder, default

// Module 15207 (MediaGridPlaceholderItem)
let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_LIST_SECTION_TOP_PADDING;
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const tmp2 = arg1(dependencyMap[2]);
({ MEDIA_NUM_COLUMNS: closure_5, MEDIA_ITEM_GAP_WIDTH: closure_6 } = tmp2);
({ SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING } = tmp2);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: {}, recentsContainer: { position: "relative", paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, row: { flexDirection: "row" }, section: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING } };
obj = { borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.sectionItem = obj;
obj.sectionText = { opacity: 0 };
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx");

export default function MediaGridPlaceholderItem(arg0) {
  let containerStyle;
  let size;
  ({ size, containerStyle } = arg0);
  let obj = arg1(dependencyMap[6]);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  obj = { style: items, pointerEvents: "none" };
  const items = [containerStyle, placeholderAnimatedStyle];
  obj.children = callback(importDefault(dependencyMap[8]), { height: size, width: size, style: containerStyle });
  return callback(importDefault(dependencyMap[7]).View, obj);
};
export const RecentsMediaGridPlaceholder = function RecentsMediaGridPlaceholder(visible) {
  let numRows;
  ({ size: closure_0, numRows } = visible);
  const importDefault = numRows;
  const tmp = callback3();
  const dependencyMap = tmp;
  const items = [numRows];
  const memo = React.useMemo(() => callback(tmp[9]).range(0, numRows * closure_5), items);
  const React = memo;
  const items1 = [memo];
  const memo1 = React.useMemo(() => callback(tmp[9]).chunk(memo, closure_5), items1);
  const View = memo1;
  let obj = arg1(dependencyMap[6]);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(visible.visible);
  obj = { style: items2, pointerEvents: "none" };
  const items2 = [, , ];
  ({ container: arr4[0], recentsContainer: arr4[1] } = tmp);
  items2[2] = placeholderAnimatedStyle;
  obj = { style: tmp.section };
  const obj1 = { style: tmp.sectionItem };
  const obj2 = { style: tmp.sectionText };
  const intl = arg1(dependencyMap[11]).intl;
  obj2.children = intl.string(arg1(dependencyMap[11]).t.LBYpDH);
  obj1.children = callback(arg1(dependencyMap[10]).Text, obj2);
  const items3 = [callback(View, obj1), ];
  const obj3 = { style: tmp.sectionItem };
  const obj4 = { INTEGRATION_CREATE: "png", ConstraintReasonCode: "absolute", style: tmp.sectionText };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj4.children = intl2.string(arg1(dependencyMap[11]).t.LFTAUp);
  obj3.children = callback(arg1(dependencyMap[10]).Text, obj4);
  items3[1] = callback(View, obj3);
  obj.children = items3;
  const items4 = [
    callback2(View, obj),
    memo1.map((arr) => {
      let obj = {};
      obj = {
        style: tmp.row,
        children: arr.map((arg0, arg1) => {
          let obj = { height: arg1, width: arg1 };
          const tmp = callback(closure_2[8]);
          obj = { itemIndex: arg1 * closure_5 + arg1, numItems: length.length, numColumns: closure_5, spacing: closure_6 };
          obj.style = arg1(closure_2[12]).getMediaGridItemStyles(obj);
          return callback2(tmp, obj, arg1);
        })
      };
      const items = [callback2(memo1, obj), ];
      let tmp2 = arg1 < memo1.length - 1;
      if (tmp2) {
        tmp2 = callback2(arg1(tmp[13]).MediaVerticalSeparator, {});
      }
      items[1] = tmp2;
      obj.children = items;
      return closure_8(memo.Fragment, obj, arg1);
    })
  ];
  obj.children = items4;
  return callback2(importDefault(dependencyMap[7]).View, obj);
};

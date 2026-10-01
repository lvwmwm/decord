// Module ID: 12748
// Function ID: 12749
// Name: EditCollectiblesPickerList
// Dependencies: [32, 19, 17, 21, 4836, 12743, 4832, 12, 8179, 2]
// Exports: EditCollectiblesPickerList

// Module 12748 (EditCollectiblesPickerList)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 4832 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 12743 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let header;

let closure_4;
let hasOwnProperty;
let obj2;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let obj = { list: { flex: 1, marginTop: 12 }, listContent: { paddingBottom: 88 }, loadingContainer: { paddingVertical: 80, alignItems: "center" }, header: obj2 };
obj2 = { paddingHorizontal: useCollectibleListLayout.GUTTER_SIZE, paddingTop: 10, paddingBottom: 5 };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = react.memo((header) => {
  header = header.header;
  return <hasOwnProperty style={closure_7().header}>{jsx(Text_Text.Heading, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: header })}</hasOwnProperty>;
});
const result = size.fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

export const EditCollectiblesPickerList = function EditCollectiblesPickerList(sections) {
  let _undefined;
  let c4;
  let tmp17;
  let tmp3;
  sections = sections.sections;
  const selectedSkuId = sections.selectedSkuId;
  const renderRow = sections.renderRow;
  let flag = sections.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  let listContent = sections.contentContainerStyle;
  c4 = undefined;
  const tmp = closure_7();
  let obj = flag;
  let num = 0;
  [tmp3, c4] = renderRow(flag.useState(0), 2);
  const tmp2 = renderRow(flag.useState(0), 2);
  const callback = flag.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (tmp3 > 0) {
    const diff = tmp3 - 4 * sections(selectedSkuId[5]).GUTTER_SIZE;
    num = diff / sections(selectedSkuId[5]).ROW_SIZE;
  }
  let items = [sections, flag];
  const items1 = [renderRow, num, selectedSkuId];
  const memo = obj.useMemo(() => {
    let items = [];
    if (flag) {
      return items;
    } else {
      let item = sections.forEach((header) => {
        items = header;
        let obj = { type: "header", key: "header-" + header.section, header: header.header };
        items.push(obj);
        const obj2 = items(closure_1_1[7]);
        const chunkResult = obj2.chunk(header.items, items(closure_1_1[5]).ROW_SIZE);
        const item = chunkResult.forEach((items, index) => {
          const obj = { type: "row", key: "row-" + header.section + "-" + index, items };
          items.push(obj);
        });
      });
      return items;
    }
  }, items);
  const callback1 = obj.useCallback((item) => {
    let tmp4;
    item = item.item;
    if ("header" === item.type) {
      tmp4 = <closure_8 header={item.header} />;
    } else {
      const obj = { items: item.items, size: num, selectedSkuId };
      tmp4 = renderRow(obj);
    }
    return tmp4;
  }, items1);
  const callback2 = obj.useCallback((type) => type.type, []);
  let obj2 = { style: null, children: null };
  if (flag) {
    obj2.style = tmp.loadingContainer;
    obj2.children = <c4 animating size="large" />;
    tmp17 = obj2;
  } else {
    obj2.style = tmp.list;
    const BottomSheetFlashList = sections(selectedSkuId[8]).BottomSheetFlashList;
    if (listContent == null) {
      listContent = tmp.listContent;
    }
    obj2.children = <BottomSheetFlashList data={memo} renderItem={callback1} getItemType={callback2} keyExtractor={tmp11} extraData={selectedSkuId} contentContainerStyle={listContent} onLayout={callback} keyboardShouldPersistTaps="always" />;
    tmp17 = obj2;
  }
  return <tmp13 {...tmp17} />;
};

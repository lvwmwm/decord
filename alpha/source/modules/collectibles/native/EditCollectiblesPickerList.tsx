// Module ID: 15038
// Function ID: 15039
// Name: EditCollectiblesPickerList
// Dependencies: [32, 19, 17, 21, 5009, 15033, 5619, 12, 7288, 2]
// Exports: EditCollectiblesPickerList

// Module 15038 (EditCollectiblesPickerList)
import Text_Text from "Text/Text" /* 5619 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 15033 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { list: { flex: 1 }, listContent: { paddingBottom: 88 }, loadingContainer: { paddingVertical: 80, alignItems: "center" }, header: obj2 };
obj2 = { paddingHorizontal: useCollectibleListLayout.GUTTER_SIZE, paddingBottom: 5 };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = react.memo(function DefaultHeader(header) {
  header = header.header;
  const obj = { style: closure_9().header, children: metroRequire(Text_Text.Heading, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: header }) };
  return metroRequire(hasOwnProperty, obj);
});
const result = size.fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

export function EditCollectiblesPickerList(sections) {
  let _undefined;
  let c4;
  let items2;
  let obj5;
  let tmp16;
  let tmp3;
  sections = sections.sections;
  const selectedSkuId = sections.selectedSkuId;
  const renderRow = sections.renderRow;
  let flag = sections.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  const ListHeaderComponent = sections.ListHeaderComponent;
  c4 = undefined;
  const tmp = closure_9();
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
      const obj2 = { header: item.header };
      tmp4 = metroRequire(closure_10, obj2);
    } else {
      const obj = { items: item.items, size: num, selectedSkuId };
      tmp4 = renderRow(obj);
    }
    return tmp4;
  }, items1);
  const callback2 = obj.useCallback((type) => type.type, []);
  if (flag) {
    let obj2 = { children: items2 };
    items2 = [ListHeaderComponent, ];
    const obj3 = { style: tmp.loadingContainer, children: closure_6(c4, { animating: true, size: "large" }) };
    items2[1] = closure_6(num, obj3);
    tmp16 = closure_8(closure_7, obj2);
  } else {
    const obj4 = { style: tmp.list, children: closure_6(sections(selectedSkuId[8]).BottomSheetFlashList, obj5) };
    obj5 = { data: memo, renderItem: callback1, ListHeaderComponent, getItemType: callback2, keyExtractor: tmp11, extraData: selectedSkuId, contentContainerStyle: tmp.listContent, onLayout: callback, keyboardShouldPersistTaps: "always" };
    tmp16 = closure_6(num, obj4);
  }
  return tmp16;
}

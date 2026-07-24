// Module ID: 7966
// Function ID: 63040
// Name: EditCollectiblesPickerList
// Dependencies: [57, 31, 27, 33, 4130, 7954, 4126, 22, 7527, 2]
// Exports: EditCollectiblesPickerList

// Module 7966 (EditCollectiblesPickerList)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ ActivityIndicator: closure_4, View: closure_5 } = get_ActivityIndicator);
let obj = { list: { flex: 1, marginTop: 12 }, listContent: { paddingBottom: 88 }, loadingContainer: { paddingVertical: 80, alignItems: "center" } };
obj = { paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE, paddingTop: 10, paddingBottom: 5 };
obj.header = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_8 = importAllResult.memo((header) => {
  obj = { style: callback().header, children: jsx(require(4126) /* Text */.Heading, obj) };
  obj = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: header.header };
  return <closure_5 variant="heading-sm/medium" color="mobile-text-heading-primary">{arg0.header}</closure_5>;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

export const EditCollectiblesPickerList = function EditCollectiblesPickerList(sections) {
  sections = sections.sections;
  const selectedSkuId = sections.selectedSkuId;
  const renderRow = sections.renderRow;
  let flag = sections.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  let listContent = sections.contentContainerStyle;
  let closure_4;
  let num;
  const tmp = callback();
  num = 0;
  const tmp2 = renderRow(flag.useState(0), 2);
  const first = tmp2[0];
  closure_4 = tmp2[1];
  callback = flag.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (first > 0) {
    const diff = first - 4 * sections(selectedSkuId[5]).GUTTER_SIZE;
    num = diff / sections(selectedSkuId[5]).ROW_SIZE;
  }
  let items = [sections, flag];
  const items1 = [renderRow, num, selectedSkuId];
  const memo = flag.useMemo(() => {
    let items = [];
    if (flag) {
      return items;
    } else {
      let item = items.forEach((header) => {
        const items = header;
        items.push({ type: "header", key: "header-" + header.section, header: header.header });
        const obj = { type: "header", key: "header-" + header.section, header: header.header };
        const obj2 = sections(selectedSkuId[7]);
        const item = sections(selectedSkuId[7]).chunk(header.items, sections(selectedSkuId[5]).ROW_SIZE).forEach((items) => {
          header.push({ type: "row", key: "row-" + header.section + "-" + arg1, items });
        });
      });
      return items;
    }
  }, items);
  const callback1 = flag.useCallback((item) => {
    item = item.item;
    if ("header" === item.type) {
      let obj = { header: item.header };
      let tmp4 = outer1_6(outer1_8, obj);
    } else {
      obj = { items: item.items, size: num, selectedSkuId };
      tmp4 = renderRow(obj);
    }
    return tmp4;
  }, items1);
  const callback2 = flag.useCallback((type) => type.type, []);
  let obj = {};
  if (flag) {
    obj.style = tmp.loadingContainer;
    obj.children = <closure_4 animating size="large" />;
    let tmp18 = obj;
  } else {
    obj.style = tmp.list;
    obj = { data: memo, renderItem: callback1, getItemType: callback2, keyExtractor: tmp11, extraData: selectedSkuId };
    if (null == listContent) {
      listContent = tmp.listContent;
    }
    obj.contentContainerStyle = listContent;
    obj.onLayout = callback;
    obj.keyboardShouldPersistTaps = "always";
    obj.children = jsx(sections(selectedSkuId[8]).BottomSheetFlashList, { data: memo, renderItem: callback1, getItemType: callback2, keyExtractor: tmp11, extraData: selectedSkuId });
    tmp18 = obj;
    const tmp14 = jsx;
  }
  return <num {...tmp18} />;
};

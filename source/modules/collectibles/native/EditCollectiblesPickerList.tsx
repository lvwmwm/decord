// Module ID: 7871
// Function ID: 62663
// Name: EditCollectiblesPickerList
// Dependencies: []
// Exports: EditCollectiblesPickerList

// Module 7871 (EditCollectiblesPickerList)
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let obj = { list: { <string:2823905889>: false, <string:2001293998>: false }, listContent: { paddingBottom: 88 }, loadingContainer: {} };
obj = { paddingHorizontal: arg1(dependencyMap[5]).GUTTER_SIZE };
obj.header = obj;
let closure_7 = arg1(dependencyMap[4]).createStyles(obj);
let closure_8 = importAllResult.memo((children) => <closure_5 style={callback2().header}>{jsx(arg1(dependencyMap[6]).Heading, { children: arg0.header })}</closure_5>);
const obj2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

export const EditCollectiblesPickerList = function EditCollectiblesPickerList(sections) {
  sections = sections.sections;
  const arg1 = sections;
  const selectedSkuId = sections.selectedSkuId;
  const dependencyMap = selectedSkuId;
  const renderRow = sections.renderRow;
  let callback = renderRow;
  let flag = sections.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  let listContent = sections.contentContainerStyle;
  let closure_4;
  let num;
  const tmp = callback2();
  num = 0;
  const tmp2 = callback(flag.useState(0), 2);
  const first = tmp2[0];
  closure_4 = tmp2[1];
  callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (first > 0) {
    const diff = first - 4 * arg1(dependencyMap[5]).GUTTER_SIZE;
    num = diff / arg1(dependencyMap[5]).ROW_SIZE;
  }
  const items = [sections, flag];
  const items1 = [renderRow, num, selectedSkuId];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    if (flag) {
      return items;
    } else {
      const sections = items;
      const item = sections.forEach((header) => {
        const items = header;
        items.push({ type: "header", key: "header-" + header.section, header: header.header });
        const obj = { type: "header", key: "header-" + header.section, header: header.header };
        const obj2 = items(closure_1[7]);
        const item = items(closure_1[7]).chunk(header.items, items(closure_1[5]).ROW_SIZE).forEach((items) => {
          items.push({ type: "row", key: "row-" + items.section + "-" + arg1, items });
        });
      });
      return items;
    }
  }, items);
  const callback1 = importAllResult.useCallback((item) => {
    item = item.item;
    if ("header" === item.type) {
      let obj = { header: item.header };
      let tmp4 = callback2(closure_8, obj);
    } else {
      obj = { items: item.items, size: num, selectedSkuId };
      tmp4 = renderRow(obj);
    }
    return tmp4;
  }, items1);
  const callback2 = importAllResult.useCallback((type) => type.type, []);
  let obj = {};
  if (flag) {
    obj.style = tmp.loadingContainer;
    obj.children = <closure_4 />;
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
    obj.children = jsx(arg1(dependencyMap[8]).BottomSheetFlashList, obj);
    tmp18 = obj;
    const tmp14 = jsx;
  }
  return <num {...tmp18} />;
};

// Module ID: 14759
// Function ID: 14760
// Name: EditCollectiblesPickerList
// Dependencies: [32, 19, 17, 21, 5004, 14754, 558, 576, 5270, 12, 7256, 2]

// Module 14759 (EditCollectiblesPickerList)
import react2 from "react" /* 576 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 14754 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const Text_Text = tmp(5270);
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { list: { flex: 1 }, listContent: { paddingBottom: 88 }, loadingContainer: { paddingVertical: 80, alignItems: "center" }, header: obj2 };
obj2 = { paddingHorizontal: useCollectibleListLayout.GUTTER_SIZE, paddingBottom: 5 };
let closure_9 = createStyles.createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function DefaultHeader(header) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  header = header.header;
  const tmp4 = closure_9();
  if (cResult[0] !== header) {
    const obj2 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: header };
    const tmp7 = metroRequire(Text_Text.Heading, obj2);
    cResult[0] = header;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.header) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = { style: tmp4.header, children: tmp5 };
  const tmp9 = metroRequire(hasOwnProperty, obj3);
  cResult[2] = tmp4.header;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function DefaultHeader(header) {
  header = header.header;
  const obj = { style: closure_9().header, children: metroRequire(Text_Text.Heading, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: header }) };
  return metroRequire(hasOwnProperty, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditCollectiblesPickerList(renderRow) {
  let ListHeaderComponent;
  let closure_3;
  let first;
  let isFetching;
  let items2;
  let sections;
  let selectedSkuId;
  let tmp10;
  let tmp26;
  let tmp7;
  let obj = selectedSkuId(renderRow[7]);
  const cResult = obj.c(25);
  ({ sections, selectedSkuId } = renderRow);
  renderRow = renderRow.renderRow;
  ({ isFetching, ListHeaderComponent } = renderRow);
  let tmp4 = undefined !== isFetching && isFetching;
  const tmp5 = closure_9();
  const tmp6 = _slicedToArray(react.useState(0), 2);
  [tmp7, _slicedToArray] = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(nativeEvent) {
      _slicedToArray(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let num = 0;
  if (tmp7 > 0) {
    const diff = tmp7 - 4 * tmp(tmp2[5]).GUTTER_SIZE;
    num = diff / tmp(tmp2[5]).ROW_SIZE;
  }
  if (tmp4) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[1] = items;
      tmp12 = items;
    } else {
      tmp12 = cResult[1];
    }
    tmp10 = tmp12;
  } else if (cResult[2] !== sections) {
    const items1 = [];
    react = items1;
    let item = sections.forEach((header) => {
      let obj = { type: "header", key: "header-" + header.section, header: header.header };
      closure_3.push(obj);
      const obj2 = selectedSkuId(renderRow[9]);
      const chunkResult = obj2.chunk(header.items, selectedSkuId(renderRow[5]).ROW_SIZE);
      const item = chunkResult.forEach((items, index) => {
        const obj = { type: "row", key: "row-" + header.section + "-" + index, items };
        closure_3.push(obj);
      });
    });
    cResult[2] = sections;
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    react = cResult[3];
  }
  if (cResult[4] === num) {
    if (cResult[5] === renderRow) {
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp19;
      if (cResult[6] === selectedSkuId) {
        tmp13 = cResult[7];
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor(type) {
            return type.type;
          }
        }
        cResult[8] = O;
        tmp14 = O;
      } else {
        class O {
          constructor(type) {
            return type.type;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor(key) {
            return key.key;
          }
        }
        cResult[9] = D;
        tmp15 = D;
      } else {
        class D {
          constructor(key) {
            return key.key;
          }
        }
      }
      if (tmp4) {
        let tmp20;
        class D {
          constructor(key) {
            return key.key;
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(key) {
              return key.key;
            }
          }
          const tmp22 = closure_6(num, { animating: true, size: "large" });
          cResult[10] = tmp22;
          tmp20 = tmp22;
        } else {
          class D {
            constructor(key) {
              return key.key;
            }
          }
        }
        if (cResult[11] !== tmp5.loadingContainer) {
          class D {
            constructor(key) {
              return key.key;
            }
          }
          let obj2 = { style: tmp5.loadingContainer, children: tmp20 };
          cResult[11] = tmp5.loadingContainer;
          cResult[12] = closure_6(closure_5, obj2);
          const tmp25 = closure_6(closure_5, obj2);
        } else {
          class D {
            constructor(key) {
              return key.key;
            }
          }
        }
        if (cResult[13] === ListHeaderComponent) {
          class D {
            constructor(key) {
              return key.key;
            }
          }
          tmp19 = tmp26;
        }
        const obj3 = { children: items2 };
        items2 = [ListHeaderComponent, tmp23];
        const tmp29 = closure_8(closure_7, obj3);
        cResult[13] = ListHeaderComponent;
        cResult[14] = tmp23;
        cResult[15] = tmp29;
        tmp26 = tmp29;
      } else {
        class D {
          constructor(key) {
            return key.key;
          }
        }
        const obj4 = { data: tmp10, renderItem: tmp13, ListHeaderComponent, getItemType: tmp14, keyExtractor: tmp15, extraData: selectedSkuId, contentContainerStyle: tmp5.listContent, onLayout: first, keyboardShouldPersistTaps: "always" };
        cResult[16] = ListHeaderComponent;
        cResult[17] = tmp10;
        cResult[18] = tmp13;
        cResult[19] = selectedSkuId;
        cResult[20] = tmp5.listContent;
        cResult[21] = closure_6(selectedSkuId(renderRow[10]).BottomSheetFlashList, obj4);
        const tmp18 = closure_6(selectedSkuId(renderRow[10]).BottomSheetFlashList, obj4);
      }
      return tmp19;
    }
  }
  const fn2 = function $(item) {
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
  };
  cResult[4] = num;
  cResult[5] = renderRow;
  cResult[6] = selectedSkuId;
  cResult[7] = fn2;
  tmp13 = fn2;
}) : (function EditCollectiblesPickerList(sections) {
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
        const obj2 = items(closure_1_1[9]);
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
    const obj4 = { style: tmp.list, children: closure_6(sections(selectedSkuId[10]).BottomSheetFlashList, obj5) };
    obj5 = { data: memo, renderItem: callback1, ListHeaderComponent, getItemType: callback2, keyExtractor: tmp11, extraData: selectedSkuId, contentContainerStyle: tmp.listContent, onLayout: callback, keyboardShouldPersistTaps: "always" };
    tmp16 = closure_6(num, obj4);
  }
  return tmp16;
});
const result = size.fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

export const EditCollectiblesPickerList = tmp5;

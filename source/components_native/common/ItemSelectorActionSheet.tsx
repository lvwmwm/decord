// Module ID: 8382
// Function ID: 66760
// Name: ItemSelectorActionSheet
// Dependencies: [31, 33, 3834, 689, 1557, 5187, 5186, 5501, 5189, 7519, 7518, 2]
// Exports: default

// Module 8382 (ItemSelectorActionSheet)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("map").fileFinishedImporting("components_native/common/ItemSelectorActionSheet.tsx");

export default function ItemSelectorActionSheet(arg0) {
  let body;
  let dependencyMap;
  let hasIcons;
  let importDefault;
  let items;
  let onClose;
  let title;
  ({ title, items } = arg0);
  ({ selectedItem: importDefault, onItemSelect: dependencyMap, onClose } = arg0);
  ({ body, hasIcons } = arg0);
  let obj = items(3834);
  const token = obj.useToken(importDefault(689).modules.mobile.TABLE_ROW_PADDING);
  const findIndexResult = items.findIndex((value) => value.value === closure_1);
  obj = { scrollable: true };
  obj = { title };
  let tmp4 = null;
  if (null != onClose) {
    const obj1 = { onPress: onClose };
    tmp4 = callback(items(5501).ActionSheetCloseButton, obj1);
  }
  obj.trailing = tmp4;
  obj.header = callback(items(5186).BottomSheetTitleHeader, obj);
  const obj2 = {};
  const obj3 = { paddingHorizontal: token, paddingBottom: importDefault(1557)().bottom + importDefault(689).space.PX_16 };
  obj2.contentContainerStyle = obj3;
  items = [body, ];
  const obj4 = {};
  let num2 = -1;
  if (findIndexResult >= 0) {
    num2 = findIndexResult;
  }
  obj4.value = num2;
  obj4.accessibilityLabel = title;
  obj4.hasIcons = hasIcons;
  obj4.onChange = function onChange(arg0) {
    if (null != items[arg0]) {
      callback(iter.value);
    }
  };
  obj4.children = items.map((label, value) => outer1_3(items(outer1_2[10]).TableRadioRow, { label: label.label, value }, value));
  items[1] = callback(items(7519).TableRadioGroup, obj4);
  obj2.children = items;
  obj.children = closure_4(items(5189).BottomSheetScrollView, obj2);
  return callback(items(5187).BottomSheet, obj);
};

// Module ID: 8375
// Function ID: 66700
// Name: ItemSelectorActionSheet
// Dependencies: []
// Exports: default

// Module 8375 (ItemSelectorActionSheet)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("components_native/common/ItemSelectorActionSheet.tsx");

export default function ItemSelectorActionSheet(arg0) {
  let body;
  let hasIcons;
  let items;
  let onClose;
  let title;
  ({ title, items } = arg0);
  const arg1 = items;
  ({ selectedItem: closure_1, onItemSelect: closure_2, onClose } = arg0);
  ({ body, hasIcons } = arg0);
  let obj = arg1(dependencyMap[2]);
  const token = obj.useToken(importDefault(dependencyMap[3]).modules.mobile.TABLE_ROW_PADDING);
  const findIndexResult = items.findIndex((value) => value.value === closure_1);
  obj = { scrollable: true };
  obj = { title };
  let tmp4 = null;
  if (null != onClose) {
    const obj1 = { onPress: onClose };
    tmp4 = callback(arg1(dependencyMap[7]).ActionSheetCloseButton, obj1);
  }
  obj.trailing = tmp4;
  obj.header = callback(arg1(dependencyMap[6]).BottomSheetTitleHeader, obj);
  const obj2 = {};
  const obj3 = { paddingHorizontal: token, paddingBottom: importDefault(dependencyMap[4])().bottom + importDefault(dependencyMap[3]).space.PX_16 };
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
  obj4.children = items.map((label, value) => callback2(items(closure_2[10]).TableRadioRow, { label: label.label, value }, value));
  items[1] = callback(arg1(dependencyMap[9]).TableRadioGroup, obj4);
  obj2.children = items;
  obj.children = closure_4(arg1(dependencyMap[8]).BottomSheetScrollView, obj2);
  return callback(arg1(dependencyMap[5]).BottomSheet, obj);
};

// Module ID: 9002
// Function ID: 9003
// Name: ItemSelectorActionSheet
// Dependencies: [19, 21, 5596, 575, 1625, 5272, 7321, 7367, 5275, 7058, 7061, 2]
// Exports: default

// Module 9002 (ItemSelectorActionSheet)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("components_native/common/ItemSelectorActionSheet.tsx");

export default function ItemSelectorActionSheet(arg0) {
  let BottomSheetScrollView;
  let body;
  let hasIcons;
  let items;
  let items1;
  let obj5;
  let obj6;
  let onClose;
  let title;
  let tmp6Result;
  let tmp8;
  ({ title, items } = arg0);
  ({ selectedItem: importDefault, onItemSelect: dependencyMap, onClose } = arg0);
  ({ body, hasIcons } = arg0);
  let obj = items(5596);
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const findIndexResult = items.findIndex((value) => value.value === importDefault);
  BottomSheet = items(5272).BottomSheet;
  const obj2 = { title, trailing: tmp6Result };
  tmp6Result = null;
  const BottomSheetTitleHeader = items(7321).BottomSheetTitleHeader;
  if (null != onClose) {
    const obj3 = { onPress: onClose };
    tmp6Result = tmp6(tmp(7367).ActionSheetCloseButton, obj3);
  }
  const obj4 = { scrollable: true, header: closure_3(BottomSheetTitleHeader, obj2), children: tmp8(BottomSheetScrollView, obj5) };
  obj5 = { contentContainerStyle: obj6, children: items1 };
  obj6 = { paddingHorizontal: token, paddingBottom: bottom + nativeDefault.space.PX_16 };
  BottomSheetScrollView = tmp(5275).BottomSheetScrollView;
  items1 = [body, ];
  let num = -1;
  const TableRadioGroup = tmp(7058).TableRadioGroup;
  tmp8 = closure_4;
  if (findIndexResult >= 0) {
    num = findIndexResult;
  }
  const obj7 = {
    value: num,
    accessibilityLabel: title,
    hasIcons,
    onChange: function handleChange(arg0) {
      if (null != items[arg0]) {
        dependencyMap(items[arg0].value);
      }
    },
    children: items.map((label, value) => {
      const obj = { label: label.label, value };
      return closure_1_3(items(dependencyMap[10]).TableRadioRow, obj, value);
    })
  };
  items1[1] = closure_3(TableRadioGroup, obj7);
  return closure_3(BottomSheet, obj4);
};

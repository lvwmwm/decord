// Module ID: 7944
// Function ID: 7945
// Name: ItemSelectorActionSheet
// Dependencies: [19, 21, 5839, 575, 1627, 5503, 7847, 7886, 5507, 7679, 7681, 2]
// Exports: default

// Module 7944 (ItemSelectorActionSheet)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

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
  let obj = items(5839);
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const findIndexResult = items.findIndex((value) => value.value === importDefault);
  const BottomSheet = items(5503).BottomSheet;
  const obj2 = { title, trailing: tmp6Result };
  tmp6Result = null;
  const BottomSheetTitleHeader = items(7847).BottomSheetTitleHeader;
  if (null != onClose) {
    const obj3 = { onPress: onClose };
    tmp6Result = tmp6(tmp(7886).ActionSheetCloseButton, obj3);
  }
  const obj4 = { scrollable: true, header: closure_3(BottomSheetTitleHeader, obj2), children: tmp8(BottomSheetScrollView, obj5) };
  obj5 = { contentContainerStyle: obj6, children: items1 };
  obj6 = { paddingHorizontal: token, paddingBottom: bottom + nativeDefault.space.PX_16 };
  BottomSheetScrollView = tmp(5507).BottomSheetScrollView;
  items1 = [body, ];
  let num = -1;
  const TableRadioGroup = tmp(7679).TableRadioGroup;
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

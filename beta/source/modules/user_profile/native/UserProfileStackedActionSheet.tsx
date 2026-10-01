// Module ID: 10613
// Function ID: 10614
// Name: UserProfileStackedActionSheet
// Dependencies: [19, 17, 21, 4836, 576, 1613, 6045, 8053, 1364, 6571, 5435, 1115, 5940, 4832, 2]
// Exports: UserProfileStackedActionSheetList, UserProfileStackedActionSheetSectionList, default

// Module 10613 (UserProfileStackedActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5940 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import Form from "Form" /* 8053 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerSpacer: size, list: { flex: 1 }, contentContainer: obj3, divider: { marginLeft: 64 } };
obj2 = { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24 };
obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileStackedActionSheet.tsx");

export default function UserProfileStackedActionSheet(onBack) {
  let children;
  let intl;
  let items1;
  let obj2;
  let title;
  let tmp8;
  onBack = onBack.onBack;
  ({ title, children } = onBack);
  const merged = Object.assign(onBack, Object.assign({ title: 0, children: 0, onBack: 0 }));
  const tmp2 = closure_6();
  let tmp4Result2 = null != onBack;
  const obj = { header: tmp8(View, obj2), children };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged1 = Object.assign(merged);
  const items = [tmp2.header, ];
  let str = "center";
  tmp8 = hasOwnProperty;
  if (tmp4Result2) {
    str = "space-between";
  }
  obj2 = { style: items, children: items1 };
  items[1] = { justifyContent: str };
  let tmp4Result = tmp4Result2;
  if (tmp4Result) {
    const obj3 = { accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t["13/7kX"]), onPress: onBack, children: React3(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" }) };
    const PressableOpacity = tmp5(5435).PressableOpacity;
    intl = tmp5(1115).intl;
    tmp4Result = tmp4(PressableOpacity, obj3);
  }
  items1 = [tmp4Result, React3(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title }), ];
  if (tmp4Result2) {
    const obj4 = { style: tmp2.headerSpacer };
    tmp4Result2 = tmp4(tmp9, obj4);
  }
  items1[2] = tmp4Result2;
  return React3(BottomSheet, obj);
};
export const UserProfileStackedActionSheetList = function UserProfileStackedActionSheetList(data) {
  let divider;
  let items;
  data = data.data;
  const renderItem = data.renderItem;
  const contentContainerStyle = data.contentContainerStyle;
  const merged = Object.assign(data, Object.assign({ data: 0, contentContainerStyle: 0, renderItem: 0 }));
  const tmp2 = closure_6();
  dependencyMap = tmp2;
  const bottom = renderItem(1613)().bottom;
  let obj = {
    data,
    style: tmp2.list,
    ItemSeparatorComponent() {
      const obj = { style: divider.divider };
      return React3(Form.FormDivider, obj);
    },
    contentContainerStyle: items,
    renderItem(index) {
      index = index.index;
      const obj = { item: index.item, index, start: 0 === index, end: index === data.length - 1 };
      return renderItem(obj);
    }
  };
  const BottomSheetFlatList = data(6045).BottomSheetFlatList;
  const merged1 = Object.assign(merged);
  items = [tmp2.contentContainer, , ];
  let num = 0;
  const obj2 = data(1364);
  const tmp3 = renderItem;
  const tmp5 = closure_4;
  if (obj2.isAndroid()) {
    num = tmp3(576).space.PX_16;
  }
  items[1] = { paddingBottom: bottom + num };
  items[2] = contentContainerStyle;
  return tmp5(BottomSheetFlatList, obj);
};
export const UserProfileStackedActionSheetSectionList = function UserProfileStackedActionSheetSectionList(renderItem) {
  renderItem = renderItem.renderItem;
  const contentContainerStyle = renderItem.contentContainerStyle;
  const merged = Object.assign(renderItem, Object.assign({ contentContainerStyle: 0, renderItem: 0 }));
  const divider = closure_6();
  let obj = {
    contentContainerStyle,
    renderItem(index) {
      index = index.index;
      const obj = { item: index.item, start: 0 === index, end: index === index.section.data.length - 1 };
      return renderItem(obj);
    },
    ItemSeparatorComponent() {
      const obj = { style: divider.divider };
      return React3(Form.FormDivider, obj);
    }
  };
  const BottomSheetSectionList = renderItem(6045).BottomSheetSectionList;
  const merged1 = Object.assign(merged);
  return closure_4(BottomSheetSectionList, obj);
};

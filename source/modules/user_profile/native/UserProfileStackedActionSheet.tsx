// Module ID: 11637
// Function ID: 90340
// Name: UserProfileStackedActionSheet
// Dependencies: [31, 27, 33, 4130, 689, 1557, 5189, 7495, 477, 5187, 4660, 1212, 5091, 4126, 2]
// Exports: UserProfileStackedActionSheetList, UserProfileStackedActionSheetSectionList, default

// Module 11637 (UserProfileStackedActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerSpacer = { width: require("_createForOfIteratorHelperLoose").space.PX_24, height: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.list = { flex: 1 };
let obj1 = { width: require("_createForOfIteratorHelperLoose").space.PX_24, height: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.contentContainer = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.divider = { marginLeft: 64 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileStackedActionSheet.tsx");

export default function UserProfileStackedActionSheet(onBack) {
  let children;
  let title;
  onBack = onBack.onBack;
  let obj = { title: 0, children: 0, onBack: 0 };
  ({ title, children } = onBack);
  Object.setPrototypeOf(null);
  const merged = Object.assign(onBack, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  let tmp4 = null != onBack;
  obj = {};
  const merged1 = Object.assign(merged);
  obj = {};
  const items = [tmp3.header, ];
  const obj1 = {};
  let str = "center";
  if (tmp4) {
    str = "space-between";
  }
  obj1.justifyContent = str;
  items[1] = obj1;
  obj.style = items;
  let tmp9 = tmp4;
  if (tmp4) {
    const obj2 = { accessibilityRole: "button" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj2.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
    obj2.onPress = onBack;
    const obj3 = { size: "md" };
    obj2.children = callback(require(5091) /* ArrowLargeLeftIcon */.ArrowLargeLeftIcon, obj3);
    tmp9 = callback(require(4660) /* PressableBase */.PressableOpacity, obj2);
  }
  const items1 = [tmp9, , ];
  const obj4 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  items1[1] = callback(require(4126) /* Text */.Text, obj4);
  if (tmp4) {
    const obj5 = { style: tmp3.headerSpacer };
    tmp4 = callback(View, obj5);
  }
  items1[2] = tmp4;
  obj.children = items1;
  obj["header"] = closure_5(View, obj);
  obj["children"] = children;
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
export const UserProfileStackedActionSheetList = function UserProfileStackedActionSheetList(data) {
  data = data.data;
  const renderItem = data.renderItem;
  let obj = { data: 0, contentContainerStyle: 0, renderItem: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(data, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp3;
  obj = {};
  const merged1 = Object.assign(merged);
  obj["data"] = data;
  obj["style"] = tmp3.list;
  obj["ItemSeparatorComponent"] = function ItemSeparatorComponent() {
    return outer1_4(data(tmp3[7]).FormDivider, { style: tmp3.divider });
  };
  const items = [tmp3.contentContainer, , ];
  obj = {};
  let num = 0;
  if (obj4.isAndroid()) {
    num = renderItem(689).space.PX_16;
  }
  obj.paddingBottom = renderItem(1557)().bottom + num;
  items[1] = obj;
  items[2] = data.contentContainerStyle;
  obj["contentContainerStyle"] = items;
  obj["renderItem"] = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, index, start: 0 === index, end: index === data.length - 1 });
  };
  return closure_4(data(5189).BottomSheetFlatList, obj);
};
export const UserProfileStackedActionSheetSectionList = function UserProfileStackedActionSheetSectionList(renderItem) {
  renderItem = renderItem.renderItem;
  let obj = Object.create(null);
  obj.contentContainerStyle = 0;
  obj.renderItem = 0;
  const merged = Object.assign(renderItem, obj);
  let closure_1 = _createForOfIteratorHelperLoose();
  obj = {};
  const merged1 = Object.assign(merged);
  obj["contentContainerStyle"] = renderItem.contentContainerStyle;
  obj["renderItem"] = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, start: 0 === index, end: index === index.section.data.length - 1 });
  };
  obj["ItemSeparatorComponent"] = function ItemSeparatorComponent() {
    return outer1_4(renderItem(outer1_2[7]).FormDivider, { style: divider.divider });
  };
  return callback(renderItem(5189).BottomSheetSectionList, obj);
};

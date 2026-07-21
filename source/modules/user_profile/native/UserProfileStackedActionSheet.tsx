// Module ID: 11626
// Function ID: 90266
// Name: UserProfileStackedActionSheet
// Dependencies: []
// Exports: UserProfileStackedActionSheetList, UserProfileStackedActionSheetSectionList, default

// Module 11626 (UserProfileStackedActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { flexDirection: "row", marginHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.header = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.headerSpacer = { width: importDefault(dependencyMap[4]).space.PX_24, height: importDefault(dependencyMap[4]).space.PX_24 };
obj.list = { flex: 1 };
const obj1 = { width: importDefault(dependencyMap[4]).space.PX_24, height: importDefault(dependencyMap[4]).space.PX_24 };
obj.contentContainer = { marginHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.divider = { marginLeft: 64 };
let closure_6 = obj.createStyles(obj);
const obj2 = { marginHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_profile/native/UserProfileStackedActionSheet.tsx");

export default function UserProfileStackedActionSheet(onBack) {
  let children;
  let title;
  onBack = onBack.onBack;
  let obj = { "Bool(false)": "spring", "Bool(false)": "linear", "Bool(false)": "easeInEaseOut" };
  ({ title, children } = onBack);
  Object.setPrototypeOf(null);
  const merged = Object.assign(onBack, obj);
  const tmp3 = callback2();
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
    const intl = arg1(dependencyMap[11]).intl;
    obj2.accessibilityLabel = intl.string(arg1(dependencyMap[11]).t.13/7kX);
    obj2.onPress = onBack;
    const obj3 = { size: "md" };
    obj2.children = callback(arg1(dependencyMap[12]).ArrowLargeLeftIcon, obj3);
    tmp9 = callback(arg1(dependencyMap[10]).PressableOpacity, obj2);
  }
  const items1 = [tmp9, , ];
  const obj4 = { 1655478700: 17, 72438626: "message_display_compact", 1446732292: "message", children: title };
  items1[1] = callback(arg1(dependencyMap[13]).Text, obj4);
  if (tmp4) {
    const obj5 = { style: tmp3.headerSpacer };
    tmp4 = callback(View, obj5);
  }
  items1[2] = tmp4;
  obj.children = items1;
  obj["header"] = closure_5(View, obj);
  obj["children"] = children;
  return callback(arg1(dependencyMap[9]).BottomSheet, obj);
};
export const UserProfileStackedActionSheetList = function UserProfileStackedActionSheetList(data) {
  data = data.data;
  const arg1 = data;
  const importDefault = data.renderItem;
  let obj = { updateVideoStreamId: "spring", code: "linear", onPressClose: "easeInEaseOut" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(data, obj);
  const tmp3 = callback2();
  const dependencyMap = tmp3;
  obj = {};
  const merged1 = Object.assign(merged);
  obj["data"] = data;
  obj["style"] = tmp3.list;
  obj["ItemSeparatorComponent"] = function ItemSeparatorComponent() {
    return callback(data(tmp3[7]).FormDivider, { style: tmp3.divider });
  };
  const items = [tmp3.contentContainer, , ];
  obj = {};
  let num = 0;
  if (obj4.isAndroid()) {
    num = importDefault(dependencyMap[4]).space.PX_16;
  }
  obj.paddingBottom = importDefault(dependencyMap[5])().bottom + num;
  items[1] = obj;
  items[2] = data.contentContainerStyle;
  obj["contentContainerStyle"] = items;
  obj["renderItem"] = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, index, start: 0 === index, end: index === data.length - 1 });
  };
  return closure_4(arg1(dependencyMap[6]).BottomSheetFlatList, obj);
};
export const UserProfileStackedActionSheetSectionList = function UserProfileStackedActionSheetSectionList(renderItem) {
  const arg1 = renderItem.renderItem;
  let obj = Object.create(null);
  obj.contentContainerStyle = 0;
  obj.renderItem = 0;
  const merged = Object.assign(renderItem, obj);
  let closure_1 = callback2();
  obj = {};
  const merged1 = Object.assign(merged);
  obj["contentContainerStyle"] = renderItem.contentContainerStyle;
  obj["renderItem"] = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, start: 0 === index, end: index === index.section.data.length - 1 });
  };
  obj["ItemSeparatorComponent"] = function ItemSeparatorComponent() {
    return callback(renderItem(closure_2[7]).FormDivider, { style: divider.divider });
  };
  return callback(arg1(dependencyMap[6]).BottomSheetSectionList, obj);
};

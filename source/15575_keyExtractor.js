// Module ID: 15575
// Function ID: 118872
// Name: keyExtractor
// Dependencies: []
// Exports: default

// Module 15575 (keyExtractor)
function keyExtractor(item) {
  return item.item.id;
}
function FriendsEmptyComponent() {
  const tmp = callback3();
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.dz4UlO);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.body = intl2.string(arg1(dependencyMap[7]).t.MBQBI7);
  ({ emptyTitle: obj2.titleStyle, emptyBody: obj2.bodyStyle } = tmp);
  const items = [callback(arg1(dependencyMap[6]).RefreshEmptyState, obj), ];
  obj = {
    onPress() {
      let obj = callback2(closure_2[9]);
      obj.hideActionSheet();
      const rootNavigationRef = callback(closure_2[10]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        obj = { screen: "add-friends" };
        obj = { sourcePage: "Instant Invite Empty State" };
        obj.params = obj;
        rootNavigationRef.navigate("friends", obj);
      }
    },
    accessibilityRole: "link"
  };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl3.string(arg1(dependencyMap[7]).t.a7FVbE);
  obj.hitSlop = { marginTop: "parent", marginVertical: "Array", maxHeight: "isArray", maxWidth: "accessibilityRole" };
  const obj1 = { Promise: "/assets/design/components/Icon/native/redesign/generated/images", marginTop: 24, flags: 24 };
  const items1 = [tmp.goToFriendsLink];
  obj1.style = items1;
  const intl4 = arg1(dependencyMap[7]).intl;
  obj1.children = intl4.string(arg1(dependencyMap[7]).t.a7FVbE);
  obj.children = callback(arg1(dependencyMap[11]).Text, obj1);
  items[1] = callback(arg1(dependencyMap[8]).PressableOpacity, obj);
  obj.children = items;
  return callback2(closure_5, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const Fonts = arg1(dependencyMap[1]).Fonts;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = {};
const tmp2 = arg1(dependencyMap[2]);
const merged = Object.assign(importDefault(dependencyMap[4])(Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj["textTransform"] = "none";
obj["lineHeight"] = 24;
obj.emptyTitle = obj;
const obj1 = {};
const importDefaultResult = importDefault(dependencyMap[4]);
const merged1 = Object.assign(importDefault(dependencyMap[4])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[5]).colors.TEXT_SUBTLE, 16));
obj1["lineHeight"] = 20;
obj1["fontWeight"] = "600";
obj.emptyBody = obj1;
obj.goToFriendsLink = { textAlign: "center" };
let closure_7 = obj.createStyles(obj);
const importDefaultResult1 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetList.tsx");

export default function ActivityInviteSheetList(data) {
  data = data.data;
  const arg1 = data;
  const error = data.error;
  const importDefault = error;
  const getSendState = data.getSendState;
  const dependencyMap = getSendState;
  const isSubmitting = data.isSubmitting;
  const React = isSubmitting;
  const onInviteSent = data.onInviteSent;
  const onPressAvatar = data.onPressAvatar;
  const items = [error, isSubmitting, getSendState, onPressAvatar, onInviteSent, data.length];
  const callback = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    const obj = { start: 0 === index, end: index === data.length - 1, row: item, onPressAvatar, onInviteSent, isSubmitting, error, sendState: getSendState(item) };
    return onInviteSent(error(getSendState[12]), obj);
  }, items);
  let obj = {};
  obj = { paddingBottom: importDefault(dependencyMap[13])({ isKeyboardAwareOnAndroid: false }).insets.bottom + importDefault(dependencyMap[5]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
  obj.contentContainerStyle = obj;
  obj.bounces = false;
  obj.renderItem = callback;
  obj.data = data;
  obj.keyExtractor = keyExtractor;
  obj.keyboardShouldPersistTaps = "always";
  obj.ListEmptyComponent = FriendsEmptyComponent;
  return onInviteSent(arg1(dependencyMap[14]).BottomSheetFlatList, obj);
};

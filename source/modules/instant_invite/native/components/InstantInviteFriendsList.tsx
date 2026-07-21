// Module ID: 12079
// Function ID: 93169
// Name: keyExtractor
// Dependencies: []
// Exports: default

// Module 12079 (keyExtractor)
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
  obj.hitSlop = { "Null": "Array", "Null": "gradientTop", "Null": "EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED", "Null": "showReferralNotificationDot" };
  const obj1 = { "Null": false, "Null": false, "Null": false };
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
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/instant_invite/native/components/InstantInviteFriendsList.tsx");

export default function InstantInviteFriendsList(code) {
  code = code.code;
  const arg1 = code;
  const onPressAvatar = code.onPressAvatar;
  const importDefault = onPressAvatar;
  const onInviteSent = code.onInviteSent;
  const dependencyMap = onInviteSent;
  const data = code.data;
  const React = data;
  const source = code.source;
  const items = [onPressAvatar, onInviteSent, code, source, data.length];
  const callback = React.useCallback((index) => {
    index = index.index;
    return source(onPressAvatar(onInviteSent[12]), { start: 0 === index, end: index === data.length - 1, row: index.item, onPressAvatar, onInviteSent, code, source });
  }, items);
  let obj = {};
  obj = { paddingBottom: importDefault(dependencyMap[5]).space.PX_16 + importDefault(dependencyMap[13])({ isKeyboardAwareOnAndroid: false }).insets.bottom, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
  obj.contentContainerStyle = obj;
  obj.bounces = false;
  obj.renderItem = callback;
  obj.data = data;
  obj.keyExtractor = keyExtractor;
  obj.keyboardShouldPersistTaps = "always";
  obj.ListEmptyComponent = FriendsEmptyComponent;
  return source(arg1(dependencyMap[14]).BottomSheetFlatList, obj);
};

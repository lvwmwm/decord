// Module ID: 9347
// Function ID: 9348
// Name: InstantInviteFriendsList
// Dependencies: [19, 1074, 21, 4836, 5836, 576, 1177, 1115, 5435, 4800, 4693, 4832, 9348, 6402, 6045, 2]
// Exports: default

// Module 9347 (InstantInviteFriendsList)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import InstantInviteRowDefault from "InstantInviteRow" /* 9348 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function keyExtractor(item) {
  return item.item.id;
}
function FriendsEmptyComponent() {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let obj7;
  const tmp = closure_7();
  let obj = { children: items };
  let obj3 = { title: intl.string(intl5.t.dz4UlO), body: intl2.string(intl5.t.MBQBI7), titleStyle: null, bodyStyle: null };
  const RefreshEmptyState = native.RefreshEmptyState;
  intl = intl5.intl;
  intl2 = intl5.intl;
  ({ emptyTitle: obj2.titleStyle, emptyBody: obj2.bodyStyle } = tmp);
  items = [React3(RefreshEmptyState, obj3), ];
  const obj4 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = RootNavigationRef;
      const rootNavigationRef = obj2.getRootNavigationRef();
      if (null != rootNavigationRef) {
        const obj3 = { screen: "add-friends", params: { sourcePage: "Instant Invite Empty State" } };
        rootNavigationRef.navigate("friends", obj3);
      }
    },
    accessibilityRole: "link",
    accessibilityLabel: intl3.string(intl5.t.a7FVbE),
    hitSlop: { top: 8, left: 8, bottom: 8, right: 8 },
    children: React3(Text, obj7)
  };
  const PressableOpacity = Pressables.PressableOpacity;
  intl3 = intl5.intl;
  obj7 = { style: items1, variant: "text-sm/semibold", color: "text-link", children: intl4.string(intl5.t.a7FVbE) };
  items1 = [tmp.goToFriendsLink];
  Text = Text_Text.Text;
  intl4 = intl5.intl;
  items[1] = React3(PressableOpacity, obj4);
  return metroRequire(hasOwnProperty, obj);
}
const Fonts = Constants.Fonts;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { emptyTitle: obj2, emptyBody: obj3, goToFriendsLink: { textAlign: "center" } };
obj2 = { textTransform: "none", lineHeight: 24 };
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3 = { lineHeight: 20, fontWeight: "600" };
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteFriendsList.tsx");

export default function InstantInviteFriendsList(code) {
  let obj2;
  code = code.code;
  const onPressAvatar = code.onPressAvatar;
  const onInviteSent = code.onInviteSent;
  const data = code.data;
  const source = code.source;
  const items = [onPressAvatar, onInviteSent, code, source, data.length];
  const callback = data.useCallback((row) => {
    const index = row.index;
    const obj = { start: 0 === index, end: index === data.length - 1, row: row.item, onPressAvatar, onInviteSent, code, source };
    return React3(InstantInviteRowDefault, obj);
  }, items);
  const insets = onPressAvatar(onInviteSent[13])({ isKeyboardAwareOnAndroid: false }).insets;
  let obj = { contentContainerStyle: obj2, bounces: false, renderItem: callback, data, keyExtractor, keyboardShouldPersistTaps: "always", ListEmptyComponent: FriendsEmptyComponent };
  obj2 = { paddingBottom: onPressAvatar(onInviteSent[5]).space.PX_16 + insets.bottom, paddingHorizontal: onPressAvatar(onInviteSent[5]).space.PX_12 };
  const BottomSheetFlatList = code(onInviteSent[14]).BottomSheetFlatList;
  return source(BottomSheetFlatList, obj);
};

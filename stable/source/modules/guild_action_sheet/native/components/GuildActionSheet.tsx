// Module ID: 14271
// Function ID: 14272
// Name: GuildActionSheet
// Dependencies: [19, 17, 21, 4788, 576, 1612, 8471, 7427, 6901, 1364, 14266, 14272, 14209, 14273, 14276, 7431, 2]

// Module 14271 (GuildActionSheet)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import BottomSheetModal from "BottomSheetModal" /* 6901 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7427 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 7431 */;
import useBottomSheetRef from "useBottomSheetRef" /* 8471 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 14209 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 14266 */;
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems" /* 14272 */;
import GuildActionSheetProgressDefault from "GuildActionSheetProgress" /* 14273 */;
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection" /* 14276 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4788);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, actions: { paddingHorizontal: 16, gap: 24 } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default noop.memo(function GuildActionSheet(arg0) {
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  const bottomSheetRef1 = useBottomSheetRef.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const obj2 = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded, children: null };
  const obj3 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, children: null };
  let num = 0;
  if (obj4.isAndroid()) {
    num = 16;
  }
  obj3.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + num };
  const items = [React4(GuildActionSheetHeaderDefault, { guild }), React4(GuildActionSheetTabItemsDefault, { guild }), , ];
  const obj5 = { style: tmp.actions, children: null };
  const items1 = [React4(GuildActionSheetActions.GuildUnreadAction, { guild }), React4(GuildActionSheetProgressDefault, { guild }), React4(GuildActionSheetActions.GuildActionSheetPrimaryActions, { guild }), React4(GuildActionSheetActions.GuildActionSheetSecondaryActions, { guild }), React4(GuildActionSheetActions.GuildDeveloperOptionAction, { guild }), React4(GuildActionSheetEmojiSectionDefault, { guildId: guild.id })];
  obj5.children = items1;
  items[2] = hasOwnProperty(View, obj5);
  items[3] = React4(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj3.children = items;
  obj2.children = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj3);
  return React4(Sheet_BottomSheet.BottomSheet, obj2);
});

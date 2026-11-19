// Module ID: 15109
// Function ID: 15110
// Name: GuildActionSheet
// Dependencies: [19, 17, 21, 4792, 575, 1630, 8030, 5020, 5024, 1380, 15104, 15110, 15037, 15115, 15118, 5355, 2]

// Module 15109 (GuildActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5020 */;
import BottomSheetModal from "BottomSheetModal" /* 5024 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5355 */;
import react2 from "react" /* 8030 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 15037 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 15104 */;
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems" /* 15110 */;
import GuildActionSheetProgressDefault from "GuildActionSheetProgress" /* 15115 */;
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection" /* 15118 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, actions: { paddingHorizontal: 16, gap: 24 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function GuildActionSheet(arg0) {
  let BottomSheetScrollView;
  let bottomSheetClose;
  let bottomSheetRef;
  let expanded;
  let guild;
  let items;
  let items1;
  let num;
  let obj3;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = react2;
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const obj2 = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded, children: hasOwnProperty(BottomSheetScrollView, obj3) };
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj3 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: bottom + num }, children: items };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  num = 0;
  const obj4 = PlatformUtils;
  if (obj4.isAndroid()) {
    num = 16;
  }
  items = [React3(GuildActionSheetHeaderDefault, { guild }), React3(GuildActionSheetTabItemsDefault, { guild }), , ];
  const obj5 = { style: tmp.actions, children: items1 };
  items1 = [React3(GuildActionSheetActions.GuildUnreadAction, { guild }), React3(GuildActionSheetProgressDefault, { guild }), React3(GuildActionSheetActions.GuildActionSheetPrimaryActions, { guild }), React3(GuildActionSheetActions.GuildActionSheetGameOrganizationActions, { guild }), React3(GuildActionSheetActions.GuildActionSheetSecondaryActions, { guild }), React3(GuildActionSheetActions.GuildDeveloperOptionAction, { guild }), ];
  const obj6 = { guildId: guild.id };
  items1[6] = React3(GuildActionSheetEmojiSectionDefault, obj6);
  items[2] = hasOwnProperty(View, obj5);
  items[3] = React3(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  return React3(BottomSheet, obj2);
});
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default memoResult;

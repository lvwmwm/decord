// Module ID: 15123
// Function ID: 15124
// Name: GuildActionSheet
// Dependencies: [19, 17, 21, 4823, 575, 1630, 8061, 5051, 5055, 1380, 15118, 15124, 15051, 15129, 15132, 5386, 2]

// Module 15123 (GuildActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5051 */;
import BottomSheetModal from "BottomSheetModal" /* 5055 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5386 */;
import react2 from "react" /* 8061 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 15051 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 15118 */;
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems" /* 15124 */;
import GuildActionSheetProgressDefault from "GuildActionSheetProgress" /* 15129 */;
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection" /* 15132 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
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

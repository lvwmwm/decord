// Module ID: 13511
// Function ID: 13512
// Name: GuildActionSheetDirectory
// Dependencies: [19, 17, 21, 4836, 576, 1613, 6571, 6045, 13512, 13455, 2]
// Exports: default

// Module 13511 (GuildActionSheetDirectory)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13455 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 13512 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, actions: { paddingHorizontal: 16, gap: 24 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx");

export default function GuildActionSheetDirectory(arg0) {
  let BottomSheetScrollView;
  let expanded;
  let guild;
  let items;
  let items1;
  let obj2;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = { scrollable: true, startExpanded: expanded, children: hasOwnProperty(BottomSheetScrollView, obj2) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  items = [React3(GuildActionSheetHeaderDefault, { guild }), ];
  const obj3 = { style: tmp.actions, children: items1 };
  items1 = [React3(GuildActionSheetActions.GuildActionSheetDirectoryActions, { guild }), React3(GuildActionSheetActions.GuildDeveloperOptionAction, { guild })];
  items[1] = hasOwnProperty(View, obj3);
  return React3(BottomSheet, obj);
};

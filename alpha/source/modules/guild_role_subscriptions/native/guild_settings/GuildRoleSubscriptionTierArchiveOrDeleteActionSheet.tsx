// Module ID: 19948
// Function ID: 19949
// Name: GuildRoleSubscriptionTierArchiveOrDeleteActionSheet
// Dependencies: [19, 17, 21, 5014, 575, 1625, 38, 19949, 5272, 5275, 5624, 1187, 5634, 5258, 1113, 2]
// Exports: default

// Module 19948 (GuildRoleSubscriptionTierArchiveOrDeleteActionSheet)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5272 */;
import BottomSheetModal from "BottomSheetModal" /* 5275 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import useArchiveOrDeleteDefault from "useArchiveOrDelete" /* 19949 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ TouchableOpacity: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, cancel: { alignSelf: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx");

export default function GuildRoleSubscriptionTierArchiveOrDeleteActionSheet(groupListingId) {
  let BottomSheetScrollView;
  let Text;
  let archiving;
  let buttonText;
  let descriptionText;
  let editStateId;
  let guildId;
  let handleArchiveOrDelete;
  let headerText;
  let intl;
  let items;
  let obj2;
  let obj6;
  let tmp8;
  groupListingId = groupListingId.groupListingId;
  ({ editStateId, guildId } = groupListingId);
  const tmp = closure_7();
  const bottom = useSafeAreaInsetsDefault().bottom;
  _modDef38(null != groupListingId, "group listing id cannot be null");
  const tmp4 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId);
  let deleting = tmp4.deleting;
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, archiving } = tmp4);
  let obj = { style: tmp.container, children: tmp8(BottomSheetScrollView, obj2) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  items = [hasOwnProperty(Text_Text.Text, { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: headerText }), hasOwnProperty(native.Spacer, { size: 12 }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: descriptionText }), hasOwnProperty(native.Spacer, { size: 24 }), , , ];
  const obj3 = { text: buttonText, variant: "destructive", grow: true, onPress: handleArchiveOrDelete, disabled: deleting };
  const Button = components_Button_Button.Button;
  const tmp7 = React3;
  tmp8 = metroRequire;
  if (!deleting) {
    deleting = archiving;
  }
  const obj4 = { backdropOpacity: 0.8, children: hasOwnProperty(tmp7, obj) };
  items[4] = hasOwnProperty(Button, obj3);
  items[5] = hasOwnProperty(native.Spacer, { size: 24 });
  const obj5 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet();
    },
    style: tmp.cancel,
    activeOpacity: 0.5,
    children: hasOwnProperty(Text, obj6)
  };
  obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", children: intl.string(intl2.t["ETE/oC"]) };
  Text = tmp6(5624).Text;
  intl = tmp6(1113).intl;
  items[6] = hasOwnProperty(_false, obj5);
  return hasOwnProperty(BottomSheet, obj4);
};

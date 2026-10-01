// Module ID: 17564
// Function ID: 17565
// Name: GuildRoleSubscriptionTierArchiveOrDeleteActionSheet
// Dependencies: [19, 17, 21, 4836, 576, 1613, 38, 17565, 6571, 6045, 4832, 1177, 5281, 4800, 1115, 2]
// Exports: default

// Module 17564 (GuildRoleSubscriptionTierArchiveOrDeleteActionSheet)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import useArchiveOrDeleteDefault from "useArchiveOrDelete" /* 17565 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  Text = tmp6(4832).Text;
  intl = tmp6(1115).intl;
  items[6] = hasOwnProperty(_false, obj5);
  return hasOwnProperty(BottomSheet, obj4);
};

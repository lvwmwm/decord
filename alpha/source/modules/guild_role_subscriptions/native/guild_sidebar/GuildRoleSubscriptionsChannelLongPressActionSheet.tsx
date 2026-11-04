// Module ID: 18518
// Function ID: 18519
// Name: GuildRoleSubscriptionsChannelLongPressActionSheet
// Dependencies: [19, 17, 4997, 21, 5141, 575, 7502, 7457, 1187, 14604, 1113, 8317, 18413, 11162, 2]
// Exports: default

// Module 18518 (GuildRoleSubscriptionsChannelLongPressActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import ChannelConstants from "ChannelConstants" /* 4997 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7457 */;
import ActionSheet2 from "ActionSheet" /* 7502 */;
import _mod8317 from "module_8317" /* 8317 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 11162 */;
import AssetRegistryDefault from "AssetRegistry" /* 14604 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 18413 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let size;
const View = react_native.View;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { headerIcon: size };
size = { marginRight: 16, tintColor: nativeDefault.colors.CHANNEL_ICON, width: 20, height: 20 };
let closure_7 = createStyles.createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx");

export default function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  let FormLabel;
  let Icon;
  let Icon2;
  let intl;
  let intl2;
  let items;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  ({ guildId: require, onClose: importDefault } = arg0);
  let obj = { children: items };
  const tmp = closure_7();
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj2 = { leading: closure_5(View, obj3), title: intl.string(intl3.t["KzCF/6"]) };
  obj3 = { style: tmp.headerIcon, children: closure_5(Icon, obj4) };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  obj4 = { disableColor: true, source: AssetRegistryDefault };
  Icon = native.Icon;
  intl = intl3.intl;
  items = [closure_5(BottomSheetTitleHeader, obj2), ];
  const obj5 = {
    leading: closure_5(Icon2, obj6),
    label: closure_5(FormLabel, obj7),
    onPress() {
      importDefault();
      const obj = ChannelActionSheetUtils;
      const result = obj.copyGuildChannelOrThreadLink(require, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    }
  };
  const FormRow = _mod8317.FormRow;
  obj6 = { source: AssetRegistryDefault2 };
  Icon2 = native.Icon;
  obj7 = { text: intl2.string(intl3.t.WqhZss) };
  FormLabel = _mod8317.FormLabel;
  intl2 = intl3.intl;
  items[1] = closure_5(FormRow, obj5);
  return closure_6(ActionSheet, obj);
};

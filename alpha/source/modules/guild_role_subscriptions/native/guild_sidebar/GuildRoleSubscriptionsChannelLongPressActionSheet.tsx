// Module ID: 18966
// Function ID: 18967
// Name: GuildRoleSubscriptionsChannelLongPressActionSheet
// Dependencies: [19, 17, 5166, 21, 5310, 575, 7961, 7923, 1187, 14357, 1113, 8117, 18863, 15167, 2]
// Exports: default

// Module 18966 (GuildRoleSubscriptionsChannelLongPressActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import ChannelConstants from "ChannelConstants" /* 5166 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7923 */;
import ActionSheet2 from "ActionSheet" /* 7961 */;
import _mod8117 from "module_8117" /* 8117 */;
import AssetRegistryDefault from "AssetRegistry" /* 14357 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 15167 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 18863 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5310 */;
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
  const FormRow = _mod8117.FormRow;
  obj6 = { source: AssetRegistryDefault2 };
  Icon2 = native.Icon;
  obj7 = { text: intl2.string(intl3.t.WqhZss) };
  FormLabel = _mod8117.FormLabel;
  intl2 = intl3.intl;
  items[1] = closure_5(FormRow, obj5);
  return closure_6(ActionSheet, obj);
};

// Module ID: 16549
// Function ID: 16550
// Name: GuildRoleSubscriptionsChannelLongPressActionSheet
// Dependencies: [19, 17, 2071, 21, 5091, 587, 558, 576, 1200, 12512, 1126, 6835, 16441, 8563, 10301, 6892, 2]

// Module 16549 (GuildRoleSubscriptionsChannelLongPressActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import ChannelConstants from "ChannelConstants" /* 2071 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6835 */;
import ActionSheet2 from "ActionSheet" /* 6892 */;
import Form from "Form" /* 8563 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 10301 */;
import AssetRegistryDefault from "AssetRegistry" /* 12512 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16441 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionsChannelLongPressActionSheet(guildId) {
  let first;
  let intl2;
  let items;
  let tmp13;
  let tmp15;
  let tmp18;
  let tmp22;
  let tmp9;
  let obj = guildId(576);
  const cResult = obj.c(14);
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disableColor: true, source: onClose(12512) };
    const Icon = tmp(1200).Icon;
    const tmp8 = closure_5(Icon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.headerIcon) {
    const obj3 = { style: tmp4.headerIcon, children: first };
    const tmp12 = closure_5(View, obj3);
    cResult[1] = tmp4.headerIcon;
    cResult[2] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(guildId(1126).t["KzCF/6"]);
    cResult[3] = stringResult;
    tmp13 = stringResult;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== tmp9) {
    const obj4 = { leading: tmp9, title: tmp13 };
    const tmp17 = closure_5(guildId(6835).BottomSheetTitleHeader, obj4);
    cResult[4] = tmp9;
    cResult[5] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { source: onClose(16441) };
    const Icon2 = tmp(1200).Icon;
    const tmp21 = closure_5(Icon2, obj5);
    cResult[6] = tmp21;
    tmp18 = tmp21;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { text: intl2.string(guildId(1126).t.WqhZss) };
    const FormLabel = tmp(8563).FormLabel;
    intl2 = tmp(1126).intl;
    const tmp24 = closure_5(FormLabel, obj6);
    cResult[7] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[7];
  }
  if (cResult[8] === guildId) {
    let tmp25;
    if (cResult[9] === onClose) {
      tmp25 = cResult[10];
    }
    if (cResult[11] === tmp15) {
      let tmp27;
      if (cResult[12] === tmp25) {
        tmp27 = cResult[13];
      }
      return tmp27;
    }
    const obj7 = { children: items };
    items = [tmp15, tmp25];
    const tmp29 = closure_6(guildId(6892).ActionSheet, obj7);
    cResult[11] = tmp15;
    cResult[12] = tmp25;
    cResult[13] = tmp29;
    tmp27 = tmp29;
  }
  const obj8 = {
    leading: tmp18,
    label: tmp22,
    onPress() {
      onClose();
      const obj = ChannelActionSheetUtils;
      const result = obj.copyGuildChannelOrThreadLink(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    }
  };
  const tmp26 = closure_5(guildId(8563).FormRow, obj8);
  cResult[8] = guildId;
  cResult[9] = onClose;
  cResult[10] = tmp26;
  tmp25 = tmp26;
}) : (function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
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
  const FormRow = Form.FormRow;
  obj6 = { source: AssetRegistryDefault2 };
  Icon2 = native.Icon;
  obj7 = { text: intl2.string(intl3.t.WqhZss) };
  FormLabel = Form.FormLabel;
  intl2 = intl3.intl;
  items[1] = closure_5(FormRow, obj5);
  return closure_6(ActionSheet, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx");

export default tmp4;

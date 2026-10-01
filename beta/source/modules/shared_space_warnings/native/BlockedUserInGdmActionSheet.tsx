// Module ID: 13280
// Function ID: 13281
// Name: BlockedUserInGdmActionSheet
// Dependencies: [19, 17, 2045, 1372, 13281, 1074, 21, 4836, 576, 4832, 4988, 1115, 504, 1370, 1177, 11303, 10371, 4792, 4787, 1241, 6618, 10916, 5999, 5917, 5281, 4800, 13282, 4849, 2]
// Exports: default

// Module 13280 (BlockedUserInGdmActionSheet)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl7 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import TableRow2 from "TableRow" /* 5917 */;
import SharedSpacesWarningActionCreators from "SharedSpacesWarningActionCreators" /* 13282 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
import SharedSpaceWarningConstants from "SharedSpaceWarningConstants" /* 13281 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj3;
let unpackModuleId;
function getUserCalloutRowText(arg0) {
  let calledOutUserIds;
  let closure_2;
  let formatResult;
  let totalUsers;
  let user;
  ({ calledOutUserIds, totalUsers, guildId: require, channelId: importDefault } = arg0);
  const items = [...calledOutUserIds];
  dependencyMap = items.map((item) => user.getUser(item));
  if (totalUsers >= 4) {
    const intl4 = intl7.intl;
    let obj2 = {
      usernameHook1() {
          let obj2;
          const first = closure_2[0];
          const obj = { variant: "text-md/semibold", children: obj2.getName(require, importDefault, first) };
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return unpackModuleId(Text, obj);
        },
      usernameHook2() {
          let obj2;
          let tmp;
          const obj = { variant: "text-md/semibold", children: obj2.getName(require, importDefault, tmp) };
          tmp = closure_2[1];
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return unpackModuleId(Text, obj);
        },
      numberOfOtherUsers: totalUsers - calledOutUserIds.length
    };
    formatResult = intl4.format(intl7.t.qfo6KR, obj2);
  } else if (3 === totalUsers) {
    const intl3 = intl7.intl;
    const obj3 = {
      usernameHook1() {
          let obj2;
          const first = closure_2[0];
          const obj = { variant: "text-md/semibold", children: obj2.getName(require, importDefault, first) };
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return unpackModuleId(Text, obj);
        },
      usernameHook2() {
          let obj2;
          let tmp;
          const obj = { variant: "text-md/semibold", children: obj2.getName(require, importDefault, tmp) };
          tmp = closure_2[1];
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return unpackModuleId(Text, obj);
        }
    };
    formatResult = intl3.format(intl7.t["67ZE+9"], obj3);
  } else if (2 === totalUsers) {
    const intl2 = intl7.intl;
    const obj4 = {
      usernameHook1() {
          let obj2;
          const first = closure_2[0];
          const obj = { variant: "text-md/semibold", children: obj2.getName(require, importDefault, first) };
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return unpackModuleId(Text, obj);
        },
      usernameHook2() {
          let obj2;
          let tmp;
          const obj = { variant: "text-md/semibold", children: obj2.getName(require, importDefault, tmp) };
          tmp = closure_2[1];
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return unpackModuleId(Text, obj);
        }
    };
    formatResult = intl2.format(intl7.t.veV4IN, obj4);
  } else {
    let tmp = require;
    const intl = intl7.intl;
    let obj = {
      usernameHook() {
          let obj2;
          const first = closure_2[0];
          const obj = { variant: "text-md/semibold", children: obj2.getName(require, importDefault, first) };
          const Text = Text_Text.Text;
          obj2 = NicknameUtilsDefault;
          return unpackModuleId(Text, obj);
        }
    };
    formatResult = intl.format(intl7.t["4WHCtq"], obj);
  }
  return formatResult;
}
function UserCalloutAvatars(userIds) {
  let tmp5;
  userIds = userIds.userIds;
  const guildId = userIds.guildId;
  const items = [UserStore];
  const items1 = [userIds];
  const obj = userIds(504);
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let user;
    return userIds.map((item) => user.getUser(item));
  }, items1);
  const found = stateFromStoresArray.filter(userIds(1370).isNotNullish);
  const obj2 = UserStore;
  if (1 === userIds.length) {
    let tmp8;
    if (null != obj2.getUser(userIds[0])) {
      const obj3 = { user: found[0], guildId, size: userIds(1177).AvatarSizes.REFRESH_MEDIUM_32, "aria-hidden": true };
      const Avatar = tmp(1177).Avatar;
      tmp8 = closure_11(Avatar, obj3);
    } else {
      tmp8 = closure_11(tmp(11303).UserIcon, {});
    }
    tmp5 = tmp8;
  } else {
    const obj4 = { users: found, size: userIds(1177).AvatarSizes.REFRESH_MEDIUM_32 };
    const FacepileGroupDMAvatar = tmp(10371).FacepileGroupDMAvatar;
    tmp5 = closure_11(FacepileGroupDMAvatar, obj4);
  }
  return tmp5;
}
function BlockedUserInGDMDescription(arg0) {
  let items;
  let items1;
  let items2;
  let numOfBlockedUsers;
  let numOfIgnoredUsers;
  let tmp3;
  ({ numOfBlockedUsers, numOfIgnoredUsers } = arg0);
  if (numOfBlockedUsers > 0) {
    if (numOfIgnoredUsers > 0) {
      const obj2 = { children: items };
      const intl5 = intl7.intl;
      items = [intl5.string(intl7.t.xbRNI3), "\n", ];
      const intl6 = intl7.intl;
      items[2] = intl6.string(intl7.t["Bp2/ni"]);
      tmp3 = map1(closure_12, obj2);
    }
    return tmp3;
  }
  if (numOfBlockedUsers > 0) {
    const obj3 = { children: items1 };
    const intl3 = intl7.intl;
    const obj4 = { n: numOfBlockedUsers };
    items1 = [intl3.format(intl7.t.iKtixW, obj4), "\n", ];
    const intl4 = intl7.intl;
    items1[2] = intl4.string(intl7.t.SN1hrl);
    tmp3 = map1(closure_12, obj3);
  } else {
    tmp3 = null;
    if (numOfIgnoredUsers > 0) {
      const obj = { children: items2 };
      const intl = intl7.intl;
      const obj5 = { n: numOfIgnoredUsers };
      items2 = [intl.format(intl7.t["6IRwua"], obj5), "\n", ];
      const intl2 = intl7.intl;
      items2[2] = intl2.string(intl7.t["6AKLRt"]);
      tmp3 = map1(closure_12, obj);
    }
  }
}
let react = react_mod;
({ Image: closure_4, View: hasOwnProperty } = react_native);
({ BlockWarningEngagements: metroImportAll, GdmWarningMedium: c9 } = SharedSpaceWarningConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerImage: { alignSelf: "center", width: 73, height: 86 }, title: { textAlign: "center", alignSelf: "center" }, description: { textAlign: "center", alignSelf: "center" }, tableGroup: obj3, buttons: { gap: 8 }, icon: { display: "flex", justifyContent: "center", alignItems: "center", minWidth: 32 } };
obj2 = { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, textAlign: "center" };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_24 };
let closure_14 = createStyles(obj);
let result = size.fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx");

export default function BlockedUserInGdmActionSheet(channelId) {
  let TableRowGroup;
  let guild_id;
  let guild_id1;
  let guild_id2;
  let guild_id3;
  let icon;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj14;
  let obj20;
  let obj5;
  let obj7;
  let substr1;
  let tmp20;
  let tmp32;
  channelId = channelId.channelId;
  const blockedUserIds = channelId.blockedUserIds;
  const ignoredUserIds = channelId.ignoredUserIds;
  const tmp2 = closure_14();
  react = tmp2;
  const items = [channelId, blockedUserIds, ignoredUserIds];
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { channel_id: channelId, warning_medium: constants.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
    obj.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_VIEWED, obj2);
  }, items);
  const channel = ChannelStore.getChannel(channelId);
  let obj = { icon: closure_11(channelId(ignoredUserIds[17]).CircleCheckIcon, {}), label: intl.string(channelId(ignoredUserIds[11]).t.RIMw54) };
  const tmp6 = ignoredUserIds.length > 0;
  intl = channelId(ignoredUserIds[11]).intl;
  const items1 = [obj, ];
  let obj2 = { icon: closure_11(channelId(ignoredUserIds[18]).CircleInformationIcon, {}), label: intl2.string(channelId(ignoredUserIds[11]).t.bejNWN) };
  intl2 = channelId(ignoredUserIds[11]).intl;
  items1[1] = obj2;
  if (blockedUserIds.length > 0) {
    if (tmp6) {
      const items2 = [];
      HermesBuiltin.arraySpread(items2, ignoredUserIds, HermesBuiltin.arraySpread(items2, blockedUserIds, 0));
      const substr = items2.slice(0, 2);
      let obj3 = { userIds: substr, guildId: guild_id };
      guild_id = undefined;
      const unshift2 = items1.unshift;
      const tmp29 = UserCalloutAvatars;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      let obj4 = { icon: closure_11(tmp29, obj3), label: tmp32(obj5) };
      obj5 = { calledOutUserIds: substr, totalUsers: items2.length, channelId, guildId: guild_id1 };
      guild_id1 = undefined;
      tmp32 = getUserCalloutRowText;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      unshift2(obj4);
    }
    const obj6 = { startExpanded: true, children: closure_13(closure_5, obj7) };
    obj7 = { style: tmp2.container, children: items3 };
    const obj8 = { source: blockedUserIds(ignoredUserIds[21]), style: tmp2.headerImage };
    const ActionSheet = tmp8(tmp9[20]).ActionSheet;
    items3 = [closure_11(closure_4, obj8), , , ];
    const obj9 = { children: items4 };
    const obj10 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp2.title, children: intl3.string(channelId(ignoredUserIds[11]).t["mwJJ+f"]) };
    const Text = tmp8(tmp9[9]).Text;
    intl3 = tmp8(tmp9[11]).intl;
    items4 = [closure_11(Text, obj10), ];
    const obj11 = { variant: "text-md/medium", color: "text-default", style: tmp2.description, children: closure_11(BlockedUserInGDMDescription, obj12) };
    obj12 = { numOfBlockedUsers: blockedUserIds.length, numOfIgnoredUsers: ignoredUserIds.length };
    const Text2 = tmp8(tmp9[9]).Text;
    items4[1] = closure_11(Text2, obj11);
    items3[1] = closure_13(closure_5, obj9);
    const obj13 = { style: tmp2.tableGroup, children: closure_11(TableRowGroup, obj14) };
    obj14 = {
      hasIcons: true,
      children: items1.map((item, index) => {
          let label;
          let obj2;
          ({ icon, label } = item);
          const obj = { icon: unpackModuleId(hasOwnProperty, obj2), label };
          obj2 = { style: icon.icon, children: icon };
          const TableRow = TableRow2.TableRow;
          return unpackModuleId(TableRow, obj, index);
        })
    };
    TableRowGroup = tmp8(tmp9[22]).TableRowGroup;
    items3[2] = closure_11(closure_5, obj13);
    const obj15 = { style: tmp2.buttons, children: items5 };
    const obj16 = {
      size: "lg",
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = SharedSpacesWarningActionCreators;
          const result = obj2.dismissGdmBlockedUserWarning(channelId);
          const obj3 = ChannelActionCreatorsDefault;
          obj3.closePrivateChannel(channelId, true, true);
          const obj4 = AnalyticsUtilsDefault;
          const obj5 = { action: metroImportAll.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: constants.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
          obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
        },
      text: intl4.string(channelId(ignoredUserIds[11]).t.I4q1kA)
    };
    const Button = tmp8(tmp9[24]).Button;
    intl4 = tmp8(tmp9[11]).intl;
    items5 = [closure_11(Button, obj16), ];
    const obj17 = {
      size: "lg",
      variant: "secondary",
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = SharedSpacesWarningActionCreators;
          const result = obj2.dismissGdmBlockedUserWarning(channelId);
          const obj3 = AnalyticsUtilsDefault;
          const obj4 = { action: metroImportAll.CLICK_TO_STAY, channel_id: channelId, warning_medium: constants.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
          obj3.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj4);
        },
      text: intl5.string(channelId(ignoredUserIds[11]).t.DRJhmT)
    };
    const Button2 = tmp8(tmp9[24]).Button;
    intl5 = tmp8(tmp9[11]).intl;
    items5[1] = closure_11(Button2, obj17);
    items3[3] = closure_13(closure_5, obj15);
    return closure_11(ActionSheet, obj6);
  }
  const items6 = [];
  if (blockedUserIds.length > 0) {
    HermesBuiltin.arraySpread(items6, blockedUserIds, 0);
    substr1 = items6.slice(0, 2);
  } else {
    HermesBuiltin.arraySpread(items6, ignoredUserIds, 0);
    substr1 = items6.slice(0, 2);
  }
  const obj18 = { userIds: substr1, guildId: guild_id2 };
  guild_id2 = undefined;
  const unshift = items1.unshift;
  const tmp17 = blockedUserIds.length > 0 ? blockedUserIds.length : ignoredUserIds.length;
  const tmp18 = UserCalloutAvatars;
  if (channel != null) {
    guild_id2 = channel.guild_id;
  }
  const obj19 = { icon: closure_11(tmp18, obj18), label: tmp20(obj20) };
  obj20 = { calledOutUserIds: substr1, totalUsers: tmp17, channelId, guildId: guild_id3 };
  guild_id3 = undefined;
  tmp20 = getUserCalloutRowText;
  if (channel != null) {
    guild_id3 = channel.guild_id;
  }
  unshift(obj19);
};
export { getUserCalloutRowText };

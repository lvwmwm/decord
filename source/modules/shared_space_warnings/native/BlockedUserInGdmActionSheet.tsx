// Module ID: 12712
// Function ID: 98891
// Name: getUserCalloutRowText
// Dependencies: [31, 27, 1348, 1849, 12713, 653, 33, 4130, 689, 4126, 4319, 1212, 566, 1327, 1273, 10997, 9134, 4091, 4086, 675, 5498, 10442, 5501, 5165, 4543, 4098, 12714, 4140, 2]
// Exports: default

// Module 12712 (getUserCalloutRowText)
import result from "result";
import get_ActivityIndicator from "module_4140";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import GdmWarningMedium from "GdmWarningMedium";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
function getUserCalloutRowText(arg0) {
  let calledOutUserIds;
  let importDefault;
  let require;
  let totalUsers;
  ({ calledOutUserIds, totalUsers, guildId: require, channelId: importDefault } = arg0);
  function renderUsername(arg0) {
    const obj = { variant: "text-md/semibold", children: outer1_1(4319).getName(closure_0, closure_1, arg0) };
    return outer1_11(outer1_0(4126).Text, obj);
  }
  const items = [...calledOutUserIds];
  const dependencyMap = items.map((arg0) => outer1_7.getUser(arg0));
  if (totalUsers >= 4) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    let obj = {
      usernameHook1() {
          return renderUsername(31);
        },
      usernameHook2() {
          return renderUsername(27);
        },
      numberOfOtherUsers: totalUsers - calledOutUserIds.length
    };
    let formatResult = intl4.format(require(1212) /* getSystemLocale */.t.qfo6KR, obj);
  } else if (3 === totalUsers) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = {
      usernameHook1() {
          return renderUsername(31);
        },
      usernameHook2() {
          return renderUsername(27);
        }
    };
    formatResult = intl3.format(require(1212) /* getSystemLocale */.t["67ZE+9"], obj);
  } else if (2 === totalUsers) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj1 = {
      usernameHook1() {
          return renderUsername(31);
        },
      usernameHook2() {
          return renderUsername(27);
        }
    };
    formatResult = intl2.format(require(1212) /* getSystemLocale */.t.veV4IN, obj1);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = {
      usernameHook() {
          return renderUsername(31);
        }
    };
    formatResult = intl.format(require(1212) /* getSystemLocale */.t["4WHCtq"], obj);
  }
  return formatResult;
}
function UserCalloutAvatars(userIds) {
  userIds = userIds.userIds;
  let obj = userIds(566);
  const items = [user];
  const items1 = [userIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => userIds.map((arg0) => outer2_7.getUser(arg0)), items1);
  const found = stateFromStoresArray.filter(userIds(1327).isNotNullish);
  if (1 === userIds.length) {
    let num3 = 0;
    if (null != user.getUser(userIds[0])) {
      obj = {};
      num3 = found[num3];
      obj.user = num3;
      obj.guildId = userIds.guildId;
      obj.size = userIds(1273).AvatarSizes.REFRESH_MEDIUM_32;
      obj["aria-hidden"] = true;
      let tmp10 = callback(userIds(1273).Avatar, obj);
    } else {
      tmp10 = callback(userIds(10997).UserIcon, {});
    }
  } else {
    obj = { users: found, size: userIds(1273).AvatarSizes.REFRESH_MEDIUM_32 };
    return callback(userIds(9134).FacepileGroupDMAvatar, obj);
  }
}
function BlockedUserInGDMDescription(arg0) {
  let numOfBlockedUsers;
  let numOfIgnoredUsers;
  ({ numOfBlockedUsers, numOfIgnoredUsers } = arg0);
  if (numOfBlockedUsers > 0) {
    if (tmp2) {
      let obj = {};
      const intl5 = require(1212) /* getSystemLocale */.intl;
      const items = [intl5.string(require(1212) /* getSystemLocale */.t.xbRNI3), "\n", ];
      const intl6 = require(1212) /* getSystemLocale */.intl;
      items[2] = intl6.string(require(1212) /* getSystemLocale */.t["Bp2/ni"]);
      obj.children = items;
      let tmp3 = callback2(closure_12, obj);
    }
    return tmp3;
  }
  if (numOfBlockedUsers > 0) {
    obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { n: numOfBlockedUsers };
    const items1 = [intl3.format(require(1212) /* getSystemLocale */.t.iKtixW, obj1), "\n", ];
    const intl4 = require(1212) /* getSystemLocale */.intl;
    items1[2] = intl4.string(require(1212) /* getSystemLocale */.t.SN1hrl);
    obj.children = items1;
    tmp3 = callback2(closure_12, obj);
  } else {
    tmp3 = null;
    if (tmp2) {
      obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj2 = { n: numOfIgnoredUsers };
      const items2 = [intl.format(require(1212) /* getSystemLocale */.t["6IRwua"], obj2), "\n", ];
      const intl2 = require(1212) /* getSystemLocale */.intl;
      items2[2] = intl2.string(require(1212) /* getSystemLocale */.t["6AKLRt"]);
      obj.children = items2;
      tmp3 = callback2(closure_12, obj);
    }
  }
}
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ BlockWarningEngagements: closure_8, GdmWarningMedium: closure_9 } = GdmWarningMedium);
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerImage = { alignSelf: "center", width: 73, height: 86 };
_createForOfIteratorHelperLoose.title = { textAlign: "center", alignSelf: "center" };
_createForOfIteratorHelperLoose.description = { textAlign: "center", alignSelf: "center" };
_createForOfIteratorHelperLoose.tableGroup = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.buttons = { gap: 8 };
_createForOfIteratorHelperLoose.icon = { display: "flex", justifyContent: "center", alignItems: "center", minWidth: 32 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx");

export default function BlockedUserInGdmActionSheet(channelId) {
  let blockedUserIds;
  let channelId2;
  let ignoredUserIds;
  channelId = channelId.channelId;
  blockedUserIds = channelId.blockedUserIds;
  ignoredUserIds = channelId.ignoredUserIds;
  const tmp = _createForOfIteratorHelperLoose();
  const React = tmp;
  const items = [channelId, blockedUserIds, ignoredUserIds];
  const effect = React.useEffect(() => {
    let obj = blockedUserIds(ignoredUserIds[19]);
    obj = { channel_id: channelId, warning_medium: outer1_9.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
    obj.track(outer1_10.GDM_BLOCKED_USER_WARNING_VIEWED, obj);
  }, items);
  ({ channelId: channelId2, blockedUserIds, ignoredUserIds } = { channelId, blockedUserIds, ignoredUserIds });
  channel = channel.getChannel(channelId2);
  let obj = { icon: callback(channelId(ignoredUserIds[17]).CircleCheckIcon, {}) };
  const intl = channelId(ignoredUserIds[11]).intl;
  obj.label = intl.string(channelId(ignoredUserIds[11]).t.RIMw54);
  const items1 = [obj, ];
  obj = { icon: callback(channelId(ignoredUserIds[18]).CircleInformationIcon, {}) };
  const intl2 = channelId(ignoredUserIds[11]).intl;
  obj.label = intl2.string(channelId(ignoredUserIds[11]).t.bejNWN);
  items1[1] = obj;
  if (blockedUserIds.length > 0) {
    if (tmp5) {
      const items2 = [];
      HermesBuiltin.arraySpread(ignoredUserIds, HermesBuiltin.arraySpread(blockedUserIds, 0));
      const substr = items2.slice(0, 2);
      obj = {};
      const obj1 = { userIds: substr };
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      obj1.guildId = guild_id;
      obj.icon = callback(UserCalloutAvatars, obj1);
      let obj2 = { calledOutUserIds: substr, totalUsers: items2.length, channelId: channelId2 };
      let guild_id1;
      if (null != channel) {
        guild_id1 = channel.guild_id;
      }
      obj2.guildId = guild_id1;
      obj.label = getUserCalloutRowText(obj2);
      items1.unshift(obj);
      const tmp26 = callback;
      const tmp27 = UserCalloutAvatars;
      const tmp30 = getUserCalloutRowText;
    }
    let obj3 = { startExpanded: true };
    const obj4 = { style: tmp.container };
    const obj5 = { source: blockedUserIds(ignoredUserIds[21]), style: tmp.headerImage };
    const items3 = [callback(closure_4, obj5), , , ];
    const obj6 = {};
    const obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title };
    const intl3 = channelId(ignoredUserIds[11]).intl;
    obj7.children = intl3.string(channelId(ignoredUserIds[11]).t["mwJJ+f"]);
    const items4 = [callback(channelId(ignoredUserIds[9]).Text, obj7), ];
    const obj8 = { variant: "text-md/medium", color: "text-default", style: tmp.description };
    const obj9 = { numOfBlockedUsers: blockedUserIds.length, numOfIgnoredUsers: ignoredUserIds.length };
    obj8.children = callback(BlockedUserInGDMDescription, obj9);
    items4[1] = callback(channelId(ignoredUserIds[9]).Text, obj8);
    obj6.children = items4;
    items3[1] = callback2(closure_5, obj6);
    const obj10 = { style: tmp.tableGroup };
    const obj11 = {
      hasIcons: true,
      children: items1.map((arg0, arg1) => {
          let icon;
          let label;
          ({ icon, label } = arg0);
          let obj = {};
          obj = { style: tmp.icon, children: icon };
          obj.icon = outer1_11(outer1_5, obj);
          obj.label = label;
          return outer1_11(channelId(ignoredUserIds[23]).TableRow, obj, arg1);
        })
    };
    obj10.children = callback(channelId(ignoredUserIds[22]).TableRowGroup, obj11);
    items3[2] = callback(closure_5, obj10);
    const obj12 = { style: tmp.buttons };
    const obj13 = {
      size: "lg",
      onPress() {
          let obj = blockedUserIds(ignoredUserIds[25]);
          obj.hideActionSheet();
          const result = channelId(ignoredUserIds[26]).dismissGdmBlockedUserWarning(channelId);
          const obj2 = channelId(ignoredUserIds[26]);
          blockedUserIds(ignoredUserIds[27]).closePrivateChannel(channelId, true, true);
          const obj3 = blockedUserIds(ignoredUserIds[27]);
          obj = { action: outer1_8.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: outer1_9.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
          blockedUserIds(ignoredUserIds[19]).track(outer1_10.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
        }
    };
    const intl4 = channelId(ignoredUserIds[11]).intl;
    obj13.text = intl4.string(channelId(ignoredUserIds[11]).t.I4q1kA);
    const items5 = [callback(channelId(ignoredUserIds[24]).Button, obj13), ];
    const obj14 = {
      size: "lg",
      variant: "secondary",
      onPress() {
          let obj = blockedUserIds(ignoredUserIds[25]);
          obj.hideActionSheet();
          const result = channelId(ignoredUserIds[26]).dismissGdmBlockedUserWarning(channelId);
          const obj2 = channelId(ignoredUserIds[26]);
          obj = { action: outer1_8.CLICK_TO_STAY, channel_id: channelId, warning_medium: outer1_9.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
          blockedUserIds(ignoredUserIds[19]).track(outer1_10.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
        }
    };
    const intl5 = channelId(ignoredUserIds[11]).intl;
    obj14.text = intl5.string(channelId(ignoredUserIds[11]).t.DRJhmT);
    items5[1] = callback(channelId(ignoredUserIds[24]).Button, obj14);
    obj12.children = items5;
    items3[3] = callback2(closure_5, obj12);
    obj4.children = items3;
    obj3.children = callback2(closure_5, obj4);
    return callback(channelId(ignoredUserIds[20]).ActionSheet, obj3);
  }
  const items6 = [];
  if (blockedUserIds.length > 0) {
    HermesBuiltin.arraySpread(blockedUserIds, 0);
    let substr1 = items6.slice(0, 2);
  } else {
    HermesBuiltin.arraySpread(ignoredUserIds, 0);
    substr1 = items6.slice(0, 2);
  }
  const obj15 = {};
  const obj16 = { userIds: substr1 };
  let guild_id2;
  if (null != channel) {
    guild_id2 = channel.guild_id;
  }
  obj16.guildId = guild_id2;
  obj15.icon = callback(UserCalloutAvatars, obj16);
  const obj17 = { calledOutUserIds: substr1, totalUsers: blockedUserIds.length > 0 ? blockedUserIds.length : ignoredUserIds.length, channelId: channelId2 };
  let guild_id3;
  if (null != channel) {
    guild_id3 = channel.guild_id;
  }
  obj17.guildId = guild_id3;
  obj15.label = getUserCalloutRowText(obj17);
  items1.unshift(obj15);
};
export { getUserCalloutRowText };

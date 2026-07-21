// Module ID: 12540
// Function ID: 96364
// Name: getUserCalloutRowText
// Dependencies: []
// Exports: default

// Module 12540 (getUserCalloutRowText)
function getUserCalloutRowText(arg0) {
  let calledOutUserIds;
  let totalUsers;
  ({ calledOutUserIds, totalUsers, guildId: closure_0, channelId: closure_1 } = arg0);
  function renderUsername(arg0) {
    const obj = { variant: "text-md/semibold", children: callback2(closure_2[10]).getName(callback, callback2, arg0) };
    return callback3(callback(closure_2[9]).Text, obj);
  }
  const items = [...calledOutUserIds];
  let closure_2 = items.map((arg0) => user.getUser(arg0));
  if (totalUsers >= 4) {
    const intl4 = arg1(closure_2[11]).intl;
    let obj = {
      usernameHook1() {
          return renderUsername(closure_2[0]);
        },
      usernameHook2() {
          return renderUsername(closure_2[1]);
        },
      numberOfOtherUsers: totalUsers - calledOutUserIds.length
    };
    let formatResult = intl4.format(arg1(closure_2[11]).t.qfo6KR, obj);
  } else if (3 === totalUsers) {
    const intl3 = arg1(closure_2[11]).intl;
    obj = {
      usernameHook1() {
          return renderUsername(closure_2[0]);
        },
      usernameHook2() {
          return renderUsername(closure_2[1]);
        }
    };
    formatResult = intl3.format(arg1(closure_2[11]).t.67ZE+9, obj);
  } else if (2 === totalUsers) {
    const intl2 = arg1(closure_2[11]).intl;
    const obj1 = {
      usernameHook1() {
          return renderUsername(closure_2[0]);
        },
      usernameHook2() {
          return renderUsername(closure_2[1]);
        }
    };
    formatResult = intl2.format(arg1(closure_2[11]).t.veV4IN, obj1);
  } else {
    const intl = arg1(closure_2[11]).intl;
    obj = {
      usernameHook() {
          return renderUsername(closure_2[0]);
        }
    };
    formatResult = intl.format(arg1(closure_2[11]).t.4WHCtq, obj);
  }
  return formatResult;
}
function UserCalloutAvatars(userIds) {
  userIds = userIds.userIds;
  const arg1 = userIds;
  let obj = arg1(dependencyMap[12]);
  const items = [user];
  const items1 = [userIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => userIds.map((arg0) => user.getUser(arg0)), items1);
  const found = stateFromStoresArray.filter(arg1(dependencyMap[13]).isNotNullish);
  if (1 === userIds.length) {
    let num3 = 0;
    if (null != user.getUser(userIds[0])) {
      obj = {};
      num3 = found[num3];
      obj.user = num3;
      obj.guildId = userIds.guildId;
      obj.size = arg1(dependencyMap[14]).AvatarSizes.REFRESH_MEDIUM_32;
      obj.aria-hidden = true;
      let tmp10 = callback(arg1(dependencyMap[14]).Avatar, obj);
    } else {
      tmp10 = callback(arg1(dependencyMap[15]).UserIcon, {});
    }
  } else {
    obj = { users: found, size: arg1(dependencyMap[14]).AvatarSizes.REFRESH_MEDIUM_32 };
    return callback(arg1(dependencyMap[16]).FacepileGroupDMAvatar, obj);
  }
}
function BlockedUserInGDMDescription(arg0) {
  let numOfBlockedUsers;
  let numOfIgnoredUsers;
  ({ numOfBlockedUsers, numOfIgnoredUsers } = arg0);
  if (numOfBlockedUsers > 0) {
    if (tmp2) {
      let obj = {};
      const intl5 = arg1(dependencyMap[11]).intl;
      const items = [intl5.string(arg1(dependencyMap[11]).t.xbRNI3), "\n", ];
      const intl6 = arg1(dependencyMap[11]).intl;
      items[2] = intl6.string(arg1(dependencyMap[11]).t.Bp2/ni);
      obj.children = items;
      let tmp3 = callback2(closure_12, obj);
    }
    return tmp3;
  }
  if (numOfBlockedUsers > 0) {
    obj = {};
    const intl3 = arg1(dependencyMap[11]).intl;
    const obj1 = { n: numOfBlockedUsers };
    const items1 = [intl3.format(arg1(dependencyMap[11]).t.iKtixW, obj1), "\n", ];
    const intl4 = arg1(dependencyMap[11]).intl;
    items1[2] = intl4.string(arg1(dependencyMap[11]).t.SN1hrl);
    obj.children = items1;
    tmp3 = callback2(closure_12, obj);
  } else {
    tmp3 = null;
    if (tmp2) {
      obj = {};
      const intl = arg1(dependencyMap[11]).intl;
      const obj2 = { n: numOfIgnoredUsers };
      const items2 = [intl.format(arg1(dependencyMap[11]).t.6IRwua, obj2), "\n", ];
      const intl2 = arg1(dependencyMap[11]).intl;
      items2[2] = intl2.string(arg1(dependencyMap[11]).t.6AKLRt);
      obj.children = items2;
      tmp3 = callback2(closure_12, obj);
    }
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ BlockWarningEngagements: closure_8, GdmWarningMedium: closure_9 } = arg1(dependencyMap[4]));
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { paddingTop: importDefault(dependencyMap[8]).space.PX_12, gap: importDefault(dependencyMap[8]).space.PX_8, textAlign: "center" };
obj.container = obj;
obj.headerImage = {};
obj.title = { customStatusActivity: null, hasCustomProfileTheme: null };
obj.description = { customStatusActivity: null, hasCustomProfileTheme: null };
const tmp4 = arg1(dependencyMap[6]);
obj.tableGroup = { paddingVertical: importDefault(dependencyMap[8]).space.PX_24 };
obj.buttons = { gap: 8 };
obj.icon = { 0: "Array", 0: "summaryId", 0: "onUpload", -9223372036854775808: "%JSONStringify%" };
let closure_14 = obj.createStyles(obj);
const obj1 = { paddingVertical: importDefault(dependencyMap[8]).space.PX_24 };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx");

export default function BlockedUserInGdmActionSheet(channelId) {
  let blockedUserIds;
  let channelId2;
  let ignoredUserIds;
  channelId = channelId.channelId;
  const arg1 = channelId;
  blockedUserIds = channelId.blockedUserIds;
  const importDefault = blockedUserIds;
  ignoredUserIds = channelId.ignoredUserIds;
  const dependencyMap = ignoredUserIds;
  const tmp = callback3();
  const React = tmp;
  const items = [channelId, blockedUserIds, ignoredUserIds];
  const effect = React.useEffect(() => {
    let obj = blockedUserIds(ignoredUserIds[19]);
    obj = { channel_id: channelId, warning_medium: constants2.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
    obj.track(constants3.GDM_BLOCKED_USER_WARNING_VIEWED, obj);
  }, items);
  ({ channelId: channelId2, blockedUserIds, ignoredUserIds } = { channelId, blockedUserIds, ignoredUserIds });
  const channel = channel.getChannel(channelId2);
  let obj = { icon: callback(arg1(dependencyMap[17]).CircleCheckIcon, {}) };
  const intl = arg1(dependencyMap[11]).intl;
  obj.label = intl.string(arg1(dependencyMap[11]).t.RIMw54);
  const items1 = [obj, ];
  obj = { icon: callback(arg1(dependencyMap[18]).CircleInformationIcon, {}) };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.label = intl2.string(arg1(dependencyMap[11]).t.bejNWN);
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
      const obj2 = { calledOutUserIds: substr, totalUsers: items2.length, channelId: channelId2 };
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
    const obj3 = { startExpanded: true };
    const obj4 = { style: tmp.container };
    const obj5 = { source: importDefault(dependencyMap[21]), style: tmp.headerImage };
    const items3 = [callback(closure_4, obj5), , , ];
    const obj6 = {};
    const obj7 = { style: tmp.title };
    const intl3 = arg1(dependencyMap[11]).intl;
    obj7.children = intl3.string(arg1(dependencyMap[11]).t.mwJJ+f);
    const items4 = [callback(arg1(dependencyMap[9]).Text, obj7), ];
    const obj8 = { style: tmp.description };
    const obj9 = { numOfBlockedUsers: blockedUserIds.length, numOfIgnoredUsers: ignoredUserIds.length };
    obj8.children = callback(BlockedUserInGDMDescription, obj9);
    items4[1] = callback(arg1(dependencyMap[9]).Text, obj8);
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
          obj.icon = callback(closure_5, obj);
          obj.label = label;
          return callback(channelId(ignoredUserIds[23]).TableRow, obj, arg1);
        })
    };
    obj10.children = callback(arg1(dependencyMap[22]).TableRowGroup, obj11);
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
          obj = { action: constants.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: constants2.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
          blockedUserIds(ignoredUserIds[19]).track(constants3.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
        }
    };
    const intl4 = arg1(dependencyMap[11]).intl;
    obj13.text = intl4.string(arg1(dependencyMap[11]).t.I4q1kA);
    const items5 = [callback(arg1(dependencyMap[24]).Button, obj13), ];
    const obj14 = {
      key: "r",
      onCloseCallback: "sectionIdsByBotId",
      onPress() {
          let obj = blockedUserIds(ignoredUserIds[25]);
          obj.hideActionSheet();
          const result = channelId(ignoredUserIds[26]).dismissGdmBlockedUserWarning(channelId);
          const obj2 = channelId(ignoredUserIds[26]);
          obj = { action: constants.CLICK_TO_STAY, channel_id: channelId, warning_medium: constants2.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
          blockedUserIds(ignoredUserIds[19]).track(constants3.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
        }
    };
    const intl5 = arg1(dependencyMap[11]).intl;
    obj14.text = intl5.string(arg1(dependencyMap[11]).t.DRJhmT);
    items5[1] = callback(arg1(dependencyMap[24]).Button, obj14);
    obj12.children = items5;
    items3[3] = callback2(closure_5, obj12);
    obj4.children = items3;
    obj3.children = callback2(closure_5, obj4);
    return callback(arg1(dependencyMap[20]).ActionSheet, obj3);
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

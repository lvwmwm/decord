// Module ID: 12546
// Function ID: 96411
// Name: BlockedUserInVoiceChannelActionSheet
// Dependencies: []
// Exports: default

// Module 12546 (BlockedUserInVoiceChannelActionSheet)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const setDismissalTimeForUser = arg1(dependencyMap[5]).setDismissalTimeForUser;
const tmp3 = arg1(dependencyMap[1]);
({ BlockWarningEngagements: closure_9, VoiceChannelWarningSurfaces: closure_10 } = arg1(dependencyMap[6]));
const AnalyticEvents = arg1(dependencyMap[7]).AnalyticEvents;
const tmp4 = arg1(dependencyMap[6]);
({ Fragment: closure_12, jsxs: closure_13, jsx: closure_14 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { paddingTop: importDefault(dependencyMap[10]).space.PX_12, gap: importDefault(dependencyMap[10]).space.PX_8 };
obj.container = obj;
obj.headerImage = {};
const tmp5 = arg1(dependencyMap[8]);
obj.headerText = { gap: importDefault(dependencyMap[10]).space.PX_4, marginBottom: importDefault(dependencyMap[10]).space.PX_16 };
obj.centerText = { "Null": null, "Null": null };
const obj1 = { gap: importDefault(dependencyMap[10]).space.PX_4, marginBottom: importDefault(dependencyMap[10]).space.PX_16 };
obj.buttonGroup = { paddingVertical: importDefault(dependencyMap[10]).space.PX_16, gap: 8 };
let closure_15 = obj.createStyles(obj);
const obj2 = { paddingVertical: importDefault(dependencyMap[10]).space.PX_16, gap: 8 };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInVoiceChannelActionSheet.tsx");

export default function BlockedUserInVoiceChannelActionSheet(arg0) {
  let blockedUserId;
  ({ channelId: closure_0, blockedUserId } = arg0);
  const importDefault = blockedUserId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => blocked.isBlocked(blockedUserId));
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => channel.getChannel(closure_0));
  const user = user.getUser(blockedUserId);
  obj = {};
  const intl = arg1(dependencyMap[12]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[12]).t;
  if (stateFromStores) {
    const items2 = [string(t.cpgfFk), "\n", ];
    const intl3 = tmp7(tmp8[12]).intl;
    items2[2] = intl3.string(tmp7(tmp8[12]).t.UKQ4Cn);
    obj.children = items2;
    let tmp9 = obj;
  } else {
    const items3 = [string(t.xj3j47), "\n", ];
    const intl2 = tmp7(tmp8[12]).intl;
    items3[2] = intl2.string(tmp7(tmp8[12]).t.wWueRW);
    obj.children = items3;
    tmp9 = obj;
  }
  obj = { startExpanded: true };
  obj1 = { style: tmp.container };
  const obj2 = { source: importDefault(dependencyMap[14]), style: tmp.headerImage };
  const items4 = [callback2(closure_3, obj2), , , ];
  const obj3 = { style: tmp.headerText };
  const obj4 = { hasMaxConnections: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000511090567818282, isBoostOnlySubscription: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000392111416998092, style: tmp.centerText };
  const intl4 = arg1(dependencyMap[12]).intl;
  obj4.children = intl4.string(arg1(dependencyMap[12]).t.1/gpFh);
  const items5 = [callback2(arg1(dependencyMap[15]).Text, obj4), ];
  const tmp13 = closure_4;
  const tmp5 = callback;
  const tmp5Result = callback(closure_12, tmp9);
  const tmp6 = closure_12;
  items5[1] = callback2(arg1(dependencyMap[15]).Text, { variant: "text-md/medium", style: tmp.centerText, children: callback(closure_12, tmp9) });
  obj3.children = items5;
  items4[1] = callback(closure_4, obj3);
  const obj6 = { hasIcons: true };
  const obj7 = {};
  if (null != user) {
    const obj8 = { size: arg1(dependencyMap[18]).AvatarSizes.SMALL, user };
    let guild_id;
    if (null != stateFromStores1) {
      guild_id = stateFromStores1.guild_id;
    }
    obj8.guildId = guild_id;
    let tmp18Result = callback2(arg1(dependencyMap[18]).Avatar, obj8);
    const tmp18 = callback2;
  } else {
    tmp18Result = callback2(arg1(dependencyMap[19]).UserIcon, {});
  }
  obj7.icon = tmp18Result;
  const intl5 = arg1(dependencyMap[12]).intl;
  const obj9 = {};
  let username;
  if (null != user) {
    username = user.username;
  }
  obj9.userName = username;
  obj7.label = intl5.formatToPlainString(arg1(dependencyMap[12]).t.w0YvUo, obj9);
  const items6 = [callback2(arg1(dependencyMap[17]).TableRow, obj7), ];
  const obj10 = { icon: callback2(arg1(dependencyMap[20]).MicrophoneIcon, {}) };
  const intl6 = arg1(dependencyMap[12]).intl;
  obj10.label = intl6.string(arg1(dependencyMap[12]).t.+4O9nX);
  items6[1] = callback2(arg1(dependencyMap[17]).TableRow, obj10);
  obj6.children = items6;
  items4[2] = callback(arg1(dependencyMap[16]).TableRowGroup, obj6);
  const obj11 = { style: tmp.buttonGroup };
  const obj12 = {
    size: "lg",
    onPress() {
      let obj = blockedUserId(stateFromStores[22]);
      obj.hideActionSheet();
      blockedUserId(stateFromStores[23]).disconnect();
      const obj2 = blockedUserId(stateFromStores[23]);
      obj = { action: constants.CLICK_TO_LEAVE, channel_id: closure_0 };
      if (stateFromStores) {
        const items = [blockedUserId];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj.blocked_user_ids = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [blockedUserId];
      }
      obj.ignored_user_ids = items2;
      obj.warning_surface = constants2.POST_JOIN_SHEET;
      blockedUserId(stateFromStores[24]).track(constants3.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
    }
  };
  const intl7 = arg1(dependencyMap[12]).intl;
  obj12.text = intl7.string(arg1(dependencyMap[12]).t.Y56/oK);
  const items7 = [callback2(arg1(dependencyMap[21]).Button, obj12), ];
  const obj13 = {
    onPress() {
      let obj = blockedUserId(stateFromStores[22]);
      obj.hideActionSheet();
      callback(blockedUserId);
      obj = { action: constants.CLICK_TO_STAY, channel_id: closure_0 };
      if (stateFromStores) {
        const items = [blockedUserId];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj.blocked_user_ids = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [blockedUserId];
      }
      obj.ignored_user_ids = items2;
      obj.warning_surface = constants2.POST_JOIN_SHEET;
      blockedUserId(stateFromStores[24]).track(constants3.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
    }
  };
  const intl8 = arg1(dependencyMap[12]).intl;
  obj13.text = intl8.string(arg1(dependencyMap[12]).t.bCcJST);
  items7[1] = callback2(arg1(dependencyMap[21]).Button, obj13);
  obj11.children = items7;
  items4[3] = callback(closure_4, obj11);
  obj1.children = items4;
  obj.children = callback(tmp13, obj1);
  return callback2(arg1(dependencyMap[13]).ActionSheet, obj);
};

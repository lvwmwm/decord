// Module ID: 15446
// Function ID: 117841
// Name: RestrictedMessagePreviewActions
// Dependencies: []
// Exports: default

// Module 15446 (RestrictedMessagePreviewActions)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ AnalyticsPages: closure_6, RelationshipTypes: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = arg1(dependencyMap[4]).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { gap: importDefault(dependencyMap[7]).space.PX_8, marginVertical: importDefault(dependencyMap[7]).space.PX_12 };
obj.container = obj;
const obj1 = { APP_DMS_ENTRY_POINT_COMMAND_BUTTON: null, desert: null, gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.buttonRow = obj1;
let closure_11 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewActions.tsx");

export default function RestrictedMessagePreviewActions(channel) {
  let isLoaded;
  let isReportable;
  channel = channel.channel;
  const arg1 = channel;
  const user = channel.user;
  const importDefault = user;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
  const message = dMMessageToReport.message;
  const dependencyMap = message;
  ({ isReportable, isLoaded } = dMMessageToReport);
  let obj1 = arg1(dependencyMap[9]);
  const items = [closure_5];
  const items1 = [user.id];
  const stateFromStores = obj1.useStateFromStores(items, () => relationshipType.getRelationshipType(user.id), items1);
  const items2 = [user.id];
  const items3 = [user.id];
  const callback = React.useCallback(() => {
    let obj = user(message[10]);
    obj = { userId: user.id, context: obj };
    obj = { location: constants.DM_CHANNEL };
    obj.addRelationship(obj);
  }, items2);
  const items4 = [user.id];
  const callback1 = React.useCallback(() => {
    let obj = user(message[11]);
    obj = { userId: user.id, location: constants.DM_CHANNEL };
    const result = obj.maybeConfirmFriendRequestAccept(obj);
  }, items3);
  const items5 = [user];
  const callback2 = React.useCallback(() => {
    let obj = user(message[10]);
    obj = { location: constants.DM_CHANNEL };
    obj.cancelFriendRequest(user.id, obj);
  }, items4);
  const items6 = [user.id, channel.id];
  const callback3 = React.useCallback(() => {
    let obj = channel(message[12]);
    obj = {
      userDisplayName: user(message[13]).getName(user),
      onConfirm() {
        let obj = lib(closure_2[10]);
        obj = { location: constants.DM_CHANNEL };
        obj.removeFriend(lib.id, obj);
      }
    };
    obj.confirmRemoveFriend(obj);
  }, items5);
  const items7 = [user.id];
  const callback4 = React.useCallback(() => {
    let obj = user(message[14]);
    obj = { userId: user.id, channelId: channel.id };
    obj.openLazy(channel(message[16])(message[15], message.paths), closure_8, obj);
  }, items6);
  const items8 = [message, channel.id];
  const callback5 = React.useCallback(() => {
    let obj = user(message[10]);
    obj = { location: constants.DM_CHANNEL };
    obj.unblockUser(user.id, obj);
  }, items7);
  let tmp11 = null;
  const callback6 = React.useCallback(() => {
    if (null != message) {
      const result = channel(message[17]).showReportModalForFirstDM(message, () => {
        callback(closure_2[18]).closePrivateChannel(id.id, true);
      });
      const obj = channel(message[17]);
    }
  }, items8);
  if (stateFromStores !== constants.BLOCKED) {
    obj = {};
    const intl = arg1(dependencyMap[20]).intl;
    obj.text = intl.string(arg1(dependencyMap[20]).t.l4Emac);
    obj.onPress = callback4;
    tmp11 = callback(arg1(dependencyMap[19]).Button, obj);
  }
  let tmp15 = null;
  if (isReportable) {
    if (null != message) {
      obj = {};
      const intl2 = arg1(dependencyMap[20]).intl;
      obj.text = intl2.string(arg1(dependencyMap[20]).t.HHZmDn);
      obj.disabled = null == message;
      obj.onPress = callback6;
      tmp15 = callback(arg1(dependencyMap[19]).Button, obj);
    } else {
      tmp15 = null;
    }
  }
  if (constants.NONE === stateFromStores) {
    let formatResult = null;
    let tmp22 = null;
    let tmp24 = null;
    if (!user.bot) {
      obj1 = { st: null, borderWidth: null };
      const intl8 = arg1(dependencyMap[20]).intl;
      obj1.text = intl8.string(arg1(dependencyMap[20]).t.PMsq/b);
      obj1.onPress = callback;
      tmp22 = callback(arg1(dependencyMap[19]).Button, obj1);
      formatResult = null;
      tmp24 = null;
    }
  } else if (constants.PENDING_INCOMING === stateFromStores) {
    const intl5 = arg1(dependencyMap[20]).intl;
    const obj2 = {};
    let obj7 = importDefault(dependencyMap[13]);
    obj2.username = obj7.getName(user);
    formatResult = intl5.format(arg1(dependencyMap[20]).t.uIomXw, obj2);
    const obj3 = { st: null, borderWidth: null };
    const intl6 = arg1(dependencyMap[20]).intl;
    obj3.text = intl6.string(arg1(dependencyMap[20]).t.+WbSn5);
    obj3.onPress = callback1;
    tmp22 = callback(arg1(dependencyMap[19]).Button, obj3);
    const obj4 = {};
    const intl7 = arg1(dependencyMap[20]).intl;
    obj4.text = intl7.string(arg1(dependencyMap[20]).t.rQSndv);
    obj4.onPress = callback2;
    tmp24 = callback(arg1(dependencyMap[19]).Button, obj4);
  } else if (constants.FRIEND === stateFromStores) {
    const obj5 = {};
    const intl4 = arg1(dependencyMap[20]).intl;
    obj5.text = intl4.string(arg1(dependencyMap[20]).t.cvSt1J);
    obj5.onPress = callback3;
    tmp22 = callback(arg1(dependencyMap[19]).Button, obj5);
    formatResult = null;
    tmp24 = null;
  } else if (constants.PENDING_OUTGOING === stateFromStores) {
    const obj6 = { SUPPRESS_GUILD_REMINDER_NOTIFICATIONS: "<string:30706176>", r_Step_1b$esjava$0: "<string:1416249856>", streamingMembers: "<string:3591307266>", STARTS_WITH_COMMAND_NAME: "<string:410058753>" };
    const intl3 = arg1(dependencyMap[20]).intl;
    obj6.text = intl3.string(arg1(dependencyMap[20]).t.xMH6vD);
    obj6.onPress = undefined;
    tmp22 = callback(arg1(dependencyMap[19]).Button, obj6);
    formatResult = null;
    tmp24 = null;
  } else {
    formatResult = null;
    tmp22 = null;
    tmp24 = null;
    if (constants.BLOCKED === stateFromStores) {
      obj7 = {};
      const intl9 = arg1(dependencyMap[20]).intl;
      obj7.text = intl9.string(arg1(dependencyMap[20]).t.XyHpKH);
      obj7.onPress = callback5;
      tmp22 = callback(arg1(dependencyMap[19]).Button, obj7);
      formatResult = null;
      tmp24 = null;
    }
  }
  const obj8 = { style: tmp.container };
  let tmp37 = null != formatResult;
  if (tmp37) {
    const obj9 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%", children: formatResult };
    tmp37 = callback(arg1(dependencyMap[21]).Text, obj9);
  }
  const items9 = [tmp37, ];
  const items10 = [tmp22, tmp24, tmp11, tmp15];
  items9[1] = callback2(View, { style: tmp.buttonRow, children: items10 });
  obj8.children = items9;
  return callback2(View, obj8);
};

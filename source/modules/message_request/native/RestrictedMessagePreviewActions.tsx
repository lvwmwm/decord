// Module ID: 15581
// Function ID: 120121
// Name: RestrictedMessagePreviewActions
// Dependencies: [31, 27, 3767, 653, 10420, 33, 4130, 689, 11626, 566, 8923, 9057, 11653, 3969, 4098, 10421, 1934, 7600, 4140, 4543, 1212, 4126, 2]
// Exports: default

// Module 15581 (RestrictedMessagePreviewActions)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { BLOCK_CONFIRMATION_ACTION_SHEET_KEY as closure_8 } from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ AnalyticsPages: closure_6, RelationshipTypes: closure_7 } = ME);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", flexWrap: "wrap", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.buttonRow = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewActions.tsx");

export default function RestrictedMessagePreviewActions(channel) {
  let isLoaded;
  let isReportable;
  channel = channel.channel;
  const user = channel.user;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(message[8]);
  const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
  message = dMMessageToReport.message;
  ({ isReportable, isLoaded } = dMMessageToReport);
  let obj1 = channel(message[9]);
  const items = [_isNativeReflectConstruct];
  const items1 = [user.id];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getRelationshipType(user.id), items1);
  const items2 = [user.id];
  const items3 = [user.id];
  const callback = React.useCallback(() => {
    let obj = user(message[10]);
    obj = { userId: user.id, context: obj };
    obj = { location: outer1_6.DM_CHANNEL };
    obj.addRelationship(obj);
  }, items2);
  const items4 = [user.id];
  const callback1 = React.useCallback(() => {
    let obj = user(message[11]);
    obj = { userId: user.id, location: outer1_6.DM_CHANNEL };
    const result = obj.maybeConfirmFriendRequestAccept(obj);
  }, items3);
  const items5 = [user];
  const callback2 = React.useCallback(() => {
    let obj = user(message[10]);
    obj = { location: outer1_6.DM_CHANNEL };
    obj.cancelFriendRequest(user.id, obj);
  }, items4);
  const items6 = [user.id, channel.id];
  const callback3 = React.useCallback(() => {
    let obj = channel(message[12]);
    obj = {
      userDisplayName: user(message[13]).getName(user),
      onConfirm() {
        let obj = user(message[10]);
        obj = { location: outer2_6.DM_CHANNEL };
        obj.removeFriend(outer1_1.id, obj);
      }
    };
    obj.confirmRemoveFriend(obj);
  }, items5);
  const items7 = [user.id];
  const callback4 = React.useCallback(() => {
    let obj = user(message[14]);
    obj = { userId: user.id, channelId: channel.id };
    obj.openLazy(channel(message[16])(message[15], message.paths), outer1_8, obj);
  }, items6);
  const items8 = [message, channel.id];
  const callback5 = React.useCallback(() => {
    let obj = user(message[10]);
    obj = { location: outer1_6.DM_CHANNEL };
    obj.unblockUser(user.id, obj);
  }, items7);
  let tmp11 = null;
  const callback6 = React.useCallback(() => {
    if (null != message) {
      const result = channel(message[17]).showReportModalForFirstDM(message, () => {
        user(message[18]).closePrivateChannel(outer1_0.id, true);
      });
      const obj = channel(message[17]);
    }
  }, items8);
  if (stateFromStores !== constants.BLOCKED) {
    obj = { size: "sm", variant: "secondary" };
    const intl = channel(message[20]).intl;
    obj.text = intl.string(channel(message[20]).t.l4Emac);
    obj.onPress = callback4;
    tmp11 = callback(channel(message[19]).Button, obj);
  }
  let tmp15 = null;
  if (isReportable) {
    if (null != message) {
      obj = { size: "sm", variant: "destructive" };
      const intl2 = channel(message[20]).intl;
      obj.text = intl2.string(channel(message[20]).t.HHZmDn);
      obj.disabled = null == message;
      obj.onPress = callback6;
      tmp15 = callback(channel(message[19]).Button, obj);
    } else {
      tmp15 = null;
    }
  }
  if (constants.NONE === stateFromStores) {
    let formatResult = null;
    let tmp22 = null;
    let tmp24 = null;
    if (!user.bot) {
      obj1 = { size: "sm", variant: "active" };
      const intl8 = channel(message[20]).intl;
      obj1.text = intl8.string(channel(message[20]).t["PMsq/b"]);
      obj1.onPress = callback;
      tmp22 = callback(channel(message[19]).Button, obj1);
      formatResult = null;
      tmp24 = null;
    }
  } else if (constants.PENDING_INCOMING === stateFromStores) {
    const intl5 = channel(message[20]).intl;
    const obj2 = {};
    let obj7 = user(message[13]);
    obj2.username = obj7.getName(user);
    formatResult = intl5.format(channel(message[20]).t.uIomXw, obj2);
    const obj3 = { size: "sm", variant: "active" };
    const intl6 = channel(message[20]).intl;
    obj3.text = intl6.string(channel(message[20]).t["+WbSn5"]);
    obj3.onPress = callback1;
    tmp22 = callback(channel(message[19]).Button, obj3);
    const obj4 = { size: "sm", variant: "secondary" };
    const intl7 = channel(message[20]).intl;
    obj4.text = intl7.string(channel(message[20]).t.rQSndv);
    obj4.onPress = callback2;
    tmp24 = callback(channel(message[19]).Button, obj4);
  } else if (constants.FRIEND === stateFromStores) {
    const obj5 = { size: "sm", variant: "secondary" };
    const intl4 = channel(message[20]).intl;
    obj5.text = intl4.string(channel(message[20]).t.cvSt1J);
    obj5.onPress = callback3;
    tmp22 = callback(channel(message[19]).Button, obj5);
    formatResult = null;
    tmp24 = null;
  } else if (constants.PENDING_OUTGOING === stateFromStores) {
    const obj6 = { size: "sm", variant: "active", text: null, disabled: true };
    const intl3 = channel(message[20]).intl;
    obj6.text = intl3.string(channel(message[20]).t.xMH6vD);
    obj6.onPress = undefined;
    tmp22 = callback(channel(message[19]).Button, obj6);
    formatResult = null;
    tmp24 = null;
  } else {
    formatResult = null;
    tmp22 = null;
    tmp24 = null;
    if (constants.BLOCKED === stateFromStores) {
      obj7 = { size: "sm", variant: "secondary" };
      const intl9 = channel(message[20]).intl;
      obj7.text = intl9.string(channel(message[20]).t.XyHpKH);
      obj7.onPress = callback5;
      tmp22 = callback(channel(message[19]).Button, obj7);
      formatResult = null;
      tmp24 = null;
    }
  }
  const obj8 = { style: tmp.container };
  let tmp37 = null != formatResult;
  if (tmp37) {
    const obj9 = { variant: "text-sm/normal", color: "text-default", children: formatResult };
    tmp37 = callback(channel(message[21]).Text, obj9);
  }
  const items9 = [tmp37, ];
  const items10 = [tmp22, tmp24, tmp11, tmp15];
  items9[1] = callback2(View, { style: tmp.buttonRow, children: items10 });
  obj8.children = items9;
  return callback2(View, obj8);
};

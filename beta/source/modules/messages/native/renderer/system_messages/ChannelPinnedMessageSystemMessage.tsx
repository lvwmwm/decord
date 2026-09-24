// Module ID: 8279
// Function ID: 8280
// Name: ChannelPinnedMessageSystemMessage
// Dependencies: [8255, 8257, 1119, 8259, 8262, 2]
// Exports: createChannelPinnedMessageSystemMessage

// Module 8279 (ChannelPinnedMessageSystemMessage)
import util from "util" /* 1119 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8255 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8257 */;
import createCommonMessageDefault from "createCommonMessage" /* 8259 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 8262 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx");

export const createChannelPinnedMessageSystemMessage = function createChannelPinnedMessageSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), pinsOnClick: { action: "bindOpenPins", messageChannelId: message.channel_id, medium: true } };
  const messageReference = message.messageReference;
  if (null != messageReference) {
    const intl2 = tmp(1119).intl;
    const obj3 = {};
    const merged = Object.assign(obj2);
    ({ channel_id: obj4.targetChannelId, message_id: obj4.targetMessageId } = messageReference);
    obj3.messageOnClick = { action: "bindJumpToMessage", targetChannelId: null, targetMessageId: null, medium: true };
    let formatToPartsResult = intl2.formatToParts(tmp(1119).t["7mvRNF"], obj3);
    const obj5 = { action: "bindJumpToMessage", targetChannelId: null, targetMessageId: null, medium: true };
  } else {
    const intl = tmp(1119).intl;
    formatToPartsResult = intl.formatToParts(tmp(1119).t["6TrHq2"], obj2);
  }
  const tmp9 = createCommonMessageDefault(roleStyle);
  let accessibilityActions = tmp9.accessibilityActions;
  if (accessibilityActions == null) {
    accessibilityActions = [];
  }
  const items = [...accessibilityActions];
  const obj6 = { label: null, name: null };
  const intl3 = tmp(1119).intl;
  obj6.label = intl3.string(util.t["mp1N/2"]);
  obj6.name = MessageAccessibilityActions.MessageAccessibilityAction.OPEN_PINS;
  items.push(obj6);
  if (null != messageReference) {
    const obj7 = { label: null, name: null };
    const intl4 = tmp(1119).intl;
    obj7.label = intl4.string(tmp(1119).t["+TSRGD"]);
    obj7.name = tmp(8262).MessageAccessibilityAction.JUMP_TO_MESSAGE;
    items.push(obj7);
  }
  const obj13 = { content: formatToPartsResult };
  const merged1 = Object.assign(tmp9);
  obj13.accessibilityActions = items;
  return obj13;
};

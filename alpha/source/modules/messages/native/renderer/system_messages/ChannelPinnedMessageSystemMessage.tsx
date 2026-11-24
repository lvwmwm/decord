// Module ID: 14206
// Function ID: 14207
// Name: ChannelPinnedMessageSystemMessage
// Dependencies: [11853, 14197, 1112, 14198, 12394, 2]
// Exports: createChannelPinnedMessageSystemMessage

// Module 14206 (ChannelPinnedMessageSystemMessage)
import intl5 from "intl" /* 1112 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 11853 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 12394 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14197 */;
import size from "module_2" /* 2 */;

let tmp4;
const createCommonMessageDefault = tmp4(14198);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx");

export function createChannelPinnedMessageSystemMessage(message) {
  let formatToPartsResult;
  let intl3;
  let intl4;
  let obj5;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), pinsOnClick: { action: "bindOpenPins", messageChannelId: message.channel_id, medium: true } };
  const messageReference = message.messageReference;
  if (null != messageReference) {
    const intl2 = tmp(1112).intl;
    const formatToParts = intl2.formatToParts;
    const obj3 = { messageOnClick: obj5 };
    const v7mvRNF = tmp(1112).t["7mvRNF"];
    const merged = Object.assign(obj2);
    obj5 = { action: "bindJumpToMessage", targetChannelId: null, targetMessageId: null, medium: true };
    ({ channel_id: obj4.targetChannelId, message_id: obj4.targetMessageId } = messageReference);
    formatToPartsResult = formatToParts(v7mvRNF, obj3);
  } else {
    const intl = tmp(1112).intl;
    formatToPartsResult = intl.formatToParts(tmp(1112).t["6TrHq2"], obj2);
  }
  const tmp10 = createCommonMessageDefault(message);
  let accessibilityActions = tmp10.accessibilityActions;
  if (accessibilityActions == null) {
    accessibilityActions = [];
  }
  const items = [...accessibilityActions];
  const push = items.push;
  const obj6 = { label: intl3.string(intl5.t["mp1N/2"]), name: MessageAccessibilityActions.MessageAccessibilityAction.OPEN_PINS };
  intl3 = tmp(1112).intl;
  push(obj6);
  if (null != messageReference) {
    const push2 = items.push;
    const obj7 = { label: intl4.string(intl5.t["+TSRGD"]), name: MessageAccessibilityActions.MessageAccessibilityAction.JUMP_TO_MESSAGE };
    intl4 = tmp(1112).intl;
    push2(obj7);
  }
  const obj13 = { content: formatToPartsResult, accessibilityActions: items };
  const merged1 = Object.assign(tmp10);
  return obj13;
}

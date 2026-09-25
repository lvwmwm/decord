// Module ID: 7420
// Function ID: 7421
// Name: ChangeChannelIconSystemMessage
// Dependencies: [2044, 7390, 7397, 7399, 7401, 1115, 7404, 2]
// Exports: createChangeChannelIconSystemMessage

// Module 7420 (ChangeChannelIconSystemMessage)
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7390 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7397 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7399 */;
import createCommonMessageDefault from "createCommonMessage" /* 7401 */;
import ChannelStore from "ChannelStore" /* 2044 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx");

export const createChangeChannelIconSystemMessage = function createChangeChannelIconSystemMessage(message) {
  message = message.message;
  ({ theme, roleStyle } = message);
  const tmp3 = resolveMessageContentColorsDefault(theme);
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const tmp6 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle });
  const channel = ChannelStore.getChannel(message.channel_id);
  let flag;
  if (channel != null) {
    const isGroupDM = channel.isGroupDM;
    if (isGroupDM != null) {
      flag = isGroupDM();
    }
  }
  if (flag == null) {
    flag = false;
  }
  const tmp8 = createCommonMessageDefault(message);
  const intl = tmp4(1115).intl;
  const formatToParts = intl.formatToParts;
  const t = tmp4(1115).t;
  if (flag) {
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, onEditGroup: null };
    let linkColor;
    if (tmp3 != null) {
      linkColor = tmp3.linkColor;
    }
    const obj3 = { action: "bindOpenGdmCustomizeActionSheet", linkColor, messageChannelId: message.channel_id, medium: true };
    obj2.onEditGroup = obj3;
    let formatToPartsResult = formatToParts(t.hfeYXC, obj2);
  } else {
    const obj4 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6 };
    formatToPartsResult = formatToParts(t.wypJZ0, obj4);
  }
  const merged = Object.assign(tmp8);
  let tmp12;
  if (flag) {
    let accessibilityActions = tmp8.accessibilityActions;
    if (accessibilityActions == null) {
      accessibilityActions = [];
    }
    const obj6 = { accessibilityActions: null };
    const items = [];
    const obj7 = { label: null, name: null };
    const intl2 = tmp4(1115).intl;
    obj7.label = intl2.string(tmp4(1115).t["5Q9+/L"]);
    obj7.name = tmp4(7404).MessageAccessibilityAction.EDIT_GDM;
    items[HermesBuiltin.arraySpread(accessibilityActions, 0)] = obj7;
    obj6.accessibilityActions = items;
    tmp12 = obj6;
    const arraySpreadResult = HermesBuiltin.arraySpread(accessibilityActions, 0);
  }
  const merged1 = Object.assign(tmp12);
  return { content: formatToPartsResult };
};

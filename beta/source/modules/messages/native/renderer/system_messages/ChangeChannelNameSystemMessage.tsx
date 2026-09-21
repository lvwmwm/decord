// Module ID: 8245
// Function ID: 8246
// Name: ChangeChannelNameSystemMessage
// Dependencies: [2045, 8216, 8223, 8225, 1119, 8227, 8230, 2]
// Exports: createChangeChannelNameSystemMessage

// Module 8245 (ChangeChannelNameSystemMessage)
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8216 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8223 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8225 */;
import createCommonMessageDefault from "createCommonMessage" /* 8227 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx");

export const createChangeChannelNameSystemMessage = function createChangeChannelNameSystemMessage(message) {
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
  if ("" === message.content) {
    let rk0be9 = tmp4(1119).t.hToFyf;
  } else {
    rk0be9 = tmp4(1119).t.rk0be9;
  }
  const tmp8 = createCommonMessageDefault(message);
  const intl = tmp4(1119).intl;
  const formatToParts = intl.formatToParts;
  if (flag) {
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, channelName: message.content, onEditGroup: null };
    let linkColor;
    if (tmp3 != null) {
      linkColor = tmp3.linkColor;
    }
    const obj3 = { action: "bindOpenGdmCustomizeActionSheet", linkColor, messageChannelId: message.channel_id };
    obj2.onEditGroup = obj3;
    let formatToPartsResult = formatToParts(rk0be9, obj2);
  } else {
    const t = tmp4(1119).t;
    const obj4 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, channelName: message.content };
    formatToPartsResult = formatToParts(message.isForumPost ? t["qa0e/n"] : t.XCPMEG, obj4);
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
    const intl2 = tmp4(1119).intl;
    obj7.label = intl2.string(tmp4(1119).t["5Q9+/L"]);
    obj7.name = tmp4(8230).MessageAccessibilityAction.EDIT_GDM;
    items[HermesBuiltin.arraySpread(accessibilityActions, 0)] = obj7;
    obj6.accessibilityActions = items;
    tmp12 = obj6;
    const arraySpreadResult = HermesBuiltin.arraySpread(accessibilityActions, 0);
  }
  const merged1 = Object.assign(tmp12);
  return { content: formatToPartsResult };
};

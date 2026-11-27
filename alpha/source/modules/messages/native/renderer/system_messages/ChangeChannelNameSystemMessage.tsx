// Module ID: 14386
// Function ID: 14387
// Name: ChangeChannelNameSystemMessage
// Dependencies: [4892, 14375, 12008, 14379, 1112, 14380, 12615, 2]
// Exports: createChangeChannelNameSystemMessage

// Module 14386 (ChangeChannelNameSystemMessage)
import intl3 from "intl" /* 1112 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12008 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 12615 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 14375 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14379 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import size from "module_2" /* 2 */;

let tmp2;
const createCommonMessageDefault = tmp2(14380);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx");

export function createChangeChannelNameSystemMessage(message) {
  let formatToPartsResult;
  let intl2;
  let items;
  let obj3;
  let rk0be9;
  let roleStyle;
  let theme;
  message = message.message;
  ({ theme, roleStyle } = message);
  const tmp4 = resolveMessageContentColorsDefault(theme);
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp7 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle });
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
    rk0be9 = tmp5(1112).t.hToFyf;
  } else {
    rk0be9 = tmp5(1112).t.rk0be9;
  }
  const tmp9 = createCommonMessageDefault(message);
  const intl = tmp5(1112).intl;
  const formatToParts = intl.formatToParts;
  if (flag) {
    let linkColor;
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp7, channelName: message.content, onEditGroup: obj3 };
    if (tmp4 != null) {
      linkColor = tmp4.linkColor;
    }
    obj3 = { action: "bindOpenGdmCustomizeActionSheet", linkColor, messageChannelId: message.channel_id };
    formatToPartsResult = formatToParts(rk0be9, obj2);
  } else {
    const isForumPost = message.isForumPost;
    const t = tmp5(1112).t;
    const obj4 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp7, channelName: message.content };
    formatToPartsResult = formatToParts(isForumPost ? t["qa0e/n"] : t.XCPMEG, obj4);
  }
  const obj5 = { content: formatToPartsResult };
  const merged = Object.assign(tmp9);
  let tmp13;
  if (flag) {
    let accessibilityActions = tmp9.accessibilityActions;
    if (accessibilityActions == null) {
      accessibilityActions = [];
    }
    const obj6 = { accessibilityActions: items };
    items = [];
    const obj7 = { label: intl2.string(intl3.t["5Q9+/L"]), name: MessageAccessibilityActions.MessageAccessibilityAction.EDIT_GDM };
    const arraySpreadResult = HermesBuiltin.arraySpread(items, accessibilityActions, 0);
    intl2 = tmp5(1112).intl;
    items[arraySpreadResult] = obj7;
    tmp13 = obj6;
  }
  const merged1 = Object.assign(tmp13);
  return obj5;
}

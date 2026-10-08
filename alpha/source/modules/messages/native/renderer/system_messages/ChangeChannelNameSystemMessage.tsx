// Module ID: 7973
// Function ID: 7974
// Name: ChangeChannelNameSystemMessage
// Dependencies: [2063, 7944, 7951, 7953, 1126, 7955, 7958, 2]
// Exports: createChangeChannelNameSystemMessage

// Module 7973 (ChangeChannelNameSystemMessage)
import intl3 from "intl" /* 1126 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7944 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7951 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7953 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 7958 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import size from "module_2" /* 2 */;

let tmp2;
const createCommonMessageDefault = tmp2(7955);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx");

export const createChangeChannelNameSystemMessage = function createChangeChannelNameSystemMessage(message) {
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
    rk0be9 = tmp5(1126).t.hToFyf;
  } else {
    rk0be9 = tmp5(1126).t.rk0be9;
  }
  const tmp9 = createCommonMessageDefault(message);
  const intl = tmp5(1126).intl;
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
    const t = tmp5(1126).t;
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
    intl2 = tmp5(1126).intl;
    items[arraySpreadResult] = obj7;
    tmp13 = obj6;
  }
  const merged1 = Object.assign(tmp13);
  return obj5;
};

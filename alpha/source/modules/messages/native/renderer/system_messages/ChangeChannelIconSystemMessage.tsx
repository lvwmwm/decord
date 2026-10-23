// Module ID: 8338
// Function ID: 8339
// Name: ChangeChannelIconSystemMessage
// Dependencies: [4821, 8309, 8316, 8318, 8320, 1128, 8323, 2]
// Exports: createChangeChannelIconSystemMessage

// Module 8338 (ChangeChannelIconSystemMessage)
import intl3 from "intl" /* 1128 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8309 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8316 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8318 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 8323 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import size from "module_2" /* 2 */;

let tmp2;
const createCommonMessageDefault = tmp2(8320);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx");

export const createChangeChannelIconSystemMessage = function createChangeChannelIconSystemMessage(message) {
  let formatToPartsResult;
  let intl2;
  let items;
  let obj3;
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
  const tmp9 = createCommonMessageDefault(message);
  const intl = tmp5(1128).intl;
  const formatToParts = intl.formatToParts;
  const t = tmp5(1128).t;
  if (flag) {
    let linkColor;
    const hfeYXC = t.hfeYXC;
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp7, onEditGroup: obj3 };
    if (tmp4 != null) {
      linkColor = tmp4.linkColor;
    }
    obj3 = { action: "bindOpenGdmCustomizeActionSheet", linkColor, messageChannelId: message.channel_id, medium: true };
    formatToPartsResult = formatToParts(hfeYXC, obj2);
  } else {
    const obj4 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp7 };
    formatToPartsResult = formatToParts(t.wypJZ0, obj4);
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
    intl2 = tmp5(1128).intl;
    items[arraySpreadResult] = obj7;
    tmp13 = obj6;
  }
  const merged1 = Object.assign(tmp13);
  return obj5;
};

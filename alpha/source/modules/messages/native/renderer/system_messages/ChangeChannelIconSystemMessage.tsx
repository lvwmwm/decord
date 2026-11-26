// Module ID: 14380
// Function ID: 14381
// Name: ChangeChannelIconSystemMessage
// Dependencies: [4892, 14368, 12000, 14372, 14373, 1112, 12607, 2]
// Exports: createChangeChannelIconSystemMessage

// Module 14380 (ChangeChannelIconSystemMessage)
import intl3 from "intl" /* 1112 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12000 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 12607 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 14368 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14372 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import size from "module_2" /* 2 */;

let tmp2;
const createCommonMessageDefault = tmp2(14373);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx");

export function createChangeChannelIconSystemMessage(message) {
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
  const intl = tmp5(1112).intl;
  const formatToParts = intl.formatToParts;
  const t = tmp5(1112).t;
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
    intl2 = tmp5(1112).intl;
    items[arraySpreadResult] = obj7;
    tmp13 = obj6;
  }
  const merged1 = Object.assign(tmp13);
  return obj5;
}

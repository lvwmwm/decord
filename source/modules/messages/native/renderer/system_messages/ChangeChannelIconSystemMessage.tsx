// Module ID: 7872
// Function ID: 7873
// Name: createChangeChannelIconSystemMessage
// Dependencies: [1372, 7844, 7851, 7853, 7854, 1236, 7857, 2]
// Exports: createChangeChannelIconSystemMessage

// Module 7872 (createChangeChannelIconSystemMessage)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx");

export const createChangeChannelIconSystemMessage = function createChangeChannelIconSystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ theme, roleStyle } = message);
  const tmp3 = importDefault(7844)(theme);
  let obj = require(7851) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp6 = importDefault(7853)({ message, author: messageAuthorWithProcessedColor, roleStyle });
  channel = channel.getChannel(message.channel_id);
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
  const tmp8 = importDefault(7854)(message);
  const intl = tmp4(1236).intl;
  const formatToParts = intl.formatToParts;
  const t = tmp4(1236).t;
  if (flag) {
    obj = { username: null, usernameOnClick: null, onEditGroup: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj[1] = tmp6;
    let linkColor;
    if (tmp3 != null) {
      linkColor = tmp3.linkColor;
    }
    obj = { action: "bindOpenGdmCustomizeActionSheet", linkColor: null, messageChannelId: null, medium: true };
    obj[1] = linkColor;
    obj[2] = message.channel_id;
    obj[2] = obj;
    let formatToPartsResult = formatToParts(t.hfeYXC, obj);
  } else {
    const obj1 = { username: null, usernameOnClick: null };
    obj1[0] = messageAuthorWithProcessedColor.nick;
    obj1[1] = tmp6;
    formatToPartsResult = formatToParts(t.wypJZ0, obj1);
  }
  const merged = Object.assign(tmp8);
  let tmp12;
  if (flag) {
    let accessibilityActions = tmp8.accessibilityActions;
    if (accessibilityActions == null) {
      accessibilityActions = [];
    }
    const obj3 = { accessibilityActions: null };
    const items = [];
    const obj4 = { label: null, name: null };
    const intl2 = tmp4(1236).intl;
    obj4[0] = intl2.string(tmp4(1236).t["5Q9+/L"]);
    obj4[1] = tmp4(7857).MessageAccessibilityAction.EDIT_GDM;
    items[HermesBuiltin.arraySpread(accessibilityActions, 0)] = obj4;
    obj3[0] = items;
    tmp12 = obj3;
    const arraySpreadResult = HermesBuiltin.arraySpread(accessibilityActions, 0);
  }
  const merged1 = Object.assign(tmp12);
  return { content: formatToPartsResult };
};

// Module ID: 7670
// Function ID: 61304
// Name: createChangeChannelIconSystemMessage
// Dependencies: [1348, 7642, 7649, 7651, 7652, 1212, 7655, 2]
// Exports: createChangeChannelIconSystemMessage

// Module 7670 (createChangeChannelIconSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx");

export const createChangeChannelIconSystemMessage = function createChangeChannelIconSystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ theme, roleStyle } = message);
  const tmp = importDefault(7642)(theme);
  let obj = require(7649) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp3 = importDefault(7651)({ message, author: messageAuthorWithProcessedColor, roleStyle });
  channel = channel.getChannel(message.channel_id);
  let isGroupDMResult;
  if (null != channel) {
    if (null != channel.isGroupDM) {
      isGroupDMResult = channel.isGroupDM();
    }
  }
  const tmp6 = importDefault(7652)(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatToParts = intl.formatToParts;
  const t = require(1212) /* getSystemLocale */.t;
  if (null != isGroupDMResult && isGroupDMResult) {
    obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp3 };
    const obj1 = { action: "bindOpenGdmCustomizeActionSheet" };
    let linkColor;
    if (null != tmp) {
      linkColor = tmp.linkColor;
    }
    obj1.linkColor = linkColor;
    obj1.messageChannelId = message.channel_id;
    obj1.medium = true;
    obj.onEditGroup = obj1;
    let formatToPartsResult = formatToParts(t.hfeYXC, obj);
  } else {
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp3 };
    formatToPartsResult = formatToParts(t.wypJZ0, obj2);
  }
  obj.content = formatToPartsResult;
  const merged = Object.assign(tmp6);
  let tmp10;
  if (null != isGroupDMResult && isGroupDMResult) {
    const obj3 = {};
    let accessibilityActions = tmp6.accessibilityActions;
    if (null == accessibilityActions) {
      accessibilityActions = [];
    }
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(accessibilityActions, 0);
    const obj4 = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj4.label = intl2.string(require(1212) /* getSystemLocale */.t["5Q9+/L"]);
    obj4.name = require(7655) /* getQuickReactionLabel */.MessageAccessibilityAction.EDIT_GDM;
    items[arraySpreadResult] = obj4;
    const sum = arraySpreadResult + 1;
    obj3.accessibilityActions = items;
    tmp10 = obj3;
  }
  const merged1 = Object.assign(tmp10);
  return obj;
};

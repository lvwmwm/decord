// Module ID: 7704
// Function ID: 61557
// Name: createChangeChannelNameSystemMessage
// Dependencies: [1348, 7677, 7684, 7686, 1212, 7687, 7690, 2]
// Exports: createChangeChannelNameSystemMessage

// Module 7704 (createChangeChannelNameSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx");

export const createChangeChannelNameSystemMessage = function createChangeChannelNameSystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ theme, roleStyle } = message);
  const tmp = importDefault(7677)(theme);
  let obj = require(7684) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp3 = importDefault(7686)({ message, author: messageAuthorWithProcessedColor, roleStyle });
  channel = channel.getChannel(message.channel_id);
  let isGroupDMResult;
  if (null != channel) {
    if (null != channel.isGroupDM) {
      isGroupDMResult = channel.isGroupDM();
    }
  }
  if ("" === message.content) {
    let rk0be9 = require(1212) /* getSystemLocale */.t.hToFyf;
  } else {
    rk0be9 = require(1212) /* getSystemLocale */.t.rk0be9;
  }
  const tmp10 = importDefault(7687)(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatToParts = intl.formatToParts;
  if (null != isGroupDMResult && isGroupDMResult) {
    obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp3, channelName: message.content };
    const obj1 = { action: "bindOpenGdmCustomizeActionSheet" };
    let linkColor;
    if (null != tmp) {
      linkColor = tmp.linkColor;
    }
    obj1.linkColor = linkColor;
    obj1.messageChannelId = message.channel_id;
    obj.onEditGroup = obj1;
    let formatToPartsResult = formatToParts(rk0be9, obj);
  } else {
    const t = require(1212) /* getSystemLocale */.t;
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp3, channelName: message.content };
    formatToPartsResult = formatToParts(message.isForumPost ? t["qa0e/n"] : t.XCPMEG, obj2);
  }
  obj.content = formatToPartsResult;
  const merged = Object.assign(tmp10);
  let tmp16;
  if (null != isGroupDMResult && isGroupDMResult) {
    const obj3 = {};
    let accessibilityActions = tmp10.accessibilityActions;
    if (null == accessibilityActions) {
      accessibilityActions = [];
    }
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(accessibilityActions, 0);
    const obj4 = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj4.label = intl2.string(require(1212) /* getSystemLocale */.t["5Q9+/L"]);
    obj4.name = require(7690) /* getQuickReactionLabel */.MessageAccessibilityAction.EDIT_GDM;
    items[arraySpreadResult] = obj4;
    const sum = arraySpreadResult + 1;
    obj3.accessibilityActions = items;
    tmp16 = obj3;
  }
  const merged1 = Object.assign(tmp16);
  return obj;
};

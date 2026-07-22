// Module ID: 7664
// Function ID: 61267
// Name: createChangeChannelIconSystemMessage
// Dependencies: []
// Exports: createChangeChannelIconSystemMessage

// Module 7664 (createChangeChannelIconSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx");

export const createChangeChannelIconSystemMessage = function createChangeChannelIconSystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ theme, roleStyle } = message);
  const tmp = importDefault(dependencyMap[1])(theme);
  let obj = arg1(dependencyMap[2]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp3 = importDefault(dependencyMap[3])({ message, author: messageAuthorWithProcessedColor, roleStyle });
  const channel = channel.getChannel(message.channel_id);
  let isGroupDMResult;
  if (null != channel) {
    if (null != channel.isGroupDM) {
      isGroupDMResult = channel.isGroupDM();
    }
  }
  const tmp6 = importDefault(dependencyMap[4])(message);
  obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  const formatToParts = intl.formatToParts;
  const t = arg1(dependencyMap[5]).t;
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
    const intl2 = arg1(dependencyMap[5]).intl;
    obj4.label = intl2.string(arg1(dependencyMap[5]).t.5Q9+/L);
    obj4.name = arg1(dependencyMap[6]).MessageAccessibilityAction.EDIT_GDM;
    items[arraySpreadResult] = obj4;
    const sum = arraySpreadResult + 1;
    obj3.accessibilityActions = items;
    tmp10 = obj3;
  }
  const merged1 = Object.assign(tmp10);
  return obj;
};

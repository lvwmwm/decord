// Module ID: 7663
// Function ID: 61255
// Name: createChangeChannelNameSystemMessage
// Dependencies: []
// Exports: createChangeChannelNameSystemMessage

// Module 7663 (createChangeChannelNameSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx");

export const createChangeChannelNameSystemMessage = function createChangeChannelNameSystemMessage(message) {
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
  if ("" === message.content) {
    let rk0be9 = arg1(dependencyMap[4]).t.hToFyf;
  } else {
    rk0be9 = arg1(dependencyMap[4]).t.rk0be9;
  }
  const tmp10 = importDefault(dependencyMap[5])(message);
  obj = {};
  const intl = arg1(dependencyMap[4]).intl;
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
    const t = arg1(dependencyMap[4]).t;
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp3, channelName: message.content };
    formatToPartsResult = formatToParts(message.isForumPost ? t.qa0e/n : t.XCPMEG, obj2);
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
    const intl2 = arg1(dependencyMap[4]).intl;
    obj4.label = intl2.string(arg1(dependencyMap[4]).t.5Q9+/L);
    obj4.name = arg1(dependencyMap[6]).MessageAccessibilityAction.EDIT_GDM;
    items[arraySpreadResult] = obj4;
    const sum = arraySpreadResult + 1;
    obj3.accessibilityActions = items;
    tmp16 = obj3;
  }
  const merged1 = Object.assign(tmp16);
  return obj;
};

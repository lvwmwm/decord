// Module ID: 7723
// Function ID: 61430
// Name: createChannelLinkedToLobbySystemMessage
// Dependencies: []
// Exports: createChannelLinkedToLobbySystemMessage

// Module 7723 (createChannelLinkedToLobbySystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
const HelpdeskArticles = arg1(dependencyMap[1]).HelpdeskArticles;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx");

export const createChannelLinkedToLobbySystemMessage = function createChannelLinkedToLobbySystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ roleStyle, theme } = message);
  const tmp = importDefault(dependencyMap[2])(theme);
  const applicationId = message.applicationId;
  let str = "";
  if (null != applicationId) {
    str = applicationId;
  }
  const application = application.getApplication(str);
  if (null == application) {
    return null;
  } else {
    let obj = arg1(dependencyMap[3]);
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    obj = { username: messageAuthorWithProcessedColor.nick };
    obj = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj.usernameOnClick = importDefault(dependencyMap[4])(obj);
    obj.applicationName = application.name;
    const obj1 = { linkColor: tmp.defaultUsernameColor, medium: true };
    obj.applicationNameOnClick = obj1;
    const obj2 = { action: "bindOpenUrl", url: importDefault(dependencyMap[5]).getArticleURL(HelpdeskArticles.LINKED_LOBBIES), linkColor: tmp.linkColor, medium: true };
    obj.urlOnClick = obj2;
    const obj3 = {};
    const intl = arg1(dependencyMap[6]).intl;
    obj3.content = intl.formatToParts(arg1(dependencyMap[6]).t.gZfhOw, obj);
    const merged = Object.assign(importDefault(dependencyMap[7])(message));
    return obj3;
  }
};

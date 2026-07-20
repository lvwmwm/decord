// Module ID: 7720
// Function ID: 61420
// Name: createInGameMessageNuxSystemMessage
// Dependencies: []
// Exports: createInGameMessageNuxSystemMessage

// Module 7720 (createInGameMessageNuxSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
const HelpdeskArticles = arg1(dependencyMap[1]).HelpdeskArticles;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx");

export const createInGameMessageNuxSystemMessage = function createInGameMessageNuxSystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ theme, roleStyle } = message);
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
    obj.gameName = application.name;
    const obj1 = { action: "bindOpenUrl", url: importDefault(dependencyMap[5]).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS), linkColor: tmp.linkColor, medium: true };
    obj.urlOnClick = obj1;
    const obj2 = {};
    const intl = arg1(dependencyMap[6]).intl;
    obj2.content = intl.formatToParts(arg1(dependencyMap[6]).t.92erOB, obj);
    const merged = Object.assign(importDefault(dependencyMap[7])(message));
    return obj2;
  }
  const tmp = importDefault(dependencyMap[2])(theme);
};

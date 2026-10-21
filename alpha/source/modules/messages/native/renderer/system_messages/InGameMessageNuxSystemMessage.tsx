// Module ID: 8391
// Function ID: 8392
// Name: InGameMessageNuxSystemMessage
// Dependencies: [2045, 1087, 8287, 8294, 8296, 2067, 1128, 8298, 2]
// Exports: createInGameMessageNuxSystemMessage

// Module 8391 (InGameMessageNuxSystemMessage)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2067 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8287 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8294 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8296 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx");

export const createInGameMessageNuxSystemMessage = function createInGameMessageNuxSystemMessage(message) {
  let intl;
  let obj3;
  let obj4;
  let roleStyle;
  let theme;
  let tmpResult;
  message = message.message;
  ({ theme, roleStyle } = message);
  let str = message.applicationId;
  const getApplication = ApplicationStore.getApplication;
  const tmp3 = resolveMessageContentColorsDefault(theme);
  if (str == null) {
    str = "";
  }
  const application = getApplication(str);
  if (null == application) {
    return null;
  } else {
    const obj = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj3), gameName: application.name, urlOnClick: obj4 };
    obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj4 = { action: "bindOpenUrl", url: tmpResult.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS), linkColor: tmp3.linkColor, medium: true };
    tmpResult = HelpdeskUtilsDefault;
    const obj5 = { content: intl.formatToParts(intl2.t["92erOB"], obj2) };
    intl = intl2.intl;
    const merged = Object.assign(tmp(8298)(message));
    return obj5;
  }
};

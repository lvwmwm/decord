// Module ID: 8343
// Function ID: 8344
// Name: InGameMessageNuxSystemMessage
// Dependencies: [5540, 1087, 8239, 8246, 8248, 2131, 1128, 8250, 2]
// Exports: createInGameMessageNuxSystemMessage

// Module 8343 (InGameMessageNuxSystemMessage)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2131 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8239 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8246 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8248 */;
import ApplicationStore from "ApplicationStore" /* 5540 */;
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
    const merged = Object.assign(tmp(8250)(message));
    return obj5;
  }
};

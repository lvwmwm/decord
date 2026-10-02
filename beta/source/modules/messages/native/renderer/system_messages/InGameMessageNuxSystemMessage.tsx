// Module ID: 7492
// Function ID: 7493
// Name: InGameMessageNuxSystemMessage
// Dependencies: [5064, 1086, 7399, 7406, 7408, 2114, 1127, 7410, 2]
// Exports: createInGameMessageNuxSystemMessage

// Module 7492 (InGameMessageNuxSystemMessage)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2114 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7399 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7406 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7408 */;
import ApplicationStore from "ApplicationStore" /* 5064 */;
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
    const merged = Object.assign(tmp(7410)(message));
    return obj5;
  }
};

// Module ID: 8604
// Function ID: 8605
// Name: InGameMessageNuxSystemMessage
// Dependencies: [2162, 1072, 8503, 8510, 8512, 2185, 1113, 8514, 2]
// Exports: createInGameMessageNuxSystemMessage

// Module 8604 (InGameMessageNuxSystemMessage)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8503 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8510 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8512 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx");

export function createInGameMessageNuxSystemMessage(message) {
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
    const merged = Object.assign(tmp(8514)(message));
    return obj5;
  }
}

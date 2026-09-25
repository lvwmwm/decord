// Module ID: 7482
// Function ID: 7483
// Name: InGameMessageNuxSystemMessage
// Dependencies: [5056, 1074, 7390, 7397, 7399, 2110, 1115, 7401, 2]
// Exports: createInGameMessageNuxSystemMessage

// Module 7482 (InGameMessageNuxSystemMessage)
import util from "util" /* 1115 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7390 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7397 */;
import ApplicationStore from "ApplicationStore" /* 5056 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx");

export const createInGameMessageNuxSystemMessage = function createInGameMessageNuxSystemMessage(message) {
  message = message.message;
  ({ theme, roleStyle } = message);
  let str = message.applicationId;
  if (str == null) {
    str = "";
  }
  const application = ApplicationStore.getApplication(str);
  if (null == application) {
    return null;
  } else {
    const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, gameName: null, urlOnClick: null };
    const obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj2.usernameOnClick = tmp(7399)(obj3);
    obj2.gameName = application.name;
    const obj4 = { action: "bindOpenUrl", url: null, linkColor: null, medium: true };
    obj4.url = tmp(2110).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS);
    obj4.linkColor = tmp3.linkColor;
    obj2.urlOnClick = obj4;
    const obj5 = { content: null };
    const intl = util.intl;
    obj5.content = intl.formatToParts(util.t["92erOB"], obj2);
    const merged = Object.assign(tmp(7401)(message));
    return obj5;
  }
  tmp3 = resolveMessageContentColorsDefault(theme);
};

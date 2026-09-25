// Module ID: 7481
// Function ID: 7482
// Name: ChannelLinkedToLobbySystemMessage
// Dependencies: [5056, 1074, 7390, 7397, 7399, 2110, 1115, 7401, 2]
// Exports: createChannelLinkedToLobbySystemMessage

// Module 7481 (ChannelLinkedToLobbySystemMessage)
import util from "util" /* 1115 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7390 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7397 */;
import ApplicationStore from "ApplicationStore" /* 5056 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx");

export const createChannelLinkedToLobbySystemMessage = function createChannelLinkedToLobbySystemMessage(message) {
  message = message.message;
  ({ roleStyle, theme } = message);
  const tmp3 = resolveMessageContentColorsDefault(theme);
  let str = message.applicationId;
  if (str == null) {
    str = "";
  }
  const application = ApplicationStore.getApplication(str);
  if (null == application) {
    return null;
  } else {
    const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, applicationName: null, applicationNameOnClick: null, urlOnClick: null };
    const obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj2.usernameOnClick = tmp(7399)(obj3);
    obj2.applicationName = application.name;
    const obj4 = { linkColor: tmp3.defaultUsernameColor, medium: true };
    obj2.applicationNameOnClick = obj4;
    const obj5 = { action: "bindOpenUrl", url: null, linkColor: null, medium: true };
    obj5.url = tmp(2110).getArticleURL(HelpdeskArticles.LINKED_LOBBIES);
    obj5.linkColor = tmp3.linkColor;
    obj2.urlOnClick = obj5;
    const obj6 = { content: null };
    const intl = util.intl;
    obj6.content = intl.formatToParts(util.t.gZfhOw, obj2);
    const merged = Object.assign(tmp(7401)(message));
    return obj6;
  }
};

// Module ID: 7670
// Function ID: 7671
// Name: ChannelLinkedToLobbySystemMessage
// Dependencies: [5072, 1074, 7568, 7575, 7577, 2110, 1115, 7579, 2]
// Exports: createChannelLinkedToLobbySystemMessage

// Module 7670 (ChannelLinkedToLobbySystemMessage)
import util from "util" /* 1115 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7568 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7575 */;
import ApplicationStore from "ApplicationStore" /* 5072 */;

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
    obj2.usernameOnClick = tmp(7577)(obj3);
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
    const merged = Object.assign(tmp(7579)(message));
    return obj6;
  }
};

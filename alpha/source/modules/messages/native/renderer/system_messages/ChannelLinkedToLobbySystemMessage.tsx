// Module ID: 8712
// Function ID: 8713
// Name: ChannelLinkedToLobbySystemMessage
// Dependencies: [2163, 1071, 8571, 8578, 8580, 2186, 1112, 8582, 2]
// Exports: createChannelLinkedToLobbySystemMessage

// Module 8712 (ChannelLinkedToLobbySystemMessage)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2186 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8571 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8578 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8580 */;
import ApplicationStore from "ApplicationStore" /* 2163 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx");

export function createChannelLinkedToLobbySystemMessage(message) {
  let intl;
  let obj3;
  let obj4;
  let obj5;
  let roleStyle;
  let theme;
  let tmpResult;
  message = message.message;
  ({ roleStyle, theme } = message);
  const tmp3 = resolveMessageContentColorsDefault(theme);
  let str = message.applicationId;
  const getApplication = ApplicationStore.getApplication;
  if (str == null) {
    str = "";
  }
  const application = getApplication(str);
  if (null == application) {
    return null;
  } else {
    const obj = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj3), applicationName: application.name, applicationNameOnClick: obj4, urlOnClick: obj5 };
    obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj4 = { linkColor: tmp3.defaultUsernameColor, medium: true };
    obj5 = { action: "bindOpenUrl", url: tmpResult.getArticleURL(HelpdeskArticles.LINKED_LOBBIES), linkColor: tmp3.linkColor, medium: true };
    tmpResult = HelpdeskUtilsDefault;
    const obj6 = { content: intl.formatToParts(intl2.t.gZfhOw, obj2) };
    intl = intl2.intl;
    const merged = Object.assign(tmp(8582)(message));
    return obj6;
  }
}

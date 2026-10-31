// Module ID: 8511
// Function ID: 8512
// Name: ChannelLinkedToLobbySystemMessage
// Dependencies: [2038, 1072, 8411, 8418, 8420, 2061, 1113, 8422, 2]
// Exports: createChannelLinkedToLobbySystemMessage

// Module 8511 (ChannelLinkedToLobbySystemMessage)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8411 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8418 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8420 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
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
    const merged = Object.assign(tmp(8422)(message));
    return obj6;
  }
}

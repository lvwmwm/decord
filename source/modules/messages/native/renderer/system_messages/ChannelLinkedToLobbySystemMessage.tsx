// Module ID: 7819
// Function ID: 61775
// Name: createChannelLinkedToLobbySystemMessage
// Dependencies: [4167, 653, 7731, 7738, 7740, 1920, 1212, 7741, 2]
// Exports: createChannelLinkedToLobbySystemMessage

// Module 7819 (createChannelLinkedToLobbySystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx");

export const createChannelLinkedToLobbySystemMessage = function createChannelLinkedToLobbySystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ roleStyle, theme } = message);
  const tmp = importDefault(7731)(theme);
  const applicationId = message.applicationId;
  let str = "";
  if (null != applicationId) {
    str = applicationId;
  }
  application = application.getApplication(str);
  if (null == application) {
    return null;
  } else {
    let obj = require(7738) /* getMessageAuthorWithProcessedColor */;
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    obj = { username: messageAuthorWithProcessedColor.nick };
    obj = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj.usernameOnClick = importDefault(7740)(obj);
    obj.applicationName = application.name;
    const obj1 = { linkColor: tmp.defaultUsernameColor, medium: true };
    obj.applicationNameOnClick = obj1;
    const obj2 = { action: "bindOpenUrl", url: importDefault(1920).getArticleURL(HelpdeskArticles.LINKED_LOBBIES), linkColor: tmp.linkColor, medium: true };
    obj.urlOnClick = obj2;
    const obj3 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj3.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.gZfhOw, obj);
    const merged = Object.assign(importDefault(7741)(message));
    return obj3;
  }
};

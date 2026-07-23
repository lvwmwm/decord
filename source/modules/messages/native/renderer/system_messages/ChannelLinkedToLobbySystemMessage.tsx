// Module ID: 7730
// Function ID: 61489
// Name: createChannelLinkedToLobbySystemMessage
// Dependencies: [4167, 653, 7642, 7649, 7651, 1920, 1212, 7652, 2]
// Exports: createChannelLinkedToLobbySystemMessage

// Module 7730 (createChannelLinkedToLobbySystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx");

export const createChannelLinkedToLobbySystemMessage = function createChannelLinkedToLobbySystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ roleStyle, theme } = message);
  const tmp = importDefault(7642)(theme);
  const applicationId = message.applicationId;
  let str = "";
  if (null != applicationId) {
    str = applicationId;
  }
  application = application.getApplication(str);
  if (null == application) {
    return null;
  } else {
    let obj = require(7649) /* getMessageAuthorWithProcessedColor */;
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    obj = { username: messageAuthorWithProcessedColor.nick };
    obj = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj.usernameOnClick = importDefault(7651)(obj);
    obj.applicationName = application.name;
    const obj1 = { linkColor: tmp.defaultUsernameColor, medium: true };
    obj.applicationNameOnClick = obj1;
    const obj2 = { action: "bindOpenUrl", url: importDefault(1920).getArticleURL(HelpdeskArticles.LINKED_LOBBIES), linkColor: tmp.linkColor, medium: true };
    obj.urlOnClick = obj2;
    const obj3 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj3.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.gZfhOw, obj);
    const merged = Object.assign(importDefault(7652)(message));
    return obj3;
  }
};

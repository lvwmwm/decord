// Module ID: 8191
// Function ID: 8192
// Name: createChannelLinkedToLobbySystemMessage
// Dependencies: [4382, 676, 8103, 8110, 8112, 1993, 1236, 8113, 2]
// Exports: createChannelLinkedToLobbySystemMessage

// Module 8191 (createChannelLinkedToLobbySystemMessage)
import addApplication from "addApplication";
import { HelpdeskArticles } from "ME";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx");

export const createChannelLinkedToLobbySystemMessage = function createChannelLinkedToLobbySystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ roleStyle, theme } = message);
  const tmp3 = importDefault(8103)(theme);
  let str = message.applicationId;
  if (str == null) {
    str = "";
  }
  application = application.getApplication(str);
  if (null == application) {
    return null;
  } else {
    let obj = require(8110) /* getMessageAuthorWithProcessedColor */;
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    obj = { username: null, usernameOnClick: null, applicationName: null, applicationNameOnClick: null, urlOnClick: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj = { message: null, author: null, roleStyle: null };
    obj[0] = message;
    obj[1] = messageAuthorWithProcessedColor;
    obj[2] = roleStyle;
    obj[1] = tmp(8112)(obj);
    obj[2] = application.name;
    const obj1 = { linkColor: null, medium: true };
    obj1[0] = tmp3.defaultUsernameColor;
    obj[3] = obj1;
    const obj2 = { action: "bindOpenUrl", url: null, linkColor: null, medium: true };
    obj2[1] = tmp(1993).getArticleURL(HelpdeskArticles.LINKED_LOBBIES);
    obj2[2] = tmp3.linkColor;
    obj[4] = obj2;
    const obj3 = { content: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj3[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t.gZfhOw, obj);
    const merged = Object.assign(tmp(8113)(message));
    return obj3;
  }
};

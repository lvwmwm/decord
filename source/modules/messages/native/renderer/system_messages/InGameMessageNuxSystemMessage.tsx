// Module ID: 7820
// Function ID: 61777
// Name: createInGameMessageNuxSystemMessage
// Dependencies: [4167, 653, 7731, 7738, 7740, 1920, 1212, 7741, 2]
// Exports: createInGameMessageNuxSystemMessage

// Module 7820 (createInGameMessageNuxSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx");

export const createInGameMessageNuxSystemMessage = function createInGameMessageNuxSystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ theme, roleStyle } = message);
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
    obj.gameName = application.name;
    const obj1 = { action: "bindOpenUrl", url: importDefault(1920).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS), linkColor: tmp.linkColor, medium: true };
    obj.urlOnClick = obj1;
    const obj2 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj2.content = intl.formatToParts(require(1212) /* getSystemLocale */.t["92erOB"], obj);
    const merged = Object.assign(importDefault(7741)(message));
    return obj2;
  }
  tmp = importDefault(7731)(theme);
};

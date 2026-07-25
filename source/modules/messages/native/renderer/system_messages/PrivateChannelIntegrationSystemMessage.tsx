// Module ID: 7754
// Function ID: 61718
// Name: createPrivateChannelIntegrationSystemMessage
// Dependencies: [653, 7684, 7686, 7719, 7687, 2]
// Exports: createPrivateChannelIntegrationSystemMessage

// Module 7754 (createPrivateChannelIntegrationSystemMessage)
import { MessageTypes } from "ME";

const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(roleStyle, type) {
  const message = roleStyle.message;
  let obj = require(7684) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp2 = importDefault(7686)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  const application = message.application;
  let bot;
  if (null != application) {
    bot = application.bot;
  }
  if (null != bot) {
    obj = { action: "bindUserMenu", userId: application.bot.id, messageChannelId: message.channel_id, medium: true };
  }
  obj = {};
  if (type === MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) {
    const obj1 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp2, applicationNameOnClick: tmp4 };
    let privateChannelIntegrationAddedSystemMessageASTContent = require(7719) /* getPrivateChannelIntegrationAddedSystemMessageContent */.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj1);
    const obj6 = require(7719) /* getPrivateChannelIntegrationAddedSystemMessageContent */;
  } else {
    const obj2 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp2, applicationNameOnClick: tmp4 };
    privateChannelIntegrationAddedSystemMessageASTContent = require(7719) /* getPrivateChannelIntegrationAddedSystemMessageContent */.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj2);
    const obj4 = require(7719) /* getPrivateChannelIntegrationAddedSystemMessageContent */;
  }
  obj.content = privateChannelIntegrationAddedSystemMessageASTContent;
  const merged = Object.assign(importDefault(7687)(roleStyle));
  return obj;
};

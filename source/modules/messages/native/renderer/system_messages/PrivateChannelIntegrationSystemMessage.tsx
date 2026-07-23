// Module ID: 7718
// Function ID: 61460
// Name: createPrivateChannelIntegrationSystemMessage
// Dependencies: [653, 7649, 7651, 7683, 7652, 2]
// Exports: createPrivateChannelIntegrationSystemMessage

// Module 7718 (createPrivateChannelIntegrationSystemMessage)
import { MessageTypes } from "ME";

const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(roleStyle, type) {
  const message = roleStyle.message;
  let obj = require(7649) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp2 = importDefault(7651)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
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
    let privateChannelIntegrationAddedSystemMessageASTContent = require(7683) /* getPrivateChannelIntegrationAddedSystemMessageContent */.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj1);
    const obj6 = require(7683) /* getPrivateChannelIntegrationAddedSystemMessageContent */;
  } else {
    const obj2 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp2, applicationNameOnClick: tmp4 };
    privateChannelIntegrationAddedSystemMessageASTContent = require(7683) /* getPrivateChannelIntegrationAddedSystemMessageContent */.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj2);
    const obj4 = require(7683) /* getPrivateChannelIntegrationAddedSystemMessageContent */;
  }
  obj.content = privateChannelIntegrationAddedSystemMessageASTContent;
  const merged = Object.assign(importDefault(7652)(roleStyle));
  return obj;
};

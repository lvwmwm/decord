// Module ID: 7790
// Function ID: 61809
// Name: createPrivateChannelIntegrationSystemMessage
// Dependencies: [653, 7720, 7722, 7755, 7723, 2]
// Exports: createPrivateChannelIntegrationSystemMessage

// Module 7790 (createPrivateChannelIntegrationSystemMessage)
import { MessageTypes } from "ME";

const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(roleStyle, type) {
  const message = roleStyle.message;
  let obj = require(7720) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp2 = importDefault(7722)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
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
    let privateChannelIntegrationAddedSystemMessageASTContent = require(7755) /* getPrivateChannelIntegrationAddedSystemMessageContent */.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj1);
    const obj6 = require(7755) /* getPrivateChannelIntegrationAddedSystemMessageContent */;
  } else {
    const obj2 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp2, applicationNameOnClick: tmp4 };
    privateChannelIntegrationAddedSystemMessageASTContent = require(7755) /* getPrivateChannelIntegrationAddedSystemMessageContent */.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj2);
    const obj4 = require(7755) /* getPrivateChannelIntegrationAddedSystemMessageContent */;
  }
  obj.content = privateChannelIntegrationAddedSystemMessageASTContent;
  const merged = Object.assign(importDefault(7723)(roleStyle));
  return obj;
};

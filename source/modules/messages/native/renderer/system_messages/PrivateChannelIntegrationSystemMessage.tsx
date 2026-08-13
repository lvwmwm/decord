// Module ID: 8183
// Function ID: 8184
// Name: createPrivateChannelIntegrationSystemMessage
// Dependencies: [676, 8114, 8116, 8148, 8117, 2]
// Exports: createPrivateChannelIntegrationSystemMessage

// Module 8183 (createPrivateChannelIntegrationSystemMessage)
import { MessageTypes } from "ME";

const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(roleStyle, type) {
  const message = roleStyle.message;
  let obj = require(8114) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp5 = importDefault(8116)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  const application = message.application;
  let bot;
  if (application != null) {
    bot = application.bot;
  }
  if (null != bot) {
    obj = { action: "bindUserMenu", userId: null, messageChannelId: null, medium: true };
    obj[1] = application.bot.id;
    obj[2] = message.channel_id;
  }
  if (type === MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) {
    let tmpResult = tmp(8148);
    obj = { application: null, username: null, usernameOnClick: null, applicationNameOnClick: null };
    obj[0] = application;
    obj[1] = messageAuthorWithProcessedColor.nick;
    obj[2] = tmp5;
    obj[3] = tmp7;
    let privateChannelIntegrationAddedSystemMessageASTContent = tmpResult.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj);
  } else {
    tmpResult = tmp(8148);
    const obj1 = { application: null, username: null, usernameOnClick: null, applicationNameOnClick: null };
    obj1[0] = application;
    obj1[1] = messageAuthorWithProcessedColor.nick;
    obj1[2] = tmp5;
    obj1[3] = tmp7;
    privateChannelIntegrationAddedSystemMessageASTContent = tmpResult.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj1);
  }
  const merged = Object.assign(importDefault(8117)(roleStyle));
  return { content: privateChannelIntegrationAddedSystemMessageASTContent };
};

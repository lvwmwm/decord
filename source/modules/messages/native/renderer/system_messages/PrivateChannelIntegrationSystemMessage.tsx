// Module ID: 8140
// Function ID: 8141
// Name: createPrivateChannelIntegrationSystemMessage
// Dependencies: [676, 8071, 8073, 8105, 8074, 2]
// Exports: createPrivateChannelIntegrationSystemMessage

// Module 8140 (createPrivateChannelIntegrationSystemMessage)
import { MessageTypes } from "ME";

const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(roleStyle, type) {
  const message = roleStyle.message;
  let obj = require(8071) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp5 = importDefault(8073)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
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
    let tmpResult = tmp(8105);
    obj = { application: null, username: null, usernameOnClick: null, applicationNameOnClick: null };
    obj[0] = application;
    obj[1] = messageAuthorWithProcessedColor.nick;
    obj[2] = tmp5;
    obj[3] = tmp7;
    let privateChannelIntegrationAddedSystemMessageASTContent = tmpResult.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj);
  } else {
    tmpResult = tmp(8105);
    const obj1 = { application: null, username: null, usernameOnClick: null, applicationNameOnClick: null };
    obj1[0] = application;
    obj1[1] = messageAuthorWithProcessedColor.nick;
    obj1[2] = tmp5;
    obj1[3] = tmp7;
    privateChannelIntegrationAddedSystemMessageASTContent = tmpResult.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj1);
  }
  const merged = Object.assign(importDefault(8074)(roleStyle));
  return { content: privateChannelIntegrationAddedSystemMessageASTContent };
};

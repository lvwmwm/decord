// Module ID: 7711
// Function ID: 61401
// Name: createPrivateChannelIntegrationSystemMessage
// Dependencies: []
// Exports: createPrivateChannelIntegrationSystemMessage

// Module 7711 (createPrivateChannelIntegrationSystemMessage)
const MessageTypes = require(dependencyMap[0]).MessageTypes;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(roleStyle, type) {
  const message = roleStyle.message;
  let obj = require(dependencyMap[1]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp2 = importDefault(dependencyMap[2])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
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
    let privateChannelIntegrationAddedSystemMessageASTContent = require(dependencyMap[3]).getPrivateChannelIntegrationAddedSystemMessageASTContent(obj1);
    const obj6 = require(dependencyMap[3]);
  } else {
    const obj2 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp2, applicationNameOnClick: tmp4 };
    privateChannelIntegrationAddedSystemMessageASTContent = require(dependencyMap[3]).getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj2);
    const obj4 = require(dependencyMap[3]);
  }
  obj.content = privateChannelIntegrationAddedSystemMessageASTContent;
  const merged = Object.assign(importDefault(dependencyMap[4])(roleStyle));
  return obj;
};

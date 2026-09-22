// Module ID: 8136
// Function ID: 8137
// Name: PrivateChannelIntegrationSystemMessage
// Dependencies: [1074, 8064, 8066, 8100, 8068, 2]
// Exports: createPrivateChannelIntegrationSystemMessage

// Module 8136 (PrivateChannelIntegrationSystemMessage)
import Constants from "Constants" /* 1074 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8064 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8066 */;
import createCommonMessageDefault from "createCommonMessage" /* 8068 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(roleStyle, type) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const tmp5 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  const application = message.application;
  let bot;
  if (application != null) {
    bot = application.bot;
  }
  if (null != bot) {
    const obj2 = { action: "bindUserMenu", userId: application.bot.id, messageChannelId: message.channel_id, medium: true };
  }
  if (type === MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) {
    const obj3 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp5, applicationNameOnClick: tmp7 };
    let privateChannelIntegrationAddedSystemMessageASTContent = tmp(8100).getPrivateChannelIntegrationAddedSystemMessageASTContent(obj3);
    const tmpResult = tmp(8100);
  } else {
    const obj4 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp5, applicationNameOnClick: tmp7 };
    privateChannelIntegrationAddedSystemMessageASTContent = tmp(8100).getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj4);
    const tmpResult2 = tmp(8100);
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: privateChannelIntegrationAddedSystemMessageASTContent };
};

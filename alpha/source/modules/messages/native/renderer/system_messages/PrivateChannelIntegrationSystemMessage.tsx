// Module ID: 8060
// Function ID: 8061
// Name: PrivateChannelIntegrationSystemMessage
// Dependencies: [1085, 7978, 7980, 8013, 7982, 2]
// Exports: createPrivateChannelIntegrationSystemMessage

// Module 8060 (PrivateChannelIntegrationSystemMessage)
import Constants from "Constants" /* 1085 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7978 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7980 */;
import PrivateChannelIntegrationSystemMessageUtils from "PrivateChannelIntegrationSystemMessageUtils" /* 8013 */;
import size from "module_2" /* 2 */;

let tmp4;
const createCommonMessageDefault = tmp4(7982);
const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(message, type) {
  let privateChannelIntegrationAddedSystemMessageASTContent;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp5 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle });
  const application = message.application;
  let bot;
  if (application != null) {
    bot = application.bot;
  }
  if (type === MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) {
    const obj3 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp5, applicationNameOnClick: tmp7 };
    const tmpResult = PrivateChannelIntegrationSystemMessageUtils;
    privateChannelIntegrationAddedSystemMessageASTContent = tmpResult.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj3);
  } else {
    const obj4 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp5, applicationNameOnClick: tmp7 };
    const tmpResult2 = PrivateChannelIntegrationSystemMessageUtils;
    privateChannelIntegrationAddedSystemMessageASTContent = tmpResult2.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj4);
  }
  const obj5 = { content: privateChannelIntegrationAddedSystemMessageASTContent };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj5;
};

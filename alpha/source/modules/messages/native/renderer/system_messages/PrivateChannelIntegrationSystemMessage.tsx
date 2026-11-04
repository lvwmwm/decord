// Module ID: 8640
// Function ID: 8641
// Name: PrivateChannelIntegrationSystemMessage
// Dependencies: [1072, 8559, 8561, 8594, 8563, 2]
// Exports: createPrivateChannelIntegrationSystemMessage

// Module 8640 (PrivateChannelIntegrationSystemMessage)
import Constants from "Constants" /* 1072 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8559 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8561 */;
import PrivateChannelIntegrationSystemMessageUtils from "PrivateChannelIntegrationSystemMessageUtils" /* 8594 */;
import size from "module_2" /* 2 */;

let tmp4;
const createCommonMessageDefault = tmp4(8563);
const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export function createPrivateChannelIntegrationSystemMessage(message, type) {
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
}

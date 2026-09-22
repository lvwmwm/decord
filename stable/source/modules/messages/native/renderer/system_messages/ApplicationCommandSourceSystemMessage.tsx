// Module ID: 8113
// Function ID: 8114
// Name: ApplicationCommandSourceSystemMessage
// Dependencies: [1074, 5081, 8114, 8064, 1114, 8066, 8068, 2]
// Exports: createApplicationCommandSourceSystemMessage

// Module 8113 (ApplicationCommandSourceSystemMessage)
import Constants from "Constants" /* 1074 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5081 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8066 */;
import createCommonMessageDefault from "createCommonMessage" /* 8068 */;
import ApplicationCommands from "ApplicationCommands" /* 8114 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx");

export const createApplicationCommandSourceSystemMessage = function createApplicationCommandSourceSystemMessage(message) {
  message = message.message;
  const applicationCommand = ApplicationCommands.getApplicationCommand(message.content);
  const application = message.application;
  if (application != null) {
    const name = application.name;
  }
  if (null != applicationCommand) {
    if (null != name) {
      const messageAuthorWithProcessedColor = tmp(8064).getMessageAuthorWithProcessedColor(message);
      const intl = tmp(1114).intl;
      const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, commandName: null, applicationName: null };
      const obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      obj2.usernameOnClick = formatUsernameOnClickDefault(obj3);
      if (message.type === MessageTypes.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let name2 = "" + COMMAND_SENTINEL + applicationCommand.name;
      } else {
        name2 = applicationCommand.name;
      }
      const obj4 = { content: null };
      obj2.commandName = name2;
      obj2.applicationName = name;
      obj4.content = intl.formatToParts(tmp(1114).t["1Zm+zw"], obj2);
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj4;
    }
  }
  return null;
};

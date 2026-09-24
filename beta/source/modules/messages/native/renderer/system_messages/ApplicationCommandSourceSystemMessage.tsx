// Module ID: 8304
// Function ID: 8305
// Name: ApplicationCommandSourceSystemMessage
// Dependencies: [1078, 5245, 8305, 8255, 1119, 8257, 8259, 2]
// Exports: createApplicationCommandSourceSystemMessage

// Module 8304 (ApplicationCommandSourceSystemMessage)
import Constants from "Constants" /* 1078 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5245 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8257 */;
import createCommonMessageDefault from "createCommonMessage" /* 8259 */;
import ApplicationCommands from "ApplicationCommands" /* 8305 */;
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
      const messageAuthorWithProcessedColor = tmp(8255).getMessageAuthorWithProcessedColor(message);
      const intl = tmp(1119).intl;
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
      obj4.content = intl.formatToParts(tmp(1119).t["1Zm+zw"], obj2);
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj4;
    }
  }
  return null;
};

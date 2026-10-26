// Module ID: 8379
// Function ID: 8380
// Name: ApplicationCommandSourceSystemMessage
// Dependencies: [1087, 5984, 8380, 8318, 1128, 8320, 8322, 2]
// Exports: createApplicationCommandSourceSystemMessage

// Module 8379 (ApplicationCommandSourceSystemMessage)
import Constants from "Constants" /* 1087 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5984 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8318 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8320 */;
import _slicedToArray from "_slicedToArray" /* 8380 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx");

export const createApplicationCommandSourceSystemMessage = function createApplicationCommandSourceSystemMessage(message) {
  let name;
  let name2;
  let obj3;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = _slicedToArray;
  const applicationCommand = obj.getApplicationCommand(message.content);
  const application = message.application;
  if (application != null) {
    name = application.name;
  }
  if (null != applicationCommand) {
    if (null != name) {
      const tmpResult = useAuthorWithProcessedColor;
      const messageAuthorWithProcessedColor = tmpResult.getMessageAuthorWithProcessedColor(message);
      const intl = tmp(1128).intl;
      const formatToParts = intl.formatToParts;
      const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj3), commandName: name2, applicationName: name };
      const prop = tmp(1128).t["1Zm+zw"];
      obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle };
      const tmp10 = importDefault;
      if (message.type === MessageTypes.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        name2 = "" + COMMAND_SENTINEL + applicationCommand.name;
      } else {
        name2 = applicationCommand.name;
      }
      const obj4 = { content: formatToParts(prop, obj2) };
      const merged = Object.assign(tmp10(8322)(message));
      return obj4;
    }
  }
  return null;
};

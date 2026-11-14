// Module ID: 9249
// Function ID: 9250
// Name: ApplicationCommandSourceSystemMessage
// Dependencies: [1072, 6346, 9250, 9188, 1113, 9190, 9192, 2]
// Exports: createApplicationCommandSourceSystemMessage

// Module 9249 (ApplicationCommandSourceSystemMessage)
import Constants from "Constants" /* 1072 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 6346 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 9188 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 9190 */;
import _slicedToArray from "_slicedToArray" /* 9250 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx");

export function createApplicationCommandSourceSystemMessage(message) {
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
      const intl = tmp(1113).intl;
      const formatToParts = intl.formatToParts;
      const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj3), commandName: name2, applicationName: name };
      const prop = tmp(1113).t["1Zm+zw"];
      obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle };
      const tmp10 = importDefault;
      if (message.type === MessageTypes.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        name2 = "" + COMMAND_SENTINEL + applicationCommand.name;
      } else {
        name2 = applicationCommand.name;
      }
      const obj4 = { content: formatToParts(prop, obj2) };
      const merged = Object.assign(tmp10(9192)(message));
      return obj4;
    }
  }
  return null;
}

// Module ID: 8377
// Function ID: 8378
// Name: ApplicationCommandSourceSystemMessage
// Dependencies: [1087, 5982, 8378, 8316, 1128, 8318, 8320, 2]
// Exports: createApplicationCommandSourceSystemMessage

// Module 8377 (ApplicationCommandSourceSystemMessage)
import Constants from "Constants" /* 1087 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5982 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8316 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8318 */;
import _slicedToArray from "_slicedToArray" /* 8378 */;
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
      const merged = Object.assign(tmp10(8320)(message));
      return obj4;
    }
  }
  return null;
};

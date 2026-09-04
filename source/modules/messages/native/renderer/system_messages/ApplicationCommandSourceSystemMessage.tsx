// Module ID: 7940
// Function ID: 7941
// Name: createApplicationCommandSourceSystemMessage
// Dependencies: [673, 4961, 7941, 7891, 1233, 7893, 7895, 2]
// Exports: createApplicationCommandSourceSystemMessage

// Module 7940 (createApplicationCommandSourceSystemMessage)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import regExp from "regExp" /* 4961 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7893 */;
import createCommonMessageDefault from "createCommonMessage" /* 7895 */;
import getApplicationCommand from "getApplicationCommand" /* 7941 */;

const MessageTypes = ME.MessageTypes;
const COMMAND_SENTINEL = regExp.COMMAND_SENTINEL;
const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx");

export const createApplicationCommandSourceSystemMessage = function createApplicationCommandSourceSystemMessage(message) {
  message = message.message;
  let obj = getApplicationCommand;
  const applicationCommand = obj.getApplicationCommand(message.content);
  const application = message.application;
  if (application != null) {
    const name = application.name;
  }
  if (null != applicationCommand) {
    if (null != name) {
      const messageAuthorWithProcessedColor = tmp(7891).getMessageAuthorWithProcessedColor(message);
      const intl = tmp(1233).intl;
      obj = { username: null, usernameOnClick: null, commandName: null, applicationName: null };
      obj[0] = messageAuthorWithProcessedColor.nick;
      obj = { message: null, author: null, roleStyle: null };
      obj[0] = message;
      obj[1] = messageAuthorWithProcessedColor;
      obj[2] = message.roleStyle;
      obj[1] = formatUsernameOnClickDefault(obj);
      if (message.type === MessageTypes.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let name2 = "" + COMMAND_SENTINEL + applicationCommand.name;
      } else {
        name2 = applicationCommand.name;
      }
      obj1 = { content: null };
      obj[2] = name2;
      obj[3] = name;
      obj1[0] = intl.formatToParts(tmp(1233).t["1Zm+zw"], obj);
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj1;
    }
  }
  return null;
};

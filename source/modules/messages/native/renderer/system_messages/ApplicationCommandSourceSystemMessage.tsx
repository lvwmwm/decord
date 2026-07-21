// Module ID: 7689
// Function ID: 61350
// Name: createApplicationCommandSourceSystemMessage
// Dependencies: []
// Exports: createApplicationCommandSourceSystemMessage

// Module 7689 (createApplicationCommandSourceSystemMessage)
const MessageTypes = require(dependencyMap[0]).MessageTypes;
const COMMAND_SENTINEL = require(dependencyMap[1]).COMMAND_SENTINEL;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx");

export const createApplicationCommandSourceSystemMessage = function createApplicationCommandSourceSystemMessage(message) {
  message = message.message;
  let obj = require(dependencyMap[2]);
  const applicationCommand = obj.getApplicationCommand(message.content);
  const application = message.application;
  if (null != application) {
    const name = application.name;
  }
  if (null != applicationCommand) {
    if (null != name) {
      let obj1 = require(dependencyMap[3]);
      const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
      obj = {};
      const intl = require(dependencyMap[4]).intl;
      obj = { username: messageAuthorWithProcessedColor.nick };
      obj1 = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      obj.usernameOnClick = importDefault(dependencyMap[5])(obj1);
      if (message.type === MessageTypes.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let name2 = "" + COMMAND_SENTINEL + applicationCommand.name;
      } else {
        name2 = applicationCommand.name;
      }
      obj.commandName = name2;
      obj.applicationName = name;
      obj.content = intl.formatToParts(require(dependencyMap[4]).t.1Zm+zw, obj);
      const merged = Object.assign(importDefault(dependencyMap[6])(message));
      return obj;
    }
  }
  return null;
};

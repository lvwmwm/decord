// Module ID: 7732
// Function ID: 61668
// Name: createApplicationCommandSourceSystemMessage
// Dependencies: [653, 4568, 7733, 7684, 1212, 7686, 7687, 2]
// Exports: createApplicationCommandSourceSystemMessage

// Module 7732 (createApplicationCommandSourceSystemMessage)
import { MessageTypes } from "ME";
import { COMMAND_SENTINEL } from "regExp";

const result = require("getApplicationCommand").fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx");

export const createApplicationCommandSourceSystemMessage = function createApplicationCommandSourceSystemMessage(message) {
  message = message.message;
  let obj = require(7733) /* getApplicationCommand */;
  const applicationCommand = obj.getApplicationCommand(message.content);
  const application = message.application;
  if (null != application) {
    const name = application.name;
  }
  if (null != applicationCommand) {
    if (null != name) {
      let obj1 = require(7684) /* getMessageAuthorWithProcessedColor */;
      const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
      obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { username: messageAuthorWithProcessedColor.nick };
      obj1 = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      obj.usernameOnClick = importDefault(7686)(obj1);
      if (message.type === MessageTypes.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let name2 = "" + COMMAND_SENTINEL + applicationCommand.name;
      } else {
        name2 = applicationCommand.name;
      }
      obj.commandName = name2;
      obj.applicationName = name;
      obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t["1Zm+zw"], obj);
      const merged = Object.assign(importDefault(7687)(message));
      return obj;
    }
  }
  return null;
};

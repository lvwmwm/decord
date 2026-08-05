// Module ID: 7898
// Function ID: 7899
// Name: createApplicationCommandSourceSystemMessage
// Dependencies: [676, 4689, 7899, 7851, 1236, 7853, 7854, 2]
// Exports: createApplicationCommandSourceSystemMessage

// Module 7898 (createApplicationCommandSourceSystemMessage)
import { MessageTypes } from "ME";
import { COMMAND_SENTINEL } from "regExp";

const result = require("getApplicationCommand").fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx");

export const createApplicationCommandSourceSystemMessage = function createApplicationCommandSourceSystemMessage(message) {
  message = message.message;
  let obj = require(7899) /* getApplicationCommand */;
  const applicationCommand = obj.getApplicationCommand(message.content);
  const application = message.application;
  if (application != null) {
    const name = application.name;
  }
  if (null != applicationCommand) {
    if (null != name) {
      const messageAuthorWithProcessedColor = tmp(7851).getMessageAuthorWithProcessedColor(message);
      const intl = tmp(1236).intl;
      obj = { username: null, usernameOnClick: null, commandName: null, applicationName: null };
      obj[0] = messageAuthorWithProcessedColor.nick;
      obj = { message: null, author: null, roleStyle: null };
      obj[0] = message;
      obj[1] = messageAuthorWithProcessedColor;
      obj[2] = message.roleStyle;
      obj[1] = importDefault(7853)(obj);
      if (message.type === MessageTypes.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let name2 = "" + COMMAND_SENTINEL + applicationCommand.name;
      } else {
        name2 = applicationCommand.name;
      }
      const obj1 = { content: null };
      obj[2] = name2;
      obj[3] = name;
      obj1[0] = intl.formatToParts(tmp(1236).t["1Zm+zw"], obj);
      const merged = Object.assign(importDefault(7854)(message));
      return obj1;
    }
  }
  return null;
};

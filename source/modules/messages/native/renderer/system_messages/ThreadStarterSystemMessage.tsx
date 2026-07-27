// Module ID: 7735
// Function ID: 61674
// Name: createThreadStarterSystemMessage
// Dependencies: [5829, 653, 44, 1212, 7687, 2]
// Exports: createThreadStarterSystemMessage

// Module 7735 (createThreadStarterSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ReferencedMessageState } from "_isNativeReflectConstruct";
import { MessageTypes } from "ME";

const require = arg1;
const result = require("invariant").fileFinishedImporting("modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx");

export const createThreadStarterSystemMessage = function createThreadStarterSystemMessage(message) {
  message = message.message;
  const type = message.type;
  importDefault(44)(type === MessageTypes.THREAD_STARTER_MESSAGE, "cannot call createThreadStarterSystemMessage on a message of type " + type);
  let tmp3 = null;
  if (messageByReference.getMessageByReference(message.messageReference).state !== ReferencedMessageState.LOADED) {
    const obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.content = intl.string(require(1212) /* getSystemLocale */.t.OCs36J);
    const merged = Object.assign(importDefault(7687)(message));
    tmp3 = obj;
  }
  return tmp3;
};

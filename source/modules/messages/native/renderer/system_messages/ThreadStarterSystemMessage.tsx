// Module ID: 7771
// Function ID: 61764
// Name: createThreadStarterSystemMessage
// Dependencies: [5839, 653, 44, 1212, 7723, 2]
// Exports: createThreadStarterSystemMessage

// Module 7771 (createThreadStarterSystemMessage)
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
    const merged = Object.assign(importDefault(7723)(message));
    tmp3 = obj;
  }
  return tmp3;
};

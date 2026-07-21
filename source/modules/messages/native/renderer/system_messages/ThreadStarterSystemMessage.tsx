// Module ID: 7692
// Function ID: 61356
// Name: createThreadStarterSystemMessage
// Dependencies: []
// Exports: createThreadStarterSystemMessage

// Module 7692 (createThreadStarterSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
const ReferencedMessageState = arg1(dependencyMap[0]).ReferencedMessageState;
const MessageTypes = arg1(dependencyMap[1]).MessageTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx");

export const createThreadStarterSystemMessage = function createThreadStarterSystemMessage(message) {
  message = message.message;
  const type = message.type;
  importDefault(dependencyMap[2])(type === MessageTypes.THREAD_STARTER_MESSAGE, "cannot call createThreadStarterSystemMessage on a message of type " + type);
  let tmp3 = null;
  if (messageByReference.getMessageByReference(message.messageReference).state !== ReferencedMessageState.LOADED) {
    const obj = {};
    const intl = arg1(dependencyMap[3]).intl;
    obj.content = intl.string(arg1(dependencyMap[3]).t.OCs36J);
    const merged = Object.assign(importDefault(dependencyMap[4])(message));
    tmp3 = obj;
  }
  return tmp3;
};

// Module ID: 7455
// Function ID: 7456
// Name: ThreadStarterSystemMessage
// Dependencies: [7013, 1074, 38, 1115, 7406, 2]
// Exports: createThreadStarterSystemMessage

// Module 7455 (ThreadStarterSystemMessage)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 7013 */;
import size from "module_2" /* 2 */;

const ReferencedMessageStore = ReferencedMessageStore2;

let tmp;
const createCommonMessageDefault = tmp(7406);
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx");

export const createThreadStarterSystemMessage = function createThreadStarterSystemMessage(message) {
  let intl;
  message = message.message;
  const type = message.type;
  const messageReference = message.messageReference;
  const tmp3 = _modDef38;
  tmp3(type === MessageTypes.THREAD_STARTER_MESSAGE, "cannot call createThreadStarterSystemMessage on a message of type " + type);
  let tmp5 = null;
  if (ReferencedMessageStore.getMessageByReference(messageReference).state !== ReferencedMessageState.LOADED) {
    const obj = { content: intl.string(intl2.t.OCs36J) };
    intl = intl2.intl;
    const merged = Object.assign(createCommonMessageDefault(message));
    tmp5 = obj;
  }
  return tmp5;
};

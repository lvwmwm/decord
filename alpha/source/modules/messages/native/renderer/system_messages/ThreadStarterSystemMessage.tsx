// Module ID: 8437
// Function ID: 8438
// Name: ThreadStarterSystemMessage
// Dependencies: [7754, 1084, 38, 1125, 8377, 2]
// Exports: createThreadStarterSystemMessage

// Module 8437 (ThreadStarterSystemMessage)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 7754 */;
import size from "module_2" /* 2 */;

const ReferencedMessageStore = ReferencedMessageStore2;

let tmp;
const createCommonMessageDefault = tmp(8377);
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx");

export function createThreadStarterSystemMessage(message) {
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
}

// Module ID: 8583
// Function ID: 8584
// Name: ThreadStarterSystemMessage
// Dependencies: [7875, 1072, 38, 1113, 8526, 2]
// Exports: createThreadStarterSystemMessage

// Module 8583 (ThreadStarterSystemMessage)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 7875 */;
import size from "module_2" /* 2 */;

const ReferencedMessageStore = ReferencedMessageStore2;

let tmp;
const createCommonMessageDefault = tmp(8526);
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx");

export function createThreadStarterSystemMessage(message) {
  message = message.message;
  const type = message.type;
  const messageReference = message.messageReference;
  const tmp3 = _modDef38;
  tmp3(type === MessageTypes.THREAD_STARTER_MESSAGE, "cannot call createThreadStarterSystemMessage on a message of type " + type);
  const messageByReference = ReferencedMessageStore.getMessageByReference(messageReference);
  let tmp7 = null;
  if (messageByReference.state !== ReferencedMessageState.LOADED) {
    let OCs36J;
    const intl = intl2.intl;
    const string = intl.string;
    if (messageByReference.state === tmp6.DELETED) {
      OCs36J = tmp10(1113).t.mE3KJN;
    } else {
      OCs36J = tmp10(1113).t.OCs36J;
    }
    const obj = { content: string(OCs36J) };
    const merged = Object.assign(createCommonMessageDefault(message));
    tmp7 = obj;
  }
  return tmp7;
}

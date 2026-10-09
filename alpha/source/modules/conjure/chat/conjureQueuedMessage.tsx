// Module ID: 17149
// Function ID: 17150
// Name: conjureQueuedMessage
// Dependencies: [13164, 2]
// Exports: queuedMessageActionHandler

// Module 17149 (conjureQueuedMessage)
import ConjureConnectionStore from "ConjureConnectionStore" /* 13164 */;
import size from "module_2" /* 2 */;

const sendQueuedMessageAction = ConjureConnectionStore.sendQueuedMessageAction;
const result = size.fileFinishedImporting("modules/conjure/chat/conjureQueuedMessage.tsx");

export const queuedMessageActionHandler = function queuedMessageActionHandler(projectId, message, stateFromStores) {
  let closure_0 = projectId;
  if ("user" === message.role) {
    if ("queued" === message.disposition) {
      if (null != message.user_id) {
        if (message.user_id === stateFromStores) {
          return (arg0) => sendQueuedMessageAction(projectId, message.id, arg0);
        }
      }
    }
  }
};

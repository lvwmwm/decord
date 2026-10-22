// Module ID: 12308
// Function ID: 12309
// Name: conjureQueuedMessage
// Dependencies: [10687, 2]
// Exports: queuedMessageActionHandler

// Module 12308 (conjureQueuedMessage)
import conjureChatConnection from "conjureChatConnection" /* 10687 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/conjureQueuedMessage.tsx");

export const queuedMessageActionHandler = function queuedMessageActionHandler(projectId, message, stateFromStores) {
  let closure_0 = projectId;
  if ("user" === message.role) {
    if ("queued" === message.disposition) {
      if (null != message.user_id) {
        if (message.user_id === stateFromStores) {
          return (arg0) => {
            const obj = conjureChatConnection;
            return obj.sendQueuedMessageAction(projectId, message.id, arg0);
          };
        }
      }
    }
  }
};

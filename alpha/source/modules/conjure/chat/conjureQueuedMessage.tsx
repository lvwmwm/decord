// Module ID: 17207
// Function ID: 17208
// Name: conjureQueuedMessage
// Dependencies: [13231, 2]
// Exports: queuedMessageActionHandler

// Module 17207 (conjureQueuedMessage)
import conjureChatConnection from "conjureChatConnection" /* 13231 */;
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

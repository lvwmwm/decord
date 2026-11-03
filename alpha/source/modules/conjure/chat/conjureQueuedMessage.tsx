// Module ID: 12716
// Function ID: 12717
// Name: conjureQueuedMessage
// Dependencies: [11002, 2]
// Exports: queuedMessageActionHandler, queuedUserMessages

// Module 12716 (conjureQueuedMessage)
import conjureChatConnection from "conjureChatConnection" /* 11002 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/conjureQueuedMessage.tsx");

export function queuedMessageActionHandler(projectId, message, stateFromStores) {
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
}
export function queuedUserMessages(stateFromStores) {
  return stateFromStores.filter((role) => "user" === role.role && "queued" === role.disposition);
}

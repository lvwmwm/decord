// Module ID: 17417
// Function ID: 17418
// Name: MessageQueueManager
// Dependencies: [6735, 7448, 2]

// Module 17417 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7448 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6735 */;

class MessageQueueManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
}
MessageQueueManager.prototype["handleLogout"] = function handleLogout() {
  MessageQueueDefault.clear();
};
const messageQueueManager = new MessageQueueManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/MessageQueueManager.tsx");

export default messageQueueManager;

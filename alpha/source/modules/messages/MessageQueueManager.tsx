// Module ID: 17159
// Function ID: 17160
// Name: MessageQueueManager
// Dependencies: [6534, 7248, 2]

// Module 17159 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7248 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6534 */;

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

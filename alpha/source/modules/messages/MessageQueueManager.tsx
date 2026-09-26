// Module ID: 17189
// Function ID: 17190
// Name: MessageQueueManager
// Dependencies: [6539, 7253, 2]

// Module 17189 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7253 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;

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

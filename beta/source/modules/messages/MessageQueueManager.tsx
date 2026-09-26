// Module ID: 17834
// Function ID: 17835
// Name: MessageQueueManager
// Dependencies: [7395, 8108, 2]

// Module 17834 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8108 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;

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

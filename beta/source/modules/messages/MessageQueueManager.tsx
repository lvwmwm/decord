// Module ID: 17832
// Function ID: 17833
// Name: MessageQueueManager
// Dependencies: [7365, 8081, 2]

// Module 17832 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8081 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

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

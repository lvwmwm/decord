// Module ID: 17829
// Function ID: 17830
// Name: MessageQueueManager
// Dependencies: [7363, 8076, 2]

// Module 17829 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8076 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7363 */;

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

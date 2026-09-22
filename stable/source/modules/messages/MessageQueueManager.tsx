// Module ID: 17539
// Function ID: 17540
// Name: MessageQueueManager
// Dependencies: [7221, 7936, 2]

// Module 17539 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7936 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

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

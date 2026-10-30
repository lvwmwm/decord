// Module ID: 19471
// Function ID: 19472
// Name: MessageQueueManager
// Dependencies: [7281, 8376, 2]

// Module 19471 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8376 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7281 */;
import size from "module_2" /* 2 */;

class MessageQueueManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
  handleLogout() {
    const obj = MessageQueueDefault;
    obj.clear();
  }
}
const prototype = MessageQueueManager.prototype;
const messageQueueManager = new MessageQueueManager();
const result = size.fileFinishedImporting("modules/messages/MessageQueueManager.tsx");

export default messageQueueManager;

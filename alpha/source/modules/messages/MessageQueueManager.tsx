// Module ID: 18920
// Function ID: 18921
// Name: MessageQueueManager
// Dependencies: [7216, 8138, 2]

// Module 18920 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8138 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7216 */;
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

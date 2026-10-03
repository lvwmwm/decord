// Module ID: 17536
// Function ID: 17537
// Name: MessageQueueManager
// Dependencies: [6613, 7462, 2]

// Module 17536 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7462 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
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

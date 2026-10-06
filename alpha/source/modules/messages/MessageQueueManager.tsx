// Module ID: 17606
// Function ID: 17607
// Name: MessageQueueManager
// Dependencies: [6620, 7473, 2]

// Module 17606 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7473 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
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

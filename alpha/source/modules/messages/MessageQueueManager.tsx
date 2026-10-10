// Module ID: 18114
// Function ID: 18115
// Name: MessageQueueManager
// Dependencies: [6807, 7753, 2]

// Module 18114 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7753 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
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

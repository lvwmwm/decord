// Module ID: 19799
// Function ID: 19800
// Name: MessageQueueManager
// Dependencies: [7475, 6790, 2]

// Module 19799 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 6790 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;
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

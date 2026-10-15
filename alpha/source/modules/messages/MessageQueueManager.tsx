// Module ID: 18451
// Function ID: 18452
// Name: MessageQueueManager
// Dependencies: [7028, 7970, 2]

// Module 18451 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7970 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7028 */;
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

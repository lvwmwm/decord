// Module ID: 20361
// Function ID: 20362
// Name: MessageQueueManager
// Dependencies: [7892, 9027, 2]

// Module 20361 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 9027 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7892 */;
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

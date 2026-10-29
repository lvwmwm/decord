// Module ID: 19408
// Function ID: 19409
// Name: MessageQueueManager
// Dependencies: [7274, 8195, 2]

// Module 19408 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8195 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7274 */;
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

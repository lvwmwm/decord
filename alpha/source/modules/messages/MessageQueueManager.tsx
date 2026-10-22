// Module ID: 18794
// Function ID: 18795
// Name: MessageQueueManager
// Dependencies: [7199, 8125, 2]

// Module 18794 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8125 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7199 */;
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

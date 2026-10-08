// Module ID: 17888
// Function ID: 17889
// Name: MessageQueueManager
// Dependencies: [6797, 7726, 2]

// Module 17888 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7726 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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

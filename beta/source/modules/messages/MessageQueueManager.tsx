// Module ID: 18873
// Function ID: 18874
// Name: MessageQueueManager
// Dependencies: [7214, 8140, 2]

// Module 18873 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8140 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
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

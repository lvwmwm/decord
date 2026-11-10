// Module ID: 19961
// Function ID: 19962
// Name: MessageQueueManager
// Dependencies: [7353, 8459, 2]

// Module 19961 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8459 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7353 */;
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

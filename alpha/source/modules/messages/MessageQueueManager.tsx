// Module ID: 19810
// Function ID: 19811
// Name: MessageQueueManager
// Dependencies: [7423, 8525, 2]

// Module 19810 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8525 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7423 */;
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

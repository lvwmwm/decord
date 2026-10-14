// Module ID: 18212
// Function ID: 18213
// Name: MessageQueueManager
// Dependencies: [6812, 7760, 2]

// Module 18212 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7760 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6812 */;
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

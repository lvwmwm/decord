// Module ID: 18626
// Function ID: 18627
// Name: MessageQueueManager
// Dependencies: [7165, 8087, 2]

// Module 18626 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8087 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7165 */;
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

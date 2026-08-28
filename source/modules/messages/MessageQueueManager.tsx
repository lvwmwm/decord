// Module ID: 16933
// Function ID: 16934
// Name: handleLogout
// Dependencies: [5451, 7525, 2]

// Module 16933 (handleLogout)
import initializeDefault from "initialize" /* 5451 */;
import itemsDefault from "items" /* 7525 */;

initializeDefault;
class MessageQueueManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
}
MessageQueueManager.prototype["handleLogout"] = function handleLogout() {
  itemsDefault.clear();
};
const messageQueueManager = new MessageQueueManager();
const result = require("set").fileFinishedImporting("modules/messages/MessageQueueManager.tsx");

export default messageQueueManager;

// Module ID: 17238
// Function ID: 17239
// Name: handleLogout
// Dependencies: [5494, 7588, 2]

// Module 17238 (handleLogout)
import initializeDefault from "initialize" /* 5494 */;
import itemsDefault from "items" /* 7588 */;

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

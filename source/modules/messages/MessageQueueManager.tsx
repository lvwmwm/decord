// Module ID: 16764
// Function ID: 16765
// Name: handleLogout
// Dependencies: [5367, 7437, 2]

// Module 16764 (handleLogout)
import initializeDefault from "initialize" /* 5367 */;
import itemsDefault from "items" /* 7437 */;

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

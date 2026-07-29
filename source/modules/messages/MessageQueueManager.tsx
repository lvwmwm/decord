// Module ID: 16249
// Function ID: 16250
// Name: handleLogout
// Dependencies: [5134, 6145, 2]

// Module 16249 (handleLogout)
import "initialize";

class MessageQueueManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
}
MessageQueueManager.prototype["handleLogout"] = function handleLogout() {
  importDefault(6145).clear();
};
const messageQueueManager = new MessageQueueManager();
const result = require("set").fileFinishedImporting("modules/messages/MessageQueueManager.tsx");

export default messageQueueManager;

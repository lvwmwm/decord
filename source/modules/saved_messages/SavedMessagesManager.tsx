// Module ID: 16311
// Function ID: 16312
// Name: prototype
// Dependencies: [9556, 9935, 5134, 2]

// Module 16311 (prototype)
import "initialize";

let require = arg1;
let prototype = function SavedMessagesManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    }
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    if (obj.getConfig({ location: "saved_messages_manager" }).enabled) {
      const andUpdateSavedMessages = applyArgumentsResult(table[1]).fetchAndUpdateSavedMessages();
      const obj2 = applyArgumentsResult(table[1]);
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("initialize").fileFinishedImporting("modules/saved_messages/SavedMessagesManager.tsx");

export default prototype;

// Module ID: 16310
// Function ID: 16311
// Name: prototype
// Dependencies: [5134, 14699, 2]

// Module 16310 (prototype)
import "initialize";

let prototype = function SettingTreeManagerLifecycleManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const importDefault = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleConnectionOpen();
    }
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    applyArgumentsResult(table[1]).clearCaches();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/SettingTreeCacheLifecycleManager.tsx");

export default prototype;

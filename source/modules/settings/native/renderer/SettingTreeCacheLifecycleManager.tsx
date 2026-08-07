// Module ID: 16485
// Function ID: 16486
// Name: prototype
// Dependencies: [5260, 14856, 2]

// Module 16485 (prototype)
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

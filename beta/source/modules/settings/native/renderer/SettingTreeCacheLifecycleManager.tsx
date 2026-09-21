// Module ID: 17892
// Function ID: 17893
// Name: SettingTreeCacheLifecycleManager
// Dependencies: [7365, 14958, 2]

// Module 17892 (SettingTreeCacheLifecycleManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

const prototype = function SettingTreeManagerLifecycleManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  importDefault = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleConnectionOpen();
    }
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    applyArgumentsResult(dependencyMap[1]).clearCaches();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingTreeCacheLifecycleManager.tsx");

export default prototype1;

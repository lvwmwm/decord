// Module ID: 18867
// Function ID: 18868
// Name: SettingTreeCacheLifecycleManager
// Dependencies: [7199, 15921, 2]

// Module 18867 (SettingTreeCacheLifecycleManager)
import SettingTreeManagerDefault from "SettingTreeManager" /* 15921 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7199 */;
import size from "module_2" /* 2 */;

let importDefault;

class SettingTreeManagerLifecycleManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    importDefault = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return importDefault.handleConnectionOpen();
      }
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      const obj = SettingTreeManagerDefault;
      obj.clearCaches();
    };
    return applyArgumentsResult;
  }
}
const settingTreeManagerLifecycleManager = new SettingTreeManagerLifecycleManager();
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingTreeCacheLifecycleManager.tsx");

export default settingTreeManagerLifecycleManager;

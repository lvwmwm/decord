// Module ID: 17600
// Function ID: 17601
// Name: SettingTreeCacheLifecycleManager
// Dependencies: [6613, 14500, 2]

// Module 17600 (SettingTreeCacheLifecycleManager)
import SettingTreeManagerDefault from "SettingTreeManager" /* 14500 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
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

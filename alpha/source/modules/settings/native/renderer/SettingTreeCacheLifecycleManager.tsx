// Module ID: 17953
// Function ID: 17954
// Name: SettingTreeCacheLifecycleManager
// Dependencies: [6797, 14780, 2]

// Module 17953 (SettingTreeCacheLifecycleManager)
import SettingTreeManagerDefault from "SettingTreeManager" /* 14780 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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

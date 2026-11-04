// Module ID: 19896
// Function ID: 19897
// Name: SettingTreeCacheLifecycleManager
// Dependencies: [7423, 16840, 2]

// Module 19896 (SettingTreeCacheLifecycleManager)
import SettingTreeManagerDefault from "SettingTreeManager" /* 16840 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7423 */;
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

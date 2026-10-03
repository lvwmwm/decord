// Module ID: 17459
// Function ID: 17460
// Name: DeclarativeSystemNotifPermissionManager
// Dependencies: [15825, 6613, 2]

// Module 17459 (DeclarativeSystemNotifPermissionManager)
import DeclarativeSystemNotifPermissionActionCreators from "DeclarativeSystemNotifPermissionActionCreators" /* 15825 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

function handleAppStateChanged(state) {
  if ("active" === state.state) {
    const obj = DeclarativeSystemNotifPermissionActionCreators;
    const result = obj.refreshSystemNotifPermissionsAsync("app_state_active");
  }
}
class DeclarativeSystemNotifPermissionManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { APP_STATE_UPDATE: handleAppStateChanged };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const declarativeSystemNotifPermissionManager = new DeclarativeSystemNotifPermissionManager();
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionManager.tsx");

export default declarativeSystemNotifPermissionManager;

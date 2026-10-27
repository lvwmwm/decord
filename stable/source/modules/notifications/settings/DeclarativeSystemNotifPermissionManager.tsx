// Module ID: 18473
// Function ID: 18474
// Name: DeclarativeSystemNotifPermissionManager
// Dependencies: [17029, 7085, 2]

// Module 18473 (DeclarativeSystemNotifPermissionManager)
import DeclarativeSystemNotifPermissionActionCreators from "DeclarativeSystemNotifPermissionActionCreators" /* 17029 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7085 */;
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

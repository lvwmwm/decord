// Module ID: 17792
// Function ID: 17793
// Name: DeclarativeSystemNotifPermissionManager
// Dependencies: [16127, 6797, 2]

// Module 17792 (DeclarativeSystemNotifPermissionManager)
import DeclarativeSystemNotifPermissionActionCreators from "DeclarativeSystemNotifPermissionActionCreators" /* 16127 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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

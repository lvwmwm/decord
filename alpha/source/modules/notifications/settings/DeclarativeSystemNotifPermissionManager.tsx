// Module ID: 18694
// Function ID: 18695
// Name: DeclarativeSystemNotifPermissionManager
// Dependencies: [17244, 7199, 2]

// Module 18694 (DeclarativeSystemNotifPermissionManager)
import DeclarativeSystemNotifPermissionActionCreators from "DeclarativeSystemNotifPermissionActionCreators" /* 17244 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7199 */;
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

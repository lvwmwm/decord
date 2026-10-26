// Module ID: 18915
// Function ID: 18916
// Name: NotifSettingsProtoManager
// Dependencies: [17334, 7214, 2]

// Module 18915 (NotifSettingsProtoManager)
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 17334 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
import size from "module_2" /* 2 */;

function handleConnectionRestored() {
  const obj = NotifSettingsActionCreators;
  const result = obj.schedulePersistPendingEditsIfNeeded();
}
function handleAppStateUpdate(state) {
  state = state.state;
  const tmp = "inactive" !== state && "background" !== state;
  if (!tmp) {
    const obj = NotifSettingsActionCreators;
    const result = obj.schedulePersistPendingEditsIfNeeded();
  }
}
class NotifSettingsProtoManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { POST_CONNECTION_OPEN: handleConnectionRestored, CONNECTION_RESUMED: handleConnectionRestored, APP_STATE_UPDATE: handleAppStateUpdate };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const notifSettingsProtoManager = new NotifSettingsProtoManager();
let result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsProtoManager.tsx");

export default notifSettingsProtoManager;

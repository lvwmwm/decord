// Module ID: 18669
// Function ID: 18670
// Name: NotifSettingsProtoManager
// Dependencies: [17086, 7165, 2]

// Module 18669 (NotifSettingsProtoManager)
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 17086 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7165 */;
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

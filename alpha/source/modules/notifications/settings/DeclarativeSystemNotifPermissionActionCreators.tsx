// Module ID: 16256
// Function ID: 16257
// Name: DeclarativeSystemNotifPermissionActionCreators
// Dependencies: [16257, 16258, 573, 16259, 2]
// Exports: refreshSystemNotifPermissionsAsync

// Module 16256 (DeclarativeSystemNotifPermissionActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 16258 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 16259 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 16257 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionActionCreators.tsx");

export const refreshSystemNotifPermissionsAsync = function refreshSystemNotifPermissionsAsync(app_state_active) {
  const result = DeclarativeSystemNotifPermissionHelpersDefault.refreshSystemNotifPermissions();
  if (null != result) {
    const disabledSettings = DeclarativeSystemNotifPermissionStore.getDisabledSettings();
    DispatcherDefault.dispatch(result);
    const tmpResult = DispatcherDefault;
    const result1 = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsReenabled(disabledSettings, result.disabledSettings, app_state_active);
  }
};

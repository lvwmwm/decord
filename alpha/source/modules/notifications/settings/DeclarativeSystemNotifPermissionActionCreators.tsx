// Module ID: 15825
// Function ID: 15826
// Name: DeclarativeSystemNotifPermissionActionCreators
// Dependencies: [15826, 15827, 584, 15828, 2]
// Exports: refreshSystemNotifPermissionsAsync

// Module 15825 (DeclarativeSystemNotifPermissionActionCreators)
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 15827 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 15828 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 15826 */;
import size from "module_2" /* 2 */;

let tmp;
const DispatcherDefault = tmp(584);
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionActionCreators.tsx");

export const refreshSystemNotifPermissionsAsync = function refreshSystemNotifPermissionsAsync(notification_settings_screen) {
  const obj = DeclarativeSystemNotifPermissionHelpersDefault;
  const result = obj.refreshSystemNotifPermissions();
  if (null != result) {
    const disabledSettings = DeclarativeSystemNotifPermissionStore.getDisabledSettings();
    const tmpResult = DispatcherDefault;
    tmpResult.dispatch(result);
    const obj3 = DeclarativeSystemNotifPermissionAnalytics;
    const result1 = obj3.trackSystemNotifSettingsReenabled(disabledSettings, result.disabledSettings, notification_settings_screen);
  }
};

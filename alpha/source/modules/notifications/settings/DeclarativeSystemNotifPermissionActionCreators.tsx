// Module ID: 16127
// Function ID: 16128
// Name: DeclarativeSystemNotifPermissionActionCreators
// Dependencies: [16128, 16129, 584, 16130, 2]
// Exports: refreshSystemNotifPermissionsAsync

// Module 16127 (DeclarativeSystemNotifPermissionActionCreators)
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 16129 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 16130 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 16128 */;
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

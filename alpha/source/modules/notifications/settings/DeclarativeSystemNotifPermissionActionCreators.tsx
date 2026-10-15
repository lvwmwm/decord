// Module ID: 16918
// Function ID: 16919
// Name: DeclarativeSystemNotifPermissionActionCreators
// Dependencies: [16919, 16920, 584, 16921, 2]
// Exports: refreshSystemNotifPermissionsAsync

// Module 16918 (DeclarativeSystemNotifPermissionActionCreators)
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 16920 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 16921 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 16919 */;
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

// Module ID: 16640
// Function ID: 16641
// Name: DeclarativeSystemNotifPermissionActionCreators
// Dependencies: [16641, 16642, 584, 16643, 2]
// Exports: refreshSystemNotifPermissionsAsync

// Module 16640 (DeclarativeSystemNotifPermissionActionCreators)
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 16642 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 16643 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 16641 */;
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

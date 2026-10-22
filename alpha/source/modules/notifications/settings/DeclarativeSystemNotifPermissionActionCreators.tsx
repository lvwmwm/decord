// Module ID: 17244
// Function ID: 17245
// Name: DeclarativeSystemNotifPermissionActionCreators
// Dependencies: [17245, 17246, 584, 17247, 2]
// Exports: refreshSystemNotifPermissionsAsync

// Module 17244 (DeclarativeSystemNotifPermissionActionCreators)
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 17246 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 17247 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 17245 */;
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

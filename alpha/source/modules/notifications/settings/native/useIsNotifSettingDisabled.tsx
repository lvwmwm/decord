// Module ID: 17483
// Function ID: 17484
// Name: useIsNotifSettingDisabled
// Dependencies: [17469, 17471, 17470, 504, 1113, 3051, 2]
// Exports: default

// Module 17483 (useIsNotifSettingDisabled)
import _modDef3051 from "module_3051" /* 3051 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 17470 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 17471 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 17469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/notifications/settings/native/useIsNotifSettingDisabled.tsx");

export default function useIsNotifSettingDisabled(arg0) {
  let closure_0;
  let intl;
  _require = arg0;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [DeclarativeSystemNotifPermissionStore];
  const stateFromStores = obj.useStateFromStores(items, () => DeclarativeSystemNotifPermissionStore.isDisabled(closure_0));
  let tmp4 = !stateFromStores;
  if (stateFromStores) {
    tmp4 = null == DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
  }
  let tmp7 = !tmp4;
  if (tmp7) {
    const obj2 = {
      label: intl.string(_modDef3051.TVZ0Fm),
      onPress: function handleOpenSystem() {
          const obj = DeclarativeSystemNotifPermissionAnalytics;
          const result = obj.trackSystemNotifSettingsOpened(closure_0);
          const openSystemNotifSettings = DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
          DeclarativeSystemNotifPermissionHelpersDefault;
          const tmp = closure_0;
          if (openSystemNotifSettings != null) {
            const result1 = openSystemNotifSettings(tmp);
          }
        }
    };
    intl = tmp(1113).intl;
    tmp7 = obj2;
  }
  return tmp7;
};

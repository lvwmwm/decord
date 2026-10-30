// Module ID: 17919
// Function ID: 17920
// Name: useIsNotifSettingDisabled
// Dependencies: [17909, 17911, 17910, 504, 1114, 2867, 2]
// Exports: default

// Module 17919 (useIsNotifSettingDisabled)
import _modDef2867 from "module_2867" /* 2867 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 17910 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 17911 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 17909 */;
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
      label: intl.string(_modDef2867.TVZ0Fm),
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
    intl = tmp(1114).intl;
    tmp7 = obj2;
  }
  return tmp7;
};

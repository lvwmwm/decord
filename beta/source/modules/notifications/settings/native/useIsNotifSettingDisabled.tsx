// Module ID: 17444
// Function ID: 17445
// Name: useIsNotifSettingDisabled
// Dependencies: [17430, 17432, 17431, 504, 1112, 3152, 2]
// Exports: default

// Module 17444 (useIsNotifSettingDisabled)
import _modDef3152 from "module_3152" /* 3152 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 17431 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 17432 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 17430 */;
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
      label: intl.string(_modDef3152.TVZ0Fm),
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
    intl = tmp(1112).intl;
    tmp7 = obj2;
  }
  return tmp7;
};

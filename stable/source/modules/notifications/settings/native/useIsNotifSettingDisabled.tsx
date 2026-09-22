// Module ID: 16021
// Function ID: 16022
// Name: useIsNotifSettingDisabled
// Dependencies: [16012, 16014, 16013, 504, 1114, 2722, 2]
// Exports: default

// Module 16021 (useIsNotifSettingDisabled)
import _modDef2722 from "module_2722" /* 2722 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 16013 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 16014 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 16012 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/useIsNotifSettingDisabled.tsx");

export default function useIsNotifSettingDisabled(arg0) {
  _require = arg0;
  const items = [DeclarativeSystemNotifPermissionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => DeclarativeSystemNotifPermissionStore.isDisabled(closure_0));
  let tmp4 = !stateFromStores;
  if (stateFromStores) {
    tmp4 = null == DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
  }
  let tmp7 = !tmp4;
  if (!tmp4) {
    const obj2 = { label: null, onPress: null };
    const intl = require("util").intl;
    obj2.label = intl.string(_modDef2722.TVZ0Fm);
    obj2.onPress = function handleOpenSystem() {
      const result = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsOpened(closure_0);
      const tmp = closure_0;
      const openSystemNotifSettings = DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
      if (openSystemNotifSettings != null) {
        const result1 = openSystemNotifSettings(tmp);
      }
    };
    tmp7 = obj2;
  }
  return tmp7;
};

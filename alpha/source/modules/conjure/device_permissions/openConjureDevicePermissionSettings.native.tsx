// Module ID: 14507
// Function ID: 14508
// Name: openConjureDevicePermissionSettings
// Dependencies: [5253, 14508, 1995, 14508, 2]
// Exports: default

// Module 14507 (openConjureDevicePermissionSettings)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ConjureDevicePermissionSettingsSheet from "ConjureDevicePermissionSettingsSheet" /* 14508 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/device_permissions/openConjureDevicePermissionSettings.native.tsx");

export default function _default(arg0) {
  let appName;
  let applicationId;
  ({ applicationId, appName } = arg0);
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(14508, dependencyMap.paths);
  openLazy(tmp2, ConjureDevicePermissionSettingsSheet.CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY, { applicationId, appName });
};

// Module ID: 14371
// Function ID: 14372
// Name: openConjureDevicePermissionSettings
// Dependencies: [5127, 14372, 2119, 14372, 2]
// Exports: default

// Module 14371 (openConjureDevicePermissionSettings)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ConjureDevicePermissionSettingsSheet from "ConjureDevicePermissionSettingsSheet" /* 14372 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/device_permissions/openConjureDevicePermissionSettings.native.tsx");

export default function _default(arg0) {
  let appName;
  let applicationId;
  ({ applicationId, appName } = arg0);
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(14372, dependencyMap.paths);
  openLazy(tmp2, ConjureDevicePermissionSettingsSheet.CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY, { applicationId, appName });
};

// Module ID: 14361
// Function ID: 14362
// Name: openConjureDevicePermissionSettings
// Dependencies: [5127, 14362, 2119, 14362, 2]
// Exports: default

// Module 14361 (openConjureDevicePermissionSettings)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ConjureDevicePermissionSettingsSheet from "ConjureDevicePermissionSettingsSheet" /* 14362 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/device_permissions/openConjureDevicePermissionSettings.native.tsx");

export default function _default(arg0) {
  let appName;
  let applicationId;
  ({ applicationId, appName } = arg0);
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(14362, dependencyMap.paths);
  openLazy(tmp2, ConjureDevicePermissionSettingsSheet.CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY, { applicationId, appName });
};

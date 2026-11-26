// Module ID: 14374
// Function ID: 14375
// Name: openConjureDevicePermissionSettings
// Dependencies: [5127, 14375, 2119, 14375, 2]
// Exports: default

// Module 14374 (openConjureDevicePermissionSettings)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ConjureDevicePermissionSettingsSheet from "ConjureDevicePermissionSettingsSheet" /* 14375 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/device_permissions/openConjureDevicePermissionSettings.native.tsx");

export default function _default(arg0) {
  let appName;
  let applicationId;
  ({ applicationId, appName } = arg0);
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(14375, dependencyMap.paths);
  openLazy(tmp2, ConjureDevicePermissionSettingsSheet.CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY, { applicationId, appName });
};

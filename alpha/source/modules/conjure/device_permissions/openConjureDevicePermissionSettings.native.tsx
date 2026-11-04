// Module ID: 14771
// Function ID: 14772
// Name: openConjureDevicePermissionSettings
// Dependencies: [5382, 14772, 2123, 14772, 2]
// Exports: default

// Module 14771 (openConjureDevicePermissionSettings)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import ConjureDevicePermissionSettingsSheet from "ConjureDevicePermissionSettingsSheet" /* 14772 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/device_permissions/openConjureDevicePermissionSettings.native.tsx");

export default function _default(arg0) {
  let appName;
  let applicationId;
  ({ applicationId, appName } = arg0);
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(14772, dependencyMap.paths);
  openLazy(tmp2, ConjureDevicePermissionSettingsSheet.CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY, { applicationId, appName });
};

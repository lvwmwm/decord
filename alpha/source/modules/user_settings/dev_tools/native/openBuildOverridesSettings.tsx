// Module ID: 17935
// Function ID: 17936
// Name: openBuildOverridesSettings
// Dependencies: [8507, 5376, 6801, 7638, 2]
// Exports: openBuildOverridesSettings

// Module 17935 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import openUserSettings from "openUserSettings" /* 7638 */;
import SettingsConstants from "SettingsConstants" /* 8507 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/openBuildOverridesSettings.tsx");

export function openBuildOverridesSettings() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.popWithKey("DevToolsNavigator");
  const obj3 = openUserSettings;
  const obj4 = { screen: MobileUserSettings.BUILD_OVERRIDES };
  obj3.openUserSettings(obj4);
}

// Module ID: 17001
// Function ID: 17002
// Name: openBuildOverridesSettings
// Dependencies: [8712, 5127, 6429, 8194, 2]
// Exports: openBuildOverridesSettings

// Module 17001 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import openUserSettings from "openUserSettings" /* 8194 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
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

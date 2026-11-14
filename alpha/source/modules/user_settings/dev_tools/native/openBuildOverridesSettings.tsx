// Module ID: 18216
// Function ID: 18217
// Name: openBuildOverridesSettings
// Dependencies: [9202, 5552, 6848, 8604, 2]
// Exports: openBuildOverridesSettings

// Module 18216 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
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

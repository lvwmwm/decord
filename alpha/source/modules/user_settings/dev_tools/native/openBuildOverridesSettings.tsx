// Module ID: 17908
// Function ID: 17909
// Name: openBuildOverridesSettings
// Dependencies: [8503, 5374, 6799, 7635, 2]
// Exports: openBuildOverridesSettings

// Module 17908 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import openUserSettings from "openUserSettings" /* 7635 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
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

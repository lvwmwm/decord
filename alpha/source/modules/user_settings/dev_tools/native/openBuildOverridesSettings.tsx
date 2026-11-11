// Module ID: 18101
// Function ID: 18102
// Name: openBuildOverridesSettings
// Dependencies: [9136, 5489, 6785, 8537, 2]
// Exports: openBuildOverridesSettings

// Module 18101 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import openUserSettings from "openUserSettings" /* 8537 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
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

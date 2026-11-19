// Module ID: 17056
// Function ID: 17057
// Name: openBuildOverridesSettings
// Dependencies: [8593, 5006, 6308, 8075, 2]
// Exports: openBuildOverridesSettings

// Module 17056 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import openUserSettings from "openUserSettings" /* 8075 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
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

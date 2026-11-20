// Module ID: 16880
// Function ID: 16881
// Name: openBuildOverridesSettings
// Dependencies: [8592, 5008, 6310, 8074, 2]
// Exports: openBuildOverridesSettings

// Module 16880 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import openUserSettings from "openUserSettings" /* 8074 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
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

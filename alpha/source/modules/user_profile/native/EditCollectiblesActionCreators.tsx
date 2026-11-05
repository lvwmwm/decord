// Module ID: 8892
// Function ID: 8893
// Name: EditCollectiblesActionCreators
// Dependencies: [1072, 7705, 2]
// Exports: navigateToNitroManagement

// Module 8892 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1072 */;
import openUserSettings from "openUserSettings" /* 7705 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
}

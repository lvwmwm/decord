// Module ID: 14466
// Function ID: 14467
// Name: EditCollectiblesActionCreators
// Dependencies: [1071, 8109, 2]
// Exports: navigateToNitroManagement

// Module 14466 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1071 */;
import openUserSettings from "openUserSettings" /* 8109 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
}

// Module ID: 8704
// Function ID: 8705
// Name: EditCollectiblesActionCreators
// Dependencies: [1084, 7549, 2]
// Exports: navigateToNitroManagement

// Module 8704 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1084 */;
import openUserSettings from "openUserSettings" /* 7549 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
}

// Module ID: 14407
// Function ID: 14408
// Name: EditCollectiblesActionCreators
// Dependencies: [1071, 8067, 2]
// Exports: navigateToNitroManagement

// Module 14407 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1071 */;
import openUserSettings from "openUserSettings" /* 8067 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
}

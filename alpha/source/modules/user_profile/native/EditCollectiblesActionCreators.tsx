// Module ID: 8701
// Function ID: 8702
// Name: EditCollectiblesActionCreators
// Dependencies: [1084, 7526, 2]
// Exports: navigateToNitroManagement

// Module 8701 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1084 */;
import openUserSettings from "openUserSettings" /* 7526 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
};

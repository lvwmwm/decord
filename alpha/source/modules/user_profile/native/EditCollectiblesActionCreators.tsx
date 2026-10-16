// Module ID: 8526
// Function ID: 8527
// Name: EditCollectiblesActionCreators
// Dependencies: [1087, 7317, 2]
// Exports: navigateToNitroManagement

// Module 8526 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1087 */;
import openUserSettings from "openUserSettings" /* 7317 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
};

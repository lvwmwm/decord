// Module ID: 8275
// Function ID: 8276
// Name: EditCollectiblesActionCreators
// Dependencies: [1085, 7084, 2]
// Exports: navigateToNitroManagement

// Module 8275 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1085 */;
import openUserSettings from "openUserSettings" /* 7084 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
};

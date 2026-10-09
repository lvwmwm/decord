// Module ID: 8283
// Function ID: 8284
// Name: EditCollectiblesActionCreators
// Dependencies: [1085, 7087, 2]
// Exports: navigateToNitroManagement

// Module 8283 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1085 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
};

// Module ID: 8573
// Function ID: 8574
// Name: EditCollectiblesActionCreators
// Dependencies: [1087, 7370, 2]
// Exports: navigateToNitroManagement

// Module 8573 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1087 */;
import openUserSettings from "openUserSettings" /* 7370 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
};

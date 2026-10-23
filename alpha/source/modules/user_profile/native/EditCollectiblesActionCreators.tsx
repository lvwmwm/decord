// Module ID: 8662
// Function ID: 8663
// Name: EditCollectiblesActionCreators
// Dependencies: [1087, 7488, 2]
// Exports: navigateToNitroManagement

// Module 8662 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1087 */;
import openUserSettings from "openUserSettings" /* 7488 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
};

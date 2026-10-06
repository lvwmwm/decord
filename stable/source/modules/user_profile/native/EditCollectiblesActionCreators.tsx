// Module ID: 7624
// Function ID: 7625
// Name: EditCollectiblesActionCreators
// Dependencies: [1086, 6801, 2]
// Exports: navigateToNitroManagement

// Module 7624 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1086 */;
import openUserSettings from "openUserSettings" /* 6801 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
};

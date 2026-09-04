// Module ID: 8106
// Function ID: 8107
// Name: navigateToNitroManagement
// Dependencies: [673, 7320, 2]
// Exports: navigateToNitroManagement

// Module 8106 (navigateToNitroManagement)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import openUserSettings from "openUserSettings" /* 7320 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

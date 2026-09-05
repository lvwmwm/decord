// Module ID: 8175
// Function ID: 8176
// Name: navigateToNitroManagement
// Dependencies: [1074, 7382, 2]
// Exports: navigateToNitroManagement

// Module 8175 (navigateToNitroManagement)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import openUserSettings from "openUserSettings" /* 7382 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

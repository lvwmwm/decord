// Module ID: 8083
// Function ID: 8084
// Name: navigateToNitroManagement
// Dependencies: [676, 6245, 2]
// Exports: navigateToNitroManagement

// Module 8083 (navigateToNitroManagement)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import openUserSettings from "openUserSettings" /* 6245 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

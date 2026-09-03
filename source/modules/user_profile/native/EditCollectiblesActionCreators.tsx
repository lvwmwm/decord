// Module ID: 8094
// Function ID: 8095
// Name: navigateToNitroManagement
// Dependencies: [673, 6255, 2]
// Exports: navigateToNitroManagement

// Module 8094 (navigateToNitroManagement)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import openUserSettings from "openUserSettings" /* 6255 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

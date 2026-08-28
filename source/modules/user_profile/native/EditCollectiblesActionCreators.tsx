// Module ID: 8029
// Function ID: 8030
// Name: navigateToNitroManagement
// Dependencies: [676, 6210, 2]
// Exports: navigateToNitroManagement

// Module 8029 (navigateToNitroManagement)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import openUserSettings from "openUserSettings" /* 6210 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

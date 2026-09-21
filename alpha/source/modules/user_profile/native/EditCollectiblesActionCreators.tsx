// Module ID: 8444
// Function ID: 8445
// Name: EditCollectiblesActionCreators
// Dependencies: [1074, 7624, 2]
// Exports: navigateToNitroManagement

// Module 8444 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1074 */;
import openUserSettings from "openUserSettings" /* 7624 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
};

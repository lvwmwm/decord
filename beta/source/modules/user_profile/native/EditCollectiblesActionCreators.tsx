// Module ID: 8481
// Function ID: 8482
// Name: EditCollectiblesActionCreators
// Dependencies: [1078, 7658, 2]
// Exports: navigateToNitroManagement

// Module 8481 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1078 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
};

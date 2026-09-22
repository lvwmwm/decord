// Module ID: 8448
// Function ID: 8449
// Name: EditCollectiblesActionCreators
// Dependencies: [1074, 7627, 2]
// Exports: navigateToNitroManagement

// Module 8448 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1074 */;
import openUserSettings from "openUserSettings" /* 7627 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
};

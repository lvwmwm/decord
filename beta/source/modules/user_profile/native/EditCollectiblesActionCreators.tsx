// Module ID: 8449
// Function ID: 8450
// Name: EditCollectiblesActionCreators
// Dependencies: [1078, 7626, 2]
// Exports: navigateToNitroManagement

// Module 8449 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1078 */;
import openUserSettings from "openUserSettings" /* 7626 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
};

// Module ID: 11593
// Function ID: 11594
// Name: openAccountStanding
// Dependencies: [1074, 6996, 2]
// Exports: openAccountStanding

// Module 11593 (openAccountStanding)
import Constants from "Constants" /* 1074 */;
import openUserSettings from "openUserSettings" /* 6996 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.ACCOUNT_STANDING });
};

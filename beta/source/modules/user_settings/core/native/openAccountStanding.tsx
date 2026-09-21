// Module ID: 12040
// Function ID: 12041
// Name: openAccountStanding
// Dependencies: [1078, 7626, 2]
// Exports: openAccountStanding

// Module 12040 (openAccountStanding)
import Constants from "Constants" /* 1078 */;
import openUserSettings from "openUserSettings" /* 7626 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.ACCOUNT_STANDING });
};

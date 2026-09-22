// Module ID: 12043
// Function ID: 12044
// Name: openAccountStanding
// Dependencies: [1074, 7485, 2]
// Exports: openAccountStanding

// Module 12043 (openAccountStanding)
import Constants from "Constants" /* 1074 */;
import openUserSettings from "openUserSettings" /* 7485 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.ACCOUNT_STANDING });
};

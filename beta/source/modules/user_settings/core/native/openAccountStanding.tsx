// Module ID: 12076
// Function ID: 12077
// Name: openAccountStanding
// Dependencies: [1078, 7658, 2]
// Exports: openAccountStanding

// Module 12076 (openAccountStanding)
import Constants from "Constants" /* 1078 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.ACCOUNT_STANDING });
};

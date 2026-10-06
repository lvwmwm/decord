// Module ID: 11263
// Function ID: 11264
// Name: openAccountStanding
// Dependencies: [1086, 6801, 2]
// Exports: openAccountStanding

// Module 11263 (openAccountStanding)
import Constants from "Constants" /* 1086 */;
import openUserSettings from "openUserSettings" /* 6801 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
};

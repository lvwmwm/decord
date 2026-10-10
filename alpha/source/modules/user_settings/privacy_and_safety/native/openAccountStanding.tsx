// Module ID: 11506
// Function ID: 11507
// Name: openAccountStanding
// Dependencies: [1085, 7093, 2]
// Exports: openAccountStanding

// Module 11506 (openAccountStanding)
import Constants from "Constants" /* 1085 */;
import openUserSettings from "openUserSettings" /* 7093 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
};

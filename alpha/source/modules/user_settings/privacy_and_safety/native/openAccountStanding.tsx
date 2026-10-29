// Module ID: 13148
// Function ID: 13149
// Name: openAccountStanding
// Dependencies: [1084, 7549, 2]
// Exports: openAccountStanding

// Module 13148 (openAccountStanding)
import Constants from "Constants" /* 1084 */;
import openUserSettings from "openUserSettings" /* 7549 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
}

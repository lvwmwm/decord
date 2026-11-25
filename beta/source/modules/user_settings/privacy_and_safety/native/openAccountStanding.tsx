// Module ID: 12455
// Function ID: 12456
// Name: openAccountStanding
// Dependencies: [1071, 8194, 2]
// Exports: openAccountStanding

// Module 12455 (openAccountStanding)
import Constants from "Constants" /* 1071 */;
import openUserSettings from "openUserSettings" /* 8194 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
}

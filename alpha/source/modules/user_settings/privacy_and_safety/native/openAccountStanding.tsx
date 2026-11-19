// Module ID: 12360
// Function ID: 12361
// Name: openAccountStanding
// Dependencies: [1072, 8075, 2]
// Exports: openAccountStanding

// Module 12360 (openAccountStanding)
import Constants from "Constants" /* 1072 */;
import openUserSettings from "openUserSettings" /* 8075 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
}

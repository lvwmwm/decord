// Module ID: 13568
// Function ID: 13569
// Name: openAccountStanding
// Dependencies: [1072, 7703, 2]
// Exports: openAccountStanding

// Module 13568 (openAccountStanding)
import Constants from "Constants" /* 1072 */;
import openUserSettings from "openUserSettings" /* 7703 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
}

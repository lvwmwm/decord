// Module ID: 11521
// Function ID: 11522
// Name: openAccountStanding
// Dependencies: [1085, 6885, 2]
// Exports: openAccountStanding

// Module 11521 (openAccountStanding)
import Constants from "Constants" /* 1085 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
};

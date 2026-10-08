// Module ID: 11532
// Function ID: 11533
// Name: openAccountStanding
// Dependencies: [1085, 7084, 2]
// Exports: openAccountStanding

// Module 11532 (openAccountStanding)
import Constants from "Constants" /* 1085 */;
import openUserSettings from "openUserSettings" /* 7084 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
};

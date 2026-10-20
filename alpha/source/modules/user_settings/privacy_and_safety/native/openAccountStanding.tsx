// Module ID: 12693
// Function ID: 12694
// Name: openAccountStanding
// Dependencies: [1087, 7439, 2]
// Exports: openAccountStanding

// Module 12693 (openAccountStanding)
import Constants from "Constants" /* 1087 */;
import openUserSettings from "openUserSettings" /* 7439 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
};

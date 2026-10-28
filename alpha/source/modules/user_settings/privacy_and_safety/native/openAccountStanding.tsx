// Module ID: 12927
// Function ID: 12928
// Name: openAccountStanding
// Dependencies: [1084, 7526, 2]
// Exports: openAccountStanding

// Module 12927 (openAccountStanding)
import Constants from "Constants" /* 1084 */;
import openUserSettings from "openUserSettings" /* 7526 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
};

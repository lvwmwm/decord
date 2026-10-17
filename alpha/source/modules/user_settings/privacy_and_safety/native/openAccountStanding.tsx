// Module ID: 12639
// Function ID: 12640
// Name: openAccountStanding
// Dependencies: [1087, 7370, 2]
// Exports: openAccountStanding

// Module 12639 (openAccountStanding)
import Constants from "Constants" /* 1087 */;
import openUserSettings from "openUserSettings" /* 7370 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
};

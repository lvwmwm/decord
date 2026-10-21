// Module ID: 12757
// Function ID: 12758
// Name: openAccountStanding
// Dependencies: [1087, 7467, 2]
// Exports: openAccountStanding

// Module 12757 (openAccountStanding)
import Constants from "Constants" /* 1087 */;
import openUserSettings from "openUserSettings" /* 7467 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  const obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj2);
};

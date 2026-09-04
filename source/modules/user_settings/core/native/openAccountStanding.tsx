// Module ID: 11841
// Function ID: 11842
// Name: openAccountStanding
// Dependencies: [673, 7320, 2]
// Exports: openAccountStanding

// Module 11841 (openAccountStanding)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import openUserSettings from "openUserSettings" /* 7320 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_settings/core/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj);
};

// Module ID: 8388
// Function ID: 8389
// Name: navigateToNitroManagement
// Dependencies: [676, 7360, 2]
// Exports: navigateToNitroManagement

// Module 8388 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(7360) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

// Module ID: 8327
// Function ID: 8328
// Name: navigateToNitroManagement
// Dependencies: [676, 6059, 2]
// Exports: navigateToNitroManagement

// Module 8327 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(6059) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

// Module ID: 8202
// Function ID: 8203
// Name: navigateToNitroManagement
// Dependencies: [676, 5937, 2]
// Exports: navigateToNitroManagement

// Module 8202 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(5937) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

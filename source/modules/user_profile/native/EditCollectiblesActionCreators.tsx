// Module ID: 8219
// Function ID: 8220
// Name: navigateToNitroManagement
// Dependencies: [676, 5956, 2]
// Exports: navigateToNitroManagement

// Module 8219 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(5956) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

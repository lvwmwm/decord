// Module ID: 7960
// Function ID: 7961
// Name: navigateToNitroManagement
// Dependencies: [676, 6614, 2]
// Exports: navigateToNitroManagement

// Module 7960 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(6614) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

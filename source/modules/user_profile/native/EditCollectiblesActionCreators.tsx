// Module ID: 7953
// Function ID: 7954
// Name: navigateToNitroManagement
// Dependencies: [676, 6608, 2]
// Exports: navigateToNitroManagement

// Module 7953 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(6608) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

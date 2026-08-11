// Module ID: 8284
// Function ID: 8285
// Name: navigateToNitroManagement
// Dependencies: [676, 6018, 2]
// Exports: navigateToNitroManagement

// Module 8284 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(6018) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

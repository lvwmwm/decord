// Module ID: 8323
// Function ID: 8324
// Name: navigateToNitroManagement
// Dependencies: [676, 6057, 2]
// Exports: navigateToNitroManagement

// Module 8323 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(6057) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

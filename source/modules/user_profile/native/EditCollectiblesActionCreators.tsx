// Module ID: 7956
// Function ID: 7957
// Name: navigateToNitroManagement
// Dependencies: [676, 6611, 2]
// Exports: navigateToNitroManagement

// Module 7956 (navigateToNitroManagement)
import { UserSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(6611) /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

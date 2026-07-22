// Module ID: 7852
// Function ID: 62602
// Name: navigateToNitroManagement
// Dependencies: []
// Exports: navigateToNitroManagement

// Module 7852 (navigateToNitroManagement)
const UserSettingsSections = require(dependencyMap[0]).UserSettingsSections;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = require(dependencyMap[1]);
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};

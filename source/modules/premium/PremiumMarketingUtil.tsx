// Module ID: 12008
// Function ID: 92808
// Name: navigateToPremiumHomePage
// Dependencies: []
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12008 (navigateToPremiumHomePage)
const _module = require(dependencyMap[0]);
({ Routes: closure_2, UserSettingsSections: closure_3 } = _module);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require(dependencyMap[1]).openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (null != arg0) {
    arg0();
  }
  require(dependencyMap[2]).popLayer();
  const obj = require(dependencyMap[2]);
  require(dependencyMap[3]).transitionTo(constants.APPLICATION_STORE);
};

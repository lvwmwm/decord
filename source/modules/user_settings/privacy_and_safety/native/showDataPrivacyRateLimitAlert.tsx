// Module ID: 13645
// Function ID: 103373
// Name: showDataPrivacyRateLimitAlert
// Dependencies: []
// Exports: showDataPrivacyRateLimitAlert

// Module 13645 (showDataPrivacyRateLimitAlert)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  let obj = importDefault(dependencyMap[0]);
  obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj.title = intl.string(require(dependencyMap[1]).t.43LbVL);
  obj.body = message;
  const intl2 = require(dependencyMap[1]).intl;
  obj.confirmText = intl2.string(require(dependencyMap[1]).t.BddRzS);
  obj.show(obj);
};

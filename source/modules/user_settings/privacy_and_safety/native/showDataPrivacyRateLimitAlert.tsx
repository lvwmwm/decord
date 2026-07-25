// Module ID: 13821
// Function ID: 105980
// Name: showDataPrivacyRateLimitAlert
// Dependencies: [4471, 1212, 2]
// Exports: showDataPrivacyRateLimitAlert

// Module 13821 (showDataPrivacyRateLimitAlert)
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["43LbVL"]);
  obj.body = message;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl2.string(require(1212) /* getSystemLocale */.t.BddRzS);
  obj.show(obj);
};

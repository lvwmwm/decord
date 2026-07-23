// Module ID: 13759
// Function ID: 105529
// Name: showDataPrivacyRateLimitAlert
// Dependencies: [4470, 1212, 2]
// Exports: showDataPrivacyRateLimitAlert

// Module 13759 (showDataPrivacyRateLimitAlert)
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  let obj = importDefault(4470);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["43LbVL"]);
  obj.body = message;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl2.string(require(1212) /* getSystemLocale */.t.BddRzS);
  obj.show(obj);
};

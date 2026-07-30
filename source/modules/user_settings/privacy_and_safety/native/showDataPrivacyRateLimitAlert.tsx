// Module ID: 13882
// Function ID: 13883
// Name: showDataPrivacyRateLimitAlert
// Dependencies: [4528, 1236, 2]
// Exports: showDataPrivacyRateLimitAlert

// Module 13882 (showDataPrivacyRateLimitAlert)
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  let obj = importDefault(4528);
  obj = { title: null, body: null, confirmText: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["43LbVL"]);
  obj[1] = message;
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.BddRzS);
  obj.show(obj);
};

// Module ID: 15112
// Function ID: 15113
// Name: showDataPrivacyRateLimitAlert
// Dependencies: [5299, 1126, 2]
// Exports: showDataPrivacyRateLimitAlert

// Module 15112 (showDataPrivacyRateLimitAlert)
import intl3 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl3.t["43LbVL"]), body: message, confirmText: intl2.string(intl3.t.BddRzS) };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  show(obj);
};

// Module ID: 15053
// Function ID: 15054
// Name: showDataPrivacyRateLimitAlert
// Dependencies: [5298, 1126, 2]
// Exports: showDataPrivacyRateLimitAlert

// Module 15053 (showDataPrivacyRateLimitAlert)
import intl3 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5298 */;
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

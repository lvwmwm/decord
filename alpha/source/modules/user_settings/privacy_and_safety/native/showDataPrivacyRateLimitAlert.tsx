// Module ID: 16903
// Function ID: 16904
// Name: showDataPrivacyRateLimitAlert
// Dependencies: [6078, 1113, 2]
// Exports: showDataPrivacyRateLimitAlert

// Module 16903 (showDataPrivacyRateLimitAlert)
import intl3 from "intl" /* 1113 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6078 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export function showDataPrivacyRateLimitAlert(message) {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl3.t["43LbVL"]), body: message, confirmText: intl2.string(intl3.t.BddRzS) };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  show(obj);
}

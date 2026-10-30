// Module ID: 17973
// Function ID: 17974
// Name: usePromoEmailOptInLabel
// Dependencies: [17974, 1114, 2]
// Exports: usePromoEmailOptInLabel

// Module 17973 (usePromoEmailOptInLabel)
import intl2 from "intl" /* 1114 */;
import RegistrationEmailOptInCopyExperimentDefault from "RegistrationEmailOptInCopyExperiment" /* 17974 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/usePromoEmailOptInLabel.tsx");

export function usePromoEmailOptInLabel(ylFCLt, REGISTER_PROMO_EMAIL_CHECKBOX_MOBILE) {
  let LSoXK5 = ylFCLt;
  const obj = RegistrationEmailOptInCopyExperimentDefault;
  const obj2 = { location: REGISTER_PROMO_EMAIL_CHECKBOX_MOBILE };
  const trackingCopy = obj.useConfig(obj2).trackingCopy;
  const intl = intl2.intl;
  const string = intl.string;
  if (trackingCopy) {
    LSoXK5 = intl2.t.LSoXK5;
  }
  return string(LSoXK5);
}

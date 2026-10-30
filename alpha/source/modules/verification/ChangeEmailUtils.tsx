// Module ID: 7057
// Function ID: 7058
// Name: ChangeEmailUtils
// Dependencies: [7051, 1114, 2]
// Exports: getChangeEmailReasonDisplayText

// Module 7057 (ChangeEmailUtils)
import intl2 from "intl" /* 1114 */;
import VerificationConstants from "VerificationConstants" /* 7051 */;
import size from "module_2" /* 2 */;

const ChangeEmailReasons = VerificationConstants.ChangeEmailReasons;
let closure_2 = {
  [ChangeEmailReasons.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.naBTFO);
  },
  [ChangeEmailReasons.SOMEONE_ASKED_ME_TO]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.LQ0RUP);
  },
  [ChangeEmailReasons.NEW_EMAIL]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.oOqQjw);
  },
  [ChangeEmailReasons.SOMETHING_ELSE]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.p38n1b);
  }
};
const result = size.fileFinishedImporting("modules/verification/ChangeEmailUtils.tsx");

export function getChangeEmailReasonDisplayText(value) {
  return closure_2[value]();
}

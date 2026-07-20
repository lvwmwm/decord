// Module ID: 9174
// Function ID: 71869
// Name: getChangeEmailReasonDisplayText
// Dependencies: [5, 653, 4938]
// Exports: getChangeEmailReasonDisplayText

// Module 9174 (getChangeEmailReasonDisplayText)
import { ChangeEmailReasons } from "asyncGeneratorStep";
import makeRequest from "makeRequest";

let closure_2 = {
  [ChangeEmailReasons.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.naBTFO);
  },
  [ChangeEmailReasons.SOMEONE_ASKED_ME_TO]: () => {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.LQ0RUP);
  },
  [ChangeEmailReasons.NEW_EMAIL]: () => {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.oOqQjw);
  },
  [ChangeEmailReasons.SOMETHING_ELSE]: () => {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.p38n1b);
  }
};
const result = makeRequest.fileFinishedImporting("modules/verification/ChangeEmailUtils.tsx");

export const getChangeEmailReasonDisplayText = function getChangeEmailReasonDisplayText(value) {
  return closure_2[value]();
};

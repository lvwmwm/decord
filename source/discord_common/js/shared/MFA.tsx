// Module ID: 14647
// Function ID: 111582
// Name: finishMFACheck
// Dependencies: [5, 507, 2]
// Exports: trySubmit

// Module 14647 (finishMFACheck)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function finishMFACheck() {
  return _finishMFACheck(...arguments);
}
function _finishMFACheck() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _trySubmit() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("set").fileFinishedImporting("../discord_common/js/shared/MFA.tsx");

export const BACKUP_CODE_MIN_LENGTH = 8;
export const BACKUP_CODE_MAX_LENGTH = 11;
export const TOTP_CODE_LENGTH = 6;
export const SMS_CODE_LENGTH = 6;
export { finishMFACheck };
export const trySubmit = function trySubmit(arg0, closure_0) {
  return _trySubmit(...arguments);
};

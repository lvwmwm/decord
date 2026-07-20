// Module ID: 14515
// Function ID: 109325
// Name: finishMFACheck
// Dependencies: [0, 0, 0]
// Exports: trySubmit

// Module 14515 (finishMFACheck)
import closure_2 from "result";
import result from "result";

function finishMFACheck() {
  return _finishMFACheck(...arguments);
}
function _finishMFACheck() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _finishMFACheck = obj;
  return obj(...arguments);
}
function _trySubmit() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _trySubmit = obj;
  return obj(...arguments);
}
result = result.fileFinishedImporting("../discord_common/js/shared/MFA.tsx");

export const BACKUP_CODE_MIN_LENGTH = 8;
export const BACKUP_CODE_MAX_LENGTH = 11;
export const TOTP_CODE_LENGTH = 6;
export const SMS_CODE_LENGTH = 6;
export { finishMFACheck };
export const trySubmit = function trySubmit(arg0, arg1) {
  return _trySubmit(...arguments);
};

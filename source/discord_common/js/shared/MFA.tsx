// Module ID: 14533
// Function ID: 109422
// Name: finishMFACheck
// Dependencies: []
// Exports: trySubmit

// Module 14533 (finishMFACheck)
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
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("../discord_common/js/shared/MFA.tsx");

export const BACKUP_CODE_MIN_LENGTH = 8;
export const BACKUP_CODE_MAX_LENGTH = 11;
export const TOTP_CODE_LENGTH = 6;
export const SMS_CODE_LENGTH = 6;
export { finishMFACheck };
export const trySubmit = function trySubmit(arg0, arg1) {
  return _trySubmit(...arguments);
};

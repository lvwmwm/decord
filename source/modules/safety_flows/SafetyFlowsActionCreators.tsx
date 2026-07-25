// Module ID: 16617
// Function ID: 129651
// Name: _getCurrentTask
// Dependencies: [5, 653, 4943, 480, 4031, 2]
// Exports: completeTask, getCurrentTask, resendVerificationCode

// Module 16617 (_getCurrentTask)
import set from "set";
import { Endpoints } from "ME";

const require = arg1;
function _getCurrentTask() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _completeTask() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _resendVerificationCode() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("makeRequest").fileFinishedImporting("modules/safety_flows/SafetyFlowsActionCreators.tsx");

export const getCurrentTask = function getCurrentTask() {
  return _getCurrentTask(...arguments);
};
export const completeTask = function completeTask(arg0) {
  return _completeTask(...arguments);
};
export const resendVerificationCode = function resendVerificationCode(arg0) {
  return _resendVerificationCode(...arguments);
};

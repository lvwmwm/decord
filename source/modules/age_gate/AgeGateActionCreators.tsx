// Module ID: 14745
// Function ID: 112490
// Name: submitDateOfBirth
// Dependencies: [1197, 653, 14744, 675, 507, 686, 2]
// Exports: logoutUnderageNewUser, preventUnderageRegistration, submitDateOfBirth

// Module 14745 (submitDateOfBirth)
import { AgeGateAnalyticAction } from "result";
import ME from "ME";

let closure_4;
let closure_5;
({ AnalyticEvents: closure_4, Endpoints: closure_5 } = ME);
const result = require("trackAgeGateSubmitted").fileFinishedImporting("modules/age_gate/AgeGateActionCreators.tsx");

export const submitDateOfBirth = function submitDateOfBirth(format, source) {
  const _require = source;
  importDefault(14744)(format, source);
  let obj = importDefault(675);
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_SUBMITTED };
  obj.track(constants.AGE_GATE_ACTION, obj);
  const HTTP = _require(507).HTTP;
  obj = { url: constants2.ME, oldFormErrors: true, body: { date_of_birth: format.format("YYYY-MM-DD") }, rejectWithError: false };
  const obj1 = { date_of_birth: format.format("YYYY-MM-DD") };
  return HTTP.patch(obj).then((user) => {
    let obj = outer1_1(outer1_2[5]);
    obj.dispatch({ type: "CURRENT_USER_UPDATE", user: user.body });
    obj = { source: closure_0, action: outer1_3.AGE_GATE_SUCCESS };
    outer1_1(outer1_2[3]).track(outer1_4.AGE_GATE_ACTION, obj);
  });
};
export const preventUnderageRegistration = function preventUnderageRegistration(REGISTER) {
  let obj = importDefault(686);
  obj.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" });
  obj = { source: REGISTER, action: AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION };
  importDefault(675).track(constants.AGE_GATE_ACTION, obj);
};
export const logoutUnderageNewUser = function logoutUnderageNewUser(source) {
  let obj = importDefault(686);
  obj.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER };
  importDefault(675).track(constants.AGE_GATE_ACTION, obj);
};

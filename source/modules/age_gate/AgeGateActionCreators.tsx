// Module ID: 14619
// Function ID: 110251
// Name: submitDateOfBirth
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: logoutUnderageNewUser, preventUnderageRegistration, submitDateOfBirth

// Module 14619 (submitDateOfBirth)
import { AgeGateAnalyticAction } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ AnalyticEvents: closure_4, Endpoints: closure_5 } = __exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/age_gate/AgeGateActionCreators.tsx");

export const submitDateOfBirth = function submitDateOfBirth(format, source) {
  const require = source;
  importDefault(dependencyMap[2])(format, source);
  let obj = importDefault(dependencyMap[3]);
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_SUBMITTED };
  obj.track(constants.AGE_GATE_ACTION, obj);
  const HTTP = require(dependencyMap[4]).HTTP;
  obj = { url: constants2.ME, oldFormErrors: true, body: { date_of_birth: format.format("YYYY-MM-DD") }, rejectWithError: false };
  const obj1 = { date_of_birth: format.format("YYYY-MM-DD") };
  return HTTP.patch(obj).then((user) => {
    let obj = callback(closure_2[5]);
    obj.dispatch({ type: "CURRENT_USER_UPDATE", user: user.body });
    obj = { source: arg1, action: constants.AGE_GATE_SUCCESS };
    callback(closure_2[3]).track(constants2.AGE_GATE_ACTION, obj);
  });
};
export const preventUnderageRegistration = function preventUnderageRegistration(REGISTER) {
  let obj = importDefault(dependencyMap[5]);
  obj.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" });
  obj = { source: REGISTER, action: AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION };
  importDefault(dependencyMap[3]).track(constants.AGE_GATE_ACTION, obj);
};
export const logoutUnderageNewUser = function logoutUnderageNewUser(source) {
  let obj = importDefault(dependencyMap[5]);
  obj.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER };
  importDefault(dependencyMap[3]).track(constants.AGE_GATE_ACTION, obj);
};

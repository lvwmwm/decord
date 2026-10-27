// Module ID: 17418
// Function ID: 17419
// Name: AgeGateActionCreators
// Dependencies: [1109, 1084, 17416, 1264, 1294, 17417, 584, 2]
// Exports: logoutUnderageNewUser, preventUnderageRegistration, submitDateOfBirth

// Module 17418 (AgeGateActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AgeGateConstants from "AgeGateConstants" /* 1109 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import trackAgeGateSubmittedDefault from "trackAgeGateSubmitted" /* 17416 */;
import formatDateForAPIDefault from "formatDateForAPI" /* 17417 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, body;

let closure_4;
let hasOwnProperty;
const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ AnalyticEvents: closure_4, Endpoints: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateActionCreators.tsx");

export const submitDateOfBirth = function submitDateOfBirth(arg0, source) {
  let obj3;
  _require = source;
  trackAgeGateSubmittedDefault(arg0, source);
  let obj = AnalyticsUtilsDefault;
  let obj2 = { source, action: AgeGateAnalyticAction.AGE_GATE_SUBMITTED };
  obj.track(constants.AGE_GATE_ACTION, obj2);
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: constants2.ME, oldFormErrors: true, body: obj3, rejectWithError: false };
  obj3 = { date_of_birth: formatDateForAPIDefault(arg0) };
  const patchResult = HTTP.patch(request);
  return patchResult.then((body) => {
    body = body.body;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "CURRENT_USER_UPDATE", user: body });
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
    obj2.track(constants.AGE_GATE_ACTION, obj3);
  });
};
export const preventUnderageRegistration = function preventUnderageRegistration(REGISTER) {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" });
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { source: REGISTER, action: AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION };
  obj2.track(constants.AGE_GATE_ACTION, obj3);
};
export const logoutUnderageNewUser = function logoutUnderageNewUser(source) {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" });
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { source, action: AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER };
  obj2.track(constants.AGE_GATE_ACTION, obj3);
};

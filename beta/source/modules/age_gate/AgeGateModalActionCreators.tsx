// Module ID: 6632
// Function ID: 6633
// Name: AgeGateModalActionCreators
// Dependencies: [1099, 1074, 1241, 573, 6010, 1101, 2]
// Exports: closeAgeGateModal, closeFailedAgeGate, openAgeGateModal, openFailureAgeGateModal, openSuccessAgeGateModal

// Module 6632 (AgeGateModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AgeGateConstants from "AgeGateConstants" /* 1099 */;
import router_utils from "router_utils" /* 1101 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ Routes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } };
  obj.track(hasOwnProperty.OPEN_MODAL, obj2);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE };
  obj3.dispatch(obj4);
};
export const closeAgeGateModal = function closeAgeGateModal(source) {
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    return obj.dispatch({ type: "AGE_GATE_MODAL_CLOSE" });
  });
  if (undefined !== source) {
    const obj2 = { source, action: AgeGateAnalyticAction.AGE_GATE_CLOSE };
    const tmpResult = AnalyticsUtilsDefault;
    tmpResult.track(hasOwnProperty.AGE_GATE_ACTION, obj2);
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  });
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
  obj2.track(hasOwnProperty.AGE_GATE_ACTION, obj3);
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source, underageMessage) {
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage };
    obj.dispatch(obj2);
  });
  let obj2 = AnalyticsUtilsDefault;
  const obj3 = { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE };
  obj2.track(constants2.AGE_GATE_ACTION, obj3);
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  const obj = AuthenticationActionCreatorsDefault;
  obj.logoutInternal();
  const obj2 = router_utils;
  obj2.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};

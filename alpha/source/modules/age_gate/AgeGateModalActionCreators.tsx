// Module ID: 6726
// Function ID: 6727
// Name: AgeGateModalActionCreators
// Dependencies: [1109, 1084, 1264, 584, 6727, 1111, 2]
// Exports: closeAgeGateModal, closeFailedAgeGate, openAgeGateModal, openFailureAgeGateModal, openSuccessAgeGateModal

// Module 6726 (AgeGateModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AgeGateConstants from "AgeGateConstants" /* 1109 */;
import router_utils from "router_utils" /* 1111 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6727 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ Routes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE, channelId) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } };
  obj.track(hasOwnProperty.OPEN_MODAL, obj2);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE, channelId };
  obj3.dispatch(obj4);
}
export function closeAgeGateModal(source) {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_MODAL_CLOSE" });
  if (undefined !== source) {
    const obj2 = { source, action: AgeGateAnalyticAction.AGE_GATE_CLOSE };
    const tmpResult = AnalyticsUtilsDefault;
    tmpResult.track(hasOwnProperty.AGE_GATE_ACTION, obj2);
  }
}
export function openSuccessAgeGateModal(source) {
  const obj = DispatcherDefault;
  const obj2 = { type: "AGE_GATE_SUCCESS_MODAL_OPEN", source };
  obj.dispatch(obj2);
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
  obj3.track(hasOwnProperty.AGE_GATE_ACTION, obj4);
}
export function openFailureAgeGateModal(source, underageMessage) {
  const obj = DispatcherDefault;
  const obj2 = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage };
  obj.dispatch(obj2);
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE };
  obj3.track(hasOwnProperty.AGE_GATE_ACTION, obj4);
}
export function closeFailedAgeGate() {
  const obj = AuthenticationActionCreatorsDefault;
  obj.logoutInternal();
  const obj2 = router_utils;
  obj2.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
}

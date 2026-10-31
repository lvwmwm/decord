// Module ID: 6739
// Function ID: 6740
// Name: AgeGateModalActionCreators
// Dependencies: [1097, 1072, 1252, 572, 6740, 1099, 2]
// Exports: closeAgeGateModal, closeAgeGateModalAfterSubmit, closeFailedAgeGate, openAgeGateModal, openFailureAgeGateModal, openSuccessAgeGateModal

// Module 6739 (AgeGateModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AgeGateConstants from "AgeGateConstants" /* 1097 */;
import router_utils from "router_utils" /* 1099 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6740 */;
import Constants from "Constants" /* 1072 */;
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
export function closeAgeGateModalAfterSubmit() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_MODAL_CLOSE", submitted: true });
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

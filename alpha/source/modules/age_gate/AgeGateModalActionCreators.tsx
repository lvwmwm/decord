// Module ID: 6615
// Function ID: 6616
// Name: AgeGateModalActionCreators
// Dependencies: [1112, 1087, 1267, 584, 6616, 1114, 2]
// Exports: closeAgeGateModal, closeFailedAgeGate, openAgeGateModal, openFailureAgeGateModal, openSuccessAgeGateModal

// Module 6615 (AgeGateModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AgeGateConstants from "AgeGateConstants" /* 1112 */;
import router_utils from "router_utils" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6616 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ Routes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE, channelId) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } };
  obj.track(hasOwnProperty.OPEN_MODAL, obj2);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE, channelId };
  obj3.dispatch(obj4);
};
export const closeAgeGateModal = function closeAgeGateModal(source) {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_MODAL_CLOSE" });
  if (undefined !== source) {
    const obj2 = { source, action: AgeGateAnalyticAction.AGE_GATE_CLOSE };
    const tmpResult = AnalyticsUtilsDefault;
    tmpResult.track(hasOwnProperty.AGE_GATE_ACTION, obj2);
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
  obj2.track(hasOwnProperty.AGE_GATE_ACTION, obj3);
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source, underageMessage) {
  const obj = DispatcherDefault;
  const obj2 = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage };
  obj.dispatch(obj2);
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE };
  obj3.track(hasOwnProperty.AGE_GATE_ACTION, obj4);
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  const obj = AuthenticationActionCreatorsDefault;
  obj.logoutInternal();
  const obj2 = router_utils;
  obj2.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};

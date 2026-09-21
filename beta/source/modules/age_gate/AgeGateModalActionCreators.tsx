// Module ID: 7458
// Function ID: 7459
// Name: AgeGateModalActionCreators
// Dependencies: [1103, 1078, 1245, 577, 6832, 1105, 2]
// Exports: closeAgeGateModal, closeFailedAgeGate, openAgeGateModal, openFailureAgeGateModal, openSuccessAgeGateModal

// Module 7458 (AgeGateModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import AgeGateConstants from "AgeGateConstants" /* 1103 */;
import router_utils from "router_utils" /* 1105 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6832 */;
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ Routes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE) {
  AnalyticsUtilsDefault.track(constants2.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } });
  const obj2 = { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } };
  DispatcherDefault.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE });
};
export const closeAgeGateModal = function closeAgeGateModal(source) {
  DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "AGE_GATE_MODAL_CLOSE" }));
  if (undefined !== source) {
    const obj2 = { source, action: AgeGateAnalyticAction.AGE_GATE_CLOSE };
    AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, obj2);
    const tmpResult = AnalyticsUtilsDefault;
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  DispatcherDefault.wait(() => {
    DispatcherDefault.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  });
  AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS });
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source, underageMessage) {
  DispatcherDefault.wait(() => {
    DispatcherDefault.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage });
  });
  AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE });
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  AuthenticationActionCreatorsDefault.logoutInternal();
  router_utils.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};

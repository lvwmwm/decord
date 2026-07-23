// Module ID: 5589
// Function ID: 47428
// Name: openAgeGateModal
// Dependencies: [1197, 653, 675, 686, 5590, 1198, 2]
// Exports: closeAgeGateModal, closeFailedAgeGate, openAgeGateModal, openFailureAgeGateModal, openSuccessAgeGateModal

// Module 5589 (openAgeGateModal)
import { AgeGateAnalyticAction } from "result";
import ME from "ME";

let closure_4;
let closure_5;
({ Routes: closure_4, AnalyticEvents: closure_5 } = ME);
const result = require("expandLocation").fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(NSFW_VOICE_CHANNEL) {
  let obj = importDefault(675);
  obj = { section: NSFW_VOICE_CHANNEL };
  obj.track(constants2.OPEN_MODAL, { type: "Enter Your Birthday", source: obj });
  obj = { type: "AGE_GATE_MODAL_OPEN", source: NSFW_VOICE_CHANNEL };
  importDefault(686).dispatch(obj);
};
export const closeAgeGateModal = function closeAgeGateModal(closure_0) {
  let obj = importDefault(686);
  obj.wait(() => outer1_1(outer1_2[3]).dispatch({ type: "AGE_GATE_MODAL_CLOSE" }));
  if (undefined !== closure_0) {
    obj = { source: closure_0, action: AgeGateAnalyticAction.AGE_GATE_CLOSE };
    importDefault(675).track(constants2.AGE_GATE_ACTION, obj);
    const obj2 = importDefault(675);
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  let obj = importDefault(686);
  obj.wait(() => {
    outer1_1(outer1_2[3]).dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
  importDefault(675).track(constants2.AGE_GATE_ACTION, obj);
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source) {
  let closure_0 = arg1;
  let obj = importDefault(686);
  obj.wait(() => {
    let obj = outer1_1(outer1_2[3]);
    obj = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: closure_0 };
    obj.dispatch(obj);
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE };
  importDefault(675).track(constants2.AGE_GATE_ACTION, obj);
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  importDefault(5590).logoutInternal();
  const obj = importDefault(5590);
  require(1198) /* shouldNavigate */.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};

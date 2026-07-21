// Module ID: 5587
// Function ID: 47397
// Name: openAgeGateModal
// Dependencies: []
// Exports: closeAgeGateModal, closeFailedAgeGate, openAgeGateModal, openFailureAgeGateModal, openSuccessAgeGateModal

// Module 5587 (openAgeGateModal)
const AgeGateAnalyticAction = require(dependencyMap[0]).AgeGateAnalyticAction;
const _module = require(dependencyMap[1]);
({ Routes: closure_4, AnalyticEvents: closure_5 } = _module);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(NSFW_VOICE_CHANNEL) {
  let obj = importDefault(dependencyMap[2]);
  obj = { section: NSFW_VOICE_CHANNEL };
  obj.track(constants2.OPEN_MODAL, { type: "Enter Your Birthday", source: obj });
  obj = { type: "AGE_GATE_MODAL_OPEN", source: NSFW_VOICE_CHANNEL };
  importDefault(dependencyMap[3]).dispatch(obj);
};
export const closeAgeGateModal = function closeAgeGateModal(source) {
  let obj = importDefault(dependencyMap[3]);
  obj.wait(() => callback(closure_2[3]).dispatch({ type: "AGE_GATE_MODAL_CLOSE" }));
  if (undefined !== source) {
    obj = { source, action: AgeGateAnalyticAction.AGE_GATE_CLOSE };
    importDefault(dependencyMap[2]).track(constants2.AGE_GATE_ACTION, obj);
    const obj2 = importDefault(dependencyMap[2]);
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  let obj = importDefault(dependencyMap[3]);
  obj.wait(() => {
    callback(closure_2[3]).dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
  importDefault(dependencyMap[2]).track(constants2.AGE_GATE_ACTION, obj);
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source) {
  const require = arg1;
  let obj = importDefault(dependencyMap[3]);
  obj.wait(() => {
    let obj = callback(closure_2[3]);
    obj = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: arg1 };
    obj.dispatch(obj);
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE };
  importDefault(dependencyMap[2]).track(constants2.AGE_GATE_ACTION, obj);
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  importDefault(dependencyMap[4]).logoutInternal();
  const obj = importDefault(dependencyMap[4]);
  require(dependencyMap[5]).transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};

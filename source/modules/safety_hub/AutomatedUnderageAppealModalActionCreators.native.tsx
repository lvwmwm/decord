// Module ID: 11028
// Function ID: 85874
// Dependencies: []

// Module 11028
let closure_3 = importDefault(dependencyMap[0]);
({ AGE_APPEAL_ACTION_SHEET_NAME: closure_4, AGE_CHECK_POLL_DELAY_MS: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[2]).AGE_VERIFICATION_GET_STARTED_MODAL_KEY;
const jsx = arg1(dependencyMap[3]).jsx;
const obj = {
  open(classificationId, onClose) {
    let obj = importDefault(dependencyMap[4]);
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    obj = { classificationId, onClose };
    importDefault(dependencyMap[5]).openLazy(onClose(dependencyMap[7])(dependencyMap[6], dependencyMap.paths), closure_4, obj);
  },
  openV2(classificationId, onClose) {
    onClose = classificationId;
    const importDefault = onClose;
    let obj = importDefault(dependencyMap[4]);
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    // CreateGeneratorClosureLongIndex (0x67)
    obj = { onClose };
    importDefault(dependencyMap[8]).pushLazy(callback(tmp), obj, closure_6);
  },
  close() {
    importDefault(dependencyMap[4]).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
  },
  success() {
    importDefault(dependencyMap[4]).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
  },
  start_verification_check() {
    importDefault(dependencyMap[4]).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
    const timerId = setTimeout(() => callback(closure_2[11]).checkSuspendedUserAgeVerification(), closure_5);
  }
};
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx");

export default obj;

// Module ID: 11065
// Function ID: 86113
// Dependencies: [5, 7589, 7582, 33, 686, 4098, 11066, 1934, 4337, 7616, 7583, 11059, 2]

// Module 11065
import showActionSheet from "showActionSheet";
import SafetyHubLinks from "SafetyHubLinks";
import { AGE_VERIFICATION_GET_STARTED_MODAL_KEY as closure_6 } from "set";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ AGE_APPEAL_ACTION_SHEET_NAME: closure_4, AGE_CHECK_POLL_DELAY_MS: closure_5 } = SafetyHubLinks);
let obj = {
  open(classificationId, onClose) {
    let obj = importDefault(686);
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    obj = { classificationId, onClose };
    importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(11066, dependencyMap.paths), closure_4, obj);
  },
  openV2(classificationId, onClose) {
    let closure_0 = classificationId;
    const importDefault = onClose;
    let obj = importDefault(686);
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    // CreateGeneratorClosureLongIndex (0x67)
    obj = { onClose };
    importDefault(4337).pushLazy(callback(tmp), obj, closure_6);
  },
  close() {
    importDefault(686).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
  },
  success() {
    importDefault(686).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
  },
  start_verification_check() {
    importDefault(686).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
    const timerId = setTimeout(() => outer1_0(outer1_2[11]).checkSuspendedUserAgeVerification(), closure_5);
  }
};
const result = require("set").fileFinishedImporting("modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx");

export default obj;

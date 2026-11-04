// Module ID: 20299
// Function ID: 20300
// Name: ClipsManager
// Dependencies: [8354, 20300, 5846, 1113, 2]

// Module 20299 (ClipsManager)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import ClipsConstants from "ClipsConstants" /* 8354 */;
import ClipsManager2 from "clips/ClipsManager" /* 20300 */;
import size from "module_2" /* 2 */;

const CLIPS_TOAST_DURATION = ClipsConstants.CLIPS_TOAST_DURATION;
class ClipsManager extends ClipsManager2 {
  showClipsToast() {
    let intl;
    const obj = { text: intl.string(intl2.t["d+41qJ"]), duration: CLIPS_TOAST_DURATION };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    open("CLIPS_IN_CALL_WARNING", obj);
  }
  applyNativeClipsSettings() {

  }
  handleClipsInitOnToggleDetection() {

  }
  handleClipsInitOnGamesChange() {

  }
  fireClipsInitEvent() {

  }
  handleStreamEnded() {

  }
  maybeStartNtpClock() {

  }
}
const prototype = ClipsManager.prototype;
const clipsManager = new ClipsManager();
const result = size.fileFinishedImporting("modules/clips/native/ClipsManager.tsx");

export default clipsManager;

// Module ID: 18629
// Function ID: 18630
// Name: ClipsManager
// Dependencies: [7763, 18630, 4809, 1126, 2]

// Module 18629 (ClipsManager)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ClipsConstants from "ClipsConstants" /* 7763 */;
import ClipsManager2 from "clips/ClipsManager" /* 18630 */;
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

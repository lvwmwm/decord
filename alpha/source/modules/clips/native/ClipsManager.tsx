// Module ID: 18331
// Function ID: 18332
// Name: ClipsManager
// Dependencies: [7735, 18332, 4766, 1126, 2]

// Module 18331 (ClipsManager)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import ClipsConstants from "ClipsConstants" /* 7735 */;
import ClipsManager2 from "clips/ClipsManager" /* 18332 */;
import size from "module_2" /* 2 */;

const CLIPS_TOAST_DURATION = ClipsConstants.CLIPS_TOAST_DURATION;
class ClipsManager extends ClipsManager2 {
  showClipsToast() {
    let intl;
    const obj = { key: "CLIPS_IN_CALL_WARNING", content: intl.string(intl2.t["d+41qJ"]), toastDurationMs: CLIPS_TOAST_DURATION };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    open(obj);
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

// Module ID: 20423
// Function ID: 20424
// Name: ClipsManager
// Dependencies: [8284, 20424, 5837, 1113, 2]

// Module 20423 (ClipsManager)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
import ClipsConstants from "ClipsConstants" /* 8284 */;
import ClipsManager2 from "clips/ClipsManager" /* 20424 */;
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

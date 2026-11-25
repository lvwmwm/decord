// Module ID: 20224
// Function ID: 20225
// Name: ClipsManager
// Dependencies: [8089, 20225, 5694, 1112, 2]

// Module 20224 (ClipsManager)
import intl2 from "intl" /* 1112 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5694 */;
import ClipsConstants from "ClipsConstants" /* 8089 */;
import ClipsManager2 from "clips/ClipsManager" /* 20225 */;
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

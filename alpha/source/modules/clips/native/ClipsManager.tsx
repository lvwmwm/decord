// Module ID: 19250
// Function ID: 19251
// Name: ClipsManager
// Dependencies: [8134, 19251, 5649, 1128, 2]

// Module 19250 (ClipsManager)
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
import ClipsConstants from "ClipsConstants" /* 8134 */;
import ClipsManager2 from "clips/ClipsManager" /* 19251 */;
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

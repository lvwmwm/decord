// Module ID: 19950
// Function ID: 19951
// Name: ClipsManager
// Dependencies: [8321, 19951, 5476, 1112, 2]

// Module 19950 (ClipsManager)
import intl2 from "intl" /* 1112 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5476 */;
import ClipsConstants from "ClipsConstants" /* 8321 */;
import ClipsManager2 from "clips/ClipsManager" /* 19951 */;
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

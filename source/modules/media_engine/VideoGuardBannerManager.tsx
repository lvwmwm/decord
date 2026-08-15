// Module ID: 16721
// Function ID: 16722
// Name: prototype
// Dependencies: [16722, 676, 4529, 5038, 13106, 16723, 709, 2]

// Module 16721 (prototype)
import initialize from "initialize";
import { RTCConnectionStates } from "ME";
import { MediaEngineContextTypes } from "DesktopSources";
import "initialize";

let require = arg1;
let prototype = function VideoGuardBannerManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    RTC_CONNECTION_STATE(state) {
      return applyArgumentsResult.handleConnectionState(state);
    }
  };
  applyArgumentsResult.handleConnectionState = function handleConnectionState(state) {
    let tmp = state.state === constants.RTC_CONNECTED;
    if (tmp) {
      tmp = state.context === constants2.DEFAULT;
    }
    if (tmp) {
      let videoEnabled = initialize.hasShownBanner();
      if (!videoEnabled) {
        const VideoGuardExperiment = applyArgumentsResult(13106).VideoGuardExperiment;
        videoEnabled = VideoGuardExperiment.getConfig({ location: "VideoGuardBannerManager" }).videoEnabled;
      }
      if (!videoEnabled) {
        const result = applyArgumentsResult(16723).presentVideoGuardBanner();
        const obj = applyArgumentsResult(16723);
        callback(709).dispatch({ type: "VIDEO_GUARD_BANNER_SHOWN" });
        const obj2 = callback(709);
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("DesktopSources").fileFinishedImporting("modules/media_engine/VideoGuardBannerManager.tsx");

export default prototype;

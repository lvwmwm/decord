// Module ID: 8539
// Function ID: 8540
// Name: MediaPlayerMuteManager
// Dependencies: [17, 562, 1252, 2]

// Module 8539 (MediaPlayerMuteManager)
import get_ActivityIndicator from "module_17" /* 17 */;
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
const useMediaPlayerMutedStore = module_562.create(() => ({ isMuted: false }));
const nativeEventEmitter = new NativeEventEmitter(NativeModules.MediaPlayerManager);
class MediaPlayerMuteManager {
  constructor() {
    return Object.assign({ muteSubscription: "emoji" });
  }
}
const prototype = MediaPlayerMuteManager.prototype;
prototype["initialize"] = function initialize() {
  this.muteSubscription = nativeEventEmitter.addListener("MediaPlayerMuteStateChanged", (isMuted) => {
    isMuted = isMuted.isMuted;
    isMuted(closure_1[2]).batchUpdates(() => {
      state.setState({ isMuted });
    });
  });
};
prototype["terminate"] = function terminate() {
  const muteSubscription = this.muteSubscription;
  if (muteSubscription != null) {
    muteSubscription.remove();
  }
};
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaPlayerMuteManager.tsx");

export default Object.assign({ muteSubscription: "emoji" });
export { useMediaPlayerMutedStore };

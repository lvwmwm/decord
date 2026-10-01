// Module ID: 7711
// Function ID: 7712
// Name: MediaPlayerMuteManager
// Dependencies: [17, 560, 1248, 2]

// Module 7711 (MediaPlayerMuteManager)
import react_native from "react-native" /* 17 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let isMuted;

let NativeEventEmitter;
let NativeModules;
({ NativeEventEmitter, NativeModules } = react_native);
const useMediaPlayerMutedStore = module_560.create(() => ({ isMuted: false }));
const nativeEventEmitter = new NativeEventEmitter(NativeModules.MediaPlayerManager);
class MediaPlayerMuteManager {
  constructor() {
    return Object.assign({ muteSubscription: "Path" });
  }
  initialize() {
    let state;
    this.muteSubscription = nativeEventEmitter.addListener("MediaPlayerMuteStateChanged", (isMuted) => {
      isMuted = isMuted.isMuted;
      let obj = isMuted(closure_1[2]);
      obj.batchUpdates(() => {
        const obj = { isMuted };
        state.setState(obj);
      });
    });
  }
  terminate() {
    const muteSubscription = this.muteSubscription;
    if (muteSubscription != null) {
      muteSubscription.remove();
    }
  }
}
const prototype = MediaPlayerMuteManager.prototype;
const prototype2 = MediaPlayerMuteManager.prototype;
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaPlayerMuteManager.tsx");

export default Object.assign({ muteSubscription: "Path" });
export { useMediaPlayerMutedStore };

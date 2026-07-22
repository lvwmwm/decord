// Module ID: 8277
// Function ID: 65357
// Name: nativeEventEmitter
// Dependencies: []

// Module 8277 (nativeEventEmitter)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
let obj = arg1(dependencyMap[3]);
obj = obj.create(() => ({ isMuted: false }));
const nativeEventEmitter = new tmp2.NativeEventEmitter(tmp2.NativeModules.MediaPlayerManager);
let tmp5 = () => {
  class MediaPlayerMuteManager {
    constructor() {
      tmp = closure_2(this, MediaPlayerMuteManager);
      this.muteSubscription = undefined;
      return;
    }
  }
  const arg1 = MediaPlayerMuteManager;
  let obj = {
    key: "initialize",
    value() {
      this.muteSubscription = closure_5.addListener("MediaPlayerMuteStateChanged", (isMuted) => {
        isMuted = isMuted.isMuted;
        isMuted(closure_1[4]).batchUpdates(() => {
          state.setState({ isMuted });
        });
      });
    }
  };
  const items = [obj, ];
  obj = {
    key: "terminate",
    value() {
      const muteSubscription = this.muteSubscription;
      if (null != muteSubscription) {
        muteSubscription.remove();
      }
    }
  };
  items[1] = obj;
  return callback(MediaPlayerMuteManager, items);
}();
tmp5 = new tmp5();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/media_viewer/native/MediaPlayerMuteManager.tsx");

export default tmp5;
export const useMediaPlayerMutedStore = obj;

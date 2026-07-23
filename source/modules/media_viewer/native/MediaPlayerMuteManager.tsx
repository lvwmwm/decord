// Module ID: 8283
// Function ID: 65394
// Name: nativeEventEmitter
// Dependencies: [6, 7, 27, 621, 682, 2]

// Module 8283 (nativeEventEmitter)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import get_ActivityIndicator from "get ActivityIndicator";
import keys from "keys";

const require = arg1;
keys = keys.create(() => ({ isMuted: false }));
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(get_ActivityIndicator.NativeModules.MediaPlayerManager);
let tmp5 = (() => {
  class MediaPlayerMuteManager {
    constructor() {
      tmp = outer1_2(this, MediaPlayerMuteManager);
      this.muteSubscription = undefined;
      return;
    }
  }
  let obj = {
    key: "initialize",
    value() {
      this.muteSubscription = outer1_5.addListener("MediaPlayerMuteStateChanged", (isMuted) => {
        isMuted = isMuted.isMuted;
        MediaPlayerMuteManager(outer2_1[4]).batchUpdates(() => {
          outer3_4.setState({ isMuted });
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
})();
tmp5 = new tmp5();
const result = require("get ActivityIndicator").fileFinishedImporting("modules/media_viewer/native/MediaPlayerMuteManager.tsx");

export default tmp5;
export const useMediaPlayerMutedStore = keys;

// Module ID: 13544
// Function ID: 13545
// Name: VideoQualityModeStore
// Dependencies: [1086, 504, 585, 2]

// Module 13544 (VideoQualityModeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let mode = Constants.VideoQualityMode.AUTO;
const Store = get_initializedDefault.Store;
class VideoQualityModeStore extends Store {
}
Object.defineProperty(VideoQualityModeStore.prototype, "mode", {
  get: function mode() {
    return mode;
  },
  set: undefined
});
VideoQualityModeStore.displayName = "VideoQualityModeStore";
const obj = {
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(mode) {
    mode = mode.mode;
  }
};
const videoQualityModeStore = new VideoQualityModeStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/VideoQualityModeStore.tsx");

export default videoQualityModeStore;

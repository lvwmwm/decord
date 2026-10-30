// Module ID: 15840
// Function ID: 15841
// Name: VideoQualityModeStore
// Dependencies: [1072, 504, 572, 2]

// Module 15840 (VideoQualityModeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
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

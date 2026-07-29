// Module ID: 12886
// Function ID: 12887
// Name: mode
// Dependencies: [676, 589, 709, 2]

// Module 12886 (mode)
import { Store } from "initialize";

const AUTO = require("ME").VideoQualityMode.AUTO;
class VideoQualityModeStore extends Store {
}
Object.defineProperty(VideoQualityModeStore.prototype, "mode", {
  get: function mode(activeIndex, arg1) {
    return AUTO;
  },
  set: undefined
});
VideoQualityModeStore.displayName = "VideoQualityModeStore";
const videoQualityModeStore = new VideoQualityModeStore(require("dispatcher"), {
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(mode) {
    mode = mode.mode;
  }
});
const result = require("dispatcher").fileFinishedImporting("stores/VideoQualityModeStore.tsx");

export default videoQualityModeStore;

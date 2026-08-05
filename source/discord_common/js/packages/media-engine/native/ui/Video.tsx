// Module ID: 4355
// Function ID: 4356
// Name: Video
// Dependencies: [4356, 2]

// Module 4355 (Video)
class Video {
  constructor(arg0) {
    return require("logger")(global, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {

};
const result = require("set").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;

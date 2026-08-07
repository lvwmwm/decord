// Module ID: 4402
// Function ID: 4403
// Name: Video
// Dependencies: [4403, 2]

// Module 4402 (Video)
class Video {
  constructor(arg0) {
    return require("logger")(global, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {

};
const result = require("set").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;

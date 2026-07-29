// Module ID: 4290
// Function ID: 4291
// Name: Video
// Dependencies: [4291, 2]

// Module 4290 (Video)
class Video {
  constructor(arg0) {
    return require("logger")(global, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {

};
const result = require("set").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;

// Module ID: 4445
// Function ID: 4446
// Name: Video
// Dependencies: [4446, 2]

// Module 4445 (Video)
class Video {
  constructor(arg0) {
    return require("logger")(global, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {

};
const result = require("set").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;

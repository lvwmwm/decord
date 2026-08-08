// Module ID: 4404
// Function ID: 4405
// Name: Video
// Dependencies: [4405, 2]

// Module 4404 (Video)
class Video {
  constructor(arg0) {
    return require("logger")(global, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {

};
const result = require("set").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;

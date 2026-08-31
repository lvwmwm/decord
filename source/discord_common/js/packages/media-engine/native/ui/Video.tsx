// Module ID: 4551
// Function ID: 4552
// Name: Video
// Dependencies: [4552, 2]

// Module 4551 (Video)
import set from "set" /* 2 */;
import loggerDefault from "logger" /* 4552 */;

class Video {
  constructor(arg0) {
    return require("logger")(global, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {

};
const result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;

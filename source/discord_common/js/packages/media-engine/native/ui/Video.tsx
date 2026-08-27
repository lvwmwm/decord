// Module ID: 4548
// Function ID: 4549
// Name: Video
// Dependencies: [4549, 2]

// Module 4548 (Video)
import set from "set" /* 2 */;
import loggerDefault from "logger" /* 4549 */;

class Video {
  constructor(arg0) {
    return require("logger")(global, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {

};
const result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;

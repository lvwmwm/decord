// Module ID: 4583
// Function ID: 4584
// Name: Video
// Dependencies: [4584, 2]

// Module 4583 (Video)
import set from "set" /* 2 */;
import loggerDefault from "logger" /* 4584 */;

class Video {
  constructor(arg0) {
    return require("logger")(global, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {

};
const result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;

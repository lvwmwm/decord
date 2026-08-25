// Module ID: 4483
// Function ID: 4484
// Name: Video
// Dependencies: [4484, 2]

// Module 4483 (Video)
import set from "set" /* 2 */;
import loggerDefault from "logger" /* 4484 */;

class Video {
  constructor(arg0) {
    return require("logger")(global, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {

};
const result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;

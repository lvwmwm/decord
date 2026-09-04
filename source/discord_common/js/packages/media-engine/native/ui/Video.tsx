// Module ID: 4586
// Function ID: 4587
// Name: Video
// Dependencies: [4587, 2]

// Module 4586 (Video)
import set from "set" /* 2 */;
import loggerDefault from "logger" /* 4587 */;

class Video {
  constructor(arg0) {
    return require("logger")(global, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {

};
const result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;

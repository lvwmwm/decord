// Module ID: 6037
// Function ID: 6038
// Name: Video
// Dependencies: [6038, 2]

// Module 6037 (Video)
import DirectVideoDefault from "DirectVideo" /* 6038 */;
import size from "module_2" /* 2 */;

class Video {
  constructor(arg0) {
    return DirectVideoDefault(arg0, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {

};
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;

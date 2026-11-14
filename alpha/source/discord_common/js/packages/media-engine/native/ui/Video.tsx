// Module ID: 6100
// Function ID: 6101
// Name: Video
// Dependencies: [6101, 2]

// Module 6100 (Video)
import DirectVideoDefault from "DirectVideo" /* 6101 */;
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

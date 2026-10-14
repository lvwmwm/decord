// Module ID: 5145
// Function ID: 5146
// Name: Video
// Dependencies: [5146, 2]

// Module 5145 (Video)
import DirectVideoDefault from "DirectVideo" /* 5146 */;
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

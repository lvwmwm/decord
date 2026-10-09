// Module ID: 5140
// Function ID: 5141
// Name: Video
// Dependencies: [5141, 2]

// Module 5140 (Video)
import DirectVideoDefault from "DirectVideo" /* 5141 */;
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

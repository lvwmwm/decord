// Module ID: 5729
// Function ID: 5730
// Name: Video
// Dependencies: [5730, 2]

// Module 5729 (Video)
import DirectVideoDefault from "DirectVideo" /* 5730 */;
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

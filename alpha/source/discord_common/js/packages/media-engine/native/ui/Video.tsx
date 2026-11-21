// Module ID: 5683
// Function ID: 5684
// Name: Video
// Dependencies: [5684, 2]

// Module 5683 (Video)
import DirectVideoDefault from "DirectVideo" /* 5684 */;
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

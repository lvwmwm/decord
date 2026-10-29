// Module ID: 5781
// Function ID: 5782
// Name: Video
// Dependencies: [5782, 2]

// Module 5781 (Video)
import DirectVideoDefault from "DirectVideo" /* 5782 */;
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

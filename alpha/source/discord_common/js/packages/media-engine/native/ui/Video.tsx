// Module ID: 5562
// Function ID: 5563
// Name: Video
// Dependencies: [5563, 2]

// Module 5562 (Video)
import DirectVideoDefault from "DirectVideo" /* 5563 */;
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

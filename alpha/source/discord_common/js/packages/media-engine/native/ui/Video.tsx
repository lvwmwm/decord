// Module ID: 5564
// Function ID: 5565
// Name: Video
// Dependencies: [5565, 2]

// Module 5564 (Video)
import DirectVideoDefault from "DirectVideo" /* 5565 */;
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

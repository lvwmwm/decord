// Module ID: 5744
// Function ID: 5745
// Name: Video
// Dependencies: [5745, 2]

// Module 5744 (Video)
import DirectVideoDefault from "DirectVideo" /* 5745 */;
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

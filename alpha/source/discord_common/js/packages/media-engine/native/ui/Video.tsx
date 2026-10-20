// Module ID: 5704
// Function ID: 5705
// Name: Video
// Dependencies: [5705, 2]

// Module 5704 (Video)
import DirectVideoDefault from "DirectVideo" /* 5705 */;
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

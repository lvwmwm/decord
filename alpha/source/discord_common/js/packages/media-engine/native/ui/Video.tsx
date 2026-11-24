// Module ID: 5746
// Function ID: 5747
// Name: Video
// Dependencies: [5747, 2]

// Module 5746 (Video)
import DirectVideoDefault from "DirectVideo" /* 5747 */;
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

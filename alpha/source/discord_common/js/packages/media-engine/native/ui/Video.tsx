// Module ID: 6090
// Function ID: 6091
// Name: Video
// Dependencies: [6091, 2]

// Module 6090 (Video)
import DirectVideoDefault from "DirectVideo" /* 6091 */;
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

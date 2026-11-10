// Module ID: 5924
// Function ID: 5925
// Name: Video
// Dependencies: [5925, 2]

// Module 5924 (Video)
import DirectVideoDefault from "DirectVideo" /* 5925 */;
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

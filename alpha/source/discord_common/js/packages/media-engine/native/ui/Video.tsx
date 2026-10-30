// Module ID: 5788
// Function ID: 5789
// Name: Video
// Dependencies: [5789, 2]

// Module 5788 (Video)
import DirectVideoDefault from "DirectVideo" /* 5789 */;
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

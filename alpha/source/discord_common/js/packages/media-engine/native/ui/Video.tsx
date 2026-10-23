// Module ID: 5741
// Function ID: 5742
// Name: Video
// Dependencies: [5742, 2]

// Module 5741 (Video)
import DirectVideoDefault from "DirectVideo" /* 5742 */;
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

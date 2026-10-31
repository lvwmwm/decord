// Module ID: 5793
// Function ID: 5794
// Name: Video
// Dependencies: [5794, 2]

// Module 5793 (Video)
import DirectVideoDefault from "DirectVideo" /* 5794 */;
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

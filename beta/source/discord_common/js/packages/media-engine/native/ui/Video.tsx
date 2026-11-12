// Module ID: 5954
// Function ID: 5955
// Name: Video
// Dependencies: [5955, 2]

// Module 5954 (Video)
import DirectVideoDefault from "DirectVideo" /* 5955 */;
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

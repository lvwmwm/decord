// Module ID: 5872
// Function ID: 5873
// Name: Video
// Dependencies: [5873, 2]

// Module 5872 (Video)
import DirectVideoDefault from "DirectVideo" /* 5873 */;
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

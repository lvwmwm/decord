// Module ID: 5141
// Function ID: 5142
// Name: Video
// Dependencies: [5142, 2]

// Module 5141 (Video)
import DirectVideoDefault from "DirectVideo" /* 5142 */;
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

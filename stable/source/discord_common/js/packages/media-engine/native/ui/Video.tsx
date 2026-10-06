// Module ID: 4896
// Function ID: 4897
// Name: Video
// Dependencies: [4897, 2]

// Module 4896 (Video)
import DirectVideoDefault from "DirectVideo" /* 4897 */;
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

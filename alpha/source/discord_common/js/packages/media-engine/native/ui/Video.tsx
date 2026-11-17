// Module ID: 6097
// Function ID: 6098
// Name: Video
// Dependencies: [6098, 2]

// Module 6097 (Video)
import DirectVideoDefault from "DirectVideo" /* 6098 */;
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

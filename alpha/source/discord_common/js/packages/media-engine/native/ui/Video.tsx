// Module ID: 5949
// Function ID: 5950
// Name: Video
// Dependencies: [5950, 2]

// Module 5949 (Video)
import DirectVideoDefault from "DirectVideo" /* 5950 */;
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

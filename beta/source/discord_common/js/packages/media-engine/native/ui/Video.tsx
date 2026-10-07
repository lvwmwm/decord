// Module ID: 4949
// Function ID: 4950
// Name: Video
// Dependencies: [4950, 2]

// Module 4949 (Video)
import DirectVideoDefault from "DirectVideo" /* 4950 */;
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

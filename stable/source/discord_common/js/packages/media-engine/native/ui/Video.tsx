// Module ID: 5240
// Function ID: 5241
// Name: Video
// Dependencies: [5241, 2]

// Module 5240 (Video)
import DirectVideoDefault from "DirectVideo" /* 5241 */;
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

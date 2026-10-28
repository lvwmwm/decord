// Module ID: 5779
// Function ID: 5780
// Name: Video
// Dependencies: [5780, 2]

// Module 5779 (Video)
import DirectVideoDefault from "DirectVideo" /* 5780 */;
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

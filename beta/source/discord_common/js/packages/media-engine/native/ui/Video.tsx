// Module ID: 5775
// Function ID: 5776
// Name: Video
// Dependencies: [5776, 2]

// Module 5775 (Video)
import DirectVideoDefault from "DirectVideo" /* 5776 */;
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

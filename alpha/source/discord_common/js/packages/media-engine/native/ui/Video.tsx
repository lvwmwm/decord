// Module ID: 5930
// Function ID: 5931
// Name: Video
// Dependencies: [5931, 2]

// Module 5930 (Video)
import DirectVideoDefault from "DirectVideo" /* 5931 */;
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

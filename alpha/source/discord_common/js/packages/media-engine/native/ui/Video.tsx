// Module ID: 5913
// Function ID: 5914
// Name: Video
// Dependencies: [5914, 2]

// Module 5913 (Video)
import DirectVideoDefault from "DirectVideo" /* 5914 */;
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

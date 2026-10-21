// Module ID: 5724
// Function ID: 5725
// Name: Video
// Dependencies: [5725, 2]

// Module 5724 (Video)
import DirectVideoDefault from "DirectVideo" /* 5725 */;
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

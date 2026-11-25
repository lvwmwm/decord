// Module ID: 5841
// Function ID: 5842
// Name: Video
// Dependencies: [5842, 2]

// Module 5841 (Video)
import DirectVideoDefault from "DirectVideo" /* 5842 */;
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

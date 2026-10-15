// Module ID: 5200
// Function ID: 5201
// Name: Video
// Dependencies: [5201, 2]

// Module 5200 (Video)
import DirectVideoDefault from "DirectVideo" /* 5201 */;
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

// Module ID: 16513
// Function ID: 16514
// Name: useSelfHasVideo
// Dependencies: [4460, 1218, 4495, 589, 10866, 2]
// Exports: default

// Module 16513 (useSelfHasVideo)
import closure_2 from "getParticipants" /* 4460 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "_detectH265HardwareDecode" /* 4495 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3, closure_4];
  return _require(589).useStateFromStores(items, () => {
    const participant = closure_1_2.getParticipant(callback, closure_1_3.getId());
    return callback(closure_1_1[4]).canRenderParticipantVideo(participant, closure_1_4);
  });
};

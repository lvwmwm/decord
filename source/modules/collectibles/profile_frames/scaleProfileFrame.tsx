// Module ID: 8564
// Function ID: 8565
// Name: scaleProfileFrame
// Dependencies: [2]
// Exports: default

// Module 8564 (scaleProfileFrame)
import set from "set" /* 2 */;

let result = set.fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth) {
  const result = arg1 / innerWidth.innerWidth;
  return { overflowTop: innerWidth.overflowTop * result, overflowBottom: innerWidth.overflowBottom * result, overflowHorizontal: innerWidth.overflowHorizontal * result };
};
